import React from 'react';
import { Award, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#4C59D8]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#F59E0B]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#4C59D8]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#4C59D8]" />;
      default:
        return <Award className="w-6 h-6 text-[#4C59D8]" />;
    }
  };

  return (
    <section className="py-16 bg-[#FAFAF8] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF1FC] text-[#4C59D8] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Why Patients Trust Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Technology Meets Compassionate Care
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Dharm Skin & Eye Centre brings top-tier diagnostic precision and international standards to the patients of Mathura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#4C59D8]/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-[#EEF1FC] shadow-xs border border-[#DFE5FA] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#4C59D8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

