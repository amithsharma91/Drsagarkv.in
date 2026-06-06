import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SUCCESS_STORIES = [
  {
    title: 'From Wheelchair to Walking',
    summary: 'A 68-year-old patient with severe bilateral knee arthritis who could barely stand regained independent walking after staged knee replacement surgery.',
    outcome: 'Walking independently within 6 weeks',
    icon: 'ri-walk-line',
    color: 'primary',
  },
  {
    title: 'Sports Comeback at 45',
    summary: 'A recreational badminton player with a complete ACL tear underwent arthroscopic reconstruction and structured rehabilitation.',
    outcome: 'Returned to competitive play in 8 months',
    icon: 'ri-run-line',
    color: 'accent',
  },
  {
    title: 'Fracture Recovery Journey',
    summary: 'A young professional with a complex wrist fracture from a road accident received surgical fixation and early mobilization protocol.',
    outcome: 'Full function restored in 10 weeks',
    icon: 'ri-hand-heart-line',
    color: 'primary',
  },
];

const RECOVERY_STORIES = [
  {
    title: 'Hip Replacement at 72',
    summary: 'An elderly gentleman with debilitating hip arthritis underwent total hip replacement. From being bedridden to walking with a stick in 4 weeks.',
    timeline: '4 weeks to assisted walking',
    icon: 'ri-heart-pulse-line',
  },
  {
    title: 'Chronic Back Pain Resolution',
    summary: 'A software professional with 5 years of persistent lower back pain found relief through a combination of targeted physiotherapy and lifestyle modifications — no surgery needed.',
    timeline: 'Significant improvement in 8 weeks',
    icon: 'ri-body-scan-line',
  },
  {
    title: 'Child\'s Elbow Fracture',
    summary: 'A 9-year-old with a supracondylar fracture treated with closed reduction and percutaneous pinning. Child returned to school and play activities rapidly.',
    timeline: 'Full activity in 4 weeks',
    icon: 'ri-emotion-happy-line',
  },
];

export default function SuccessRecoveryStories() {
  const successAnim = useScrollAnimation(0.1);
  const recoveryAnim = useScrollAnimation(0.1);

  return (
    <>
      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-background-100">
        <div ref={successAnim.ref} className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Success Stories</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Transformative Recoveries
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">
              Real patient recovery journeys that showcase the impact of expert orthopedic care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {SUCCESS_STORIES.map((story, i) => (
              <div
                key={i}
                className={`group bg-white border border-background-200/70 rounded-2xl p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 ${
                  story.color === 'primary' ? 'hover:border-primary-200' : 'hover:border-accent-200'
                } ${successAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${
                  story.color === 'primary' ? 'bg-primary-50' : 'bg-accent-50'
                }`}>
                  <i className={`${story.icon} text-2xl ${
                    story.color === 'primary' ? 'text-primary-500' : 'text-accent-500'
                  }`}></i>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground-900 mb-3">{story.title}</h3>
                <p className="text-foreground-500 text-sm leading-relaxed mb-4">{story.summary}</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                  story.color === 'primary'
                    ? 'bg-primary-50 text-primary-600'
                    : 'bg-accent-50 text-accent-600'
                }`}>
                  <i className="ri-check-double-line"></i>
                  {story.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Stories */}
      <section className="py-16 md:py-24 bg-background-50">
        <div ref={recoveryAnim.ref} className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Recovery Stories</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              The Road to Recovery
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-300 via-background-200 to-background-200" />

            <div className="space-y-0">
              {RECOVERY_STORIES.map((story, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-5 pb-10 transition-all duration-700 ${
                    recoveryAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Node */}
                  <div className={`relative z-10 w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center shrink-0 transition-all duration-500 ${
                    recoveryAnim.isVisible ? 'scale-100 border-accent-400' : 'scale-0 border-background-200'
                  }`}
                    style={{ transitionDelay: `${i * 150 + 200}ms` }}
                  >
                    <i className={`${story.icon} text-accent-500 text-lg`}></i>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white border border-background-200/70 rounded-2xl p-5 hover:border-accent-200 transition-all duration-300">
                    <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5">{story.title}</h4>
                    <p className="text-foreground-500 text-xs leading-relaxed mb-3">{story.summary}</p>
                    <span className="inline-flex items-center gap-1.5 text-accent-600 text-[11px] font-medium">
                      <i className="ri-timer-line"></i>
                      {story.timeline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
