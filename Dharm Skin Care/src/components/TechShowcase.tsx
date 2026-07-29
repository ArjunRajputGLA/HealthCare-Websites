import React, { useState } from 'react';
import { Cpu, Sparkles, Zap, CheckCircle, Eye, ArrowRight } from 'lucide-react';

interface TechShowcaseProps {
  onBookTechService: (serviceName: string) => void;
}

export const TechShowcase: React.FC<TechShowcaseProps> = ({ onBookTechService }) => {
  const [activeTech, setActiveTech] = useState<'perimetry' | 'lenses' | 'yag'>('perimetry');

  const techDetails = {
    perimetry: {
      title: "Automated Computerized Perimetry Analyzer",
      badge: "FIRST IN MATHURA",
      subtitle: "Revolutionary visual field mapping for early glaucoma detection",
      description: "Our newly introduced perimetry machine is the first of its kind in Mathura. It evaluates the full perimeter of your visual field to detect subtle optical nerve degradation and early glaucoma long before any visual loss is experienced.",
      image: "/images/perimetry.png",
      features: [
        "100% Painless computerized visual grid testing",
        "Essential screening for glaucoma & optic disc health",
        "High-definition visual field mapping report",
        "First machine operational in Mathura region"
      ],
      serviceName: "Automated Perimetry Test"
    },
    lenses: {
      title: "Imported (Videshi) Intraocular Cataract Lenses",
      badge: "INTERNATIONAL GRADE",
      subtitle: "World-class lens technology for stitchless cataract surgery",
      description: "We offer top-tier imported (videshi) intraocular lenses (IOLs) designed to restore vibrant color, contrast, and multi-focal visual sharpness for near, intermediate, and distance viewing.",
      image: "/images/hero.png",
      features: [
        "Premium imported foldable IOL materials",
        "Micro-incision stitchless cataract surgery",
        "Customized toric & multifocal optic options",
        "Rapid post-op visual recovery and clarity"
      ],
      serviceName: "Cataract Surgery (Imported Lens)"
    },
    yag: {
      title: "Precision YAG Laser System",
      badge: "INSTANT CLEARING",
      subtitle: "Painless in-office clearing of post-cataract membrane haziness",
      description: "If your vision clouds over months or years after cataract surgery (posterior capsular opacification), our YAG laser clears the haze in a quick 5-minute procedure without any surgery or pain.",
      image: "/images/perimetry.png",
      features: [
        "Non-invasive laser therapy with zero incision",
        "Restores crystal vision within minutes",
        "Outpatient procedure in comfortable clinic setup",
        "High accuracy targeted laser pulses"
      ],
      serviceName: "YAG Laser (Post-Cataract PCO)"
    }
  };

  const current = techDetails[activeTech];

  return (
    <section id="technology" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4C59D8]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#4C59D8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#4C59D8] text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-4 h-4 text-[#4C59D8]" />
            <span>Advanced Medical Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key Differentiators in Mathura
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-medium">
            Investing in state-of-the-art diagnostic equipment and imported lens tech to give our patients superior clinical outcomes.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTech('perimetry')}
            className={`px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTech === 'perimetry'
                ? 'bg-[#4C59D8] text-white shadow-lg shadow-[#4C59D8]/40 ring-2 ring-[#4C59D8]'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>1st in Mathura: Perimetry</span>
          </button>

          <button
            onClick={() => setActiveTech('lenses')}
            className={`px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTech === 'lenses'
                ? 'bg-[#4C59D8] text-white shadow-lg shadow-[#4C59D8]/40 ring-2 ring-[#4C59D8]'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Eye className="w-4 h-4 text-[#F59E0B]" />
            <span>Imported Cataract Lenses</span>
          </button>

          <button
            onClick={() => setActiveTech('yag')}
            className={`px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTech === 'yag'
                ? 'bg-[#4C59D8] text-white shadow-lg shadow-[#4C59D8]/40 ring-2 ring-[#4C59D8]'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Zap className="w-4 h-4 text-[#F59E0B]" />
            <span>YAG Laser System</span>
          </button>
        </div>

        {/* Tech Detail Active Card */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Image Side */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-700 aspect-[4/3] bg-slate-950 relative">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#4C59D8] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {current.badge}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-[#4C59D8] font-bold text-sm uppercase tracking-wider mb-1">
                  {current.subtitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {current.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-200 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-[#4C59D8] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onBookTechService(current.serviceName)}
                  className="px-7 py-3.5 rounded-full bg-[#4C59D8] hover:bg-[#3B47C5] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Appointment for {current.serviceName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

