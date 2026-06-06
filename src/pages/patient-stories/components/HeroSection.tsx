export default function PatientStoriesHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-secondary-600">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Recovered%20patient%20walking%20confidently%20in%20a%20bright%20modern%20hospital%20corridor%2C%20Indian%20orthopedic%20doctor%20in%20white%20coat%20walking%20alongside%20with%20a%20reassuring%20presence%2C%20premium%20healthcare%20environment%2C%20natural%20sunlight%20streaming%20through%20large%20windows%2C%20warm%20and%20hopeful%20atmosphere%2C%20genuine%20recovery%20moment%2C%20medical%20success%20visual%2C%20professional%20yet%20uplifting%20tone&width=1600&height=960&seq=patient-stories-hero-phase3a&orientation=landscape"
          alt="Real Patients. Real Recoveries. Real Results. - Dr. Sagar K V"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/75" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6 reveal">
          <i className="ri-heart-pulse-line text-accent-400 text-sm"></i>
          <span className="text-white/80 text-xs font-medium">Patient Success Stories</span>
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 reveal" style={{ transitionDelay: '100ms' }}>
          Real Patients.{' '}
          <span style={{
            background: 'linear-gradient(135deg, oklch(0.669 0.175 245), oklch(0.65 0.14 200))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Real Recoveries.
          </span>{' '}
          Real Results.
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed reveal" style={{ transitionDelay: '200ms' }}>
          Explore orthopedic success stories, recovery journeys, and treatment outcomes from patients treated by Dr. Sagar K V.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 reveal" style={{ transitionDelay: '300ms' }}>
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
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-50 to-transparent pointer-events-none" />
    </section>
  );
}
