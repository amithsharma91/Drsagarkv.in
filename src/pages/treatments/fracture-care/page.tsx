import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import FractureTraumaHero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import RelatedPatientStories from '@/components/feature/RelatedPatientStories';

const FRACTURE_TYPES = [
  { title: 'Simple Fracture', desc: 'Bone breaks cleanly without piercing skin. Usually treated with plaster casting or splinting. Heals in 6-8 weeks with proper immobilization.', icon: 'ri-shield-check-line', severity: 'Moderate' },
  { title: 'Compound Fracture', desc: 'Broken bone pierces through skin — a surgical emergency. Requires immediate irrigation, debridement, and surgical fixation to prevent infection.', icon: 'ri-alert-line', severity: 'Severe' },
  { title: 'Comminuted Fracture', desc: 'Bone shatters into multiple fragments. Requires surgical reconstruction with plates, screws, or intramedullary nails for stable fixation.', icon: 'ri-puzzle-line', severity: 'Severe' },
  { title: 'Stress Fracture', desc: 'Hairline crack from repetitive force or overuse — common in runners and athletes. Often heals with rest and activity modification alone.', icon: 'ri-close-circle-line', severity: 'Mild' },
  { title: 'Greenstick Fracture', desc: 'Incomplete fracture where bone bends and cracks — common in children whose bones are more flexible. Treated with casting.', icon: 'ri-leaf-line', severity: 'Mild' },
  { title: 'Pathological Fracture', desc: 'Bone breaks through weakened area caused by underlying condition like osteoporosis, tumor, or infection. Requires treating both fracture and root cause.', icon: 'ri-virus-line', severity: 'Variable' },
];

const TREATMENTS = [
  { title: 'Closed Reduction & Casting', desc: 'Bone fragments are realigned without surgery, then immobilized with plaster or fiberglass cast. Suitable for stable, non-displaced fractures.', icon: 'ri-hand-sanitizer-line' },
  { title: 'External Fixation', desc: 'Pins inserted through skin into bone, connected to an external frame. Used for severe open fractures with soft tissue damage.', icon: 'ri-links-line' },
  { title: 'Plate & Screw Fixation', desc: 'Metal plate secured to bone surface with screws. Provides rigid internal fixation for displaced fractures requiring anatomical reduction.', icon: 'ri-tools-line' },
  { title: 'Intramedullary Nailing', desc: 'Metal rod inserted into bone marrow cavity to stabilize long bone fractures. Allows early weight-bearing and faster recovery.', icon: 'ri-database-2-line' },
  { title: 'K-Wire Fixation', desc: 'Thin wires used for small bone fractures (hand, wrist, foot). Minimally invasive with small incisions and quick recovery.', icon: 'ri-pushpin-line' },
];

const HEALING_TIMELINE = [
  { phase: 'Inflammatory Phase', time: 'Day 1-7', desc: 'Blood clot forms at fracture site. Inflammatory cells arrive to clean debris. Swelling and pain are most intense during this period.' },
  { phase: 'Soft Callus Formation', time: 'Week 1-3', desc: 'Cartilage-like tissue (soft callus) bridges the fracture gap. The bone starts to feel more stable, though still fragile.' },
  { phase: 'Hard Callus Formation', time: 'Week 3-12', desc: 'Soft callus mineralizes into hard bone. X-rays show new bone formation. Protected weight-bearing may begin depending on fracture type.' },
  { phase: 'Bone Remodeling', time: 'Month 3-24', desc: 'New bone remodels to match original shape and strength. Full strength returns gradually. Physiotherapy ensures complete functional recovery.' },
];

const FAQS = [
  { q: 'How do I know if I have a fracture?', a: 'Signs include sudden severe pain after an injury, visible deformity, inability to move or bear weight on the affected area, swelling, bruising, and sometimes a grinding sensation. If you suspect a fracture, immobilize the area and seek immediate medical attention — do not attempt to use the injured limb.' },
  { q: 'How long does a fracture take to heal?', a: 'Simple fractures typically heal in 6-8 weeks. Complex fractures or those requiring surgery may take 3-6 months for full union. Children heal faster (4-6 weeks). Factors like age, nutrition, smoking, and fracture location affect healing time. Dr. Sagar monitors healing with regular X-rays.' },
  { q: 'Will I need surgery for my fracture?', a: 'Not all fractures require surgery. Stable, non-displaced fractures heal well with casting. Surgery is needed when bones are displaced, the fracture involves a joint surface, there are multiple fragments, or the fracture is open (bone through skin). Dr. Sagar recommends surgery only when clearly indicated.' },
  { q: 'Is physiotherapy necessary after fracture healing?', a: 'Yes — physiotherapy is essential for complete recovery. Muscles weaken during immobilization, and joints become stiff. A structured rehabilitation program restores strength, range of motion, and function. Skipping physiotherapy can lead to permanent stiffness and weakness.' },
  { q: 'What should I eat to help fracture healing?', a: 'Adequate protein intake supports bone healing. Calcium-rich foods (dairy, leafy greens), vitamin D (sunlight, fortified foods), and vitamin C (citrus, peppers) are particularly important. Avoid smoking and limit alcohol — both significantly delay bone healing.' },
  { q: 'What emergency services are available?', a: 'Dr. Sagar provides emergency orthopedic care at South End Speciality Clinic, Basavanagudi. For fractures, dislocations, and acute trauma, call +91 81973 44754 immediately. Evening and weekend emergency coverage is available.' },
];

const RELATED = [
  { id: 'sports-injuries', icon: 'ri-run-line', label: 'Sports Injuries' },
  { id: 'joint-replacement', icon: 'ri-surgical-mask-line', label: 'Joint Replacement' },
  { id: 'knee-pain', icon: 'ri-kick-line', label: 'Knee Pain' },
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

export default function FractureTraumaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <FractureTraumaHero />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-teal-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Fracture & <span className="text-teal-600">Trauma Care</span>
            </h2>
          </RevealBlock>
          <RevealBlock delay="delay-200">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-foreground-600 text-sm leading-relaxed">A fracture — a broken bone — is one of the most common orthopedic emergencies. Whether from a road accident, sports injury, workplace incident, or a simple fall at home, fractures demand prompt, expert attention to heal correctly and prevent long-term complications.</p>
              <p className="text-foreground-600 text-sm leading-relaxed">Dr. Sagar K V has treated <strong className="text-foreground-900">over 4,000 fractures</strong> ranging from simple wrist fractures in children to complex polytrauma from road accidents. His orthopedic services at South End Speciality Clinic ensure patients receive timely, expert care when it matters most.</p>
              <p className="text-foreground-600 text-sm leading-relaxed">The goal of fracture treatment is straightforward: <strong className="text-teal-700">restore anatomy, achieve stable fixation, and enable early mobilization</strong>. Modern surgical techniques allow many patients to begin moving and bearing weight much sooner than traditional methods permitted.</p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Symptoms & Signs */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-teal-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Symptoms</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              How to Recognize a <span className="text-teal-600">Fracture</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: 'ri-flashlight-line', title: 'Sudden Severe Pain', desc: 'Intense pain immediately after injury that worsens with any attempt to move the affected area.' },
              { icon: 'ri-eye-line', title: 'Visible Deformity', desc: 'Limb appears bent, shortened, or rotated at an unnatural angle. Compare with uninjured side for reference.' },
              { icon: 'ri-contrast-drop-line', title: 'Rapid Swelling', desc: 'Swelling and bruising develop within minutes to hours as blood vessels around the fracture site are disrupted.' },
              { icon: 'ri-stop-circle-line', title: 'Inability to Move', desc: 'Cannot bear weight on leg fractures or use arm fractures. Any attempt causes severe pain and may worsen displacement.' },
              { icon: 'ri-volume-up-line', title: 'Audible Snap', desc: 'Many patients report hearing or feeling a snap or crack at the moment of injury — a distinctive sign of bone breakage.' },
              { icon: 'ri-empathize-line', title: 'Numbness or Tingling', desc: 'May indicate nerve involvement — particularly concerning in wrist, elbow, and spinal fractures. Requires urgent evaluation.' },
            ].map((s, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 premium-card text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-teal-50 flex items-center justify-center">
                    <i className={`${s.icon} text-teal-600 text-lg`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{s.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Fracture Types */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-teal-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Causes & Types</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Types of <span className="text-teal-600">Fractures</span>
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">The treatment approach depends on fracture type, location, and severity. Accurate classification is the first step toward proper care.</p>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FRACTURE_TYPES.map((f, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="bg-background-100 border border-background-200/70 rounded-2xl p-5 h-full premium-card">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center">
                        <i className={`${f.icon} text-teal-600`}></i>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground-900 text-sm">{f.title}</h3>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                      f.severity === 'Severe' ? 'bg-red-50 text-red-600' : f.severity === 'Moderate' ? 'bg-amber-50 text-amber-600' : f.severity === 'Mild' ? 'bg-emerald-50 text-emerald-600' : 'bg-teal-50 text-teal-600'
                    }`}>{f.severity}</span>
                  </div>
                  <p className="text-foreground-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 md:py-24 bg-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/6 blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <RevealBlock className="text-center mb-12">
            <span className="text-teal-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Treatment Options</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
              How Dr. Sagar Treats <span className="text-teal-400">Fractures</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TREATMENTS.map((t, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="glass-dark rounded-2xl p-5 h-full group hover:-translate-y-1 transition-all duration-400">
                  <div className="w-10 h-10 rounded-xl bg-teal-400/15 flex items-center justify-center mb-3 group-hover:bg-teal-400/25 transition-colors duration-300">
                    <i className={`${t.icon} text-teal-300 text-lg`}></i>
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
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-teal-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Why Prompt Treatment Matters</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Don't Delay <span className="text-teal-600">Fracture Care</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Prevent Malunion', desc: 'Fractures treated within hours heal in correct alignment. Delayed treatment leads to bones healing in wrong position — requiring complex revision surgery.', icon: 'ri-ruler-line' },
              { title: 'Reduce Infection Risk', desc: 'Open fractures need surgical cleaning within 6 hours. Every hour of delay increases infection risk significantly.', icon: 'ri-shield-flash-line' },
              { title: 'Faster Recovery', desc: 'Early surgical stabilization allows immediate mobilization. Patients treated promptly return to normal activities weeks sooner.', icon: 'ri-speed-up-line' },
            ].map((b, i) => (
              <RevealBlock key={i} delay={`delay-${i * 120}`}>
                <div className="text-center p-6 rounded-2xl border border-background-200/70 bg-background-50 premium-card">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-teal-50 flex items-center justify-center">
                    <i className={`${b.icon} text-teal-600 text-2xl`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{b.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-teal-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery Process</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              How <span className="text-teal-600">Bones Heal</span>
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">Understanding the biology of bone healing helps set realistic expectations for recovery.</p>
          </RevealBlock>

          <div className="relative">
            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-teal-200/50" />
            <div className="space-y-5">
              {HEALING_TIMELINE.map((phase, i) => (
                <RevealBlock key={i} delay={`delay-${i * 150}`}>
                  <div className="flex gap-5">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                      <span className="text-white font-heading font-bold text-xs">{i + 1}</span>
                    </div>
                    <div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-heading font-semibold text-foreground-900 text-sm">{phase.phase}</span>
                        <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-600 text-[10px] font-semibold">{phase.time}</span>
                      </div>
                      <p className="text-foreground-500 text-xs leading-relaxed">{phase.desc}</p>
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
            <span className="text-teal-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Fracture & Trauma <span className="text-teal-600">Questions</span>
            </h2>
          </RevealBlock>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-teal-200 bg-background-50' : 'border-background-200/70 bg-background-50 hover:border-teal-100'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                  <span className={`font-heading font-semibold text-sm pr-4 transition-colors duration-300 ${openFaq === i ? 'text-teal-600' : 'text-foreground-900'}`}>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-teal-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}>
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/10 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <RevealBlock>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Heal Stronger, Heal Faster</h2>
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-lg mx-auto">For fractures, every hour matters. Contact Dr. Sagar K V for expert evaluation and treatment — emergency services available.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-teal-700 font-heading font-semibold rounded-full text-sm hover:bg-white/95 transition-all duration-300 whitespace-nowrap cursor-pointer">
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
              Related <span className="text-teal-600">Treatments</span>
            </h2>
          </RevealBlock>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {RELATED.map((r) => (
              <Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-teal-200 hover:text-teal-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
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
