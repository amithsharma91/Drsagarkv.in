import { useState, useRef } from 'react';
import FilterModal from '@/components/feature/FilterModal';

const TYPE_FILTERS = ['Recovery Videos', 'Educational Videos', 'Procedure Videos', 'Patient Stories'];
const TREATMENT_FILTERS = ['Joint Replacement Surgery', 'Sports Injury Treatment', 'Fracture & Trauma Care', 'Arthritis Treatment', 'Pain Management', 'Paediatric Orthopaedics', 'Rehabilitation'];
const ALL_FILTERS = [...TYPE_FILTERS, ...TREATMENT_FILTERS];

const VIDEOS = [
  {
    id: 'gv-1',
    category: 'Recovery Videos',
    treatment: 'Joint Replacement Surgery',
    title: 'Walking Independently After Knee Replacement',
    description: 'Patient demonstrates confident independent walking at 6-week post-operative follow-up.',
    duration: '2:14',
    videoUrl: '',
    embedUrl: '',
  },
  {
    id: 'gv-2',
    category: 'Recovery Videos',
    treatment: 'Joint Replacement Surgery',
    title: 'Stair Navigation After Hip Surgery',
    description: 'Patient climbs stairs without support 8 weeks after total hip replacement.',
    duration: '1:48',
    videoUrl: '',
    embedUrl: '',
  },
  {
    id: 'gv-3',
    category: 'Recovery Videos',
    treatment: 'Sports Injury Treatment',
    title: 'Return to Running After ACL Surgery',
    description: 'Athlete demonstrates running form at 6-month clearance following ACL reconstruction.',
    duration: '3:05',
    videoUrl: '',
    embedUrl: '',
  },
  {
    id: 'gv-4',
    category: 'Recovery Videos',
    treatment: 'Sports Injury Treatment',
    title: 'Shoulder Mobility Progress Week 12',
    description: 'Full overhead range of motion restored after arthroscopic rotator cuff repair.',
    duration: '1:32',
    videoUrl: '',
    embedUrl: '',
  },
  {
    id: 'gv-5',
    category: 'Procedure Videos',
    treatment: 'Pain Management',
    title: 'Day 1 Post-Op Mobilization',
    description: 'Patient stands and takes first steps with physiotherapist support within 24 hours of procedure.',
    duration: '1:15',
    videoUrl: '',
    embedUrl: '',
  },
  {
    id: 'gv-6',
    category: 'Patient Stories',
    treatment: 'Fracture & Trauma Care',
    title: 'Fracture Recovery Walking Progress',
    description: 'Progressive walking improvement from Week 2 to Week 12 after ankle fracture fixation.',
    duration: '2:42',
    videoUrl: '',
    embedUrl: '',
  },
  {
    id: 'gv-7',
    category: 'Educational Videos',
    treatment: 'Arthritis Treatment',
    title: 'Understanding Knee Arthritis & Treatment Options',
    description: 'Educational overview of knee arthritis stages and available treatment approaches from conservative to surgical.',
    duration: '4:20',
    videoUrl: '',
    embedUrl: '',
  },
  {
    id: 'gv-8',
    category: 'Patient Stories',
    treatment: 'Paediatric Orthopaedics',
    title: 'Young Patient Recovery After Fracture Treatment',
    description: 'Paediatric patient shares recovery experience after forearm fracture management and return to school activities.',
    duration: '1:55',
    videoUrl: '',
    embedUrl: '',
  },
  {
    id: 'gv-9',
    category: 'Educational Videos',
    treatment: 'Rehabilitation',
    title: 'Essential Post-Surgery Rehabilitation Exercises',
    description: 'Guide to key rehabilitation exercises that support optimal recovery after orthopedic surgery.',
    duration: '5:10',
    videoUrl: '',
    embedUrl: '',
  },
];

export default function VideoGalleryTab() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filtered = activeFilters.length === 0
    ? VIDEOS
    : VIDEOS.filter((v) => activeFilters.includes(v.category) || activeFilters.includes(v.treatment));

  const activeVideo = VIDEOS.find((v) => v.id === lightboxId);

  const openLightbox = (id: string) => {
    setLightboxId(id);
    setIsPlaying(false);
    setIsMuted(false);
  };

  const closeLightbox = () => {
    setIsPlaying(false);
    setLightboxId(null);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
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
        title="Video Filters"
        filters={ALL_FILTERS}
        activeFilters={activeFilters}
        onApply={setActiveFilters}
        onClear={() => setActiveFilters([])}
      />

      {/* Video Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <i className="ri-movie-line text-6xl text-foreground-200 mb-4 block"></i>
          <p className="text-foreground-400 text-lg">No videos in this category yet.</p>
          <p className="text-foreground-300 text-sm mt-1">Videos available for in-clinic viewing.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl border border-background-200 overflow-hidden group cursor-pointer hover:border-primary-200 hover:-translate-y-1 transition-all duration-300"
              onClick={() => openLightbox(video.id)}
            >
              <div className="relative aspect-video bg-secondary-700 overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                    <i className="ri-play-fill text-white text-2xl ml-0.5"></i>
                  </div>
                  <span className="text-white/40 text-[10px] font-medium">{video.category}</span>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-[10px] font-mono flex items-center gap-1">
                  <i className="ri-time-line text-[9px]"></i>
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white/70 text-[10px] font-medium">
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5 group-hover:text-primary-600 transition-colors duration-300">
                  {video.title}
                </h4>
                <p className="text-foreground-500 text-xs leading-relaxed line-clamp-2 mb-2">{video.description}</p>
                <span className="inline-block px-2 py-0.5 rounded-full bg-accent-100 text-accent-700 text-[10px] font-medium">
                  {video.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video Lightbox */}
      {lightboxId !== null && activeVideo && (
        <div
          className="fixed inset-0 z-[200] bg-black/98 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
          style={{ animation: 'fade-in 0.3s ease-out' }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Close"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>

          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scale-in 0.4s ease-out' }}
          >
            {/* Video Player Area */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              {activeVideo.videoUrl ? (
                <video
                  ref={videoRef}
                  src={activeVideo.videoUrl}
                  className="w-full h-full object-contain"
                  controls={isPlaying}
                  muted={isMuted}
                  playsInline
                />
              ) : activeVideo.embedUrl ? (
                <iframe
                  src={`${activeVideo.embedUrl}?autoplay=0&rel=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={activeVideo.title}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary-700 via-secondary-800 to-secondary-900">
                  {!isPlaying ? (
                    <>
                      <button
                        onClick={handlePlay}
                        className="w-24 h-24 rounded-full bg-primary-500/20 hover:bg-primary-500/40 flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-sm"
                        aria-label="Play video"
                      >
                        <i className="ri-play-fill text-white text-4xl ml-1"></i>
                      </button>
                      <p className="text-white/40 text-sm mt-4">Click to play — video preview</p>
                    </>
                  ) : (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black/40 to-transparent flex items-center px-4">
                        <h4 className="text-white font-heading font-semibold text-sm">{activeVideo.title}</h4>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handlePause}
                          className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-sm"
                          aria-label="Pause"
                        >
                          <i className="ri-pause-fill text-white text-3xl"></i>
                        </button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-between px-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={toggleMute}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer"
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                          >
                            <i className={`text-white text-sm ${isMuted ? 'ri-volume-mute-line' : 'ri-volume-up-line'}`}></i>
                          </button>
                          <button
                            onClick={handleFullscreen}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer"
                            aria-label="Fullscreen"
                          >
                            <i className="ri-fullscreen-line text-white text-sm"></i>
                          </button>
                        </div>
                        <div className="flex-1 mx-4 h-1 rounded-full bg-white/20 overflow-hidden">
                          <div className="h-full w-0 bg-primary-500 rounded-full" />
                        </div>
                        <span className="text-white/60 text-xs font-mono">{activeVideo.duration}</span>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="mt-5 text-center px-2">
              <h3 className="text-white font-heading font-bold text-xl md:text-2xl mb-2">{activeVideo.title}</h3>
              <p className="text-white/50 text-sm max-w-xl mx-auto">{activeVideo.description}</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/40 text-xs">
                  {activeVideo.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/40 text-xs">
                  {activeVideo.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-accent-500/30 text-accent-300 text-xs">
                  {activeVideo.treatment}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
