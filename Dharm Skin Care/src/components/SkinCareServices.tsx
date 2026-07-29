import React from 'react';
import { Stethoscope, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SKIN_CARE_SERVICES, DOCTOR_CHANDAN, type ServiceItem } from '../data/clinicData';

interface SkinCareServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const SkinCareServices: React.FC<SkinCareServicesProps> = ({
  onSelectService,
  onBookService,
}) => {
  return (
    <section id="skin-care" className="py-20 bg-[#FAFAF8] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF1FC] text-[#4C59D8] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>Dermatology & Aesthetic Wing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skin, Hair & Aesthetic Care
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Operating as <strong className="text-slate-800">Dharm Skin, Hair & Aesthetic Clinic</strong>, our specialized dermatology unit is directed by senior specialist {DOCTOR_CHANDAN.name} ({DOCTOR_CHANDAN.qualifications}).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Dermatology Overview Card */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#4C59D8] text-white flex items-center justify-center shadow-md">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Clinical Dermatology & VD Treatment
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">
                    Directed by Dr. Chandan Singh Kushwah • 13+ Years Experience
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                We diagnose and treat a wide range of skin, hair, and allergic disorders using modern dermatological protocols. Whether managing chronic skin conditions like eczema and psoriasis or treating hair thinning, we offer evidence-based clinical care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#4C59D8] shrink-0" />
                  <span>General Skin & VD Consultations</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#4C59D8] shrink-0" />
                  <span>Hair Thinning & Alopecia Therapy</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#4C59D8] shrink-0" />
                  <span>Acne Scar & Melasma Care</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#4C59D8] shrink-0" />
                  <span>Allergic Rash & Eczema Management</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => onBookService('Skin & Hair Consultation')}
                className="px-7 py-3 rounded-full bg-[#4C59D8] hover:bg-[#3B47C5] text-white font-bold text-sm shadow-md transition-all"
              >
                Book Skin Consultation
              </button>
              <button
                onClick={() => onSelectService(SKIN_CARE_SERVICES[0])}
                className="px-5 py-3 rounded-full text-slate-700 hover:text-[#4C59D8] hover:bg-[#EEF1FC] text-sm font-bold transition-all flex items-center gap-1.5"
              >
                <span>Read Dermatology Overview</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Secondary Aesthetic Highlights Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {SKIN_CARE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#4C59D8]/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-amber-900 flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {service.name}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      {service.shortDesc}
                    </p>
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-bold text-[#4C59D8] hover:underline flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

