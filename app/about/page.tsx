import { memo } from 'react';
import Banner from '../component/Banner';
import WhoWeAre from '../component/WhoWeAre';
import CTA from '../component/CTA';
import OurProcess from '../component/OurProcess';
import Testimonials from '../component/Testimonials';
import WhoWeHelp from '../component/WhoWeHelp';
import OurMission from '../component/OurMission';
import WhyClientChoose from '../component/WhyClientChoose';

export const metadata = {
  title: "About Eazy Conveyancing | Experienced Registered Conveyancers",
  description:
    "Learn about Eazy Conveyancing, led by experienced registered conveyancers. We provide professional, stress-free property settlement services.",
  keywords: [
    "About Conveyancing",
    "Registered Conveyancer",
    "Property Settlement Experts",
    "Real Estate Legal Services",
  ],
};


const Page = () => {
    const item = [
        "Personalised one-on-one service",
        "Clear communication at every stage",
        "Fast response times",
        "Transparent pricing — no surprises",
        "Local knowledge of South Australian property processes",
        "Direct access via WhatsApp and phone",
    ];

    const WhoItem = [
        "First home buyers",
        "Property sellers",
        "Investors",
        "Families transferring property",
        "Developers and commercial clients",
    ];

    const ourMissionItem = [  
        "Easy to understand",
        "Efficiently managed",
        "Professionally handled",
        "Completely stress-free",
    ];

    const WhyItem = [
        "Trusted Registered Conveyancer",
        "Friendly and approachable service",      
        "Smooth settlements",
        "Reliable communication",
        "Focus on protecting your interests",
    ];

    

  return (
    <>
        <Banner
            title="About Us"
            subheading="Led By Experience Registered Conveyancer, Provide Professional Services"
            description="At Eazy Conveyancing, we make property transactions simple, stress-free, and easy to understand. Whether you're buying, selling, transferring property, or managing land division, we guide you through every legal step with confidence and clarity."
            buttonText="Chat With Us"
            buttonUrl="https://wa.me/61433101353"
            imageUrl="/about-us.png"
        />
        <WhoWeAre 
            title=""
            subheading="Who We Are"
            description="Eazy Conveyancing is led by Registered Conveyancer Sukhvinder Sidhu, providing professional conveyancing services across South Australia. We understand that property transactions can feel overwhelming. Our goal is to remove confusion, handle the legal complexities, and keep your settlement running smoothly from start to finish.You receive personalised service — not a call centre experience."
            readMoreText=""
            readMoreUrl=""
            itemHeading="What Makes Us Different"
            item={item}
            imageUrl="/who-we-are.png"
            content=""
        />
        <WhoWeHelp 
            title="Who We Help"
            description="No matter the transaction size, every client receives the same level of care and professionalism."
            item={WhoItem}
        />
        <OurMission 
            title="Our Mission"
            description="To provide simple, transparent, and reliable conveyancing services while delivering exceptional customer communication and fast support throughout every transaction."
            title2="Our Approach"
            ourMissionContent="To provide simple, transparent, and reliable conveyancing services while delivering exceptional customer communication and fast support throughout every transaction."
            subheading="We believe conveyancing should be:"
            item={ourMissionItem}
            itemContent="From contract review to settlement day, we keep you informed and supported."
            imageUrl="/3d-house-property-illustration 1.png"
        />
        <WhyClientChoose 
            title="Why Us ?"
            description="Why Clients Choose Eazy Conveyancing"
            imageUrl="/why-client-choose.png"
            item={WhyItem}
        />
        <CTA
            title="Need Help With Your Property Transaction?"
            description="Let us prepare everything correctly from the start."
            whatsappNumber="61433101353"
        />
        <OurProcess
            title="Our Process"
            subheading="How Our Conveyancing Process Works"
            description="We keep the property settlement process simple and transparent."
        />
        <Testimonials
            title="Testimonials"
            description="Clients trust Eazy Conveyancing to guide them through important property transactions."
            imageUrl="/testimonials.png"
        />
    </>
  );
};

export default memo(Page);