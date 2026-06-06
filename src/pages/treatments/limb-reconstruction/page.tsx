import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import Hero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SYMPTOMS = [
  { icon: 'ri-ruler-line', title: 'Limb Deformity', desc: 'Visible angulation, rotation, or shortening of the limb following trauma or arising from congenital conditions.' },
  { icon: 'ri-error-warning-line', title: 'Leg Length Discrepancy', desc: 'Noticeable difference in leg lengths causing limp, back pain, and gait abnormalities. May be congenital or post-traumatic.' },
  { icon: 'ri-alert-line', title: 'Non-Union Fractures', desc: 'Fractures that have failed to heal despite adequate time and treatment. Requires specialized reconstruction techniques.' },
  { icon: 'ri-empathize-line', title: 'Bone Loss', desc: 'Segmental bone loss following severe trauma, infection, or tumor resection. Bone transport techniques can regenerate missing bone.' },
  { icon: 'ri-contrast-drop-line', title: 'Chronic Infection', desc: 'Persistent bone infection (osteomyelitis) requiring thorough debridement and staged reconstruction.' },
  { icon: 'ri-mental-health-line', title: 'Functional Limitation', desc: 'Significant impact on daily function — difficulty walking, standing, or performing work-related activities.' },
];

const TECHNIQUES = [
  { icon: 'ri-tools-line', title: 'External Fixation', desc: 'Ilizarov and modern hexapod frames for gradual deformity correction, limb lengthening, and bone transport.' },
  { icon: 'ri-surgical-mask-line', title: 'Internal Lengthening', desc: 'Modern intramedullary lengthening nails that allow bone lengthening without external frames — better comfort and fewer complications.' },
  { icon: 'ri-shield-check-line', title: 'Bone Grafting', desc: 'Autograft, allograft, and synthetic bone graft techniques to fill bone defects and stimulate healing.' },
  { icon: 'ri-psychotherapy-line', title: 'Deformity Planning', desc: 'Detailed pre-operative analysis and computer planning to precisely calculate correction angles and osteotomy sites.' },
];

const RECOVERY_STEPS = [
  { week: 'Month 1-2', icon: 'ri-rest-time-line', desc: 'Initial healing phase. Protected weight bearing. Frame or nail care. Regular follow-up for adjustment and monitoring.' },
  { week: 'Month 3-6', icon: 'ri-walk-line', desc: 'Bone consolidation phase. Gradual increase in weight bearing. Physiotherapy for joint mobility and muscle strength.' },
  { week: 'Month 6-12', icon: 'ri-run-line', desc: 'Frame or nail removal (when applicable). Progressive return to normal activities. Gait training if needed.' },
  { week: 'Month 12+', icon: 'ri-trophy-line', desc: 'Full functional recovery. Return to work and recreational activities. Long-term follow-up to monitor results.' },
];

const FAQS = [
  { q: 'What conditions require limb reconstruction?', a: 'Limb reconstruction addresses post-traumatic deformities, non-union fractures, congenital deformities, limb length discrepancies, bone loss from trauma or infection, and malunited fractures causing functional problems.' },
  { q: 'How does bone lengthening work?', a: 'Bone lengthening uses the body\'s natural healing capacity. A controlled surgical break (osteotomy) is created, and the bone is gradually distracted at about 1mm per day, allowing new bone to form in the gap.' },
  { q: 'Is limb reconstruction painful?', a: 'Pain is managed with modern protocols throughout the process. While there is discomfort during the lengthening or correction phase, it is well-controlled and temporary. The functional benefits far outweigh the temporary discomfort.' },
];

const RELATED = [
  { id: 'fracture-care', icon: 'ri-shield-line', label: 'Fracture Care' },
  { id: 'trauma-surgery', icon: 'ri-heart-pulse-line', label: 'Trauma Surgery' },
  { id: 'pelvi-acetabular-surgery', icon: 'ri-empathize-line', label: 'Pelvi-Acetabular Surgery' },
  { id: 'rehabilitation', icon: 'ri-mental-health-line', label: 'Rehabilitation' },
];

function RevealBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (<div ref={ref} className={`${className} transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{children}</div>);
}

export default function LimbReconstructionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-background-50">
      <Header /><Hero />
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"><div><span className="text-orange-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3 mb-5">Understanding <span className="text-orange-600">Limb Reconstruction</span></h2><div className="space-y-4 text-foreground-600 text-sm leading-relaxed"><p>Limb reconstruction is a specialized area of orthopedic surgery focused on correcting complex bone deformities, non-unions, limb length discrepancies, and bone defects. It combines advanced surgical techniques with the body's remarkable capacity for bone regeneration.</p><p>Dr. Sagar K V offers <strong className="text-foreground-900">comprehensive limb reconstruction</strong> using both traditional Ilizarov techniques and modern internal lengthening systems. Each treatment plan is customized to the patient's specific deformity, goals, and lifestyle requirements.</p></div></div></div></RevealBlock></div></section>
      <section className="py-16 md:py-24 bg-background-100"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-12"><span className="text-orange-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Indications</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">When Limb Reconstruction <span className="text-orange-600">Is Needed</span></h2></RevealBlock><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{SYMPTOMS.map((s, i) => (<RevealBlock key={i}><div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 h-full"><div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4"><i className={`${s.icon} text-orange-600 text-lg`}></i></div><h3 className="font-heading font-semibold text-sm mb-2">{s.title}</h3><p className="text-foreground-500 text-xs leading-relaxed">{s.desc}</p></div></RevealBlock>))}</div></div></section>
      <section className="py-16 md:py-24 bg-secondary-600 relative overflow-hidden"><div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-500/8 blur-[120px]" /></div><div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10"><RevealBlock className="text-center mb-12"><span className="text-orange-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Surgical Techniques</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">Advanced <span className="text-orange-400">Reconstruction Methods</span></h2></RevealBlock><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{TECHNIQUES.map((t, i) => (<RevealBlock key={i}><div className="glass-dark rounded-2xl p-5 h-full"><div className="w-11 h-11 rounded-xl bg-orange-400/15 flex items-center justify-center mb-4"><i className={`${t.icon} text-orange-300 text-xl`}></i></div><h3 className="font-heading font-semibold text-white text-sm mb-2">{t.title}</h3><p className="text-white/45 text-xs leading-relaxed">{t.desc}</p></div></RevealBlock>))}</div></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-4xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-12"><span className="text-orange-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Recovery <span className="text-orange-600">Timeline</span></h2></RevealBlock><div className="relative"><div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-0.5 bg-orange-200/60" /><div className="space-y-6">{RECOVERY_STEPS.map((step, i) => (<RevealBlock key={i}><div className="flex gap-5"><div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0"><span className="text-white font-heading font-bold text-xs">{i + 1}</span></div><div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 flex-1"><div className="flex items-center gap-2 mb-2"><i className={`${step.icon} text-orange-600`}></i><span className="font-heading font-semibold text-sm">{step.week}</span></div><p className="text-foreground-500 text-xs leading-relaxed">{step.desc}</p></div></div></RevealBlock>))}</div></div></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-3xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-10"><span className="text-orange-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Limb Reconstruction <span className="text-orange-600">Questions</span></h2></RevealBlock><div className="space-y-3">{FAQS.map((faq, i) => (<div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-orange-200' : 'border-background-200/70'}`}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"><span className={`font-heading font-semibold text-sm pr-4 ${openFaq === i ? 'text-orange-600' : 'text-foreground-900'}`}>{faq.q}</span><div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-orange-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}><i className="ri-add-line text-sm"></i></div></button><div className={`transition-all duration-400 overflow-hidden ${openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}><div className="px-5 pb-5 text-foreground-500 text-sm leading-relaxed">{faq.a}</div></div></div>))}</div></div></section>
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-amber-600 relative overflow-hidden"><div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10"><RevealBlock><h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Living with a Deformity?</h2><p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">Limb reconstruction can restore alignment, function, and confidence. Consult Dr. Sagar K V to explore your options.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3"><a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-orange-700 font-heading font-semibold rounded-full text-sm cursor-pointer"><i className="ri-phone-line mr-2"></i>Call Now</a><a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white/15 border border-white/25 text-white font-heading font-semibold rounded-full text-sm cursor-pointer"><i className="ri-whatsapp-line mr-2"></i>WhatsApp</a></div></RevealBlock></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-10"><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Related <span className="text-orange-600">Treatments</span></h2></RevealBlock><div className="flex flex-wrap items-center justify-center gap-3">{RELATED.map((r) => (<Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-orange-200 hover:text-orange-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"><i className={`${r.icon} text-base`}></i>{r.label}</Link>))}</div></div></section>
      <Footer /><FloatingWhatsApp /><MobileStickyBar />
    </main>
  );
}
