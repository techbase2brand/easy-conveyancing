import { memo } from 'react';
import Banner from '../../component/Banner';

import FamilyTransfers from '@/app/component/FamilyTransfers';
import PlaningCta from '@/app/component/PlaningCta';
import Testimonials from '@/app/component/Testimonials';
import OurProcess from '@/app/component/OurProcess';

const Page = () => {
  const item = [
    "Spouse transfers",
    "Divorce settlements",
    "Estate planning",
    "Gifts between family members",
  ];

  const OurServices = [
    "Transfer documentation preparation",
    "Stamp duty guidance",
    "Title transfer registration",
    "Liaising with financial institutions",
    "Legal compliance checks",
  ];
  return (
    <>
        <Banner
            title="Family Transfers"
            subheading="Property Transfers Between Family Members"
            description="Transferring property to a spouse or family member? We make the legal process simple and affordable."
            buttonText="Chat With Us"
            buttonUrl="https://wa.me/61433101353"
            imageUrl="/family-transfer.png"
        />
        <FamilyTransfers
          title=""
          subheading="What is a Family Transfer?"
          description="A family transfer involves changing property ownership between related parties without a traditional sale."
          readMoreText=""
          readMoreUrl="/"
          itemHeading="Common situations include:"
          item={item}
          imageUrl="/what-is-family.png"
          content=""
          services={OurServices}
          servicesTitle="Our Services Include"
        />
        <PlaningCta
          title="Need Help With a Family Property Transfer?"
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