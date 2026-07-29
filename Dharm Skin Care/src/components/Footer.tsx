import React from 'react';
import { Eye, MapPin, Phone, Clock, ArrowUp, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F766E] text-white flex items-center justify-center font-bold shadow-md">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <div className="font-sans text-xl font-bold text-white tracking-tight">
                  Dharm <span className="text-[#0F766E]">Skin &amp; Eye</span> Centre
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {CLINIC_INFO.altName}
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              "{CLINIC_INFO.tagline}" — Bringing Mathura's first computerized perimetry visual field technology, imported cataract lenses, and expert dermatology under one roof.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="px-5 py-2.5 rounded-full bg-[#0F766E] text-white hover:bg-[#0D9488] text-xs font-bold flex items-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>Call Clinic</span>
              </a>
              <a
                href={CLINIC_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold flex items-center gap-2 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#hero" className="hover:text-[#0F766E] transition-colors">Home Overview</a></li>
              <li><a href="#about-us" className="hover:text-[#0F766E] transition-colors">About Us</a></li>
              <li><a href="#eye-care" className="hover:text-[#0F766E] transition-colors">Eye Care &amp; Perimetry</a></li>
              <li><a href="#skin-care" className="hover:text-[#0F766E] transition-colors">Skin &amp; Aesthetic Clinic</a></li>
              <li><a href="#doctor" className="hover:text-[#0F766E] transition-colors">Specialist Doctors</a></li>
              <li><a href="#technology" className="hover:text-[#0F766E] transition-colors">First in Mathura Tech</a></li>
              <li><a href="#location" className="hover:text-[#0F766E] transition-colors">Timings &amp; Google Maps</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Clinic Contact &amp; Hours
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0F766E] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:underline font-mono text-sm font-bold text-white">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <div>Mon-Sat: 9:00 AM – 6:00 PM</div>
                  <div>Sunday: 8:00 AM – 12:00 PM</div>
                  <div className="text-amber-400 font-bold mt-0.5">Thursday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © 2026 Dharm Skin & Eye Centre. All rights reserved. | Mathura, Uttar Pradesh
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

