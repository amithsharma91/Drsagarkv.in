export default function PaediatricOrthopaedicsHero() {
  return (
    <section className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden bg-secondary-600">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Pediatric%20orthopedic%20doctor%20examining%20young%20child%20patient%20in%20bright%20modern%20medical%20clinic%2C%20compassionate%20care%2C%20colorful%20cheerful%20healthcare%20environment%2C%20Indian%20doctor%20with%20child%2C%20friendly%20medical%20consultation%2C%20natural%20light%2C%20clean%20professional%20pediatric%20clinic%2C%20warm%20atmosphere&width=1600&height=900&seq=paed-ortho-hero&orientation=landscape"
          alt="Paediatric Orthopaedics - Dr. Sagar K V Bangalore"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/80" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 w-full py-16 md:py-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6">
          <i className="ri-user-smile-line text-primary-300 text-sm"></i>
          <span className="text-white/80 text-sm font-medium tracking-wide">Paediatric Orthopaedics</span>
        </div>
        <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4">
          Expert <span className="text-primary-400">Paediatric Orthopaedic</span> Care
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Specialized orthopaedic care for children with bone, joint, muscle and growth-related conditions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="tel:+918197344754" className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
            <i className="ri-phone-line"></i>Call Now
          </a>
          <a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
            <i className="ri-whatsapp-line"></i>WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-50 to-transparent pointer-events-none" />
    </section>
  );
}
