export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-secondary-600">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20experienced%20Indian%20orthopedic%20surgeon%20standing%20confidently%20inside%20a%20modern%20hospital%2C%20white%20coat%2C%20premium%20healthcare%20environment%2C%20natural%20lighting%2C%20medical%20excellence%2C%20approachable%20and%20trustworthy%20expression%2C%20clean%20background%2C%20luxury%20healthcare%20branding%2C%20website%20hero%20image%2C%20ultra%20realistic%20photography%2C%2016:9&width=1600&height=1100&seq=phase4-about-hero&orientation=landscape"
          alt="Meet Dr. Sagar K V - Fellowship-Trained Joint Replacement & Trauma Specialist"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/75" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] right-[8%] w-64 h-64 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: '30s' }} />
        <div className="absolute bottom-[12%] left-[5%] w-48 h-48 rounded-full bg-primary-500/5 blur-[60px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6">
              <i className="ri-user-heart-line text-primary-400 text-sm"></i>
              <span className="text-white/80 text-xs font-medium tracking-wide">Meet Your Surgeon</span>
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4">
              Meet Dr. Sagar K V
            </h1>
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 justify-center lg:justify-start">
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-[10px] md:text-xs font-medium whitespace-nowrap">MBBS</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-[10px] md:text-xs font-medium whitespace-nowrap">D&apos;Ortho</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-[10px] md:text-xs font-medium whitespace-nowrap">DNB Orthopedics</span>
              <span className="px-3 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-[10px] md:text-xs font-semibold whitespace-nowrap">Fellowship-Trained</span>
            </div>
            <p className="text-white/60 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Fellowship-trained joint replacement &amp; trauma specialist dedicated to restoring movement through advanced orthopedic care and personalized treatment plans.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="tel:+918197344754"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold rounded-full text-sm transition-all duration-300 glow-primary hover:scale-105 whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <i className="ri-phone-line"></i>
                Call Now
              </a>
              <a
                href="https://wa.me/918197344754"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass-strong text-white font-heading font-semibold rounded-full text-sm transition-all duration-300 hover:bg-white/30 whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <i className="ri-whatsapp-line"></i>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Doctor image */}
          <div className="flex-shrink-0 reveal reveal-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-white/15">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Indian%20orthopedic%20surgeon%20in%20white%20coat%2C%20confident%20and%20approachable%20expression%2C%20clean%20modern%20hospital%20background%2C%20medical%20professional%20headshot%2C%20warm%20natural%20lighting%2C%20trustworthy%20demeanor%2C%20luxury%20healthcare%20portrait%2C%20square%20composition&width=800&height=800&seq=phase4-about-portrait&orientation=squarish"
                  alt="Dr. Sagar K V - Fellowship-Trained Orthopedic Surgeon Bangalore"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-[28px] border border-primary-400/20 -z-10 animate-spin-slow" style={{ animationDuration: '25s' }} />
              <div className="absolute -inset-8 rounded-[32px] border border-accent-400/10 -z-10 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-50 to-transparent pointer-events-none" />
    </section>
  );
}
