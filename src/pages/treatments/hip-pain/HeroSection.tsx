export default function HipPainHero() {
  return (
    <section className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden bg-secondary-600">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Orthopedic%20doctor%20examining%20patient%20hip%20mobility%20in%20modern%20clinic%2C%20hip%20pain%20diagnosis%20consultation%2C%20Indian%20orthopedic%20surgeon%20performing%20physical%20examination%2C%20professional%20healthcare%20setting%2C%20realistic%20medical%20photography%2C%2016:9&width=1600&height=960&seq=phase6-hip-pain-hero&orientation=landscape"
          alt="Hip Pain Treatment - Dr. Sagar K V"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/80" />
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6 reveal">
          <i className="ri-walk-line text-sky-400 text-sm"></i>
          <span className="text-white/80 text-xs font-medium tracking-wide">Hip Pain Treatment</span>
        </div>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 reveal" style={{ transitionDelay: '100ms' }}>
          Hip Pain{' '}
          <span className="text-sky-400">Treatment</span>
        </h1>
        <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto mb-6 reveal" style={{ transitionDelay: '200ms' }}>
          Accurate diagnosis and comprehensive treatment for hip pain — from conservative management to advanced surgical solutions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8 reveal" style={{ transitionDelay: '300ms' }}>
          <div className="text-center"><span className="block font-heading font-bold text-3xl text-sky-300">15+</span><span className="text-white/45 text-xs">Years Experience</span></div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center"><span className="block font-heading font-bold text-3xl text-sky-300">5000+</span><span className="text-white/45 text-xs">Patients Treated</span></div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center"><span className="block font-heading font-bold text-3xl text-sky-300">5.0</span><span className="text-white/45 text-xs">Rating</span></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 reveal" style={{ transitionDelay: '400ms' }}>
          <a href="tel:+918197344754" className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"><i className="ri-phone-line"></i>Call Now</a>
          <a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"><i className="ri-whatsapp-line"></i>WhatsApp</a>
          <a href="https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-heading font-medium text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"><i className="ri-navigation-line"></i>Get Directions</a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-50 to-transparent pointer-events-none" />
    </section>
  );
}
