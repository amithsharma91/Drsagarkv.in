import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import PatientStoriesHero from './components/HeroSection';
import CaseStudyGrid from './components/CaseStudyGrid';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import XRayGallery from './components/XRayGallery';
import RecoveryVideoGallery from './components/RecoveryVideoGallery';
import TrustWhySection from './components/TrustWhySection';

export default function PatientStoriesPage() {
  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <PatientStoriesHero />
      <CaseStudyGrid />
      <BeforeAfterGallery />
      <XRayGallery />
      <RecoveryVideoGallery />
      <TrustWhySection />

      {/* CTA Section */}
      <section className="w-full bg-secondary-700 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center reveal">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Need Help With A Similar Condition?
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Call or WhatsApp Dr. Sagar K V to discuss your orthopedic concerns. Our team will guide you through the next steps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+918197344754"
              className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <i className="ri-phone-line"></i>
              Call Now
            </a>
            <a
              href="https://wa.me/918197344754"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <i className="ri-whatsapp-line"></i>
              WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <i className="ri-navigation-line"></i>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}
