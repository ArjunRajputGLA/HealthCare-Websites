import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUsSection } from './components/AboutUsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VisionSimulator } from './components/VisionSimulator';
import { SymptomScreener } from './components/SymptomScreener';
import { EyeCareServices } from './components/EyeCareServices';
import { SkinCareServices } from './components/SkinCareServices';
import { DoctorProfile } from './components/DoctorProfile';
import { TechShowcase } from './components/TechShowcase';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { FaqSection } from './components/FaqSection';
import { Testimonials } from './components/Testimonials';
import { ClinicInfoAndMap } from './components/ClinicInfoAndMap';
import { AppointmentSection, type BookingDetailsSubmitted } from './components/AppointmentSection';
import { StickyEmergencyBar } from './components/StickyEmergencyBar';
import { BookingConfirmationModal, type BookingDetails } from './components/BookingConfirmationModal';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { useSmoothScroll, getLenis } from './hooks/useSmoothScroll';
import type { ServiceItem } from './data/clinicData';

export function App() {
  useSmoothScroll();

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string>('');
  const [bookingConfirmation, setBookingConfirmation] = useState<BookingDetails | null>(null);

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

  const handleBookingSubmitted = (details: BookingDetailsSubmitted) => {
    setBookingConfirmation(details);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#CCFBF1] selection:text-[#0F766E] relative pb-16 sm:pb-0">
      {/* Sticky Navbar */}
      <Navbar onOpenAppointment={() => handleOpenAppointmentModal()} />

      {/* Hero Section */}
      <Hero onOpenAppointment={() => handleOpenAppointmentModal()} />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Why Choose Us / Trust Features */}
      <WhyChooseUs />

      {/* Interactive Vision Condition Simulator */}
      <VisionSimulator
        onBookService={(serviceName) => handleOpenAppointmentModal(serviceName)}
      />

      {/* Interactive Patient Symptom Screener */}
      <SymptomScreener
        onBookRecommendation={(serviceName, doctorName) =>
          handleOpenAppointmentModal(`${serviceName} (Consultation with ${doctorName})`)
        }
      />

      {/* Eye Care Services */}
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

      {/* Before & After Clinical Results Showcase */}
      <BeforeAfterShowcase
        onBookTreatment={(treatmentName) => handleOpenAppointmentModal(treatmentName)}
      />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Patient Testimonials */}
      <Testimonials />

      {/* Hours Table & Location Map */}
      <ClinicInfoAndMap />

      {/* Appointment CTA Form */}
      <AppointmentSection
        preselectedService={preselectedBookingService}
        onBookingComplete={handleBookingSubmitted}
      />

      {/* Footer */}
      <Footer />

      {/* Sticky Smart Emergency & Live OPD Dock */}
      <StickyEmergencyBar onOpenAppointment={() => handleOpenAppointmentModal()} />

      {/* Interactive Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(serviceName) => handleOpenAppointmentModal(serviceName)}
      />

      {/* Appointment Confirmation & Calendar Sync Modal */}
      <BookingConfirmationModal
        booking={bookingConfirmation}
        onClose={() => setBookingConfirmation(null)}
      />
    </div>
  );
}

export default App;
