import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import TreatmentsHero from './components/HeroSection';
import TreatmentCards from './components/TreatmentCards';
import AdvancedProcedures from './components/AdvancedProcedures';

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <TreatmentsHero />
      <TreatmentCards />
      <AdvancedProcedures />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}
