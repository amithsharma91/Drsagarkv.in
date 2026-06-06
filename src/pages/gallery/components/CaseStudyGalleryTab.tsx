import { Link } from 'react-router-dom';
import { useState } from 'react';
import FilterModal from '@/components/feature/FilterModal';

const CASE_STUDIES = [
  {
    slug: 'knee-replacement-68',
    title: 'Knee Replacement at 68',
    subtitle: 'From Wheelchair to Walking',
    summary: 'Mrs. Lakshmi, a 68-year-old grandmother, had been wheelchair-bound for 6 months due to severe knee osteoarthritis. After bilateral knee evaluation, she underwent staged total knee replacement and was walking independently within 4 weeks.',
    icon: 'ri-kick-line',
    color: 'accent',
    imageUrl: 'https://readdy.ai/api/search-image?query=Elderly%20Indian%20woman%20in%20her%20sixties%20walking%20happily%20in%20a%20garden%20with%20family%2C%20post%20orthopedic%20surgery%20recovery%2C%20wearing%20comfortable%20traditional%20clothing%2C%20bright%20natural%20lighting%2C%20joyful%20expression%2C%20active%20senior%20lifestyle%2C%20Bangalore%20outdoor%20setting%2C%20green%20garden%20background%2C%20healed%20knee%20visible%2C%20mobility%20restored&width=800&height=600&seq=case-gallery-knee-01&orientation=landscape',
    stats: ['Bilateral Knee OA', 'Staged TKR', 'Walking in 4 Weeks', 'Pain-Free at 6 Months'],
  },
  {
    slug: 'shoulder-arthroscopy-42',
    title: 'Shoulder Arthroscopy at 42',
    subtitle: 'Back to Cricket in 4 Months',
    summary: 'Mr. Ramesh, a 42-year-old software professional and weekend cricketer, suffered a rotator cuff tear during a match. Arthroscopic repair with Dr. Sagar\'s technique had him back to bowling within 4 months.',
    icon: 'ri-arrow-up-circle-line',
    color: 'accent',
    imageUrl: 'https://readdy.ai/api/search-image?query=Indian%20man%20in%20his%20forties%20playing%20cricket%20in%20a%20park%2C%20active%20sports%20lifestyle%2C%20throwing%20a%20ball%20with%20full%20shoulder%20mobility%2C%20outdoor%20sports%20setting%2C%20Bangalore%20park%2C%20casual%20sportswear%2C%20athletic%20recovery%2C%20post%20shoulder%20surgery%20rehabilitation%2C%20bright%20daylight%2C%20green%20field%20background&width=800&height=600&seq=case-gallery-shoulder-01&orientation=landscape',
    stats: ['Rotator Cuff Tear', 'Arthroscopic Repair', 'Return-to-Sport 4 Months', 'Full ROM Restored'],
  },
  {
    slug: 'spine-surgery-55',
    title: 'Spine Surgery at 55',
    subtitle: 'Standing Tall Again',
    summary: 'Mr. Venkatesh, a 55-year-old teacher, had been suffering from debilitating back pain with leg radiation. Microdiscectomy surgery provided immediate relief, and he returned to teaching within 3 weeks.',
    icon: 'ri-body-scan-line',
    color: 'accent',
    imageUrl: 'https://readdy.ai/api/search-image?query=Indian%20man%20in%20his%20fifties%20standing%20confidently%20in%20a%20classroom%2C%20professional%20teacher%2C%20good%20posture%20after%20spine%20surgery%20recovery%2C%20bright%20classroom%20setting%2C%20educational%20environment%2C%20natural%20light%2C%20healthy%20appearance%2C%20back%20pain%20resolved%2C%20professional%20attire%2C%20Bangalore%20school%20setting&width=800&height=600&seq=case-gallery-spine-01&orientation=landscape',
    stats: ['Lumbar Disc Herniation', 'Microdiscectomy', 'Return-to-Work 3 Weeks', 'Pain-Free at 2 Months'],
  },
];

const FILTERS = ['Before & After', 'Recovery Journey', 'Surgical Case', 'Complex Trauma'];

export default function CaseStudyGalleryTab() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  // For case studies without explicit category field, we map based on content
  const getCaseCategories = (cs: typeof CASE_STUDIES[0]) => {
    const cats: string[] = [];
    if (cs.title.includes('Replacement')) cats.push('Surgical Case');
    if (cs.subtitle.includes('Wheelchair to Walking') || cs.subtitle.includes('Standing Tall') || cs.subtitle.includes('Back to')) cats.push('Recovery Journey');
    if (cs.subtitle.includes('Back to Cricket')) cats.push('Before & After');
    return cats;
  };

  const filtered = activeFilters.length === 0
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => {
        const cats = getCaseCategories(cs);
        return activeFilters.some((f) => cats.includes(f));
      });

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setFilterOpen(true)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
            activeFilters.length > 0
              ? 'bg-primary-500 text-white'
              : 'bg-background-100 text-foreground-500 hover:bg-background-200 border border-background-200/70'
          }`}
        >
          <i className="ri-filter-3-line text-sm"></i>
          Filter
          {activeFilters.length > 0 && (
            <span className="ml-1 px-1.5 py-0.5 rounded-full bg-white/20 text-[10px]">{activeFilters.length}</span>
          )}
        </button>
        {activeFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilters((prev) => prev.filter((x) => x !== f))}
            className="px-3 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-medium cursor-pointer whitespace-nowrap flex items-center gap-1"
          >
            {f}
            <i className="ri-close-line text-[10px]"></i>
          </button>
        ))}
        {activeFilters.length > 0 && (
          <button
            onClick={() => setActiveFilters([])}
            className="px-3 py-1.5 rounded-full text-xs text-foreground-400 hover:text-foreground-600 cursor-pointer whitespace-nowrap"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterModal
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        title="Case Study Filters"
        filters={FILTERS}
        activeFilters={activeFilters}
        onApply={setActiveFilters}
        onClear={() => setActiveFilters([])}
      />

      <div className="grid grid-cols-1 gap-6">
        {filtered.map((cs, idx) => (
          <div
            key={cs.slug}
            className="group bg-white rounded-2xl border border-background-200 overflow-hidden hover:border-accent-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Image */}
              <div className="lg:col-span-2 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={cs.imageUrl}
                  alt={cs.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-[10px] font-semibold uppercase tracking-wide">
                    Case Study
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground-950 mb-1">
                  {cs.title}
                </h3>
                <p className="text-accent-600 font-heading font-semibold text-sm mb-3">{cs.subtitle}</p>
                <p className="text-foreground-600 text-sm leading-relaxed mb-5 max-w-lg">{cs.summary}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.stats.map((stat) => (
                    <span
                      key={stat}
                      className="px-3 py-1.5 rounded-full bg-accent-100 text-accent-700 text-[11px] font-medium flex items-center gap-1.5"
                    >
                      <i className="ri-check-line text-[10px]"></i>
                      {stat}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-sm font-heading font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    Read Full Story
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-foreground-400 text-sm mb-4">More patient success stories available</p>
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-accent-200 text-accent-600 hover:bg-accent-50 text-sm font-heading font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
        >
          <i className="ri-file-list-3-line"></i>
          View All Patient Stories
        </Link>
      </div>
    </>
  );
}
