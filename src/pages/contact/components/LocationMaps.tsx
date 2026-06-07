import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const LOCATIONS = [
  {
    id: 'south-end',
    name: 'South End Speciality Clinic',
    area: 'Basavanagudi',
    address: 'No. 45, South End Road, Basavanagudi, Bangalore 560004',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1!2d77.5731!3d12.9516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzA1LjgiTiA3N8KwMzQnMjMuMiJF!5e0!3m2!1sen!2sin!4v1',
    timing: 'Mon - Sat: 6 PM - 9 PM',
    phone: '+91 80508 16686',
    icon: 'ri-building-line',
  },
];

export default function LocationMaps() {
  const { ref, isVisible } = useScrollAnimation(0.03);

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-10 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-accent-500 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Find Us
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900">
            Our Clinic in{' '}
            <span className="text-primary-500">Bangalore</span>
          </h2>
        </div>

        {/* Map + Info */}
        <div className={`transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Map */}
            <div className="flex-1 rounded-2xl overflow-hidden border border-background-200/70 min-h-[350px] md:min-h-[420px]">
              <iframe
                src={LOCATIONS[0].mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${LOCATIONS[0].name} - Google Maps`}
                className="w-full h-full"
              />
            </div>

            {/* Info Panel */}
            <div className="lg:w-[340px] shrink-0">
              <div className="bg-secondary-600 rounded-2xl p-6 md:p-7 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                    <i className={`${LOCATIONS[0].icon} text-primary-400 text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">{LOCATIONS[0].name}</h3>
                    <p className="text-primary-400 text-sm font-medium">{LOCATIONS[0].area}</p>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="ri-map-pin-line text-white/50 text-xs"></i>
                    </div>
                    <p className="text-white/70 text-sm">{LOCATIONS[0].address}</p>
                  </div>

                  {/* Timing */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <i className="ri-time-line text-white/50 text-xs"></i>
                    </div>
                    <p className="text-white/70 text-sm">{LOCATIONS[0].timing}</p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <i className="ri-phone-line text-white/50 text-xs"></i>
                    </div>
                    <a href={`tel:${LOCATIONS[0].phone}`} className="text-primary-400 text-sm hover:text-primary-300 transition-colors duration-200 cursor-pointer">
                      {LOCATIONS[0].phone}
                    </a>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 mt-6 pt-5 border-t border-white/10">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATIONS[0].address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-navigation-line"></i>
                    Get Directions
                  </a>
                  <a
                    href={`tel:${LOCATIONS[0].phone}`}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-phone-line"></i>
                    Call Now
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
