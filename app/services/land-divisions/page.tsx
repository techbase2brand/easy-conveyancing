import Banner from '@/app/component/Banner';
import CTA from '@/app/component/CTA';
import OurProcess from '@/app/component/OurProcess';
import Testimonials from '@/app/component/Testimonials';
import { memo } from 'react';

const Page = () => {
  return (
    <>
        <Banner
            title="Land Divisions"
            subheading="Land Division & Subdivision Conveyancing"
            description="Planning to subdivide land? We guide you through legal approvals and registration."
            buttonText="Chat With Us"
            buttonUrl="https://wa.me/61433101353"
            imageUrl="/land-divison.png"
        />
        <CTA
            title="Planning a Land Subdivision?"
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