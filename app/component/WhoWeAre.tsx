"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

type WhyUsItem = {
  title: string;
};

type WhyUsProps = {
  title?: string;
  subheading?: string;
  description?: string;
  readMoreText?: string;
  readMoreUrl?: string;
  itemHeading?: string;
  item?: Array<string | WhyUsItem>;
  imageUrl?: string;
  content?: string;
};

const WhoWeAre: React.FC<WhyUsProps> = ({
  title,
  subheading,
  description,
  readMoreText,
  readMoreUrl,
  itemHeading,
  item,
  imageUrl,
  content,
}) => {

  const rightArrow = (
    <svg width={17} height={17} viewBox="0 0 30 30" fill="none">
      <path
        d="M2.5 13.75H24.48L17.86 7.13C17.62 6.9 17.48 6.58 17.48 6.25C17.48 5.92 17.62 5.6 17.86 5.36C18.1 5.12 18.42 4.98 18.75 4.98C19.08 4.98 19.4 5.12 19.64 5.36L28.38 14.12C28.62 14.35 28.75 14.67 28.75 15C28.75 15.33 28.62 15.65 28.38 15.88L19.64 24.63C19.4 24.87 19.08 25 18.75 25C18.42 25 18.1 24.87 17.86 24.63C17.62 24.39 17.48 24.07 17.48 23.75C17.48 23.42 17.62 23.1 17.86 22.86L24.48 16.25H2.5C2.17 16.25 1.85 16.12 1.61 15.88C1.38 15.65 1.25 15.33 1.25 15C1.25 14.67 1.38 14.35 1.61 14.12C1.85 13.88 2.17 13.75 2.5 13.75Z"
        fill="currentColor"
      />
    </svg>
  );

  // Early return
  if (!title && !subheading && !(item && item.length > 0)) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="bg-primary rounded-2xl max-w-[1320px] mx-auto  p-4 sm:p-8 md:p-10 lg:p-12 text-white">
        {(title || (readMoreText && readMoreUrl)) && (
            <div className="flex sm:flex-row justify-between items-center gap-5 mb-8">
                
                {title && (
                <h2 className="text-[24px] md:text-[40px] font-bold stroke-text-2 mb-4 md:mb-4 border-b border-[#D9D9D9] inline-block">
                    {title}
                </h2>
                )}

                {readMoreText && readMoreUrl && (
                <Link
                    href={readMoreUrl}
                    className="inline-flex items-center gap-2 bg-transparent border-1 text-xs md:text-sm border-white text-white hover:bg-black hover:border-black hover:text-white px-3 md:px-6 py-2 md:py-2.5 rounded-lg transition-all"
                >
                    {readMoreText}
                    {rightArrow}
                </Link>
                )}

            </div>
        )}

        {subheading && (
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            {subheading}
          </h3>
        )}

        {description && (
          <p className="text-sm font-normal pb-3 md:pb-6 md:text-[18px] text-white">
            {description}
          </p>
        )}

        {itemHeading && (
          <h4 className="text-1xl md:text-3xl sm:text-xl font-semibold mb-2 md:mb-4">
            {itemHeading}
          </h4>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-4 relative">
            <div className="content">
              {item && item.length > 0 && (
              <ul className="space-y-3">
                {item.map((el, i) => {
                  const text: string =
                    typeof el === "string" ? el : el.title;
                  return (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <svg width={15} height={18} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.3378 11.9029C5.24005 11.7063 3.73349 8.69297 2.19192 8.31387C1.67226 8.19712 1.25608 8.30014 1.25608 8.30014C0.683767 8.46634 0.266668 8.96219 0.103903 9.39508C-0.221855 10.3591 0.279032 11.0939 0.768472 11.7825C1.74735 13.1597 2.69739 14.5195 3.67627 15.8968C4.01027 16.3539 4.34999 16.8342 4.88682 17.0203C5.58527 17.2646 6.3833 16.9198 6.85832 16.3605C7.35645 15.7956 7.59499 15.074 7.83925 14.3755C7.98462 13.9715 8.12999 13.5674 8.27535 13.1634C8.77532 11.8127 9.32726 10.4738 9.90803 9.15219C10.4888 7.83061 11.0984 6.52643 11.76 5.23392C12.4216 3.94141 13.0889 2.67203 13.8313 1.4086C14.0227 1.09131 14.191 0.779741 14.3823 0.462452C14.4171 0.404763 14.6548 0.0760275 14.6145 0.0123864C14.5742 -0.0512546 14.256 0.150199 14.1866 0.167368C13.5967 0.460621 13.0296 0.846359 12.5203 1.26689C11.4842 2.13681 10.6383 3.18047 9.82699 4.26466C8.11716 6.67546 6.61496 9.23117 5.3378 11.9029Z" fill="white"/>
                      </svg>
                      <span className="text-white text-sm sm:text-base">{text}</span>
                    </li>
                  );
                })}
              </ul>
            )}
            
            {content && (
              <p className="text-white font-medium text-base md:text-[20px] mt-5 max-w-[900px]">
                {content}
              </p>
            )}
            </div>
            <div className="image mb-0 md:mb-[-130px] relative">
              {imageUrl && (
                <Image 
                  width={700}
                  height={1000}
                  src={imageUrl} 
                  fetchPriority="high"
                  alt="image" 
                  className="w-full h-full"
                />
              )}
            </div>
        </div>

      </div>
    </section>
  );
};

export default memo(WhoWeAre);