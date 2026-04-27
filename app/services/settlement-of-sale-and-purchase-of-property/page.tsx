import Banner from '@/app/component/Banner';
import FamilyTransfers from '@/app/component/FamilyTransfers';
import OurProcess from '@/app/component/OurProcess';
import PlaningCta from '@/app/component/PlaningCta';
import Testimonials from '@/app/component/Testimonials';
import WhatIsLanding from '@/app/component/WhatIsLanding';

import { memo } from 'react';

export const metadata = {
  title: "Property Settlement Made Easy & Stress-Free | Eazy Conveyancing",
  description:
    "Buying or selling a property? We ensure your settlement process is smooth, compliant, and completed on time. Open Mon-Sun 8am-8pm.",
  keywords: [
    "Property Settlement",
    "Easy Property Settlement",
    "Settlement of Sale and Purchase of Property",
    "Stress Free Conveyancing",
    "Property Settlement Services",
  ],
};

const Page = () => {
    const items = [
  "Contract review before signing",
  "Title searches and legal checks",
  "Liaising with banks and real estate agents",
  "Calculating settlement adjustments",
  "Electronic settlement processing",
  "Ownership transfer registration",
];


const ideaFor = [
  "Contract review before signing",
  "Title searches and legal checks",
  "Liaising with banks and real estate agents",
  "Calculating settlement adjustments",
  "Compliance documentation",
];

const OurSimple = [
  "Prepare legal documents",
  "Meet disclosure obligations",
  "Coordinate with purchaser representatives",
  "Finalise settlement smoothly",
];

    return (
        <>
            <Banner
                title="Settlement of Sale and Purchase of Property"
                subheading="Property Settlement Made Easy & Stress-Free"
                description="Buying or selling a property?Eazy Conveyancing ensures your settlement process is smooth, compliant, and completed on time."
                buttonText="Chat With Us"
                buttonUrl="https://wa.me/61433101353"
                imageUrl="/settlement-of-sale.png"
            />
            <WhatIsLanding 
                    title="What is Property Settlement?"
                    description="Settlement is the final legal transfer of property ownership between buyer and seller. It involves legal checks, financial adjustments, and coordination with banks, agents, and government authorities. At Eazy Conveyancing, we manage the entire settlement process so you can focus on your move — not paperwork."
                    ourLandImage="/our-settlement.png"
                    subheading="Our Settlement Services Include"
                    subtitle2="We help you:"
                    services={items}   // ✅ correct
            
                    ideaTitle="For Buyers"
                    ideaList={ideaFor}
                    ideaImage="/for-buyer.png"
                    processTitle="For Sellers"
                    subtitle1="We ensure you:"
                    processList={OurSimple}
            />
            <PlaningCta
                title="Buying or Selling Property?"
                description="Get professional settlement support today."
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