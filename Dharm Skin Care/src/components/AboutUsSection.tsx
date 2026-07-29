import React from 'react';
import { Stethoscope, Clock, ShieldCheck, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';
import { getLenis } from '../hooks/useSmoothScroll';


export const AboutUsSection: React.FC = () => {
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
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF1FC] flex items-center justify-center text-[#4C59D8] shrink-0">
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
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF1FC] flex items-center justify-center text-[#4C59D8] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Specialist Doctors
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Led by Dr. Arpita Gupta (MS Ophthalmology, Phaco Surgeon) & Dr. Chandan Singh Kushwah (MD Skin & VD, S.N. Medical College).
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF1FC] flex items-center justify-center text-[#4C59D8] shrink-0">
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

          {/* Right Column: Overlapping Photos & Floating Opening Hours Card */}
          <div className="lg:col-span-6 relative pt-6 lg:pt-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              
              {/* Back Card Image (Doctor Team / Clinic) */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[14/10]">
                <img
                  src="/images/ChandanSinghKushwah.jpg"
                  alt="Dr. Chandan Singh Kushwah - Skin Specialist"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Dark Overlay Badge on Bottom Left of Photo */}
                <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white font-bold text-xs uppercase tracking-wider">
                  WHATSAPP &amp; CLINIC CONSULTATION
                </div>
              </div>

              {/* Overlapping Primary Image (Doctor with Patient / Diagnostics) */}
              <div className="absolute top-10 -left-6 sm:-left-10 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="/images/hero.png"
                  alt="Clinical Care"
                  className="w-full h-44 object-cover"
                />
              </div>

              {/* Overlapping Floating Opening Hours Card - Matching Inspiration UI */}
              <div className="relative lg:absolute -bottom-8 right-0 sm:right-4 w-full sm:w-80 bg-[#4C59D8] text-white p-6 rounded-2xl shadow-2xl border border-white/10 mt-6 lg:mt-0">
                
                {/* Circular Clock Badge Top Right */}
                <div className="absolute -top-5 -right-3 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <Clock className="w-6 h-6" />
                </div>

                <h4 className="text-lg font-extrabold mb-4 border-b border-white/20 pb-2">
                  Opening Hours
                </h4>

                <div className="space-y-2 text-xs font-semibold">
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="opacity-90">Mon To Sat</span>
                    <span className="font-bold">09:00 AM – 06:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="opacity-90">Sunday</span>
                    <span className="font-bold">08:00 AM – 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="opacity-90">Thursday</span>
                    <span className="font-bold text-amber-300">Closed</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/20 text-[11px] text-white/80">
                  📍 Shankar Vihar, Krishna Nagar, Mathura
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
