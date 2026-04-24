import { memo } from 'react';
type WhoWeHelpProps = {
    title?: string;
    description?: string;
    item?: Array<string>;
};
const WhoWeHelp = ({ title, description, item }: WhoWeHelpProps) => {
    const checkArrow = ((
        <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-[3px]" width={22} height={22} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.152 18.5295C10.0108 18.2345 7.83472 13.7145 5.608 13.1459C4.85738 12.9707 4.25623 13.1253 4.25623 13.1253C3.42956 13.3746 2.82708 14.1183 2.59198 14.7677C2.12144 16.2137 2.84494 17.3159 3.55191 18.3488C4.96585 20.4147 6.33812 22.4544 7.75206 24.5202C8.23451 25.2059 8.72522 25.9263 9.50064 26.2055C10.5095 26.5719 11.6622 26.0548 12.3483 25.2159C13.0679 24.3684 13.4124 23.286 13.7653 22.2384C13.9752 21.6323 14.1852 21.0262 14.3952 20.4201C15.1174 18.3942 15.9146 16.3857 16.7535 14.4033C17.5924 12.421 18.473 10.4647 19.4286 8.52593C20.3842 6.58717 21.3481 4.68309 22.4205 2.78794C22.6969 2.31201 22.94 1.84466 23.2164 1.36873C23.2667 1.28219 23.6099 0.78909 23.5517 0.693628C23.4935 0.598167 23.0339 0.900347 22.9337 0.926102C22.0815 1.36598 21.2625 1.94459 20.5267 2.57539C19.0301 3.88026 17.8083 5.44576 16.6364 7.07203C14.1667 10.6882 11.9968 14.5218 10.152 18.5295Z" fill="#AB090F"/>
        </svg>
    ));
    return (
        <div className='pt-0 md:pt-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1320px] mx-auto px-0 sm:px-0 lg:px-14'>
                <div className='bg-white shadow-[0px_37px_28px_0px_#0000000A] rounded-4xl text-center px-6 py-8 md:px-10 lg:px-30 md:py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='heading'>
                            {title && (
                                <h2 className='text-[24px] sm:text-[32px] leading-normal md:leading-22 md:text-[60px] lg:text-[85px] text-left font-bold text-transparent stroke-text mb-0 sm:mb-4 pb-2 sm:pb-3'>
                                    {title}
                                </h2>
                            )}
                        </div>
                        <div className='content'>
                            {item && item.length > 0 && (
                                <ul className='m-0 text-[16px] md:text-[18px] text-black'>
                                    {item.map((text, index) => (
                                        <li key={index} className='mb-2 list-none text-left flex font-medium text-sm md:text-[20px] items-start gap-2'>
                                           {checkArrow} {text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {description && (
                        <p className='text-[14px] text-left font-medium md:text-[18px] text-secondary mt-2 md:mt-8'>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(WhoWeHelp);