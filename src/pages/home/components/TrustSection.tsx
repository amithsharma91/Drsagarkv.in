const STATS = [
  { value: '15+', label: 'Years Experience', icon: 'ri-award-line' },
  { value: '91+', label: 'Google Reviews', icon: 'ri-star-fill' },
  { value: '5000+', label: 'Patients Treated', icon: 'ri-user-heart-line' },
  { value: '₹700', label: 'Consultation Fee', icon: 'ri-price-tag-3-line' },
];

function StaticCounterCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="group relative bg-background-50 border border-background-200/70 rounded-2xl p-6 md:p-8 text-center transition-all duration-500 hover:border-primary-200 hover:-translate-y-1 cursor-default">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: '0 0 30px oklch(0.669 0.175 245 / 0.15), inset 0 0 30px oklch(0.669 0.175 245 / 0.05)',
        }}
      />
      <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
        <i className={`${icon} text-primary-500 text-2xl md:text-3xl`}></i>
      </div>
      <div className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900 mb-2">
        {value}
      </div>
      <div className="text-foreground-500 text-sm md:text-base font-medium">{label}</div>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-20 bg-background-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14 reveal">
          <h4 className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Trusted by Thousands
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Proven Excellence in{' '}
            <span className="text-primary-500">Orthopedic Care</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {STATS.map((stat, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <StaticCounterCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
