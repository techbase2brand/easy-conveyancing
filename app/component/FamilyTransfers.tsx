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

  servicesTitle?: string;
  services?: string[];

  imageUrl?: string;
  content?: string;
};

const FamilyTransfers: React.FC<WhyUsProps> = ({
  title,
  subheading,
  description,
  readMoreText,
  readMoreUrl,
  itemHeading,
  item,
  servicesTitle,
  services = [],
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

  // ✅ Fixed early return
  if (
    !title &&
    !subheading &&
    !(item && item.length > 0) &&
    services.length === 0
  ) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="bg-primary rounded-2xl max-w-[1320px] mx-auto p-4 sm:p-8 md:p-10 lg:p-12 text-white">

        {/* Header */}
        {(title || (readMoreText && readMoreUrl)) && (
          <div className="flex sm:flex-row justify-between items-center gap-5 mb-8">

            {title && (
              <h2 className="text-[24px] md:text-[40px] font-bold stroke-text-2 border-b border-[#D9D9D9] inline-block">
                {title}
              </h2>
            )}

            {readMoreText && readMoreUrl && (
              <Link
                href={readMoreUrl}
                className="inline-flex items-center gap-2 border text-xs md:text-sm border-white text-white hover:bg-black hover:border-black px-3 md:px-6 py-2 md:py-2.5 rounded-lg transition-all"
              >
                {readMoreText}
                {rightArrow}
              </Link>
            )}
          </div>
        )}

        {/* Subheading */}
        {subheading && (
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">
            {subheading}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm md:text-lg pb-3 md:pb-6">
            {description}
          </p>
        )}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* Left Content */}
          <div>
                {/* Item Heading */}
                {itemHeading && (
                <h4 className="text-1xl sm:text-xl md:text-2xl font-semibold mb-2">
                    {itemHeading}
                </h4>
                )}

            {/* Item List */}
            {item && item.length > 0 && (
              <ul className="space-y-1 md:space-y-3">
                {item.map((el, i) => {
                  const text = typeof el === "string" ? el : el.title;
                  return (
                    <li key={i} className="flex items-start gap-2 md:gap-2">
                      <span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-[3px]" width={22} height={22} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.152 18.5295C10.0108 18.2345 7.83472 13.7145 5.608 13.1459C4.85738 12.9707 4.25623 13.1253 4.25623 13.1253C3.42956 13.3746 2.82708 14.1183 2.59198 14.7677C2.12144 16.2137 2.84494 17.3159 3.55191 18.3488C4.96585 20.4147 6.33812 22.4544 7.75206 24.5202C8.23451 25.2059 8.72522 25.9263 9.50064 26.2055C10.5095 26.5719 11.6622 26.0548 12.3483 25.2159C13.0679 24.3684 13.4124 23.286 13.7653 22.2384C13.9752 21.6323 14.1852 21.0262 14.3952 20.4201C15.1174 18.3942 15.9146 16.3857 16.7535 14.4033C17.5924 12.421 18.473 10.4647 19.4286 8.52593C20.3842 6.58717 21.3481 4.68309 22.4205 2.78794C22.6969 2.31201 22.94 1.84466 23.2164 1.36873C23.2667 1.28219 23.6099 0.78909 23.5517 0.693628C23.4935 0.598167 23.0339 0.900347 22.9337 0.926102C22.0815 1.36598 21.2625 1.94459 20.5267 2.57539C19.0301 3.88026 17.8083 5.44576 16.6364 7.07203C14.1667 10.6882 11.9968 14.5218 10.152 18.5295Z" fill="currentColor"/>
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base">{text}</span>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Services List */}
            {services.length > 0 && (
              <div className="mt-4">
                {servicesTitle && (
                  <h4 className="text-1xl sm:text-xl md:text-2xl font-semibold mb-2">
                    {servicesTitle}
                  </h4>
                )}

                <ul className="space-y-1 md:space-y-3">
                  {services.map((service, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-2">
                      <span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-[3px]" width={22} height={22} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.152 18.5295C10.0108 18.2345 7.83472 13.7145 5.608 13.1459C4.85738 12.9707 4.25623 13.1253 4.25623 13.1253C3.42956 13.3746 2.82708 14.1183 2.59198 14.7677C2.12144 16.2137 2.84494 17.3159 3.55191 18.3488C4.96585 20.4147 6.33812 22.4544 7.75206 24.5202C8.23451 25.2059 8.72522 25.9263 9.50064 26.2055C10.5095 26.5719 11.6622 26.0548 12.3483 25.2159C13.0679 24.3684 13.4124 23.286 13.7653 22.2384C13.9752 21.6323 14.1852 21.0262 14.3952 20.4201C15.1174 18.3942 15.9146 16.3857 16.7535 14.4033C17.5924 12.421 18.473 10.4647 19.4286 8.52593C20.3842 6.58717 21.3481 4.68309 22.4205 2.78794C22.6969 2.31201 22.94 1.84466 23.2164 1.36873C23.2667 1.28219 23.6099 0.78909 23.5517 0.693628C23.4935 0.598167 23.0339 0.900347 22.9337 0.926102C22.0815 1.36598 21.2625 1.94459 20.5267 2.57539C19.0301 3.88026 17.8083 5.44576 16.6364 7.07203C14.1667 10.6882 11.9968 14.5218 10.152 18.5295Z" fill="currentColor"/>
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content */}
            {content && (
              <p className="mt-5 text-base md:text-[20px] font-medium max-w-[900px]">
                {content}
              </p>
            )}
          </div>

          {/* Right Image */}
          {imageUrl && (
            <div className="w-full rounded-xl h-full overflow-hidden mb-0 md:mb-[-150px]">
              <Image
                src={imageUrl}
                alt="image"
                width={700}
                height={700}
                className="w-full h-full object-cover rounded-xl"
                fetchPriority="high"
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default memo(FamilyTransfers);