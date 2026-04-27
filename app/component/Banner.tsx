import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

type BannerProps = {
  title?: string;
  subheading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  imageUrl?: string;
};

const Banner = ({
  title,
  subheading,
  description,
  buttonText,
  buttonUrl,
  imageUrl,
}: BannerProps) => {
  const whatsapIcon = (
    <svg width={36} height={36} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px]">
      <path d="M17.0399 3C16.7399 3 16.1399 3 15.5999 3C14.3999 3.06 12.8399 3.12 12.1799 3.3C11.0999 3.54 10.0799 3.84 9.23992 4.26C8.27992 4.74 7.37992 5.4 6.59992 6.18C5.81992 6.96 5.21992 7.8 4.67992 8.82C4.25992 9.66 3.89992 10.68 3.71992 11.7C3.59992 12.42 3.47992 13.98 3.41992 15.18V16.62V42.96V44.4C3.47992 45.6 3.53992 47.16 3.71992 47.82C3.95992 48.9 4.25992 49.92 4.67992 50.76C5.15992 51.72 5.81992 52.62 6.59992 53.4C7.37992 54.18 8.21992 54.78 9.23992 55.32C10.0799 55.74 11.0999 56.1 12.1199 56.28C12.8399 56.4 14.3999 56.52 15.5999 56.58H17.0399H43.3799H44.8199C46.0199 56.52 47.5799 56.46 48.2399 56.28C49.3199 56.04 50.3399 55.74 51.1799 55.32C52.1399 54.84 53.0399 54.18 53.8199 53.4C54.5999 52.62 55.1999 51.78 55.7399 50.76C56.1599 49.92 56.5199 48.9 56.6999 47.88C56.8199 47.16 56.9399 45.6 56.9999 44.4C56.9999 43.92 56.9999 43.26 56.9999 42.96V16.62C56.9999 16.32 56.9999 15.72 56.9999 15.18C56.9399 13.98 56.8799 12.42 56.6999 11.76C56.4599 10.68 56.1599 9.66 55.7399 8.82C55.2599 7.86 54.5999 6.96 53.8199 6.18C53.0399 5.4 52.1999 4.8 51.1799 4.26C50.3399 3.84 49.3199 3.48 48.2999 3.3C47.5799 3.18 46.0199 3.06 44.8199 3C44.3399 3 43.6799 3 43.3799 3H17.0399Z" fill="url(#paint0_linear_320_56)"/>
      <path d="M39.9595 32.64C39.4795 32.4 37.0795 31.26 36.6595 31.08C36.2395 30.9 35.8795 30.84 35.5795 31.32C35.2795 31.8 34.3195 32.88 34.0795 33.18C33.7795 33.48 33.5395 33.54 33.0595 33.3C32.5795 33.06 31.0195 32.58 29.1595 30.96C27.7195 29.7 26.7595 28.14 26.4595 27.66C26.1595 27.18 26.4595 26.94 26.6995 26.7C26.9395 26.46 27.1795 26.16 27.4195 25.86C27.6595 25.56 27.7195 25.38 27.8995 25.08C28.0795 24.78 27.9595 24.48 27.8395 24.24C27.7195 24 26.7595 21.66 26.3395 20.7C25.9195 19.8 25.5595 19.92 25.2595 19.86C24.9595 19.86 24.6595 19.86 24.3595 19.86C24.0595 19.86 23.5195 19.98 23.0995 20.46C22.6795 20.94 21.4195 22.08 21.4195 24.42C21.4195 26.76 23.1595 28.98 23.3995 29.34C23.6395 29.64 26.8195 34.44 31.6195 36.48C32.7595 36.96 33.6595 37.26 34.3795 37.5C35.5195 37.86 36.5995 37.8 37.4395 37.68C38.3395 37.56 40.3195 36.54 40.6795 35.46C41.0995 34.38 41.0995 33.42 40.9795 33.24C40.7395 33 40.4395 32.88 39.9595 32.64ZM30.7795 45C27.8995 45 25.1395 44.22 22.6795 42.78L22.0795 42.42L16.0795 43.98L17.6995 38.16L17.3395 37.56C15.7795 35.04 14.9395 32.16 14.9395 29.16C14.9395 20.46 22.0795 13.38 30.8395 13.38C34.9795 13.38 38.9995 15 41.9995 18C44.9995 21 46.6195 24.96 46.6195 29.16C46.6195 37.86 39.4795 45 30.7795 45ZM44.2795 15.72C40.6795 12.12 35.8795 10.14 30.7795 10.14C20.2795 10.14 11.6995 18.66 11.6995 29.16C11.6995 32.52 12.5995 35.76 14.2195 38.64L11.5195 48.48L21.5995 45.84C24.3595 47.34 27.5395 48.18 30.7195 48.18C41.2195 48.18 49.7995 39.66 49.7995 29.16C49.8595 24.12 47.8795 19.32 44.2795 15.72Z" fill="white"/>
      <defs>
        <linearGradient id="paint0_linear_320_56" x1="30.2279" y1="3.012" x2="30.2279" y2="56.544" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62FA7F" />
          <stop offset="0.6865" stopColor="#22CC40" />
          <stop offset={1} stopColor="#05B723" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="bg-[#ECECEC] shadow-[0px_4px_10px_0px_#00000017] rounded-2xl pt-3 md:pt-2 pb-8 sm:pb-14 md:pb-18 lg:pb-22 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1320px] mx-auto">
        {/* Desktop: Row layout | Mobile: Column layout with image on top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12">
          
          {/* LEFT CONTENT - Text section */}
          <div className="w-full md:w-1/2 lg:max-w-[650px] text-center md:text-left order-2 md:order-1">
            
            {/* Title */}
            {title && (
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold text-transparent stroke-text mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-[#AB090F] inline-block">
                {title}
              </h2>
            )}

            {/* Main Heading */}
            {subheading && (
              <h1 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] font-extrabold text-secondary leading-tight md:leading-[1.2] lg:leading-[70px] mb-3 sm:mb-4">
                {subheading}
              </h1>
            )}

            {/* Description */}
            {description && (
              <p className="text-secondary text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-7">
                {description}
              </p>
            )}

            {/* WhatsApp Button */}
            {buttonText && buttonUrl && (
              <div className="flex justify-center md:justify-start">
                <Link target="_blank"
                  title={buttonText}
                  aria-label={buttonText}
                  href={buttonUrl}
                  className="inline-flex items-center gap-2 pl-2 pr-3 sm:pr-4 py-1.5 sm:py-1.5 font-semibold bg-primary hover:bg-white text-white hover:text-black rounded-xl shadow-md transition-all text-sm"
                >
                  {whatsapIcon}
                  {buttonText}
                </Link>
              </div>
            )}

          </div>

          {/* RIGHT IMAGE - Image section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            {imageUrl && (
              <div className="relative w-full max-w-full sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
                <Image
                  src={imageUrl}
                  alt="banner"
                  width={500}
                  height={400}
                  className="object-contain w-full h-auto"
                  priority
                  fetchPriority="high"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default memo(Banner);