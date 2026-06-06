import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-[380px] md:min-h-[460px] flex items-center justify-center overflow-hidden bg-secondary-600">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Indian%20orthopedic%20surgeon%20welcoming%20patient%20at%20modern%20clinic%20reception%2C%20premium%20healthcare%20facility%2C%20warm%20professional%20atmosphere%2C%20trust%20building%20medical%20environment%2C%20realistic%20hospital%20photography%2C%20website%20hero%20banner%2C%2016:9&width=1600&height=920&seq=phase4-contact-hero&orientation=landscape"
          alt="Contact Dr. Sagar K V - Orthopedic Surgeon Bangalore"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/80" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full border border-white/5 animate-spin-slow" />
        <div className="absolute bottom-[25%] right-[12%] w-36 h-36 rounded-full bg-primary-500/6 blur-[50px] animate-pulse-glow" />
      </div>

      <div ref={ref} className="relative z-10 text-center px-4 md:px-8 w-full">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6">
            <i className="ri-phone-line text-primary-300 text-sm"></i>
            <span className="text-white/80 text-sm font-medium tracking-wide">Get In Touch</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4">
            Contact{' '}
            <span className="text-primary-400">Dr. Sagar K V</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Call or WhatsApp us for orthopedic consultations and assistance.
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
              href="https://wa.me/918197344754"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <i className="ri-whatsapp-line"></i>
              WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-heading font-medium text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"
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
