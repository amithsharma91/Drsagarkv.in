import { useEffect } from 'react';
import Header from '@/components/feature/Header';
import HeroSection from './components/HeroSection';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import LocationMaps from './components/LocationMaps';
import Footer from '@/pages/home/components/Footer';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      <ContactInfo />
      <ContactForm />
      <LocationMaps />

      {/* Emergency CTA */}
      <section className="py-16 md:py-20 bg-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-500/6 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-accent-500/4 blur-[100px]" />
        </div>
        <div className="max-w-2xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
            <i className="ri-alert-line text-red-400 text-3xl"></i>
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
            Orthopedic Emergency?
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-8 max-w-lg mx-auto">
            For fractures, dislocations, and acute injuries, call immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+918197344754"
              className="px-8 py-3.5 rounded-full bg-red-500 hover:bg-red-600 text-white font-heading font-bold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer animate-pulse-strong"
            >
              <i className="ri-phone-line mr-2"></i>
              Call Dr. Sagar
            </a>
            <a
              href="tel:+918050816686"
              className="px-8 py-3.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-building-line mr-2"></i>
              Call Hospital
            </a>
            <a
              href="https://wa.me/918197344754"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-navigation-line mr-2"></i>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
    </main>
  );
}
