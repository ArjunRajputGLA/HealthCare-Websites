import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Award, ArrowRight } from 'lucide-react';

interface BeforeAfterShowcaseProps {
  onBookTreatment: (treatmentName: string) => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'Eye Care' | 'Skin & Aesthetic Care';
  timeframe: string;
  doctor: string;
  description: string;
  treatmentName: string;
  imageBefore: string;
  imageAfter: string;
}

export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = ({ onBookTreatment }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'eye' | 'skin'>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);

  const galleryItems: GalleryItem[] = [
    {
      id: 'cataract-clarity',
      title: 'Imported Lens Cataract Vision Restoration',
      category: 'Eye Care',
      timeframe: '1 Day Post-Op Recovery',
      doctor: 'Dr. Arpita Gupta (Phaco Surgeon)',
      description: 'Patient presented with severe nuclear cataract cloudiness. Micro-incision stitchless phaco surgery with imported (videshi) IOL restored 6/6 distance and near visual acuity.',
      treatmentName: 'Cataract Surgery (Imported Lens)',
      imageBefore: '/images/hero.png',
      imageAfter: '/images/hero.png'
    },
    {
      id: 'perimetry-glaucoma',
      title: 'Perimetry Early Glaucoma Field Stabilization',
      category: 'Eye Care',
      timeframe: 'Baseline vs 6-Month Protocol',
      doctor: 'Dr. Arpita Gupta (Eye Specialist)',
      description: 'Automated perimetry test (1st in Mathura) pinpointed early visual field defects before central vision was affected, allowing targeted intraocular pressure stabilization.',
      treatmentName: 'Automated Perimetry Test',
      imageBefore: '/images/perimetry.png',
      imageAfter: '/images/perimetry.png'
    },
    {
      id: 'skin-pigmentation',
      title: 'Melasma & Hyperpigmentation Lightening',
      category: 'Skin & Aesthetic Care',
      timeframe: '4 Weeks Medical Therapy',
      doctor: 'Dr. Chandan Singh Kushwah (MD Skin & VD)',
      description: 'Targeted dermatological skin rejuvenation and barrier repair protocol for stubborn facial hyperpigmentation and sun damage.',
      treatmentName: 'General Dermatology & Skin Care',
      imageBefore: '/images/ChandanSinghKushwah.jpg',
      imageAfter: '/images/ChandanSinghKushwah.jpg'
    },
    {
      id: 'acne-restoration',
      title: 'Acne Scar Smoothing & Scalp Hair Revival',
      category: 'Skin & Aesthetic Care',
      timeframe: '6 Weeks Combined Protocol',
      doctor: 'Dr. Chandan Singh Kushwah (Skin Specialist)',
      description: 'Comprehensive aesthetic skin resurfacing for acne scar tissue along with clinical hair follicle nourishment therapy.',
      treatmentName: 'Hair & Aesthetic Treatments',
      imageBefore: '/images/ChandanSinghKushwah.jpg',
      imageAfter: '/images/ChandanSinghKushwah.jpg'
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === 'eye') return item.category === 'Eye Care';
    if (activeTab === 'skin') return item.category === 'Skin & Aesthetic Care';
    return true;
  });

  const currentItem = filteredItems[activeItemIndex] || filteredItems[0];

  return (
    <section id="results-gallery" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0FDFA] text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-[#F59E0B]" />
            <span>Proven Clinical Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Results, Restored Confidence
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Explore treatment outcomes across eye care and aesthetic dermatology delivered by our specialist doctors.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => { setActiveTab('all'); setActiveItemIndex(0); setSliderPos(50); }}
            className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0F766E] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Outcomes
          </button>
          <button
            onClick={() => { setActiveTab('eye'); setActiveItemIndex(0); setSliderPos(50); }}
            className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'eye'
                ? 'bg-[#0F766E] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Eye Care Results
          </button>
          <button
            onClick={() => { setActiveTab('skin'); setActiveItemIndex(0); setSliderPos(50); }}
            className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'skin'
                ? 'bg-[#0F766E] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Skin &amp; Aesthetic Results
          </button>
        </div>

        {/* Main Interactive Showcase Card */}
        {currentItem && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Interactive Before & After Visual Canvas */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
                  <span className="text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    BEFORE Treatment
                  </span>
                  <span className="text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    AFTER Treatment ✨
                  </span>
                </div>

                <div className="relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden select-none border-2 border-slate-200 shadow-inner bg-slate-900">
                  {/* After Image Layer */}
                  <img
                    src={currentItem.imageAfter}
                    alt="After Treatment"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-md">
                    Restored Outcome
                  </div>

                  {/* Before Image Layer overlay */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden bg-slate-950"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <div className="relative w-[500px] sm:w-[600px] h-full">
                      <img
                        src={currentItem.imageBefore}
                        alt="Before Treatment"
                        className="w-full h-full object-cover object-top filter contrast-125 sepia-50 blur-[2px]"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        Before Care
                      </div>
                    </div>
                  </div>

                  {/* Slider Control Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-xl flex items-center justify-center pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0F766E] text-white border-2 border-white shadow-lg flex items-center justify-center text-xs font-bold">
                      ↔
                    </div>
                  </div>

                  {/* Hidden Input Slider */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                  />
                </div>

                <div className="text-center text-xs text-slate-500 font-medium">
                  ↔ Move slider horizontally to observe treatment transition
                </div>
              </div>

              {/* Clinical Details */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDFA] text-[#0F766E] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentItem.category}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {currentItem.title}
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                    <span><strong>Attending Doctor:</strong> {currentItem.doctor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                    <span><strong>Timeframe:</strong> {currentItem.timeframe}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
                  {currentItem.description}
                </p>

                <button
                  type="button"
                  onClick={() => onBookTreatment(currentItem.treatmentName)}
                  className="w-full py-3.5 px-6 rounded-full bg-[#0F766E] hover:bg-[#0D9488] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                >
                  <span>Book {currentItem.treatmentName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Pagination Cards Below */}
            {filteredItems.length > 1 && (
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap justify-center gap-3">
                {filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveItemIndex(idx); setSliderPos(50); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeItemIndex === idx
                        ? 'bg-[#0F766E] text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
