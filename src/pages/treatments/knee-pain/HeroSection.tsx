export default function KneePainHero() {
  return (
    <section className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden bg-secondary-600">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Indian%20orthopedic%20surgeon%20examining%20patient%20knee%20joint%20during%20consultation%2C%20modern%20orthopedic%20clinic%2C%20realistic%20healthcare%20photography%2C%20professional%20diagnosis%2C%20website%20hero%20image%2C%2016:9&width=1600&height=960&seq=phase4-knee-pain-hero&orientation=landscape"
          alt="Knee Pain Treatment - Dr. Sagar K V"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/80" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[12%] right-[10%] w-40 h-40 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: '28s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6 reveal">
          <i className="ri-kick-line text-amber-400 text-sm"></i>
          <span className="text-white/80 text-xs font-medium tracking-wide">Knee Pain Treatment</span>
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 reveal" style={{ transitionDelay: '100ms' }}>
          Knee Pain{' '}
          <span className="text-amber-400">Treatment</span>
        </h1>

        <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto mb-6 reveal" style={{ transitionDelay: '200ms' }}>
          From climbing stairs without wincing to walking comfortably again — comprehensive knee pain diagnosis and treatment tailored to your life.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8 reveal" style={{ transitionDelay: '300ms' }}>
          <div className="text-center">
            <span className="block font-heading font-bold text-3xl text-amber-300">98%</span>
            <span className="text-white/45 text-xs">Success Rate</span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <span className="block font-heading font-bold text-3xl text-amber-300">3000+</span>
            <span className="text-white/45 text-xs">Knee Surgeries</span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <span className="block font-heading font-bold text-3xl text-amber-300">15+</span>
            <span className="text-white/45 text-xs">Years Experience</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 reveal" style={{ transitionDelay: '400ms' }}>
          <a href="tel:+918197344754" className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
            <i className="ri-phone-line"></i>Call Now
          </a>
          <a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
            <i className="ri-whatsapp-line"></i>WhatsApp
          </a>
          <a href="https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-heading font-medium text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
            <i className="ri-navigation-line"></i>Get Directions
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-50 to-transparent pointer-events-none" />
    </section>
  );
}
