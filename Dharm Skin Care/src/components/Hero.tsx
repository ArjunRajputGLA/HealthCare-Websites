import React from 'react';
import { Phone, Calendar, ArrowRight, Award, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section id="hero" className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F7FA] via-[#FAFAF8] to-[#FAFAF8]">
      {/* Background Subtle Geometric Accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#0B4F6C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-[#E8A33D]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Controls */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Differentiator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5F9] border border-[#0B4F6C]/20 text-[#0B4F6C] text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-[#E8A33D]" />
              <span>Mathura's 1st Automated Computerized Perimetry Technology</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15] tracking-tight">
              Advanced Eye & Skin Care in the Heart of <span className="text-[#0B4F6C] italic font-serif">Mathura</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Bringing state-of-the-art visual field diagnostics, imported cataract lenses, and expert dermatology treatments to Krishna Nagar. Trusted care backed by 13+ years of clinical excellence.
            </p>

            {/* Key Quick Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2">
              <div className="flex items-center gap-2.5 text-slate-700 font-medium text-sm">
                <ShieldCheck className="w-5 h-5 text-[#0B4F6C] shrink-0" />
                <span>Dr. Arpita Gupta (MS Ophthalmology)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-medium text-sm">
                <ShieldCheck className="w-5 h-5 text-[#0B4F6C] shrink-0" />
                <span>Dr. Chandan Singh Kushwah (MD Skin & VD)</span>
              </div>
            </div>

            {/* Call To Action Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#0B4F6C] hover:bg-[#07384D] text-white font-semibold text-base shadow-lg shadow-[#0B4F6C]/25 transition-all hover:scale-[1.01]"
              >
                <Phone className="w-5 h-5 text-[#E8A33D]" />
                <span>Call Now: {CLINIC_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenAppointment}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#E8A33D] hover:bg-[#D48E27] text-slate-900 font-semibold text-base shadow-md transition-all animate-pulse-glow hover:scale-[1.01]"
              >
                <Calendar className="w-5 h-5 text-slate-900" />
                <span>Book Appointment</span>
              </button>

              <a
                href="#eye-care"
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100 font-medium text-base transition-all"
              >
                <span>View Eye Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-[#E8A33D] shrink-0" />
              <span>Opposite Tanishq Jewellers, Shankar Vihar, Krishna Nagar, Mathura</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5]">
                <img
                  src="/images/hero.png"
                  alt="Dharm Skin & Eye Centre Diagnostics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Floating Highlight Card on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0B4F6C]/10 flex items-center justify-center text-[#0B4F6C] shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0B4F6C]">
                        First in Mathura
                      </div>
                      <div className="text-sm font-semibold text-slate-900 leading-tight">
                        Computerized Perimetry Visual Field Test
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Detect Glaucoma & Optic Nerve Health Early
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8A33D]/20 flex items-center justify-center text-slate-900 font-bold text-base">
                  13+
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Years Experience</div>
                  <div className="text-slate-500">Trusted Healthcare</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md">
          <div className="text-center p-3 border-r last:border-r-0 border-slate-100">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#0B4F6C]">1st in Mathura</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Computerized Perimetry</div>
          </div>
          <div className="text-center p-3 border-r last:border-r-0 border-slate-100">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#0B4F6C]">Imported</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Videshi Cataract Lenses</div>
          </div>
          <div className="text-center p-3 border-r last:border-r-0 border-slate-100">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#0B4F6C]">13+ Years</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Clinical Expertise</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#0B4F6C]">Dual Care</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Eye Care & Dermatology</div>
          </div>
        </div>
      </div>
    </section>
  );
};
