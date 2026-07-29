import React from 'react';
import { Calendar, Stethoscope, Star, Users, ArrowRight } from 'lucide-react';
import { getLenis } from '../hooks/useSmoothScroll';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo('#about-us', { offset: -110 });
    } else {
      const el = document.getElementById('about-us');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 sm:pt-28 md:pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main Hero Container Card - Soft Periwinkle Lavender */}
      <div className="relative rounded-3xl lg:rounded-[36px] bg-[#EFF2FC] border border-[#DFE5FA] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-xs">
        
        {/* Background Subtle Gradient Blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#4C59D8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 shadow-xs border border-slate-200/80 text-[#4C59D8] text-xs sm:text-sm font-bold">
              <Stethoscope className="w-4 h-4 text-[#4C59D8]" />
              <span>Your Skin & Eye Health Our Priority</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] tracking-tight">
              Expert medical care you can rely on
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Experience healthcare you trust. Our dedicated team provides compassionate, high-quality care with Mathura’s 1st Perimetry machine & imported lens cataract surgery.
            </p>

            {/* CTA Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAppointment}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4C59D8] hover:bg-[#3B47C5] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#4C59D8]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book A Appointment</span>
              </button>

              <a
                href="#about-us"
                onClick={handleAboutClick}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5865E0] hover:bg-[#4C59D8] text-white font-bold text-sm sm:text-base shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Google Rating Badge */}
            <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <span>Google Rating <strong className="text-slate-900 font-bold">5.0</strong></span>
              <div className="flex items-center text-[#F59E0B] gap-0.5">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-slate-500 font-medium">Based On 500+ Reviews</span>
            </div>

          </div>

          {/* Right Column: Doctor Portrait & Concentric Circles Graphics */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none flex justify-center items-center">
              
              {/* Concentric Circle Backdrops */}
              <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] bg-[#E2E7FB] rounded-full -z-10" />
              <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] bg-[#D7DEF9] rounded-full -z-10" />

              {/* Main Doctor Frame */}
              <div className="relative w-[280px] sm:w-[340px] h-[360px] sm:h-[430px] rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                <img
                  src="/images/arpita-gupta.jpg"
                  alt="Dr. Arpita Gupta - Eye Specialist"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white p-2 text-center bg-slate-900/40 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="text-sm font-bold">Dr. Arpita Gupta</div>
                  <div className="text-[11px] text-slate-200">MS Ophthalmology • Phaco Surgeon</div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left Avatar Stack */}
              <div className="absolute top-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="flex -space-x-2">
                  <img src="/images/ChandanSinghKushwah.jpg" alt="Doctor" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/images/arpita-gupta.jpg" alt="Doctor" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <div className="w-8 h-8 rounded-full bg-[#4C59D8] text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                    13+
                  </div>
                </div>
                <div className="text-[11px] font-bold text-slate-900 leading-tight">
                  Talk to our<br />Expert Doctors
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right Client Count */}
              <div className="absolute bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4C59D8] text-white flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-none">3500+</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Satisfied Clients</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

