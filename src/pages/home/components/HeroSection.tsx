import { useState, useEffect } from 'react';

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  const trustCards = [
    { icon: 'ri-star-fill', text: '5.0 Rating', sub: '91+ Google Reviews' },
    { icon: 'ri-shield-check-fill', text: '15+ Years', sub: 'Surgical Experience' },
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-secondary-600"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Photorealistic%20premium%20orthopedic%20clinic%20in%20Bangalore%2C%20experienced%20Indian%20orthopedic%20surgeon%20consulting%20a%20patient%2C%20modern%20hospital%20interior%2C%20doctor%20wearing%20white%20coat%20and%20stethoscope%2C%20patient%20discussion%2C%20natural%20daylight%2C%20ultra%20realistic%20healthcare%20photography%2C%20luxury%20medical%20environment%2C%20shallow%20depth%20of%20field%2C%20trust%20building%2C%20professional%20healthcare%20branding%2C%20website%20hero%20banner%2C%2016:9%20wide%20composition%2C%20high-end%20hospital%20marketing%20photography&width=1800&height=1200&seq=phase4-home-hero&orientation=landscape"
          alt="Dr. Sagar K V - Trusted Orthopedic Surgeon in Bangalore"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/75" />
      </div>

      {/* Subtle decorative overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: '35s' }} />
        <div className="absolute bottom-[15%] left-[3%] w-56 h-56 rounded-full bg-primary-500/3 blur-[60px] animate-pulse-glow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center pt-16 md:pt-20">
        {/* Trust Badges Row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-8 md:mb-10 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {trustCards.map((badge, i) => (
            <div
              key={i}
              className="glass-card px-5 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-9 h-9 rounded-full bg-primary-500/20 flex items-center justify-center">
                <i className={`${badge.icon} text-primary-400 text-lg`}></i>
              </div>
              <div className="text-left">
                <div className="text-white font-heading font-bold text-sm">{badge.text}</div>
                <div className="text-white/60 text-xs">{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
          <span
            className={`block transition-all duration-1000 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Fellowship-Trained Joint Replacement
          </span>
          <span
            className={`block mt-2 md:mt-3 transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              background: 'linear-gradient(135deg, oklch(0.669 0.175 245) 0%, oklch(0.65 0.14 210) 70%, oklch(0.72 0.14 210) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: loaded ? 'gradient-shift 4s ease infinite' : 'none',
            }}
          >
            &amp; Trauma Specialist in Bangalore
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-white/70 text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-600 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Advanced orthopaedic care for hip and knee joint replacement, sports injury, trauma, spine problems, pediatric orthopaedics, arthritis and rehabilitation.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mb-12 transition-all duration-1000 delay-800 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="tel:+918197344754"
            className="magnetic w-full sm:w-auto px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold rounded-full text-base transition-all duration-300 glow-primary hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="ri-phone-line text-xl"></i>
            Call Now
          </a>
          <a
            href="https://wa.me/918197344754?text=Hi%20Dr.%20Sagar%2C%20I%20need%20help%20with%20an%20orthopedic%20concern."
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic w-full sm:w-auto px-8 py-4 glass-strong text-white font-heading font-semibold rounded-full text-base transition-all duration-300 hover:bg-white/30 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            WhatsApp
          </a>
          <a
            href="https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic w-full sm:w-auto px-8 py-4 glass text-white/80 font-heading font-medium rounded-full text-base transition-all duration-300 hover:bg-white/20 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="ri-navigation-line text-xl"></i>
            Get Directions
          </a>
        </div>

        {/* Animated scroll indicator */}
        <div
          className={`transition-all duration-1000 delay-[1100ms] ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() => document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-white/40 text-[10px] font-medium tracking-[0.3em] uppercase transition-all duration-300 group-hover:text-white/70">
              Discover More
            </span>
            <div className="relative w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center p-1.5 group-hover:border-white/30 transition-all duration-300">
              <div className="w-1 h-2.5 rounded-full bg-white/50 animate-breathe group-hover:bg-white/80 transition-colors duration-300" />
            </div>
            <div className="flex flex-col gap-1.5 items-center opacity-30 group-hover:opacity-60 transition-opacity duration-300 mt-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-white/50" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background-50 via-background-50/60 to-transparent pointer-events-none" />
    </section>
  );
}
