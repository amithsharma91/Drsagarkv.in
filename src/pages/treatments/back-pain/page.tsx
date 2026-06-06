import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import BackPainHero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import RelatedPatientStories from '@/components/feature/RelatedPatientStories';

const CAUSES = [
  { title: 'Disc Herniation', desc: 'The soft inner material of a spinal disc pushes through its outer layer, pressing on nearby nerves. Causes sharp, radiating pain — commonly known as sciatica.', urgency: 'high' },
  { title: 'Degenerative Disc Disease', desc: 'Age-related wear and tear causes discs to lose height and flexibility. Results in chronic dull ache that worsens with sitting or bending.', urgency: 'medium' },
  { title: 'Muscle Strain', desc: 'Overstretching or tearing of back muscles and ligaments from improper lifting, sudden movement, or poor posture. Usually heals with rest and physiotherapy.', urgency: 'low' },
  { title: 'Spinal Stenosis', desc: 'Narrowing of the spinal canal compresses nerves, causing pain, numbness, or weakness — especially when walking or standing for long periods.', urgency: 'high' },
  { title: 'Spondylolisthesis', desc: 'One vertebra slips forward over the one below it, causing instability and nerve compression. Can be congenital or develop from stress fractures.', urgency: 'medium' },
  { title: 'Facet Joint Arthritis', desc: 'Inflammation of the small joints between vertebrae. Causes localized back pain that worsens with backward bending or twisting motions.', urgency: 'medium' },
];

const TREATMENT_APPROACH = [
  { step: 1, title: 'Accurate Diagnosis', desc: 'Dr. Sagar performs a detailed clinical examination and orders appropriate imaging (X-ray, MRI, CT) only when necessary. The right diagnosis prevents unnecessary treatment.', icon: 'ri-search-eye-line' },
  { step: 2, title: 'Conservative First', desc: 'Physiotherapy, posture correction, core strengthening, medication, and lifestyle modifications resolve most back pain cases without any invasive procedures.', icon: 'ri-heart-line' },
  { step: 3, title: 'Interventional Care', desc: 'For persistent pain, targeted epidural steroid injections, nerve root blocks, or facet joint injections provide rapid relief and enable effective physiotherapy.', icon: 'ri-syringe-line' },
  { step: 4, title: 'Surgery When Necessary', desc: 'Only when conservative measures fail after adequate trial — procedures like microdiscectomy or decompression are performed with precision and care.', icon: 'ri-surgical-mask-line' },
];

const RECOVERY_TIPS = [
  { icon: 'ri-user-settings-line', title: 'Posture Matters', desc: 'Maintain neutral spine alignment when sitting, standing, and lifting. Small adjustments make a big difference in recovery and prevention.' },
  { icon: 'ri-walk-line', title: 'Stay Active', desc: 'Prolonged bed rest worsens back pain. Gentle walking and prescribed exercises promote healing and prevent stiffness.' },
  { icon: 'ri-rest-time-line', title: 'Sleep Support', desc: 'Use a medium-firm mattress. Sleep on your side with a pillow between knees, or on your back with a pillow under knees.' },
  { icon: 'ri-emotion-line', title: 'Stress Management', desc: 'Emotional stress amplifies pain perception. Relaxation techniques, breathing exercises, and adequate sleep support recovery.' },
];

const FAQS = [
  { q: 'Will I need surgery for my back pain?', a: 'The vast majority of back pain cases — over 90% — resolve without surgery. Dr. Sagar follows a conservative-first approach utilizing physiotherapy, medication, posture correction, and targeted injections. Surgery is only considered when there is progressive neurological deficit or failure of adequate conservative treatment.' },
  { q: 'When should I see a doctor for back pain?', a: 'Seek immediate care if back pain is accompanied by leg weakness, loss of bladder/bowel control, fever, or follows a significant fall. For persistent pain lasting more than 2-3 weeks despite rest, schedule a consultation with Dr. Sagar for proper evaluation.' },
  { q: 'Is MRI always needed for back pain?', a: 'No. Many back pain cases can be diagnosed through clinical examination alone. Dr. Sagar recommends MRI only when red flag symptoms are present, pain persists despite treatment, or nerve involvement is suspected. Unnecessary imaging can lead to overtreatment.' },
  { q: 'Can physiotherapy alone fix my back pain?', a: 'For most patients, a structured physiotherapy program combined with lifestyle modifications is highly effective. Dr. Sagar works closely with experienced physiotherapists to design personalized rehabilitation programs that address your specific condition.' },
  { q: 'How long does back pain treatment take?', a: 'Acute back pain from muscle strain typically improves within 2-4 weeks. Chronic conditions may require 6-12 weeks of consistent therapy. Dr. Sagar provides a realistic timeline during your consultation based on your specific diagnosis.' },
  { q: 'What is the consultation fee for back pain?', a: 'Call or WhatsApp our team to discuss consultation details. Dr. Sagar will perform a thorough spinal examination, review any previous imaging, and provide a clear diagnosis with a step-by-step treatment plan.' },
];

const RELATED = [
  { id: 'knee-pain', icon: 'ri-kick-line', label: 'Knee Pain' },
  { id: 'joint-replacement', icon: 'ri-surgical-mask-line', label: 'Joint Replacement' },
  { id: 'sports-injuries', icon: 'ri-run-line', label: 'Sports Injuries' },
  { id: 'arthritis', icon: 'ri-hand-heart-line', label: 'Arthritis' },
];

function RevealBlock({ children, delay = '', className = '' }: { children: React.ReactNode; delay?: string; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div ref={ref} className={`${className} transition-all duration-800 ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

export default function BackPainPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <BackPainHero />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Understanding <span className="text-emerald-600">Back Pain</span>
            </h2>
          </RevealBlock>
          <RevealBlock delay="delay-200">
            <div className="max-w-3xl mx-auto">
              <p className="text-foreground-600 text-sm leading-relaxed mb-4">Back pain is one of the leading causes of disability worldwide — yet most cases can be effectively treated without surgery. The human spine is an engineering marvel of 33 vertebrae, cushioning discs, and a network of muscles and ligaments that work together to support your body.</p>
              <p className="text-foreground-600 text-sm leading-relaxed mb-4">Dr. Sagar K V takes a <strong className="text-foreground-900">methodical, evidence-based approach</strong> to back pain. Rather than jumping to surgery, he focuses on identifying the exact source of pain through careful clinical examination. This precision means treatment is targeted and effective.</p>
              <p className="text-foreground-600 text-sm leading-relaxed">The good news: <strong className="text-emerald-700">over 90% of back pain patients</strong> recover fully with conservative treatment. Dr. Sagar believes in exhausting all non-surgical options before considering any procedure.</p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Causes - Card grid with urgency indicators */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Causes</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              What's Behind Your <span className="text-emerald-600">Back Pain?</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {CAUSES.map((c, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 md:p-6 h-full premium-card relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-2xl ${
                    c.urgency === 'high' ? 'bg-red-50' : c.urgency === 'medium' ? 'bg-amber-50' : 'bg-emerald-50'
                  } flex items-center justify-center`}>
                    <span className={`text-[10px] font-semibold ${
                      c.urgency === 'high' ? 'text-red-500' : c.urgency === 'medium' ? 'text-amber-500' : 'text-emerald-600'
                    }`}>
                      {c.urgency === 'high' ? 'Urgent' : c.urgency === 'medium' ? 'Moderate' : 'Common'}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2 pr-12">{c.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms - Bento grid layout */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Symptoms</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              <span className="text-emerald-600">Red Flags</span> & Common Signs
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RevealBlock delay="delay-100" className="md:col-span-2">
              <div className="bg-background-100 border border-background-200/70 rounded-3xl p-6 md:p-8 h-full">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <i className="ri-error-warning-line text-emerald-600 text-lg"></i>
                </div>
                <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-4">Common Symptoms</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Dull, constant ache in lower back', 'Sharp, shooting pain down leg (sciatica)', 'Muscle spasms and tightness', 'Pain that worsens with sitting', 'Difficulty standing up straight', 'Numbness or tingling in legs'].map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-0.5 shrink-0 text-xs"></i>
                      <span className="text-foreground-600 text-xs">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealBlock>

            <RevealBlock delay="delay-200">
              <div className="bg-red-50 border border-red-100 rounded-3xl p-6 md:p-8 h-full">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <i className="ri-alert-line text-red-600 text-lg"></i>
                </div>
                <h3 className="font-heading font-semibold text-red-800 text-sm mb-4">Seek Immediate Care</h3>
                <div className="space-y-2.5">
                  {['Loss of bladder/bowel control', 'Progressive leg weakness', 'Severe trauma or fall', 'Fever with back pain'].map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <i className="ri-close-circle-line text-red-500 mt-0.5 shrink-0 text-xs"></i>
                      <span className="text-red-700 text-xs leading-relaxed">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Treatment Approach - Step cards */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Treatment Approach</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Dr. Sagar's <span className="text-emerald-600">Step-by-Step</span> Method
            </h2>
          </RevealBlock>

          <div className="space-y-3">
            {TREATMENT_APPROACH.map((step, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="flex gap-4 items-start p-5 rounded-2xl bg-background-50 border border-background-200/70 premium-card">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                    <span className="text-white font-heading font-bold text-sm">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5 flex items-center gap-2">
                      <i className={`${step.icon} text-emerald-600`}></i>
                      {step.title}
                    </h3>
                    <p className="text-foreground-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Early Treatment */}
      <section className="py-16 md:py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-white/20 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <RevealBlock className="text-center mb-12">
            <span className="text-emerald-200 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Why Early Treatment Matters</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
              Don't Let Back Pain Become <span className="text-emerald-200">Chronic</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '2x', label: 'Faster Recovery', desc: 'Patients treated within 2 weeks of back pain onset recover twice as fast as those who wait 6+ weeks.' },
              { stat: '80%', label: 'Avoid Chronic Pain', desc: 'Early intervention prevents acute back pain from transitioning into a chronic, debilitating condition.' },
              { stat: '₹₹₹', label: 'Lower Lifetime Cost', desc: 'Timely conservative treatment costs a fraction of delayed surgical intervention and lost work days.' },
            ].map((b, i) => (
              <RevealBlock key={i} delay={`delay-${i * 120}`}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center">
                  <span className="block font-heading font-bold text-4xl text-emerald-200 mb-2">{b.stat}</span>
                  <span className="block font-heading font-semibold text-white text-sm mb-2">{b.label}</span>
                  <p className="text-white/55 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Tips */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery & Prevention</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Healing Your <span className="text-emerald-600">Back</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECOVERY_TIPS.map((tip, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="text-center p-6 rounded-2xl border border-background-200/70 bg-background-50 premium-card">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-50 flex items-center justify-center">
                    <i className={`${tip.icon} text-emerald-600 text-2xl`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{tip.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{tip.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Back Pain <span className="text-emerald-600">Questions</span>
            </h2>
          </RevealBlock>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-emerald-200 bg-background-50' : 'border-background-200/70 bg-background-50 hover:border-emerald-100'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                  <span className={`font-heading font-semibold text-sm pr-4 transition-colors duration-300 ${openFaq === i ? 'text-emerald-600' : 'text-foreground-900'}`}>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-emerald-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}>
                    <i className="ri-add-line text-sm"></i>
                  </div>
                </button>
                <div className={`transition-all duration-400 overflow-hidden ${openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-5 text-foreground-500 text-sm leading-relaxed">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/10 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <RevealBlock>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Stand Tall Again</h2>
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-lg mx-auto">Stop living with back pain. Schedule a consultation with Dr. Sagar K V for an accurate diagnosis and a clear path to recovery.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-emerald-700 font-heading font-semibold rounded-full text-sm hover:bg-white/95 transition-all duration-300 whitespace-nowrap cursor-pointer">
                <i className="ri-phone-line mr-2"></i>
                Call Now
              </a>
              <a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white/15 border border-white/25 text-white font-heading font-semibold rounded-full text-sm hover:bg-white/25 transition-all duration-300 whitespace-nowrap cursor-pointer">
                <i className="ri-whatsapp-line mr-2"></i>
                WhatsApp
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      <RelatedPatientStories relevantSlugs={['spine-surgery-55']} />

      {/* Related */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900">
              Related <span className="text-emerald-600">Treatments</span>
            </h2>
          </RevealBlock>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {RELATED.map((r) => (
              <Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-emerald-200 hover:text-emerald-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
                <i className={`${r.icon} text-base`}></i>
                {r.label}
              </Link>
            ))}
            <Link to="/treatments" className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:text-primary-500 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
              <i className="ri-apps-2-line text-base"></i>
              All Treatments
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}
