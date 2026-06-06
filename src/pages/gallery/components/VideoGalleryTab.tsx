import { useState } from 'react';
import FilterModal from '@/components/feature/FilterModal';

const VIDEO_CATEGORIES = ['All', 'Recovery Videos', 'Educational Videos', 'Procedure Videos', 'Patient Stories'];

const VIDEOS = [
  {
    id: 'gv-1',
    category: 'Recovery Videos',
    title: 'Walking Independently After Knee Replacement',
    description: 'Patient demonstrates confident independent walking at 6-week post-operative follow-up.',
    duration: '2:14',
  },
  {
    id: 'gv-2',
    category: 'Recovery Videos',
    title: 'Stair Navigation After Hip Surgery',
    description: 'Patient climbs stairs without support 8 weeks after total hip replacement.',
    duration: '1:48',
  },
  {
    id: 'gv-3',
    category: 'Recovery Videos',
    title: 'Return to Running After ACL Surgery',
    description: 'Athlete demonstrates running form at 6-month clearance following ACL reconstruction.',
    duration: '3:05',
  },
  {
    id: 'gv-4',
    category: 'Recovery Videos',
    title: 'Shoulder Mobility Progress Week 12',
    description: 'Full overhead range of motion restored after arthroscopic rotator cuff repair.',
    duration: '1:32',
  },
  {
    id: 'gv-5',
    category: 'Procedure Videos',
    title: 'Day 1 Post-Op Mobilization',
    description: 'Patient stands and takes first steps with physiotherapist support within 24 hours.',
    duration: '1:15',
  },
  {
    id: 'gv-6',
    category: 'Patient Stories',
    title: 'Fracture Recovery Walking Progress',
    description: 'Progressive walking improvement from Week 2 to Week 12 after ankle fracture fixation.',
    duration: '2:42',
  },
];

const FILTERS = ['Recovery Videos', 'Educational Videos', 'Procedure Videos', 'Patient Stories'];

export default function VideoGalleryTab() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filtered = activeFilters.length === 0
    ? VIDEOS
    : VIDEOS.filter((v) => activeFilters.includes(v.category));

  const activeVideo = VIDEOS.find((v) => v.id === lightboxId);

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
        title="Video Filters"
        filters={FILTERS}
        activeFilters={activeFilters}
        onApply={setActiveFilters}
        onClear={() => setActiveFilters([])}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-2xl border border-background-200 overflow-hidden group cursor-pointer hover:border-primary-200 hover:-translate-y-1 transition-all duration-300"
            onClick={() => setLightboxId(video.id)}
          >
            <div className="relative aspect-video bg-secondary-700 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-primary-500 transition-colors duration-300">
                  <i className="ri-play-fill text-white text-2xl ml-0.5"></i>
                </div>
                <span className="text-white/40 text-[10px] font-medium">Recovery Video</span>
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-[10px] font-mono">
                <i className="ri-time-line mr-1 text-[9px]"></i>
                {video.duration}
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/70 text-[10px] font-medium">
                {video.category}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5 group-hover:text-primary-600 transition-colors duration-300">
                {video.title}
              </h4>
              <p className="text-foreground-500 text-xs leading-relaxed line-clamp-2">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <i className="ri-movie-line text-6xl text-foreground-200 mb-4 block"></i>
          <p className="text-foreground-400 text-lg">No videos in this category yet.</p>
        </div>
      )}

      {/* Video Lightbox */}
      {lightboxId !== null && activeVideo && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxId(null)}
          style={{ animation: 'fade-in 0.3s ease-out' }}
        >
          <button
            onClick={() => setLightboxId(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Close"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()} style={{ animation: 'scale-in 0.4s ease-out' }}>
            <div className="aspect-video rounded-2xl overflow-hidden bg-secondary-800 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <i className="ri-play-fill text-white text-3xl ml-0.5"></i>
              </div>
              <p className="text-white/50 text-sm font-medium mb-1">Recovery Video</p>
              <p className="text-white/30 text-xs">Available for in-clinic viewing</p>
            </div>
            <div className="mt-4 text-center px-2">
              <h3 className="text-white font-heading font-bold text-xl mb-2">{activeVideo.title}</h3>
              <p className="text-white/50 text-sm">{activeVideo.description}</p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-white/10 text-white/40 text-xs">
                {activeVideo.duration} • {activeVideo.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
