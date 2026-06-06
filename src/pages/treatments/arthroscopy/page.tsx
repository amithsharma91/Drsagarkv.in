import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import Hero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SYMPTOMS = [
  { icon: 'ri-alert-line', title: 'Joint Pain', desc: 'Persistent or intermittent pain inside the joint — knee, shoulder, hip, or ankle — that hasn\'t responded to conservative treatment.' },
  { icon: 'ri-lock-line', title: 'Joint Locking', desc: 'Mechanical blockage preventing full movement. Often indicates loose bodies, torn meniscus, or cartilage flaps.' },
  { icon: 'ri-contrast-drop-line', title: 'Recurrent Swelling', desc: 'Unexplained joint swelling that comes and goes, suggesting internal joint pathology requiring investigation.' },
  { icon: 'ri-error-warning-line', title: 'Instability', desc: 'Feeling that the joint may give way. Common with ligament injuries that need assessment and possible repair.' },
  { icon: 'ri-volume-up-line', title: 'Clicking or Catching', desc: 'Mechanical symptoms suggesting cartilage damage, meniscal tears, or loose bodies within the joint.' },
  { icon: 'ri-empathize-line', title: 'Unexplained Symptoms', desc: 'When imaging studies are inconclusive, arthroscopy provides direct visualization for definitive diagnosis.' },
];

const BENEFITS = [
  { icon: 'ri-scissors-cut-line', title: 'Minimal Incisions', desc: 'Two or three tiny keyhole incisions instead of large open surgical wounds. Less tissue trauma and faster healing.' },
  { icon: 'ri-hospital-line', title: 'Day Care Procedure', desc: 'Most arthroscopic procedures are performed as day care — you go home the same day.' },
  { icon: 'ri-time-line', title: 'Faster Recovery', desc: 'Significantly shorter recovery compared to open surgery. Most patients return to light activities within days to weeks.' },
  { icon: 'ri-eye-line', title: 'Accurate Diagnosis', desc: 'Direct visualization of joint structures provides the most accurate diagnosis — better than MRI alone in some cases.' },
];

const RECOVERY_STEPS = [
  { week: 'Day 0-1', icon: 'ri-home-line', desc: 'Discharge same day with pain management plan. Rest and ice. Begin gentle prescribed exercises.' },
  { week: 'Week 1-2', icon: 'ri-walk-line', desc: 'Gradual return to light daily activities. Physiotherapy begins. Stitches removed at follow-up.' },
  { week: 'Week 3-6', icon: 'ri-run-line', desc: 'Progressive strengthening. Return to most normal activities. Recovery pace depends on the specific procedure performed.' },
  { week: 'Week 6-12', icon: 'ri-trophy-line', desc: 'Full recovery for most diagnostic procedures. Return to sports depends on the specific condition treated.' },
];

const FAQS = [
  { q: 'What conditions can arthroscopy treat?', a: 'Arthroscopy can diagnose and treat meniscus tears, ACL/PCL tears, cartilage damage, synovitis, loose bodies, shoulder rotator cuff tears, shoulder instability, hip impingement, and ankle conditions.' },
  { q: 'Is arthroscopy painful?', a: 'Arthroscopy is minimally invasive with significantly less post-operative pain compared to open surgery. Pain is well-controlled with medication and resolves quickly as the tiny incisions heal.' },
  { q: 'How long does the procedure take?', a: 'Diagnostic arthroscopy takes 30-45 minutes. Therapeutic procedures (meniscus repair, ligament reconstruction) may take 1-2 hours depending on complexity.' },
];

const RELATED = [
  { id: 'sports-injuries', icon: 'ri-football-line', label: 'Sports Injuries' },
  { id: 'joint-replacement', icon: 'ri-surgical-mask-line', label: 'Joint Replacement' },
  { id: 'knee-pain', icon: 'ri-kick-line', label: 'Knee Pain' },
  { id: 'shoulder-pain', icon: 'ri-arrow-up-circle-line', label: 'Shoulder Pain' },
];

function RevealBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (<div ref={ref} className={`${className} transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{children}</div>);
}

export default function ArthroscopyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-background-50">
      <Header /><Hero />
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"><div><span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3 mb-5">Understanding <span className="text-emerald-600">Arthroscopy</span></h2><div className="space-y-4 text-foreground-600 text-sm leading-relaxed"><p>Arthroscopy is a minimally invasive surgical technique that allows Dr. Sagar to look inside a joint using a tiny camera called an arthroscope. Through incisions no larger than a buttonhole, he can diagnose and treat a wide range of joint problems.</p><p>This <strong className="text-foreground-900">keyhole surgery</strong> has revolutionized orthopedic care. What once required large open incisions and prolonged recovery can now be accomplished through tiny portals — meaning less pain, smaller scars, and faster return to normal activities.</p><p>Dr. Sagar K V performs arthroscopic procedures on knee, shoulder, hip, and ankle joints. Each procedure is planned based on detailed pre-operative imaging and tailored to the specific pathology found.</p></div></div><div className="relative"><div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-100 via-green-50 to-background-100 border border-background-200/70 flex items-center justify-center"><div className="text-center p-8"><div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center"><i className="ri-eye-line text-emerald-600 text-3xl"></i></div><span className="text-foreground-400 text-sm">Arthroscopy Illustration</span></div></div></div></div></RevealBlock></div></section>
      <section className="py-16 md:py-24 bg-background-100"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-12"><span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Indications</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">When Arthroscopy <span className="text-emerald-600">Is Recommended</span></h2></RevealBlock><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{SYMPTOMS.map((s, i) => (<RevealBlock key={i}><div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 h-full"><div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4"><i className={`${s.icon} text-emerald-600 text-lg`}></i></div><h3 className="font-heading font-semibold text-sm mb-2">{s.title}</h3><p className="text-foreground-500 text-xs leading-relaxed">{s.desc}</p></div></RevealBlock>))}</div></div></section>
      <section className="py-16 md:py-24 bg-secondary-600 relative overflow-hidden"><div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-500/8 blur-[120px]" /></div><div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10"><RevealBlock className="text-center mb-12"><span className="text-emerald-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Benefits</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">Advantages of <span className="text-emerald-400">Arthroscopy</span></h2></RevealBlock><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{BENEFITS.map((b, i) => (<RevealBlock key={i}><div className="glass-dark rounded-2xl p-5 h-full text-center"><div className="w-12 h-12 mx-auto rounded-xl bg-emerald-400/15 flex items-center justify-center mb-4"><i className={`${b.icon} text-emerald-300 text-xl`}></i></div><h3 className="font-heading font-semibold text-white text-sm mb-2">{b.title}</h3><p className="text-white/45 text-xs leading-relaxed">{b.desc}</p></div></RevealBlock>))}</div></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-4xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-12"><span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Recovery <span className="text-emerald-600">Timeline</span></h2></RevealBlock><div className="relative"><div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-0.5 bg-emerald-200/60" /><div className="space-y-6">{RECOVERY_STEPS.map((step, i) => (<RevealBlock key={i}><div className="flex gap-5"><div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500 flex items-center justify-center shrink-0"><span className="text-white font-heading font-bold text-xs">{i + 1}</span></div><div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 flex-1"><div className="flex items-center gap-2 mb-2"><i className={`${step.icon} text-emerald-600`}></i><span className="font-heading font-semibold text-sm">{step.week}</span></div><p className="text-foreground-500 text-xs leading-relaxed">{step.desc}</p></div></div></RevealBlock>))}</div></div></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-3xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-10"><span className="text-emerald-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Arthroscopy <span className="text-emerald-600">Questions</span></h2></RevealBlock><div className="space-y-3">{FAQS.map((faq, i) => (<div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-emerald-200' : 'border-background-200/70'}`}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"><span className={`font-heading font-semibold text-sm pr-4 ${openFaq === i ? 'text-emerald-600' : 'text-foreground-900'}`}>{faq.q}</span><div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-emerald-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}><i className="ri-add-line text-sm"></i></div></button><div className={`transition-all duration-400 overflow-hidden ${openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}><div className="px-5 pb-5 text-foreground-500 text-sm leading-relaxed">{faq.a}</div></div></div>))}</div></div></section>
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 to-green-600 relative overflow-hidden"><div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10"><RevealBlock><h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Need a Joint Assessment?</h2><p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">Consult Dr. Sagar K V to determine if arthroscopy is the right option for your joint problem.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3"><a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-emerald-700 font-heading font-semibold rounded-full text-sm cursor-pointer"><i className="ri-phone-line mr-2"></i>Call Now</a><a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white/15 border border-white/25 text-white font-heading font-semibold rounded-full text-sm cursor-pointer"><i className="ri-whatsapp-line mr-2"></i>WhatsApp</a></div></RevealBlock></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-10"><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Related <span className="text-emerald-600">Treatments</span></h2></RevealBlock><div className="flex flex-wrap items-center justify-center gap-3">{RELATED.map((r) => (<Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-emerald-200 hover:text-emerald-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"><i className={`${r.icon} text-base`}></i>{r.label}</Link>))}</div></div></section>
      <Footer /><FloatingWhatsApp /><MobileStickyBar />
    </main>
  );
}
