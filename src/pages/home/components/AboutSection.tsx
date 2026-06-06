import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const QUALIFICATIONS = [
  { label: 'MBBS', icon: 'ri-graduation-cap-line' },
  { label: 'D. Ortho', icon: 'ri-book-open-line' },
  { label: 'DNB Ortho', icon: 'ri-award-line' },
  { label: 'Fellowship Trained', icon: 'ri-award-line' },
];

const HIGHLIGHTS = [
  { icon: 'ri-microscope-line', text: 'Evidence-based approach using latest medical research' },
  { icon: 'ri-surgical-mask-line', text: 'Minimally invasive techniques for faster recovery' },
  { icon: 'ri-mental-health-line', text: 'Patient-first philosophy with compassionate care' },
  { icon: 'ri-computer-line', text: 'Advanced diagnostic & surgical technology' },
];

export default function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20 md:py-28 bg-background-50 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04] bg-primary-500 animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-[0.03] bg-accent-500 animate-float" />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full opacity-[0.02] bg-primary-400 animate-pulse-glow" />
      </div>

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-14 md:mb-18 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-accent-500 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            About Your Doctor
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Meet{' '}
            <span className="text-primary-500">Dr. Sagar K V</span>
          </h2>
          <p className="text-foreground-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
            A dedicated orthopedic surgeon combining 15+ years of surgical expertise with genuine compassion to help you move freely and live without pain.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left - Doctor Image Card */}
          <div className={`w-full lg:w-[340px] shrink-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/20 via-accent-400/10 to-primary-400/20 blur-2xl group-hover:blur-3xl transition-all duration-500" />
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-background-200/70 bg-background-100">
                <div className="aspect-[3/4] w-full relative">
                  <img
                    src="https://storage.readdy-site.link/project_files/d7791bc5-fa82-4ceb-bc38-a4807062b94b/e45ff219-c709-45e3-a045-3f2d2bca1fd6_IMG-20260606-WA0018.jpg?v=702a6a154b5cf74db5c399287330f5ac"
                    alt="Dr. Sagar K V - Orthopedic Surgeon Bangalore"
                    title="Dr. Sagar K V - Best Orthopedic Surgeon Bangalore"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-600/30 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                      <i className="ri-verified-badge-fill text-white text-xl"></i>
                    </div>
                    <div>
                      <div className="text-white font-heading font-bold text-sm">Dr. Sagar K V</div>
                      <div className="text-white/70 text-xs">MBBS, D.Ortho, DNB Orthopedics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 space-y-8">
            {/* Bio Card */}
            <div className={`transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-background-50 border border-background-200/70 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-1.5 rounded-full bg-primary-500" />
                  <span className="font-heading font-semibold text-foreground-900 text-lg">Professional Philosophy</span>
                </div>
                <p className="text-foreground-600 leading-relaxed">
                  I believe every patient deserves to live an active, pain-free life. My approach combines the precision of advanced orthopedic surgery with the warmth of personalized care. Whether you&apos;re dealing with joint pain, a sports injury, or need complex trauma surgery, I am committed to delivering outcomes that help you return to the activities you love - stronger and healthier than before.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-6">
                  {HIGHLIGHTS.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-background-100">
                      <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                        <i className={`${h.icon} text-primary-500 text-sm`}></i>
                      </div>
                      <span className="text-foreground-600 text-sm">{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compact Qualification Badges */}
            <div className={`transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="font-heading font-bold text-lg text-foreground-900 mb-4 flex items-center gap-2">
                <i className="ri-graduation-cap-line text-primary-500 text-xl"></i>
                Qualifications &amp; Journey
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {QUALIFICATIONS.map((q, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center text-center p-4 rounded-2xl bg-background-50 border border-background-200/70 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-2 group-hover:bg-primary-500 transition-colors duration-300">
                      <i className={`${q.icon} text-primary-500 text-lg group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <span className="font-heading font-bold text-sm text-foreground-900">{q.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
