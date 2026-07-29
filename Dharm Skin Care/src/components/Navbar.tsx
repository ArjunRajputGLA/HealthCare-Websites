import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Eye, Clock, Mail, Globe, Share2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { getLenis } from '../hooks/useSmoothScroll';


interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 100 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 40) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsVisible(true);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(href, { offset: -110 });
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 110;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Eye Care', href: '#eye-care' },
    { name: 'Skin Care', href: '#skin-care' },
    { name: 'Meet Doctors', href: '#doctor' },
    { name: 'Technology', href: '#technology' },
    { name: '360° Tour', href: '#virtual-tour' },
    { name: 'Contact Us', href: '#location' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Top Utility Header Bar - Periwinkle Royal Blue */}
      <div className="bg-[#4C59D8] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-1.5 font-medium opacity-90">
              <Clock className="w-3.5 h-3.5 text-white/90" />
              <span>Working Hour: 09:00am to 06:00pm</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium opacity-90">
              <Mail className="w-3.5 h-3.5 text-white/90" />
              <span>Email: info@dharmskineye.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Share" className="hover:opacity-75 transition-opacity">
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Website" className="hover:opacity-75 transition-opacity">
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="h-3 w-px bg-white/20" />
            <div className="flex items-center gap-1.5 font-semibold">
              <span>Contact:</span>
              <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:underline">
                {CLINIC_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#4C59D8] flex items-center justify-center text-white shadow-md shadow-[#4C59D8]/20 group-hover:bg-[#3B47C5] transition-colors shrink-0">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div className="shrink-0">
              <div className="font-sans text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-none">
                Dharm <span className="text-[#4C59D8]">Skin & Eye</span>
              </div>
              <div className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1">
                Centre • Mathura
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#4C59D8] hover:bg-[#EEF1FC] transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs xl:text-sm font-bold text-white bg-[#4C59D8] hover:bg-[#3B47C5] shadow-md shadow-[#4C59D8]/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              aria-label="Call Clinic"
              className="p-2.5 rounded-full text-[#4C59D8] bg-[#EEF1FC]"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-2 pt-3 pb-5 px-4 bg-white border-t border-slate-100 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#4C59D8] hover:bg-[#EEF1FC]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-[#4C59D8] bg-[#EEF1FC]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic ({CLINIC_INFO.phone})</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#4C59D8] shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

