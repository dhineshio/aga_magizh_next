'use client';

import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, Phone, Twitter, Users, Menu, X, ChevronDown, HandCoins } from 'lucide-react';
interface BaseLayoutProps {
  children: React.ReactNode;
}

interface MenuItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState<number | null>(null);
  const [openStickySubmenu, setOpenStickySubmenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [stickyHoverTimeout, setStickyHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubmenu(null); // Close all submenus when main menu closes
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  // Original header hover handlers
  const handleMouseEnter = (index: number) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenDesktopSubmenu(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDesktopSubmenu(null);
    }, 500); // Increased delay
    setHoverTimeout(timeout);
  };

  const handleSubmenuMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleSubmenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDesktopSubmenu(null);
    }, 300);
    setHoverTimeout(timeout);
  };

  // Sticky header hover handlers
  const handleStickyMouseEnter = (index: number) => {
    if (stickyHoverTimeout) {
      clearTimeout(stickyHoverTimeout);
      setStickyHoverTimeout(null);
    }
    setOpenStickySubmenu(index);
  };

  const handleStickyMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenStickySubmenu(null);
    }, 500); // Increased delay
    setStickyHoverTimeout(timeout);
  };

  const handleStickySubmenuMouseEnter = () => {
    if (stickyHoverTimeout) {
      clearTimeout(stickyHoverTimeout);
      setStickyHoverTimeout(null);
    }
  };

  const handleStickySubmenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenStickySubmenu(null);
    }, 300);
    setStickyHoverTimeout(timeout);
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          
          // Only process if scroll difference is significant (reduces sensitivity)
          if (scrollDifference < 5) {
            ticking = false;
            return;
          }
          
          if (currentScrollY > 150) {
            setIsScrolled(true);
            
            // Show header when scrolling up OR when first reaching threshold
            if (currentScrollY < lastScrollY) {
              setShowHeader(true);
            } 
            // Hide header only when scrolling down significantly (50px+)
            else if (currentScrollY > lastScrollY && scrollDifference > 50 && currentScrollY > 300) {
              setShowHeader(false);
            }
            // Keep header visible when first entering scroll zone
            else if (!showHeader && currentScrollY > 150) {
              setShowHeader(true);
            }
          } else {
            // Hide header when near top of page
            setIsScrolled(false);
            setShowHeader(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, showHeader]);

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '#' },
    { 
      label: 'About Us', 
      href: '#',
    },
    { 
      label: 'Our Programs', 
      href: '#',
      submenu: [
        { label: 'Rescue For Homeless People', href: '#education' },
        { label: 'Hunger Free Society', href: '#healthcare' },
        { label: 'Grocery & Essential Support', href: '#community' },
        { label: 'Education Support', href: '#women' },
        { label: 'Tree Plantation', href: '#women' },
        { label: 'Awareness Program', href: '#women' },
      ]
    },
    { 
      label: 'Get Involved', 
      href: '#',
      submenu: [
        { label: 'Volunteer', href: '#volunteer' },
        { label: 'Donate', href: '#donate' },
        { label: 'Partnership', href: '#partnership' },
      ]
    },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className='bg-[#f7f3ef]'>
        {/* Top Bar */}
        <div className="bg-primary text-white py-2 md:py-4 px-4 md:px-8 mx-2 md:mx-8 rounded-b-2xl">
          <div className="container mx-auto flex items-center justify-between gap-2">
            {/* Left Side - Volunteer Message */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Dual Profile Icon */}
              <div className="relative flex items-center">
               <Users size={18} className='text-secondary'/>
              </div>
              {/* Volunteer Text */}
              <div className="text-sm whitespace-nowrap">
                <span className="text-white/90">Let&apos;s Help Others : </span>
                <a href="#" className="font-bold text-white hover:text-secondary transition-colors">BECOME A VOLUNTEER</a>
              </div>
            </div>

            {/* Right Side - Contact & Social */}
            <div className="w-full flex justify-between lg:justify-end lg:gap-4 items-center">
              {/* Contact Info - Hidden on mobile, show progressively */}
              <div className='flex justify-between items-center gap-4'>
                <a href="tel:+917824015120" className='flex items-center md:gap-2 lg:border-r lg:border-gray-400 lg:pr-4' >
                  <Phone size={18} className='text-secondary'/> 
                  <span className='hidden md:block text-sm'>+91 7824015120</span>
                </a> 
                <a href="mailto:agamagizhtrust2020@gmail.com" className='flex items-center md:gap-2 lg:border-r lg:border-gray-400 lg:pr-4'>
                  <Mail size={18} className='text-secondary'/> 
                  <span className='hidden md:block text-sm'>agamagizhtrust2020@gmail.com</span>
                </a>
              </div>
              
              {/* Social Icons - Always visible */}
              <div className="flex items-center gap-2 md:gap-3">
                <a href="#" aria-label="Facebook">
                  <Facebook size={18} className='text-secondary'/>
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram size={18} className='text-secondary'/>
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter size={18} className='text-secondary'/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <header className="w-full py-4 relative">
          {/* Header content will go here */}
          <div className="px-4 md:px-8 lg:px-18 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="./logo.png" alt="Logo" className='h-[64px] w-[64px] lg:h-[100px] lg:w-[100px]' />
              <div>
                <h1 className="text-base md:text-xl lg:text-2xl tracking-tighter text-primary font-extrabold">AGA MAGIZH TRUST</h1>
                <p className="text-xs md:text-sm text-gray-500">Reg No : 47/20</p>
              </div>
            </div>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-6">
                {menuItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="relative group"
                  >
                    {item.submenu ? (
                      <div
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          className="flex font-semibold items-center gap-1 text-primary hover:text-secondary transition-colors "
                        >
                          {item.label}
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${
                              openDesktopSubmenu === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {/* Desktop Submenu Dropdown */}
                        {openDesktopSubmenu === index && (
                          <div 
                            className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[250px] z-50"
                            onMouseEnter={handleSubmenuMouseEnter}
                            onMouseLeave={handleSubmenuMouseLeave}
                          >
                            {item.submenu.map((subitem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subitem.href}
                                className="block px-4 py-2 text-primary hover:bg-secondary/10 hover:text-secondary transition-colors"
                              >
                                {subitem.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a 
                        href={item.href} 
                        className="text-primary hover:text-secondary transition-colors font-semibold"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-4 py-3 rounded-lg transition-colors cursor-pointer duration-200">Donate Now</button>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu - Slides from top to bottom */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="px-4 py-4 bg-white mt-4">
              <ul className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="w-full flex items-center justify-between py-2 px-4 text-primary hover:bg-secondary/10 hover:text-secondary transition-colors rounded-lg font-medium"
                        >
                          {item.label}
                          <ChevronDown 
                            size={18} 
                            className={`transition-transform duration-200 ${
                              openSubmenu === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {/* Mobile Submenu */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openSubmenu === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <ul className="pl-4 mt-2 space-y-1">
                            {item.submenu.map((subitem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href={subitem.href}
                                  className="block py-2 px-4 text-sm text-gray-600 hover:bg-secondary/10 hover:text-secondary transition-colors rounded-lg"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenSubmenu(null);
                                  }}
                                >
                                  {subitem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-2 px-4 text-primary hover:bg-secondary/10 hover:text-secondary transition-colors rounded-lg font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {/* Floating Sticky Header - Shows on Scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          showHeader && isScrolled 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="px-4 md:px-8 lg:px-18 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="./logo.png" alt="Logo" className='h-[48px] w-[48px] lg:h-[60px] lg:w-[60px]' />
            <div>
              <h1 className="text-sm md:text-lg lg:text-xl tracking-tighter text-primary font-extrabold">AGA MAGIZH TRUST</h1>
              <p className="text-xs text-gray-500">Reg No : 47/20</p>
            </div>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className="relative group"
                >
                  {item.submenu ? (
                    <div
                      onMouseEnter={() => handleStickyMouseEnter(index)}
                      onMouseLeave={handleStickyMouseLeave}
                    >
                      <button
                        className="flex font-semibold items-center gap-1 text-primary hover:text-secondary transition-colors"
                      >
                        {item.label}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            openStickySubmenu === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {/* Desktop Submenu Dropdown */}
                      {openStickySubmenu === index && (
                        <div 
                          className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[250px] z-50"
                          onMouseEnter={handleStickySubmenuMouseEnter}
                          onMouseLeave={handleStickySubmenuMouseLeave}
                        >
                          {item.submenu.map((subitem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subitem.href}
                              className="block px-4 py-2 text-primary hover:bg-secondary/10 hover:text-secondary transition-colors"
                            >
                              {subitem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={item.href} 
                      className="text-primary hover:text-secondary transition-colors font-semibold"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-4 py-2 rounded-lg transition-colors cursor-pointer duration-200 text-sm">
              Donate Now
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu for Sticky Header */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-4 bg-white border-t">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="w-full flex items-center justify-between py-2 px-4 text-primary hover:bg-secondary/10 hover:text-secondary transition-colors rounded-lg font-medium"
                      >
                        {item.label}
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-200 ${
                            openSubmenu === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {/* Mobile Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openSubmenu === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <ul className="pl-4 mt-2 space-y-1">
                          {item.submenu.map((subitem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subitem.href}
                                className="block py-2 px-4 text-sm text-gray-600 hover:bg-secondary/10 hover:text-secondary transition-colors rounded-lg"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenSubmenu(null);
                                }}
                              >
                                {subitem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 px-4 text-primary hover:bg-secondary/10 hover:text-secondary transition-colors rounded-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="grow">
        {children}
      </main>

      {/* Footer Section */}
      <footer className="w-full">
        {/* Footer content will go here */}
      </footer>
    </div>
  );
}
