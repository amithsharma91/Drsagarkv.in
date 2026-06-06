import { useEffect, useState } from 'react';
import Header from '@/components/feature/Header';
import HeroSection from './components/HeroSection';
import ClinicGalleryTab from './components/ClinicGalleryTab';
import RecoveryGalleryTab from './components/RecoveryGalleryTab';
import XRayGalleryTab from './components/XRayGalleryTab';
import VideoGalleryTab from './components/VideoGalleryTab';
import CaseStudyGalleryTab from './components/CaseStudyGalleryTab';
import Footer from '@/pages/home/components/Footer';

const TABS = [
  { key: 'clinic', label: 'Clinic Gallery', icon: 'ri-building-line' },
  { key: 'recovery', label: 'Recovery Gallery', icon: 'ri-walk-line' },
  { key: 'xray', label: 'X-Ray Gallery', icon: 'ri-scan-line' },
  { key: 'video', label: 'Video Gallery', icon: 'ri-movie-line' },
  { key: 'casestudy', label: 'Case Study Gallery', icon: 'ri-file-list-3-line' },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('clinic');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      {/* Gallery Tabs Section */}
      <section className="py-20 md:py-28 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-primary-500 text-white'
                    : 'bg-background-100 text-foreground-500 hover:bg-background-200 border border-background-200/70'
                }`}
              >
                <i className={`${tab.icon} text-sm`}></i>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'clinic' && <ClinicGalleryTab />}
            {activeTab === 'recovery' && <RecoveryGalleryTab />}
            {activeTab === 'xray' && <XRayGalleryTab />}
            {activeTab === 'video' && <VideoGalleryTab />}
            {activeTab === 'casestudy' && <CaseStudyGalleryTab />}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-100 border border-background-200">
              <i className="ri-information-line text-foreground-400 text-xs"></i>
              <span className="text-foreground-400 text-[11px]">Some images are representational. Real case media available for in-clinic review.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call Now CTA */}
      <section className="py-16 md:py-20 bg-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-500/8 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/20 flex items-center justify-center">
            <i className="ri-phone-line text-primary-400 text-3xl"></i>
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
            Experience Our Facilities in Person
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Visit our clinic at South End Speciality Clinic, Basavanagudi, Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+918197344754"
              className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer glow-primary"
            >
              <i className="ri-phone-line mr-2"></i>
              Call Now
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
    </main>
  );
}
