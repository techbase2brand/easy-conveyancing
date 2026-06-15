"use client";
import { memo } from "react";
import type { ReactNode } from "react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


// ✅ Props Type
type TestimonialsProps = {
  title?: string;
  description?: string;
  imageUrl: string;
};

// ✅ Slide Type
type SlideItem = {
  id: number;
  quationIcon: ReactNode;
  starIcon: ReactNode;
  content: string;
  co: string;
  writer: string;
};

const Testimonials = ({
  title,
  description,
  imageUrl,
}: TestimonialsProps) => {
  const slides: SlideItem[] = [
    {
      id: 1,
      quationIcon: (
        <svg width={58} height={58} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_180_265)">
            <path d="M20.1499 29H11.2998V21.9199C11.2998 18.0148 14.4747 14.8398 18.3799 14.8398H19.2648C20.7361 14.8398 21.9199 13.6562 21.9199 12.1848V6.87481C21.9199 5.40352 20.7362 4.21973 19.2648 4.21973H18.3799C8.60054 4.21973 0.679688 12.1406 0.679688 21.9199V48.4702C0.679688 51.4018 3.05814 53.7803 5.98975 53.7803H20.1499C23.0815 53.7803 25.46 51.4018 25.46 48.4702V34.3101C25.46 31.3785 23.0815 29 20.1499 29Z" fill="url(#paint0_linear_180_265)"/>
            <path d="M52.0112 29H43.1611V21.9199C43.1611 18.0148 46.3361 14.8398 50.2412 14.8398H51.1262C52.5975 14.8398 53.7812 13.6562 53.7812 12.1848V6.87481C53.7812 5.40352 52.5976 4.21973 51.1262 4.21973H50.2412C40.4619 4.21973 32.541 12.1406 32.541 21.9199V48.4702C32.541 51.4018 34.9195 53.7803 37.8511 53.7803H52.0112C54.9428 53.7803 57.3213 51.4018 57.3213 48.4702V34.3101C57.3213 31.3785 54.9428 29 52.0112 29Z" fill="url(#paint1_linear_180_265)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_180_265" x1="13.0698" y1="4.21973" x2="13.0698" y2="53.7803" gradientUnits="userSpaceOnUse">
              <stop stopColor="#BF141A" /><stop offset={1} stopColor="#980005" />
            </linearGradient>
            <linearGradient id="paint1_linear_180_265" x1="44.9312" y1="4.21973" x2="44.9312" y2="53.7803" gradientUnits="userSpaceOnUse">
              <stop stopColor="#BF141A" /><stop offset={1} stopColor="#980005" />
            </linearGradient>
            <clipPath id="clip0_180_265">
              <rect width={58} height={58} fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      starIcon: (
        <svg width={151} height={26} viewBox="0 0 151 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4781 0L17.6344 8.43125L26.9266 9.76719L20.1875 16.3281L21.7906 25.5906L13.4781 21.2266L5.13594 25.5906L6.73906 16.3281L0 9.76719L9.32187 8.43125L13.4781 0Z" fill="#F9AE0E"/>
          <path d="M44.382 0L48.5383 8.43125L57.8602 9.76719L51.1211 16.3281L52.6945 25.5906L44.382 21.2266L36.0695 25.5906L37.643 16.3281L30.9336 9.76719L40.2258 8.43125L44.382 0Z" fill="#F9AE0E"/>
          <path d="M75.318 0L79.4742 8.43125L88.7664 9.76719L82.0273 16.3281L83.6305 25.5906L75.318 21.2266L66.9758 25.5906L68.5789 16.3281L61.8398 9.76719L71.132 8.43125L75.318 0Z" fill="#F9AE0E"/>
          <path d="M106.222 0L110.378 8.43125L119.7 9.76719L112.961 16.3281L114.534 25.5906L106.222 21.2266L97.9094 25.5906L99.4828 16.3281L92.7734 9.76719L102.066 8.43125L106.222 0Z" fill="#F9AE0E"/>
          <path d="M137.156 0L141.312 8.43125L150.604 9.76719L143.865 16.3281L145.468 25.5906L137.156 21.2266L128.814 25.5906L130.417 16.3281L123.678 9.76719L132.97 8.43125L137.156 0Z" fill="#F9AE0E"/>
        </svg>
      ),
      content: '"Professional, efficient, and very helpful throughout our property purchase."',
      co: "Adelaide, SA",
      writer: "— Phil Long Dealerships",
    },
    {
      id: 2,
      quationIcon: (
        <svg width={58} height={58} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_180_265)">
            <path d="M20.1499 29H11.2998V21.9199C11.2998 18.0148 14.4747 14.8398 18.3799 14.8398H19.2648C20.7361 14.8398 21.9199 13.6562 21.9199 12.1848V6.87481C21.9199 5.40352 20.7362 4.21973 19.2648 4.21973H18.3799C8.60054 4.21973 0.679688 12.1406 0.679688 21.9199V48.4702C0.679688 51.4018 3.05814 53.7803 5.98975 53.7803H20.1499C23.0815 53.7803 25.46 51.4018 25.46 48.4702V34.3101C25.46 31.3785 23.0815 29 20.1499 29Z" fill="url(#paint0_linear_180_265)"/>
            <path d="M52.0112 29H43.1611V21.9199C43.1611 18.0148 46.3361 14.8398 50.2412 14.8398H51.1262C52.5975 14.8398 53.7812 13.6562 53.7812 12.1848V6.87481C53.7812 5.40352 52.5976 4.21973 51.1262 4.21973H50.2412C40.4619 4.21973 32.541 12.1406 32.541 21.9199V48.4702C32.541 51.4018 34.9195 53.7803 37.8511 53.7803H52.0112C54.9428 53.7803 57.3213 51.4018 57.3213 48.4702V34.3101C57.3213 31.3785 54.9428 29 52.0112 29Z" fill="url(#paint1_linear_180_265)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_180_265" x1="13.0698" y1="4.21973" x2="13.0698" y2="53.7803" gradientUnits="userSpaceOnUse">
              <stop stopColor="#BF141A" /><stop offset={1} stopColor="#980005" />
            </linearGradient>
            <linearGradient id="paint1_linear_180_265" x1="44.9312" y1="4.21973" x2="44.9312" y2="53.7803" gradientUnits="userSpaceOnUse">
              <stop stopColor="#BF141A" /><stop offset={1} stopColor="#980005" />
            </linearGradient>
            <clipPath id="clip0_180_265">
              <rect width={58} height={58} fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      starIcon: (
        <svg width={151} height={26} viewBox="0 0 151 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4781 0L17.6344 8.43125L26.9266 9.76719L20.1875 16.3281L21.7906 25.5906L13.4781 21.2266L5.13594 25.5906L6.73906 16.3281L0 9.76719L9.32187 8.43125L13.4781 0Z" fill="#F9AE0E"/>
          <path d="M44.382 0L48.5383 8.43125L57.8602 9.76719L51.1211 16.3281L52.6945 25.5906L44.382 21.2266L36.0695 25.5906L37.643 16.3281L30.9336 9.76719L40.2258 8.43125L44.382 0Z" fill="#F9AE0E"/>
          <path d="M75.318 0L79.4742 8.43125L88.7664 9.76719L82.0273 16.3281L83.6305 25.5906L75.318 21.2266L66.9758 25.5906L68.5789 16.3281L61.8398 9.76719L71.132 8.43125L75.318 0Z" fill="#F9AE0E"/>
          <path d="M106.222 0L110.378 8.43125L119.7 9.76719L112.961 16.3281L114.534 25.5906L106.222 21.2266L97.9094 25.5906L99.4828 16.3281L92.7734 9.76719L102.066 8.43125L106.222 0Z" fill="#F9AE0E"/>
          <path d="M137.156 0L141.312 8.43125L150.604 9.76719L143.865 16.3281L145.468 25.5906L137.156 21.2266L128.814 25.5906L130.417 16.3281L123.678 9.76719L132.97 8.43125L137.156 0Z" fill="#F9AE0E"/>
        </svg>
      ),
      content: '"Amazing service! They made the entire process seamless and stress-free."',
      co: "Mawson Lakes, SA",
      writer: "— Sarah Johnson",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
      <div className="max-w-[1320px] mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">

          {/* Image */}
          <div>
            <img src={imageUrl} alt="Testimonial" className="w-full h-full object-cover rounded-xl"/>
          </div>

          {/* Content */}
          <div>
            {title && (
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold stroke-text mb-3 border-b-1 border-[#AB090F] inline-block">
                {title}
              </h2>
            )}

            {description && (
              <p className="text-1xl sm:text-1xl md:text-3xl font-semibold text-secondary mb-4 md:mb-8">
                {description}
              </p>
            )}

            {/* Swiper with Pagination built-in */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                loop={true}
                pagination={{
                    el: ".custom-paginationed",
                    clickable: true,
                    bulletClass: "custom-bullet inline-block w-2.5 h-1.5 bg-[#FF7B7F] rounded-full mx-1 transition-all duration-300 cursor-pointer",
                    bulletActiveClass: "custom-bullet-active !bg-[#FF7B7F] !w-10",
                }}
                autoplay={{
                    delay: 2500, 
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
                className="py-6 -translate-0 md:-translate-x-[100px] testimonials-swiper">
              {slides.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-white border cursor-grab border-white/20 rounded-2xl p-5 h-full">
                    {/* Quote Icon */}
                    <div className="mb-0 [&>svg]:w-10 [&>svg]:h-10 md:[&>svg]:w-[40px] md:[&>svg]:h-[40px]">
                      {item.quationIcon}
                    </div>

                    {/* Stars */}
                    <div className="mb-3 flex justify-center [&>svg]:w-[150px] [&>svg]:h-[20px]">
                      {item.starIcon}
                    </div>

                    {/* Content */}
                    <p className="text-secondary italic text-1xl text-center max-w-[400px] mx-auto leading-normal mb-4">
                      {item.content}
                    </p>

                    <div className="flex justify-around gap-4 pt-2 pb-8">
                      {/* Author */}
                      <p className="text-black text-xs font-semibold md:text-sm">
                        {item.co}
                      </p>
                      <span className="text-black text-xs font-semibold">
                        {item.writer}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-paginationed mt-6 flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Testimonials);