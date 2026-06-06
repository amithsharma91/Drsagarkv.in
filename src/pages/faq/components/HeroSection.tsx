import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-[380px] md:min-h-[460px] flex items-center justify-center overflow-hidden bg-secondary-600">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Friendly%20Indian%20orthopedic%20surgeon%20discussing%20treatment%20options%20with%20elderly%20patient%2C%20consultation%20room%2C%20trust%20and%20communication%2C%20warm%20professional%20healthcare%20environment%2C%20realistic%20medical%20photography%2C%20website%20hero%20banner%2C%2016:9&width=1600&height=920&seq=phase4-faq-hero&orientation=landscape"
          alt="Frequently Asked Questions - Dr. Sagar K V"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/80" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[25%] right-[15%] w-56 h-56 rounded-full border border-white/6 animate-spin-slow" />
        <div className="absolute bottom-[20%] left-[10%] w-40 h-40 rounded-full bg-primary-500/5 blur-[50px] animate-pulse-glow" />
      </div>

      <div ref={ref} className="relative z-10 text-center px-4 md:px-8 w-full">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6">
            <i className="ri-question-answer-line text-primary-300 text-sm"></i>
            <span className="text-white/80 text-sm font-medium tracking-wide">Got Questions?</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4">
            Frequently Asked{' '}
            <span className="text-primary-400">Questions</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Answers to common questions about orthopedic care, recovery, treatment options, and consultations.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-50 to-transparent" />
    </section>
  );
}
