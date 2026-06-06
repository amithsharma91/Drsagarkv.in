import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Clinic Reception',
    desc: 'Warm and welcoming reception area at South End Speciality Clinic, Basavanagudi',
    category: 'Reception',
    icon: 'ri-building-line',
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-2 lg:row-span-2',
    imgUrl: 'https://readdy.ai/api/search-image?query=Modern%20medical%20clinic%20reception%20area%20with%20warm%20lighting%2C%20wooden%20reception%20desk%2C%20comfortable%20waiting%20chairs%2C%20indoor%20plants%2C%20clean%20minimalist%20design%2C%20soft%20neutral%20color%20palette%2C%20professional%20healthcare%20environment%2C%20marble%20flooring%2C%20large%20windows%20with%20natural%20light%2C%20friendly%20atmosphere%2C%20orthopedic%20clinic%20setting%20in%20Bangalore&width=800&height=600&seq=gallery-img-01&orientation=landscape',
  },
  {
    id: 2,
    title: 'Consultation Room',
    desc: 'Private consultation space with modern diagnostic equipment',
    category: 'Consultation',
    icon: 'ri-stethoscope-line',
    aspect: 'aspect-[3/4]',
    colSpan: '',
    imgUrl: 'https://readdy.ai/api/search-image?query=Clean%20doctor%20consultation%20room%20with%20examination%20table%2C%20anatomical%20skeleton%20model%2C%20medical%20charts%20on%20wall%2C%20modern%20diagnostic%20screen%2C%20comfortable%20patient%20chair%2C%20soft%20lighting%2C%20professional%20medical%20setting%2C%20warm%20wood%20desk%2C%20organized%20medical%20instruments%2C%20calm%20healing%20atmosphere%2C%20orthopedic%20specialist%20office%20interior&width=600&height=800&seq=gallery-img-02&orientation=portrait',
  },
  {
    id: 3,
    title: 'Patient Waiting Area',
    desc: 'Comfortable patient lounge designed for relaxation before appointments',
    category: 'Patient Care',
    icon: 'ri-home-heart-line',
    aspect: 'aspect-[4/3]',
    colSpan: '',
    imgUrl: 'https://readdy.ai/api/search-image?query=Spacious%20medical%20waiting%20room%20with%20comfortable%20modern%20sofas%2C%20coffee%20table%2C%20reading%20materials%2C%20indoor%20plants%2C%20warm%20ambient%20lighting%2C%20large%20wall%20art%2C%20polished%20floors%2C%20clean%20minimalist%20design%2C%20relaxing%20healthcare%20environment%2C%20magazine%20rack%2C%20water%20dispenser%2C%20natural%20light%20from%20windows&width=800&height=600&seq=gallery-img-03&orientation=landscape',
  },
  {
    id: 4,
    title: 'Surgical Suite',
    desc: 'State-of-the-art operation theatre for orthopedic procedures',
    category: 'Facility',
    icon: 'ri-surgical-mask-line',
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-2',
    imgUrl: 'https://readdy.ai/api/search-image?query=Modern%20surgical%20operating%20room%20with%20bright%20overhead%20lights%2C%20advanced%20medical%20equipment%2C%20sterile%20environment%2C%20surgical%20table%2C%20monitoring%20screens%2C%20clean%20white%20walls%2C%20organized%20surgical%20instruments%2C%20professional%20medical%20setting%2C%20orthopedic%20surgery%20suite%2C%20state-of-the-art%20technology%2C%20bright%20clean%20lighting%2C%20spacious%20operating%20theatre&width=800&height=600&seq=gallery-img-04&orientation=landscape',
  },
  {
    id: 5,
    title: 'Diagnostic Imaging',
    desc: 'Advanced X-ray and diagnostic imaging facilities on premises',
    category: 'Facility',
    icon: 'ri-scan-line',
    aspect: 'aspect-[3/4]',
    colSpan: '',
    imgUrl: 'https://readdy.ai/api/search-image?query=Modern%20medical%20imaging%20room%20with%20digital%20X-ray%20machine%2C%20diagnostic%20screen%20displaying%20bone%20scan%2C%20clean%20white%20walls%2C%20protective%20equipment%2C%20organized%20workspace%2C%20professional%20medical%20environment%2C%20advanced%20radiology%20equipment%2C%20bright%20clinical%20lighting%2C%20orthopedic%20diagnostic%20center&width=600&height=800&seq=gallery-img-05&orientation=portrait',
  },
  {
    id: 6,
    title: 'Physical Therapy Area',
    desc: 'Dedicated rehabilitation and physiotherapy treatment zone',
    category: 'Rehab',
    icon: 'ri-run-line',
    aspect: 'aspect-[4/3]',
    colSpan: '',
    imgUrl: 'https://readdy.ai/api/search-image?query=Physical%20therapy%20rehabilitation%20room%20with%20exercise%20equipment%2C%20therapy%20tables%2C%20resistance%20bands%2C%20balance%20balls%2C%20parallel%20bars%2C%20clean%20bright%20space%2C%20mirrored%20wall%2C%20yoga%20mats%2C%20professional%20physiotherapy%20setting%2C%20modern%20rehab%20facility%2C%20orthopedic%20recovery%20center&width=800&height=600&seq=gallery-img-06&orientation=landscape',
  },
  {
    id: 7,
    title: 'Patient Recovery Room',
    desc: 'Comfortable post-procedure recovery rooms with modern monitoring',
    category: 'Patient Care',
    icon: 'ri-hospital-line',
    aspect: 'aspect-[4/3]',
    colSpan: '',
    imgUrl: 'https://readdy.ai/api/search-image?query=Comfortable%20hospital%20recovery%20room%20with%20adjustable%20bed%2C%20soft%20lighting%2C%20medical%20monitor%2C%20visitor%20chair%2C%20clean%20linens%2C%20window%20with%20natural%20light%2C%20warm%20wall%20color%2C%20healing%20atmosphere%2C%20modern%20healthcare%20facility%2C%20patient-centered%20design%2C%20orthopedic%20recovery%20suite&width=800&height=600&seq=gallery-img-07&orientation=landscape',
  },
  {
    id: 8,
    title: 'Clinic Reception Area',
    desc: 'South End Speciality Clinic main reception — Basavanagudi location',
    category: 'Reception',
    icon: 'ri-customer-service-2-line',
    aspect: 'aspect-[3/4]',
    colSpan: '',
    imgUrl: 'https://readdy.ai/api/search-image?query=Hospital%20reception%20desk%20with%20friendly%20staff%20area%2C%20modern%20counter%2C%20waiting%20chairs%2C%20information%20display%2C%20clean%20bright%20interior%2C%20polished%20floors%2C%20indoor%20plants%2C%20welcoming%20healthcare%20environment%2C%20professional%20medical%20facility%2C%20organized%20front%20desk%2C%20Bangalore%20hospital%20setting&width=600&height=800&seq=gallery-img-08&orientation=portrait',
  },
  {
    id: 9,
    title: 'Doctor Consultation',
    desc: 'Dr. Sagar K V during patient consultation — compassionate care in action',
    category: 'Consultation',
    icon: 'ri-user-heart-line',
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-2',
    imgUrl: 'https://readdy.ai/api/search-image?query=Doctor%20consulting%20with%20patient%20in%20modern%20medical%20office%2C%20professional%20healthcare%20interaction%2C%20warm%20lighting%2C%20medical%20charts%20on%20desk%2C%20anatomical%20model%20in%20background%2C%20friendly%20atmosphere%2C%20orthopedic%20specialist%20examining%20patient%2C%20clean%20professional%20setting%2C%20trusting%20doctor-patient%20relationship%2C%20Indian%20healthcare%20context&width=800&height=600&seq=gallery-img-09&orientation=landscape',
  },
  {
    id: 10,
    title: 'Clinic Exterior',
    desc: 'South End Speciality Clinic building exterior — easy access location',
    category: 'Facility',
    icon: 'ri-building-4-line',
    aspect: 'aspect-[4/3]',
    colSpan: '',
    imgUrl: 'https://readdy.ai/api/search-image?query=Modern%20medical%20clinic%20building%20exterior%20with%20glass%20facade%2C%20clean%20architecture%2C%20accessible%20entrance%2C%20landscaped%20surroundings%2C%20signage%2C%20parking%20area%2C%20bright%20daylight%2C%20professional%20healthcare%20facility%2C%20urban%20Bangalore%20setting%2C%20contemporary%20design%2C%20welcoming%20medical%20center&width=800&height=600&seq=gallery-img-10&orientation=landscape',
  },
  {
    id: 11,
    title: 'Treatment Room',
    desc: 'Well-equipped procedure room for minor orthopedic interventions',
    category: 'Facility',
    icon: 'ri-first-aid-kit-line',
    aspect: 'aspect-[3/4]',
    colSpan: '',
    imgUrl: 'https://readdy.ai/api/search-image?query=Medical%20treatment%20room%20with%20examination%20bed%2C%20medical%20instrument%20tray%2C%20sterilization%20equipment%2C%20clean%20white%20surfaces%2C%20bright%20overhead%20light%2C%20organized%20supplies%2C%20professional%20clinical%20setting%2C%20orthopedic%20procedure%20room%2C%20modern%20healthcare%20facility%2C%20minor%20surgery%20setup&width=600&height=800&seq=gallery-img-11&orientation=portrait',
  },
  {
    id: 12,
    title: 'Patient Registration',
    desc: 'Efficient digital registration and patient records management area',
    category: 'Reception',
    icon: 'ri-file-list-3-line',
    aspect: 'aspect-[4/3]',
    colSpan: '',
    imgUrl: 'https://readdy.ai/api/search-image?query=Medical%20office%20registration%20area%20with%20computer%20workstation%2C%20organized%20files%2C%20modern%20desk%2C%20patient%20records%20system%2C%20clean%20professional%20workspace%2C%20digital%20check-in%20kiosk%2C%20friendly%20lighting%2C%20healthcare%20administration%20setting%2C%20efficient%20medical%20practice%2C%20organized%20front%20office%2C%20Bangalore%20clinic&width=800&height=600&seq=gallery-img-12&orientation=landscape',
  },
];

const CATEGORIES = ['All', 'Reception', 'Consultation', 'Patient Care', 'Facility', 'Rehab'];

export default function MasonryGallery() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const navigate = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const total = filteredImages.length;
    const next = (lightboxIndex + dir + total) % total;
    setLightboxIndex(next);
  };

  return (
    <>
      <section className="py-20 md:py-28 bg-background-50">
        <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Category Filter */}
          <div className={`flex flex-wrap items-center justify-center gap-2 mb-10 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white'
                    : 'bg-background-100 text-foreground-500 hover:bg-background-200 border border-background-200/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className={`columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filteredImages.map((item, i) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(i)}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className={`${item.aspect} relative overflow-hidden`}>
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
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

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <i className="ri-image-line text-6xl text-foreground-200 mb-4 block"></i>
              <p className="text-foreground-400 text-lg">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[200] lightbox-overlay flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxIndex(null)}
          style={{ animation: 'fade-in 0.3s ease-out' }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <i className="ri-arrow-left-s-line text-white text-2xl"></i>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Next image"
          >
            <i className="ri-arrow-right-s-line text-white text-2xl"></i>
          </button>

          {/* Main image */}
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scale-in 0.4s ease-out' }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={filteredImages[lightboxIndex].imgUrl}
                alt={filteredImages[lightboxIndex].title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Info bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2">
              <div>
                <h3 className="text-white font-heading font-bold text-xl md:text-2xl">
                  {filteredImages[lightboxIndex].title}
                </h3>
                <p className="text-white/60 text-sm mt-1">{filteredImages[lightboxIndex].desc}</p>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-xs whitespace-nowrap">
                {filteredImages[lightboxIndex].category}
              </span>
            </div>

            {/* Counter */}
            <div className="text-center mt-2">
              <span className="text-white/40 text-xs">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4 justify-center flex-wrap px-2">
              {filteredImages.map((item, i) => (
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
