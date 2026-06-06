import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import ReviewsHero from './components/HeroSection';
import VideoTestimonialsSection from './components/VideoTestimonialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import VideoStatsSection from './components/VideoStatsSection';

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <ReviewsHero />
      <VideoTestimonialsSection />
      <TestimonialsSection />
      <VideoStatsSection />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}
