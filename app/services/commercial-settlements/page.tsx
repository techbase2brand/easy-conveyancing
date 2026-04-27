import Banner from '@/app/component/Banner';
import FamilyTransfers from '@/app/component/FamilyTransfers';
import OurProcess from '@/app/component/OurProcess';
import PlaningCta from '@/app/component/PlaningCta';

import Testimonials from '@/app/component/Testimonials';

const Page = () => {
    const item = [
        "Retail property settlements",
        "Industrial property transfers",
        "Office and warehouse transactions",
        "Leasehold transfers",
        "Business property purchases",
    ];

    const OurServices = [
        "GST considerations",
        "Lease agreements",
        "Business structures",
        "Financial negotiations",
        "Due diligence requirements",
    ];
  return (
    <>
      <Banner
        title="Commercial Settlements"
        subheading="Commercial Property Conveyancing Experts"
        description="Commercial transactions require specialist knowledge. We handle complex settlements with precision."
        buttonText="Chat With Us"
        buttonUrl="https://wa.me/61433101353"
        imageUrl="/commercial-settlements-banner.png"
      />
        <FamilyTransfers
            title=""
            subheading="Commercial Conveyancing Services"
            description=""
            readMoreText=""
            readMoreUrl="/"
            itemHeading="We assist with:"
            item={item}
            imageUrl="/commercial.png"
            content="Our experience ensures nothing is overlooked."
            services={OurServices}
            servicesTitle="Commercial transactions involve:"
        />
      <PlaningCta
        title="Buying or Selling Commercial Property?"
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

export default Page;