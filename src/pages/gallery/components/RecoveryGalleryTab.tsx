import { useState } from 'react';
import { RECOVERY_IMAGES } from '@/mocks/recovery-images';
import FilterModal from '@/components/feature/FilterModal';

const FILTERS = ['Joint Replacement Surgery', 'Sports Injury Treatment', 'Fracture & Trauma Care', 'Arthritis Treatment', 'Pain Management', 'Paediatric Orthopaedics', 'Rehabilitation'];

export default function RecoveryGalleryTab() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = activeFilters.length === 0
    ? RECOVERY_IMAGES
    : RECOVERY_IMAGES.filter((img) => activeFilters.includes(img.treatment));

  const navigate = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const total = filtered.length;
    const next = (lightboxIndex + dir + total) % total;
    setLightboxIndex(next);
  };

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
        title="Recovery Filters"
        filters={FILTERS}
        activeFilters={activeFilters}
        onApply={setActiveFilters}
        onClear={() => setActiveFilters([])}
      />

      {/* Photo Gallery Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <i className="ri-walk-line text-6xl text-foreground-200 mb-4 block"></i>
          <p className="text-foreground-400 text-lg">No recovery photos in this category yet.</p>
          <p className="text-foreground-300 text-sm mt-1">Recovery media available for in-clinic review.</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(i)}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className={`${item.aspect} relative overflow-hidden`}>
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500">
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <i className="ri-zoom-in-line text-white text-2xl"></i>
                    </div>
                    <h3 className="text-white font-heading font-semibold text-base mb-1 text-center">{item.title}</h3>
                    <p className="text-white/70 text-sm text-center line-clamp-2">{item.desc}</p>
                    <span className="mt-3 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/80 text-xs">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category}
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-accent-500/80 backdrop-blur-sm text-white text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
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
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scale-in 0.4s ease-out' }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={filtered[lightboxIndex].imgUrl}
                alt={filtered[lightboxIndex].title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2">
              <div>
                <h3 className="text-white font-heading font-bold text-xl md:text-2xl">{filtered[lightboxIndex].title}</h3>
                <p className="text-white/60 text-sm mt-1">{filtered[lightboxIndex].desc}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-accent-500/30 text-accent-300 text-xs whitespace-nowrap">
                  {filtered[lightboxIndex].treatment}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs whitespace-nowrap">
                  {filtered[lightboxIndex].category}
                </span>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-white/40 text-xs">{lightboxIndex + 1} / {filtered.length}</span>
            </div>
            <div className="flex gap-2 mt-4 justify-center flex-wrap px-2">
              {filtered.map((item, i) => (
                <button
                  key={item.id}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-14 h-10 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                    i === lightboxIndex ? 'ring-2 ring-white scale-110' : 'opacity-50 hover:opacity-80'
                  }`}
                  aria-label={`View ${item.title}`}
                >
                  <img src={item.imgUrl} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
