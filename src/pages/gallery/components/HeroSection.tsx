import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MAPS_URL = 'https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center overflow-hidden bg-secondary-600">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Luxury%20orthopedic%20clinic%20interior%20in%20Bangalore%2C%20doctor%20walking%20through%20facility%2C%20modern%20reception%20area%2C%20consultation%20rooms%20visible%2C%20premium%20healthcare%20architecture%2C%20warm%20natural%20lighting%2C%20real%20hospital%20environment%2C%20ultra%20realistic%20photography%2C%20website%20hero%20banner%2C%2016:9&width=1600&height=1040&seq=phase4-gallery-hero&orientation=landscape"
          alt="Dr. Sagar K V Clinic & Recovery Gallery"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/80" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full border border-white/8 animate-spin-slow" />
        <div className="absolute bottom-[15%] right-[8%] w-48 h-48 rounded-full border border-primary-400/15 animate-float-slow" />
        <div className="absolute top-[35%] right-[20%] w-32 h-32 rounded-full bg-primary-500/5 blur-[40px] animate-pulse-glow" />
      </div>

      <div ref={ref} className="relative z-10 text-center px-4 md:px-8 w-full">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6">
            <i className="ri-camera-line text-primary-300 text-sm"></i>
            <span className="text-white/80 text-sm font-medium tracking-wide">Inside Our Facilities</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4">
            Inside Our <span className="text-primary-400">Orthopedic Facilities</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Explore our clinic facilities, recovery journeys, before-and-after X-rays, treatment videos, and patient case studies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+918197344754"
              className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <i className="ri-phone-line"></i>
              Call Now
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <i className="ri-navigation-line"></i>
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-50 to-transparent" />
    </section>
  );
}
