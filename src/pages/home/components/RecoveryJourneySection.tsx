import { useState, useEffect, useRef } from 'react';

const STAGES = [
  {
    step: '01',
    icon: 'ri-emotion-sad-line',
    title: 'Pain & Discomfort',
    desc: 'You arrive experiencing joint pain, stiffness, or injury that limits your daily activities and quality of life.',
    detail: 'Whether it\'s knee pain while climbing stairs, shoulder pain preventing sleep, or back pain limiting your work - we understand how debilitating orthopedic conditions can be.',
    color: 'from-red-500/80 to-orange-500/80',
    bgGlow: 'bg-red-500/5',
  },
  {
    step: '02',
    icon: 'ri-search-eye-line',
    title: 'Expert Evaluation',
    desc: 'Dr. Sagar conducts a thorough clinical examination and reviews your complete medical history.',
    detail: 'Using advanced diagnostic techniques, Dr. Sagar listens carefully to understand the exact nature of your pain, its impact on your life, and your personal treatment goals.',
    color: 'from-amber-500/80 to-yellow-500/80',
    bgGlow: 'bg-amber-500/5',
  },
  {
    step: '03',
    icon: 'ri-scan-2-line',
    title: 'Advanced Diagnosis',
    desc: 'State-of-the-art imaging and precision diagnostics to pinpoint the root cause of your condition.',
    detail: 'Digital X-rays, high-resolution MRI, CT scans, and specialized orthopedic tests ensure no detail is missed. You receive a clear, understandable explanation of your diagnosis.',
    color: 'from-primary-500/80 to-accent-500/80',
    bgGlow: 'bg-primary-500/5',
  },
  {
    step: '04',
    icon: 'ri-surgical-mask-line',
    title: 'Personalized Treatment',
    desc: 'A custom treatment plan designed specifically for your condition, lifestyle, and recovery goals.',
    detail: 'From conservative management and physiotherapy to minimally invasive surgery when needed - every treatment plan is personalized. Dr. Sagar explains all options clearly.',
    color: 'from-accent-500/80 to-emerald-500/80',
    bgGlow: 'bg-accent-500/5',
  },
  {
    step: '05',
    icon: 'ri-heart-pulse-line',
    title: 'Recovery & Rehabilitation',
    desc: 'Structured rehabilitation with continuous support to ensure steady, safe healing and progress.',
    detail: 'Our guided recovery program includes physiotherapy, regular follow-ups, progress monitoring, and lifestyle guidance. We stay with you every step of the way.',
    color: 'from-emerald-500/80 to-green-500/80',
    bgGlow: 'bg-emerald-500/5',
  },
  {
    step: '06',
    icon: 'ri-run-line',
    title: 'Active Lifestyle',
    desc: 'Return to the activities you love - stronger, pain-free, and with full confidence in your body.',
    detail: 'Whether it\'s playing with your grandchildren, returning to sports, or simply walking without pain - our goal is to restore your active, independent lifestyle completely.',
    color: 'from-green-500/80 to-primary-500/80',
    bgGlow: 'bg-green-500/5',
  },
];

function JourneyStage({
  stage,
  index,
  isActive,
  isLast,
}: {
  stage: typeof STAGES[0];
  index: number;
  isActive: boolean;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-6 md:gap-10">
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center shrink-0">
        {/* Connecting line above (except first) */}
        {index > 0 && (
          <div className="w-0.5 h-10 md:h-14 bg-gradient-to-b from-primary-500/40 to-primary-500/80 rounded-full" />
        )}

        {/* Node */}
        <div
          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-700 ${
            isActive
              ? 'bg-primary-500 scale-110 shadow-lg'
              : 'bg-background-100 border-2 border-background-200/70'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {/* Glow ring */}
          {isActive && (
            <>
              <div className="absolute inset-0 rounded-2xl bg-primary-500/20 animate-ripple" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-400/20 to-accent-400/20 blur-md animate-pulse-glow" />
            </>
          )}
          <i
            className={`${stage.icon} text-xl md:text-2xl transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-foreground-400'
            }`}
          ></i>
        </div>

        {/* Connecting line below (except last) */}
        {!isLast && (
          <div
            className={`w-0.5 flex-1 min-h-[40px] md:min-h-[50px] rounded-full transition-all duration-1000 ${
              isActive
                ? 'bg-gradient-to-b from-primary-500 to-primary-500/60'
                : 'bg-background-200/60'
            }`}
          />
        )}
      </div>

      {/* Content Card */}
      <div
        className={`flex-1 pb-10 md:pb-14 transition-all duration-700 ${
          isActive
            ? 'opacity-100 translate-x-0'
            : 'opacity-40 translate-x-4'
        }`}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        {/* Step number */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`font-heading font-black text-3xl md:text-4xl transition-all duration-500 ${
              isActive
                ? 'bg-gradient-to-r ' + stage.color + ' bg-clip-text text-transparent'
                : 'text-foreground-200'
            }`}
          >
            {stage.step}
          </span>
          <div className={`h-px flex-1 rounded-full transition-all duration-700 ${isActive ? 'bg-gradient-to-r ' + stage.color : 'bg-background-200/60'}`} />
        </div>

        {/* Card */}
        <div
          className={`rounded-2xl p-5 md:p-6 transition-all duration-500 relative overflow-hidden ${
            isActive
              ? 'bg-background-50 border border-primary-200/40 shadow-sm ' + stage.bgGlow
              : 'bg-background-100 border border-background-200/40'
          }`}
        >
          {/* Background glow */}
          {isActive && (
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] pointer-events-none opacity-30"
              style={{
                background: `radial-gradient(circle, oklch(var(--primary-500) / 0.3), transparent)`,
              }}
            />
          )}

          <div className="relative z-10">
            <h3
              className={`font-heading font-bold text-lg md:text-xl mb-2 transition-colors duration-500 ${
                isActive ? 'text-foreground-900' : 'text-foreground-500'
              }`}
            >
              {stage.title}
            </h3>
            <p
              className={`text-sm md:text-base leading-relaxed mb-3 transition-colors duration-300 ${
                isActive ? 'text-foreground-600' : 'text-foreground-400'
              }`}
            >
              {stage.desc}
            </p>
            {isActive && (
              <p
                className="text-xs md:text-sm text-foreground-400 leading-relaxed animate-slide-in-bottom"
                style={{ animation: 'slide-in-bottom 0.5s ease-out forwards' }}
              >
                {stage.detail}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecoveryJourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled
      const scrollStart = rect.top;
      const scrollRange = sectionHeight - windowHeight * 0.5;
      let progress = Math.max(0, Math.min(1, -scrollStart / scrollRange));
      setProgressPercent(progress * 100);

      // Determine which stage is active
      const stageHeight = sectionHeight / STAGES.length;
      const scrollInSection = -rect.top + windowHeight * 0.3;
      const stageIndex = Math.min(
        STAGES.length - 1,
        Math.max(0, Math.floor(scrollInSection / stageHeight))
      );
      setActiveIndex(stageIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <section
      id="recovery-journey"
      ref={sectionRef}
      className="py-20 md:py-28 bg-secondary-600 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary-500/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent-500/5 blur-[150px]" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Glowing progress line on the left side of timeline */}
      <div className="absolute left-[calc((100%-72rem)/2+6.5rem)] md:left-[calc((100%-72rem)/2+7.5rem)] top-0 bottom-0 w-0.5 hidden lg:block pointer-events-none">
        {/* Background track */}
        <div className="absolute inset-0 bg-white/5 rounded-full" />
        {/* Glowing progress */}
        <div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400 rounded-full transition-all duration-300"
          style={{ height: `${progressPercent}%` }}
        >
          <div className="absolute inset-0 blur-sm bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400 rounded-full opacity-60" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-14 md:mb-18 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-400 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Your Recovery Journey
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            From Pain to{' '}
            <span className="text-primary-400">Performance</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Scroll to experience the complete journey. Every patient at Dr. Sagar K V&apos;s practice follows this proven path to recovery.
          </p>
          {/* Scroll progress indicator */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-white/30 text-xs font-medium">Scroll to see more</span>
            <div className="w-20 h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-400 to-accent-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Journey Stages */}
        <div className="max-w-3xl mx-auto relative">
          {STAGES.map((stage, i) => (
            <JourneyStage
              key={i}
              stage={stage}
              index={i}
              isActive={isVisible && i <= activeIndex}
              isLast={i === STAGES.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-10 md:mt-14 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white/40 text-sm mb-4">Ready to begin your recovery journey?</p>
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
