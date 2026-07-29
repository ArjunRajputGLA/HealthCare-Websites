import React, { useEffect } from 'react';
import { Eye, Sparkles, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';
import { DOCTOR_CHANDAN, DOCTOR_ARPITA } from '../data/clinicData';
import { animate, stagger } from 'animejs';

interface DoctorProfileProps {
  onBookDoctor: (doctorName: string) => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onBookDoctor }) => {
  useEffect(() => {
    animate('.doctor-card-anime', {
      opacity: [0, 1],
      translateY: [35, 0],
      duration: 900,
      delay: stagger(180),
      ease: 'outExpo'
    });
  }, []);

  return (
    <section id="doctor" className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDFA] text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-4 h-4" />
            <span>Experienced Medical Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Specialist Doctors
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Dedicated multi-specialty care in Dermatology and Ophthalmology, bringing advanced clinical expertise to Mathura.
          </p>
        </div>

        {/* Doctors Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Doctor 1: Dr. Arpita Gupta (Eye Specialist) */}
          <div className="doctor-card-anime bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5">
            <div className="p-6 sm:p-8 space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDFA] text-[#0F766E] text-xs font-bold uppercase tracking-wider">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ophthalmology &amp; Phaco Surgery</span>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Eye Specialist
                </span>
              </div>

              {/* Photo & Main Details */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0 bg-slate-100">
                  <img
                    src={DOCTOR_ARPITA.image}
                    alt={DOCTOR_ARPITA.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {DOCTOR_ARPITA.name}
                  </h3>
                  <div className="text-[#0F766E] font-bold text-base sm:text-lg">
                    {DOCTOR_ARPITA.qualifications}
                  </div>
                  <div className="text-slate-700 font-semibold text-sm">
                    {DOCTOR_ARPITA.title}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed pt-1">
                    Specialist in Micro-incision Phaco Cataract surgery, imported lens options, computerized perimetry visual field testing, and pediatric squint correction.
                  </p>
                </div>
              </div>

              {/* Specialization Highlights */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 space-y-2 text-xs">
                <div className="font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Clinical Focus &amp; Key Expertise
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>Phaco Cataract Surgery with Imported Lens Options</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>Automated Computerized Perimetry Test (First in Mathura)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>YAG Laser for Post-Cataract PCO &amp; Glaucoma Care</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-6 bg-[#F8FAFC] border-t border-slate-100">
              <button
                onClick={() => onBookDoctor(DOCTOR_ARPITA.name)}
                className="w-full py-3.5 px-4 rounded-full bg-[#0F766E] hover:bg-[#0D9488] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-white" />
                <span>Consult Dr. Arpita Gupta (Eye Specialist)</span>
              </button>
            </div>
          </div>

          {/* Doctor 2: Dr. Chandan Singh Kushwah (Dermatologist) */}
          <div className="doctor-card-anime bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5">
            <div className="p-6 sm:p-8 space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Dermatology &amp; VD Specialist</span>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                  13+ Yrs Experience
                </span>
              </div>

              {/* Photo & Main Details */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0 bg-slate-100">
                  <img
                    src={DOCTOR_CHANDAN.image}
                    alt={DOCTOR_CHANDAN.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {DOCTOR_CHANDAN.name}
                  </h3>
                  <div className="text-[#0F766E] font-bold text-base sm:text-lg">
                    {DOCTOR_CHANDAN.qualifications}
                  </div>
                  <div className="text-slate-700 font-semibold text-sm">
                    {DOCTOR_CHANDAN.institution}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed pt-1">
                    Senior dermatologist with over 13 years of clinical practice. All skin, hair, nail, and allergy diseases treated with modern evidence-based therapy.
                  </p>
                </div>
              </div>

              {/* Specialization Highlights */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 space-y-2 text-xs">
                <div className="font-bold text-slate-900 uppercase tracking-wider mb-1">
                  All Skin &amp; Allergy Diseases Treated
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>General Dermatology, Eczema, Psoriasis &amp; Allergy Care</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>Hair Thinning, Alopecia &amp; Scalp Disorders</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>Acne Scar Removal &amp; Pigmentation Restoration</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-6 bg-[#F8FAFC] border-t border-slate-100">
              <button
                onClick={() => onBookDoctor(DOCTOR_CHANDAN.name)}
                className="w-full py-3.5 px-4 rounded-full bg-[#14B8A6] hover:bg-[#0F766E] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Consult Dr. Chandan Singh Kushwah (Skin Specialist)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

