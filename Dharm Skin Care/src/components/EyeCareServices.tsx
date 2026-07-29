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
        return <Target className="w-6 h-6 text-[#4C59D8]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#4C59D8]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#F59E0B]" />;
      case 'Scan':
        return <Scan className="w-6 h-6 text-[#4C59D8]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#4C59D8]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#4C59D8]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#4C59D8]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#F59E0B]" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-[#4C59D8]" />;
      default:
        return <Eye className="w-6 h-6 text-[#4C59D8]" />;
    }
  };

  return (
    <section id="eye-care" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF1FC] text-[#4C59D8] text-xs font-bold uppercase tracking-wider mb-3">
              <Eye className="w-4 h-4" />
              <span>Primary Medical Specialty</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Advanced Ophthalmology & Eye Care
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3 font-medium">
              From state-of-the-art perimetry diagnostic testing to imported lens cataract surgery, we offer complete ocular healthcare in Mathura.
            </p>
          </div>

          <a
            href="tel:+918881603338"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4C59D8] hover:bg-[#3B47C5] text-white font-bold text-sm shadow-md transition-all self-start md:self-auto"
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
                  ? 'border-[#4C59D8] ring-2 ring-[#4C59D8]/20 shadow-md bg-gradient-to-b from-white to-[#EFF2FC]'
                  : 'border-slate-200/90 shadow-xs'
              }`}
            >
              {/* Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF1FC] border border-[#DFE5FA] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                {service.isFirstInMathura && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#4C59D8] text-white shadow-xs">
                    <Sparkle className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                    FIRST IN MATHURA
                  </span>
                )}

                {service.isPopular && !service.isFirstInMathura && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FEF3C7] text-amber-900 border border-amber-200">
                    Featured
                  </span>
                )}
              </div>

              {/* Title & Short Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#4C59D8] transition-colors">
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
                  className="text-xs font-bold text-[#4C59D8] hover:text-[#3B47C5] flex items-center gap-1 group-hover:underline"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onBookService(service.name)}
                  className="px-4 py-2 rounded-full text-xs font-bold text-[#4C59D8] bg-[#EEF1FC] hover:bg-[#4C59D8] hover:text-white transition-all"
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

