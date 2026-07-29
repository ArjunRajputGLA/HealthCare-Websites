import React, { useState, useRef, useEffect } from 'react';
import { Compass, Eye, Sparkles, MapPin, Maximize2, Minimize2, RotateCcw, Move, Stethoscope, CheckCircle2 } from 'lucide-react';
import { animate } from 'animejs';

interface Hotspot {
  id: string;
  name: string;
  category: 'Eye Care' | 'Skin Care' | 'Facility';
  x: number; // percentage horizontally (0 to 100)
  y: number; // percentage vertically (0 to 100)
  description: string;
}

export const VirtualTour360: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'street' | 'interior' | 'perimetry'>('interior');
  const [isMouseDragging, setIsMouseDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Hotspots for Clinic Tour
  const hotspots: Record<'interior' | 'perimetry' | 'street', Hotspot[]> = {
    interior: [
      {
        id: '1',
        name: 'Dr. Chandan Singh Kushwah Consultation Room',
        category: 'Skin Care',
        x: 35,
        y: 45,
        description: 'Dermatology OPD room equipped with modern skin diagnostic tools & allergy testing.'
      },
      {
        id: '2',
        name: 'Dr. Arpita Gupta Eye Consultation Desk',
        category: 'Eye Care',
        x: 65,
        y: 50,
        description: 'Ophthalmology examination unit featuring slit-lamp and computerized refraction.'
      },
      {
        id: '3',
        name: 'Patient Waiting Lounge & Reception',
        category: 'Facility',
        x: 50,
        y: 70,
        description: 'Comfortable air-conditioned patient waiting area with OPD tokens and pharmacy.'
      }
    ],
    perimetry: [
      {
        id: '4',
        name: 'First in Mathura Perimetry Machine',
        category: 'Eye Care',
        x: 48,
        y: 40,
        description: 'Computerized visual field mapping system for early glaucoma detection.'
      },
      {
        id: '5',
        name: 'Darkened Diagnostic Booth',
        category: 'Facility',
        x: 75,
        y: 55,
        description: 'Light-isolated environment ensuring 100% accurate visual grid readings.'
      }
    ],
    street: [
      {
        id: '6',
        name: 'Main Clinic Entrance & Board',
        category: 'Facility',
        x: 50,
        y: 40,
        description: 'Located in Shankar Vihar, Krishna Nagar, directly opposite Tanishq Jewellers, Mathura.'
      }
    ]
  };

  const currentHotspots = hotspots[activeTab];

  // Panoramic images for each view
  const panoramaImages = {
    interior: '/images/hero.png',
    perimetry: '/images/perimetry.png',
    street: '/images/hero.png'
  };

  // Drag interaction handlers for 360 effect
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDragging(true);
    setStartPos({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDragging) return;
    const newX = e.clientX - startPos.x;
    const newY = Math.max(-40, Math.min(40, e.clientY - startPos.y)); // constrain Y tilt
    setDragOffset({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsMouseDragging(false);
  };

  const handleResetView = () => {
    setDragOffset({ x: 0, y: 0 });
    setSelectedHotspot(null);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Animate pulse on hotspots
  useEffect(() => {
    animate('.tour-hotspot-pin', {
      scale: [1, 1.25, 1],
      opacity: [0.85, 1, 0.85],
      duration: 2000,
      loop: true,
      ease: 'inOutSine'
    });
  }, [activeTab]);

  return (
    <section id="virtual-tour" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#4C59D8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4C59D8]/20 border border-[#4C59D8]/40 text-white text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4 text-[#F59E0B] animate-spin-slow" />
            <span>Interactive 360° Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Explore Dharm Hospital in 360°
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-medium">
            Take a virtual walk-through of our clinic rooms, diagnostic perimetry suite, and location before your visit.
          </p>
        </div>

        {/* View Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => { setActiveTab('interior'); handleResetView(); }}
            className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'interior'
                ? 'bg-[#4C59D8] text-white shadow-lg shadow-[#4C59D8]/50 ring-2 ring-[#4C59D8]'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Stethoscope className="w-4 h-4 text-[#F59E0B]" />
            <span>Clinic Rooms &amp; OPD 360°</span>
          </button>

          <button
            onClick={() => { setActiveTab('perimetry'); handleResetView(); }}
            className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'perimetry'
                ? 'bg-[#4C59D8] text-white shadow-lg shadow-[#4C59D8]/50 ring-2 ring-[#4C59D8]'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>Perimetry Diagnostic Suite</span>
          </button>

          <button
            onClick={() => { setActiveTab('street'); handleResetView(); }}
            className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'street'
                ? 'bg-[#4C59D8] text-white shadow-lg shadow-[#4C59D8]/50 ring-2 ring-[#4C59D8]'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <MapPin className="w-4 h-4 text-[#F59E0B]" />
            <span>Google Street View Entrance</span>
          </button>
        </div>

        {/* 360° Interactive Viewport Window */}
        <div
          ref={containerRef}
          className={`relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900 select-none ${
            isFullscreen ? 'h-screen w-screen rounded-none' : 'h-[460px] sm:h-[540px] w-full'
          }`}
        >
          
          {/* Real Google Street View Embed Mode for Street View Tab */}
          {activeTab === 'street' ? (
            <div className="w-full h-full relative">
              <iframe
                title="Dharm Skin & Eye Centre 360 Street View"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.638541929362!2d77.6715174762089!3d27.49132577630765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371109a15f01d%3A0x6b4034720979435b!2sDharm%20skin%20and%20EYE%20centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-xs font-bold text-white flex items-center gap-2 shadow-lg">
                <MapPin className="w-4 h-4 text-[#F59E0B]" />
                <span>Google Street View &amp; Location • Shankar Vihar, Krishna Nagar, Mathura</span>
              </div>
            </div>
          ) : (
            /* Interactive Drag-To-Look Panorama Mode for Interior & Perimetry */
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="w-full h-full relative cursor-grab active:cursor-grabbing overflow-hidden"
            >
              {/* Panoramic Background Image with Drag Offset Transform */}
              <div
                className="absolute inset-y-0 -inset-x-60 w-[180%] h-full transition-transform duration-75 ease-out"
                style={{
                  transform: `translate3d(${dragOffset.x * 0.8}px, ${dragOffset.y * 0.4}px, 0) scale(1.15)`,
                  backgroundImage: `url(${panoramaImages[activeTab]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center'
                }}
              >
                <div className="absolute inset-0 bg-slate-950/25" />
              </div>

              {/* Drag Prompt Hint Overlay */}
              <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-xs font-bold text-white flex items-center gap-2.5 pointer-events-none shadow-lg">
                <Move className="w-4 h-4 text-[#4C59D8] animate-bounce" />
                <span>Drag Mouse / Swipe to Rotate 360° View</span>
              </div>

              {/* Hotspots Rendered on Panorama */}
              {currentHotspots.map((spot) => (
                <div
                  key={spot.id}
                  onClick={(e) => { e.stopPropagation(); setSelectedHotspot(spot); }}
                  className="absolute z-20 transition-transform duration-75 cursor-pointer"
                  style={{
                    left: `calc(${spot.x}% + ${dragOffset.x * 0.8}px)`,
                    top: `calc(${spot.y}% + ${dragOffset.y * 0.4}px)`
                  }}
                >
                  <div className="tour-hotspot-pin relative group">
                    <div className="w-10 h-10 rounded-full bg-[#4C59D8] text-white flex items-center justify-center border-2 border-white shadow-2xl">
                      {spot.category === 'Eye Care' && <Eye className="w-5 h-5" />}
                      {spot.category === 'Skin Care' && <Stethoscope className="w-5 h-5 text-[#F59E0B]" />}
                      {spot.category === 'Facility' && <Sparkles className="w-5 h-5" />}
                    </div>

                    {/* Tooltip Label */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-12 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-[11px] font-bold whitespace-nowrap text-white shadow-xl pointer-events-none">
                      {spot.name}
                    </div>
                  </div>
                </div>
              ))}

              {/* Hotspot Detail Modal / Popover */}
              {selectedHotspot && (
                <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 bg-slate-900/95 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-2xl z-30 animate-fadeIn">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#4C59D8] text-white">
                      {selectedHotspot.category}
                    </span>
                    <button
                      onClick={() => setSelectedHotspot(null)}
                      className="text-slate-400 hover:text-white text-xs font-bold"
                    >
                      ✕ Close
                    </button>
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-1">
                    {selectedHotspot.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {selectedHotspot.description}
                  </p>

                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] font-bold text-[#F59E0B]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Inspected &amp; Certified Medical Facility</span>
                  </div>
                </div>
              )}

              {/* Viewport Control Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <button
                  onClick={handleResetView}
                  className="px-4 py-2 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-xs font-bold text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#4C59D8]" />
                  <span>Reset Center</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleFullscreen}
                    className="p-2.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white hover:bg-slate-800 transition-all cursor-pointer shadow-lg"
                    aria-label="Toggle Fullscreen"
                  >
                    {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
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
