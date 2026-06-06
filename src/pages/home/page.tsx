import { HeroSection } from '@/pages/home/components/HeroSection';
import Header from '@/components/feature/Header';
import TrustSection from '@/pages/home/components/TrustSection';
import AboutSection from '@/pages/home/components/AboutSection';
import ExpertiseCardsSection from '@/pages/home/components/ExpertiseCardsSection';
import RecoveryJourneySection from '@/pages/home/components/RecoveryJourneySection';
import ClinicGallerySync from '@/pages/home/components/ClinicGallerySync';
import WhyChooseSection from '@/pages/home/components/WhyChooseSection';
import GoogleReviewWall from '@/pages/home/components/GoogleReviewWall';
import LocationsSection from '@/pages/home/components/LocationsSection';
import BookingSection from '@/pages/home/components/BookingSection';
import FAQSection from '@/pages/home/components/FAQSection';
import EmergencySection from '@/pages/home/components/EmergencySection';
import Footer from '@/pages/home/components/Footer';
import PageLoading from '@/pages/home/components/PageLoading';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <PageLoading />
      <main className="min-h-screen bg-background-50">
        <Header />
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ExpertiseCardsSection />
        <RecoveryJourneySection />
        <WhyChooseSection />
        <ClinicGallerySync />
        <GoogleReviewWall />
        <LocationsSection />
        <BookingSection />
        <FAQSection />
        <EmergencySection />
        <Footer />
      </main>
      <FloatingWhatsApp />
      <MobileStickyBar />
    </>
  );
}
