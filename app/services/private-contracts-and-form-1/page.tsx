import Banner from '@/app/component/Banner';
import FamilyTransfers from '@/app/component/FamilyTransfers';
import OurProcess from '@/app/component/OurProcess';
import PlaningCta from '@/app/component/PlaningCta';
import Testimonials from '@/app/component/Testimonials';
import { memo } from 'react';

const Page = () => {
    const item = [
        "Contract drafting for private sales",
        "Form 1 preparation",
        "Title and council searches",
        "Vendor disclosure compliance",
        "Legal review before signing",
    ];

    const OurServices = [
        "Private property sales",
        "Family transfers",
        "Off-market transactions",
        "Property investors",
    ];
    return (
        <>
            <Banner
                title="Private Contracts and Form 1"
                subheading="Private Sale Contracts & Form 1 Preparation"
                description="Selling property privately? We prepare legally compliant contracts and disclosure documents."
                buttonText="Chat With Us"
                buttonUrl="https://wa.me/61433101353"
                imageUrl="/private-contracts-banner.png"
            />
            <FamilyTransfers
                title=""
                subheading="What is Form 1?"
                description="Form 1 is a mandatory disclosure document required when selling property in South Australia. It provides buyers with important legal and property information before settlement.Incorrect preparation can delay or cancel a sale."
                readMoreText=""
                readMoreUrl="/"
                itemHeading="Our Services"
                item={item}
                imageUrl="/whatr-is-form-1.png"
                content=""
                services={OurServices}
                servicesTitle="Ideal For"
            />
            <PlaningCta
                title="Planning a Private Sale?"
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