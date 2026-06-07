import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MAPS_URL = 'https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac';

const CONTACT_CARDS = [
  {
    icon: 'ri-phone-line',
    title: 'Call Dr. Sagar K V',
    detail: '+91 81973 44754',
    sub: 'Available Mon–Sat, 6 PM – 9 PM',
    href: 'tel:+918197344754',
    btnLabel: 'Call Now',
    color: 'primary',
  },
  {
    icon: 'ri-whatsapp-line',
    title: 'WhatsApp Appointment',
    detail: '+91 81973 44754',
    sub: 'Direct Consultation & Appointment Booking',
    href: 'https://wa.me/918197344754?text=Hi%20Dr.%20Sagar%2C%20I%20would%20like%20to%20book%20an%20appointment.',
    btnLabel: 'Chat Now',
    color: 'emerald',
  },
  {
    icon: 'ri-building-line',
    title: 'Hospital Reception',
    detail: '+91 80508 16686',
    sub: 'South End Speciality Clinic',
    href: 'tel:+918050816686',
    btnLabel: 'Call Reception',
    color: 'accent',
  },
];

export default function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {CONTACT_CARDS.map((card, i) => {
            const isEmerald = card.color === 'emerald';
            const isPrimary = card.color === 'primary';
            const isAccent = card.color === 'accent';

            return (
              <a
                key={i}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative overflow-hidden rounded-2xl border border-background-200/70 bg-background-50 p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                  isEmerald ? 'hover:border-emerald-300/60' : isPrimary ? 'hover:border-primary-300/60' : 'hover:border-accent-300/60'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 ${
                  isEmerald ? 'bg-emerald-100' : isPrimary ? 'bg-primary-100' : 'bg-accent-100'
                }`}>
                  <i className={`${card.icon} text-xl ${
                    isEmerald ? 'text-emerald-600' : isPrimary ? 'text-primary-600' : 'text-accent-600'
                  }`}></i>
                </div>

                <h3 className="font-heading font-bold text-foreground-900 text-base mb-2">{card.title}</h3>
                <p className="text-foreground-700 font-semibold text-lg mb-1">{card.detail}</p>
                <p className="text-foreground-400 text-sm mb-5">{card.sub}</p>

                <span className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  isEmerald
                    ? 'bg-emerald-500 text-white group-hover:bg-emerald-600'
                    : isPrimary
                      ? 'bg-primary-500 text-white group-hover:bg-primary-600'
                      : 'bg-accent-500 text-white group-hover:bg-accent-600'
                }`}>
                  {card.btnLabel}
                  <i className="ri-arrow-right-line"></i>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
