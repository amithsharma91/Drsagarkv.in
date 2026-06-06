export default function ReviewsHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-secondary-600">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Recovered%20patient%20smiling%20and%20shaking%20hands%20with%20Indian%20orthopedic%20surgeon%2C%20successful%20treatment%20outcome%2C%20premium%20hospital%20setting%2C%20positive%20healthcare%20experience%2C%20emotional%20trust%20building%20image%2C%20realistic%20photography%2C%20website%20hero%20banner%2C%2016:9&width=1600&height=960&seq=phase4-reviews-hero&orientation=landscape"
          alt="Real Patient Experiences - Dr. Sagar K V"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/75" />
      </div>

      {/* Decorative overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-56 h-56 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: '32s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6 reveal">
          <i className="ri-star-fill text-amber-400 text-sm"></i>
          <span className="text-white/80 text-xs font-medium">5.0 Rating • 91+ Google Reviews</span>
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 reveal" style={{ transitionDelay: '100ms' }}>
          Real Patient{' '}
          <span style={{
            background: 'linear-gradient(135deg, oklch(0.669 0.175 245), oklch(0.65 0.14 210))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Experiences
          </span>
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed reveal" style={{ transitionDelay: '200ms' }}>
          Discover how patients have regained mobility and improved their quality of life under Dr. Sagar's care.
        </p>

        <div className="flex items-center justify-center gap-8 reveal" style={{ transitionDelay: '300ms' }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-amber-400 text-xl"></i>
              ))}
            </div>
            <span className="text-white/60 text-xs">Google Rating</span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-white font-heading font-bold text-2xl">91+</div>
            <span className="text-white/60 text-xs">Verified Reviews</span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-white font-heading font-bold text-2xl">15+</div>
            <span className="text-white/60 text-xs">Years Trusted</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 reveal" style={{ transitionDelay: '400ms' }}>
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
