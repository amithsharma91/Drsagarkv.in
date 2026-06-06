import { useEffect } from 'react';
import Header from '@/components/feature/Header';
import HeroSection from './components/HeroSection';
import FAQAccordion from './components/FAQAccordion';
import Footer from '@/pages/home/components/Footer';

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      <FAQAccordion />
      <Footer />
    </main>
  );
}
