'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useState, useCallback, useEffect, useRef } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface SubMenuItem {
  label: string;
  href: string;
}

interface ServiceItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

const Header = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [activeServiceSubmenu, setActiveServiceSubmenu] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const desktopSubmenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  // Services with submenu items
  const servicesWithSubmenu: ServiceItem = {
    label: 'Services',
    href: '/services',
    subItems: [
      {
        label: 'Settlement of Sale and Purchase of Property',
        href: '/services/settlement-of-sale-and-purchase-of-property',
      },
      {
        label: 'Private Contracts and Form 1',
        href: '/services/private-contracts-and-form-1',
      },
      {
        label: 'Commercial Settlements',
        href: '/services/commercial-settlements',
      },
      {
        label: 'Family Transfers',
        href: '/services/family-transfers',
      },
      {
        label: 'Land Divisions',
        href: '/services/land-divisions',
      },
    ]
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    if (!isMobileMenuOpen) {
      setOpenSubmenu(null);
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
    menuButtonRef.current?.focus();
  }, []);

  // Handle desktop submenu visibility with delay
  const handleDesktopSubmenuEnter = useCallback((serviceLabel: string) => {
    if (desktopSubmenuTimeoutRef.current) {
      clearTimeout(desktopSubmenuTimeoutRef.current);
    }
    setActiveServiceSubmenu(serviceLabel);
  }, []);

  const handleDesktopSubmenuLeave = useCallback(() => {
    desktopSubmenuTimeoutRef.current = setTimeout(() => {
      setActiveServiceSubmenu(null);
    }, 200);
  }, []);

  // Handle mobile submenu toggle
  const toggleSubmenu = useCallback((label: string) => {
    setOpenSubmenu(prev => prev === label ? null : label);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
        window.history.pushState(null, '', href);
      }
    }
  }, [closeMobileMenu]);

  // Helper to check if a link is active
  const pathname = usePathname();
  
  const isActiveLink = useCallback((href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href) ?? false;
  }, [pathname]);

  // Helper to check if any submenu item is active
  const isAnySubmenuActive = useCallback((subItems: SubMenuItem[]) => {
    return subItems.some((item) => isActiveLink(item.href));
  }, [isActiveLink]);

  // WhatsApp icon as a function to avoid inline JSX repetition
  const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6323 2.45C13.3923 2.45 12.9123 2.45 12.4803 2.45C11.5203 2.499 10.2723 2.548 9.74433 2.695C8.88033 2.891 8.06433 3.136 7.39233 3.479C6.62433 3.871 5.90433 4.41 5.28033 5.047C4.65633 5.684 4.17633 6.37 3.74433 7.203C3.40833 7.889 3.12033 8.722 2.97633 9.555C2.88033 10.143 2.78433 11.417 2.73633 12.397V13.573V35.084V36.26C2.78433 37.24 2.83233 38.514 2.97633 39.053C3.16833 39.935 3.40833 40.768 3.74433 41.454C4.12833 42.238 4.65633 42.973 5.28033 43.61C5.90433 44.247 6.57633 44.737 7.39233 45.178C8.06433 45.521 8.88033 45.815 9.69633 45.962C10.2723 46.06 11.5203 46.158 12.4803 46.207H13.6323H34.7043H35.8563C36.8163 46.158 38.0643 46.109 38.5923 45.962C39.4563 45.766 40.2723 45.521 40.9443 45.178C41.7123 44.786 42.4323 44.247 43.0563 43.61C43.6803 42.973 44.1603 42.287 44.5923 41.454C44.9283 40.768 45.2163 39.935 45.3603 39.102C45.4563 38.514 45.5523 37.24 45.6003 36.26C45.6003 35.868 45.6003 35.329 45.6003 35.084V13.573C45.6003 13.328 45.6003 12.838 45.6003 12.397C45.5523 11.417 45.5043 10.143 45.3603 9.604C45.1683 8.722 44.9283 7.889 44.5923 7.203C44.2083 6.419 43.6803 5.684 43.0563 5.047C42.4323 4.41 41.7603 3.92 40.9443 3.479C40.2723 3.136 39.4563 2.842 38.6403 2.695C38.0643 2.597 36.8163 2.499 35.8563 2.45C35.4723 2.45 34.9443 2.45 34.7043 2.45H13.6323Z" fill="url(#paint0_linear_207_40)"/>
      <path d="M31.9688 26.656C31.5848 26.46 29.6648 25.529 29.3288 25.382C28.9928 25.235 28.7048 25.186 28.4648 25.578C28.2248 25.97 27.4568 26.852 27.2648 27.097C27.0248 27.342 26.8328 27.391 26.4488 27.195C26.0648 26.999 24.8168 26.607 23.3288 25.284C22.1768 24.255 21.4088 22.981 21.1688 22.589C20.9288 22.197 21.1688 22.001 21.3608 21.805C21.5528 21.609 21.7448 21.364 21.9368 21.119C22.1288 20.874 22.1768 20.727 22.3208 20.482C22.4648 20.237 22.3688 19.992 22.2728 19.796C22.1768 19.6 21.4088 17.689 21.0728 16.905C20.7368 16.17 20.4488 16.268 20.2088 16.219C19.9688 16.219 19.7288 16.219 19.4888 16.219C19.2488 16.219 18.8168 16.317 18.4808 16.709C18.1448 17.101 17.1368 18.032 17.1368 19.943C17.1368 21.854 18.5288 23.667 18.7208 23.961C18.9128 24.206 21.4568 28.126 25.2968 29.792C26.2088 30.184 26.9288 30.429 27.5048 30.625C28.4168 30.919 29.2808 30.87 29.9528 30.772C30.6728 30.674 32.2568 29.841 32.5448 28.959C32.8808 28.077 32.8808 27.293 32.7848 27.146C32.5928 26.95 32.3528 26.852 31.9688 26.656ZM24.6248 36.75C22.3208 36.75 20.1128 36.113 18.1448 34.937L17.6648 34.643L12.8648 35.917L14.1608 31.164L13.8728 30.674C12.6248 28.616 11.9528 26.264 11.9528 23.814C11.9528 16.709 17.6648 10.927 24.6728 10.927C27.9848 10.927 31.2008 12.25 33.6008 14.7C36.0008 17.15 37.2968 20.384 37.2968 23.814C37.2968 30.919 31.5848 36.75 24.6248 36.75ZM35.4248 12.838C32.5448 9.898 28.7048 8.281 24.6248 8.281C16.2248 8.281 9.3608 15.239 9.3608 23.814C9.3608 26.558 10.0808 29.204 11.3768 31.556L9.2168 39.592L17.2808 37.436C19.4888 38.661 22.0328 39.347 24.5768 39.347C32.9768 39.347 39.8408 32.389 39.8408 23.814C39.8888 19.698 38.3048 15.778 35.4248 12.838Z" fill="white"/>
      <defs>
        <linearGradient id="paint0_linear_207_40" x1="24.1827" y1="2.4598" x2="24.1827" y2="46.1776" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62FA7F" /><stop offset="0.6865" stopColor="#22CC40" /><stop offset={1} stopColor="#05B723" />
        </linearGradient>
      </defs>
    </svg>
  );

  // Body on scroll add class to header
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-[#ECECEC] py-2 px-4 transition-all duration-300 ${isScrolled ? 'shadow-md bg-white' : ''}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-4 sm:gap-8">
        {/* Logo */}
        <Link 
          href="/" 
          title="Logo"
          aria-label="Home"
          className="relative flex-shrink-0">
          <Image  
            src="/logo.webp"  
            alt="Company Logo"
            width={80}
            height={1000}
            className="object-cover w-[60px] sm:w-[80px] md:w-[80px] lg:w-[80px]"
            sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, 90px"
            priority
            fetchPriority="high"
          />
        </Link>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer z-50 focus:outline-none rounded-lg transition-all hover:bg-gray-100">
          {!isMobileMenuOpen ? (
            <svg width={23} height={23} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width={23} height={23} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                <div 
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => handleDesktopSubmenuEnter(link.label)}
                  onMouseLeave={handleDesktopSubmenuLeave}>
                  <button
                    className={`flex items-center gap-1 text-sm lg:text-base font-normal transition-all duration-200 rounded px-3 py-2 ${
                      isActiveLink(link.href) || (servicesWithSubmenu.subItems && isAnySubmenuActive(servicesWithSubmenu.subItems))
                        ? 'text-primary'
                        : 'text-secondary hover:text-primary'
                    }`}
                    aria-expanded={activeServiceSubmenu === link.label}>
                    {link.label}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${activeServiceSubmenu === link.label ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Desktop Submenu */}
                  {activeServiceSubmenu === link.label && servicesWithSubmenu.subItems && (
                    <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                      <div className="py-2">
                        {/* Submenu Items */}
                        {servicesWithSubmenu.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-4 py-2 transition-colors ${
                              isActiveLink(subItem.href) ? 'bg-primary/10' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setActiveServiceSubmenu(null)}>
                            <div className={`text-sm transition-colors ${
                              isActiveLink(subItem.href)
                                ? 'text-primary font-semibold'
                                : 'text-secondary hover:text-primary hover:underline'
                            }`}>
                              {subItem.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-base font-normal transition-all duration-200 rounded px-3 py-2 ${
                  isActiveLink(link.href)
                    ? 'text-primary underline underline-offset-4'
                    : 'text-secondary hover:text-primary hover:underline hover:underline-offset-4'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <Link 
          href="https://wa.me/61433101353" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Start chat"
          className="hidden md:flex items-center justify-center gap-1.5 sm:gap-2 bg-primary to-red-700 hover:bg-black hover:to-red-800 text-white border-none px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg cursor-pointer text-xs sm:text-sm font-medium transition-all duration-200 hover:shadow-md active:scale-95 focus:outline-none"
        >
          <WhatsAppIcon />
          <span className="font-normal">Chat Now</span>
        </Link>

        {/* Mobile Navigation */}
        <nav 
          id="mobile-navigation" 
          ref={mobileMenuRef} 
          className={`absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-label="Mobile navigation" 
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="py-3 px-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link) => {
              if (link.label === 'Services') {
                return (
                  <div key={link.href} className="space-y-1">
                    <button
                      onClick={() => toggleSubmenu(link.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-normal rounded-lg transition-all duration-200 ${
                        isActiveLink(link.href) || (servicesWithSubmenu.subItems && isAnySubmenuActive(servicesWithSubmenu.subItems))
                          ? 'text-primary'
                          : 'text-secondary hover:bg-gray-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === link.label ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Submenu */}
                    {openSubmenu === link.label && servicesWithSubmenu.subItems && (
                      <div className="ml-4 pl-2 border-l-2 border-gray-200 space-y-1">
                        {servicesWithSubmenu.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={closeMobileMenu}
                            className={`block px-4 py-2 rounded-lg transition-colors ${
                              isActiveLink(subItem.href) ? 'bg-primary/10' : 'hover:bg-gray-50'
                            }`}
                          >
                            <div className={`text-sm transition-colors ${
                              isActiveLink(subItem.href)
                                ? 'text-primary font-semibold'
                                : 'text-secondary hover:text-primary'
                            }`}>
                              {subItem.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-sm font-normal rounded-lg transition-all duration-200 ${
                    isActiveLink(link.href)
                      ? 'text-primary underline underline-offset-4'
                      : 'text-secondary hover:bg-gray-50 hover:text-primary hover:pl-6'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Mobile CTA Button */}
            <Link 
              href="https://wa.me/61433101353" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Start chat"
              className="w-full mt-4 flex items-center justify-center gap-2 bg-primary hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg text-sm font-normal transition-all duration-200 active:scale-95"
            >
              <WhatsAppIcon />
              <span>Chat Now</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;