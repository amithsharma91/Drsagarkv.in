import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MAPS_URL = 'https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac';

export default function EmergencySection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="emergency" className="py-16 md:py-20 bg-secondary-600 relative overflow-hidden">
      {/* Pulse animation background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, oklch(0.669 0.175 245 / 0.5) 0%, transparent 70%)',
            animation: 'breathe 3s ease-in-out infinite',
          }}
        />
      </div>

      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Alert icon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-semibold tracking-widest uppercase">24/7 Emergency Care</span>
          </div>

          <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Orthopedic{' '}
            <span className="text-red-400">Emergency</span>?
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Fractures, dislocations, sports injuries and trauma cases can be assessed immediately at South End Speciality Clinic, Basavanagudi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918197344754"
              className="group px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-heading font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center gap-3 cursor-pointer"
            >
              <i className="ri-phone-fill text-2xl animate-pulse"></i>
              <span>Call Dr. Sagar</span>
            </a>
            <a
              href="tel:+918050816686"
              className="group px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-heading font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center gap-3 cursor-pointer"
            >
              <i className="ri-building-line text-2xl"></i>
              <span>Call Hospital</span>
            </a>
            <a
              href="https://wa.me/918197344754?text=Hi%20Dr.%20Sagar%2C%20I%20have%20an%20orthopedic%20emergency."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-500/20 hover:bg-emerald-500/30 text-white font-heading font-semibold rounded-full text-lg border border-emerald-500/30 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              WhatsApp
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold rounded-full text-lg border border-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <i className="ri-navigation-line text-xl"></i>
              Get Directions
            </a>
          </div>

          <p className="text-white/40 text-sm mt-6">
            For life-threatening emergencies, please dial 108 or visit your nearest hospital immediately.
          </p>
        </div>
      </div>
    </section>
  );
}
