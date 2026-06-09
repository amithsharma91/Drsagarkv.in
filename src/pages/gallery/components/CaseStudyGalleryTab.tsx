import { Link } from 'react-router-dom';
import { useState } from 'react';
import FilterModal from '@/components/feature/FilterModal';

const TYPE_FILTERS = ['Before & After', 'Recovery Journey', 'Surgical Case', 'Complex Trauma'];
const TREATMENT_FILTERS = ['Joint Replacement Surgery', 'Sports Injury Treatment', 'Fracture & Trauma Care', 'Arthritis Treatment', 'Pain Management', 'Paediatric Orthopaedics', 'Rehabilitation'];
const ALL_FILTERS = [...TYPE_FILTERS, ...TREATMENT_FILTERS];

const CASE_STUDIES = [
  {
    slug: 'knee-replacement-68',
    title: 'Knee Replacement at 68',
    subtitle: 'From Wheelchair to Walking',
    summary: 'Mrs. Lakshmi, a 68-year-old grandmother, had been wheelchair-bound for 6 months due to severe knee osteoarthritis. After bilateral knee evaluation, she underwent staged total knee replacement and was walking independently within 4 weeks.',
    icon: 'ri-kick-line',
    type: 'Surgical Case',
    treatment: 'Joint Replacement Surgery',
    stats: ['Bilateral Knee OA', 'Staged TKR', 'Walking in 4 Weeks', 'Pain-Free at 6 Months'],
  },
  {
    slug: 'shoulder-arthroscopy-42',
    title: 'Shoulder Arthroscopy at 42',
    subtitle: 'Back to Cricket in 4 Months',
    summary: 'Mr. Ramesh, a 42-year-old software professional and weekend cricketer, suffered a rotator cuff tear during a match. Arthroscopic repair with Dr. Sagar\'s technique had him back to bowling within 4 months.',
    icon: 'ri-arrow-up-circle-line',
    type: 'Before & After',
    treatment: 'Sports Injury Treatment',
    stats: ['Rotator Cuff Tear', 'Arthroscopic Repair', 'Return-to-Sport 4 Months', 'Full ROM Restored'],
  },
  {
    slug: 'spine-surgery-55',
    title: 'Spine Surgery at 55',
    subtitle: 'Standing Tall Again',
    summary: 'Mr. Venkatesh, a 55-year-old teacher, had been suffering from debilitating back pain with leg radiation. Microdiscectomy surgery provided immediate relief, and he returned to teaching within 3 weeks.',
    icon: 'ri-body-scan-line',
    type: 'Recovery Journey',
    treatment: 'Pain Management',
    stats: ['Lumbar Disc Herniation', 'Microdiscectomy', 'Return-to-Work 3 Weeks', 'Pain-Free at 2 Months'],
  },
  {
    slug: 'complex-trauma-35',
    title: 'Complex Trauma Recovery at 35',
    subtitle: 'From Multiple Fractures to Full Mobility',
    summary: 'Mr. Arun, a 35-year-old construction supervisor, sustained multiple fractures in a workplace accident including tibia and forearm. Underwent staged surgical fixation with comprehensive rehabilitation, returning to work within 5 months.',
    icon: 'ri-heart-pulse-line',
    type: 'Complex Trauma',
    treatment: 'Fracture & Trauma Care',
    stats: ['Multiple Fractures', 'Staged ORIF', 'Return-to-Work 5 Months', 'Full Function Restored'],
  },
  {
    slug: 'arthritis-management-60',
    title: 'Arthritis Management at 60',
    subtitle: 'Avoiding Surgery Through Structured Care',
    summary: 'Mrs. Kamala, a 60-year-old retired teacher with advanced knee arthritis, successfully avoided joint replacement through a structured treatment protocol including CRFA. Achieved 80% pain reduction and maintained independent mobility.',
    icon: 'ri-run-line',
    type: 'Recovery Journey',
    treatment: 'Arthritis Treatment',
    stats: ['Grade 3 Knee OA', 'CRFA Treatment', '80% Pain Reduction', 'Surgery Avoided'],
  },
  {
    slug: 'paediatric-corrective-9',
    title: 'Paediatric Corrective Surgery at 9',
    subtitle: 'Straight Legs, Bright Future',
    summary: 'A 9-year-old child with progressive genu valgum (knock knees) underwent guided growth surgery. Over 18 months, the deformity corrected naturally, avoiding more invasive osteotomy and ensuring a normal active childhood.',
    icon: 'ri-emotion-happy-line',
    type: 'Surgical Case',
    treatment: 'Paediatric Orthopaedics',
    stats: ['Genu Valgum', 'Guided Growth Surgery', '18-Month Correction', 'Full Activity Restored'],
  },
];

export default function CaseStudyGalleryTab() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = activeFilters.length === 0
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) =>
        activeFilters.some((f) => f === cs.type || f === cs.treatment)
      );

  return (
    <>
      {/* Filter Bar */}
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
        filters={ALL_FILTERS}
        activeFilters={activeFilters}
        onApply={setActiveFilters}
        onClear={() => setActiveFilters([])}
      />

      {/* Case Studies List */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <i className="ri-file-list-3-line text-6xl text-foreground-200 mb-4 block"></i>
          <p className="text-foreground-400 text-lg">No case studies in this category yet.</p>
          <p className="text-foreground-300 text-sm mt-1">More case studies available for in-clinic review.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filtered.map((cs) => (
            <div
              key={cs.slug}
              className="group bg-white rounded-2xl border border-background-200 overflow-hidden hover:border-accent-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide ${
                    cs.type === 'Surgical Case'
                      ? 'bg-secondary-100 text-secondary-700'
                      : cs.type === 'Before & After'
                      ? 'bg-primary-100 text-primary-700'
                      : cs.type === 'Complex Trauma'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-accent-100 text-accent-700'
                  }`}>
                    {cs.type}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-background-100 text-foreground-500 text-[10px] font-medium">
                    {cs.treatment}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <i className={`${cs.icon} text-accent-600 text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground-950 mb-1">
                      {cs.title}
                    </h3>
                    <p className="text-accent-600 font-heading font-semibold text-sm mb-3">{cs.subtitle}</p>
                    <p className="text-foreground-600 text-sm leading-relaxed mb-5">{cs.summary}</p>

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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <p className="text-foreground-400 text-sm mb-4">More patient success stories available at the clinic</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-sm font-heading font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
        >
          <i className="ri-calendar-line"></i>
          Book a Consultation
        </Link>
      </div>
    </>
  );
}
