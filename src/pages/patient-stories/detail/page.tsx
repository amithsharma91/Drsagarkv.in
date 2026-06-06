import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CASE_STUDIES } from '@/mocks/case-studies';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import RecoveryTimeline from '@/pages/patient-stories/components/RecoveryTimeline';
import PatientStoriesHero from '@/pages/patient-stories/components/HeroSection';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const caseItem = CASE_STUDIES.find((c) => c.slug === slug);

  if (!caseItem) {
    return (
      <main className="min-h-screen bg-background-50">
        <Header />
        <PatientStoriesHero />
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-background-100 flex items-center justify-center mx-auto mb-6">
            <i className="ri-emotion-sad-line text-3xl text-foreground-400"></i>
          </div>
          <h2 className="font-heading font-bold text-2xl text-foreground-950 mb-3">Case Study Not Found</h2>
          <p className="text-foreground-600 text-sm mb-6">The case study you're looking for isn't available yet.</p>
          <button
            onClick={() => navigate('/patient-stories')}
            className="px-6 py-3 rounded-full bg-primary-500 text-white font-semibold text-sm cursor-pointer hover:bg-primary-600 transition-colors whitespace-nowrap"
          >
            <i className="ri-arrow-left-line mr-2"></i>Back to Patient Stories
          </button>
        </div>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <PatientStoriesHero />
      {/* Case Study Content */}
      <section className="w-full py-14 md:py-18">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-foreground-500 mb-8 reveal">
            <button onClick={() => navigate('/patient-stories')} className="hover:text-primary-500 transition-colors cursor-pointer whitespace-nowrap">
              Patient Stories
            </button>
            <i className="ri-arrow-right-s-line text-[10px]"></i>
            <span className="text-foreground-800 font-medium">{caseItem.treatment}</span>
          </div>

          {/* 1. Patient Overview */}
          <div className="bg-white rounded-2xl border border-background-200 p-6 md:p-8 mb-8 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                <i className="ri-user-heart-line text-accent-600 text-lg"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground-950">Patient Overview</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Age', value: caseItem.overview.age, icon: 'ri-user-line' },
                { label: 'Condition', value: caseItem.overview.condition, icon: 'ri-heart-pulse-line' },
                { label: 'Symptoms', value: caseItem.overview.symptoms, icon: 'ri-mental-health-line' },
                { label: 'Duration', value: caseItem.overview.duration, icon: 'ri-calendar-check-line' },
              ].map((field) => (
                <div key={field.label} className="bg-background-50 rounded-xl p-4 border border-background-200/60">
                  <div className="flex items-center gap-2 mb-2">
                    <i className={`${field.icon} text-primary-500 text-sm`}></i>
                    <span className="text-xs font-semibold text-foreground-500 uppercase tracking-wide">{field.label}</span>
                  </div>
                  <p className="text-sm text-foreground-800 leading-relaxed">{field.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Before Treatment */}
          <div className="bg-white rounded-2xl border border-background-200 p-6 md:p-8 mb-8 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <i className="ri-error-warning-line text-red-500 text-lg"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground-950">Before Treatment</h3>
            </div>

            <p className="text-foreground-600 text-sm leading-relaxed mb-6">{caseItem.beforeTreatment}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative bg-background-100 rounded-xl border border-dashed border-background-300 flex flex-col items-center justify-center py-10 px-4 min-h-[180px]">
                <i className="ri-scan-line text-3xl text-foreground-300 mb-2"></i>
                <span className="text-foreground-400 text-xs font-medium">Before X-Ray Placeholder</span>
              </div>
              <div className="relative bg-background-100 rounded-xl border border-dashed border-background-300 flex flex-col items-center justify-center py-10 px-4 min-h-[180px]">
                <i className="ri-camera-line text-3xl text-foreground-300 mb-2"></i>
                <span className="text-foreground-400 text-xs font-medium">Before Photo Placeholder</span>
              </div>
              <div className="relative bg-background-100 rounded-xl border border-dashed border-background-300 flex flex-col items-center justify-center py-10 px-4 min-h-[180px]">
                <i className="ri-movie-line text-3xl text-foreground-300 mb-2"></i>
                <span className="text-foreground-400 text-xs font-medium">Before Video Placeholder</span>
              </div>
            </div>
          </div>

          {/* 3. Treatment Performed */}
          <div className="bg-white rounded-2xl border border-background-200 p-6 md:p-8 mb-8 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <i className="ri-stethoscope-line text-primary-600 text-lg"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground-950">Treatment Performed</h3>
            </div>

            <div className="bg-background-50 rounded-xl p-5 border border-background-200/60 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-3">
                Procedure
              </span>
              <h4 className="font-heading font-bold text-lg text-foreground-900 mb-2">{caseItem.procedureName}</h4>
              <p className="text-foreground-600 text-sm leading-relaxed">{caseItem.procedureSummary}</p>
            </div>
          </div>

          {/* 4. After Treatment */}
          <div className="bg-white rounded-2xl border border-background-200 p-6 md:p-8 mb-8 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <i className="ri-check-double-line text-green-600 text-lg"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground-950">After Treatment</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative bg-background-100 rounded-xl border border-dashed border-background-300 flex flex-col items-center justify-center py-10 px-4 min-h-[180px]">
                <i className="ri-scan-line text-3xl text-foreground-300 mb-2"></i>
                <span className="text-foreground-400 text-xs font-medium">After X-Ray Placeholder</span>
              </div>
              <div className="relative bg-background-100 rounded-xl border border-dashed border-background-300 flex flex-col items-center justify-center py-10 px-4 min-h-[180px]">
                <i className="ri-camera-line text-3xl text-foreground-300 mb-2"></i>
                <span className="text-foreground-400 text-xs font-medium">Recovery Photo Placeholder</span>
              </div>
              <div className="relative bg-background-100 rounded-xl border border-dashed border-background-300 flex flex-col items-center justify-center py-10 px-4 min-h-[180px]">
                <i className="ri-movie-line text-3xl text-foreground-300 mb-2"></i>
                <span className="text-foreground-400 text-xs font-medium">Recovery Video Placeholder</span>
              </div>
            </div>
          </div>

          {/* 5. Results */}
          <div className="bg-white rounded-2xl border border-background-200 p-6 md:p-8 mb-8 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                <i className="ri-bar-chart-2-line text-accent-600 text-lg"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground-950">Results</h3>
            </div>

            {/* Result metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-background-50 rounded-xl p-5 border border-background-200/60">
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-emotion-happy-line text-green-500 text-lg"></i>
                  <span className="text-xs font-semibold text-foreground-500">Pain Reduction</span>
                </div>
                <p className="text-sm text-foreground-800 font-medium">{caseItem.results.painReduction}</p>
              </div>
              <div className="bg-background-50 rounded-xl p-5 border border-background-200/60">
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-run-line text-accent-500 text-lg"></i>
                  <span className="text-xs font-semibold text-foreground-500">Mobility Improvement</span>
                </div>
                <p className="text-sm text-foreground-800 font-medium">{caseItem.results.mobilityImprovement}</p>
              </div>
            </div>

            {/* Recovery Timeline */}
            <div className="mb-6">
              <h4 className="font-heading font-semibold text-base text-foreground-900 mb-5 flex items-center gap-2">
                <i className="ri-timeline-view text-accent-500"></i>
                Recovery Timeline
              </h4>
              <RecoveryTimeline phases={caseItem.results.recoveryTimelineDays} />
            </div>

            {/* Outcome summary */}
            <div className="bg-accent-50 rounded-xl p-5 border border-accent-100">
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-shield-check-line text-accent-600 text-lg"></i>
                <span className="text-xs font-semibold text-accent-700 uppercase tracking-wide">Outcome Summary</span>
              </div>
              <p className="text-sm text-foreground-800 leading-relaxed">{caseItem.results.outcomeSummary}</p>
            </div>
          </div>

          {/* 6. Doctor's Note */}
          <div className="bg-white rounded-2xl border border-background-200 p-6 md:p-8 mb-8 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                <i className="ri-chat-quote-line text-secondary-600 text-lg"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground-950">Doctor's Note</h3>
            </div>

            <div className="flex gap-4">
              <div className="hidden sm:block w-12 h-12 rounded-full bg-secondary-100 flex-shrink-0 overflow-hidden">
                <img
                  src="https://storage.readdy-site.link/project_files/d7791bc5-fa82-4ceb-bc38-a4807062b94b/c6ff5162-71f2-4035-8f7a-7c8a8fc1c16a_5915-removebg-preview.png"
                  alt="Dr. Sagar K V"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-heading font-semibold text-foreground-900 text-sm">Dr. Sagar K V</span>
                  <span className="text-foreground-400 text-xs">MBBS, D.Ortho, DNB Orthopedics</span>
                </div>
                <p className="text-foreground-600 text-sm leading-relaxed">{caseItem.doctorNote}</p>
              </div>
            </div>
          </div>

          {/* Back button */}
          <div className="flex justify-center mt-10 reveal">
            <button
              onClick={() => navigate('/patient-stories')}
              className="px-6 py-3 rounded-full bg-background-100 hover:bg-background-200 text-foreground-700 font-medium text-sm transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <i className="ri-arrow-left-line"></i>
              View All Patient Stories
            </button>
          </div>
        </div>
      </section>

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
