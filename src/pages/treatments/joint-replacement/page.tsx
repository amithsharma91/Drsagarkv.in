import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import JointReplacementHero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import RelatedPatientStories from '@/components/feature/RelatedPatientStories';

const CONDITIONS = [
  { joint: 'Knee', icon: 'ri-kick-line', desc: 'Advanced knee arthritis causing constant pain, stiffness limiting daily activities, and deformity (bow-legged or knock-kneed). Walking, climbing stairs, and even resting become painful.', when: 'Consider surgery when pain persists despite medications, physiotherapy, and injections for 6+ months.' },
  { joint: 'Hip', icon: 'ri-wheelchair-line', desc: 'Groin pain radiating to thigh or knee, stiffness making it hard to put on shoes or socks, and limping. Hip arthritis can severely restrict mobility and independence.', when: 'Surgery is recommended when hip pain interferes with sleep, work, or basic activities like walking short distances.' },
  { joint: 'Shoulder', icon: 'ri-arrow-up-circle-line', desc: 'Severe arthritis, rotator cuff tear arthropathy, or complex fractures where joint surfaces are irreversibly damaged. Movement becomes severely restricted.', when: 'Consider replacement when pain is unresponsive to conservative treatment and daily activities like dressing or reaching become impossible.' },
];

const SYMPTOMS = [
  'Persistent joint pain even at rest',
  'Stiffness limiting range of motion',
  'Swelling and warmth around the joint',
  'Grinding or creaking sensation (crepitus)',
  'Joint deformity or visible misalignment',
  'Pain that wakes you up at night',
  'Difficulty with stairs or walking',
  'Failed response to conservative treatments',
];

const BENEFITS = [
  { stat: '95%', label: 'Pain Relief', desc: 'Dramatic reduction or complete elimination of chronic joint pain within weeks of surgery.' },
  { stat: '90%', label: 'Mobility Restored', desc: 'Most patients return to walking, driving, and daily activities independently within 6-12 weeks.' },
  { stat: '85%', label: 'Implant Longevity', desc: 'Modern implants last 20-25+ years with proper care and regular follow-up monitoring.' },
  { stat: '3-5 Days', label: 'Hospital Stay', desc: 'Minimally invasive techniques mean shorter hospitalization and faster return home.' },
];

const RECOVERY_TIMELINE = [
  { phase: 'Hospital Stay', days: 'Day 1-4', items: ['Stand and walk with support within 24 hours', 'Pain managed with multimodal protocol', 'Physiotherapy begins on day 1', 'Discharge planning and home preparation'] },
  { phase: 'Early Recovery', days: 'Week 1-6', items: ['Walking with walker/cane progressing to independent', 'Home physiotherapy exercises daily', 'Wound care and swelling management', 'Gradual return to light daily activities'] },
  { phase: 'Active Rehab', days: 'Week 6-12', items: ['Advanced strengthening exercises', 'Return to driving (typically by week 6)', 'Increased walking distance and stamina', 'Most patients return to work (desk jobs)'] },
  { phase: 'Full Recovery', days: 'Month 3-12', items: ['Return to recreational activities', 'Sports-specific rehabilitation if needed', 'Annual follow-up with Dr. Sagar', 'Implant monitoring and long-term care plan'] },
];

const FAQS = [
  { q: 'Am I too old/young for joint replacement?', a: 'There is no strict age limit. Dr. Sagar evaluates each patient individually based on their pain levels, functional limitations, and overall health — not just age. Modern implants are designed for patients of all ages with active lifestyles.' },
  { q: 'How long do joint replacements last?', a: 'With modern implant materials and Dr. Sagar\'s precise surgical technique, 85-90% of knee and hip replacements last 20-25 years or longer. Regular follow-up helps monitor implant health and ensure longevity.' },
  { q: 'Is minimally invasive surgery better?', a: 'Dr. Sagar uses muscle-sparing minimally invasive techniques that result in less tissue trauma, reduced blood loss, smaller scars, less post-operative pain, and faster recovery compared to traditional open surgery.' },
  { q: 'What type of implant does Dr. Sagar use?', a: 'Dr. Sagar selects implants from leading international manufacturers based on your age, activity level, bone quality, and specific joint anatomy. Each implant is chosen to give you the best possible outcome and longevity.' },
  { q: 'Will I need another surgery in the future?', a: 'While modern implants are highly durable, revision surgery may be needed after 20-25 years in some cases. Dr. Sagar\'s meticulous surgical technique and recommended follow-up schedule help maximize implant lifespan.' },
  { q: 'How much does joint replacement cost?', a: 'Costs vary based on the joint, implant type, hospital, and insurance coverage. During your consultation, Dr. Sagar\'s team will provide a detailed estimate and help with insurance pre-authorization for cashless treatment where applicable.' },
];

const RELATED = [
  { id: 'knee-pain', icon: 'ri-kick-line', label: 'Knee Pain' },
  { id: 'arthritis', icon: 'ri-hand-heart-line', label: 'Arthritis' },
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

export default function JointReplacementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeJoint, setActiveJoint] = useState(0);

  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <JointReplacementHero />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-accent-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              When <span className="text-accent-600">Joint Replacement</span> Becomes the Answer
            </h2>
          </RevealBlock>
          <RevealBlock delay="delay-200">
            <div className="bg-background-50 border border-background-200/70 rounded-3xl p-6 md:p-8 max-w-3xl mx-auto">
              <p className="text-foreground-600 text-sm leading-relaxed mb-4">Joint replacement surgery — also called arthroplasty — is one of the most successful procedures in modern medicine. It involves removing damaged joint surfaces and replacing them with precisely engineered implants made of metal alloys, high-grade plastics, and ceramic materials.</p>
              <p className="text-foreground-600 text-sm leading-relaxed mb-4">Dr. Sagar K V has performed <strong className="text-foreground-900">over 300 joint replacement procedures</strong> using advanced minimally invasive techniques. His approach prioritizes muscle preservation, smaller incisions, reduced blood loss, and faster recovery — without compromising on surgical precision or implant positioning.</p>
              <p className="text-foreground-600 text-sm leading-relaxed">The decision to proceed with joint replacement is never taken lightly. It is recommended only when conservative treatments — medication, physiotherapy, injections, and lifestyle modifications — have failed to provide adequate relief, and pain significantly impacts your quality of life.</p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Joint Tabs */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-accent-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Joint Types</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Conditions We <span className="text-accent-600">Treat</span>
            </h2>
          </RevealBlock>

          {/* Tab buttons */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {CONDITIONS.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveJoint(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  activeJoint === i ? 'bg-accent-500 text-white' : 'bg-background-50 border border-background-200/70 text-foreground-500 hover:border-accent-200'
                }`}
              >
                <i className={`${c.icon} text-sm`}></i>
                {c.joint}
              </button>
            ))}
          </div>

          {/* Active joint content */}
          <RevealBlock key={activeJoint} className="max-w-3xl mx-auto">
            <div className="bg-background-50 border border-background-200/70 rounded-3xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                  <i className={`${CONDITIONS[activeJoint].icon} text-accent-600 text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground-900 text-lg mb-2">When to Consider {CONDITIONS[activeJoint].joint} Replacement</h3>
                  <p className="text-foreground-600 text-sm leading-relaxed">{CONDITIONS[activeJoint].desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-accent-50 rounded-xl p-4">
                <i className="ri-information-line text-accent-600 mt-0.5"></i>
                <p className="text-foreground-700 text-xs leading-relaxed"><strong className="text-foreground-900">Dr. Sagar's guidance:</strong> {CONDITIONS[activeJoint].when}</p>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Symptoms Grid */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-accent-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Symptoms</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Signs You May Need <span className="text-accent-600">Joint Replacement</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {SYMPTOMS.map((s, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="bg-background-100 border border-background-200/70 rounded-2xl p-4 md:p-5 text-center premium-card">
                  <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-accent-100 flex items-center justify-center">
                    <i className="ri-checkbox-circle-line text-accent-600 text-sm"></i>
                  </div>
                  <p className="text-foreground-600 text-xs leading-relaxed">{s}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with Counter Stats */}
      <section className="py-16 md:py-24 bg-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-500/6 blur-[140px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <RevealBlock className="text-center mb-12">
            <span className="text-accent-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Why Choose Joint Replacement</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
              Life-Changing <span className="text-accent-400">Results</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {BENEFITS.map((b, i) => (
              <RevealBlock key={i} delay={`delay-${i * 120}`}>
                <div className="glass-dark rounded-2xl p-6 text-center">
                  <span className="block font-heading font-bold text-4xl md:text-5xl text-accent-300 mb-2">{b.stat}</span>
                  <span className="block font-heading font-semibold text-white text-sm mb-2">{b.label}</span>
                  <p className="text-white/45 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options - Timeline Style */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-accent-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Surgical Approach</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Dr. Sagar's <span className="text-accent-600">Surgical Method</span>
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">A systematic, evidence-based approach refined over 300+ successful procedures.</p>
          </RevealBlock>

          <div className="space-y-4">
            {[
              { step: '01', title: 'Pre-Operative Planning', desc: 'Advanced imaging and digital templating ensure precise implant sizing and positioning before surgery. Every procedure is virtually planned for optimal outcomes.', icon: 'ri-computer-line' },
              { step: '02', title: 'Minimally Invasive Access', desc: 'Muscle-sparing approaches through smaller incisions. Less tissue trauma means reduced pain, minimal blood loss, and faster recovery.', icon: 'ri-scissors-cut-line' },
              { step: '03', title: 'Precision Implant Placement', desc: 'Computer-navigated alignment ensures the implant is positioned within 1-2 degrees of ideal — critical for long-term durability and natural feel.', icon: 'ri-focus-3-line' },
              { step: '04', title: 'Rapid Mobilization Protocol', desc: 'Patients stand and walk within 24 hours. Early movement prevents complications like blood clots and stiffness while accelerating recovery.', icon: 'ri-speed-up-line' },
            ].map((item, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="flex gap-5 items-start p-5 rounded-2xl border border-background-200/70 bg-background-50 premium-card">
                  <span className="font-heading font-bold text-3xl text-accent-500/30 shrink-0 leading-none">{item.step}</span>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5 flex items-center gap-2">
                      <i className={`${item.icon} text-accent-500`}></i>
                      {item.title}
                    </h3>
                    <p className="text-foreground-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-accent-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Your <span className="text-accent-600">Recovery Roadmap</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECOVERY_TIMELINE.map((phase, i) => (
              <RevealBlock key={i} delay={`delay-${i * 120}`}>
                <div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 h-full premium-card">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center">
                      <span className="text-white font-heading font-bold text-xs">{i + 1}</span>
                    </div>
                    <span className="text-accent-600 font-heading font-semibold text-xs">{phase.days}</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground-900 text-sm mb-3">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-foreground-500 text-xs">
                        <i className="ri-check-line text-accent-500 mt-0.5 shrink-0"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-accent-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Joint Replacement <span className="text-accent-600">FAQs</span>
            </h2>
          </RevealBlock>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-accent-200 bg-background-50' : 'border-background-200/70 bg-background-50 hover:border-accent-100'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                  <span className={`font-heading font-semibold text-sm pr-4 transition-colors duration-300 ${openFaq === i ? 'text-accent-600' : 'text-foreground-900'}`}>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-accent-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}>
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-accent-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/10 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <RevealBlock>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to Move Without Pain?</h2>
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-lg mx-auto">Discuss your joint replacement options with Dr. Sagar K V. Get an honest assessment and a personalized treatment plan.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-accent-700 font-heading font-semibold rounded-full text-sm hover:bg-white/95 transition-all duration-300 whitespace-nowrap cursor-pointer">
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
              Related <span className="text-accent-600">Treatments</span>
            </h2>
          </RevealBlock>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {RELATED.map((r) => (
              <Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-accent-200 hover:text-accent-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
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
