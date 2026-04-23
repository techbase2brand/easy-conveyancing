import Image from "next/image";
import Banner from "./component/Banner";
import Counter from "./component/Counter";
import AboutHome from "./component/AboutHome";
import ServicesSection from "./component/ServicesSection";
import CTA from "./component/CTA";
import WhyUs from "./component/WhyUs";
import OurProcess from "./component/OurProcess";
import Testimonials from "./component/Testimonials";


export default function page() {
  const servicesData = [
    "Settlement of Sale and Purchase",
    "Private Contracts and Form 1",
    "Commercial Settlements",
    "Family Transfers",
    "Land Divisions",
    "Ownership Transfers (Matrimony, Family)",
    "Change of Name applications",
  ];

  const item = [
    "Registered and experienced conveyancer",
    "Clear communication throughout the process",
    "Personalised and friendly service",
    "Transparent and competitive pricing",
    "Efficient settlement coordination",
  ];


  const OurProcessData = [
    {
      id:1,
      icon:((
        <svg width={104} height={107} viewBox="0 0 104 107" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M38.4473 22.3779H96.1825L61.8908 46.5643L38.5651 30.1124C39.4532 27.6658 39.4607 24.9003 38.4473 22.3779ZM23.3476 36.4158L31.7631 31.1439C34.2605 29.5795 35.0894 26.2416 33.6273 23.6362L26.0299 10.0973C25.2505 8.70822 24.0707 7.8146 22.5501 7.46141C21.0293 7.10802 19.5912 7.39329 18.307 8.30299L4.45149 18.1177C-2.14378 42.0264 27.494 93.7876 50.2245 99.6856L65.4138 92.2476C66.8214 91.5584 67.7808 90.4194 68.2437 88.8878C68.7066 87.3561 68.5443 85.8583 67.7647 84.4692L60.1673 70.9304C58.7054 68.325 55.4812 67.3946 52.9155 68.8376L44.2703 73.6999C35.7207 65.8769 25.6579 47.945 23.3476 36.4158ZM100.376 25.4884L63.2619 51.6654C62.3935 52.2752 61.2777 52.2275 60.4707 51.6309L35.8317 34.2528C35.3649 34.6856 34.8536 35.0802 34.2983 35.4281L28.9756 38.7623C31.772 48.0474 38.6915 60.3779 45.109 67.512L50.5769 64.4366C55.4625 61.6889 61.605 63.4615 64.3888 68.4226L69.1005 76.8187H96.5443C98.7112 76.8187 100.484 74.9947 100.484 72.7653V26.4313C100.484 26.107 100.447 25.7912 100.376 25.4884Z"fill="white"/>
        </svg>
      )),
      title:"1. Contact Us",
      content:"Call, email, or send us a message through WhatsApp to discuss your property transaction."
    },
    {
      id:2,
      icon:((
        <svg width={95}  height={96} viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M54.6993 62.5652C54.0932 65.0774 55.9123 67.5373 58.4102 67.5002C59.6644 67.6033 61.6622 66.313 62.7891 65.8052C65.3571 64.5152 67.6727 62.5952 69.4688 60.2552L83.2587 42.9602L73.2688 33.9902L58.9594 51.9452C56.5021 55.0102 55.3405 58.7983 54.6993 62.5652Z" fill="white"/>
          <path d="M88.1875 25.83C85.1491 23.3778 80.5452 24.6447 78.257 27.7351L75.125 31.65L85.1297 40.62L88.7664 36.06C91.3492 32.7 91.082 28.11 88.1875 25.83Z" fill="white"/>
          <path d="M85.9609 85.5C82.6805 85.5 80.0234 82.815 80.0234 79.5V51.795L71.7852 62.13C69.7516 64.785 67.0797 66.99 64.1109 68.49L61.6766 69.705C58.6291 71.3132 54.6617 70.4019 52.8 67.5H31.1281C29.1811 67.4631 29.176 64.5378 31.1281 64.5H51.6867C51.6245 59.429 53.5515 54.1792 56.6147 50.0998C56.6148 50.1 75.9414 25.86 75.9414 25.86C77.04 24.435 78.45 23.295 80.0234 22.56V16.5C80.0234 11.535 76.0453 7.5 71.132 7.5H13.3453C12.618 7.5 11.9055 7.59 11.2227 7.77C15.7086 8.77785 19.0924 12.8085 19.268 17.475V79.5C19.268 84.465 23.2609 88.5 28.1594 88.5H85.9609C87.8813 88.4516 87.9399 85.5533 85.9609 85.5ZM31.1281 22.5H57.8023C59.7457 22.5357 59.7576 25.4618 57.8023 25.5H31.1281C29.1867 25.4649 29.1713 22.5384 31.1281 22.5ZM31.1281 36.495H57.8023C59.7476 36.5301 59.7574 39.4674 57.8023 39.495H31.1281C29.187 39.4704 29.1693 36.5328 31.1281 36.495ZM31.1281 50.505H48.9109C50.8552 50.5305 50.8672 53.4675 48.9109 53.505H31.1281C29.1818 53.4694 29.1739 50.5326 31.1281 50.505Z" fill="white"/>
          <path d="M9.66328 10.5451C8.48899 10.3954 7.23885 10.6128 6.20469 11.1601C4.45312 12.0001 4.45312 13.5001 4.45312 16.5001V42.0001C4.45312 42.8251 5.12109 43.5001 5.9375 43.5001H16.3281V18.0001C16.3281 14.1151 13.4039 10.9201 9.66328 10.5451Z" fill="white"/>
        </svg>
      )),
      title:"2. -Contract/Pre-sale",
      content:"The stage before finalizing a property deal where is agreed between buyer and seller."
    },
    {
      id:3,
      icon:((
        <svg width={104} height={107} viewBox="0 0 104 107" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M38.4473 22.3779H96.1825L61.8908 46.5643L38.5651 30.1124C39.4532 27.6658 39.4607 24.9003 38.4473 22.3779ZM23.3476 36.4158L31.7631 31.1439C34.2605 29.5795 35.0894 26.2416 33.6273 23.6362L26.0299 10.0973C25.2505 8.70822 24.0707 7.8146 22.5501 7.46141C21.0293 7.10802 19.5912 7.39329 18.307 8.30299L4.45149 18.1177C-2.14378 42.0264 27.494 93.7876 50.2245 99.6856L65.4138 92.2476C66.8214 91.5584 67.7808 90.4194 68.2437 88.8878C68.7066 87.3561 68.5443 85.8583 67.7647 84.4692L60.1673 70.9304C58.7054 68.325 55.4812 67.3946 52.9155 68.8376L44.2703 73.6999C35.7207 65.8769 25.6579 47.945 23.3476 36.4158ZM100.376 25.4884L63.2619 51.6654C62.3935 52.2752 61.2777 52.2275 60.4707 51.6309L35.8317 34.2528C35.3649 34.6856 34.8536 35.0802 34.2983 35.4281L28.9756 38.7623C31.772 48.0474 38.6915 60.3779 45.109 67.512L50.5769 64.4366C55.4625 61.6889 61.605 63.4615 64.3888 68.4226L69.1005 76.8187H96.5443C98.7112 76.8187 100.484 74.9947 100.484 72.7653V26.4313C100.484 26.107 100.447 25.7912 100.376 25.4884Z"fill="white"/>
        </svg>
      )),
      title:"3. Contract Review",
      content:"We review contracts and explain important legal conditions."
    }
  ]


  return (
   <>
      <Banner
        title="Eazy Conveyancing"
        subheading="Stress-Free Property Settlements"
        description="From contract review to final settlement, we handle the entire conveyancing process with precision and care."
        buttonText="Chat With Us"
        buttonUrl="https://wa.me/61433101353"
        imageUrl="/banner.png"
      />
      <Counter />

      <AboutHome 
        title="About"
        subheading="About Eazy Conveyancing"
        description="At Eazy Conveyancing, we make property settlements simple and stress-free. Led by Registered Conveyancer Sukhvinder Sidhu, we provide professional conveyancing services for property buyers, sellers, and investors across South Australia."
        readMoreText="Read More"
        readMoreUrl="/"
        imageUrl1="/about-gallery-one.png"
        imageUrl2="/about-gallery-two.png"
        imageContent="Our goal is to provide clear communication, reliable service, and peace of mind throughout the settlement process."
        AboutLogo="/about-easy-logo.png"
     />
     <ServicesSection services={servicesData} imageUrl="/about-sec.png" />
    <WhyUs 
      title="Why Us ?"
      subheading="Why Choose Eazy Conveyancing"
      description="Choosing the right conveyancer can make the settlement process smooth and stress-free."
      readMoreText="Read More"
      readMoreUrl="/"
      itemHeading="At Eazy Conveyancing you receive:"
      item={item}
      imageUrl="/why-choose.png"
      content="We work closely with buyers, sellers, real estate agents, and lenders to ensure every transaction runs smoothly."
    />
    <CTA
      title="Buying a Property?"
      description="Before signing a contract, it is important to understand the terms and conditions. We offer a contract review service to help you understand key clauses and obligations before proceeding with your purchase."
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
}
