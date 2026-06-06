import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import PainManagementHero from './HeroSection';
import RelatedPatientStories from '@/components/feature/RelatedPatientStories';

const CONDITIONS = [
  { icon: 'ri-kick-line', title: 'Chronic Joint Pain', desc: 'Ongoing discomfort in knees, hips, shoulders and other joints due to arthritis, injury, or wear-and-tear.' },
  { icon: 'ri-body-scan-line', title: 'Back Pain', desc: 'Persistent or acute lower, mid, and upper back pain from disc problems, muscle strain, or spinal conditions.' },
  { icon: 'ri-arrow-up-circle-line', title: 'Neck Pain', desc: 'Pain and stiffness in the cervical spine from poor posture, disc issues, arthritis, or muscle tension.' },
  { icon: 'ri-user-received-line', title: 'Shoulder Pain', desc: 'Rotator cuff problems, frozen shoulder, impingement, and referred pain from neck conditions.' },
  { icon: 'ri-walk-line', title: 'Knee Pain', desc: 'A comprehensive evaluation of knee discomfort from arthritis, ligament injuries, meniscus tears, or overuse.' },
  { icon: 'ri-surgical-mask-line', title: 'Post-Surgical Pain', desc: 'Specialized management of persistent or recurrent pain following orthopedic surgical procedures.' },
  { icon: 'ri-hand-heart-line', title: 'Arthritis Pain', desc: 'Inflammatory and degenerative joint pain — managed through medication, injections, and lifestyle strategies.' },
  { icon: 'ri-run-line', title: 'Sports Injury Pain', desc: 'Sports-related acute and overuse pain conditions requiring targeted diagnosis and rehabilitation.' },
];

export default function PainManagementPage() {
  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <PainManagementHero />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <span className="text-primary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Understanding Pain</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3 mb-6">
            Why Pain Management Matters
          </h2>
          <p className="text-foreground-500 text-base leading-relaxed max-w-2xl mx-auto">
            Pain is the body's signal that something needs attention. Whether acute or chronic, untreated pain can significantly impact mobility, sleep, mood, and overall quality of life. Dr. Sagar K V takes a comprehensive approach — first identifying the root cause through thorough evaluation and diagnostic imaging, then creating a personalized treatment plan that may include medication, physical therapy, injections, or surgical intervention when conservative measures aren't enough.
          </p>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Conditions We Treat</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Pain Conditions Managed
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {CONDITIONS.map((item, i) => (
              <div key={i} className="bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-primary-200 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <i className={`${item.icon} text-primary-500 text-xl`}></i>
                </div>
                <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{item.title}</h3>
                <p className="text-foreground-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-24 bg-foreground-900 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Our Approach</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
              Step-by-Step Pain Treatment
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Accurate Diagnosis', desc: 'Thorough physical examination, detailed history, and advanced imaging (X-ray, MRI, CT) to identify the exact source of pain.' },
              { step: '02', title: 'Conservative Management', desc: 'Medication, physiotherapy, lifestyle modifications, and activity adjustments — the first line of treatment for most pain conditions.' },
              { step: '03', title: 'Interventional Procedures', desc: 'Targeted injections including corticosteroids, viscosupplementation, and nerve blocks for conditions not responding to conservative care.' },
              { step: '04', title: 'Surgical Solutions', desc: 'When conservative measures fail, Dr. Sagar offers advanced surgical options including joint replacement, arthroscopy, and spinal procedures.' },
              { step: '05', title: 'Rehabilitation & Follow-up', desc: 'Structured recovery program with regular monitoring to ensure lasting pain relief and restored function.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-primary-400 font-heading font-bold text-2xl shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'When should I see a doctor for joint pain?', a: 'If your pain persists for more than 2 weeks, interferes with daily activities, causes swelling or redness, or wakes you up at night, it is time to consult an orthopedic specialist for proper evaluation.' },
              { q: 'What is the difference between acute and chronic pain?', a: 'Acute pain is sudden and usually resolves within weeks with proper treatment. Chronic pain persists for 3 months or longer and often requires a comprehensive, multi-modal treatment approach.' },
              { q: 'Are pain medications safe for long-term use?', a: 'Long-term use should be monitored by a doctor. Dr. Sagar focuses on treating the underlying cause rather than masking symptoms, and explores non-medication approaches whenever possible.' },
              { q: 'Do I need surgery for chronic pain?', a: 'Not necessarily. Most pain conditions respond well to conservative treatment. Surgery is considered only when non-surgical options have been exhausted and there is a clear surgical target.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-heading font-semibold text-foreground-900 text-sm list-none">
                  {faq.q}
                  <i className="ri-arrow-down-s-line text-foreground-400 group-open:rotate-180 transition-transform duration-300"></i>
                </summary>
                <p className="mt-3 text-foreground-500 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-500/8 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">Living with Pain? Let Us Help.</h2>
          <p className="text-white/60 text-base mb-8">Call or visit Dr. Sagar K V for a thorough evaluation and personalized pain management plan.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:+918197344754" className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
              <i className="ri-phone-line"></i>Call Now
            </a>
            <a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
              <i className="ri-whatsapp-line"></i>WhatsApp
            </a>
          </div>
        </div>
      </section>

      <RelatedPatientStories relevantSlugs={['spine-surgery-55']} />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}
