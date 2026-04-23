import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

type AboutHomeProps = {
  title?: string;
  subheading?: string;
  description?: string;
  readMoreText?: string;
  readMoreUrl?: string;
  imageUrl1?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  AboutLogo?: string;
  imageContent?: string;
};

const AboutHome = ({
  title,
  subheading,
  description,
  readMoreText,
  readMoreUrl,
  imageUrl1,
  imageUrl2,
  imageContent,
  AboutLogo,
  imageUrl3,
}: AboutHomeProps) => {

  const rightArrow = (
    <svg width={17} height={17} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.50027 13.75H24.4828L17.8665 7.13373C17.7471 7.01842 17.6519 6.88049 17.5864 6.72799C17.5209 6.57548 17.4864 6.41146 17.485 6.24548C17.4835 6.07951 17.5151 5.91491 17.578 5.76129C17.6408 5.60767 17.7337 5.4681 17.851 5.35074C17.9684 5.23337 18.108 5.14055 18.2616 5.0777C18.4152 5.01485 18.5798 4.98322 18.7458 4.98467C18.9117 4.98611 19.0758 5.02059 19.2283 5.0861C19.3808 5.15161 19.5187 5.24684 19.634 5.36623L28.384 14.1162C28.6184 14.3506 28.75 14.6685 28.75 15C28.75 15.3314 28.6184 15.6493 28.384 15.8837L19.634 24.6337C19.3983 24.8614 19.0825 24.9874 18.7548 24.9846C18.427 24.9817 18.1135 24.8503 17.8817 24.6185C17.65 24.3867 17.5185 24.0732 17.5157 23.7455C17.5128 23.4177 17.6388 23.102 17.8665 22.8662L24.4828 16.25H2.50027C2.16875 16.25 1.8508 16.1183 1.61638 15.8839C1.38196 15.6494 1.25027 15.3315 1.25027 15C1.25027 14.6685 1.38196 14.3505 1.61638 14.1161C1.8508 13.8817 2.16875 13.75 2.50027 13.75Z" fill="currentColor"/>
    </svg>
  );

  // Count how many images we have
  const imageCount = [imageUrl1, imageUrl2, imageUrl3].filter(Boolean).length;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-12">
      <div className="bg-primary relative rounded-2xl max-w-[1320px] w-full mx-auto p-6 sm:p-8 md:p-10 lg:p-12 text-white">
        
        {/* Title */}
        {title && (
          <h2 className="text-[24px] md:text-[40px] font-bold text-transparent stroke-text-2 mb-4 md:mb-7 border-b border-[#D9D9D9] inline-block">
            {title}
          </h2>
        )}

        {/* Subheading */}
        {subheading && (
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            {subheading}
          </h3>
        )}

        {/* Description and Button Row - Responsive */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
          
          {/* Description */}
          {description && (
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-full sm:max-w-[70%] md:max-w-[65%] lg:max-w-[800px]">
              {description}
            </p>
          )}

          {/* Button */}
          {readMoreText && readMoreUrl && (
            <Link
              href={readMoreUrl}
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-sm sm:text-base w-fit whitespace-nowrap"
            >
              {readMoreText}
              {rightArrow}
            </Link>
          )}
        </div>

        {/* Image Gallery Grid - Responsive for 2 images */}
        {(imageUrl1 || imageUrl2 || imageUrl3) && (
          <div className={`grid gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10
            ${imageCount === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : ''}
            ${imageCount === 2 ? 'grid-cols-1 sm:grid-cols-2' : ''}
            ${imageCount === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''}
          `}>
            
            {/* Image 1 */}
            {imageUrl1 && (
              <div className="relative overflow-hidden rounded-xl group">
                <Image
                  src={imageUrl1}
                  alt="Gallery image 1"
                  width={600}
                  height={400}
                  className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* Image 2 */}
            {imageUrl2 && (
              <div className="relative overflow-hidden rounded-xl group">
                <Image
                  src={imageUrl2}
                  alt="Gallery image 2"
                  width={600}
                  height={400}
                  className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* Image 3 - Optional */}
            {imageUrl3 && (
              <div className="relative overflow-hidden rounded-xl group">
                <Image
                  src={imageUrl3}
                  alt="Gallery image 3"
                  width={600}
                  height={400}
                  className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

          </div>
        )}

        {imageContent && (
            <h3 className="pt-3 sm:pt-4 md:pt-5 
                            text-[14px] sm:text-[16px] md:text-[24px] lg:text-[30px] 
                            font-semibold leading-snug md:leading-tight 
                            max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
                {imageContent}
            </h3>
        )}

       {AboutLogo && (
       <Image
            src={AboutLogo}
            alt="image"
            width={200}
            height={200}
            priority
            quality={75}
            className="
                hidden md:block
                absolute 
                right-0 
                bottom-[-50px] 
                w-[200px] 
                h-auto
            "
            /> 
        )}
      </div>
    </div>
  );
};

export default memo(AboutHome);