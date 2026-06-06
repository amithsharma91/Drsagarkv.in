import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const VIDEO_CATEGORIES = ['All', 'Walking Recovery', 'Stair Climbing', 'Sports Recovery', 'Range of Motion', 'Post-Surgery Mobility'];

const VIDEOS = [
  {
    id: 'vid-1',
    category: 'Walking Recovery',
    title: 'Walking Independently After Knee Replacement',
    description: 'Patient demonstrates confident independent walking at 6-week post-operative follow-up.',
    duration: '2:14',
    thumbnailLabel: 'Walking Recovery Video Placeholder',
  },
  {
    id: 'vid-2',
    category: 'Stair Climbing',
    title: 'Stair Navigation After Hip Surgery',
    description: 'Patient climbs stairs without support 8 weeks after total hip replacement.',
    duration: '1:48',
    thumbnailLabel: 'Stair Climbing Video Placeholder',
  },
  {
    id: 'vid-3',
    category: 'Sports Recovery',
    title: 'Return to Running After ACL Surgery',
    description: 'Athlete demonstrates running form at 6-month clearance following ACL reconstruction.',
    duration: '3:05',
    thumbnailLabel: 'Sports Recovery Video Placeholder',
  },
  {
    id: 'vid-4',
    category: 'Range of Motion',
    title: 'Shoulder Mobility Progress',
    description: 'Full overhead range of motion restored after arthroscopic rotator cuff repair at Week 12.',
    duration: '1:32',
    thumbnailLabel: 'Range of Motion Video Placeholder',
  },
  {
    id: 'vid-5',
    category: 'Post-Surgery Mobility',
    title: 'Day 1 Post-Op Mobilization',
    description: 'Patient stands and takes first steps with physiotherapist support within 24 hours of knee replacement.',
    duration: '1:15',
    thumbnailLabel: 'Post-Surgery Mobility Placeholder',
  },
  {
    id: 'vid-6',
    category: 'Walking Recovery',
    title: 'Fracture Recovery Walking Progress',
    description: 'Progressive walking improvement from Week 2 to Week 12 after ankle fracture fixation.',
    duration: '2:42',
    thumbnailLabel: 'Fracture Recovery Video Placeholder',
  },
];

export default function RecoveryVideoGallery() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filteredVideos = activeCategory === 'All'
    ? VIDEOS
    : VIDEOS.filter((v) => v.category === activeCategory);

  const activeVideo = VIDEOS.find((v) => v.id === lightboxId);

  return (
    <>
      <section ref={sectionRef} className="w-full py-16 md:py-20 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className={`text-center mb-10 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4 tracking-wide">
              RECOVERY VIDEOS
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950 mb-4">
              Recovery <span className="text-accent-500">Video Gallery</span>
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Watch real patient recovery milestones — from first steps to full return to activity.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {VIDEO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-accent-500 text-white'
                    : 'bg-background-50 border border-background-200 text-foreground-500 hover:bg-background-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl border border-background-200 overflow-hidden group cursor-pointer hover:border-accent-200 hover:-translate-y-1 transition-all duration-300"
                onClick={() => setLightboxId(video.id)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-secondary-700 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-accent-500 transition-colors duration-300">
                      <i className="ri-play-fill text-white text-2xl ml-0.5"></i>
                    </div>
                    <span className="text-white/50 text-[10px] font-medium">{video.thumbnailLabel}</span>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-[10px] font-mono">
                    <i className="ri-time-line mr-1 text-[9px]"></i>
                    {video.duration}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/70 text-[10px] font-medium">
                    {video.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5 group-hover:text-accent-600 transition-colors duration-300">
                    {video.title}
                  </h4>
                  <p className="text-foreground-500 text-xs leading-relaxed line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-movie-line text-5xl text-foreground-200 mb-4 block"></i>
              <p className="text-foreground-400 text-sm">No videos in this category yet.</p>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-50 border border-background-200">
              <i className="ri-information-line text-foreground-400 text-xs"></i>
              <span className="text-foreground-400 text-[11px]">Patient recovery videos for educational purposes. Consult Dr. Sagar for personalized guidance.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxId !== null && activeVideo && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxId(null)}
          style={{ animation: 'fade-in 0.3s ease-out' }}
        >
          <button
            onClick={() => setLightboxId(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scale-in 0.4s ease-out' }}
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-secondary-800 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <i className="ri-play-fill text-white text-3xl ml-0.5"></i>
              </div>
              <p className="text-white/50 text-sm font-medium mb-1">{activeVideo.thumbnailLabel}</p>
              <p className="text-white/30 text-xs">Video available in clinic</p>
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
