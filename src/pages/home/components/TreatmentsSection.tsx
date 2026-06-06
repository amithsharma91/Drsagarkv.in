import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TREATMENTS = [
  {
    icon: 'ri-surgical-mask-line',
    title: 'Joint Replacement Surgery',
    desc: 'Advanced hip and knee replacement using modern implant technology and minimally invasive techniques for faster recovery.',
    href: '/treatments/joint-replacement',
  },
  {
    icon: 'ri-football-line',
    title: 'Sports Injury Treatment',
    desc: 'Specialized care for athletes with ligament tears, meniscus injuries, ACL reconstruction and return-to-sport programs.',
    href: '/treatments/sports-injuries',
  },
  {
    icon: 'ri-shield-line',
    title: 'Fracture & Trauma Care',
    desc: 'Expert fracture management from simple casts to complex surgical fixation with advanced internal and external methods.',
    href: '/treatments/fracture-care',
  },
  {
    icon: 'ri-hand-heart-line',
    title: 'Arthritis Treatment',
    desc: 'Complete arthritis care from early management and injections to advanced joint replacement when conservative measures fail.',
    href: '/treatments/arthritis',
  },
  {
    icon: 'ri-pulse-line',
    title: 'Pain Management',
    desc: 'Comprehensive evaluation and treatment for acute and chronic musculoskeletal pain to improve mobility and quality of life.',
    href: '/treatments/pain-management',
  },
  {
    icon: 'ri-user-smile-line',
    title: 'Paediatric Orthopaedics',
    desc: 'Specialized orthopaedic care for children with bone, joint, muscle and growth-related conditions from knock knees to sports injuries.',
    href: '/treatments/paediatric-orthopaedics',
  },
];

export default function TreatmentsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);

  return (
    <section ref={sectionRef} id="treatments" className="py-20 md:py-28 bg-background-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Specialized Care
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Comprehensive{' '}
            <span className="text-accent-500">Orthopaedic Treatments</span>
          </h2>
          <p className="text-foreground-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Explore the most common orthopaedic treatments provided by Dr. Sagar K V, including joint replacement, sports injuries, fracture care, arthritis management and trauma surgery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {TREATMENTS.map((treatment, i) => (
            <Link
              key={i}
              to={treatment.href}
              className={`group relative bg-background-50 border border-background-200/70 rounded-2xl p-5 md:p-6 transition-all duration-500 hover:border-primary-200 hover:-translate-y-1 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 25px oklch(0.669 0.175 245 / 0.12), inset 0 0 25px oklch(0.669 0.175 245 / 0.03)' }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-500">
                  <i className={`${treatment.icon} text-primary-500 text-xl md:text-2xl`}></i>
                </div>
                <h3 className="font-heading font-semibold text-sm md:text-base text-foreground-900 group-hover:text-primary-600 transition-colors duration-300 mb-2">
                  {treatment.title}
                </h3>
                <p className="text-foreground-500 text-xs md:text-sm leading-relaxed mb-4">
                  {treatment.desc}
                </p>
                <div className="flex items-center gap-1 text-xs font-medium text-primary-500 group-hover:gap-2 transition-all duration-300">
                  Learn More
                  <i className="ri-arrow-right-line text-xs"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Treatments button */}
        <div className={`text-center mt-12 transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer w-full sm:w-auto justify-center"
          >
            View All Treatments
            <i className="ri-arrow-right-line text-lg"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
