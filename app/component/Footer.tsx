"use client";

import Image from 'next/image';
import Link from 'next/link';
import { memo, useState } from 'react';
import { usePathname } from "next/navigation";

type FooterProps = { description: string; };

const Footer = ({ description }: FooterProps) => {
    // Accordion state for mobile - only one open at a time
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    // ✅ MOVED: usePathname hook HERE before using it
    const pathname = usePathname();

    // LinkedIn icon
    const linkedin = (
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2005 16.2V10.926C16.2005 8.334 15.6425 6.354 12.6185 6.354C11.1605 6.354 10.1885 7.146 9.79253 7.902H9.75653V6.588H6.89453V16.2H9.88253V11.43C9.88253 10.17 10.1165 8.964 11.6645 8.964C13.1945 8.964 13.2125 10.386 13.2125 11.502V16.182H16.2005V16.2Z" fill="currentColor"/>
            <path d="M2.03516 6.58801H5.02316V16.2H2.03516V6.58801Z" fill="currentColor" />
            <path d="M3.52878 1.8C2.57478 1.8 1.80078 2.574 1.80078 3.528C1.80078 4.482 2.57478 5.274 3.52878 5.274C4.48278 5.274 5.25678 4.482 5.25678 3.528C5.25678 2.574 4.48278 1.8 3.52878 1.8Z" fill="currentColor"/>
        </svg>
    );

    // Facebook icon
    const facebook = (
        <svg width={17} height={15} viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_180_39)">
                <path d="M9.81627 15V8.1583H12.4179L12.8082 5.49117H9.81627V3.7886C9.81627 3.01665 10.0582 2.49057 11.3142 2.49057L12.9135 2.48999V0.104422C12.6369 0.072709 11.6876 0 10.5826 0C8.27515 0 6.69546 1.24272 6.69546 3.52445V5.49117H4.08594V8.1583H6.69546V15H9.81627Z" fill="currentColor"/>
            </g>
            <defs><clipPath id="clip0_180_39"><rect width={17} height={15} fill="currentColor" /></clipPath></defs>
        </svg>
    );

    // Instagram icon
    const instagram = (
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00002 5.55467C6.65069 5.55467 5.55469 6.65067 5.55469 8.00001C5.55469 9.34934 6.65069 10.448 8.00002 10.448C9.34935 10.448 10.448 9.34934 10.448 8.00001C10.448 6.65067 9.34935 5.55467 8.00002 5.55467Z" fill="currentColor"/>
            <path d="M11.6913 1.33334H4.30998C2.66998 1.33334 1.33398 2.66934 1.33398 4.30934V11.6907C1.33398 13.3333 2.66998 14.6667 4.30998 14.6667H11.6913C13.334 14.6667 14.6673 13.3333 14.6673 11.6907V4.30934C14.6673 2.66934 13.334 1.33334 11.6913 1.33334ZM8.00065 12.32C5.61932 12.32 3.68065 10.3813 3.68065 8C3.68065 5.61867 5.61932 3.68267 8.00065 3.68267C10.382 3.68267 12.3207 5.61867 12.3207 8C12.3207 10.3813 10.382 12.32 8.00065 12.32ZM12.4113 4.46667C11.9073 4.46667 11.4967 4.05867 11.4967 3.55467C11.4967 3.05067 11.9073 2.64 12.4113 2.64C12.9153 2.64 13.326 3.05067 13.326 3.55467C13.326 4.05867 12.9153 4.46667 12.4113 4.46667Z" fill="currentColor"/>
        </svg>
    );

    // YouTube icon
    const youtube = (
        <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_180_42)">
                <path d="M17.082 4.5165C16.8875 3.83373 16.3175 3.29551 15.5947 3.11166C14.2742 2.77042 8.99198 2.77042 8.99198 2.77042C8.99198 2.77042 3.71 2.77042 2.38947 3.09872C1.68055 3.28237 1.09666 3.83382 0.902199 4.5165C0.554688 5.76356 0.554688 8.34981 0.554688 8.34981C0.554688 8.34981 0.554688 10.9491 0.902199 12.1831C1.09686 12.8658 1.66664 13.404 2.38958 13.5879C3.7239 13.9292 8.99219 13.9292 8.99219 13.9292C8.99219 13.9292 14.2742 13.9292 15.5947 13.6009C16.3176 13.4171 16.8875 12.8789 17.0822 12.1962C17.4296 10.9491 17.4296 8.36294 17.4296 8.36294C17.4296 8.36294 17.4435 5.76356 17.082 4.5165ZM7.31025 10.7391V5.96054L11.7027 8.34981L7.31025 10.7391Z" fill="currentColor"/>
            </g>
            <defs><clipPath id="clip0_180_42"><rect width={18} height={17} fill="currentColor" /></clipPath></defs>
        </svg>
    );

    // Chevron down icon for accordion
    const ChevronDown = () => (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    // Useful Links content
    const usefulLinksContent = ( 
        <ul className='text-sm text-secondary mt-2 space-y-2'>
            <li><Link href="/" title='Home' aria-label='Home' className={`transition-all ${pathname === "/"? "underline text-primary": "hover:text-primary hover:underline"} text-sm md:text-base`}>Home</Link></li>
            <li><Link href="/about" title='About Us' aria-label='About Us' className={`transition-all ${pathname === "/about"? "underline text-primary": "hover:text-primary hover:underline"} text-sm md:text-base`}>About Us</Link></li>
            <li><Link href="/services/settlement-of-sale-and-purchase-of-property" title='Properties' aria-label='Properties' className={`transition-all ${pathname === "/services/settlement-of-sale-and-purchase-of-property"? "underline text-primary": "hover:text-primary hover:underline"} text-sm md:text-base`}>Properties</Link></li>
            <li><Link href="/contact-us" title='Contact Us' aria-label='Contact Us' className={`transition-all ${pathname === "/contact-us"? "underline text-primary": "hover:text-primary hover:underline"} text-sm md:text-base`}>Contact Us</Link></li>
        </ul>
    );

    // Our Services content - ✅ FIXED: Removed duplicate className
    const ourServicesContent = (
        <ul className='text-sm text-secondary mt-2 space-y-2'>
            <li>
                <Link 
                    href="/services/settlement-of-sale-and-purchase-of-property" 
                    title='Settlement of Sale & Purchase of Property' 
                    aria-label='Settlement of Sale & Purchase of Property' 
                    className={`transition-all ${
                        pathname === "/services/settlement-of-sale-and-purchase-of-property"
                            ? "underline text-primary"
                            : "hover:text-primary hover:underline"
                    } text-sm md:text-base`}
                >
                    Settlement of Sale & Purchase of Property
                </Link>
            </li>
            <li>
                <Link 
                    href="/services/private-contracts-and-form-1" 
                    title='Private Contracts and Form 1' 
                    aria-label='Private Contracts and Form 1' 
                    className={`transition-all ${
                        pathname === "/services/private-contracts-and-form-1"
                            ? "underline text-primary"
                            : "hover:text-primary hover:underline"
                    } text-sm md:text-base`}
                >
                    Private Contracts and Form 1
                </Link>
            </li>
            <li>
                <Link 
                    href="/services/commercial-settlements" 
                    title='Commercial Settlements' 
                    aria-label='Commercial Settlements' 
                    className={`transition-all ${
                        pathname === "/services/commercial-settlements"
                            ? "underline text-primary"
                            : "hover:text-primary hover:underline"
                    } text-sm md:text-base`}
                >
                    Commercial Settlements
                </Link>
            </li>
            <li>
                <Link 
                    href="/services/family-transfers" 
                    title='Family Transfers' 
                    aria-label='Family Transfers' 
                    className={`transition-all ${
                        pathname === "/services/family-transfers"
                            ? "underline text-primary"
                            : "hover:text-primary hover:underline"
                    } text-sm md:text-base`}
                >
                    Family Transfers
                </Link>
            </li>
            <li>
                <Link 
                    href="/services/land-divisions" 
                    title='Land Divisions' 
                    aria-label='Land Divisions' 
                    className={`transition-all ${
                        pathname === "/services/land-divisions"
                            ? "underline text-primary"
                            : "hover:text-primary hover:underline"
                    } text-sm md:text-base`}
                >
                    Land Divisions
                </Link>
            </li>
        </ul>
    );

    // Contact Info content
    const contactInfoContent = (
        <div className='mt-2 space-y-3'>
            <div className='list-itemed'>
                <h4 className='text-sm font-semibold text-secondary text-sm md:text-base pb-1'>Number</h4>
                <Link href="tel:0433101353" title='phone' aria-label='phone' className='text-sm text-secondary hover:underline hover:text-primary transition-all block text-sm md:text-base'>0433 101 353</Link>
            </div>
            <div className='list-itemed'>
                <h4 className='text-sm font-semibold text-secondary text-sm md:text-base pb-1'>Email</h4>
                <Link href="mailto:info@eazyconveyancing.com" title='email' aria-label='email' className='text-sm text-secondary hover:underline hover:text-primary transition-all block break-all text-sm md:text-base'>info@eazyconveyancing.com</Link>
            </div>
            <div className='list-itemed'>
                <h4 className='text-sm font-semibold text-secondary text-sm md:text-base pb-1'>Address</h4>
                <p className='text-sm text-secondary mt-1 text-sm md:text-base'>123 Main Street, Anytown, Australia</p>
            </div>
        </div>
    );

    return (
        <div className='py-10 md:py-14 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1320px] mx-auto shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-2xl px-4 md:px-14 py-6 md:py-10 bg-white'>
                {/* Desktop Grid Layout (hidden on mobile, visible from md up) */}
                <div className='hidden md:grid md:grid-cols-4 gap-6 py-8'>
                    {/* Logo & Social Section */}
                    <div className='logo-content'>
                        <Link href="/" title='Logo' aria-label='Logo'>
                            <Image src="/logo.webp" fetchPriority="high" alt="Logo" width={120} height={40} />
                        </Link>
                        {description && <p className='text-xs md:text-base text-secondary mt-4'>{description}</p>}
                        <div className='social-media flex items-center space-x-3 mt-5'>
                            <Link className='transition-all text-secondary hover:text-primary' href="https://www.linkedin.com/company/eazy-conveyancing" title='linkedin' aria-label='linkedin' target="_blank" rel="noopener noreferrer">
                                {linkedin}
                            </Link>
                            <Link className='transition-all text-secondary hover:text-primary' href="https://www.facebook.com/eazyconveyancing" title='facebook' aria-label='facebook' target="_blank" rel="noopener noreferrer">
                                {facebook}
                            </Link>
                            <Link className='transition-all text-secondary hover:text-primary' href="https://www.instagram.com/eazyconveyancing" title='instagram' aria-label='instagram' target="_blank" rel="noopener noreferrer">
                                {instagram}
                            </Link>
                            <Link className='transition-all text-secondary hover:text-primary' href="https://www.youtube.com/channel/UCXQ5n24f5J1J1J1J1J1J1J1" title='youtube' aria-label='youtube' target="_blank" rel="noopener noreferrer">
                                {youtube}
                            </Link>
                        </div>
                    </div>

                    {/* Useful Links Desktop */}
                    <div className='useful-links'>
                        <h3 className='text-xl font-semibold text-secondary'>Useful Links</h3>
                        {usefulLinksContent}
                    </div>

                    {/* Our Services Desktop */}
                    <div className='our-services'>
                        <h3 className='text-xl font-semibold text-secondary'>Our Services</h3>
                        {ourServicesContent}
                    </div>

                    {/* Contact Info Desktop */}
                    <div className='contact-info'>
                        <h3 className='text-xl font-semibold text-secondary'>Contact Us</h3>
                        {contactInfoContent}
                    </div>
                </div>

                {/* Mobile Accordion Layout (visible only on mobile) */}
                <div className='md:hidden py-4'>
                    {/* Logo & Social Section - Always visible on mobile */}
                    <div className='logo-content text-center mb-0 md:mb-6'>
                        <Link href="/" title='Logo' aria-label='Logo' className='inline-block'>
                            <Image fetchPriority="high" src="/logo.webp" alt="Logo" width={120} height={40} />
                        </Link>
                        {description && <p className='text-secondary mt-2 text-sm md:text-base'>{description}</p>}
                        <div className='social-media flex items-center justify-center space-x-4 mt-4'>
                            <Link className='transition-all text-secondary hover:text-primary' href="https://www.linkedin.com/company/eazy-conveyancing" title='linkedin' aria-label='linkedin' target="_blank" rel="noopener noreferrer">
                                {linkedin}
                            </Link>
                            <Link className='transition-all text-secondary hover:text-primary' href="https://www.facebook.com/eazyconveyancing" title='facebook' aria-label='facebook' target="_blank" rel="noopener noreferrer">
                                {facebook}
                            </Link>
                            <Link className='transition-all text-secondary hover:text-primary' href="https://www.instagram.com/eazyconveyancing" title='instagram' aria-label='instagram' target="_blank" rel="noopener noreferrer">
                                {instagram}
                            </Link>
                            <Link className='transition-all text-secondary hover:text-primary' href="https://www.youtube.com/channel/UCXQ5n24f5J1J1J1J1J1J1J1" title='youtube' aria-label='youtube' target="_blank" rel="noopener noreferrer">
                                {youtube}
                            </Link>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className='border-t border-secondary mt-8'></div>

                    {/* Useful Links Accordion */}
                    <div className='border-b border-secondary py-3'>
                        <button 
                            onClick={() => toggleSection('usefulLinks')}
                            className='w-full flex justify-between items-center py-0 text-left font-semibold text-gray-800'
                            aria-expanded={activeSection === 'usefulLinks'}
                        >
                            <span>Useful Links</span>
                            <span className={`transform transition-transform duration-300 ${activeSection === 'usefulLinks' ? 'rotate-180' : ''}`}>
                                <ChevronDown />
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeSection === 'usefulLinks' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            {usefulLinksContent}
                        </div>
                    </div>

                    {/* Our Services Accordion */}
                    <div className='border-b border-secondary py-3'>
                        <button 
                            onClick={() => toggleSection('ourServices')}
                            className='w-full flex justify-between items-center py-0 text-left font-semibold text-gray-800'
                            aria-expanded={activeSection === 'ourServices'}
                        >
                            <span>Our Services</span>
                            <span className={`transform transition-transform duration-300 ${activeSection === 'ourServices' ? 'rotate-180' : ''}`}>
                                <ChevronDown />
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeSection === 'ourServices' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            {ourServicesContent}
                        </div>
                    </div>

                    {/* Contact Info Accordion */}
                    <div className='pt-3'>
                        <button 
                            onClick={() => toggleSection('contactInfo')}
                            className='w-full flex justify-between items-center py-0 text-left font-semibold text-gray-800'
                            aria-expanded={activeSection === 'contactInfo'}
                        >
                            <span>Contact Us</span>
                            <span className={`transform transition-transform duration-300 ${activeSection === 'contactInfo' ? 'rotate-180' : ''}`}>
                                <ChevronDown />
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeSection === 'contactInfo' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            {contactInfoContent}
                        </div>
                    </div>
                </div>

                <div className='copyright flex flex-wrap md:flex-nowrap text-secondary justify-center md:justify-between text-xs gap-2 md:text-base items-center border-t-1 border-secondary pt-8'>
                    <p className='text-center md:text-left'>©2026 All Rights Reserved | eazyconveyancing | <Link className='hover:underline hover:text-primary' href="/privacy-policy" title='Privacy Policy' aria-label='Privacy Policy'>Privacy Policy</Link></p>
                    <Link title='Designed By Base2brand' aria-label='Designed By Base2brand' className='hover:text-primary underline' href="https://base2brand.com" target="_blank" rel="noopener noreferrer">
                        Designed By Base2brand
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default memo(Footer);