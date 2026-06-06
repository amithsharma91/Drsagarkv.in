import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TIMELINE_ITEMS = [
  {
    year: 'MBBS',
    title: 'Bachelor of Medicine & Surgery',
    desc: 'Foundation in medical sciences and clinical practice with distinction in surgical disciplines. Built the fundamental knowledge and skills required for a career in surgery.',
    icon: 'ri-graduation-cap-line',
    color: 'primary',
  },
  {
    year: 'D. Ortho',
    title: 'Diploma in Orthopaedics',
    desc: 'Specialized postgraduate training in musculoskeletal disorders, fracture management, and orthopedic procedures. Developed expertise in diagnosing and treating bone and joint conditions.',
    icon: 'ri-book-open-line',
    color: 'accent',
  },
  {
    year: 'DNB Ortho',
    title: 'DNB Orthopedics',
    desc: 'Advanced national board certification in orthopedic surgery with extensive surgical training and research. Equivalent to MS Orthopedics with rigorous examination and practical training.',
    icon: 'ri-award-line',
    color: 'primary',
  },
  {
    year: '15+ Yrs',
    title: 'Senior Practice',
    desc: 'Over a decade of independent surgical practice across three Bangalore locations. Thousands of successful procedures spanning joint replacements, trauma care, sports injuries, and complex orthopedic surgeries.',
    icon: 'ri-stethoscope-line',
    color: 'accent',
  },
];

export default function DoctorTimeline() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="doctor-timeline" className="py-20 md:py-28 bg-background-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full border border-primary-200/15 opacity-20 animate-float-slow" />
        <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full border border-accent-200/10 opacity-15 animate-float-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-14 md:mb-18 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-accent-500 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            The Doctor&apos;s Journey
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Qualifications &{' '}
            <span className="text-primary-500">Experience</span>
          </h2>
          <p className="text-foreground-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
            A journey of dedicated learning, rigorous training, and over a decade of surgical excellence in orthopedics.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            {/* Background track */}
            <div className="absolute inset-0 bg-background-200/60" />
            {/* Animated glowing line */}
            <div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transition-all duration-[2000ms] rounded-full"
              style={{
                height: isVisible ? '100%' : '0%',
                boxShadow: isVisible ? '0 0 20px oklch(var(--primary-500) / 0.3)' : 'none',
              }}
            />
          </div>

          {TIMELINE_ITEMS.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex items-center mb-12 md:mb-16 last:mb-0 transition-all duration-800 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                } ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div
                    className={`bg-background-50 border border-background-200/70 rounded-2xl p-5 md:p-6 transition-all duration-500 hover:border-primary-200 hover:-translate-y-1 group ${
                      isVisible ? 'translate-x-0 opacity-100' : isLeft ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${i * 200 + 200}ms` }}
                  >
                    {/* Year badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-bold mb-3 ${
                      item.color === 'primary'
                        ? 'bg-primary-50 text-primary-600'
                        : 'bg-accent-50 text-accent-600'
                    }`}>
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-foreground-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-foreground-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700 ${
                      isVisible
                        ? 'scale-100 opacity-100 bg-background-50 border-2'
                        : 'scale-50 opacity-0'
                    } ${
                      item.color === 'primary' ? 'border-primary-500' : 'border-accent-500'
                    }`}
                    style={{ transitionDelay: `${i * 200 + 400}ms` }}
                  >
                    {/* Glow ring */}
                    {isVisible && (
                      <div
                        className={`absolute -inset-1 rounded-full animate-node-glow ${
                          item.color === 'primary'
                            ? 'border-primary-500/20'
                            : 'border-accent-500/20'
                        }`}
                      />
                    )}
                    <i
                      className={`${item.icon} text-lg ${
                        item.color === 'primary' ? 'text-primary-500' : 'text-accent-500'
                      }`}
                    ></i>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className={`text-center mt-12 transition-all duration-800 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary-50 border border-primary-200/50">
            <i className="ri-shield-check-fill text-primary-500 text-lg"></i>
            <span className="text-primary-700 text-sm font-heading font-semibold">
              MBBS &bull; Diploma in Orthopaedics &bull; DNB Orthopedics &bull; 15+ Years Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
