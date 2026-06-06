import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TRUST_ITEMS = [
  { label: '★★★★★ 5.0 Rating', icon: 'ri-star-fill' },
  { label: '91+ Google Reviews', icon: 'ri-google-fill' },
  { label: '15+ Years Experience', icon: 'ri-shield-check-fill' },
  { label: '3 Bangalore Locations', icon: 'ri-map-pin-line' },
  { label: '5000+ Patients Treated', icon: 'ri-heart-pulse-line' },
  { label: '₹700 Consultation Fee', icon: 'ri-price-tag-3-line' },
];

export default function TrustBar() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div ref={ref} className="w-full bg-background-50 border-b border-background-200/60">
      <div className={`max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {TRUST_ITEMS.map((item, i) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <i className={`${item.icon} text-accent-500 text-base`}></i>
            <span className="text-foreground-700 font-medium whitespace-nowrap">{item.label}</span>
            {i < TRUST_ITEMS.length - 1 && (
              <span className="hidden sm:inline text-background-300 mx-1">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
