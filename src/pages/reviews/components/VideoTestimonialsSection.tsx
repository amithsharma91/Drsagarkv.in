import { useState, useRef, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const VIDEO_TESTIMONIALS = [
  {
    id: 'vid-1',
    title: 'Knee Replacement Recovery Journey',
    patient: 'Ramesh, 62',
    duration: '2:14',
    type: 'Recovery Stories',
    thumbnail: 'https://readdy.ai/api/search-image?query=Senior%20Indian%20man%20walking%20confidently%20in%20a%20park%20with%20walking%20stick%20after%20successful%20knee%20replacement%20surgery%2C%20happy%20smiling%20elderly%20patient%2C%20green%20trees%20background%2C%20recovery%20success%20story%2C%20realistic%20photography&width=800&height=450&seq=review-vid-1&orientation=landscape',
    videoUrl: '',
  },
  {
    id: 'vid-2',
    title: 'Hip Replacement – Walking Pain-Free Again',
    patient: 'Lakshmi, 58',
    duration: '1:48',
    type: 'Treatment Experiences',
    thumbnail: 'https://readdy.ai/api/search-image?query=Middle-aged%20Indian%20woman%20walking%20happily%20on%20a%20garden%20path%20after%20hip%20replacement%2C%20post-surgery%20mobility%20recovery%2C%20bright%20sunny%20day%2C%20joyful%20patient%20testimonial%20moment%2C%20realistic%20photography&width=800&height=450&seq=review-vid-2&orientation=landscape',
    videoUrl: '',
  },
  {
    id: 'vid-3',
    title: 'Sports Injury — Back to Running',
    patient: 'Arjun, 28',
    duration: '2:32',
    type: 'Success Stories',
    thumbnail: 'https://readdy.ai/api/search-image?query=Young%20Indian%20athlete%20jogging%20on%20a%20track%20after%20recovering%20from%20sports%20injury%20knee%20treatment%2C%20active%20lifestyle%20recovery%2C%20stadium%20background%20morning%20light%2C%20fitness%20comeback%20story%2C%20realistic%20photography&width=800&height=450&seq=review-vid-3&orientation=landscape',
    videoUrl: '',
  },
  {
    id: 'vid-4',
    title: 'Walking Recovery After Fracture Care',
    patient: 'Meenakshi, 45',
    duration: '1:56',
    type: 'Walking Recovery',
    thumbnail: 'https://readdy.ai/api/search-image?query=Indian%20woman%20walking%20normally%20again%20after%20leg%20fracture%20recovery%2C%20post-treatment%20mobility%20restored%2C%20comfortable%20home%20environment%2C%20grateful%20patient%20sharing%20experience%2C%20realistic%20photography&width=800&height=450&seq=review-vid-4&orientation=landscape',
    videoUrl: '',
  },
  {
    id: 'vid-5',
    title: 'Arthritis Pain Relief — Patient Feedback',
    patient: 'Venkatesh, 55',
    duration: '2:05',
    type: 'Patient Feedback',
    thumbnail: 'https://readdy.ai/api/search-image?query=Indian%20man%20sitting%20comfortably%20at%20home%20showing%20thumbs%20up%20after%20arthritis%20treatment%20pain%20relief%2C%20happy%20senior%20patient%2C%20natural%20home%20lighting%2C%20genuine%20satisfaction%20expression%2C%20realistic%20photography&width=800&height=450&seq=review-vid-5&orientation=landscape',
    videoUrl: '',
  },
  {
    id: 'vid-6',
    title: 'Shoulder Surgery — Full Recovery Story',
    patient: 'Priya, 34',
    duration: '3:10',
    type: 'Recovery Stories',
    thumbnail: 'https://readdy.ai/api/search-image?query=Indian%20woman%20raising%20arm%20overhead%20happily%20after%20successful%20shoulder%20surgery%20recovery%2C%20full%20range%20of%20motion%20restored%2C%20bright%20modern%20clinic%20setting%2C%20emotional%20recovery%20milestone%2C%20realistic%20photography&width=800&height=450&seq=review-vid-6&orientation=landscape',
    videoUrl: '',
  },
];

export default function VideoTestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  const handlePlay = useCallback((videoId: string) => {
    const currentPlaying = videoRefs.current.get(playingId || '');
    if (currentPlaying && playingId !== videoId) {
      currentPlaying.pause();
    }
    const video = videoRefs.current.get(videoId);
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingId(videoId);
      } else {
        video.pause();
        setPlayingId(null);
      }
    } else {
      // If no video element exists (image-only thumbnail), just show visual feedback
      setPlayingId(videoId);
      setTimeout(() => setPlayingId(null), 1500);
    }
  }, [playingId]);

  return (
    <section className="py-16 md:py-24 bg-background-100">
      <div ref={ref} className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-red-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">
            Patient Video Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
            Hear Directly From Our Patients
          </h2>
          <p className="text-foreground-500 text-sm mt-3 max-w-2xl mx-auto">
            Watch real patient experiences, recovery journeys and treatment outcomes shared by patients treated by Dr. Sagar K V.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <div
              key={video.id}
              className={`group relative bg-white border border-background-200/70 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary-200 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => handlePlay(video.id)}
            >
              {/* Thumbnail / Video */}
              <div className="relative aspect-video bg-secondary-600 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Duration badge */}
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-medium">
                  {video.duration}
                </span>

                {/* Play button overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  playingId === video.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                    <i className={`text-2xl md:text-3xl text-secondary-700 ml-1 ${playingId === video.id ? 'ri-pause-fill' : 'ri-play-fill'}`}></i>
                  </div>
                </div>

                {/* Playing indicator */}
                {playingId === video.id && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-red-500 text-white text-[10px] font-semibold animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Now Playing
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="inline-block px-2.5 py-1 rounded-full bg-accent-50 text-accent-600 text-[10px] font-medium mb-2">
                  {video.type}
                </span>
                <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-1 leading-snug">
                  {video.title}
                </h3>
                <p className="text-foreground-400 text-xs">{video.patient}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
