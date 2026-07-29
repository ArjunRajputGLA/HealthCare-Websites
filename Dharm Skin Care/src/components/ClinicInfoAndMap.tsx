import React from 'react';
import { Clock, MapPin, Phone, ExternalLink, CheckCircle2, XCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ClinicInfoAndMap: React.FC = () => {
  // Determine if open today dynamically
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = daysOfWeek[new Date().getDay()];
  const todaySchedule = CLINIC_INFO.hours.find(h => h.day === todayName);
  const isOpenToday = todaySchedule && !todaySchedule.isClosed;

  return (
    <section id="location" className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF1FC] text-[#4C59D8] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" />
            <span>Visit Our Mathura Clinic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Clinic Hours & Location
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Conveniently situated in Krishna Nagar, opposite Tanishq Jewellers. Walk-ins and appointment bookings welcome.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours Table & Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Today Status Badge */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between ${
              isOpenToday
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}>
              <div className="flex items-center gap-3">
                {isOpenToday ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-amber-600 shrink-0" />
                )}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider">
                    Today is {todayName}
                  </div>
                  <div className="text-sm font-semibold">
                    {isOpenToday ? `Open Today: ${todaySchedule?.hours}` : 'Clinic Closed Today (Thursday)'}
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Schedule Card */}
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-2xl bg-[#4C59D8] text-white flex items-center justify-center shadow-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Weekly OPD Timings</h3>
                  <p className="text-xs text-slate-500 font-medium">Dharm Skin & Eye Centre Schedule</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {CLINIC_INFO.hours.map((h) => {
                  const isCurrentDay = h.day === todayName;
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-sm transition-colors ${
                        isCurrentDay
                          ? 'bg-[#EEF1FC] font-bold text-[#4C59D8] border border-[#DFE5FA]'
                          : 'text-slate-700 hover:bg-slate-100/70 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{h.day}</span>
                        {isCurrentDay && (
                          <span className="text-[10px] bg-[#4C59D8] text-white px-2 py-0.5 rounded-full font-bold">
                            Today
                          </span>
                        )}
                      </div>

                      {h.isClosed ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">
                          Closed
                        </span>
                      ) : (
                        <span className="font-bold text-slate-900">{h.hours}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Address & Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" />
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Address</div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    {CLINIC_INFO.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Phone className="w-5 h-5 text-[#4C59D8] shrink-0 mt-1" />
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Phone (Tap to call)</div>
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="text-base font-bold text-[#4C59D8] hover:underline"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <a
                href={CLINIC_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#4C59D8] hover:bg-[#3B47C5] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Open Directions in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 h-full min-h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100">
            <iframe
              title="Dharm Skin & Eye Centre Mathura Map"
              src={CLINIC_INFO.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '460px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-3xl"
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-200 text-xs font-bold text-slate-900 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#4C59D8] animate-ping" />
              <span>Opposite Tanishq Jewellers, Shankar Vihar, Mathura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

