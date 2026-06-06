import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import TraumaSurgeryHero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import RelatedPatientStories from '@/components/feature/RelatedPatientStories';

const SYMPTOMS = [
  { icon: 'ri-error-warning-line', title: 'Severe Pain', desc: 'Intense, unrelenting pain following an accident or injury. Often worsens with any attempt to move the affected area.' },
  { icon: 'ri-shape-line', title: 'Visible Deformity', desc: 'Obvious angulation, shortening, or abnormal positioning of a limb indicating fracture or joint dislocation.' },
  { icon: 'ri-contrast-drop-line', title: 'Rapid Swelling', desc: 'Immediate and significant swelling at the injury site, often accompanied by bruising and warmth.' },
  { icon: 'ri-close-circle-line', title: 'Inability to Move', desc: 'Complete loss of function — cannot move or bear weight on the injured limb.' },
  { icon: 'ri-alert-line', title: 'Open Wounds', desc: 'Bone protruding through skin or deep lacerations near the injury site — requires urgent surgical attention.' },
  { icon: 'ri-mental-health-line', title: 'Multiple Injuries', desc: 'Polytrauma involving multiple body regions from high-energy accidents like road traffic collisions.' },
];

const CAUSES = [
  { title: 'Road Traffic Accidents', desc: 'The leading cause of orthopedic trauma. High-velocity impacts cause complex fractures, dislocations, and soft tissue injuries.' },
  { title: 'Falls from Height', desc: 'Workplace and construction accidents involving significant height generating axial loading forces on bones and joints.' },
  { title: 'Sports Collisions', desc: 'High-impact sports like football, rugby, and wrestling causing ligament ruptures, fractures, and joint dislocations.' },
  { title: 'Industrial Accidents', desc: 'Crush injuries, machinery accidents, and heavy object impacts requiring complex surgical reconstruction.' },
  { title: 'Domestic Falls', desc: 'Particularly in elderly patients — hip fractures, wrist fractures, and shoulder injuries from ground-level falls.' },
  { title: 'Violence & Assault', desc: 'Blunt trauma and penetrating injuries requiring careful assessment of bone, vascular, and nerve involvement.' },
];

const TREATMENTS = [
  { icon: 'ri-surgical-mask-line', title: 'Emergency Debridement', desc: 'Thorough cleaning and removal of contaminated or dead tissue from open fractures to prevent infection before definitive fixation.' },
  { icon: 'ri-tools-line', title: 'External Fixation', desc: 'Temporary or definitive stabilization using external frames — ideal for open fractures, severe soft tissue injury, and damage control orthopedics.' },
  { icon: 'ri-shield-line', title: 'Plate & Screw Fixation', desc: 'Anatomic reduction and rigid internal fixation using titanium plates and screws for periarticular and forearm fractures.' },
  { icon: 'ri-scissors-line', title: 'Intramedullary Nailing', desc: 'Minimally invasive fixation of long bone fractures (femur, tibia, humerus) using locked intramedullary nails for early mobilization.' },
  { icon: 'ri-knife-line', title: 'Vascular Repair', desc: 'Urgent repair of damaged blood vessels in limb-threatening injuries, performed in coordination with vascular surgery.' },
  { icon: 'ri-psychotherapy-line', title: 'Reconstructive Surgery', desc: 'Delayed reconstruction of malunions, nonunions, bone defects, and post-traumatic deformities to restore function.' },
];

const BENEFITS = [
  { icon: 'ri-speed-up-line', title: 'Rapid Response', desc: 'Immediate surgical assessment and intervention to prevent complications like compartment syndrome and infection.' },
  { icon: 'ri-shield-check-line', title: 'Infection Prevention', desc: 'Meticulous surgical technique and appropriate antibiotic protocols to minimize infection risk in open injuries.' },
  { icon: 'ri-walk-line', title: 'Early Mobilization', desc: 'Modern fixation techniques allow patients to begin moving and walking sooner, reducing complications from prolonged bed rest.' },
  { icon: 'ri-refresh-line', title: 'Functional Restoration', desc: 'Surgery designed not just to heal bones but to restore full function for return to work and daily activities.' },
];

const RECOVERY_STEPS = [
  { week: 'Day 1-3', icon: 'ri-hospital-line', desc: 'Emergency surgery, wound management, pain control, and initial stabilization in a monitored setting.' },
  { week: 'Week 1-2', icon: 'ri-rest-time-line', desc: 'Protected weight-bearing as tolerated. Start gentle range-of-motion exercises. Wound care and suture removal.' },
  { week: 'Week 3-8', icon: 'ri-walk-line', desc: 'Progressive physiotherapy, increased weight-bearing based on X-ray evidence of healing, muscle strengthening.' },
  { week: 'Month 2-6', icon: 'ri-trophy-line', desc: 'Full return to activities. Removal of hardware if needed. Long-term follow-up to ensure complete recovery.' },
];

const FAQS = [
  { q: 'When is trauma surgery needed?', a: 'Trauma surgery is required for open fractures, displaced fractures that cannot be managed with casting, joint dislocations with associated fractures, multiple injuries (polytrauma), and injuries with nerve or blood vessel damage. Dr. Sagar evaluates each case individually.' },
  { q: 'How quickly should trauma surgery be performed?', a: 'Open fractures require surgery within 6 hours (the "6-hour rule") to minimize infection risk. Closed fractures may be operated on within 24-72 hours once swelling subsides. Life-threatening injuries are prioritized immediately.' },
  { q: 'What is damage control orthopedics?', a: 'A staged approach for severely injured patients where initial surgery focuses on temporary stabilization (external fixator), allowing the patient to recover from the physiologic insult before definitive fixation days later.' },
  { q: 'Will I need hardware removal later?', a: 'Not always. Many implants are designed to stay permanently. Hardware removal is considered if plates or screws cause discomfort, in young patients, or for specific locations like the ankle syndesmosis.' },
  { q: 'How long does fracture healing take?', a: 'Upper limb fractures typically heal in 6-12 weeks. Lower limb fractures take 12-24 weeks. Factors like age, nutrition, smoking status, and fracture complexity affect healing time. Dr. Sagar monitors healing with serial X-rays.' },
  { q: 'Is emergency trauma care available 24/7?', a: 'Yes. For fractures, dislocations, and acute injuries, South End Speciality Clinic in Basavanagudi provides emergency orthopedic care. Call immediately for guidance.' },
];

const RELATED = [
  { id: 'fracture-care', icon: 'ri-shield-line', label: 'Fracture Care' },
  { id: 'joint-replacement', icon: 'ri-surgical-mask-line', label: 'Joint Replacement' },
  { id: 'sports-injuries', icon: 'ri-run-line', label: 'Sports Injuries' },
  { id: 'rehabilitation', icon: 'ri-mental-health-line', label: 'Rehabilitation' },
];

function RevealBlock({ children, delay = '', className = '' }: { children: React.ReactNode; delay?: string; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div ref={ref} className={`${className} transition-all duration-800 ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

export default function TraumaSurgeryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <TraumaSurgeryHero />

      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <span className="text-red-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3 mb-5">Understanding <span className="text-red-600">Trauma Surgery</span></h2>
                <div className="space-y-4 text-foreground-600 text-sm leading-relaxed">
                  <p>Trauma surgery addresses severe musculoskeletal injuries requiring urgent surgical intervention. Unlike elective orthopedic procedures, trauma cases demand rapid decision-making, meticulous surgical technique, and a comprehensive understanding of injury patterns.</p>
                  <p>Dr. Sagar K V provides <strong className="text-foreground-900">24/7 emergency orthopedic trauma care</strong> at South End Speciality Clinic, Basavanagudi. From simple fractures to complex polytrauma involving multiple body regions, every case is approached with the urgency and expertise it demands.</p>
                  <p>The goal of trauma surgery is twofold: <strong className="text-foreground-900">save life, then save limb and function</strong>. Modern fixation techniques allow for early mobilization, which significantly reduces complications like blood clots, pneumonia, and muscle wasting.</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-red-100 via-rose-50 to-background-100 border border-background-200/70 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                      <i className="ri-heart-pulse-line text-red-600 text-3xl"></i>
                    </div>
                    <span className="text-foreground-400 text-sm">Trauma Surgery Illustration</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-red-200/60 animate-spin-slow pointer-events-none" />
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-red-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Symptoms</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">When Trauma <span className="text-red-600">Strikes</span></h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">Recognize the signs that require urgent orthopedic attention. Delaying care can lead to serious complications.</p>
          </RevealBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SYMPTOMS.map((s, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 md:p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4"><i className={`${s.icon} text-red-600 text-lg`}></i></div>
                  <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{s.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-red-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Causes</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Common <span className="text-red-600">Causes</span> of Trauma</h2>
          </RevealBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAUSES.map((c, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="flex gap-4 p-5 rounded-2xl border border-background-200/70 bg-background-50 hover:border-red-200/50 transition-all duration-300 group cursor-default">
                  <div className="w-2 rounded-full bg-red-400/40 group-hover:bg-red-500 shrink-0 transition-colors duration-300" />
                  <div><h3 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5">{c.title}</h3><p className="text-foreground-500 text-xs leading-relaxed">{c.desc}</p></div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-500/8 blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <RevealBlock className="text-center mb-12">
            <span className="text-red-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Treatment Options</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">Surgical <span className="text-red-400">Techniques</span></h2>
            <p className="text-white/50 text-sm mt-3 max-w-xl mx-auto">Dr. Sagar employs a range of modern trauma surgery techniques tailored to your specific injury pattern.</p>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {TREATMENTS.map((t, i) => (
              <RevealBlock key={i} delay={`delay-${i * 80}`}>
                <div className="glass-dark rounded-2xl p-5 md:p-6 h-full group hover:-translate-y-1 transition-all duration-400">
                  <div className="w-11 h-11 rounded-xl bg-red-400/15 flex items-center justify-center mb-4 group-hover:bg-red-400/25 transition-colors duration-300">
                    <i className={`${t.icon} text-red-300 text-xl`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-2">{t.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-red-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Why Timely Care</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Benefits of <span className="text-red-600">Early Surgery</span></h2>
          </RevealBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {BENEFITS.map((b, i) => (
              <RevealBlock key={i} delay={`delay-${i * 100}`}>
                <div className="text-center p-6 rounded-2xl border border-background-200/70 bg-background-50">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center"><i className={`${b.icon} text-red-600 text-2xl`}></i></div>
                  <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{b.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-12">
            <span className="text-red-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery Journey</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Trauma <span className="text-red-600">Recovery Timeline</span></h2>
          </RevealBlock>
          <div className="relative">
            <div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-0.5 bg-red-200/60" />
            <div className="space-y-6">
              {RECOVERY_STEPS.map((step, i) => (
                <RevealBlock key={i} delay={`delay-${i * 150}`}>
                  <div className="flex gap-5">
                    <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center shrink-0 mt-0.5"><span className="text-white font-heading font-bold text-xs">{i + 1}</span></div>
                    <div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 flex-1">
                      <div className="flex items-center gap-2 mb-2"><i className={`${step.icon} text-red-600`}></i><span className="font-heading font-semibold text-foreground-900 text-sm">{step.week}</span></div>
                      <p className="text-foreground-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-red-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Trauma Surgery <span className="text-red-600">Questions</span></h2>
          </RevealBlock>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-red-200 bg-background-50' : 'border-background-200/70 bg-background-50 hover:border-red-100'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                  <span className={`font-heading font-semibold text-sm pr-4 transition-colors duration-300 ${openFaq === i ? 'text-red-600' : 'text-foreground-900'}`}>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-red-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}>
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

      <section className="py-16 md:py-20 bg-gradient-to-r from-red-700 to-rose-700 relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" /></div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <RevealBlock>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Orthopedic Emergency?</h2>
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-lg mx-auto">For fractures, dislocations, and acute trauma — call immediately. Dr. Sagar provides emergency orthopedic care 24/7.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-red-700 font-heading font-semibold rounded-full text-sm hover:bg-white/95 transition-all duration-300 whitespace-nowrap cursor-pointer">
                <i className="ri-phone-line mr-2"></i>Call Now
              </a>
              <a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white/15 border border-white/25 text-white font-heading font-semibold rounded-full text-sm hover:bg-white/25 transition-all duration-300 whitespace-nowrap cursor-pointer">
                <i className="ri-whatsapp-line mr-2"></i>WhatsApp
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      <RelatedPatientStories relevantSlugs={['spine-surgery-55', 'knee-replacement-68']} />

      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealBlock className="text-center mb-10">
            <span className="text-foreground-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Explore Related</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Related <span className="text-red-600">Treatments</span></h2>
          </RevealBlock>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {RELATED.map((r) => (
              <Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-red-200 hover:text-red-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
                <i className={`${r.icon} text-base`}></i>{r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}
