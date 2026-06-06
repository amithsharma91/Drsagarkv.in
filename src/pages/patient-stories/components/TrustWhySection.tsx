import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TRUST_POINTS = [
  {
    icon: 'ri-scan-2-line',
    title: 'Real X-Rays',
    description: 'Every before-and-after X-ray shown represents actual surgical outcomes performed by Dr. Sagar K V. Review them during your consultation for a complete clinical picture.',
  },
  {
    icon: 'ri-camera-lens-line',
    title: 'Real Recovery Photos',
    description: 'Recovery imagery documents genuine patient progress. These are not stock photos — they represent the standard of care you can expect.',
  },
  {
    icon: 'ri-user-smile-line',
    title: 'Real Patient Outcomes',
    description: 'Treatment results are measured by pain reduction, mobility improvement, and return to daily activities — not just surgical completion.',
  },
  {
    icon: 'ri-award-line',
    title: 'Real Treatment Results',
    description: 'With 15+ years of experience and 91+ verified Google reviews, the outcomes speak for themselves. Consistent, reliable, and transparent orthopedic care.',
  },
];

export default function TrustWhySection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20 bg-background-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4 tracking-wide">
            WHY REAL CASES MATTER
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950 mb-4">
            Built on <span className="text-accent-500">Real Results</span>
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Every case displayed represents genuine treatment outcomes. When you choose Dr. Sagar K V, you're choosing care backed by documented results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_POINTS.map((point, idx) => (
            <div
              key={point.title}
              className="bg-white rounded-2xl border border-background-200 p-6 text-center group hover:border-accent-200 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-accent-100 flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-300">
                <i className={`${point.icon} text-accent-600 text-xl group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-3">{point.title}</h3>
              <p className="text-foreground-500 text-xs leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Trust stats bar */}
        <div className="mt-12 bg-white rounded-2xl border border-background-200 p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '15+', label: 'Years Experience', icon: 'ri-calendar-check-line' },
              { value: '5,000+', label: 'Patients Treated', icon: 'ri-surgical-mask-line' },
              { value: '91+', label: 'Google Reviews', icon: 'ri-google-fill' },
              { value: '5.0', label: 'Patient Rating', icon: 'ri-star-fill' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent-100 flex items-center justify-center">
                  <i className={`${stat.icon} text-accent-600 text-sm`}></i>
                </div>
                <div className="font-heading font-bold text-2xl md:text-3xl text-foreground-950">{stat.value}</div>
                <div className="text-foreground-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
