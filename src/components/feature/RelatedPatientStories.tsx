import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CASE_STUDIES } from '@/mocks/case-studies';

interface RelatedPatientStoriesProps {
  relevantSlugs: string[];
}

export default function RelatedPatientStories({ relevantSlugs }: RelatedPatientStoriesProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const filteredCases = CASE_STUDIES.filter((cs) => relevantSlugs.includes(cs.slug));

  if (filteredCases.length === 0) return null;

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-10 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4 tracking-wide">
            PATIENT OUTCOMES
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950 mb-4">
            Related <span className="text-accent-500">Patient Stories</span>
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            See how patients with similar conditions achieved recovery with Dr. Sagar K V's care. Real cases, real outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {filteredCases.map((cs, idx) => (
            <Link
              key={cs.slug}
              to="/gallery"
              className="group bg-white rounded-2xl border border-background-200 overflow-hidden hover:border-accent-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                    <i className="ri-user-heart-line text-accent-600"></i>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-semibold">
                    {cs.recoveryTime}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-foreground-950 mb-1 group-hover:text-accent-600 transition-colors duration-300">
                  {cs.patientAge}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-accent-100 text-accent-700 text-[10px] font-medium">
                    {cs.condition}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-background-100 text-foreground-500 text-[10px] font-medium border border-background-200">
                    {cs.treatment}
                  </span>
                </div>

                <p className="text-foreground-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {cs.results.outcomeSummary}
                </p>

                {/* Mini stats */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <i className="ri-check-double-line text-green-600 text-xs"></i>
                    <span className="text-foreground-600">{cs.results.painReduction}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <i className="ri-walk-line text-accent-600 text-xs"></i>
                    <span className="text-foreground-600">{cs.results.mobilityImprovement}</span>
                  </div>
                </div>

                {/* Link indicator */}
                <div className="mt-4 pt-3 border-t border-background-200 flex items-center gap-1 text-accent-500 text-xs font-medium">
                  <span>Read full story</span>
                  <i className="ri-arrow-right-line text-[10px]"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-sm font-heading font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-file-list-3-line"></i>
            View All Patient Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
