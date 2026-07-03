import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function getMailTransporter() {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASSWORD?.trim();

  if (!user || !pass) {
    throw new Error(
      'Email is not configured. Set EMAIL_USER and EMAIL_PASSWORD in your hosting environment variables.'
    );
  }

  const host = process.env.SMTP_HOST?.trim();
  if (host) {
    const port = Number(process.env.SMTP_PORT || 587);
    return nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === 'true' || port === 465,
      auth: { user, pass },
    });
  }

  return nodemailer.createTransport({
    service: process.env.SMTP_SERVICE?.trim() || 'gmail',
    auth: { user, pass },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phoneNumber, emailAddress, serviceRequired, propertyAddress, message } = body;

    // Validation
    if (!name || !emailAddress || !message) {
      return NextResponse.json(
        { error: 'Name, Email, and Message are required fields' },
        { status: 400 }
      );
    }

    const transporter = getMailTransporter();

    // Email content
    const mailOptions = {
      from: `"Eazy Conveyancing Website" <info@easyconveyancing.com.au>`,
      to: 'info@easyconveyancing.com.au',
      replyTo: emailAddress,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; }
            h2 { color:#ab090f; }
            table { width: 100%; border-collapse: collapse; }
            td { padding: 10px; border: 1px solid #ddd; }
            .label { font-weight: bold; background-color: #f5f5f5; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>📬 New Contact Form Submission</h2>
            <table>
              <tr><td class="label">Name:</td><td>${name}</td></tr>
              <tr><td class="label">Phone Number:</td><td>${phoneNumber || 'Not provided'}</td></tr>
              <tr><td class="label">Email Address:</td><td>${emailAddress}</td></tr>
              <tr><td class="label">Service Required:</td><td>${serviceRequired || 'Not specified'}</td></tr>
              <tr><td class="label">Property Address:</td><td>${propertyAddress || 'Not provided'}</td></tr>
              <tr><td class="label">Message:</td><td>${message.replace(/\n/g, '<br>')}</td></tr>
            </table>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        --------------------------
        Name: ${name}
        Phone Number: ${phoneNumber || 'Not provided'}
        Email Address: ${emailAddress}
        Service Required: ${serviceRequired || 'Not specified'}
        Property Address: ${propertyAddress || 'Not provided'}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error sending email:', errorMessage);
    console.error('Full error:', error);

    const isConfigError = errorMessage.includes('Email is not configured');
    return NextResponse.json(
      {
        error: isConfigError
          ? 'Contact form is temporarily unavailable. Please try again later or email us directly.'
          : 'Failed to send message. Please try again later or email us directly.',
      },
      { status: 500 }
    );
  }
}