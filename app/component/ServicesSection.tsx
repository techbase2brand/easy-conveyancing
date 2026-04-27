"use client";

import Image from "next/image";
import { memo, useState } from "react";

type ServicesSectionProps = {
  services: string[];
  imageUrl?: string;
};

const ServicesSection = ({ services, imageUrl }: ServicesSectionProps) => {
  

  return (
    <section className="bg-[#ECECEC] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1320px] mx-auto ">
        <div className="flex flex-col gap-7 lg:flex-row md:gap-10 items-start lg:items-center">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden border-r-[6px] border-b-[6px] border-primary">
              <Image
                src={imageUrl || "/about-sec.png"}
                alt="services"
                width={700}
                height={700}
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2">

            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold text-transparent stroke-text mb-3 border-b-1 border-[#AB090F] inline-block">
              Services
            </h2>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-2 md:mb-3">
              Our Conveyancing Services
            </h3>

            <div className="flex flex-col gap-0">
              {services.map((item, index) => (
                <div key={index}
                  className={`flex items-center gap-2 transition-all duration-300  py-0 md:py-1 rounded-2xl `}>
                  <span className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-transparent stroke-text inline-block">
                    {index + 1}.
                  </span>

                  <span className="text-sm sm:text-base md:text-lg font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);