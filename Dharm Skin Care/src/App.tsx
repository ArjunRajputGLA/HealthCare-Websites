import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUsSection } from './components/AboutUsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EyeCareServices } from './components/EyeCareServices';
import { SkinCareServices } from './components/SkinCareServices';
import { DoctorProfile } from './components/DoctorProfile';
import { TechShowcase } from './components/TechShowcase';
import { Testimonials } from './components/Testimonials';
import { VirtualTour360 } from './components/VirtualTour360';
import { ClinicInfoAndMap } from './components/ClinicInfoAndMap';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { useSmoothScroll, getLenis } from './hooks/useSmoothScroll';
import type { ServiceItem } from './data/clinicData';

export function App() {
  useSmoothScroll();

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string>('');

  const handleOpenAppointmentModal = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedBookingService(serviceName);
    }
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo('#contact', { offset: -110 });
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-900 font-sans selection:bg-[#DFE5FA] selection:text-[#3B47C5]">
      {/* Sticky Navbar */}
      <Navbar onOpenAppointment={() => handleOpenAppointmentModal()} />

      {/* Hero Section */}
      <Hero onOpenAppointment={() => handleOpenAppointmentModal()} />

      {/* About Us Section - Inspired by Design Inspiration Image */}
      <AboutUsSection />

      {/* Why Choose Us / Trust Features */}
      <WhyChooseUs />

      {/* Eye Care Services (Primary Focus) */}
      <EyeCareServices
        onSelectService={(service) => setSelectedService(service)}
        onBookService={(serviceName) => handleOpenAppointmentModal(serviceName)}
      />

      {/* Skin & Aesthetic Care Section */}
      <SkinCareServices
        onSelectService={(service) => setSelectedService(service)}
        onBookService={(serviceName) => handleOpenAppointmentModal(serviceName)}
      />

      {/* Meet Doctor Profile */}
      <DoctorProfile
        onBookDoctor={(docName) => handleOpenAppointmentModal(`Consultation with ${docName}`)}
      />

      {/* Technology & Facility Showcase */}
      <TechShowcase
        onBookTechService={(serviceName) => handleOpenAppointmentModal(serviceName)}
      />

      {/* Patient Testimonials */}
      <Testimonials />

      {/* Interactive 360° Virtual Hospital & Street View Tour */}
      <VirtualTour360 />

      {/* Hours Table & Location Map */}
      <ClinicInfoAndMap />

      {/* Appointment CTA Form */}
      <AppointmentSection preselectedService={preselectedBookingService} />

      {/* Footer */}
      <Footer />

      {/* Interactive Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(serviceName) => handleOpenAppointmentModal(serviceName)}
      />
    </div>
  );
}


export default App;

