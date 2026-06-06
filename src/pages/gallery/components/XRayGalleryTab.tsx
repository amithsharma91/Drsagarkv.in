import { useState } from 'react';
import FilterModal from '@/components/feature/FilterModal';

const XRAY_CASES = [
  {
    id: 'gc-xr-1',
    category: 'Joint Replacement Surgery',
    title: 'Knee Arthritis → Total Knee Replacement',
    beforeLabel: 'Before',
    afterLabel: 'After',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20knee%20joint%20with%20severe%20osteoarthritis%2C%20narrowed%20joint%20space%2C%20bone%20spurs%2C%20irregular%20bone%20surfaces%2C%20arthritic%20deterioration%20clearly%20visible%2C%20medical%20imaging%20style%2C%20blue-tinted%20radiograph%2C%20clinical%20diagnostic%20quality&width=600&height=600&seq=gxr-before-knee&orientation=squarish',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20knee%20joint%20with%20total%20knee%20replacement%20implant%20in%20perfect%20alignment%2C%20clean%20surgical%20outcome%2C%20prosthetic%20components%20clearly%20visible%2C%20smooth%20joint%20surfaces%2C%20blue-tinted%20radiograph%2C%20postoperative%20imaging&width=600&height=600&seq=gxr-after-knee&orientation=squarish',
    summary: 'Full joint space restoration. Patient pain-free at 3 months.',
  },
  {
    id: 'gc-xr-2',
    category: 'Joint Replacement Surgery',
    title: 'Hip Degeneration → Total Hip Replacement',
    beforeLabel: 'Before',
    afterLabel: 'After',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20hip%20joint%20with%20complete%20loss%20of%20joint%20space%2C%20bone-on-bone%20contact%2C%20severe%20osteoarthritis%2C%20femoral%20head%20irregularity%2C%20blue-tinted%20radiograph%2C%20diagnostic%20quality&width=600&height=600&seq=gxr-before-hip&orientation=squarish',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20hip%20joint%20with%20total%20hip%20replacement%20implant%20properly%20positioned%2C%20prosthetic%20femoral%20head%20and%20acetabular%20cup%20visible%2C%20clean%20surgical%20outcome%2C%20blue-tinted%20radiograph&width=600&height=600&seq=gxr-after-hip&orientation=squarish',
    summary: 'Excellent positioning. Walking unaided at Week 4.',
  },
  {
    id: 'gc-xr-3',
    category: 'Fracture & Trauma Care',
    title: 'Complex Wrist Fracture → Internal Fixation',
    beforeLabel: 'Before',
    afterLabel: 'After',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20displaced%20distal%20radius%20fracture%20with%20clear%20fracture%20line%20and%20dorsal%20angulation%2C%20wrist%20trauma%2C%20bone%20misalignment%2C%20blue-tinted%20radiograph%2C%20emergency%20diagnostic%20quality&width=600&height=600&seq=gxr-before-radius&orientation=squarish',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20distal%20radius%20fracture%20with%20volar%20locking%20plate%20and%20screws%20in%20perfect%20anatomical%20alignment%2C%20restored%20wrist%20joint%20surface%2C%20healed%20fracture%2C%20blue-tinted%20radiograph&width=600&height=600&seq=gxr-after-radius&orientation=squarish',
    summary: 'Anatomic reduction. Full function restored by Week 8.',
  },
  {
    id: 'gc-xr-4',
    category: 'Sports Injuries',
    title: 'ACL Tear → Ligament Reconstruction',
    beforeLabel: 'Before',
    afterLabel: 'After',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20knee%20joint%20with%20ACL%20tear%20indicators%2C%20anterior%20tibial%20translation%20visible%2C%20joint%20effusion%2C%20ligament%20instability%20signs%2C%20blue-tinted%20radiographic%20imaging%2C%20sports%20medicine%20diagnostic%20quality&width=600&height=600&seq=gxr-before-acl&orientation=squarish',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20knee%20joint%20after%20ACL%20reconstruction%20with%20bone%20tunnels%20and%20fixation%20devices%20in%20proper%20position%2C%20stable%20knee%20joint%2C%20anatomical%20reconstruction%2C%20blue-tinted%20radiograph&width=600&height=600&seq=gxr-after-acl&orientation=squarish',
    summary: 'Stable joint confirmed. Sports clearance at Month 6.',
  },
  {
    id: 'gc-xr-5',
    category: 'Arthritis Treatment',
    title: 'Shoulder Arthritis → Anatomic Replacement',
    beforeLabel: 'Before',
    afterLabel: 'After',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20shoulder%20joint%20with%20severe%20glenohumeral%20arthritis%2C%20narrowed%20joint%20space%2C%20osteophyte%20formation%2C%20humeral%20head%20irregularity%2C%20blue-tinted%20radiograph&width=600&height=600&seq=gxr-before-shoulder&orientation=squarish',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20shoulder%20joint%20with%20anatomic%20total%20shoulder%20replacement%20implant%20properly%20positioned%2C%20humeral%20stem%20and%20glenoid%20component%20visible%2C%20restored%20joint%20space%2C%20blue-tinted%20radiograph&width=600&height=600&seq=gxr-after-shoulder&orientation=squarish',
    summary: 'Pain-free overhead motion. Stable implant at follow-up.',
  },
  {
    id: 'gc-xr-6',
    category: 'Fracture & Trauma Care',
    title: 'Tibial Plateau → ORIF Fixation',
    beforeLabel: 'Before',
    afterLabel: 'After',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20tibial%20plateau%20fracture%20with%20joint%20surface%20depression%20and%20displacement%2C%20complex%20knee%20trauma%2C%20articular%20surface%20involvement%2C%20blue-tinted%20radiograph&width=600&height=600&seq=gxr-before-tibia&orientation=squarish',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20tibial%20plateau%20fracture%20after%20open%20reduction%20internal%20fixation%20with%20plate%20and%20screws%2C%20restored%20joint%20surface%20congruity%2C%20anatomical%20alignment%2C%20blue-tinted%20radiograph&width=600&height=600&seq=gxr-after-tibia&orientation=squarish',
    summary: 'Joint surface restored. Full weight-bearing at Week 12.',
  },
];

const FILTERS = ['Joint Replacement Surgery', 'Fracture & Trauma Care', 'Arthritis Treatment', 'Pain Management', 'Paediatric Orthopaedics'];

export default function XRayGalleryTab() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = activeFilters.length === 0
    ? XRAY_CASES
    : XRAY_CASES.filter((c) => activeFilters.includes(c.category));

  const navigate = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const total = filtered.length;
    const next = (lightboxIndex + dir + total) % total;
    setLightboxIndex(next);
  };

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
        title="X-Ray Filters"
        filters={FILTERS}
        activeFilters={activeFilters}
        onApply={setActiveFilters}
        onClear={() => setActiveFilters([])}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(i)}
            className="bg-white rounded-2xl border border-background-200 overflow-hidden group hover:border-accent-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="grid grid-cols-2 gap-0.5 bg-background-200">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.beforeImage}
                  alt={item.beforeLabel}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium">
                  {item.beforeLabel}
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.afterImage}
                  alt={item.afterLabel}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-green-600/80 backdrop-blur-sm text-white text-[10px] font-medium">
                  {item.afterLabel}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded-full bg-accent-100 text-accent-700 text-[10px] font-semibold">{item.category}</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground-900 text-sm">{item.title}</h4>
              <p className="text-foreground-500 text-xs leading-relaxed mt-1.5">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <i className="ri-scan-line text-6xl text-foreground-200 mb-4 block"></i>
          <p className="text-foreground-400 text-lg">No X-ray cases in this category yet.</p>
        </div>
      )}

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxIndex(null)}
          style={{ animation: 'fade-in 0.3s ease-out' }}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Previous"
          >
            <i className="ri-arrow-left-s-line text-white text-2xl"></i>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Next"
          >
            <i className="ri-arrow-right-s-line text-white text-2xl"></i>
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()} style={{ animation: 'scale-in 0.4s ease-out' }}>
            <div className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden bg-background-200">
              <div className="aspect-square">
                <img src={filtered[lightboxIndex].beforeImage} alt="Before" className="w-full h-full object-cover object-top" />
              </div>
              <div className="aspect-square">
                <img src={filtered[lightboxIndex].afterImage} alt="After" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs">Before</span>
              <h3 className="text-white font-heading font-bold text-lg text-center">{filtered[lightboxIndex].title}</h3>
              <span className="px-3 py-1 rounded-full bg-green-600/40 text-green-300 text-xs">After</span>
            </div>
            <p className="text-white/50 text-sm text-center mt-2">{filtered[lightboxIndex].summary}</p>
            <div className="text-center mt-2">
              <span className="text-white/40 text-xs">{lightboxIndex + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
