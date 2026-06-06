import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const EXPERTISE_AREAS = [
  {
    icon: 'ri-surgical-mask-line',
    title: 'Joint Replacement Surgery',
    desc: 'Advanced hip and knee replacement using modern implant technology and minimally invasive approaches.',
    detail: 'Dr. Sagar K V is a fellowship-trained joint replacement specialist. Using the latest implant systems and muscle-sparing techniques, patients experience faster recovery, less post-operative pain, and excellent long-term outcomes.',
    conditions: 'Osteoarthritis, Rheumatoid Arthritis, Avascular Necrosis, Post-traumatic Arthritis',
  },
  {
    icon: 'ri-shield-line',
    title: 'Fracture Care',
    desc: 'Expert fracture management from simple casts to complex surgical fixation.',
    detail: 'Using advanced internal and external fixation methods, Dr. Sagar ensures precise bone alignment and stable fixation for optimal healing. From simple casting to complex plating systems.',
    conditions: 'Simple & Complex Fractures, Stress Fractures, Non-union, Pediatric Fractures',
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Trauma Surgery',
    desc: 'Emergency and reconstructive surgery for accident-related injuries.',
    detail: 'Prompt surgical intervention for severe injuries from road accidents, falls, and workplace incidents. Focus on restoring function and preventing long-term disability.',
    conditions: 'Polytrauma, Open Fractures, Joint Dislocations, Multiple Injuries',
  },
  {
    icon: 'ri-football-line',
    title: 'Sports Injuries',
    desc: 'Specialized care for athletes with sports-related musculoskeletal injuries.',
    detail: 'From weekend warriors to professional athletes, comprehensive sports injury care including arthroscopic surgery, ligament reconstruction, and structured return-to-sport programs.',
    conditions: 'ACL Tears, Meniscus Injuries, Rotator Cuff Tears, Ankle Sprains',
  },
  {
    icon: 'ri-hand-heart-line',
    title: 'Arthritis Treatment',
    desc: 'Complete arthritis care from early management to advanced surgical solutions.',
    detail: 'Full-spectrum arthritis management — lifestyle modifications, medications, injections, and joint replacement when conservative measures are no longer effective.',
    conditions: 'Osteoarthritis, Rheumatoid Arthritis, Gouty Arthritis, Psoriatic Arthritis',
  },
  {
    icon: 'ri-pulse-line',
    title: 'Pain Management',
    desc: 'Comprehensive evaluation and treatment for acute and chronic musculoskeletal pain conditions.',
    detail: 'Multi-modal approach to pain management — from accurate diagnosis to targeted treatment plans including medication, injections, physiotherapy, and lifestyle guidance to improve mobility and quality of life.',
    conditions: 'Chronic Joint Pain, Back Pain, Neck Pain, Shoulder Pain, Post-Surgical Pain',
  },
  {
    icon: 'ri-user-smile-line',
    title: 'Paediatric Orthopaedics',
    desc: 'Specialized orthopaedic care for children with bone, joint, muscle and growth-related conditions.',
    detail: 'Children require specialized orthopaedic care tailored to growing bones. Comprehensive evaluation of knock knees, bow legs, flat feet, gait issues, developmental conditions, and paediatric fractures.',
    conditions: 'Knock Knees, Bow Legs, Flat Feet, Gait Abnormalities, Paediatric Fractures',
  },
  {
    icon: 'ri-empathize-line',
    title: 'Pelvi-Acetabular Surgery',
    desc: 'Complex pelvic and acetabular fracture reconstruction.',
    detail: 'One of the few orthopedic surgeons in Bangalore with fellowship training in pelvi-acetabular surgery. Specialized expertise in reconstructing complex pelvic fractures for optimal functional outcomes.',
    conditions: 'Pelvic Ring Injuries, Acetabular Fractures, Sacral Fractures, Malunion',
  },
  {
    icon: 'ri-ruler-line',
    title: 'Limb Reconstruction',
    desc: 'Correction of deformities and limb length discrepancies.',
    detail: 'Advanced techniques including external fixation and internal lengthening devices for correcting complex limb deformities and length discrepancies. Focus on restoring normal function and appearance.',
    conditions: 'Post-traumatic Deformity, Congenital Deformities, Non-union, Bone Loss',
  },
  {
    icon: 'ri-body-scan-line',
    title: 'Spine Related Conditions',
    desc: 'Diagnosis and management of spinal orthopedic conditions.',
    detail: 'Comprehensive evaluation of spine-related orthopedic problems with a focus on accurate diagnosis. Treatment ranges from conservative management to surgical interventions when indicated.',
    conditions: 'Disc Herniation, Sciatica, Spinal Stenosis, Spondylolisthesis, Back Pain',
  },
  {
    icon: 'ri-eye-line',
    title: 'Arthroscopy',
    desc: 'Keyhole surgery for knee, shoulder, hip, and ankle joint problems.',
    detail: 'Minimally invasive arthroscopic procedures to diagnose and treat joint problems through tiny incisions. Benefits include smaller scars, less tissue damage, and quicker return to activities.',
    conditions: 'Meniscal Tears, Ligament Injuries, Cartilage Damage, Synovitis',
  },
  {
    icon: 'ri-mental-health-line',
    title: 'Rehabilitation',
    desc: 'Structured post-surgery and post-injury recovery programs.',
    detail: 'Comprehensive rehabilitation is essential for complete recovery. Personalized programs designed around each patient\'s condition, goals, and progress for optimal functional outcomes.',
    conditions: 'Post-Surgical Stiffness, Muscle Weakness, Balance Problems, Limited Mobility',
  },
];

export default function ExpertiseCardsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="expertise" className="py-20 md:py-28 bg-background-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-80 h-80 rounded-full border border-primary-200/20 opacity-30 animate-float-slow" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full border border-accent-200/20 opacity-20 animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-500 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Areas of Expertise
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Specialized{' '}
            <span className="text-accent-500">Orthopedic Care</span>
          </h2>
          <p className="text-foreground-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Dr. Sagar K V brings fellowship training and extensive surgical experience across every major orthopedic discipline. Tap any card to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {EXPERTISE_AREAS.map((area, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={`premium-card group relative bg-background-50 border rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-500 overflow-hidden ${
                  isExpanded
                    ? 'sm:col-span-2 lg:col-span-2 border-primary-300 shadow-lg z-10'
                    : 'border-background-200/70 hover:border-primary-200 hover:-translate-y-1'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {/* Hover/active glow */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
                    isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  style={{
                    boxShadow: isExpanded
                      ? '0 0 40px oklch(var(--primary-500) / 0.12), inset 0 0 30px oklch(var(--primary-500) / 0.04)'
                      : '0 0 25px oklch(var(--primary-500) / 0.08), inset 0 0 20px oklch(var(--primary-500) / 0.02)',
                  }}
                />

                {/* Background gradient blob */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] pointer-events-none transition-all duration-700 ${
                    isExpanded ? 'opacity-40 scale-150 bg-primary-500/10' : 'opacity-0 scale-100 bg-primary-500/5'
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      isExpanded
                        ? 'bg-primary-500 text-white scale-110 rotate-3'
                        : 'bg-primary-50 text-primary-500 group-hover:bg-primary-100 group-hover:scale-110'
                    }`}
                  >
                    <i className={`${area.icon} text-xl md:text-2xl`}></i>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-heading font-bold text-sm md:text-base mb-2 transition-colors duration-300 ${
                      isExpanded ? 'text-primary-600' : 'text-foreground-900 group-hover:text-primary-600'
                    }`}
                  >
                    {area.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-foreground-500 text-sm leading-relaxed mb-3">
                    {area.desc}
                  </p>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-background-200/60">
                      <p className="text-foreground-600 text-sm leading-relaxed mb-3">
                        {area.detail}
                      </p>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-lg bg-accent-50 flex items-center justify-center shrink-0 mt-0.5">
                          <i className="ri-focus-3-line text-accent-500 text-xs"></i>
                        </div>
                        <span className="text-foreground-500 text-xs leading-relaxed">{area.conditions}</span>
                      </div>
                    </div>
                  </div>

                  {/* Toggle indicator */}
                  <div
                    className={`flex items-center gap-1 mt-3 text-xs font-medium transition-colors duration-300 ${
                      isExpanded ? 'text-primary-500' : 'text-foreground-400'
                    }`}
                  >
                    {isExpanded ? 'Show less' : 'Learn more'}
                    <i
                      className={`text-xs transition-transform duration-300 ${
                        isExpanded ? 'ri-arrow-up-s-line rotate-180' : 'ri-arrow-down-s-line'
                      }`}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
