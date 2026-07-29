import React from 'react';
import { Star, Quote, AlertCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAFAF8] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B4F6C]/10 text-[#0B4F6C] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>Patient Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Real stories of restored vision, healthier skin, and trusted healthcare in Mathura.
          </p>
        </div>

        {/* Client Placeholder Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Client Note:</strong> <code className="bg-amber-100/80 px-1.5 py-0.5 rounded">[placeholder — replace with real patient testimonials]</code>
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating Stars & Service Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {item.serviceReceived}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#0B4F6C]/15 mb-2" />

                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-slate-900 text-base">
                    {item.patientName}
                  </div>
                  <div className="text-xs text-slate-500">Verified Patient • Mathura</div>
                </div>

                {item.isPlaceholder && (
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Sample Card
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
