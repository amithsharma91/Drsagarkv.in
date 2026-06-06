import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const GALLERY_ITEMS = [
  {
    title: 'Clinic Exterior',
    desc: 'Modern clinic building with easy accessibility',
    icon: 'ri-building-line',
    width: 'lg:col-span-2 lg:row-span-2',
    img: 'https://readdy.ai/api/search-image?query=Luxury%20orthopedic%20clinic%20exterior%20building%20in%20Bangalore%2C%20modern%20medical%20facility%20with%20clean%20architectural%20design%2C%20large%20glass%20windows%2C%20professional%20healthcare%20environment%2C%20bright%20daylight%2C%20landscaped%20entrance%2C%20premium%20hospital%20photography&width=800&height=600&seq=clinic-gallery-ext&orientation=landscape',
  },
  {
    title: 'Reception Area',
    desc: 'Comfortable and welcoming patient waiting area',
    icon: 'ri-customer-service-2-line',
    width: '',
    img: 'https://readdy.ai/api/search-image?query=Modern%20orthopedic%20clinic%20reception%20area%20in%20Bangalore%2C%20clean%20bright%20waiting%20room%20with%20comfortable%20seating%2C%20friendly%20reception%20desk%2C%20professional%20healthcare%20environment%2C%20natural%20lighting%2C%20indoor%20plants%2C%20premium%20medical%20facility&width=600&height=600&seq=clinic-gallery-rec&orientation=landscape',
  },
  {
    title: 'Consultation Room',
    desc: 'Private consultation space with modern diagnostic tools',
    icon: 'ri-stethoscope-line',
    width: '',
    img: 'https://readdy.ai/api/search-image?query=Private%20orthopedic%20consultation%20room%20in%20Bangalore%20clinic%2C%20modern%20medical%20office%20with%20examination%20table%2C%20diplomas%20on%20wall%2C%20clean%20professional%20healthcare%20environment%2C%20warm%20natural%20daylight%20from%20window%2C%20organized%20medical%20workspace&width=600&height=600&seq=clinic-gallery-consult&orientation=landscape',
  },
  {
    title: 'Diagnostic Facilities',
    desc: 'Advanced imaging and diagnostic equipment',
    icon: 'ri-scan-line',
    width: 'lg:col-span-2',
    img: 'https://readdy.ai/api/search-image?query=Modern%20orthopedic%20diagnostic%20facility%20in%20Bangalore%2C%20digital%20X-ray%20machine%20and%20medical%20imaging%20equipment%2C%20clean%20hospital%20environment%2C%20advanced%20healthcare%20technology%2C%20professional%20medical%20setting%2C%20bright%20lighting%2C%20organized%20clinical%20space&width=800&height=500&seq=clinic-gallery-diag&orientation=landscape',
  },
  {
    title: 'Patient Lounge',
    desc: 'Relaxing recovery and waiting lounge for patients & families',
    icon: 'ri-home-heart-line',
    width: '',
    img: 'https://readdy.ai/api/search-image?query=Comfortable%20patient%20recovery%20lounge%20in%20orthopedic%20clinic%20Bangalore%2C%20modern%20seating%20area%20with%20natural%20lighting%2C%20warm%20relaxing%20healthcare%20environment%2C%20indoor%20plants%2C%20magazines%2C%20clean%20professional%20medical%20facility&width=600&height=600&seq=clinic-gallery-lounge&orientation=landscape',
  },
];

export default function ClinicGallery() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 md:py-28 bg-background-50 relative overflow-hidden">
        <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className={`text-center mb-12 md:mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-accent-500 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Our Facilities
            </h4>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
              Experience Our{' '}
              <span className="text-primary-500">Clinic</span>
            </h2>
            <p className="text-foreground-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
              Take a look inside Dr. Sagar K V&apos;s modern, well-equipped orthopedic facility in Basavanagudi, Bangalore.
            </p>
          </div>

          {/* Masonry Gallery Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.width}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative min-h-[220px] md:min-h-[260px] w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end p-5">
                    <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-heading font-semibold text-base mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <i className="ri-zoom-in-line text-white text-sm"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10"
            aria-label="Close lightbox"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>

          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10"
              aria-label="Previous image"
            >
              <i className="ri-arrow-left-s-line text-white text-2xl"></i>
            </button>
          )}
          {lightboxIndex < GALLERY_ITEMS.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10"
              aria-label="Next image"
            >
              <i className="ri-arrow-right-s-line text-white text-2xl"></i>
            </button>
          )}

          <div
            className="max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
              <img
                src={GALLERY_ITEMS[lightboxIndex].img}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center mt-4">
              <h3 className="text-white font-heading font-bold text-2xl md:text-3xl mb-1">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h3>
              <p className="text-white/60 text-base">{GALLERY_ITEMS[lightboxIndex].desc}</p>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4 justify-center">
              {GALLERY_ITEMS.map((item, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                    i === lightboxIndex ? 'ring-2 ring-white scale-110' : 'opacity-50 hover:opacity-80'
                  }`}
                  aria-label={`View ${item.title}`}
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
