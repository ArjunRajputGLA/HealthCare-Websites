import React, { useState } from 'react';
import { Calendar, Phone, Send, CheckCircle2, MessageSquare, Shield, Clock } from 'lucide-react';
import { CLINIC_INFO, EYE_CARE_SERVICES, SKIN_CARE_SERVICES } from '../data/clinicData';

interface AppointmentSectionProps {
  preselectedService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    service: preselectedService || 'Automated Perimetry Test (First in Mathura)',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 1:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Dharm Skin & Eye Centre,\n\nI would like to request an appointment.\nName: ${formData.patientName || 'Patient'}\nPhone: ${formData.phone || 'Provided'}\nService: ${formData.service}\nPreferred Date: ${formData.preferredDate || 'Earliest available'}\nTime: ${formData.preferredTime}\nNotes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/918881603338?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#EFF2FC] border-t border-[#DFE5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: CTA Pitch & Direct Call */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#4C59D8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Calendar className="w-4 h-4" />
              <span>Easy Appointment Request</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Ready to Priority Consult with Our Specialists?
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Book an appointment for perimetry field testing, cataract surgery evaluation, or skin care consultations. Conveniently reach us by phone or WhatsApp.
            </p>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
              <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                Direct Emergency / OPD Line
              </div>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#4C59D8] text-white hover:bg-[#3B47C5] transition-all shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/80 font-medium">Tap to Call Immediately</div>
                  <div className="text-xl font-bold font-mono tracking-tight">{CLINIC_INFO.phone}</div>
                </div>
              </a>

              <button
                onClick={handleWhatsAppBooking}
                className="w-full py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Book via WhatsApp Message</span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 font-medium">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#4C59D8]" />
                <span>No Advance Payment Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#4C59D8]" />
                <span>Fast OPD Confirmation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Appointment Request Received!
                </h3>
                <p className="text-slate-600 text-base max-w-md mx-auto">
                  Thank you, <strong>{formData.patientName}</strong>. Our staff at Dharm Skin & Eye Centre will call you shortly at <strong>{formData.phone}</strong> to confirm your slot.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send details on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm"
                  >
                    Book Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Request an Appointment
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    Fill in your details below for quick OPD confirmation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C59D8] focus:ring-2 focus:ring-[#4C59D8]/20 outline-none text-slate-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C59D8] focus:ring-2 focus:ring-[#4C59D8]/20 outline-none text-slate-900 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Medical Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C59D8] focus:ring-2 focus:ring-[#4C59D8]/20 outline-none text-slate-900 text-sm bg-white"
                  >
                    <optgroup label="Eye Care Services">
                      {EYE_CARE_SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} {s.isFirstInMathura ? '(First in Mathura!)' : ''}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Skin & Aesthetic Services">
                      {SKIN_CARE_SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C59D8] focus:ring-2 focus:ring-[#4C59D8]/20 outline-none text-slate-900 text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C59D8] focus:ring-2 focus:ring-[#4C59D8]/20 outline-none text-slate-900 text-sm bg-white"
                    >
                      <option>Morning (9:00 AM - 1:00 PM)</option>
                      <option>Afternoon (1:00 PM - 4:00 PM)</option>
                      <option>Evening (4:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Additional Notes / Symptoms (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe any specific symptoms or requests..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C59D8] focus:ring-2 focus:ring-[#4C59D8]/20 outline-none text-slate-900 text-sm"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-4 px-6 rounded-full bg-[#4C59D8] hover:bg-[#3B47C5] text-white font-bold text-base shadow-lg shadow-[#4C59D8]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Submit Appointment Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="py-4 px-6 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-sm hover:bg-emerald-100 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Booking</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

