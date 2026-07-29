import React, { useState } from 'react';
import { Phone, X, CheckCircle2, User, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface RequestCallbackModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const RequestCallbackModal: React.FC<RequestCallbackModalProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isModalVisible = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'Eye Care & Perimetry',
    time: 'Morning (9am - 12pm)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      const waMsg = `Hello Dharm Skin & Eye Centre, I request a callback.\nName: ${formData.name}\nPhone: ${formData.phone}\nDept: ${formData.department}\nPreferred Time: ${formData.time}`;
      window.open(`https://wa.me/918881603338?text=${encodeURIComponent(waMsg)}`, '_blank');
    }, 1200);
  };

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
    setSubmitted(false);
  };

  return (
    <>
      {controlledIsOpen === undefined && (
        <button
          onClick={() => setInternalIsOpen(true)}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-r from-red-700 via-red-600 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs tracking-wider uppercase py-4 px-2.5 rounded-r-2xl shadow-2xl flex flex-col items-center gap-2.5 cursor-pointer transition-all duration-300 hover:translate-x-1 border-r-2 border-t border-b border-white/20"
          aria-label="Request Callback"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 tracking-widest">Request Callback</span>
          <Phone className="w-4 h-4 text-white shrink-0" />
        </button>
      )}

      {/* Modal / Drawer Overlay */}
      {isModalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">

            {/* Header */}
            <div className="bg-gradient-to-r from-[#0F766E] to-[#115E59] p-6 text-white relative">
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
                <Phone className="w-4 h-4" />
                <span>Instant Call Back Service</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">Request a Callback</h2>
              <p className="text-xs text-teal-100 mt-1 font-medium">
                Our care manager will call you back within 15 minutes.
              </p>
            </div>

            {/* Form Body */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-[#0F766E] rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Request Received!</h3>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto">
                    Connecting to WhatsApp and scheduling your callback with our medical desk...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-sm font-medium outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-sm font-medium outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Department / Service
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-sm font-medium outline-hidden bg-white"
                    >
                      <option value="Eye Care & Perimetry">Eye Care &amp; 1st Perimetry Test</option>
                      <option value="Skin & Hair Care">Dermatology &amp; Hair Care</option>
                      <option value="Cataract Lens Surgery">Cataract Surgery Consultation</option>
                      <option value="General OPD Query">General OPD Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Callback Time
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-sm font-medium outline-hidden bg-white"
                      >
                        <option value="Morning (9am - 12pm)">Morning (9:00 AM – 12:00 PM)</option>
                        <option value="Afternoon (12pm - 4pm)">Afternoon (12:00 PM – 04:00 PM)</option>
                        <option value="Evening (4pm - 6pm)">Evening (04:00 PM – 06:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all cursor-pointer mt-2"
                  >
                    Submit Callback Request
                  </button>
                </form>
              )}
            </div>

            {/* Footer Direct Call */}
            <div className="bg-slate-50 border-t border-slate-100 p-4 text-center text-xs font-medium text-slate-600">
              Or call us directly at{' '}
              <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="font-bold text-[#0F766E] hover:underline">
                {CLINIC_INFO.phone}
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
