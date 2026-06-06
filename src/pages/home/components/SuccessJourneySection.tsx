import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const STAGES = [
  { step: '01', icon: 'ri-emotion-sad-line', title: 'Pain &amp; Discomfort', desc: 'You arrive with joint pain, limited mobility, and frustration from daily activities becoming difficult.' },
  { step: '02', icon: 'ri-search-eye-line', title: 'Precision Diagnosis', desc: 'Advanced imaging and thorough clinical evaluation to identify the root cause of your condition.' },
  { step: '03', icon: 'ri-surgical-mask-line', title: 'Expert Treatment', desc: 'Minimally invasive surgery or targeted therapy performed with precision and care by Dr. Sagar.' },
  { step: '04', icon: 'ri-heart-pulse-line', title: 'Guided Recovery', desc: 'Structured rehabilitation program with ongoing support to ensure steady healing and progress.' },
  { step: '05', icon: 'ri-run-line', title: 'Active Lifestyle', desc: 'Return to the activities you love - stronger, pain-free, and with restored confidence in your body.' },
];

export default function SuccessJourneySection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="success-journey" className="py-20 md:py-28 bg-secondary-600 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-500 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-500 blur-[120px]" />
      </div>

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-400 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Your Recovery Journey
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            From Pain to{' '}
            <span className="text-primary-400">Performance</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Every patient follows a proven path to recovery. Here&apos;s what your journey with Dr. Sagar K V looks like.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-primary-500/30 via-primary-400 to-primary-500/30 transform -translate-y-1/2">
            <div
              className="h-full bg-primary-400 transition-all duration-[2000ms] rounded-full"
              style={{
                width: isVisible ? '100%' : '0%',
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
            {STAGES.map((stage, i) => (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step number */}
                <span className="text-5xl md:text-6xl font-heading font-black text-white/8 mb-2">
                  {stage.step}
                </span>
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 transition-all duration-500 hover:bg-primary-500/30 hover:border-primary-400/30 hover:scale-110 group cursor-default">
                  <i className={`${stage.icon} text-2xl md:text-3xl text-primary-400 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                {/* Content */}
                <h3 className="font-heading font-semibold text-white text-sm md:text-base mb-2">
                  {stage.title}
                </h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-[200px]">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-800 delay-[800ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold rounded-full text-base transition-all duration-300 glow-primary hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-calendar-check-line text-xl"></i>
            Start Your Recovery Journey
          </a>
        </div>
      </div>
    </section>
  );
}
