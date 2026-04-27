import { memo } from 'react';
import Testimonials from '../component/Testimonials';
import OurProcess from '../component/OurProcess';
import WhyClientChoose from '../component/WhyClientChoose';
import ContactBanner from '../component/ContactBanner';

export const metadata = {
  title: "Contact Eazy Conveyancing | Get a Free Property Quote",
  description:
    "Contact Eazy Conveyancing for expert property settlement services and quick enquiries.",
  openGraph: {
    title: "Contact Eazy Conveyancing",
    description:
      "Reach out for stress-free property settlement and conveyancing services.",
    type: "website",
  },
};

const Page = () => {
    const WhyItem = [
        "Friendly professional advice",
        "No obligation quotes",      
        "Quick response times",
        "Clear guidance from start to settlement",
    ];
    return (
        <>  
            <ContactBanner 
                title="Contact Us"
                subtitle="Get in Touch With Eazy Conveyancing"
                description="Have a question about buying or selling property?We’re here to help."
                heading="Quick Enquiry Form"
                subheading="Let’s Make Your Property Transaction Easy"
                subdescription="We respond quickly — usually within the same business day."
            />
                <WhyClientChoose 
                    title="Why Us ?"
                    description="Why Clients Choose Eazy Conveyancing"
                    imageUrl="/why-client-choose.png"
                    item={WhyItem}
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