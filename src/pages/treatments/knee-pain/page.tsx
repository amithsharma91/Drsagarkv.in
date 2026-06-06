import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import KneePainHero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import RelatedPatientStories from '@/components/feature/RelatedPatientStories';

const SYMPTOMS = [
  { icon: 'ri-alert-line', title: 'Pain While Moving', desc: 'Sharp or dull ache when walking, climbing stairs, or standing up from sitting. Often worse after extended activity.' },
  { icon: 'ri-contrast-drop-line', title: 'Swelling & Inflammation', desc: 'Visible puffiness around the knee joint, especially after activity. May feel warm to the touch.' },
  { icon: 'ri-lock-line', title: 'Stiffness & Locking', desc: 'Difficulty fully straightening or bending the knee. Occasional mechanical locking that prevents movement.' },
  { icon: 'ri-error-warning-line', title: 'Instability', desc: 'Sensation of the knee giving way or buckling during weight-bearing activities like walking or standing.' },
  { icon: 'ri-volume-up-line', title: 'Clicking & Grinding', desc: 'Audible or palpable crepitus (grinding sensation) when moving the knee, often indicating cartilage wear.' },
  { icon: 'ri-moon-line', title: 'Night Pain', desc: 'Persistent aching that disturbs sleep, often a sign of advanced arthritis or inflammatory conditions.' },
];

const CAUSES = [
  { title: 'Osteoarthritis', desc: 'Age-related wear and tear of knee cartilage, the most common cause of chronic knee pain in adults over 50.' },
  { title: 'Meniscus Tear', desc: 'Twisting injury that damages the shock-absorbing cartilage pads. Common in sports and accidental falls.' },
  { title: 'Ligament Injury', desc: 'ACL, PCL, MCL, or LCL tears from sudden direction changes or direct impact — frequent in athletes.' },
  { title: 'Patellar Tendinitis', desc: 'Overuse injury causing inflammation of the tendon connecting kneecap to shinbone. Also called jumper\'s knee.' },
  { title: 'Bursitis', desc: 'Inflammation of fluid-filled sacs cushioning the knee joint, often from prolonged kneeling or repetitive motion.' },
  { title: 'Rheumatoid Arthritis', desc: 'Autoimmune condition where the body\'s immune system attacks knee joint lining, causing chronic inflammation.' },
];

const TREATMENTS = [
  { icon: 'ri-psychotherapy-line', title: 'Physiotherapy', desc: 'Targeted exercises to strengthen muscles around the knee, improve flexibility, and restore function. First-line treatment for most knee conditions.' },
  { icon: 'ri-medicine-bottle-line', title: 'Medication', desc: 'Anti-inflammatory drugs, pain relievers, and disease-modifying agents prescribed based on the underlying condition and severity.' },
  { icon: 'ri-drop-line', title: 'Injections', desc: 'Corticosteroid injections for rapid inflammation relief, hyaluronic acid (viscosupplementation) for joint lubrication, and PRP therapy using your own blood platelets.' },
  { icon: 'ri-camera-line', title: 'Arthroscopy', desc: 'Minimally invasive keyhole surgery using a tiny camera to diagnose and treat meniscus tears, ligament damage, and cartilage issues through small incisions.' },
  { icon: 'ri-surgical-mask-line', title: 'Partial Knee Replacement', desc: 'Replaces only the damaged compartment of the knee while preserving healthy bone and ligaments. Faster recovery than total replacement.' },
  { icon: 'ri-heart-pulse-line', title: 'Total Knee Replacement', desc: 'Complete joint resurfacing using advanced implant technology. Dr. Sagar uses minimally invasive techniques for reduced pain and quicker rehabilitation.' },
];

const BENEFITS = [
  { icon: 'ri-speed-up-line', title: 'Faster Diagnosis', desc: 'Accurate identification of the root cause means targeted treatment starts sooner, preventing condition progression.' },
  { icon: 'ri-shield-check-line', title: 'Avoid Surgery', desc: 'Many knee conditions respond well to conservative care. Early intervention often eliminates the need for surgical treatment.' },
  { icon: 'ri-walk-line', title: 'Stay Active', desc: 'Timely treatment preserves mobility and lets you maintain an active lifestyle without pain dictating your limits.' },
  { icon: 'ri-money-rupee-circle-line', title: 'Lower Long-Term Cost', desc: 'Addressing knee pain early prevents expensive emergency interventions and complex surgeries down the line.' },
];

const RECOVERY_STEPS = [
  { week: 'Week 1-2', icon: 'ri-rest-time-line', desc: 'Rest, ice, compression, elevation. Gentle range-of-motion exercises. Pain management with prescribed medication.' },
  { week: 'Week 3-6', icon: 'ri-walk-line', desc: 'Progressive physiotherapy. Gradual return to walking without support. Muscle strengthening exercises introduced.' },
  { week: 'Week 6-12', icon: 'ri-run-line', desc: 'Advanced strengthening. Return to most daily activities. Sports-specific rehabilitation for athletes.' },
  { week: 'Month 3-6', icon: 'ri-trophy-line', desc: 'Full return to recreational activities. Ongoing maintenance exercises. Periodic follow-up with Dr. Sagar.' },
];

const FAQS = [
  { q: 'When should I see a doctor for knee pain?', a: 'See an orthopedic specialist if knee pain persists for more than 2 weeks, interferes with daily activities, causes visible swelling or deformity, prevents weight-bearing, or is accompanied by fever. Early evaluation by Dr. Sagar can prevent minor issues from becoming major problems.' },
  { q: 'Can knee pain heal without surgery?', a: 'Absolutely. The majority of knee conditions — including early arthritis, tendinitis, bursitis, and minor meniscus tears — respond well to conservative treatments like physiotherapy, medication, and lifestyle modifications. Dr. Sagar always explores non-surgical options first.' },
  { q: 'How long does knee replacement recovery take?', a: 'With Dr. Sagar\'s minimally invasive techniques, most patients stand and walk with support within 24 hours post-surgery, return home in 3-5 days, resume driving in 4-6 weeks, and return to most normal activities within 3 months. Full recovery varies by individual.' },
  { q: 'What is the consultation fee for knee pain?', a: 'Call or WhatsApp our team to discuss consultation details. This includes a comprehensive knee examination, review of any previous imaging, and a detailed treatment plan tailored to your specific condition and goals.' },
  { q: 'Do I need an MRI before seeing Dr. Sagar?', a: 'Not necessarily. Dr. Sagar will perform a thorough clinical examination first. He may recommend an X-ray or MRI only if needed for accurate diagnosis. Bring any existing imaging reports to your first appointment.' },
  { q: 'Is knee replacement painful?', a: 'Modern pain management protocols, combined with Dr. Sagar\'s minimally invasive surgical techniques, keep post-operative pain well-controlled. Most patients report that surgical pain is manageable and significantly less than the chronic arthritis pain they lived with before surgery.' },
];

const RELATED = [
  { id: 'joint-replacement', icon: 'ri-surgical-mask-line', label: 'Joint Replacement' },
  { id: 'arthritis', icon: 'ri-hand-heart-line', label: 'Arthritis Treatment' },
  { id: 'sports-injuries', icon: 'ri-run-line', label: 'Sports Injuries' },
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

export default function KneePainPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <KneePainHero />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <span className="text-amber-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3 mb-5">
                  Understanding <span className="text-amber-600">Knee Pain</span>
                </h2>
                <div className="space-y-4 text-foreground-600 text-sm leading-relaxed">
                  <p>Knee pain is one of the most common orthopedic complaints affecting people of all ages — from young athletes to older adults. As the largest and most complex joint in the human body, the knee bears tremendous forces during everyday activities like walking, climbing, and standing.</p>
                  <p>Dr. Sagar K V diagnoses and treats the full spectrum of knee conditions using a <strong className="text-foreground-900">patient-first approach</strong> that prioritizes conservative care whenever possible. From early arthritis management to complex revision joint replacement, every treatment plan is personalized.</p>
                  <p>The key to successful knee treatment is <strong className="text-foreground-900">accurate diagnosis</strong>. Many patients arrive having been told they "just have arthritis" — Dr. Sagar takes the time to identify the exact structures involved so treatment can be precisely targeted.</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-background-100 border border-background-200/70 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                      <i className="ri-kick-line text-amber-600 text-3xl"></i>
                    </div>
                    <span className="text-foreground-400 text-sm">Knee Joint Illustration</span>
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-amber-200/60 animate-spin-slow pointer-events-none" />
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-amber-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Symptoms</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Recognizing the <span className="text-amber-600">Signs</span>
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">Knee conditions present differently for each person. Here are the most common symptoms patients report before visiting Dr. Sagar.</p>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SYMPTOMS.map((s, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 md:p-6 h-full premium-card">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                    <i className={`${s.icon} text-amber-600 text-lg`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{s.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-amber-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Causes</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              What's Causing Your <span className="text-amber-600">Knee Pain?</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAUSES.map((c, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="flex gap-4 p-5 rounded-2xl border border-background-200/70 bg-background-50 hover:border-amber-200/50 transition-all duration-300 group cursor-default">
                  <div className="w-2 rounded-full bg-amber-400/40 group-hover:bg-amber-500 shrink-0 transition-colors duration-300" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5">{c.title}</h3>
                    <p className="text-foreground-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 md:py-24 bg-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/8 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-500/6 blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <RevealBlock className="text-center mb-12">
            <span className="text-amber-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Treatment Options</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
              How Dr. Sagar Treats <span className="text-amber-400">Knee Pain</span>
            </h2>
            <p className="text-white/50 text-sm mt-3 max-w-xl mx-auto">Every treatment journey begins with conservative care. Surgery is only recommended when non-surgical options have been exhausted.</p>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {TREATMENTS.map((t, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="glass-dark rounded-2xl p-5 md:p-6 h-full group hover:-translate-y-1 transition-all duration-400">
                  <div className="w-11 h-11 rounded-xl bg-amber-400/15 flex items-center justify-center mb-4 group-hover:bg-amber-400/25 transition-colors duration-300">
                    <i className={`${t.icon} text-amber-300 text-xl`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-2">{t.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-amber-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Why Act Now</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Benefits of <span className="text-amber-600">Early Treatment</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {BENEFITS.map((b, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="text-center p-6 rounded-2xl border border-background-200/70 bg-background-50 premium-card">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center">
                    <i className={`${b.icon} text-amber-600 text-2xl`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{b.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{b.desc}</p>
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
            <span className="text-amber-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery Journey</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Recovery & <span className="text-amber-600">Rehabilitation</span>
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">Recovery timelines vary by treatment type and individual factors. Here's a general roadmap for knee treatment recovery.</p>
          </RevealBlock>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-0.5 bg-amber-200/60" />

            <div className="space-y-6">
              {RECOVERY_STEPS.map((step, i) => (
                <RevealBlock key={i} delay={`delay-${i * 150}`}>
                  <div className="flex gap-5">
                    <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white font-heading font-bold text-xs">{i + 1}</span>
                    </div>
                    <div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <i className={`${step.icon} text-amber-600`}></i>
                        <span className="font-heading font-semibold text-foreground-900 text-sm">{step.week}</span>
                      </div>
                      <p className="text-foreground-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-amber-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Knee Pain <span className="text-amber-600">Questions</span>
            </h2>
          </RevealBlock>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-amber-200 bg-background-50' : 'border-background-200/70 bg-background-50 hover:border-amber-100'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                  <span className={`font-heading font-semibold text-sm pr-4 transition-colors duration-300 ${openFaq === i ? 'text-amber-600' : 'text-foreground-900'}`}>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-amber-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}>
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <RevealBlock>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to Walk Pain-Free?</h2>
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-lg mx-auto">Don't let knee pain dictate your life. Book a consultation with Dr. Sagar K V and take the first step toward recovery.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-amber-700 font-heading font-semibold rounded-full text-sm hover:bg-white/95 transition-all duration-300 whitespace-nowrap cursor-pointer">
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

      {/* Related Treatments */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-foreground-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Explore Related</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Related <span className="text-amber-600">Treatments</span>
            </h2>
          </RevealBlock>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {RELATED.map((r) => (
              <Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-amber-200 hover:text-amber-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
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
