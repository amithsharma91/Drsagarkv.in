import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TRUST_ITEMS = [
  { icon: 'ri-star-fill', title: '91+ Google Reviews', detail: 'Consistently rated 5.0 by patients across multiple Google Business profiles — reflecting genuine trust built over 15+ years of practice.' },
  { icon: 'ri-shield-check-fill', title: 'Board-Certified Surgeon', detail: 'DNB Orthopedics certification from the National Board of Examinations — one of India\'s most rigorous surgical qualifications.' },
  { icon: 'ri-hospital-line', title: 'Three Trusted Locations', detail: 'Consulting at well-established hospitals across South Bangalore — accessible care when and where patients need it.' },
  { icon: 'ri-time-line', title: '15+ Years of Dedication', detail: 'Over 15 years of focused orthopedic practice with thousands of successful surgical outcomes and countless lives improved.' },
  { icon: 'ri-chat-smile-2-line', title: 'Clear, Honest Communication', detail: 'Patients consistently appreciate the straightforward explanations, realistic expectations, and transparent approach to treatment decisions.' },
];

const GALLERY_PLACEHOLDERS = [
  { label: 'Doctor Portrait', icon: 'ri-user-3-line', desc: 'Professional Headshot' },
  { label: 'In Consultation', icon: 'ri-chat-3-line', desc: 'With Patient' },
  { label: 'Clinic Environment', icon: 'ri-building-line', desc: 'Consultation Room' },
  { label: 'Surgical Setup', icon: 'ri-surgical-mask-line', desc: 'Operation Theatre' },
  { label: 'Patient Interaction', icon: 'ri-heart-pulse-line', desc: 'Post-Op Care' },
  { label: 'Academic Session', icon: 'ri-presentation-line', desc: 'Conference/Training' },
];

export default function TrustGallery() {
  const trustAnim = useScrollAnimation(0.1);
  const galleryAnim = useScrollAnimation(0.1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      {/* Why Patients Trust */}
      <section className="py-16 md:py-24 bg-background-50">
        <div ref={trustAnim.ref} className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Trust & Credibility</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Why Patients Trust Dr. Sagar
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`group bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 transition-all duration-500 hover:border-primary-200 hover:-translate-y-1 ${
                  trustAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${item.icon} text-amber-500 text-lg`}></i>
                </div>
                <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{item.title}</h4>
                <p className="text-foreground-500 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-background-100">
        <div ref={galleryAnim.ref} className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Professional Gallery</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Photo Gallery
            </h2>
            <p className="text-foreground-400 text-xs mt-2">All photographs represent real clinical environments and facilities.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {GALLERY_PLACEHOLDERS.map((item, i) => (
              <div
                key={i}
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                className={`group relative aspect-square rounded-2xl bg-white border border-background-200/70 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                  galleryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-background-100 to-background-200">
                  <div className="w-14 h-14 rounded-full bg-background-300/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${item.icon} text-foreground-300 text-2xl`}></i>
                  </div>
                  <span className="text-foreground-400 text-xs font-medium">{item.label}</span>
                  <span className="text-foreground-300 text-[10px] mt-1">{item.desc}</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="ri-zoom-in-line text-white text-xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 cursor-pointer z-10"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>

          {GALLERY_PLACEHOLDERS.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + GALLERY_PLACEHOLDERS.length) % GALLERY_PLACEHOLDERS.length); }}
                className="absolute left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 cursor-pointer z-10"
              >
                <i className="ri-arrow-left-line text-white text-xl"></i>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % GALLERY_PLACEHOLDERS.length); }}
                className="absolute right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 cursor-pointer z-10"
              >
                <i className="ri-arrow-right-line text-white text-xl"></i>
              </button>
            </>
          )}

          <div className="w-full max-w-lg aspect-square rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <i className={`${GALLERY_PLACEHOLDERS[lightboxIndex].icon} text-white/40 text-3xl`}></i>
            </div>
            <p className="text-white/60 text-sm font-medium">{GALLERY_PLACEHOLDERS[lightboxIndex].label}</p>
            <p className="text-white/30 text-xs mt-1">{GALLERY_PLACEHOLDERS[lightboxIndex].desc}</p>
            <p className="text-white/20 text-[10px] mt-4">Real photo coming soon</p>
          </div>
        </div>
      )}
    </>
  );
}
