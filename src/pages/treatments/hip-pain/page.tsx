import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import Hero from './HeroSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SYMPTOMS = [
  { icon: 'ri-alert-line', title: 'Groin or Buttock Pain', desc: 'Deep aching pain in the groin, outer hip, or buttock. May worsen with walking, prolonged sitting, or climbing stairs.' },
  { icon: 'ri-walk-line', title: 'Walking Difficulty', desc: 'Limping or altered gait to avoid putting weight on the painful hip. Difficulty walking more than short distances.' },
  { icon: 'ri-lock-line', title: 'Stiffness & Reduced Motion', desc: 'Difficulty with daily activities like putting on shoes, getting in/out of cars, or crossing legs.' },
  { icon: 'ri-error-warning-line', title: 'Pain Radiating to Thigh/Knee', desc: 'Hip problems can refer pain to the thigh or knee, sometimes masking the true source of the problem.' },
  { icon: 'ri-moon-line', title: 'Night Pain', desc: 'Pain disturbing sleep, especially when lying on the affected side. A sign of significant joint pathology.' },
  { icon: 'ri-contrast-drop-line', title: 'Swelling or Tenderness', desc: 'Visible swelling around the hip or tenderness to touch over the hip joint or surrounding structures.' },
];

const CAUSES = [
  { title: 'Hip Osteoarthritis', desc: 'Age-related wear of hip cartilage causing progressive pain and stiffness. The most common cause of hip pain in adults over 50.' },
  { title: 'Hip Bursitis', desc: 'Inflammation of fluid-filled sacs around the hip joint, often from overuse, prolonged pressure, or injury.' },
  { title: 'Labral Tear', desc: 'Tear in the ring of cartilage surrounding the hip socket, common in athletes and those with hip impingement.' },
  { title: 'Hip Impingement (FAI)', desc: 'Abnormal contact between hip ball and socket causing pain and limited motion, especially in younger active adults.' },
  { title: 'Avascular Necrosis', desc: 'Loss of blood supply to the femoral head causing bone death. Requires early diagnosis and often surgical intervention.' },
  { title: 'Referred Pain', desc: 'Pain originating from the lower back or SI joint that is felt in the hip area. Accurate diagnosis is critical.' },
];

const FAQS = [
  { q: 'When should I see a doctor for hip pain?', a: 'See an orthopedic specialist if hip pain persists more than 2 weeks, interferes with walking or daily activities, causes a limp, or is accompanied by swelling, fever, or inability to bear weight.' },
  { q: 'Can hip pain heal without surgery?', a: 'Absolutely. Many hip conditions respond well to conservative treatment including physiotherapy, activity modification, medications, and targeted injections. Dr. Sagar always explores non-surgical options first.' },
];

const RELATED = [
  { id: 'joint-replacement', icon: 'ri-surgical-mask-line', label: 'Joint Replacement' },
  { id: 'pain-management', icon: 'ri-pulse-line', label: 'Pain Management' },
  { id: 'back-pain', icon: 'ri-body-scan-line', label: 'Back Pain' },
];

function RevealBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (<div ref={ref} className={`${className} transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{children}</div>);
}

export default function HipPainPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-background-50">
      <Header /><Hero />
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"><div><span className="text-sky-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Overview</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3 mb-5">Understanding <span className="text-sky-600">Hip Pain</span></h2><div className="space-y-4 text-foreground-600 text-sm leading-relaxed"><p>Hip pain is a common complaint affecting people of all ages. The hip is a deep ball-and-socket joint surrounded by powerful muscles, making accurate diagnosis essential — pain felt in the hip area may actually originate from the joint itself, surrounding soft tissues, or even the lower back.</p><p>Dr. Sagar K V takes a <strong className="text-foreground-900">systematic approach to hip pain diagnosis</strong>, using detailed clinical examination and appropriate imaging to pinpoint the exact source before recommending treatment.</p></div></div></div></RevealBlock></div></section>
      <section className="py-16 md:py-24 bg-background-100"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-12"><span className="text-sky-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Symptoms</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Recognizing <span className="text-sky-600">Hip Pain</span></h2></RevealBlock><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{SYMPTOMS.map((s, i) => (<RevealBlock key={i}><div className="bg-background-50 border border-background-200/70 rounded-2xl p-5 h-full"><div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4"><i className={`${s.icon} text-sky-600 text-lg`}></i></div><h3 className="font-heading font-semibold text-sm mb-2">{s.title}</h3><p className="text-foreground-500 text-xs leading-relaxed">{s.desc}</p></div></RevealBlock>))}</div></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-12"><span className="text-sky-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Causes</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">What&apos;s Causing Your <span className="text-sky-600">Hip Pain?</span></h2></RevealBlock><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{CAUSES.map((c, i) => (<RevealBlock key={i}><div className="flex gap-4 p-5 rounded-2xl border border-background-200/70 bg-background-50 hover:border-sky-200/50 transition-all duration-300"><div className="w-2 rounded-full bg-sky-400/40 shrink-0" /><div><h3 className="font-heading font-semibold text-sm mb-1.5">{c.title}</h3><p className="text-foreground-500 text-xs leading-relaxed">{c.desc}</p></div></div></RevealBlock>))}</div></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-3xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-10"><span className="text-sky-600 font-heading font-semibold text-xs tracking-[0.2em] uppercase">FAQ</span><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Hip Pain <span className="text-sky-600">Questions</span></h2></RevealBlock><div className="space-y-3">{FAQS.map((faq, i) => (<div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-sky-200' : 'border-background-200/70'}`}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"><span className={`font-heading font-semibold text-sm pr-4 ${openFaq === i ? 'text-sky-600' : 'text-foreground-900'}`}>{faq.q}</span><div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-sky-500 text-white rotate-45' : 'bg-background-100 text-foreground-400'}`}><i className="ri-add-line text-sm"></i></div></button><div className={`transition-all duration-400 overflow-hidden ${openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}><div className="px-5 pb-5 text-foreground-500 text-sm leading-relaxed">{faq.a}</div></div></div>))}</div></div></section>
      <section className="py-16 md:py-20 bg-gradient-to-r from-sky-600 to-blue-600 relative overflow-hidden"><div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10"><RevealBlock><h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Hip Pain Holding You Back?</h2><p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">Get an accurate diagnosis and personalized treatment plan from Dr. Sagar K V.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3"><a href="tel:+918197344754" className="px-8 py-3.5 bg-white text-sky-700 font-heading font-semibold rounded-full text-sm cursor-pointer"><i className="ri-phone-line mr-2"></i>Call Now</a><a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white/15 border border-white/25 text-white font-heading font-semibold rounded-full text-sm cursor-pointer"><i className="ri-whatsapp-line mr-2"></i>WhatsApp</a></div></RevealBlock></div></section>
      <section className="py-16 md:py-24 bg-background-50"><div className="max-w-6xl mx-auto px-4 md:px-8"><RevealBlock className="text-center mb-10"><h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">Related <span className="text-sky-600">Treatments</span></h2></RevealBlock><div className="flex flex-wrap items-center justify-center gap-3">{RELATED.map((r) => (<Link key={r.id} to={`/treatments/${r.id}`} className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-background-200/70 bg-background-50 text-foreground-600 hover:border-sky-200 hover:text-sky-600 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"><i className={`${r.icon} text-base`}></i>{r.label}</Link>))}</div></div></section>
      <Footer /><FloatingWhatsApp /><MobileStickyBar />
    </main>
  );
}
