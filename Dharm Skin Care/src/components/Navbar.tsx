import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Eye } from 'lucide-react';
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

      // Hide when scrolling down past 80px; show when scrolling up
      if (currentScrollY > 80 && currentScrollY > lastScrollY && !mobileMenuOpen) {
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
      lenis.scrollTo(href, { offset: -100 });
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 100;
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
    { name: 'Eye Care', href: '#eye-care' },
    { name: 'Skin & Aesthetics', href: '#skin-care' },
    { name: 'Meet Doctor', href: '#doctor' },
    { name: 'Technology', href: '#technology' },
    { name: 'Timings & Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-3 sm:top-5 left-0 right-0 z-50 px-2 sm:px-4 lg:px-6 max-w-[1440px] mx-auto pointer-events-none transition-all duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`pointer-events-auto w-full transition-all duration-300 rounded-2xl sm:rounded-full border backdrop-blur-xl px-4 sm:px-5 lg:px-6 xl:px-8 ${
          isScrolled
            ? 'bg-white/95 border-slate-300/90 shadow-xl shadow-slate-900/10 py-2.5 sm:py-3'
            : 'bg-white/90 border-slate-200/90 shadow-lg shadow-slate-900/5 py-3 sm:py-3.5'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0B4F6C] flex items-center justify-center text-white shadow-md group-hover:bg-[#07384D] transition-colors shrink-0">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="shrink-0">
              <div className="font-serif text-sm sm:text-base lg:text-lg font-bold text-slate-900 tracking-tight leading-none whitespace-nowrap">
                Dharm <span className="text-[#0B4F6C]">Skin & Eye</span>
              </div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-0.5 whitespace-nowrap">
                Centre • Mathura
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links - Guaranteed Single Line & Compact Gap */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100/90 transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold text-[#0B4F6C] bg-[#EBF5F9] hover:bg-[#D6ECF5] border border-[#0B4F6C]/20 transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B4F6C] shrink-0" />
              <span className="whitespace-nowrap">{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-1.5 px-3.5 xl:px-4.5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold text-slate-900 bg-[#E8A33D] hover:bg-[#D48E27] shadow-sm hover:shadow-md transition-all animate-pulse-glow whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-900 shrink-0" />
              <span className="whitespace-nowrap">Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              aria-label="Call Clinic"
              className="p-2.5 rounded-full text-[#0B4F6C] bg-[#EBF5F9] border border-[#0B4F6C]/20"
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
          <div className="sm:hidden mt-3 pt-3 pb-4 border-t border-slate-200/80 animate-fadeIn">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100/80"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-[#0B4F6C] bg-[#EBF5F9] border border-[#0B4F6C]/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic ({CLINIC_INFO.phone})</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-slate-900 bg-[#E8A33D] shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
