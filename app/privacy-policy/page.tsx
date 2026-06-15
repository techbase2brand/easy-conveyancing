import { memo } from 'react';

export const metadata = {
  title: "Privacy Policy",
  description:
    "Eazy Conveyancing is committed to protecting your privacy and ensuring that your personal information is handled with care, transparency, and security.", 
};
const Page = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8 '>
      <div className='max-w-[1320px] mx-auto pb-10 md:pb-14'>
        <h2 className='text-[24px] md:text-[40px] font-bold text-black text-center my-4 md:my-7'>Privacy Policy</h2>
        <p className='text-black text-[15px] md:text-base'>Eazy Conveyancing is committed to protecting your privacy and ensuring that your personal information is handled with care, transparency, and security. This Privacy Policy explains how we collect, use, and protect your information when you access our website or use our conveyancing services.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>Information We Collect</h3>
        <p className='text-black text-[15px] md:text-base'>When you engage with Eazy Conveyancing, we may collect personal information such as your name, contact details, identification information, and property-related data necessary to complete legal transactions. This may include details required for settlement of sale and purchase, private contracts and Form 1 preparation, commercial settlements, family transfers, land divisions, ownership transfers, and change of name applications.</p>
        <p>We may also collect general website usage data such as your IP address, browser type, and pages visited to help us improve our services and user experience.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>How We Use Your Information</h3>
        <p className='text-black text-[15px] md:text-base'>The information we collect is used to deliver our services efficiently and in compliance with legal requirements. This includes preparing documentation, coordinating with relevant parties, and managing property transactions on your behalf. Your information may also be used to communicate with you, provide updates on your matters, and improve the functionality and performance of our website.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>Sharing of Information</h3>
        <p className='text-black text-[15px] md:text-base'>Eazy Conveyancing does not sell or rent your personal information. However, we may share your information with relevant third parties where necessary to complete your transaction. This may include government authorities, financial institutions, legal representatives, and other professionals involved in the conveyancing process. All such disclosures are made in accordance with legal obligations and with appropriate safeguards.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>Data Security</h3>
        <p className='text-black text-[15px] md:text-base'>We take reasonable steps to protect your personal information from unauthorized access, loss, misuse, or disclosure. Our systems are designed to maintain the confidentiality and integrity of your data, and access is restricted to authorized personnel only.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>Cookies and Website Usage</h3>
        <p className='text-black text-[15px] md:text-base'>Our website may use cookies and similar technologies to enhance your browsing experience. These tools help us understand how visitors use our site and allow us to make improvements. You may adjust your browser settings to disable cookies, although this may affect certain features of the website.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>Data Retention</h3>
        <p className='text-black text-[15px] md:text-base'>We retain personal information only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal and regulatory requirements. Once the information is no longer required, it is securely removed or de-identified.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>Your Rights</h3>
        <p className='text-black text-[15px] md:text-base'>You have the right to access the personal information we hold about you and to request corrections if any information is inaccurate or incomplete. Where applicable, you may also request that your information be deleted or that its use be restricted, subject to legal obligations.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>Third-Party Links</h3>
        <p className='text-black text-[15px] md:text-base'>Our website may contain links to external websites. Eazy Conveyancing is not responsible for the privacy practices of those sites, and we encourage you to review their policies before providing any personal information.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>Updates to This Policy</h3>
        <p className='text-black text-[15px] md:text-base'>This Privacy Policy may be updated from time to time to reflect changes in our practices or legal requirements. Any updates will be published on this page.</p>
        <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold my-2 md:my-3'>Contact Us</h3>
        <p className='text-black text-[15px] md:text-base'>If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact Eazy Conveyancing:</p>
        <p className='text-black text-[15px] md:text-base'>By using our website and services, you agree to the terms outlined in this Privacy Policy.</p>
        <p className='text-black text-[15px] md:text-base'>Email: <a href="mailto:info@eazyconveyancing.com.au">info@eazyconveyancing.com.au</a></p>
        <p className='text-black text-[15px] md:text-base'>Phone: <a href="tel:0433101353">0433 101 353</a></p>
      </div>
    </div>
  );
};

export default memo(Page);