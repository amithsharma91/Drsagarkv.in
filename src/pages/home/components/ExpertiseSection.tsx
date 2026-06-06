import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const EXPERTISE = [
  { label: 'Joint Replacement', percent: 95, color: 'primary' },
  { label: 'Trauma Care', percent: 92, color: 'accent' },
  { label: 'Sports Injuries', percent: 88, color: 'primary' },
  { label: 'Arthroscopy', percent: 90, color: 'accent' },
  { label: 'Fracture Mgmt', percent: 96, color: 'primary' },
  { label: 'Ortho Rehab', percent: 85, color: 'accent' },
];

function ProgressRing({ percent, label, color, isVisible }: { percent: number; label: string; color: string; isVisible: boolean }) {
  const [currentPercent, setCurrentPercent] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isVisible) return;
    let start: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCurrentPercent(Math.round(eased * percent));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, percent]);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentPercent / 100) * circumference;

  const isPrimary = color === 'primary';
  const ringColor = isPrimary ? 'oklch(0.669 0.175 245)' : 'oklch(0.65 0.14 210)';
  const trackColor = isPrimary ? 'oklch(0.95 0.03 245)' : 'oklch(0.95 0.03 210)';

  return (
    <div className="flex flex-col items-center group cursor-default">
      <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px]">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke={trackColor} strokeWidth="6" />
          <circle
            cx="60" cy="60" r={radius} fill="none" stroke={ringColor} strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1.8s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="font-heading font-bold text-2xl md:text-3xl text-foreground-900">
              {currentPercent}%
            </span>
          </div>
        </div>
      </div>
      <span className="font-heading font-semibold text-foreground-900 text-sm md:text-base mt-3 text-center">
        {label}
      </span>
    </div>
  );
}

export default function ExpertiseSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="expertise" className="py-20 md:py-28 bg-background-50">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Areas of Expertise
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Mastery Across{' '}
            <span className="text-accent-500">Orthopedics</span>
          </h2>
          <p className="text-foreground-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Dr. Sagar K V brings deep expertise across every major orthopedic discipline, backed by years of specialized training and surgical experience.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {EXPERTISE.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProgressRing {...item} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
