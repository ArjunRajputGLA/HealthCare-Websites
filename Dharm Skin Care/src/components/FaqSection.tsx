import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'cataract' | 'perimetry' | 'skin' | 'general';
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'cataract' | 'perimetry' | 'skin' | 'general'>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'perimetry',
      question: 'What is Automated Perimetry visual field testing and why is it important?',
      answer: 'Automated perimetry is a computerized test that measures your full peripheral (side) vision. Dharm Skin & Eye Centre houses the VERY FIRST automated perimetry machine in Mathura. It is essential for catching early glaucoma long before central vision loss occurs, as well as evaluating optic nerve health.'
    },
    {
      id: 'faq-2',
      category: 'cataract',
      question: 'What are Imported (Videshi) Intraocular Lenses for Cataract Surgery?',
      answer: 'During micro-incision stitchless phaco cataract surgery, the cloudy natural lens is replaced with a premium intraocular lens (IOL). We offer international-grade imported (videshi) monofocal, toric, and multifocal lenses that provide superior optical clarity, anti-glare coatings, and reduced dependence on spectacles.'
    },
    {
      id: 'faq-3',
      category: 'cataract',
      question: 'What is YAG laser treatment for post-cataract vision haziness (PCO)?',
      answer: 'If vision becomes hazy months or years after cataract surgery due to posterior capsular opacification (PCO), our YAG laser clears the clouded capsule in a quick, painless 5-minute OPD procedure without any incisions or hospitalization.'
    },
    {
      id: 'faq-4',
      category: 'skin',
      question: 'What qualifications and experience does Dr. Chandan Singh Kushwah have?',
      answer: 'Dr. Chandan Singh Kushwah earned his MD in Skin & VD from S.N. Medical College in 2013. He has over 13+ years of senior clinical experience treating all dermatological diseases, allergies, eczema, psoriasis, acne scars, hair fall, and aesthetic skin disorders.'
    },
    {
      id: 'faq-5',
      category: 'skin',
      question: 'Do you provide clinical treatments for hair fall, alopecia, and acne scars?',
      answer: 'Yes! We offer specialized dermatological hair nourishment therapies for hair thinning, alopecia, and scalp care, along with medical skin rejuvenation and scar smoothing treatments.'
    },
    {
      id: 'faq-6',
      category: 'general',
      question: 'Where is Dharm Skin & Eye Centre located in Mathura?',
      answer: 'Our clinic is located at Shankar Vihar, Krishna Nagar, Mathura, Uttar Pradesh 281004 (Opposite Tanishq Jewellers / nearby Krishna Nagar main road).'
    },
    {
      id: 'faq-7',
      category: 'general',
      question: 'What are the clinic OPD consultation hours?',
      answer: 'Monday to Saturday: 9:00 AM – 6:00 PM. Sunday: 8:00 AM – 12:00 PM. Thursday: OPD is closed for weekly maintenance.'
    },
    {
      id: 'faq-8',
      category: 'general',
      question: 'How do I book an OPD appointment?',
      answer: 'You can book directly using our website appointment form, calling +91 88816 03338, or tapping our 1-click WhatsApp booking button.'
    }
  ];

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0FDFA] text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-[#0F766E]" />
            <span>Patient Knowledge &amp; Guidance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Find quick answers regarding our perimetry testing, imported cataract lenses, dermatology OPD, and appointment process.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g. perimetry, cataract, Dr Chandan, hours)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0F766E] shadow-sm"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#0F766E] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Questions
          </button>

          <button
            onClick={() => setActiveCategory('perimetry')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'perimetry'
                ? 'bg-[#0F766E] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Perimetry (1st in Mathura)
          </button>

          <button
            onClick={() => setActiveCategory('cataract')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'cataract'
                ? 'bg-[#0F766E] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Imported Cataract Lenses
          </button>

          <button
            onClick={() => setActiveCategory('skin')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'skin'
                ? 'bg-[#0F766E] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Skin &amp; Dermatology OPD
          </button>

          <button
            onClick={() => setActiveCategory('general')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'general'
                ? 'bg-[#0F766E] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Location &amp; Timings
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:bg-slate-50 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-[#0F766E] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#0F766E]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-500 font-medium">
              No matching questions found. Try a different search keyword.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
