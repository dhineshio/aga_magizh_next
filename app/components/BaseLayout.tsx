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
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

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
    }, 500);
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
    }, 500);
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
          
          if (scrollDifference < 5) {
            ticking = false;
            return;
          }
          
          if (currentScrollY > 150) {
            setIsScrolled(true);
            
            if (currentScrollY < lastScrollY) {
              setShowHeader(true);
            } 
            else if (currentScrollY > lastScrollY && scrollDifference > 50 && currentScrollY > 300) {
              setShowHeader(false);
            }
            else if (!showHeader && currentScrollY > 150) {
              setShowHeader(true);
            }
          } else {
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
    { label: 'Home', href: '/' },
    { 
      label: 'About Us', 
      href: '/about',
    },
    { 
      label: 'Our Programs', 
      href: '#',
      submenu: [
        { label: 'Rescue For Homeless People', href: '/programs/homeless-rescue' },
        { label: 'Hunger Free Society', href: '/programs/food-distribution' },
        { label: 'Grocery & Essential Support', href: '/programs/grocery-support' },
        { label: 'Education Support', href: '/programs/education-support' },
        { label: 'Tree Plantation', href: '/programs/tree-plantation' },
        { label: 'Awareness Program', href: '/programs/awareness-programs' },
      ]
    },
    { 
      label: 'Get Involved', 
      href: '#',
      submenu: [
        { label: 'Volunteer', href: '/volunteer' },
        { label: 'Donate', href: '/donate' },
        { label: 'Partnership', href: '/partnership' },
      ]
    },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className='bg-[#f7f3ef]'>
        {/* Top Bar */}
        <div className="bg-primary text-white py-2 md:py-4 px-4 md:px-8 mx-2 md:mx-8 rounded-b-2xl">
          <div className="container mx-auto flex items-center justify-between gap-2">
            {/* Left Side - Volunteer Message */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="relative flex items-center">
               <Users size={18} className='text-secondary'/>
              </div>
              <div className="text-sm whitespace-nowrap">
                <span className="text-white/90">Let&apos;s Help Others : </span>
                <a href="#" className="font-bold text-white hover:text-secondary transition-colors">BECOME A VOLUNTEER</a>
              </div>
            </div>

            {/* Right Side - Contact & Social */}
            <div className="w-full flex justify-between lg:justify-end lg:gap-4 items-center">
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
          <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center max-w-7xl">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className='h-[64px] w-[64px] lg:h-[100px] lg:w-[100px]' />
              <div>
                <h1 className="text-base md:text-xl lg:text-2xl tracking-tighter text-primary font-extrabold">AGA MAGIZH TRUST</h1>
                <p className="text-xs md:text-sm text-gray-500">Reg No : 47/20</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
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
              <a href="/donate" className="inline-flex items-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-4 py-3 rounded-lg transition-colors cursor-pointer duration-200">Donate Now</a>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-primary hover:text-secondary transition-colors flex-shrink-0"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
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

      {/* Floating Sticky Header */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          showHeader && isScrolled 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 flex justify-between items-center max-w-7xl min-w-0">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
            <img src="/logo.png" alt="Logo" className='h-[48px] w-[48px] lg:h-[60px] lg:w-[60px] flex-shrink-0' />
            <div className="min-w-0">
              <h1 className="text-sm md:text-lg lg:text-xl tracking-tighter text-primary font-extrabold whitespace-nowrap">AGA MAGIZH TRUST</h1>
              <p className="text-xs text-gray-500 whitespace-nowrap">Reg No : 47/20</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
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
            <a href="/donate" className="inline-flex items-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-4 py-2 rounded-lg transition-colors cursor-pointer duration-200 text-sm">
              Donate Now
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors flex-shrink-0"
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
      <footer className="w-full bg-primary text-white">
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Organization Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className='p-2 bg-white rounded-full'>
                  <img src="/logo.png" alt="AGA MAGIZH TRUST Logo" className="h-16 w-16"  />
                </div>
                <div className='self-start'>
                  <h3 className="text-xl font-bold text-white">AGA MAGIZH TRUST</h3>
                  <p className="text-sm text-gray-300">Reg No: 47/20</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Dedicated to creating positive change in our community through education, hunger eradication, shelter for the homeless, and environmental sustainability since 2020.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-secondary hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-secondary hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-secondary hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/volunteer" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="/donate" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/partnership" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Programs */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Our Programs</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/programs/homeless-rescue" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Rescue For Homeless People
                  </a>
                </li>
                <li>
                  <a href="/programs/food-distribution" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Hunger Free Society
                  </a>
                </li>
                <li>
                  <a href="/programs/grocery-support" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Grocery & Essential Support
                  </a>
                </li>
                <li>
                  <a href="/programs/education-support" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Education Support
                  </a>
                </li>
                <li>
                  <a href="/programs/tree-plantation" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Tree Plantation
                  </a>
                </li>
                <li>
                  <a href="/programs/awareness-programs" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    Awareness Programs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Get Involved */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+917824015120" className="text-white hover:text-secondary transition-colors text-sm font-medium">
                      +91 7824015120
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:agamagizhtrust2020@gmail.com" className="text-white hover:text-secondary transition-colors text-sm font-medium break-all">
                      agamagizhtrust2020@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Get Involved Section */}
              <div className="pt-4 border-t border-gray-600">
                <h5 className="text-md font-semibold text-white mb-3">Get Involved</h5>
                <div className="space-y-2">
                  <a href="/donate" className="block w-full bg-[#fe5429] hover:bg-[#cb411e] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium text-center">
                    Donate Now
                  </a>
                  <a href="/volunteer" className="block w-full bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium text-center">
                    Become a Volunteer
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mt-12 pt-8 border-t border-gray-600">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">500+</div>
                <div className="text-gray-300 text-sm">Lives Impacted</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">₹4.34L+</div>
                <div className="text-gray-300 text-sm">Funds Raised</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">70+</div>
                <div className="text-gray-300 text-sm">Recognition Awards</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">4+</div>
                <div className="text-gray-300 text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-300 text-sm text-center md:text-left">
                <p>&copy; 2025 Zafra Technologies. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-500">|</span>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Terms of Service
                </a>
                <span className="text-gray-500">|</span>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Transparency
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}