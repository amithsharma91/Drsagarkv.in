import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_IMAGES } from '@/mocks/gallery-images';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FEATURED_INDICES = [0, 1, 3, 6, 9];

export default function ClinicGallerySync() {
  const [lightboxOpen, setLightboxOpen] = useState<number | null>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scroll = useCallback(() => {
    if (!scrollRef.current) return;
    setTimeout(() => {
      if (scrollRef.current) setScrollPos(scrollRef.current.scrollLeft);
    }, 100);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-10 md:mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h4 className="text-accent-500 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Gallery
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Patient Transformations{' '}
            <span className="text-primary-500">&amp; Treatment Highlights</span>
          </h2>
          <p className="text-foreground-500 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Browse treatment journeys, recovery milestones, before-and-after transformations, educational visuals, videos, patient success stories and highlights from Dr. Sagar K V's orthopaedic practice.
          </p>
        </div>

        {/* Desktop Masonry Grid */}
        <div className={`hidden md:grid grid-cols-3 gap-4 md:gap-5 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* First item spans 2 cols */}
          {FEATURED_INDICES.map((idx, i) => {
            const item = GALLERY_IMAGES[idx];
            const isLarge = i === 0 || i === 3;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxOpen(i)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${isLarge ? 'col-span-2' : 'col-span-1'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium tracking-wide mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading font-semibold text-sm md:text-base">{item.title}</h3>
                    <p className="text-white/70 text-xs mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile 2-col Grid */}
        <div className={`md:hidden transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 gap-3">
            {FEATURED_INDICES.map((idx, i) => {
              const item = GALLERY_IMAGES[idx];
              const isFirst = i === 0;
              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxOpen(i)}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer ${isFirst ? 'col-span-2' : 'col-span-1'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[9px] font-medium tracking-wide mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-white font-heading font-semibold text-xs leading-tight">{item.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className={`text-center mt-10 transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer w-full sm:w-auto justify-center"
          >
            View Full Gallery
            <i className="ri-arrow-right-line text-lg"></i>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen !== null && GALLERY_IMAGES[FEATURED_INDICES[lightboxOpen]] && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxOpen(null)}
          style={{ animation: 'fade-in 0.3s ease-out' }}
        >
          <button
            onClick={() => setLightboxOpen(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10"
            aria-label="Close lightbox"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={GALLERY_IMAGES[FEATURED_INDICES[lightboxOpen]].imgUrl}
                alt={GALLERY_IMAGES[FEATURED_INDICES[lightboxOpen]].title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="mt-4 px-2">
              <h3 className="text-white font-heading font-bold text-xl">{GALLERY_IMAGES[FEATURED_INDICES[lightboxOpen]].title}</h3>
              <p className="text-white/60 text-sm mt-1">{GALLERY_IMAGES[FEATURED_INDICES[lightboxOpen]].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
