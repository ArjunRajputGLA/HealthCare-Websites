import React, { useEffect, useRef } from 'react';
import { Calendar, Stethoscope, Star, Users } from 'lucide-react';
import { getLenis } from '../hooks/useSmoothScroll';
import { animate, createTimeline, stagger } from 'animejs';
import { animateCounter, animateFloatingLoop } from '../utils/animeEffects';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  const countRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Counter Animations
    if (countRef.current) {
      animateCounter(countRef.current, 3500, '', '+', 2200);
    }
    if (yearsRef.current) {
      animateCounter(yearsRef.current, 13, '', '+', 1800);
    }

    // 2. Floating Ambient Oscillations
    if (badge1Ref.current) {
      animateFloatingLoop(badge1Ref.current, 10, 3200);
    }
    if (badge2Ref.current) {
      animateFloatingLoop(badge2Ref.current, 14, 3800);
    }
    if (circle1Ref.current) {
      animate(circle1Ref.current, {
        scale: [0.95, 1.05],
        duration: 4000,
        alternate: true,
        loop: true,
        ease: 'inOutSine'
      });
    }
    if (circle2Ref.current) {
      animate(circle2Ref.current, {
        scale: [1.05, 0.95],
        duration: 4500,
        alternate: true,
        loop: true,
        ease: 'inOutSine'
      });
    }

    // 3. Staggered Entrance Timeline
    const timeline = createTimeline({
      duration: 1000
    });

    timeline
      .add('.hero-anime-item', {
        opacity: [0, 1],
        translateY: [25, 0],
        delay: stagger(120)
      })
      .add(
        '.hero-doctor-frame',
        {
          opacity: [0, 1],
          scale: [0.92, 1],
          duration: 1100
        },
    );
  }, []);

  return (
    <section id="hero" className="pt-24 sm:pt-28 md:pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main Hero Container Card - Soft Mint Teal */}
      <div className="relative rounded-3xl lg:rounded-[36px] bg-[#F0FDFA] border border-[#CCFBF1] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-xs">
        
        {/* Background Subtle Gradient Blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="hero-anime-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 shadow-xs border border-slate-200/80 text-[#0F766E] text-xs sm:text-sm font-bold">
              <Stethoscope className="w-4 h-4 text-[#0F766E]" />
              <span>Your Skin &amp; Eye Health Our Priority</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-anime-item text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] tracking-tight">
              Expert medical care you can rely on
            </h1>

            {/* Subheadline */}
            <p className="hero-anime-item text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Experience healthcare you trust. Our dedicated team provides compassionate, high-quality care with Mathura’s 1st Perimetry machine &amp; imported lens cataract surgery.
            </p>

            {/* CTA Pill Buttons */}
            <div className="hero-anime-item flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAppointment}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0F766E] hover:bg-[#0D9488] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#0F766E]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
              </button>

              <a
                href="#vision-simulator"
                onClick={(e) => {
                  e.preventDefault();
                  const lenis = getLenis();
                  if (lenis) lenis.scrollTo('#vision-simulator', { offset: -110 });
                  else document.getElementById('vision-simulator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm sm:text-base shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="text-base">👁️</span>
                <span>Vision Simulator</span>
              </a>

              <a
                href="#screener"
                onClick={(e) => {
                  e.preventDefault();
                  const lenis = getLenis();
                  if (lenis) lenis.scrollTo('#screener', { offset: -110 });
                  else document.getElementById('screener')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm sm:text-base shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-[#0F766E]" />
                <span>Symptom Screener</span>
              </a>

            </div>

            {/* Google Rating Badge */}
            <div className="hero-anime-item pt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
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
              <div ref={circle1Ref} className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] bg-[#CCFBF1] rounded-full -z-10" />
              <div ref={circle2Ref} className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] bg-[#A7F3D0] rounded-full -z-10" />

              {/* Main Doctor Frame */}
              <div className="hero-doctor-frame relative w-[280px] sm:w-[340px] h-[360px] sm:h-[430px] rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
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
              <div ref={badge1Ref} className="absolute top-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="/images/ChandanSinghKushwah.jpg" alt="Doctor" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/images/arpita-gupta.jpg" alt="Doctor" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <div ref={yearsRef} className="w-8 h-8 rounded-full bg-[#0F766E] text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                    13+
                  </div>
                </div>
                <div className="text-[11px] font-bold text-slate-900 leading-tight">
                  Talk to our<br />Expert Doctors
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right Client Count */}
              <div ref={badge2Ref} className="absolute bottom-16 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F766E] text-white flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div ref={countRef} className="text-base font-extrabold text-slate-900 leading-none">3500+</div>
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