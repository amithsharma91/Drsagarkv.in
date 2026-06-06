import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import AboutHero from './components/HeroSection';
import BiographyTimeline from './components/BiographyTimeline';
import ExpertisePhilosophy from './components/ExpertisePhilosophy';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <AboutHero />
      <BiographyTimeline />
      <ExpertisePhilosophy />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}
