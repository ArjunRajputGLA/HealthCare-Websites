import React from 'react';
import { Award, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-7 h-7 text-[#0B4F6C]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#E8A33D]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#0B4F6C]" />;
      case 'Cpu':
        return <Cpu className="w-7 h-7 text-[#0B4F6C]" />;
      default:
        return <Award className="w-7 h-7 text-[#0B4F6C]" />;
    }
  };

  return (
    <section className="py-16 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0B4F6C] mb-2">
            Why Patients Trust Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
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
              className="p-6 rounded-2xl bg-[#FAFAF8] border border-slate-200/80 hover:border-[#0B4F6C]/40 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#0B4F6C] transition-colors">
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
