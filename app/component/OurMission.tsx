"use client";

import { memo } from "react";

type OurMissionProps = {
  title?: string;
  title2?: string;
  subheading?: string;
  description?: string;
  ourMissionContent?: string;
  item?: string[];
  itemContent?: string;
  imageUrl?: string;
};

const OurMission = ({
  title,
  title2,
  subheading,
  description,
  ourMissionContent,
  item,
  itemContent,
  imageUrl,
}: OurMissionProps) => {
  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="bg-primary rounded-2xl max-w-[1320px] mx-auto p-5 sm:p-8 md:p-10 lg:p-12 text-white">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14 lg:gap-20 items-start">
          
          {/* LEFT */}
          <div className="order-2 md:order-1">
            {title && (
              <h2 className="text-[28px] max-w-full md:max-w-[200px] sm:text-[36px] md:text-[50px] lg:text-[70px] leading-tight md:leading-[70px] font-bold text-transparent stroke-text-3 mb-3 md:mb-5 inline-block">
                {title}
              </h2>
            )}

            {ourMissionContent && (
              <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6">
                {ourMissionContent}
              </p>
            )}

            {imageUrl && (
              <div className="relative">
                <img
                  src={imageUrl}
                  alt={title || "image"}
                  className="rounded-lg w-full h-auto object-cover mb-[-45px] md:mb-[-80px] lg:mb-[-120px]"
                />
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className=" md:order-1">
            {title2 && (
              <h2 className="text-[28px] max-w-full md:max-w-[200px] sm:text-[36px] md:text-[50px] lg:text-[70px] leading-tight md:leading-[70px] font-bold text-transparent stroke-text-3 mb-3 md:mb-5 inline-block">
                {title2}
              </h2>
            )}

            {subheading && (
              <h3 className="text-base sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4 pt-0 md:pt-2">
                {subheading}
              </h3>
            )}

            {item && item.length > 0 && (
              <ul className="pl-5 space-y-2 text-sm sm:text-base md:text-lg">
                {item.map((i, index) => (
                  <li key={index} className="list-disc">
                    {i}
                  </li>
                ))}
              </ul>
            )}

            {itemContent && (
              <p className="text-white pt-3 text-sm sm:text-base md:text-lg">
                {itemContent}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(OurMission);