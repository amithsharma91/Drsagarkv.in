import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PROCEDURES = [
  { icon: 'ri-surgical-mask-line', title: 'Primary Knee Replacement', desc: 'Total knee arthroplasty using modern implant designs and minimally invasive techniques for faster recovery and excellent long-term outcomes.' },
  { icon: 'ri-run-line', title: 'Primary Hip Replacement', desc: 'Total hip replacement with advanced bearing surfaces. Both cemented and uncemented options tailored to patient age and bone quality.' },
  { icon: 'ri-link-unlink', title: 'ACL Reconstruction', desc: 'Arthroscopic anterior cruciate ligament reconstruction using anatomic tunnel placement and modern graft options.' },
  { icon: 'ri-eye-line', title: 'Arthroscopy', desc: 'Diagnostic and therapeutic keyhole surgery for knee, shoulder, hip, and ankle joints — minimal scars, faster recovery.' },
  { icon: 'ri-shield-line', title: 'Complex Fracture Fixation', desc: 'Advanced internal and external fixation for complex fractures including periarticular and comminuted patterns.' },
  { icon: 'ri-empathize-line', title: 'Pelvi-Acetabular Surgery', desc: 'Specialized reconstruction of pelvic ring and acetabular fractures — one of the most challenging domains in orthopedic trauma.' },
  { icon: 'ri-ruler-line', title: 'Limb Reconstruction', desc: 'Correction of post-traumatic deformities, non-unions, and limb length discrepancies using modern fixation and lengthening systems.' },
  { icon: 'ri-body-scan-line', title: 'Lumbar Spine Discectomy', desc: 'Surgical management of symptomatic lumbar disc herniation when conservative treatment has been exhausted.' },
  { icon: 'ri-virus-line', title: 'Orthopedic Infection Management', desc: 'Comprehensive management of bone and joint infections including implant-related infections and chronic osteomyelitis.' },
  { icon: 'ri-tools-line', title: 'Deformity Correction', desc: 'Surgical correction of congenital and acquired bone deformities to restore normal alignment and function.' },
];

export default function AdvancedProcedures() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-16 md:py-24 bg-background-100">
      <div ref={ref} className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Advanced Procedures</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
            Advanced Procedures{' '}
            <span className="text-primary-500">Performed</span>
          </h2>
          <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">
            Dr. Sagar K V performs a comprehensive range of advanced orthopedic procedures across joint replacement, trauma, and reconstructive surgery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {PROCEDURES.map((proc, i) => (
            <div
              key={i}
              className={`group bg-white border border-background-200/70 rounded-2xl p-5 md:p-6 text-center transition-all duration-500 hover:border-primary-200 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                <i className={`${proc.icon} text-primary-500 text-xl`}></i>
              </div>
              <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2">{proc.title}</h3>
              <p className="text-foreground-500 text-xs leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
