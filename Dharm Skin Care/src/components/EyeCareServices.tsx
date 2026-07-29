import React from 'react';
import {
  Target,
  Eye,
  Zap,
  Scan,
  Activity,
  ShieldAlert,
  Sliders,
  Sparkles,
  Crosshair,
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { EYE_CARE_SERVICES, type ServiceItem } from '../data/clinicData';

interface EyeCareServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const EyeCareServices: React.FC<EyeCareServicesProps> = ({
  onSelectService,
  onBookService,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-[#0B4F6C]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#0B4F6C]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#E8A33D]" />;
      case 'Scan':
        return <Scan className="w-6 h-6 text-[#0B4F6C]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#0B4F6C]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#0B4F6C]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#0B4F6C]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#E8A33D]" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-[#0B4F6C]" />;
      default:
        return <Eye className="w-6 h-6 text-[#0B4F6C]" />;
    }
  };

  return (
    <section id="eye-care" className="py-20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B4F6C]/10 text-[#0B4F6C] text-xs font-bold uppercase tracking-wider mb-3">
              <Eye className="w-4 h-4" />
              <span>Primary Medical Specialty</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              Advanced Ophthalmology & Eye Care
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3">
              From state-of-the-art perimetry diagnostic testing to imported lens cataract surgery, we offer complete ocular healthcare in Mathura.
            </p>
          </div>

          <a
            href="tel:+918881603338"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B4F6C] hover:bg-[#07384D] text-white font-semibold text-sm shadow-md transition-all self-start md:self-auto"
          >
            <span>Call Eye Specialist: +91 88816 03338</span>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EYE_CARE_SERVICES.map((service) => (
            <div
              key={service.id}
              className={`p-7 rounded-2xl bg-white border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between relative group ${
                service.isFirstInMathura
                  ? 'border-[#0B4F6C] ring-2 ring-[#0B4F6C]/20 shadow-md bg-gradient-to-b from-white to-[#F0F7FA]'
                  : 'border-slate-200/90 shadow-sm'
              }`}
            >
              {/* Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F9] border border-[#0B4F6C]/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                {service.isFirstInMathura && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0B4F6C] text-white shadow-xs">
                    <Sparkle className="w-3.5 h-3.5 text-[#E8A33D] fill-[#E8A33D]" />
                    FIRST IN MATHURA
                  </span>
                )}

                {service.isPopular && !service.isFirstInMathura && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E8A33D]/20 text-amber-900 border border-[#E8A33D]/40">
                    Featured
                  </span>
                )}
              </div>

              {/* Title & Short Description */}
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2.5 group-hover:text-[#0B4F6C] transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-[#0B4F6C] hover:text-[#07384D] flex items-center gap-1 group-hover:underline"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onBookService(service.name)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 bg-[#E8A33D]/20 hover:bg-[#E8A33D] hover:text-slate-900 transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
