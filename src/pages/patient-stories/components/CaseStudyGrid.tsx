import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CASE_STUDIES, CASE_THUMBNAIL_PLACEHOLDERS } from '@/mocks/case-studies';

function getThumbnailUrl(slug: string): string {
  const entry = CASE_THUMBNAIL_PLACEHOLDERS.find((p) => p.slug === slug);
  if (entry) {
    return `https://readdy.ai/api/search-image?query=${encodeURIComponent(entry.query)}`;
  }
  return `https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28clean%20modern%20orthopedic%20recovery%20space%2C%20soft%20natural%20light%2C%20calming%20healing%20environment%2C%20minimalist%20clinical%20design%2C%20no%20people%20visible%2C%20rehabilitation%20wellness%20aesthetic&width=800&height=600&seq=case-thumb-fallback&orientation=landscape')}`;
}

export default function CaseStudyGrid() {
  const navigate = useNavigate();
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section className="w-full bg-background-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4 tracking-wide">
            CASE STUDIES
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950 mb-4">
            Patient Recovery Journeys
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Detailed treatment outcomes and recovery timelines from real orthopedic cases managed by Dr. Sagar K V.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((caseItem, idx) => {
            const isHovered = hoveredSlug === caseItem.slug;
            return (
              <div
                key={caseItem.slug}
                onClick={() => navigate(`/patient-stories/${caseItem.slug}`)}
                onMouseEnter={() => setHoveredSlug(caseItem.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className={`group cursor-pointer bg-white rounded-2xl border transition-all duration-400 overflow-hidden ${
                  isHovered
                    ? 'border-primary-300 -translate-y-1 shadow-sm'
                    : 'border-background-200'
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative w-full h-48 overflow-hidden bg-background-100">
                  <img
                    src={getThumbnailUrl(caseItem.slug)}
                    alt={caseItem.thumbnailLabel}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Placeholder overlay badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-secondary-700/80 backdrop-blur-sm text-white text-[10px] font-medium">
                    <i className="ri-image-line mr-1"></i>
                    Placeholder
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Patient Age & Condition */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                        <i className="ri-user-line text-accent-600 text-xs"></i>
                      </span>
                      <span className="text-sm font-semibold text-foreground-900">{caseItem.patientAge}</span>
                    </div>
                    <p className="text-foreground-600 text-sm ml-8">{caseItem.condition}</p>
                  </div>

                  {/* Treatment & Recovery */}
                  <div className="flex flex-col gap-2 mb-5 ml-8">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-primary-100 flex items-center justify-center shrink-0">
                        <i className="ri-stethoscope-line text-primary-600 text-[10px]"></i>
                      </span>
                      <span className="text-foreground-700 text-xs">{caseItem.treatment}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-green-100 flex items-center justify-center shrink-0">
                        <i className="ri-timer-line text-green-600 text-[10px]"></i>
                      </span>
                      <span className="text-foreground-700 text-xs">
                        <span className="font-medium text-foreground-900">Recovery:</span> {caseItem.recoveryTime}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className={`flex items-center justify-between pt-3 border-t transition-colors duration-300 ${
                    isHovered ? 'border-primary-100' : 'border-background-200'
                  }`}>
                    <span className="text-foreground-500 text-xs">View Full Story</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'bg-primary-500 text-white'
                        : 'bg-background-100 text-foreground-400 group-hover:bg-primary-100 group-hover:text-primary-500'
                    }`}>
                      <i className={`ri-arrow-right-line text-sm transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`}></i>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
