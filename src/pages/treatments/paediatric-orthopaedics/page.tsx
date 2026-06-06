import Header from '@/components/feature/Header';
import Footer from '@/pages/home/components/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import MobileStickyBar from '@/pages/home/components/MobileStickyBar';
import PaediatricOrthopaedicsHero from './HeroSection';

const CONDITIONS = [
  { icon: 'ri-walk-line', title: 'Knock Knees', desc: 'A condition where the knees angle inward and touch when the legs are straightened — commonly seen in young children.' },
  { icon: 'ri-user-received-line', title: 'Bow Legs', desc: 'Legs that curve outward at the knees — normal in infants but should resolve naturally by age 2-3. Persistent bowing needs evaluation.' },
  { icon: 'ri-footprint-line', title: 'Flat Feet', desc: 'Reduced or absent arches in the feet — may cause pain, difficulty with prolonged walking, or uneven shoe wear in children.' },
  { icon: 'ri-run-line', title: 'Gait Abnormalities', desc: 'Unusual walking patterns including toe-walking, in-toeing, out-toeing, or limping — requiring thorough orthopedic assessment.' },
  { icon: 'ri-seedling-line', title: 'Developmental Conditions', desc: 'Congenital and developmental musculoskeletal conditions including hip dysplasia, clubfoot, and growth plate disorders.' },
  { icon: 'ri-shield-line', title: 'Fractures in Children', desc: 'Specialized management of pediatric fractures considering growth plates, remodeling potential, and unique healing patterns.' },
  { icon: 'ri-football-line', title: 'Sports Injuries in Children', desc: 'Age-appropriate diagnosis and treatment of sports-related injuries with focus on safe return to activity and future growth.' },
  { icon: 'ri-line-chart-line', title: 'Growth Disorders', desc: 'Evaluation and management of conditions affecting bone growth, limb length discrepancies, and angular deformities.' },
];

export default function PaediatricOrthopaedicsPage() {
  return (
    <main className="min-h-screen bg-background-50">
      <Header />
      <PaediatricOrthopaedicsHero />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <span className="text-primary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Children's Orthopaedics</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3 mb-6">
            Specialized Care for Growing Bones
          </h2>
          <p className="text-foreground-500 text-base leading-relaxed max-w-2xl mx-auto">
            Children are not just small adults — their bones, joints, and muscles are still developing, and they require specialized orthopaedic care tailored to their unique anatomy and growth patterns. Dr. Sagar K V brings expert evaluation and compassionate treatment for a wide range of paediatric musculoskeletal conditions, from common developmental variations to complex congenital disorders.
          </p>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Paediatric Conditions</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Conditions We Treat in Children
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {CONDITIONS.map((item, i) => (
              <div key={i} className="bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-primary-200 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <i className={`${item.icon} text-primary-500 text-xl`}></i>
                </div>
                <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{item.title}</h3>
                <p className="text-foreground-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Specialised Care */}
      <section className="py-16 md:py-24 bg-foreground-900 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Why Early Intervention Matters</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
              The Importance of Timely Paediatric Orthopaedic Care
            </h2>
            <p className="text-white/50 text-base mt-4 max-w-2xl mx-auto">
              Many childhood orthopaedic conditions can be effectively managed when detected early. Delayed treatment may lead to progressive deformity, functional limitations, and reduced quality of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: 'ri-eye-line', title: 'Early Detection', desc: 'Regular screening helps identify developmental conditions before they become problematic. Early intervention often means simpler, more effective treatment.' },
              { icon: 'ri-heart-line', title: 'Growing Bones', desc: 'Children\'s bones have unique healing and remodeling potential. Treatment plans leverage this natural advantage for better outcomes.' },
              { icon: 'ri-user-heart-line', title: 'Family-Centered Care', desc: 'Parents are partners in treatment. Clear communication and education ensure families understand the condition and the care plan.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <i className={`${item.icon} text-primary-400 text-xl`}></i>
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'When should I take my child to an orthopaedic specialist?', a: 'If you notice persistent limping, leg pain, unusual walking patterns, visible deformities, or if your child avoids certain physical activities, a consultation with a paediatric orthopaedic specialist is recommended.' },
              { q: 'Are knock knees and bow legs normal in children?', a: 'Both are common in early childhood. Bow legs typically resolve by age 2-3 and knock knees by age 7-8. If these conditions persist beyond the expected age range or are asymmetric, evaluation is needed.' },
              { q: 'Do children need different fracture treatment than adults?', a: 'Yes. Children have growth plates that must be protected during treatment. Their bones also remodel and heal differently, which Dr. Sagar considers when planning treatment for paediatric fractures.' },
              { q: 'Can children fully recover from sports injuries?', a: 'With proper diagnosis and age-appropriate treatment, most children recover completely from sports injuries. The key is early intervention and a rehabilitation program designed around the child\'s growth stage.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-heading font-semibold text-foreground-900 text-sm list-none">
                  {faq.q}
                  <i className="ri-arrow-down-s-line text-foreground-400 group-open:rotate-180 transition-transform duration-300"></i>
                </summary>
                <p className="mt-3 text-foreground-500 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-500/8 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">Concerned About Your Child's Orthopaedic Health?</h2>
          <p className="text-white/60 text-base mb-8">Schedule a consultation with Dr. Sagar K V for expert paediatric orthopaedic evaluation and personalized care.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:+918197344754" className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
              <i className="ri-phone-line"></i>Call Now
            </a>
            <a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
              <i className="ri-whatsapp-line"></i>WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}
