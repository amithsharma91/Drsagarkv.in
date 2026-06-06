export default function TreatmentsHero() {
  return (
    <section className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden bg-secondary-600">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Indian%20orthopedic%20surgeon%20reviewing%20digital%20X-rays%20with%20patient%2C%20modern%20consultation%20room%2C%20advanced%20orthopedic%20treatment%20discussion%2C%20premium%20hospital%20environment%2C%20realistic%20healthcare%20photography%2C%20professional%20doctor-patient%20interaction%2C%20trust%20and%20expertise%2C%20website%20hero%20banner%2C%2016:9&width=1600&height=960&seq=phase4-treatments-hero&orientation=landscape"
          alt="Orthopedic Treatments & Procedures - Dr. Sagar K V"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/80" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-6 reveal">
          <i className="ri-stethoscope-line text-primary-400 text-sm"></i>
          <span className="text-white/80 text-xs font-medium tracking-wide">Orthopedic Treatments</span>
        </div>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 reveal" style={{ transitionDelay: '100ms' }}>
          Orthopedic Treatments{' '}
          <span style={{
            background: 'linear-gradient(135deg, oklch(0.669 0.175 245), oklch(0.65 0.14 210))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            & Procedures
          </span>
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto reveal" style={{ transitionDelay: '200ms' }}>
          Comprehensive orthopedic care spanning joint replacement, sports injuries, trauma surgery, and rehabilitation — all delivered with expertise and compassion.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-50 to-transparent pointer-events-none" />
    </section>
  );
}
