import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import ArthritisHero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import RelatedPatientStories from '@/components/feature/RelatedPatientStories';

const ARTHRITIS_TYPES = [
  { title: 'Osteoarthritis', desc: 'The most common form — wear-and-tear arthritis where protective cartilage gradually breaks down. Affects knees, hips, hands, and spine. Develops slowly over years.', prevalence: 'Most Common' },
  { title: 'Rheumatoid Arthritis', desc: 'An autoimmune condition where the immune system attacks joint lining, causing inflammation, pain, and eventual joint damage. Can affect multiple joints symmetrically.', prevalence: 'Autoimmune' },
  { title: 'Post-Traumatic Arthritis', desc: 'Develops years after a joint injury — fracture, dislocation, or ligament tear. The initial damage accelerates cartilage breakdown over time.', prevalence: 'After Injury' },
  { title: 'Gouty Arthritis', desc: 'Caused by uric acid crystal deposits in joints, triggering sudden, severe episodes of pain, redness, and swelling — often in the big toe.', prevalence: 'Metabolic' },
];

const MANAGEMENT_STEPS = [
  { step: '01', title: 'Lifestyle Modification', desc: 'Weight management (losing just 5kg reduces knee stress by 20kg per step), low-impact exercise (swimming, cycling), and activity pacing.', icon: 'ri-user-heart-line' },
  { step: '02', title: 'Medication', desc: 'Pain relievers, anti-inflammatory drugs, and disease-modifying medications tailored to your specific arthritis type and severity.', icon: 'ri-medicine-bottle-line' },
  { step: '03', title: 'Physiotherapy', desc: 'Targeted exercises to strengthen muscles around arthritic joints, improve flexibility, and maintain function. Crucial at every stage of arthritis.', icon: 'ri-psychotherapy-line' },
  { step: '04', title: 'Injections', desc: 'Corticosteroid injections for rapid flare-up relief. Hyaluronic acid (gel) injections for joint lubrication. PRP therapy using growth factors from your own blood.', icon: 'ri-syringe-line' },
  { step: '05', title: 'Joint Replacement', desc: 'When conservative management is exhausted — total joint replacement provides lasting pain relief and restored function with modern implant technology.', icon: 'ri-surgical-mask-line' },
];

const BENEFIT_STATS = [
  { stat: '70%', label: 'Pain Reduction', desc: 'Patients following structured arthritis management report significant pain reduction within 3 months of starting treatment.' },
  { stat: '5+ Years', label: 'Surgery Delay', desc: 'Effective conservative management can postpone or eliminate the need for joint replacement surgery for years.' },
  { stat: '2x', label: 'Better Mobility', desc: 'Combined physiotherapy and medication improves walking ability and daily function significantly.' },
];

const FAQS = [
  { q: 'Is arthritis a natural part of aging?', a: 'While age increases risk, arthritis is not inevitable. Many people stay arthritis-free into their 80s and 90s. Early management, maintaining healthy weight, staying active, and treating joint injuries properly significantly reduce risk.' },
  { q: 'Can arthritis be cured?', a: 'While there is no permanent cure for most types of arthritis, it can be effectively managed. With the right combination of lifestyle changes, medication, physiotherapy, and — when necessary — surgery, most patients live active, fulfilling lives with minimal pain.' },
  { q: 'Does cracking knuckles cause arthritis?', a: 'No — this is a common myth. Research shows no link between knuckle cracking and arthritis. However, chronic joint pain or stiffness should always be evaluated by an orthopedic specialist.' },
  { q: 'When should I see Dr. Sagar for arthritis?', a: 'Schedule a consultation if joint pain persists for more than 2 weeks, interferes with daily activities, causes morning stiffness lasting over 30 minutes, or is accompanied by swelling and warmth. Early intervention produces the best outcomes.' },
  { q: 'What is the consultation fee for arthritis?', a: 'Call or WhatsApp our team to discuss consultation details. Dr. Sagar will perform a comprehensive joint examination, review any imaging, and develop a personalized arthritis management plan.' },
  { q: 'Will I eventually need joint replacement?', a: 'Not necessarily. Many arthritis patients manage well for decades with conservative treatment. Joint replacement becomes an option only when non-surgical treatments no longer provide adequate relief and quality of life is significantly impacted.' },
];

const RELATED = [
  { id: 'joint-replacement', icon: 'ri-surgical-mask-line', label: 'Joint Replacement' },
  { id: 'knee-pain', icon: 'ri-kick-line', label: 'Knee Pain' },
  { id: 'back-pain', icon: 'ri-body-scan-line', label: 'Back Pain' },
  { id: 'fracture-care', icon: 'ri-shield-line', label: 'Fracture Care' },
];

function RevealBlock({ children, delay = '', className = '' }: { children: React.ReactNode; delay?: string; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div ref={ref} className={`${className} transition-all duration-800 ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

export default function ArthritisPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <ArthritisHero />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-violet-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Understanding <span className="text-violet-600">Arthritis</span>
            </h2>
          </RevealBlock>
          <RevealBlock delay="delay-200">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-foreground-600 text-sm leading-relaxed">Arthritis is not a single disease — it's an umbrella term covering over 100 different joint conditions affecting millions of people. At its core, arthritis means joint inflammation, but each type behaves differently and requires a unique treatment approach.</p>
              <p className="text-foreground-600 text-sm leading-relaxed">Dr. Sagar K V manages arthritis using a <strong className="text-foreground-900">structured,阶梯式 protocol</strong> — starting with the least invasive options and progressing only when necessary. The goal is to keep you active, independent, and in control of your condition at every stage.</p>
              <p className="text-foreground-600 text-sm leading-relaxed">The most important thing to know: <strong className="text-violet-700">arthritis can be managed</strong>. With the right treatment plan, most patients maintain excellent quality of life without needing joint replacement surgery.</p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Arthritis Types - Cards */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-violet-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Types of Arthritis</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Which Type of <span className="text-violet-600">Arthritis</span> Do You Have?
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">Accurate diagnosis of arthritis type is essential for effective treatment. Dr. Sagar identifies the specific type through clinical examination and appropriate testing.</p>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {ARTHRITIS_TYPES.map((type, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 md:p-6 h-full premium-card">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading font-semibold text-foreground-900 text-base">{type.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-[10px] font-semibold">{type.prevalence}</span>
                  </div>
                  <p className="text-foreground-500 text-xs leading-relaxed">{type.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-violet-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Symptoms</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Recognizing <span className="text-violet-600">Arthritis</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'ri-sun-line', title: 'Morning Stiffness', desc: 'Joints feel stiff and difficult to move for 30+ minutes after waking up. Improves gradually with gentle movement.' },
              { icon: 'ri-alert-line', title: 'Joint Pain', desc: 'Deep, aching pain that worsens with activity and improves with rest. May be constant in advanced cases.' },
              { icon: 'ri-contrast-drop-line', title: 'Swelling', desc: 'Visible puffiness around affected joints. May feel warm to touch during inflammatory flare-ups.' },
              { icon: 'ri-lock-line', title: 'Reduced Motion', desc: 'Gradual loss of flexibility and range. Difficulty with tasks like gripping, bending, or reaching.' },
            ].map((s, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="text-center p-6 rounded-2xl border border-background-200/70 bg-background-50 premium-card">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-violet-50 flex items-center justify-center">
                    <i className={`${s.icon} text-violet-600 text-2xl`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{s.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Management Steps */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-violet-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Treatment Options</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              The <span className="text-violet-600">Arthritis Management</span> Ladder
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">Treatment progresses step by step. Most patients achieve excellent control before reaching advanced stages.</p>
          </RevealBlock>

          <div className="space-y-3">
            {MANAGEMENT_STEPS.map((step, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="flex gap-4 items-start p-5 rounded-2xl bg-background-50 border border-background-200/70 premium-card">
                  <span className="font-heading font-bold text-2xl text-violet-500/30 shrink-0 leading-none">{step.step}</span>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5 flex items-center gap-2">
                      <i className={`${step.icon} text-violet-600`}></i>
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

      {/* Benefits Stats */}
      <section className="py-16 md:py-24 bg-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-white/15 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <RevealBlock className="text-center mb-12">
            <span className="text-violet-200 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Why Treat Early</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
              Benefits of <span className="text-violet-200">Early Arthritis Management</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BENEFIT_STATS.map((b, i) => (
              <RevealBlock key={i} delay={`delay-${i * 120}`}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center">
                  <span className="block font-heading font-bold text-4xl text-violet-200 mb-2">{b.stat}</span>
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
            <span className="text-violet-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Living With Arthritis</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Daily <span className="text-violet-600">Self-Management</span>
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">These evidence-based strategies complement medical treatment and help you stay in control.</p>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Stay Active', desc: 'Low-impact exercises like cycling and walking maintain joint mobility and strengthen supporting muscles without stressing arthritic joints.', icon: 'ri-bike-line' },
              { title: 'Healthy Weight', desc: 'Every kilogram of weight loss reduces knee joint load by 4 kilograms. Weight management is one of the most effective arthritis interventions.', icon: 'ri-scales-line' },
              { title: 'Joint Protection', desc: 'Use larger joints for tasks, avoid prolonged static positions, and take regular breaks during repetitive activities.', icon: 'ri-shield-line' },
              { title: 'Heat & Cold', desc: 'Warm showers and heat packs relieve stiffness. Cold packs reduce acute swelling and pain during flare-ups.', icon: 'ri-temp-hot-line' },
            ].map((tip, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="text-center p-6 rounded-2xl border border-background-200/70 bg-background-50 premium-card">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-violet-50 flex items-center justify-center">
                    <i className={`${tip.icon} text-violet-600 text-2xl`}></i>
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
            <span className="text-violet-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Arthritis <span className="text-violet-600">Questions</span>
            </h2>
          </RevealBlock>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-violet-200 bg-background-50' : 'border-background-200/70 bg-background-50 hover:border-violet-100'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                  <span className={`font-heading font-semibold text-sm pr-4 transition-colors duration-300 ${openFaq === i ? 'text-violet-600' : 'text-foreground-900'}`}>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-violet-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}>
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-violet-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/10 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <RevealBlock>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Take Control of Your Arthritis</h2>
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-lg mx-auto">You don't have to live with joint pain. Book a consultation with Dr. Sagar K V and start your personalized arthritis management plan today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-violet-700 font-heading font-semibold rounded-full text-sm hover:bg-white/95 transition-all duration-300 whitespace-nowrap cursor-pointer">
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

      <RelatedPatientStories relevantSlugs={['knee-replacement-68']} />

      {/* Related */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900">
              Related <span className="text-violet-600">Treatments</span>
            </h2>
          </RevealBlock>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {RELATED.map((r) => (
              <Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-violet-200 hover:text-violet-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
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
