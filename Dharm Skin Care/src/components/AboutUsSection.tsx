import React, { useEffect, useRef } from 'react';
import { Stethoscope, Clock, ShieldCheck, HeartPulse, Sparkles, ArrowRight, Video } from 'lucide-react';
import { getLenis } from '../hooks/useSmoothScroll';
import { animate, stagger } from 'animejs';

export const AboutUsSection: React.FC = () => {
  const clockBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Clock badge subtle rotation & pulse
    if (clockBadgeRef.current) {
      animate(clockBadgeRef.current, {
        rotate: [-8, 8],
        scale: [1, 1.08],
        duration: 3500,
        alternate: true,
        loop: true,
        ease: 'inOutSine'
      });
    }

    // 2. Staggered feature row reveal
    animate('.about-feature-row', {
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 800,
      delay: stagger(150),
      ease: 'outCubic'
    });
  }, []);


  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo('#location', { offset: -110 });
    } else {
      const el = document.getElementById('location');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Information & Feature List */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF1FC] text-[#4C59D8] text-xs sm:text-sm font-bold tracking-wide">
              <Stethoscope className="w-4 h-4 text-[#4C59D8]" />
              <span>About Us</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Professionals dedicated to your health
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Our team of skilled specialists is committed to providing personalized, compassionate care. With Mathura’s first perimetry visual field technology and 13+ years of clinical excellence, we safeguard your vision and skin health.
            </p>

            {/* 3 Feature Rows */}
            <div className="space-y-6 pt-2">
              
              {/* Feature 1 */}
              <div className="about-feature-row flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-[#EFF2FC]/60">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF1FC] flex items-center justify-center text-[#4C59D8] shrink-0 shadow-xs">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Patient-Centered Care
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Putting you at the heart of everything we do. Our patient-centered approach ensures personalized treatment for every eye and skin condition.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="about-feature-row flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-[#EFF2FC]/60">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF1FC] flex items-center justify-center text-[#4C59D8] shrink-0 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Specialist Doctors
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Led by Dr. Chandan Singh Kushwah (MD Skin &amp; VD, S.N. Medical College) &amp; Dr. Arpita Gupta (MS Ophthalmology, Phaco Surgeon).
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="about-feature-row flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-[#EFF2FC]/60">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF1FC] flex items-center justify-center text-[#4C59D8] shrink-0 shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Mathura's 1st Perimetry Technology
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Equipped with advanced computerized visual field diagnostics for early glaucoma detection and premium imported (videshi) cataract lenses.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#location"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#4C59D8] hover:bg-[#3B47C5] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#4C59D8]/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>View More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Doctor Showcase Grid & Floating Opening Hours Card */}
          <div className="lg:col-span-6 relative pt-4 lg:pt-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              
              {/* Doctor Showcase 2-Column Grid */}
              <div className="grid grid-cols-12 gap-4 items-stretch">
                
                {/* Male Doctor: Dr. Chandan Singh Kushwah (Dermatologist) */}
                <div className="col-span-7 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-950 aspect-[3/4] group">
                  <img
                    src="/images/ChandanSinghKushwah.jpg"
                    alt="Dr. Chandan Singh Kushwah - Skin Specialist"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  {/* Doctor Name Badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-white p-2.5 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/20 text-center">
                    <div className="text-xs sm:text-sm font-extrabold text-white">Dr. Chandan S. Kushwah</div>
                    <div className="text-[10px] text-slate-300 font-semibold mt-0.5">MD Skin &amp; VD • Dermatologist</div>
                  </div>
                </div>

                {/* Female Doctor: Dr. Arpita Gupta (Eye Specialist) & Consultation Tag */}
                <div className="col-span-5 flex flex-col justify-between space-y-3">
                  
                  {/* Doctor Card */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-950 aspect-[3/4] group flex-1">
                    <img
                      src="/images/arpita-gupta.jpg"
                      alt="Dr. Arpita Gupta - Eye Specialist"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white p-2 bg-slate-900/80 backdrop-blur-md rounded-xl text-center border border-white/20">
                      <div className="text-xs font-bold text-white">Dr. Arpita Gupta</div>
                      <div className="text-[10px] text-slate-300 font-medium">MS Ophthalmology</div>
                    </div>
                  </div>

                  {/* Consultation Support Badge */}
                  <div className="bg-[#EEF1FC] p-3 rounded-2xl border border-[#DFE5FA] flex items-center gap-2.5 hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-xl bg-[#4C59D8] text-white flex items-center justify-center shrink-0">
                      <Video className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-bold text-[#4C59D8] uppercase tracking-wider leading-none">
                        Video Support
                      </div>
                      <div className="text-[10px] text-slate-600 font-semibold mt-0.5">
                        WhatsApp Consult
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Opening Hours Card Floating Below Cleanly */}
              <div className="mt-5 bg-[#4C59D8] text-white p-5 rounded-3xl shadow-2xl border border-white/10 relative">
                
                {/* Circular Clock Badge Top Right */}
                <div ref={clockBadgeRef} className="absolute -top-4 right-4 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <Clock className="w-5 h-5" />
                </div>

                <h4 className="text-sm font-extrabold mb-3 border-b border-white/20 pb-2">
                  OPD Opening Hours
                </h4>

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                  <div className="bg-white/10 p-2.5 rounded-2xl hover:bg-white/20 transition-colors">
                    <div className="opacity-80 text-[10px]">Mon To Sat</div>
                    <div className="font-bold text-white text-[11px] mt-0.5">09:00 AM – 06:00 PM</div>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-2xl hover:bg-white/20 transition-colors">
                    <div className="opacity-80 text-[10px]">Sunday</div>
                    <div className="font-bold text-white text-[11px] mt-0.5">08:00 AM – 12:00 PM</div>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-2xl hover:bg-white/20 transition-colors">
                    <div className="opacity-80 text-[10px]">Thursday</div>
                    <div className="font-bold text-amber-300 text-[11px] mt-0.5">Closed</div>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-white/80 text-center font-medium">
                  📍 Shankar Vihar, Krishna Nagar, Mathura (Opp. Tanishq Jewellers)
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


