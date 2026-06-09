import { useState, useRef, useCallback, useEffect } from 'react';
import { XRAY_CASES } from '@/mocks/xray-cases';
import FilterModal from '@/components/feature/FilterModal';

const FILTERS = ['Joint Replacement Surgery', 'Fracture & Trauma Care', 'Arthritis Treatment', 'Pain Management', 'Paediatric Orthopaedics'];

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
}

function BeforeAfterSlider({ beforeImg, afterImg, beforeLabel, afterLabel }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square overflow-hidden select-none rounded-2xl cursor-col-resize"
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (full width underneath) */}
      <img
        src={afterImg}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
      />

      {/* Before Image (clipped by slider position) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
        <img
          src={beforeImg}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ width: containerRef.current ? `${(100 / sliderPos) * 100}%` : '100%', minWidth: '100%' }}
          draggable={false}
        />
      </div>

      {/* Slider Divider */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] z-10 pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="flex gap-[3px]">
            <i className="ri-arrow-left-s-line text-foreground-600 text-lg"></i>
            <i className="ri-arrow-right-s-line text-foreground-600 text-lg"></i>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 z-20">
        <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[11px] font-medium">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute bottom-3 right-3 z-20">
        <span className="px-3 py-1 rounded-full bg-emerald-600/70 backdrop-blur-sm text-white text-[11px] font-medium">
          {afterLabel}
        </span>
      </div>
    </div>
  );
}

export default function XRayGalleryTab() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const filtered = activeFilters.length === 0
    ? XRAY_CASES
    : XRAY_CASES.filter((c) => activeFilters.includes(c.category));

  const navigate = (dir: 1 | -1) => {
    if (fullscreenIndex === null) return;
    const total = filtered.length;
    const next = (fullscreenIndex + dir + total) % total;
    setFullscreenIndex(next);
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
        title="X-Ray Filters"
        filters={FILTERS}
        activeFilters={activeFilters}
        onApply={setActiveFilters}
        onClear={() => setActiveFilters([])}
      />

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <i className="ri-scan-line text-6xl text-foreground-200 mb-4 block"></i>
          <p className="text-foreground-400 text-lg">No X-ray cases in this category yet.</p>
          <p className="text-foreground-300 text-sm mt-1">X-rays available for in-clinic review.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-background-200 overflow-hidden group hover:border-accent-200 transition-all duration-300"
            >
              <div className="p-4 pb-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-accent-100 text-accent-700 text-[10px] font-semibold">
                    {item.category}
                  </span>
                  <span className="text-foreground-300 text-[10px]">Drag slider to compare</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-3">{item.title}</h4>
              </div>

              {/* Mini Before/After Slider */}
              <div
                className="relative mx-4 mb-3 aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setFullscreenIndex(i)}
              >
                <BeforeAfterSlider
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                  beforeLabel="Before"
                  afterLabel="After"
                />
                {/* Fullscreen hint overlay */}
                <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <i className="ri-fullscreen-line text-white text-sm"></i>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4">
                <p className="text-foreground-500 text-xs leading-relaxed">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Before/After Slider */}
      {fullscreenIndex !== null && filtered[fullscreenIndex] && (
        <div
          className="fixed inset-0 z-[200] bg-black/98 flex items-center justify-center p-4 md:p-8"
          onClick={() => setFullscreenIndex(null)}
          style={{ animation: 'fade-in 0.3s ease-out' }}
        >
          {/* Close */}
          <button
            onClick={() => setFullscreenIndex(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-20 backdrop-blur-sm"
            aria-label="Close fullscreen"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-20 backdrop-blur-sm"
            aria-label="Previous case"
          >
            <i className="ri-arrow-left-s-line text-white text-2xl"></i>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-20 backdrop-blur-sm"
            aria-label="Next case"
          >
            <i className="ri-arrow-right-s-line text-white text-2xl"></i>
          </button>

          {/* Slider */}
          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scale-in 0.4s ease-out' }}
          >
            <div className="aspect-square max-h-[75vh] mx-auto rounded-2xl overflow-hidden">
              <BeforeAfterSlider
                beforeImg={filtered[fullscreenIndex].beforeImg}
                afterImg={filtered[fullscreenIndex].afterImg}
                beforeLabel="Before"
                afterLabel="After"
              />
            </div>

            <div className="mt-5 text-center px-2">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs">Before</span>
                <h3 className="text-white font-heading font-bold text-xl md:text-2xl">
                  {filtered[fullscreenIndex].title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-600/40 text-emerald-300 text-xs">After</span>
              </div>
              <p className="text-white/50 text-sm max-w-xl mx-auto">{filtered[fullscreenIndex].summary}</p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-white/10 text-white/40 text-xs">
                {filtered[fullscreenIndex].category}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setFullscreenIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === fullscreenIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to case ${i + 1}`}
                />
              ))}
            </div>

            <p className="text-center text-white/30 text-xs mt-3">
              {fullscreenIndex + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
