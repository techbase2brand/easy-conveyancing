import Image from 'next/image';
import { memo } from 'react';

type WhatIsLandingProps = {
    title?: string;
    description?: string;
    subheading?: string;
    subtitle2?: string;
    subtitle1?: string;
    services?: string[];
    ourLandImage?: string;

    ideaTitle?: string;
    ideaList?: string[];
    ideaImage?: string;

    processTitle?: string;
    processList?: string[];
};

const WhatIsLanding = ({
    title,
    description,
    subheading,
    services = [],
    ourLandImage,

    ideaTitle,
    ideaList = [],
    ideaImage,

    processTitle,
    processList = [],
    subtitle1,
    subtitle2
}: WhatIsLandingProps) => {

    if (
        !title &&
        !description &&
        services.length === 0 &&
        ideaList.length === 0 &&
        processList.length === 0
    ) {
        return null;
    }

    return (
        <div className='px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-10 md:pb-0 '>
            <div className='bg-primary rounded-2xl max-w-[1320px] mx-auto  p-4 sm:p-8 md:p-10 lg:p-12 text-white'>
                <div className='header-cotnet'>
                    {title && (
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2'>
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p className='text-sm md:text-[18px] pb-3 md:pb-6'>
                                {description}
                            </p>
                        )}
                </div>
                {/* Top Section */}
                <div className='grid md:grid-cols-2 gap-6 items-center'>
                    {/* Content */}
                    <div>
                        {services.length > 0 && (
                            <>
                                {subheading && (
                                    <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold mb-2 md:mb-3'>
                                        {subheading}
                                    </h3>
                                )}
                                <ul className='space-y-2'>
                                    {services.map((item, i) => (
                                        <li className='text-sm md:text-base' key={i}>✔ {item}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    {/* Image */}
                    {ourLandImage && (
                        <div className='relative w-full h-[180px] md:h-auto'>
                            <Image
                                src={ourLandImage}
                                alt="land"
                                width={1000}
                                height={1000}
                                className='object-cover h-full w-full rounded-xl'
                                fetchPriority="high"
                            />
                        </div>
                    )}
                </div>

                {/* Bottom Section */}
                <div className='grid md:grid-cols-2 gap-5 md:gap-10 md:gap-16 items-center mt-5 md:mt-10'>

                    {/* Image */}
                    {ideaImage && (
                        <div className='relative w-full order-2 md:order-1'>
                            <Image
                                src={ideaImage}
                                alt="idea"
                                width={700}
                                fetchPriority="high"
                                height={400}
                                className='object-cover h-auto w-full rounded-xl'
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className='order-1 md:order-2'>
                        <div className='conytent grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='box'>
                                {ideaList.length > 0 && (
                                    <>
                                        {ideaTitle && (
                                            <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold mb-2 md:mb-2'>
                                                {ideaTitle}
                                            </h3>
                                        )}
                                        {subtitle1 && (
                                            <p className='text-sm md:text-[19px] font-medium mb-2'>
                                                {subtitle1}
                                            </p>
                                        )}
                                       <ul className='list-disc pl-5 marker:text-white'>
                                            {ideaList.map((item, i) => (
                                                <li className='text-sm md:text-base' key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>

                            <div className='box'>
                                {processList.length > 0 && (
                                    <>
                                        {processTitle && (
                                            <h3 className='text-1xl md:text-2xl sm:text-xl font-semibold mb-2 md:mb-3'>
                                                {processTitle}
                                            </h3>
                                        )}
                                        {subtitle2 && (
                                            <p className='text-sm md:text-[19px] font-medium mb-2'>
                                                {subtitle2}
                                            </p>
                                        )}
                                        <ul className='space-y-3'>
                                            {processList.map((item, i) => (
                                                <li key={i} className='flex items-start gap-3 text-sm md:text-base'>
                                                    {i + 1}.
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default memo(WhatIsLanding);