import Banner from '@/app/component/Banner';
import CTA from '@/app/component/CTA';
import OurProcess from '@/app/component/OurProcess';
import PlaningCta from '@/app/component/PlaningCta';
import Testimonials from '@/app/component/Testimonials';
import WhatIsLanding from '@/app/component/WhatIsLanding';

export const metadata = {
  title: "Land Division & Subdivision Conveyancing | Eazy Conveyancing",
  description:
    "Expert land division and subdivision conveyancing services. Get professional help with planning approvals and land title registration.",
  keywords: [
    "Land Division",
    "Subdivision Conveyancing",
    "Land Title Registration",
    "Property Subdivision Services",
  ],
};

const items = [
  "Title division applications",
  "Liaison with surveyors",
  "Council approval coordination",
  "Land Titles Office registration",
  "Compliance documentation",
];


const ideaFor = [
  "Property developers",
  "Investors",
  "Dual occupancy projects",
  "Land Titles Office registration",
  "Compliance documentation",
];

const OurSimple = [
  "Initial consultation",
  "Documentation preparation",
  "Authority approvals",
  "Title registration completion",
];




const Page = () => {
  return (
    <>
      <Banner
        title="Land Divisions"
        subheading="Land Division & Subdivision Conveyancing"
        description="Planning to subdivide land? We guide you through legal approvals and registration."
        buttonText="Chat With Us"
        buttonUrl="https://wa.me/61433101353"
        imageUrl="/land-divison.png"
      />

      <WhatIsLanding 
        title="What is Land Division?"
        description="Land division (subdivision) involves splitting land into separate titles for development, sale, or investment. This process requires coordination with councils, surveyors, and government authorities."
        ourLandImage="/land-division-2.png"
        subheading="Our Land Division Services"
        services={items}   // ✅ correct

        ideaTitle="Ideal For"
        ideaList={ideaFor}
        ideaImage="/land-division-3.png"
        processTitle="Our Simple Process"
        processList={OurSimple}
      />

      <PlaningCta
        title="Planning a Land Subdivision?"
        description="Let us prepare everything correctly from the start."
        whatsappNumber="61433101353"
        buttonText="Chat With Us"
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