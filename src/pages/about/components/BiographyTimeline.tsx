import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const QUALIFICATIONS = [
  {
    year: 'MBBS',
    institution: 'Navodaya Medical College',
    description: 'Foundation in medicine and surgery with comprehensive clinical training across all major specialties.',
    icon: 'ri-graduation-cap-line',
  },
  {
    year: "D'Ortho",
    institution: 'JSS Medical College, Mysore',
    description: 'Specialized orthopedic training focusing on fracture management, joint disorders, and surgical techniques.',
    icon: 'ri-medal-line',
  },
  {
    year: 'DNB Orthopedics',
    institution: 'Sanjay Gandhi Institute of Trauma & Orthopaedics',
    description: 'Advanced residency in orthopedic surgery with extensive hands-on experience in joint replacement, trauma, and spine care.',
    icon: 'ri-shield-star-line',
  },
  {
    year: 'Fellowship in Joint Replacement Surgery',
    institution: 'People Tree Hospitals, Bangalore',
    description: 'Super-specialized training in primary and revision knee and hip replacement using modern implant systems and minimally invasive approaches.',
    icon: 'ri-surgical-mask-line',
  },
  {
    year: 'Fellowship in Pelvi-Acetabular Surgery',
    institution: 'Max Hospital, Mohali',
    description: 'Advanced fellowship in complex pelvic and acetabular fracture reconstruction — one of the most challenging domains in orthopedic trauma surgery.',
    icon: 'ri-heart-pulse-line',
  },
];

const JOURNEY_STEPS = [
  {
    label: 'Early Practice',
    detail: 'Began clinical practice in Bangalore, building a reputation for accurate diagnosis and honest, patient-first orthopedic care.',
    icon: 'ri-seedling-line',
  },
  {
    label: 'Joint Replacement Fellowship',
    detail: 'Completed advanced fellowship training in joint replacement at People Tree Hospitals, mastering modern implant technology and rapid recovery protocols.',
    icon: 'ri-surgical-mask-line',
  },
  {
    label: 'Trauma Subspecialization',
    detail: 'Pursued a second fellowship in Pelvi-Acetabular Surgery at Max Hospital Mohali — one of the few orthopedic surgeons in Bangalore with this expertise.',
    icon: 'ri-heart-pulse-line',
  },
  {
    label: 'Multi-Hospital Practice',
    detail: 'Established practice across leading Bangalore hospitals, providing comprehensive orthopedic care to patients across the city.',
    icon: 'ri-building-line',
  },
];

const MEMBERSHIPS = [
  { name: 'Karnataka Orthopaedic Association (KOA)', icon: 'ri-organization-chart' },
  { name: 'Karnataka Medical Council', icon: 'ri-government-line' },
];

const AFFILIATIONS = [
  { name: 'South End Speciality Clinic', location: 'Basavanagudi, Bangalore', icon: 'ri-hospital-line' },
];

export default function BiographyTimeline() {
  const bioAnim = useScrollAnimation(0.1);
  const timelineAnim = useScrollAnimation(0.1);
  const journeyAnim = useScrollAnimation(0.1);
  const membershipsAnim = useScrollAnimation(0.1);
  const affiliationsAnim = useScrollAnimation(0.1);

  return (
    <section className="py-16 md:py-24 bg-background-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Biography */}
        <div ref={bioAnim.ref} className={`mb-20 transition-all duration-800 ${bioAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-primary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Biography</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3 mb-6">
              Fellowship-Trained Joint Replacement &amp; Trauma Specialist
            </h2>
            <p className="text-foreground-500 text-base leading-relaxed">
              Dr. Sagar K V is a fellowship-trained orthopedic surgeon practicing in Bangalore with over 15 years of clinical experience.
              He holds an MBBS from Navodaya Medical College, a Diploma in Orthopaedics from JSS Medical College Mysore,
              and completed his DNB Orthopedics residency at the prestigious Sanjay Gandhi Institute of Trauma &amp; Orthopaedics.
            </p>
            <p className="text-foreground-500 text-base leading-relaxed mt-4">
              What sets Dr. Sagar apart is his dual fellowship training — a Fellowship in Joint Replacement Surgery from People Tree Hospitals, Bangalore
              and a Fellowship in Pelvi-Acetabular Surgery from Max Hospital, Mohali. This combination of joint replacement expertise
              and advanced trauma reconstruction makes him one of the few orthopedic surgeons in Bangalore qualified to handle both
              routine joint replacements and complex pelvic trauma.
            </p>
            <p className="text-foreground-500 text-base leading-relaxed mt-4">
              Currently practicing at South End Speciality Clinic in Basavanagudi, Bangalore, Dr. Sagar is known for his precise surgical skills,
              honest patient communication, and commitment to achieving the best possible outcomes — whether through conservative care
              or advanced surgical intervention.
            </p>
          </div>
        </div>

        {/* Education & Advanced Training Timeline */}
        <div ref={timelineAnim.ref}>
          <div className="text-center mb-12">
            <span className="text-accent-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Education &amp; Advanced Training</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Academic Journey
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">
              A comprehensive educational foundation followed by two super-specialized fellowships.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 via-primary-200 to-background-200 md:-translate-x-px" />

            <div className="space-y-0">
              {QUALIFICATIONS.map((qual, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative flex flex-col md:flex-row items-start gap-6 pb-12 md:pb-16 transition-all duration-700 ${
                      timelineAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Timeline node */}
                    <div className={`absolute left-8 md:left-1/2 w-9 h-9 rounded-full bg-white border-2 border-primary-400 flex items-center justify-center -translate-x-1/2 z-10 ${
                      timelineAnim.isVisible ? 'scale-100' : 'scale-0'
                    }`} style={{ transitionDelay: `${i * 150 + 200}ms`, transition: 'transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)' }}>
                      <i className={`${qual.icon} text-primary-500 text-sm`}></i>
                    </div>

                    {/* Card */}
                    <div className={`md:w-1/2 ${isLeft ? 'md:pr-14 md:text-right md:ml-0' : 'md:pl-14 md:ml-auto'} ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-1/2`}>
                      <div className="bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 hover:border-primary-200 transition-all duration-300">
                        <span className="text-primary-500 text-xs font-semibold tracking-wide">{qual.year}</span>
                        <p className="text-foreground-400 text-xs mt-1 mb-1">{qual.institution}</p>
                        <p className="text-foreground-500 text-sm leading-relaxed">{qual.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <div ref={journeyAnim.ref} className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-secondary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Professional Journey</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Career Path
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {JOURNEY_STEPS.map((step, i) => (
              <div
                key={i}
                className={`group bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 transition-all duration-500 hover:border-primary-200 hover:-translate-y-1 ${
                  journeyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors duration-300">
                  <i className={`${step.icon} text-primary-500 text-lg`}></i>
                </div>
                <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{step.label}</h4>
                <p className="text-foreground-500 text-xs leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div ref={membershipsAnim.ref} className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Professional Memberships</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Credentials &amp; Registrations
            </h2>
          </div>

          <div className={`bg-white border border-background-200/70 rounded-3xl p-8 md:p-10 transition-all duration-700 ${
            membershipsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MEMBERSHIPS.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <i className={`${m.icon} text-primary-500 text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground-900 text-sm">{m.name}</h4>
                    {m.name === 'Karnataka Medical Council' && (
                      <p className="text-foreground-400 text-xs mt-1">Registration No: 87276</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hospital Affiliations */}
        <div ref={affiliationsAnim.ref} className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-accent-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Hospital Affiliations</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
              Practicing Across Bangalore
            </h2>
            <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">
              Dr. Sagar is affiliated with leading hospitals across Bangalore, ensuring patients have convenient access to expert orthopedic care.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-5 max-w-md mx-auto">
            {AFFILIATIONS.map((aff, i) => (
              <div
                key={i}
                className={`group bg-white border border-background-200/70 rounded-2xl p-6 md:p-8 text-center transition-all duration-500 hover:border-primary-200 hover:-translate-y-1 ${
                  affiliationsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                  <i className={`${aff.icon} text-primary-500 text-2xl`}></i>
                </div>
                <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5">{aff.name}</h4>
                <p className="text-foreground-400 text-xs">{aff.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
