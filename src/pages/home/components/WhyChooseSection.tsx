import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const REASONS = [
  { icon: 'ri-graduation-cap-line', title: 'MBBS', desc: 'Foundational medical degree from Navodaya Medical College — the bedrock of Dr. Sagar\'s clinical expertise and patient care philosophy.' },
  { icon: 'ri-book-open-line', title: 'D. Ortho', desc: 'Diploma in Orthopaedics from JSS Medical College, Mysore — specialized training in musculoskeletal medicine and fracture management.' },
  { icon: 'ri-shield-star-line', title: 'DNB Orthopedics', desc: 'Gold-standard orthopedic residency from the prestigious Sanjay Gandhi Institute of Trauma & Orthopaedics.' },
  { icon: 'ri-heart-pulse-line', title: 'Advanced Trauma Surgeon', desc: 'Fellowship in Pelvi-Acetabular Surgery from Max Hospital Mohali — rare expertise for complex fractures.' },
  { icon: 'ri-building-line', title: 'Trusted Bangalore Practice', desc: 'Providing expert orthopedic care at South End Speciality Clinic, Basavanagudi — trusted by thousands of patients across the city.' },
  { icon: 'ri-user-heart-line', title: 'Personalized Treatment Plans', desc: 'Every patient receives a tailored care plan — no one-size-fits-all approach. Surgery only when truly needed.' },
  { icon: 'ri-surgical-mask-line', title: 'Minimally Invasive Surgical Expertise', desc: 'Advanced techniques that reduce pain, minimize scarring, and accelerate recovery after surgery.' },
  { icon: 'ri-mental-health-line', title: 'Strong Focus On Recovery & Rehabilitation', desc: 'Committed to your complete journey — from diagnosis through surgery and full functional recovery.' },
];

export default function WhyChooseSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="why-choose" className="py-20 md:py-28 bg-background-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full border-2 border-primary-500" />
        <div className="absolute top-40 right-40 w-60 h-60 rounded-full border-2 border-accent-500" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full border-2 border-primary-500" />
      </div>

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-accent-500 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Why Choose Dr. Sagar
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            What Sets{' '}
            <span className="text-primary-500">Dr. Sagar</span> Apart
          </h2>
          <p className="text-foreground-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Fellowship-trained expertise, honest advice, and a genuine commitment to getting you back to the life you love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {REASONS.map((item, i) => (
            <div
              key={i}
              className={`group bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 transition-all duration-500 hover:border-primary-200 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                <i className={`${item.icon} text-primary-500 text-xl`}></i>
              </div>
              <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{item.title}</h3>
              <p className="text-foreground-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-800 delay-[900ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="tel:+918197344754"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold rounded-full text-base transition-all duration-300 glow-primary hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-line text-xl"></i>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
