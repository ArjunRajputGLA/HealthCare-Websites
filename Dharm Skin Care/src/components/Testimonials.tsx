import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAFAF8] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF1FC] text-[#4C59D8] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>Patient Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Real stories of restored vision, healthier skin, and trusted healthcare in Mathura.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating Stars & Service Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#EEF1FC] text-[#4C59D8]">
                    {item.serviceReceived}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#4C59D8]/20 mb-2" />

                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-base">
                    {item.patientName}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Verified Patient • Mathura</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

