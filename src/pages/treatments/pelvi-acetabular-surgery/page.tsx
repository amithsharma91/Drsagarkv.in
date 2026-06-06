import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import Hero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SYMPTOMS = [
  { icon: 'ri-alert-line', title: 'Severe Pelvic Pain', desc: 'Intense pain in the pelvic or hip area following high-energy trauma such as road accidents or major falls.' },
  { icon: 'ri-error-warning-line', title: 'Inability to Walk', desc: 'Complete inability to bear weight or walk after a pelvic or hip socket fracture. Emergency assessment is required.' },
  { icon: 'ri-contrast-drop-line', title: 'Visible Deformity', desc: 'Visible pelvic asymmetry or leg length discrepancy. Leg may appear shortened or rotated outward.' },
  { icon: 'ri-empathize-line', title: 'Hip Instability', desc: 'Feeling of hip instability or abnormal movement after acetabular (hip socket) fracture.' },
  { icon: 'ri-shield-line', title: 'Associated Injuries', desc: 'Pelvic fractures often occur with other injuries — abdominal, urological, or neurological — requiring multi-specialty coordination.' },
  { icon: 'ri-mental-health-line', title: 'Post-Traumatic Deformity', desc: 'Chronic pain and disability from inadequately treated or malunited pelvic fractures requiring revision reconstruction.' },
];

const TREATMENTS = [
  { icon: 'ri-surgical-mask-line', title: 'Open Reduction Internal Fixation', desc: 'Precise surgical realignment of pelvic and acetabular fractures using specialized plates and screws for stable fixation.' },
  { icon: 'ri-scan-2-line', title: 'CT-Guided Surgical Planning', desc: 'Advanced 3D CT reconstruction for detailed pre-operative planning, ensuring accurate implant placement and optimal fracture reduction.' },
  { icon: 'ri-empathize-line', title: 'Acetabular Reconstruction', desc: 'Complex reconstruction of the hip socket to restore congruity and prevent post-traumatic arthritis.' },
  { icon: 'ri-mental-health-line', title: 'Multi-Disciplinary Care', desc: 'Coordinated care with general surgeons, urologists, and neurosurgeons when pelvic fractures involve other organ systems.' },
];

const RECOVERY_STEPS = [
  { week: 'Week 1-2', icon: 'ri-rest-time-line', desc: 'Hospital stay with pain management, DVT prevention, and gentle bed exercises. Non-weight bearing on the affected side.' },
  { week: 'Week 3-6', icon: 'ri-walk-line', desc: 'Gradual progression to touch-down weight bearing with crutches or walker. Physiotherapy begins.' },
  { week: 'Week 6-12', icon: 'ri-run-line', desc: 'Progressive weight bearing as healing allows. Advanced physiotherapy for hip and core strengthening.' },
  { week: 'Month 3-6', icon: 'ri-trophy-line', desc: 'Return to most daily activities. Full recovery may take 6-12 months for complex pelvic reconstructions.' },
];

const FAQS = [
  { q: 'What is pelvi-acetabular surgery?', a: 'It is advanced orthopedic surgery addressing fractures of the pelvis and acetabulum (hip socket). These are among the most complex fractures in orthopedics, requiring specialized fellowship training for optimal outcomes.' },
  { q: 'Why is Dr. Sagar uniquely qualified?', a: 'Dr. Sagar completed a dedicated Fellowship in Pelvi-Acetabular Surgery at Max Hospital, Mohali — one of India\'s premier centers for pelvic trauma. He is one of the few orthopedic surgeons in Bangalore with this specialized expertise.' },
  { q: 'How long is the recovery?', a: 'Recovery depends on the fracture complexity. Most patients begin weight-bearing within 6-12 weeks, with full recovery taking 6-12 months. Dr. Sagar provides a detailed recovery roadmap at each stage.' },
];

const RELATED = [
  { id: 'trauma-surgery', icon: 'ri-heart-pulse-line', label: 'Trauma Surgery' },
  { id: 'fracture-care', icon: 'ri-shield-line', label: 'Fracture Care' },
  { id: 'limb-reconstruction', icon: 'ri-ruler-line', label: 'Limb Reconstruction' },
  { id: 'pain-management', icon: 'ri-pulse-line', label: 'Pain Management' },
];

function RevealBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (<div ref={ref} className={`${className} transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{children}</div>);
}

export default function PelviAcetabularPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-background-50">
      <Header /><Hero />
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"><div><span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3 mb-5">Understanding <span className="text-rose-600">Pelvi-Acetabular Surgery</span></h2><div className="space-y-4 text-foreground-600 text-sm leading-relaxed"><p>Pelvi-acetabular surgery deals with fractures of the pelvis and acetabulum (hip socket) — among the most complex and technically demanding procedures in all of orthopedic surgery. These injuries typically result from high-energy trauma and require specialized expertise for optimal outcomes.</p><p>Dr. Sagar K V is one of the <strong className="text-foreground-900">few orthopedic surgeons in Bangalore</strong> with dedicated fellowship training in pelvi-acetabular surgery, completed at Max Hospital, Mohali — a nationally recognized center for complex pelvic trauma.</p></div></div></div></RevealBlock></div></section>
      <section className="py-16 md:py-24 bg-background-100"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-12"><span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">When to Seek Care</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Signs of <span className="text-rose-600">Pelvi-Acetabular Injury</span></h2></RevealBlock><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{SYMPTOMS.map((s, i) => (<RevealBlock key={i}><div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 h-full"><div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center mb-4"><i className={`${s.icon} text-rose-600 text-lg`}></i></div><h3 className="font-heading font-semibold text-sm mb-2">{s.title}</h3><p className="text-foreground-500 text-xs leading-relaxed">{s.desc}</p></div></RevealBlock>))}</div></div></section>
      <section className="py-16 md:py-24 bg-secondary-600 relative overflow-hidden"><div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-500/8 blur-[120px]" /></div><div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10"><RevealBlock className="text-center mb-12"><span className="text-rose-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Surgical Expertise</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">Advanced <span className="text-rose-400">Surgical Approaches</span></h2></RevealBlock><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{TREATMENTS.map((t, i) => (<RevealBlock key={i}><div className="glass-dark rounded-2xl p-5 h-full"><div className="w-11 h-11 rounded-xl bg-rose-400/15 flex items-center justify-center mb-4"><i className={`${t.icon} text-rose-300 text-xl`}></i></div><h3 className="font-heading font-semibold text-white text-sm mb-2">{t.title}</h3><p className="text-white/45 text-xs leading-relaxed">{t.desc}</p></div></RevealBlock>))}</div></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-4xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-12"><span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Recovery <span className="text-rose-600">Timeline</span></h2></RevealBlock><div className="relative"><div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-0.5 bg-rose-200/60" /><div className="space-y-6">{RECOVERY_STEPS.map((step, i) => (<RevealBlock key={i}><div className="flex gap-5"><div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-500 flex items-center justify-center shrink-0"><span className="text-white font-heading font-bold text-xs">{i + 1}</span></div><div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 flex-1"><div className="flex items-center gap-2 mb-2"><i className={`${step.icon} text-rose-600`}></i><span className="font-heading font-semibold text-sm">{step.week}</span></div><p className="text-foreground-500 text-xs leading-relaxed">{step.desc}</p></div></div></RevealBlock>))}</div></div></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-3xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-10"><span className="text-rose-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Pelvi-Acetabular <span className="text-rose-600">Questions</span></h2></RevealBlock><div className="space-y-3">{FAQS.map((faq, i) => (<div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-rose-200' : 'border-background-200/70'}`}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"><span className={`font-heading font-semibold text-sm pr-4 ${openFaq === i ? 'text-rose-600' : 'text-foreground-900'}`}>{faq.q}</span><div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-rose-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}><i className="ri-add-line text-sm"></i></div></button><div className={`transition-all duration-400 overflow-hidden ${openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}><div className="px-5 pb-5 text-foreground-500 text-sm leading-relaxed">{faq.a}</div></div></div>))}</div></div></section>
      <section className="py-16 md:py-20 bg-gradient-to-r from-rose-600 to-red-600 relative overflow-hidden"><div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10"><RevealBlock><h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Complex Pelvic Injury?</h2><p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">Dr. Sagar K V is one of the few fellowship-trained pelvi-acetabular surgeons in Bangalore. Get expert care when it matters most.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3"><a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-rose-700 font-heading font-semibold rounded-full text-sm cursor-pointer"><i className="ri-phone-line mr-2"></i>Call Now</a><a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white/15 border border-white/25 text-white font-heading font-semibold rounded-full text-sm cursor-pointer"><i className="ri-whatsapp-line mr-2"></i>WhatsApp</a></div></RevealBlock></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-10"><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Related <span className="text-rose-600">Treatments</span></h2></RevealBlock><div className="flex flex-wrap items-center justify-center gap-3">{RELATED.map((r) => (<Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-rose-200 hover:text-rose-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"><i className={`${r.icon} text-base`}></i>{r.label}</Link>))}</div></div></section>
      <Footer /><FloatingWhatsApp /><MobileStickyBar />
    </main>
  );
}
