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
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white via-slate-50/30 to-white rounded-3xl sm:rounded-[36px] border border-slate-200/90 shadow-2xl overflow-hidden p-6 sm:p-10 relative">
          
          {/* Subtle Glow Backdrop Accent */}
          <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
            category === 'eye' ? 'bg-blue-500/10' : 'bg-pink-500/10'
          }`} />

          {/* Step 1: Category Switcher */}
          <div className="mb-8 relative z-10">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Step 1: Choose Specialty Category
              </label>
              <span className="text-xs font-bold text-slate-400">
                {category === 'eye' ? 'Eye Ophthalmology' : 'Skin & Hair Dermatology'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80">
              <button
                type="button"
                onClick={() => {
                  setCategory('eye');
                  setSelectedSymptoms([]);
                  setIsSubmitted(false);
                }}
                className={`py-3.5 px-4 sm:px-6 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
                  category === 'eye'
                    ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span className="text-lg">👁️</span>
                <span>Eye &amp; Vision Care</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCategory('skin');
                  setSelectedSymptoms([]);
                  setIsSubmitted(false);
                }}
                className={`py-3.5 px-4 sm:px-6 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
                  category === 'skin'
                    ? 'bg-gradient-to-r from-pink-600 via-rose-600 to-rose-700 text-white shadow-lg shadow-pink-500/25 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span className="text-lg">🩺</span>
                <span>Skin, Hair &amp; Aesthetic Care</span>
              </button>
            </div>
          </div>

          {/* Step 2: Symptom Selection Cards */}
          {!isSubmitted ? (
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Step 2: Select any symptoms you are experiencing
                </label>
                {selectedSymptoms.length > 0 && (
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full border shadow-xs animate-in fade-in ${
                    category === 'eye'
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : 'bg-pink-50 text-pink-700 border-pink-200'
                  }`}>
                    {selectedSymptoms.length} Symptom{selectedSymptoms.length > 1 ? 's' : ''} Selected
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeSymptomList.map((item) => {
                  const isSelected = selectedSymptoms.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleSymptom(item.id)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex items-start gap-3.5 select-none ${
                        isSelected
                          ? category === 'eye'
                            ? 'border-blue-600 bg-blue-50/70 shadow-md shadow-blue-500/10 scale-[1.01]'
                            : 'border-pink-600 bg-pink-50/70 shadow-md shadow-pink-500/10 scale-[1.01]'
                          : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/50 hover:shadow-xs'
                      }`}
                    >
                      {/* Icon Box */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 mt-0.5 border ${
                        isSelected
                          ? category === 'eye'
                            ? 'bg-blue-100 border-blue-200 text-blue-700'
                            : 'bg-pink-100 border-pink-200 text-pink-700'
                          : 'bg-slate-100/80 border-slate-200 text-slate-700'
                      }`}>
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-900 leading-snug">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                          {item.description}
                        </div>
                      </div>

                      {/* Checkbox */}
                      <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isSelected
                          ? category === 'eye'
                            ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                            : 'bg-pink-600 border-pink-600 text-white shadow-xs'
                          : 'border-slate-300 bg-white'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Screener Submit & Reset Footer */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={selectedSymptoms.length === 0}
                  className="px-4 py-2.5 rounded-full text-xs font-bold text-slate-500 hover:text-slate-800 disabled:opacity-30 flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Selection</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(true)}
                  disabled={selectedSymptoms.length === 0}
                  className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-extrabold text-sm sm:text-base text-white transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
                    selectedSymptoms.length > 0
                      ? category === 'eye'
                        ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95'
                        : 'bg-gradient-to-r from-pink-600 via-rose-600 to-rose-700 hover:from-pink-500 hover:to-rose-600 shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95'
                      : 'bg-slate-200 text-slate-400 border border-slate-200 cursor-not-allowed shadow-none'
                  }`}
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
