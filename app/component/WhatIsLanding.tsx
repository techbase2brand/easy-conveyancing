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
                                        <li className='text-sm text-white md:text-base flex items-start gap-2 md:gap-3' key={i}>
                                             <span>
                                            <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-[3px]" width={22} height={22} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.152 18.5295C10.0108 18.2345 7.83472 13.7145 5.608 13.1459C4.85738 12.9707 4.25623 13.1253 4.25623 13.1253C3.42956 13.3746 2.82708 14.1183 2.59198 14.7677C2.12144 16.2137 2.84494 17.3159 3.55191 18.3488C4.96585 20.4147 6.33812 22.4544 7.75206 24.5202C8.23451 25.2059 8.72522 25.9263 9.50064 26.2055C10.5095 26.5719 11.6622 26.0548 12.3483 25.2159C13.0679 24.3684 13.4124 23.286 13.7653 22.2384C13.9752 21.6323 14.1852 21.0262 14.3952 20.4201C15.1174 18.3942 15.9146 16.3857 16.7535 14.4033C17.5924 12.421 18.473 10.4647 19.4286 8.52593C20.3842 6.58717 21.3481 4.68309 22.4205 2.78794C22.6969 2.31201 22.94 1.84466 23.2164 1.36873C23.2667 1.28219 23.6099 0.78909 23.5517 0.693628C23.4935 0.598167 23.0339 0.900347 22.9337 0.926102C22.0815 1.36598 21.2625 1.94459 20.5267 2.57539C19.0301 3.88026 17.8083 5.44576 16.6364 7.07203C14.1667 10.6882 11.9968 14.5218 10.152 18.5295Z" fill="currentColor"/>
                                            </svg>
                                        </span>
                                             {item}</li>
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