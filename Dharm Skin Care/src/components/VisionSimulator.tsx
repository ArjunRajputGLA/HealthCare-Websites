import React, { useState } from 'react';
import { Eye, Sparkles, CheckCircle2, Sliders, ShieldAlert, ArrowRight } from 'lucide-react';

interface VisionSimulatorProps {
  onBookService: (serviceName: string) => void;
}

type ConditionType = 'glaucoma' | 'cataract' | 'pco' | 'refractive';

interface ConditionDetail {
  id: ConditionType;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  solutionTitle: string;
  solutionDesc: string;
  serviceName: string;
  filterStyleCondition: React.CSSProperties;
  overlayGradient?: string;
  perimetryHighlight?: boolean;
}

export const VisionSimulator: React.FC<VisionSimulatorProps> = ({ onBookService }) => {
  const [activeCondition, setActiveCondition] = useState<ConditionType>('glaucoma');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const conditions: Record<ConditionType, ConditionDetail> = {
    glaucoma: {
      id: 'glaucoma',
      title: 'Glaucoma & Vision Field Loss',
      badge: 'MATHURA 1ST PERIMETRY TEST',
      tagline: 'Silent Tunnel Vision & Peripheral Loss',
      description: 'Glaucoma damages the optic nerve silently, slowly narrowing side vision without pain until central vision is affected.',
      solutionTitle: 'Computerized Automated Perimetry Screening',
      solutionDesc: 'Our automated perimetry machine (1st in Mathura) maps 100% of your visual field to catch glaucoma early and preserve your sight.',
      serviceName: 'Automated Perimetry Test',
      filterStyleCondition: { filter: 'brightness(0.85) contrast(1.1)' },
      overlayGradient: 'radial-gradient(circle at center, transparent 25%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.98) 90%)',
      perimetryHighlight: true
    },
    cataract: {
      id: 'cataract',
      title: 'Cataract (Motiyabind) Cloudiness',
      badge: 'IMPORTED VIDESHI LENSES',
      tagline: 'Faded Colors, Halos & Blurry Haze',
      description: 'Natural crystalline lens becomes cloudy over time, causing dimming of colors, glare around headlights, and blurry reading.',
      solutionTitle: 'Phaco Surgery with Imported Lens Implants',
      solutionDesc: 'Micro-incision stitchless surgery paired with imported (videshi) lenses restores vivid colors and sharp distance/near focus.',
      serviceName: 'Cataract Surgery (Imported Lens)',
      filterStyleCondition: { filter: 'blur(7px) contrast(0.75) brightness(0.88) sepia(0.2)' }
    },
    pco: {
      id: 'pco',
      title: 'Post-Cataract Membrane Haze (PCO)',
      badge: 'PAINLESS YAG LASER',
      tagline: 'Recurrent Haziness After Cataract Surgery',
      description: 'Months or years after cataract surgery, the capsule holding the lens can become cloudy (secondary cataract).',
      solutionTitle: 'In-Office 5-Minute YAG Laser Clearing',
      solutionDesc: 'Painless YAG laser vaporizes the cloudy membrane in minutes with zero incisions, instantly restoring crystal clarity.',
      serviceName: 'YAG Laser (Post-Cataract PCO)',
      filterStyleCondition: { filter: 'blur(5px) opacity(0.75) brightness(0.92)' }
    },
    refractive: {
      id: 'refractive',
      title: 'Refractive Error & Astigmatism',
      badge: 'PRECISION LASIK SCREENING',
      tagline: 'Unfocused Distance & Reading Strain',
      description: 'Light fails to focus sharply on the retina, creating fuzzy text, headaches, and inability to read signs.',
      solutionTitle: 'Comprehensive Diagnostics & Glass-Free Solutions',
      solutionDesc: 'Precision corneal mapping and computerized refraction for accurate prescriptions or glass-free LASIK suitability.',
      serviceName: 'Comprehensive Eye Examination',
      filterStyleCondition: { filter: 'blur(4px) contrast(0.9)' }
    }
  };

  const current = conditions[activeCondition];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSlider(e.clientX, e.currentTarget);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateSlider(e.touches[0].clientX, e.currentTarget);
    }
  };

  const updateSlider = (clientX: number, container: HTMLDivElement) => {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  return (
    <section id="vision-simulator" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Ambient Lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0F766E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F766E]/20 border border-[#0F766E]/40 text-white text-xs font-bold uppercase tracking-wider mb-3">
            <Sliders className="w-4 h-4 text-[#F59E0B]" />
            <span>Interactive Vision Condition Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See the Difference Precision Eye Care Makes
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-medium">
            Drag the interactive slider below to compare vision with untreated eye conditions versus restored clear sight after expert treatment.
          </p>
        </div>

        {/* Condition Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {(Object.keys(conditions) as ConditionType[]).map((key) => {
            const cond = conditions[key];
            const isActive = activeCondition === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveCondition(key);
                  setSliderPosition(50);
                }}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#0F766E] text-white shadow-lg shadow-[#0F766E]/40 ring-2 ring-[#0F766E]'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cond.perimetryHighlight ? (
                  <ShieldAlert className="w-4 h-4 text-[#F59E0B]" />
                ) : (
                  <Eye className="w-4 h-4 text-emerald-400" />
                )}
                <span>{cond.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Split Viewport Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Interactive Comparison Canvas Frame */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {/* Top Hint Bar */}
              <div className="flex items-center justify-between text-xs font-bold px-2">
                <span className="text-amber-400 flex items-center gap-1">
                  ⚠️ Untreated Condition View
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  ✨ Restored Sight (Dharm Centre)
                </span>
              </div>

              {/* Slider Viewport */}
              <div
                className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-700/80 shadow-2xl"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* 1. Base Layer: AFTER Treatment (Clear HD Scene) */}
                <div className="absolute inset-0 bg-slate-950">
                  <img
                    src="/images/hero.png"
                    alt="Clear Vision Scene"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Clear View Badge */}
                  <div className="absolute top-4 right-4 bg-emerald-600/90 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-lg backdrop-blur-md">
                    100% Restored Sight
                  </div>
                </div>

                {/* 2. Overlay Layer: BEFORE Treatment (Filtered / Tunnel View) clipped by slider position */}
                <div
                  className="absolute inset-y-0 left-0 bg-slate-950 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div
                    className="absolute top-0 bottom-0 left-0 w-full"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <img
                      src="/images/hero.png"
                      alt="Condition Vision Simulation"
                      className="w-full h-full object-cover object-center"
                      style={current.filterStyleCondition}
                    />

                    {/* Additional Overlay Gradient for Glaucoma Tunnel Vision */}
                    {current.overlayGradient && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: current.overlayGradient }}
                      />
                    )}

                    {/* Condition Label Badge */}
                    <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-lg backdrop-blur-md">
                      Simulated: {current.title}
                    </div>
                  </div>
                </div>

                {/* 3. Interactive Split Handle Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] cursor-ew-resize flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#0F766E] text-white border-2 border-white shadow-2xl flex items-center justify-center text-xs font-bold">
                    ↔
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-slate-400 font-medium">
                💡 Touch or drag the center handle horizontally to slide between before &amp; after.
              </div>
            </div>
          </div>

          {/* Condition Details & Treatment Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F766E]/30 text-[#CCFBF1] text-[11px] font-extrabold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{current.badge}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-amber-400 text-sm font-semibold mt-1">
                {current.tagline}
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Treatment Solution Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>{current.solutionTitle}</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium pl-7">
                {current.solutionDesc}
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onBookService(current.serviceName)}
                className="w-full py-4 px-6 rounded-full bg-[#0F766E] hover:bg-[#0D9488] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#0F766E]/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-5 h-5 text-white" />
                <span>Book Consultation for {current.serviceName}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
