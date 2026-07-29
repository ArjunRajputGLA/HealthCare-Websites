import React, { useState } from 'react';
import { Stethoscope, Check, ArrowRight, RotateCcw, UserCheck, Sparkles } from 'lucide-react';
import { DOCTOR_ARPITA, DOCTOR_CHANDAN } from '../data/clinicData';

interface SymptomScreenerProps {
  onBookRecommendation: (serviceName: string, doctorName: string) => void;
}

interface SymptomItem {
  id: string;
  category: 'eye' | 'skin';
  label: string;
  description: string;
  icon: string;
}

export const SymptomScreener: React.FC<SymptomScreenerProps> = ({ onBookRecommendation }) => {
  const [category, setCategory] = useState<'eye' | 'skin'>('eye');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const eyeSymptoms: SymptomItem[] = [
    {
      id: 'side-vision-loss',
      category: 'eye',
      label: 'Side / Peripheral Vision Loss',
      description: 'Tunnel vision or missing outer edges (High risk of Glaucoma).',
      icon: '🎯'
    },
    {
      id: 'cataract-cloudy',
      category: 'eye',
      label: 'Cloudy, Faded or Yellowish Vision',
      description: 'Difficulty reading or blurred vision as if looking through a foggy window.',
      icon: '🌫️'
    },
    {
      id: 'night-glare',
      category: 'eye',
      label: 'Halos & Glare Around Night Lights',
      description: 'Blinding glare while driving at night or bright sunlight.',
      icon: '💡'
    },
    {
      id: 'pco-haze',
      category: 'eye',
      label: 'Vision Haziness Months After Cataract Surgery',
      description: 'Clouding after previous cataract operation (PCO).',
      icon: '⚡'
    },
    {
      id: 'spectacle-strain',
      category: 'eye',
      label: 'Refractive Reading Strain / Glass Dependency',
      description: 'Desire to evaluate glass-free LASIK or prescription check.',
      icon: '👓'
    },
    {
      id: 'redness-pterygium',
      category: 'eye',
      label: 'Eye Redness, Irritation or Tissue Growth',
      description: 'Persistent irritation, watery eyes, or pterygium conjunctival growth.',
      icon: '👁️'
    }
  ];

  const skinSymptoms: SymptomItem[] = [
    {
      id: 'skin-allergy',
      category: 'skin',
      label: 'Acute Rash, Itching & Allergy',
      description: 'Frequent hives, allergic reactions, or unexplained itching.',
      icon: '🔴'
    },
    {
      id: 'eczema-psoriasis',
      category: 'skin',
      label: 'Eczema, Psoriasis & Scaly Patches',
      description: 'Chronic dry, flaky, or inflamed skin plaques.',
      icon: '🩺'
    },
    {
      id: 'acne-breakouts',
      category: 'skin',
      label: 'Persistent Acne & Pimples',
      description: 'Painful breakouts, pustules, or hormonal acne.',
      icon: '💧'
    },
    {
      id: 'acne-scars',
      category: 'skin',
      label: 'Acne Scars & Hyperpigmentation',
      description: 'Dark spots, melasma, or uneven skin texture.',
      icon: '✨'
    },
    {
      id: 'hair-fall',
      category: 'skin',
      label: 'Excessive Hair Fall & Scalp Thinning',
      description: 'Alopecia, receding hairline, or severe hair shedding.',
      icon: '💇'
    },
    {
      id: 'fungal-infection',
      category: 'skin',
      label: 'Fungal Infection or Ringworm',
      description: 'Stubborn fungal patches on skin, feet, or nails.',
      icon: '🧴'
    }
  ];

  const activeSymptomList = category === 'eye' ? eyeSymptoms : skinSymptoms;

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setIsSubmitted(false);
  };

  // Determine Recommendation based on selections
  const getRecommendation = () => {
    if (category === 'eye') {
      let service = 'Comprehensive Eye Examination';
      if (selectedSymptoms.includes('side-vision-loss')) {
        service = 'Automated Perimetry Test (First in Mathura)';
      } else if (selectedSymptoms.includes('cataract-cloudy') || selectedSymptoms.includes('night-glare')) {
        service = 'Cataract Surgery (Imported Lens)';
      } else if (selectedSymptoms.includes('pco-haze')) {
        service = 'YAG Laser (Post-Cataract PCO)';
      }
      return {
        doctor: DOCTOR_ARPITA.name,
        doctorTitle: DOCTOR_ARPITA.title,
        doctorImg: DOCTOR_ARPITA.image,
        serviceName: service,
        reason: selectedSymptoms.includes('side-vision-loss')
          ? 'High priority recommendation for Mathura’s 1st Perimetry Test to evaluate visual field and optic nerve health.'
          : 'Recommended consultation with Phaco Surgeon Dr. Arpita Gupta for advanced ophthalmic assessment.'
      };
    } else {
      let service = 'General Dermatology & Skin Care';
      if (selectedSymptoms.includes('hair-fall') || selectedSymptoms.includes('acne-scars')) {
        service = 'Hair & Aesthetic Treatments';
      }
      return {
        doctor: DOCTOR_CHANDAN.name,
        doctorTitle: DOCTOR_CHANDAN.title,
        doctorImg: DOCTOR_CHANDAN.image,
        serviceName: service,
        reason: 'Recommended clinical consultation with Dr. Chandan Singh Kushwah (MD Skin & VD, 13+ Yrs Exp).'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="screener" className="py-20 bg-[#FAFAF8] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0FDFA] text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-4 h-4" />
            <span>Interactive Patient Screener</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Find the Right Doctor &amp; Treatment in 30 Seconds
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Select your current symptoms to get instant clinical recommendations and priority OPD appointment scheduling.
          </p>
        </div>

        {/* Screener Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          
          {/* Step 1: Category Switcher */}
          <div className="mb-8">
            <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3 text-center sm:text-left">
              Step 1: Choose Specialty Category
            </label>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  setCategory('eye');
                  setSelectedSymptoms([]);
                  setIsSubmitted(false);
                }}
                className={`py-4 px-5 rounded-2xl font-extrabold text-sm sm:text-base border-2 transition-all flex items-center justify-center gap-3 cursor-pointer ${
                  category === 'eye'
                    ? 'border-[#0F766E] bg-[#F0FDFA] text-[#0F766E] shadow-md'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span className="text-xl">👁️</span>
                <span>Eye &amp; Vision Care</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCategory('skin');
                  setSelectedSymptoms([]);
                  setIsSubmitted(false);
                }}
                className={`py-4 px-5 rounded-2xl font-extrabold text-sm sm:text-base border-2 transition-all flex items-center justify-center gap-3 cursor-pointer ${
                  category === 'skin'
                    ? 'border-[#0F766E] bg-[#F0FDFA] text-[#0F766E] shadow-md'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span className="text-xl">🩺</span>
                <span>Skin, Hair &amp; Aesthetic Care</span>
              </button>
            </div>
          </div>

          {/* Step 2: Symptom Selection Cards */}
          {!isSubmitted ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Step 2: Select any symptoms you are experiencing
                </label>
                {selectedSymptoms.length > 0 && (
                  <span className="text-xs font-bold text-[#0F766E]">
                    {selectedSymptoms.length} Selected
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeSymptomList.map((item) => {
                  const isSelected = selectedSymptoms.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleSymptom(item.id)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 select-none ${
                        isSelected
                          ? 'border-[#0F766E] bg-[#F0FDFA]/50 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="text-2xl shrink-0 mt-0.5">{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-900 leading-snug">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-[#0F766E] border-[#0F766E] text-white'
                          : 'border-slate-300 bg-white'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Screener Submit Button */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={selectedSymptoms.length === 0}
                  className="px-4 py-2.5 rounded-full text-xs font-bold text-slate-500 hover:text-slate-800 disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Selection</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(true)}
                  disabled={selectedSymptoms.length === 0}
                  className="px-8 py-3.5 rounded-full bg-[#0F766E] hover:bg-[#0D9488] disabled:bg-slate-300 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#0F766E]/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Clinical Recommendation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Step 3: Result Recommendation Card */
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F0FDFA] border border-[#CCFBF1] space-y-6">
                
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#CCFBF1] pb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0F766E] text-xs font-bold uppercase tracking-wider shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Personalized Clinical Screener Result</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                    High Diagnostic Match
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={rec.doctorImg}
                    alt={rec.doctor}
                    className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl object-cover object-top border-2 border-white shadow-md bg-white shrink-0"
                  />

                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <div className="text-xs font-bold text-[#0F766E] uppercase tracking-wider">
                      Recommended Specialist
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {rec.doctor}
                    </h3>
                    <div className="text-xs font-bold text-slate-700">
                      {rec.doctorTitle}
                    </div>

                    <div className="pt-1 text-xs sm:text-sm text-slate-700 font-medium">
                      <strong>Suggested Service:</strong> <span className="text-[#0F766E] font-bold">{rec.serviceName}</span>
                    </div>

                    <p className="text-xs text-slate-600 font-normal leading-relaxed pt-1">
                      {rec.reason}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onBookRecommendation(rec.serviceName, rec.doctor)}
                    className="flex-1 py-3.5 px-6 rounded-full bg-[#0F766E] hover:bg-[#0D9488] text-white font-extrabold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>Book Appointment with {rec.doctor}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    Start Over
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
