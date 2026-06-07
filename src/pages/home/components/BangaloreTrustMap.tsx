import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const LOCATIONS = [
  {
    id: 'basavanagudi',
    name: 'South End Speciality Clinic',
    area: 'Basavanagudi',
    address: 'No. 45, South End Road, Basavanagudi, Bangalore 560004',
    timing: 'Mon - Sat: 6 PM - 9 PM',
    x: '38%',
    y: '58%',
    icon: 'ri-building-line',
  },
  {
    id: 'jayanagar',
    name: 'Jayanagar',
    area: 'Jayanagar',
    address: 'Serving patients from Jayanagar and surrounding areas',
    timing: 'Accessible from our Basavanagudi clinic',
    x: '35%',
    y: '60%',
    icon: 'ri-map-pin-line',
    isArea: true,
  },
  {
    id: 'south-bangalore',
    name: 'South Bangalore',
    area: 'South Bangalore',
    address: 'Serving patients from across South Bangalore region',
    timing: 'Accessible from our Basavanagudi clinic',
    x: '38%',
    y: '65%',
    icon: 'ri-map-pin-line',
    isArea: true,
  },
];

export default function BangaloreTrustMap() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <section id="trust-map" className="py-20 md:py-28 bg-secondary-600 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, oklch(1 0 0 / 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-12 md:mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-400 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Reach
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            Trusted Across{' '}
            <span className="text-primary-400">Bangalore</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Patients from across the city trust our Basavanagudi clinic for quality orthopedic care.
          </p>
        </div>

        {/* Map Area */}
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Interactive Map */}
          <div className="relative w-full lg:w-[500px] aspect-[4/3] lg:aspect-[5/4] mx-auto lg:mx-0 shrink-0 bg-secondary-800/50 rounded-3xl border border-white/5 overflow-hidden">
            {/* Abstract Bangalore outline */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Stylized city outline */}
              <svg viewBox="0 0 400 400" className="w-[85%] h-[85%] opacity-20">
                <path
                  d="M120 80 C180 50, 280 60, 320 120 C350 170, 340 250, 300 300 C250 350, 180 340, 140 300 C90 250, 80 160, 120 80Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeDasharray="8 4"
                  className="animate-float-slow"
                />
                <path
                  d="M150 100 C200 70, 260 80, 290 130 C310 170, 300 230, 270 270 C230 310, 180 300, 150 270 C120 230, 110 160, 150 100Z"
                  fill="oklch(0.669 0.175 245 / 0.06)"
                  stroke="oklch(0.669 0.175 245 / 0.2)"
                  strokeWidth="1"
                  className="animate-float-slow"
                  style={{ animationDelay: '2s' }}
                />
              </svg>
            </div>

            {/* City grid lines */}
            <div className="absolute inset-0 opacity-[0.04]">
              {[...Array(6)].map((_, i) => (
                <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${15 + i * 15}%` }} />
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${10 + i * 16}%` }} />
              ))}
            </div>

            {/* Location Pins */}
            {LOCATIONS.map((loc) => {
              const isHovered = hoveredLocation === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setHoveredLocation(isHovered ? null : loc.id)}
                  onMouseEnter={() => setHoveredLocation(loc.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className="absolute z-10 cursor-pointer group/pin"
                  style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
                  aria-label={`Location: ${loc.name}`}
                >
                  {/* Connecting lines to center (for clinics) */}
                  {!loc.isArea && (
                    <svg className="absolute top-1/2 left-1/2 pointer-events-none" style={{ width: '100px', height: '100px', transform: 'translate(-50%, -50%)' }}>
                      <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="50"
                        stroke="oklch(0.669 0.175 245 / 0.3)"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                      />
                    </svg>
                  )}

                  {/* Pin */}
                  <div className={`relative transition-all duration-300 ${isHovered ? 'scale-125' : ''}`}>
                    {/* Outer pulse ring */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                      isHovered
                        ? 'w-12 h-12 bg-primary-500/15 animate-ripple'
                        : 'w-8 h-8 bg-primary-500/5'
                    }`} />

                    {/* Pin dot */}
                    <div className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                      loc.isArea
                        ? 'bg-white/30'
                        : isHovered
                          ? 'bg-primary-400 shadow-lg animate-node-glow'
                          : 'bg-primary-400/70'
                    }`}>
                      {!loc.isArea && (
                        <div className={`absolute inset-0 rounded-full ${isHovered ? 'animate-ping opacity-30 bg-primary-400' : ''}`} />
                      )}
                    </div>

                    {/* Label */}
                    <div className={`absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap transition-all duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <span className={`text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full ${
                        loc.isArea
                          ? 'text-white/50 bg-white/5'
                          : 'text-primary-300 bg-primary-500/10'
                      }`}>
                        {loc.area}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Location Cards */}
          <div className="flex-1 space-y-3">
            {LOCATIONS.filter((l) => !l.isArea).map((loc) => {
              const isHovered = hoveredLocation === loc.id;
              return (
                <div
                  key={loc.id}
                  onMouseEnter={() => setHoveredLocation(loc.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-4 md:p-5 transition-all duration-500 cursor-default ${
                    isHovered
                      ? 'border-primary-400/30 bg-white/10 scale-[1.02]'
                      : 'border-white/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${
                      isHovered ? 'bg-primary-500/30' : 'bg-white/10'
                    }`}>
                      <i className={`${loc.icon} text-lg ${isHovered ? 'text-primary-300' : 'text-white/50'}`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-heading font-semibold text-sm md:text-base transition-colors duration-300 ${
                        isHovered ? 'text-white' : 'text-white/80'
                      }`}>
                        {loc.name}
                      </h3>
                      <p className={`text-xs mt-0.5 transition-colors duration-300 ${
                        isHovered ? 'text-primary-300' : 'text-white/40'
                      }`}>
                        {loc.area}
                      </p>
                      <p className="text-white/30 text-xs mt-2 line-clamp-1">{loc.address}</p>
                      <div className="flex items-center gap-2 mt-2 text-white/30 text-xs">
                        <i className="ri-time-line"></i>
                        <span>{loc.timing}</span>
                      </div>
                    </div>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'bg-primary-500 text-white' : 'bg-white/10 text-white/40 hover:bg-white/20'
                      }`}
                      aria-label={`Directions to ${loc.name}`}
                    >
                      <i className="ri-navigation-line text-sm"></i>
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Service area note */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="ri-road-map-line text-accent-400 text-sm"></i>
                </div>
                <div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Patients visit Dr. Sagar K V from across Bangalore including Jayanagar, Koramangala, Indiranagar, Electronic City, Malleshwaram, and surrounding areas — a testament to the trust and reputation earned over 15+ years of surgical excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-10 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#locations"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-primary-400/40 text-white/70 hover:text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap"
          >
            <i className="ri-map-pin-line"></i>
            View All Clinic Details
          </a>
        </div>
      </div>
    </section>
  );
}
