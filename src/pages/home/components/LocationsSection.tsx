import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MAPS_URL = 'https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac';

export default function LocationsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="locations" className="py-20 md:py-28 bg-background-100">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-accent-500 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Visit Us
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Our{' '}
            <span className="text-primary-500">Clinic</span> Location
          </h2>
          <p className="text-foreground-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Visit our primary clinic at South End Speciality Clinic, Basavanagudi, Bangalore
          </p>
        </div>

        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map */}
            <div className="flex-1 rounded-2xl overflow-hidden border border-background-200/70 min-h-[350px] md:min-h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1!2d77.5731!3d12.9516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzA1LjgiTiA3N8KwMzQnMjMuMiJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="South End Speciality Clinic - Google Maps"
                className="w-full h-full"
              />
            </div>

            {/* Info Panel */}
            <div className="lg:w-[360px] shrink-0">
              <div className="bg-secondary-600 rounded-2xl p-6 md:p-7 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                    <i className="ri-building-line text-primary-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">South End Speciality Clinic</h3>
                    <p className="text-primary-400 text-sm font-medium">Basavanagudi, Bangalore</p>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="ri-map-pin-line text-white/50 text-xs"></i>
                    </div>
                    <p className="text-white/70 text-sm">No. 45, South End Road, Basavanagudi, Bangalore 560004</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <i className="ri-map-pin-2-line text-white/50 text-xs"></i>
                    </div>
                    <p className="text-white/50 text-sm">WHPG+QR Bengaluru, Karnataka</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <i className="ri-time-line text-white/50 text-xs"></i>
                    </div>
                    <p className="text-white/70 text-sm">Mon - Sat: 9 AM - 7 PM</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <i className="ri-phone-line text-white/50 text-xs"></i>
                    </div>
                    <a href="tel:+918197344754" className="text-primary-400 text-sm hover:text-primary-300 transition-colors duration-200 cursor-pointer">
                      +91 81973 44754
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-6 pt-5 border-t border-white/10">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-navigation-line"></i>
                    Get Directions
                  </a>
                  <a
                    href="tel:+918197344754"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-phone-line"></i>
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/918197344754"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-whatsapp-line"></i>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
