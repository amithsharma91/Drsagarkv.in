import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const STATS = [
  { value: '91+', label: 'Google Reviews', icon: 'ri-star-fill', color: 'amber' },
  { value: '5.0', label: 'Average Rating', icon: 'ri-emotion-happy-line', color: 'primary' },
  { value: '100%', label: 'Would Recommend', icon: 'ri-thumb-up-line', color: 'accent' },
  { value: '15+', label: 'Years Trusted', icon: 'ri-shield-check-line', color: 'primary' },
];

export default function VideoStatsSection() {
  const statsAnim = useScrollAnimation(0.15);

  return (
    <>
      {/* Review Statistics */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background-100 to-background-50">
        <div ref={statsAnim.ref} className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">By the Numbers</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Review Statistics
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`group bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 text-center transition-all duration-500 hover:border-primary-200 hover:-translate-y-1 ${
                  statsAnim.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  stat.color === 'amber' ? 'bg-amber-50' : stat.color === 'accent' ? 'bg-accent-50' : 'bg-primary-50'
                }`}>
                  <i className={`${stat.icon} text-lg ${
                    stat.color === 'amber' ? 'text-amber-500' : stat.color === 'accent' ? 'text-accent-500' : 'text-primary-500'
                  }`}></i>
                </div>
                <div className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mb-1">{stat.value}</div>
                <div className="text-foreground-500 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="py-16 md:py-20 bg-background-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="relative bg-gradient-to-br from-primary-500 to-accent-600 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white blur-[60px]" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <i className="ri-heart-line text-white text-2xl"></i>
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
                Experience the Care Yourself
              </h2>
              <p className="text-white/70 text-sm max-w-lg mx-auto mb-8">
                Join the hundreds of patients who have trusted Dr. Sagar K V with their orthopedic health.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+918197344754"
                  className="px-8 py-3.5 bg-white text-primary-600 font-heading font-semibold rounded-full text-sm hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </a>
                <a
                  href="https://wa.me/918197344754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-white/15 text-white font-heading font-semibold rounded-full text-sm hover:bg-white/25 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-whatsapp-line mr-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
