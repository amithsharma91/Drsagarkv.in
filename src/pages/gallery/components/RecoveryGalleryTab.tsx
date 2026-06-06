import { useState } from 'react';
import FilterModal from '@/components/feature/FilterModal';

const RECOVERY_IMAGES = [
  {
    id: 'rec-1',
    title: 'First Steps After Knee Surgery',
    desc: 'Patient stands and walks with support within 24 hours of knee replacement surgery.',
    category: 'Walking Recovery',
    aspect: 'aspect-[4/3]',
    imgUrl: 'https://readdy.ai/api/search-image?query=Orthopedic%20patient%20walking%20with%20physiotherapist%20support%20in%20hospital%20corridor%2C%20using%20walker%2C%20post-surgery%20recovery%20scene%2C%20bright%20clean%20hospital%20environment%2C%20medical%20professional%20assisting%2C%20patient%20in%20comfortable%20clothing%2C%20rehabilitation%20setting%2C%20encouraging%20atmosphere%2C%20natural%20daylight%2C%20healing%20journey%2C%20Bangalore%20orthopedic%20clinic&width=800&height=600&seq=recov-img-01&orientation=landscape',
  },
  {
    id: 'rec-2',
    title: 'Stair Climbing Progress',
    desc: 'Patient confidently navigates stairs without support at Week 8 post hip replacement.',
    category: 'Mobility Recovery',
    aspect: 'aspect-[3/4]',
    imgUrl: 'https://readdy.ai/api/search-image?query=Recovering%20patient%20climbing%20stairs%20independently%20in%20modern%20physiotherapy%20facility%2C%20confident%20expression%2C%20physiotherapist%20observing%20nearby%2C%20rehabilitation%20environment%2C%20clean%20bright%20space%2C%20mobility%20progress%2C%20orthopedic%20recovery%2C%20stair%20training%20exercise%2C%20natural%20light%2C%20professional%20medical%20setting&width=600&height=800&seq=recov-img-02&orientation=portrait',
  },
  {
    id: 'rec-3',
    title: 'Range of Motion Exercise',
    desc: 'Patient performing guided physiotherapy exercises for knee flexion recovery.',
    category: 'Rehabilitation Progress',
    aspect: 'aspect-[4/3]',
    imgUrl: 'https://readdy.ai/api/search-image?query=Patient%20performing%20knee%20range%20of%20motion%20exercises%20on%20physiotherapy%20table%20with%20therapist%20guidance%2C%20modern%20rehabilitation%20center%2C%20exercise%20bands%2C%20bright%20clean%20space%2C%20professional%20medical%20environment%2C%20orthopedic%20recovery%2C%20knee%20rehabilitation%2C%20focused%20patient%2C%20healing%20atmosphere%2C%20natural%20lighting&width=800&height=600&seq=recov-img-03&orientation=landscape',
  },
  {
    id: 'rec-4',
    title: 'Sports Recovery Training',
    desc: 'Athlete performing sport-specific drills under supervision at Month 6 post ACL reconstruction.',
    category: 'Sports Recovery',
    aspect: 'aspect-[4/3]',
    imgUrl: 'https://readdy.ai/api/search-image?query=Athlete%20doing%20sports%20rehabilitation%20training%20with%20physiotherapist%20in%20modern%20gym%20facility%2C%20agility%20drills%2C%20sports%20medicine%20recovery%2C%20active%20rehabilitation%2C%20professional%20supervision%2C%20bright%20athletic%20training%20space%2C%20orthopedic%20sports%20recovery%2C%20knee%20brace%2C%20focused%20training%20session&width=800&height=600&seq=recov-img-04&orientation=landscape',
  },
  {
    id: 'rec-5',
    title: 'Post-Surgery Mobility Day 1',
    desc: 'Patient sitting up and performing early mobilization exercises on post-operative day 1.',
    category: 'Walking Recovery',
    aspect: 'aspect-[3/4]',
    imgUrl: 'https://readdy.ai/api/search-image?query=Post-surgery%20patient%20sitting%20at%20edge%20of%20hospital%20bed%20performing%20early%20mobilization%20exercises%2C%20physiotherapist%20assisting%2C%20clean%20hospital%20room%2C%20medical%20monitors%2C%20natural%20light%20from%20window%2C%20recovery%20setting%2C%20encouraging%20atmosphere%2C%20orthopedic%20post-operative%20care%2C%20healing%20environment&width=600&height=800&seq=recov-img-05&orientation=portrait',
  },
  {
    id: 'rec-6',
    title: 'Independent Walking at Week 6',
    desc: 'Patient walking independently outdoors with full confidence after knee replacement.',
    category: 'Walking Recovery',
    aspect: 'aspect-[4/3]',
    imgUrl: 'https://readdy.ai/api/search-image?query=Recovered%20patient%20walking%20independently%20outdoors%20in%20garden%20setting%2C%20confident%20posture%2C%20post%20orthopedic%20surgery%20recovery%2C%20natural%20daylight%2C%20healing%20journey%20completed%2C%20senior%20patient%2C%20active%20lifestyle%2C%20greenery%20background%2C%20peaceful%20atmosphere%2C%20Bangalore%20outdoor%20setting%2C%20full%20mobility%20restored&width=800&height=600&seq=recov-img-06&orientation=landscape',
  },
];

const FILTERS = ['Walking Recovery', 'Mobility Recovery', 'Sports Recovery', 'Rehabilitation Progress', 'Post Surgery Recovery'];

export default function RecoveryGalleryTab() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = activeFilters.length === 0
    ? RECOVERY_IMAGES
    : RECOVERY_IMAGES.filter((img) => activeFilters.includes(img.category));

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
        title="Recovery Filters"
        filters={FILTERS}
        activeFilters={activeFilters}
        onApply={setActiveFilters}
        onClear={() => setActiveFilters([])}
      />

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
                  <h3 className="text-white font-heading font-semibold text-base mb-1 text-center">{item.title}</h3>
                  <p className="text-white/70 text-sm text-center line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <i className="ri-walk-line text-6xl text-foreground-200 mb-4 block"></i>
          <p className="text-foreground-400 text-lg">No recovery images in this category yet.</p>
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
            <div className="rounded-2xl overflow-hidden">
              <img src={filtered[lightboxIndex].imgUrl} alt={filtered[lightboxIndex].title} className="w-full max-h-[70vh] object-contain" />
            </div>
            <div className="mt-4 px-2">
              <h3 className="text-white font-heading font-bold text-xl">{filtered[lightboxIndex].title}</h3>
              <p className="text-white/60 text-sm mt-1">{filtered[lightboxIndex].desc}</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/10 text-white/50 text-xs">{filtered[lightboxIndex].category}</span>
            </div>
            <div className="text-center mt-2">
              <span className="text-white/40 text-xs">{lightboxIndex + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
