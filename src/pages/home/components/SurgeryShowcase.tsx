import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PROCEDURES = [
  {
    icon: 'ri-heart-pulse-line',
    title: 'Joint Replacement',
    subtitle: 'Hip, Knee & Shoulder',
    desc: 'Complete joint replacement surgery using the latest implant technology and minimally invasive muscle-sparing techniques for faster recovery.',
    highlight: 'Minimally Invasive',
    color: 'primary',
  },
  {
    icon: 'ri-scan-2-line',
    title: 'Arthroscopy',
    subtitle: 'Keyhole Joint Surgery',
    desc: 'Minimally invasive arthroscopic procedures for knee, shoulder, hip, and ankle — smaller incisions, less pain, quicker recovery.',
    highlight: 'Day Care Procedure',
    color: 'accent',
  },
  {
    icon: 'ri-surgical-mask-line',
    title: 'Fracture Surgery',
    subtitle: 'Advanced Fixation',
    desc: 'Expert surgical management of simple and complex fractures using modern internal fixation and minimally invasive plating techniques.',
    highlight: 'Precision Alignment',
    color: 'primary',
  },
  {
    icon: 'ri-empathize-line',
    title: 'Trauma Care',
    subtitle: 'Emergency Orthopedics',
    desc: '24/7 emergency orthopedic trauma care for accidents, falls, and acute musculoskeletal injuries with prompt surgical intervention.',
    highlight: 'Emergency Available',
    color: 'accent',
  },
  {
    icon: 'ri-football-line',
    title: 'Sports Reconstruction',
    subtitle: 'Ligament & Tendon Repair',
    desc: 'Advanced ligament reconstruction including ACL, PCL, and multi-ligament knee surgeries plus rotator cuff and ankle ligament repairs.',
    highlight: 'Return to Sport',
    color: 'primary',
  },
  {
    icon: 'ri-mental-health-line',
    title: 'Physical Rehabilitation',
    subtitle: 'Guided Recovery Program',
    desc: 'Structured post-surgical and conservative rehabilitation programs designed to restore mobility, strength, and confidence.',
    highlight: 'Full Recovery Focus',
    color: 'accent',
  },
];

export default function SurgeryShowcase() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="procedures" className="py-20 md:py-28 bg-background-100 relative overflow-hidden">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-12 md:mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-500 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Advanced Procedures
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Advanced{' '}
            <span className="text-accent-500">Orthopedic</span> Procedures
          </h2>
          <p className="text-foreground-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Explore the range of advanced surgical and non-surgical orthopedic solutions offered by Dr. Sagar K V. Swipe to browse.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          {/* Scroll hint */}
          <div className="flex items-center justify-end mb-4 text-foreground-300 text-xs gap-1.5 md:hidden">
            <i className="ri-arrow-left-right-line"></i>
            <span>Swipe to explore</span>
          </div>

          <div className="scroll-container-x flex gap-4 md:gap-5 overflow-x-auto pb-4 -mx-4 px-4 md:-mx-8 md:px-8">
            {PROCEDURES.map((proc, i) => (
              <div
                key={i}
                className={`shrink-0 w-[300px] md:w-[340px] premium-card bg-background-50 border border-background-200/70 rounded-2xl p-6 group cursor-default ${
                  proc.color === 'primary' ? 'hover:border-primary-200' : 'hover:border-accent-200'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Large Icon */}
                <div className={`w-16 h-16 md:w-18 md:h-18 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  proc.color === 'primary'
                    ? 'bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white'
                    : 'bg-accent-50 text-accent-500 group-hover:bg-accent-500 group-hover:text-white'
                }`}>
                  <i className={`${proc.icon} text-3xl`}></i>
                </div>

                {/* Highlight badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase mb-3 ${
                  proc.color === 'primary'
                    ? 'bg-primary-50 text-primary-600'
                    : 'bg-accent-50 text-accent-600'
                }`}>
                  {proc.highlight}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg md:text-xl text-foreground-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                  {proc.title}
                </h3>
                <p className={`text-xs font-medium mb-3 ${
                  proc.color === 'primary' ? 'text-primary-500' : 'text-accent-500'
                }`}>
                  {proc.subtitle}
                </p>

                {/* Description */}
                <p className="text-foreground-500 text-sm leading-relaxed">
                  {proc.desc}
                </p>

                {/* Bottom hover CTA */}
                <div className="mt-4 pt-4 border-t border-background-200/60 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href="#booking"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap ${
                      proc.color === 'primary' ? 'text-primary-600 hover:text-primary-700' : 'text-accent-600 hover:text-accent-700'
                    }`}
                  >
                    Call Now
                    <i className="ri-arrow-right-line text-xs"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop nav arrows */}
          <div className="hidden md:flex items-center justify-center gap-3 mt-8">
            <div className="flex gap-1.5">
              {PROCEDURES.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === 0 ? 'w-6 bg-primary-500' : 'bg-foreground-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
