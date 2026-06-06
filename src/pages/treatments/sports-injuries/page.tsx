import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import SportsInjuryHero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import RelatedPatientStories from '@/components/feature/RelatedPatientStories';

const INJURY_TYPES = [
  { title: 'ACL Tear', icon: 'ri-run-line', desc: 'Anterior cruciate ligament tear — a common knee injury from sudden stops, pivots, or direct impact. Often requires surgical reconstruction for athletes wanting to return to pivoting sports.', recovery: '6-9 months' },
  { title: 'Meniscus Tear', icon: 'ri-kick-line', desc: 'Damage to knee cartilage shock absorbers from twisting motions. Treatment ranges from arthroscopic repair to partial removal depending on tear pattern and location.', recovery: '3-6 months' },
  { title: 'Rotator Cuff Tear', icon: 'ri-arrow-up-circle-line', desc: 'Shoulder tendon injury common in throwing sports, swimming, and overhead activities. Can be partial or complete — treatment depends on tear size and patient activity level.', recovery: '4-8 months' },
  { title: 'Ankle Sprain', icon: 'ri-footprint-line', desc: 'Ligament stretching or tearing from rolling the ankle. While most heal with conservative care, recurrent sprains may need surgical stabilization.', recovery: '2-12 weeks' },
  { title: 'Tennis Elbow', icon: 'ri-hand-sanitizer-line', desc: 'Overuse injury causing pain on the outer elbow from repetitive wrist extension. Common in racquet sports but also affects non-athletes.', recovery: '6-12 weeks' },
  { title: 'Shin Splints', icon: 'ri-walk-line', desc: 'Pain along the shin bone from overuse, common in runners and dancers. Usually resolves with rest, proper footwear, and gradual return to activity.', recovery: '2-8 weeks' },
];

const TREATMENTS = [
  { phase: 'Immediate', desc: 'RICE protocol — Rest, Ice, Compression, Elevation. Pain management and swelling control. Accurate clinical examination and imaging when needed.', icon: 'ri-first-aid-kit-line' },
  { phase: 'Rehabilitation', desc: 'Structured physiotherapy program. Progressive strengthening, flexibility training, balance work, and sport-specific exercises under expert supervision.', icon: 'ri-mental-health-line' },
  { phase: 'Intervention', desc: 'When conservative care is insufficient — arthroscopic surgery, ligament reconstruction, or tendon repair using minimally invasive techniques.', icon: 'ri-surgical-mask-line' },
  { phase: 'Return to Sport', desc: 'Graduated return-to-play protocol. Sport-specific functional testing ensures you\'re ready before clearing you for full competition.', icon: 'ri-trophy-line' },
];

const FAQS = [
  { q: 'How soon should I see a doctor after a sports injury?', a: 'Apply RICE immediately. If pain is severe, you cannot bear weight, there is visible deformity, or swelling is significant — see Dr. Sagar within 24-48 hours. For milder injuries, schedule an appointment if pain persists beyond 3-4 days.' },
  { q: 'Do all ligament tears need surgery?', a: 'No. Many partial ligament tears heal well with physiotherapy and bracing. Dr. Sagar recommends surgery based on tear severity, your activity level, age, and sport-specific demands — never as a reflex decision.' },
  { q: 'How long until I can play sports again?', a: 'Recovery timelines vary by injury. Minor sprains: 2-8 weeks. Meniscus repair: 3-6 months. ACL reconstruction: 6-9 months for full return to pivoting sports. Dr. Sagar provides a personalized timeline during your consultation.' },
  { q: 'Can physiotherapy alone fix my injury?', a: 'Many sports injuries — including partial ligament tears, tendinitis, and muscle strains — respond excellently to dedicated physiotherapy. Dr. Sagar works with experienced sports physiotherapists to maximize non-surgical recovery.' },
  { q: 'What is the consultation fee for sports injuries?', a: 'Call or WhatsApp our team to discuss consultation details. Dr. Sagar will perform a focused examination of your injury, order imaging if needed, and provide a clear treatment plan with realistic return-to-sport expectations.' },
  { q: 'Will I be as strong as before the injury?', a: 'With proper treatment and rehabilitation, most athletes return to their pre-injury level of performance. Dr. Sagar\'s protocols are designed to not just heal the injury but to address the biomechanical factors that contributed to it — making you stronger than before.' },
];

const RELATED = [
  { id: 'knee-pain', icon: 'ri-kick-line', label: 'Knee Pain' },
  { id: 'joint-replacement', icon: 'ri-surgical-mask-line', label: 'Joint Replacement' },
  { id: 'fracture-care', icon: 'ri-shield-line', label: 'Fracture Care' },
  { id: 'back-pain', icon: 'ri-body-scan-line', label: 'Back Pain' },
];

function RevealBlock({ children, delay = '', className = '' }: { children: React.ReactNode; delay?: string; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div ref={ref} className={`${className} transition-all duration-800 ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

export default function SportsInjuriesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <SportsInjuryHero />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Sports Injuries: <span className="text-rose-600">Fast, Focused Recovery</span>
            </h2>
          </RevealBlock>
          <RevealBlock delay="delay-200">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-foreground-600 text-sm leading-relaxed">Sports injuries are unique — they don't just affect your body, they affect your identity, your routine, and your mental wellbeing. Whether you're a competitive athlete, a weekend runner, or a gym enthusiast, an injury feels like a setback that stops you from doing what you love.</p>
              <p className="text-foreground-600 text-sm leading-relaxed">Dr. Sagar K V understands the athlete's mindset. His treatment approach balances <strong className="text-foreground-900">aggressive recovery with safety</strong> — pushing you to heal faster without risking re-injury. Every treatment plan is designed with one goal: getting you back to your sport at full capacity.</p>
              <p className="text-foreground-600 text-sm leading-relaxed">From ACL reconstruction to arthroscopic meniscus repair and rotator cuff surgery, Dr. Sagar uses the latest minimally invasive techniques that minimize recovery time while maximizing outcomes.</p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Common Symptoms - Split visual */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recognize the Signs</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Common Injury <span className="text-rose-600">Symptoms</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <RevealBlock delay="delay-100">
              <div className="space-y-3">
                {[
                  { sign: 'Sudden, sharp pain during activity', icon: 'ri-flashlight-line' },
                  { sign: 'Audible pop or snap at injury moment', icon: 'ri-volume-up-line' },
                  { sign: 'Immediate swelling within 1-2 hours', icon: 'ri-contrast-drop-line' },
                  { sign: 'Inability to continue activity', icon: 'ri-stop-circle-line' },
                  { sign: 'Joint instability or giving way', icon: 'ri-error-warning-line' },
                  { sign: 'Limited range of motion', icon: 'ri-lock-line' },
                  { sign: 'Bruising that develops over 24-48 hours', icon: 'ri-palette-line' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background-50 border border-background-200/70">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                      <i className={`${s.icon} text-rose-500 text-sm`}></i>
                    </div>
                    <span className="text-foreground-700 text-sm">{s.sign}</span>
                  </div>
                ))}
              </div>
            </RevealBlock>

            <RevealBlock delay="delay-200">
              <div className="bg-gradient-to-br from-rose-50 to-background-100 border border-rose-100 rounded-3xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <i className="ri-psychotherapy-line text-rose-600 text-lg"></i>
                  <h3 className="font-heading font-semibold text-foreground-900">Dr. Sagar's Advice</h3>
                </div>
                <p className="text-foreground-600 text-sm leading-relaxed mb-4">If you hear a pop followed by immediate swelling, stop all activity right away. Apply ice, elevate the injured area, and schedule an evaluation within 48 hours. Continuing to play on a serious injury can turn a 3-week recovery into a 6-month surgical journey.</p>
                <div className="bg-white rounded-xl p-4 border border-rose-100">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-phone-line text-rose-500"></i>
                    <span className="font-heading font-semibold text-foreground-900 text-sm">Need urgent advice?</span>
                  </div>
                  <a href="tel:+918197344754" className="text-rose-600 font-semibold text-sm hover:text-rose-700 transition-colors cursor-pointer">Call +91 81973 44754</a>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Injury Types */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Common Sports Injuries</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Injuries We <span className="text-rose-600">Treat</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {INJURY_TYPES.map((injury, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="bg-background-100 border border-background-200/70 rounded-2xl p-5 md:p-6 h-full premium-card group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 group-hover:bg-rose-200 flex items-center justify-center transition-colors duration-300">
                      <i className={`${injury.icon} text-rose-600 text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground-900 text-sm">{injury.title}</h3>
                      <span className="text-rose-500 text-[10px] font-semibold">Recovery: {injury.recovery}</span>
                    </div>
                  </div>
                  <p className="text-foreground-500 text-xs leading-relaxed">{injury.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Phases */}
      <section className="py-16 md:py-24 bg-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-500/8 blur-[130px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <RevealBlock className="text-center mb-12">
            <span className="text-rose-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Treatment Phases</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
              From Injury to <span className="text-rose-400">Victory</span>
            </h2>
          </RevealBlock>

          <div className="relative">
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-rose-400/20" />
            <div className="space-y-5">
              {TREATMENTS.map((t, i) => (
                <RevealBlock key={i} delay={`delay-${i * 150}`}>
                  <div className="flex gap-5">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center shrink-0">
                      <i className={`${t.icon} text-white text-sm`}></i>
                    </div>
                    <div className="glass-dark rounded-2xl p-5 flex-1">
                      <h3 className="font-heading font-bold text-white text-sm mb-2">{t.phase} Care</h3>
                      <p className="text-white/50 text-xs leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Why Early Treatment Matters</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Don't Let an Injury <span className="text-rose-600">Define Your Season</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: 'Prevent Chronic Issues', desc: 'Untreated ligament injuries lead to joint instability, early arthritis, and compensatory injuries in other body parts. Early treatment prevents a single injury from becoming a lifelong problem.' },
              { title: 'Faster Return to Sport', desc: 'Athletes who receive specialist care within the first week of injury return to their sport 40% faster on average compared to those who delay treatment.' },
              { title: 'Accurate Diagnosis Matters', desc: 'Not all knee pain is an ACL tear. Not all shoulder pain is a rotator cuff injury. Dr. Sagar\'s precise diagnosis ensures you\'re treated for the right condition from day one.' },
              { title: 'Mental Recovery Too', desc: 'Sports injuries affect confidence. Dr. Sagar\'s graduated return-to-play protocol rebuilds not just physical strength but psychological readiness for competition.' },
            ].map((b, i) => (
              <RevealBlock key={i} delay={`delay-${i * 120}`}>
                <div className="flex gap-4 p-5 rounded-2xl border border-background-200/70 bg-background-50 premium-card">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                    <i className="ri-shield-check-line text-rose-600 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5">{b.title}</h3>
                    <p className="text-foreground-500 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery & Prevention</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Staying <span className="text-rose-600">Injury-Free</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Proper Warm-Up', desc: 'Dynamic stretching and sport-specific warm-up exercises reduce injury risk by up to 50%. Never skip this step before activity.', icon: 'ri-temp-hot-line' },
              { title: 'Strength Training', desc: 'Strong muscles protect joints. A balanced strength program targeting core, hips, and sport-specific muscle groups is essential for injury prevention.', icon: 'ri-boxing-line' },
              { title: 'Listen to Your Body', desc: 'Pain is a signal, not a challenge. Rest when needed. Pushing through warning signs turns minor issues into major injuries.', icon: 'ri-empathize-line' },
            ].map((tip, i) => (
              <RevealBlock key={i} delay={`delay-${i * 120}`}>
                <div className="text-center p-6 rounded-2xl bg-background-50 border border-background-200/70 premium-card">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose-50 flex items-center justify-center">
                    <i className={`${tip.icon} text-rose-600 text-2xl`}></i>
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
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Sports Injury <span className="text-rose-600">Questions</span>
            </h2>
          </RevealBlock>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-rose-200 bg-background-50' : 'border-background-200/70 bg-background-50 hover:border-rose-100'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                  <span className={`font-heading font-semibold text-sm pr-4 transition-colors duration-300 ${openFaq === i ? 'text-rose-600' : 'text-foreground-900'}`}>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-rose-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}>
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-rose-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/15 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <RevealBlock>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Your Comeback Starts Here</h2>
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-lg mx-auto">Don't let an injury sideline you longer than necessary. Get expert care from Dr. Sagar K V and return to your sport stronger.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-rose-700 font-heading font-semibold rounded-full text-sm hover:bg-white/95 transition-all duration-300 whitespace-nowrap cursor-pointer">
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

      <RelatedPatientStories relevantSlugs={['shoulder-arthroscopy-42']} />

      {/* Related */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900">
              Related <span className="text-rose-600">Treatments</span>
            </h2>
          </RevealBlock>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {RELATED.map((r) => (
              <Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-rose-200 hover:text-rose-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
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
