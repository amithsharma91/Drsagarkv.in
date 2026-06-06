import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const TREATMENTS = [
  {
    id: 'joint-replacement',
    title: 'Joint Replacement Surgery',
    icon: 'ri-surgical-mask-line',
    shortDesc: 'Advanced knee, hip, and shoulder replacement using modern implant technology.',
    overview: 'Joint replacement surgery involves replacing damaged joint surfaces with artificial implants. Dr. Sagar specializes in minimally invasive techniques that reduce recovery time and improve outcomes.',
    symptoms: ['Persistent joint pain', 'Stiffness limiting daily activities', 'Swelling and inflammation', 'Reduced range of motion', 'Pain even at rest'],
  },
  {
    id: 'sports-injuries',
    title: 'Sports Injury Treatment',
    icon: 'ri-football-line',
    shortDesc: 'Specialized care for ligament tears, meniscus injuries, and sports trauma.',
    overview: 'Sports injuries require precise diagnosis and tailored treatment to ensure safe return to activity. From ACL reconstruction to meniscus repair, treatment plans are designed around athletic goals.',
    symptoms: ['Sudden pain during activity', 'Joint swelling', 'Limited movement', 'Instability', 'Popping or tearing sensation'],
  },
  {
    id: 'fracture-care',
    title: 'Fracture & Trauma Care',
    icon: 'ri-shield-line',
    shortDesc: 'Expert fracture management from simple injuries to complex trauma.',
    overview: 'Fracture treatment ranges from plaster casting for simple breaks to surgical fixation with plates, screws, or intramedullary nails for complex fractures. Early mobilization is prioritized whenever safe.',
    symptoms: ['Sudden severe pain', 'Visible deformity', 'Swelling and bruising', 'Inability to move', 'Numbness near injury'],
  },
  {
    id: 'arthritis',
    title: 'Arthritis Treatment',
    icon: 'ri-hand-heart-line',
    shortDesc: 'Complete arthritis management from early diagnosis to joint replacement.',
    overview: 'Arthritis management follows a stepwise approach — starting with lifestyle changes and medication, progressing to injections, and considering joint replacement when conservative measures are exhausted.',
    symptoms: ['Joint pain and tenderness', 'Morning stiffness', 'Swelling', 'Loss of flexibility', 'Bone spurs'],
  },
  {
    id: 'pain-management',
    title: 'Pain Management',
    icon: 'ri-pulse-line',
    shortDesc: 'Comprehensive evaluation and treatment for acute and chronic musculoskeletal pain conditions.',
    overview: 'Pain management addresses the root cause of musculoskeletal pain through accurate diagnosis and multi-modal treatment strategies. From medication and injections to physical therapy and lifestyle modifications — a personalized plan to improve mobility and quality of life.',
    symptoms: ['Chronic joint pain', 'Back pain', 'Neck pain', 'Post-surgical pain', 'Arthritis pain'],
  },
  {
    id: 'paediatric-orthopaedics',
    title: 'Paediatric Orthopaedics',
    icon: 'ri-user-smile-line',
    shortDesc: 'Specialized orthopaedic care for children with bone, joint, muscle and growth-related conditions.',
    overview: 'Children require specialized orthopaedic care tailored to growing bones and developing joints. Dr. Sagar provides comprehensive evaluation and treatment for a wide range of paediatric musculoskeletal conditions.',
    symptoms: ['Knock knees', 'Bow legs', 'Flat feet', 'Gait abnormalities', 'Growth-related issues'],
  },
  {
    id: 'back-pain',
    title: 'Spine Problems',
    icon: 'ri-body-scan-line',
    shortDesc: 'Diagnosis and management of spinal conditions and chronic back pain.',
    overview: 'Back pain affects millions and can stem from disc problems, muscle strain, arthritis, or spinal conditions. Treatment focuses on accurate diagnosis followed by targeted therapy.',
    symptoms: ['Lower back pain', 'Radiating leg pain (sciatica)', 'Muscle spasms', 'Difficulty standing or sitting', 'Numbness or tingling'],
  },
  {
    id: 'shoulder-pain',
    title: 'Shoulder Conditions',
    icon: 'ri-arrow-up-circle-line',
    shortDesc: 'Diagnosis and treatment of rotator cuff, frozen shoulder, and instability.',
    overview: 'Shoulder conditions range from rotator cuff tears and frozen shoulder to recurrent dislocations. Treatment includes physiotherapy, injections, and arthroscopic surgery when needed.',
    symptoms: ['Pain lifting arm', 'Night pain', 'Stiffness', 'Weakness', 'Clicking or catching'],
  },
  {
    id: 'foot-ankle',
    title: 'Foot & Ankle Disorders',
    icon: 'ri-footprint-line',
    shortDesc: 'Treatment for heel pain, ankle sprains, flat feet, and diabetic foot.',
    overview: 'Foot and ankle problems can significantly impact mobility and quality of life. Comprehensive care includes conservative management, orthotics, injections, and surgical correction.',
    symptoms: ['Heel pain', 'Ankle swelling', 'Difficulty walking', 'Flat foot deformity', 'Toe deformities'],
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation',
    icon: 'ri-mental-health-line',
    shortDesc: 'Structured post-surgery and post-injury recovery programs.',
    overview: 'Rehabilitation is essential for complete recovery after orthopedic surgery or injury. Programs are personalized to each patient\u2019s condition, goals, and progress.',
    symptoms: ['Post-surgical stiffness', 'Muscle weakness', 'Balance problems', 'Limited mobility', 'Pain during movement'],
  },
];

function TreatmentCard({ treatment, index, isVisible }: { treatment: typeof TREATMENTS[0]; index: number; isVisible: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Link
      to={`/treatments/${treatment.id}`}
      className={`group bg-white border-2 border-transparent rounded-2xl overflow-hidden transition-all duration-500 block cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } hover:border-primary-500 hover:-translate-y-1.5 hover:shadow-sm`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-primary-50 group-hover:bg-primary-500">
            <i className={`${treatment.icon} text-xl transition-colors duration-300 text-primary-500 group-hover:text-white`}></i>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-foreground-900 text-base mb-1.5 group-hover:text-primary-600 transition-colors duration-300">{treatment.title}</h3>
            <p className="text-foreground-500 text-xs leading-relaxed">{treatment.shortDesc}</p>
          </div>
          <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
              <i className="ri-arrow-right-line text-white text-sm"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-background-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="flex items-center gap-1.5 text-primary-500 text-xs font-medium hover:text-primary-600 transition-colors duration-200 cursor-pointer"
          >
            <span>{expanded ? 'Show Less' : 'Quick View'}</span>
            <i className={`text-sm transition-transform duration-300 ${expanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
          </button>
          <span className="text-primary-500 text-xs font-medium whitespace-nowrap flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
            View Treatment Details
            <i className="ri-arrow-right-line text-sm"></i>
          </span>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-400 ${
          expanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-background-100 pt-4">
          <p className="text-foreground-600 text-xs leading-relaxed mb-4">{treatment.overview}</p>
          <div>
            <span className="text-foreground-400 text-[10px] font-semibold tracking-wide uppercase mb-2 block">Common Symptoms</span>
            <div className="flex flex-wrap gap-1.5">
              {treatment.symptoms.map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-background-100 text-foreground-500 text-[10px]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function TreatmentCards() {
  const anim = useScrollAnimation(0.05);

  return (
    <section className="py-16 md:py-24 bg-background-50">
      <div ref={anim.ref} className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Treatment Categories</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
            Explore Our Treatments
          </h2>
          <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">
            Click on any treatment to learn more. Each card links to a dedicated treatment page with comprehensive information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {TREATMENTS.map((treatment, i) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              index={i}
              isVisible={anim.isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 ${
          anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '600ms' }}>
          <p className="text-foreground-400 text-sm mb-4">Not sure which treatment is right for you?</p>
          <a
            href="tel:+918197344754"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold rounded-full text-sm transition-all duration-300 glow-primary whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-line"></i>
            Call Now to Discuss
          </a>
        </div>
      </div>
    </section>
  );
}
