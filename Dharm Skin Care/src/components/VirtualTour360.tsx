import React, { useState } from 'react';
import { Compass, MapPin, ExternalLink, Navigation, Sparkles, CheckCircle2 } from 'lucide-react';

export const VirtualTour360: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'streetview' | 'satellite' | 'perimetry'>('streetview');

  // Google Maps Street View 360° Camera Mode (output=svembed & layer=c)
  // Location: Dharm Skin & Eye Centre (27.4913258, 77.6715175), Krishna Nagar, Mathura
  const streetViewEmbedUrl = "https://maps.google.com/maps?q=27.4913258,77.6715175&layer=c&cbll=27.4913258,77.6715175&cbp=12,0,,0,0&output=svembed";
  
  // Google Maps 3D Satellite Aerial View (t=k)
  const satelliteEmbedUrl = "https://maps.google.com/maps?q=27.4913258,77.6715175&t=k&z=19&ie=UTF8&iwloc=&output=embed";

  const directStreetViewLink = "https://www.google.com/maps/@27.4913258,77.6715175,3a,75y,90h,90t/data=!3m6!1e1!3m4!1s0x397371109a15f01d:0x6b4034720979435b!2e0!7i13312!8i6656";

  return (
    <section id="virtual-tour" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#4C59D8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4C59D8]/20 border border-[#4C59D8]/40 text-white text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4 text-[#F59E0B]" />
            <span>Google Street View 360°</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Google Street View 360° Tour
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-medium">
            Explore the clinic entrance, street location, and surrounding Krishna Nagar area directly on Google Street View.
          </p>
        </div>

        {/* View Selection Mode Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('streetview')}
            className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'streetview'
                ? 'bg-[#4C59D8] text-white shadow-lg shadow-[#4C59D8]/50 ring-2 ring-[#4C59D8]'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Navigation className="w-4 h-4 text-[#F59E0B]" />
            <span>Google Street View 360°</span>
          </button>

          <button
            onClick={() => setActiveTab('satellite')}
            className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'satellite'
                ? 'bg-[#4C59D8] text-white shadow-lg shadow-[#4C59D8]/50 ring-2 ring-[#4C59D8]'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <MapPin className="w-4 h-4 text-[#F59E0B]" />
            <span>Satellite &amp; Location Map 360°</span>
          </button>

          <button
            onClick={() => setActiveTab('perimetry')}
            className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'perimetry'
                ? 'bg-[#4C59D8] text-white shadow-lg shadow-[#4C59D8]/50 ring-2 ring-[#4C59D8]'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>Perimetry Diagnostic Suite</span>
          </button>

          <a
            href={directStreetViewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Google Street View App</span>
          </a>
        </div>

        {/* 360° Viewport Container */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900 h-[500px] sm:h-[580px] w-full">
          
          {activeTab === 'perimetry' ? (
            /* Perimetry Suite Feature Card View */
            <div className="w-full h-full relative flex items-center justify-center p-6 bg-slate-950">
              <img
                src="/images/perimetry.png"
                alt="Automated Perimetry Machine Mathura"
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent rounded-3xl" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur-xl border border-white/20 p-6 rounded-3xl text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4C59D8] text-white text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>FIRST IN MATHURA MACHINE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  Automated Computerized Perimetry Diagnostic Suite
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Located inside Dharm Skin &amp; Eye Centre. Provides 100% painless visual field mapping to detect early glaucoma and nerve health.
                </p>
              </div>
            </div>
          ) : (
            /* Real Google Maps / Street View Embedded Iframe */
            <iframe
              title="Dharm Skin & Eye Centre Google Street View 360"
              src={activeTab === 'streetview' ? streetViewEmbedUrl : satelliteEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-3xl"
            />
          )}

          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-xs font-bold text-white flex items-center gap-2 shadow-xl z-20">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <span>
              {activeTab === 'streetview' && 'Google Street View 360° • Opposite Tanishq Jewellers, Shankar Vihar, Mathura'}
              {activeTab === 'satellite' && 'Google Maps Location & Satellite View • Mathura, UP'}
              {activeTab === 'perimetry' && "Mathura's First Perimetry Diagnostic Suite"}
            </span>
          </div>

          {/* Bottom Hint Overlay */}
          <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-xs font-bold text-white hidden sm:flex items-center gap-2 shadow-xl z-20">
            <CheckCircle2 className="w-4 h-4 text-[#4C59D8]" />
            <span>Use mouse / touch inside viewer to pan, zoom, &amp; rotate 360°</span>
          </div>

        </div>

      </div>
    </section>
  );
};
