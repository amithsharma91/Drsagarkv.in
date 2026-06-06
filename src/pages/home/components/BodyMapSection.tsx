import { useState, useRef, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface BodyPoint {
  id: string;
  label: string;
  top: number;
  left: number;
  conditions: string[];
  treatments: string[];
}

const FRONT_POINTS: BodyPoint[] = [
  {
    id: 'neck', label: 'Neck & Cervical',
    top: 12, left: 50,
    conditions: ['Cervical Spondylosis', 'Neck Strain', 'Disc Herniation'],
    treatments: ['Cervical Decompression', 'Physiotherapy', 'Posture Correction'],
  },
  {
    id: 'shoulder-l', label: 'Left Shoulder',
    top: 20, left: 23,
    conditions: ['Rotator Cuff Tear', 'Frozen Shoulder', 'Shoulder Impingement'],
    treatments: ['Arthroscopic Repair', 'Corticosteroid Injection', 'Rehabilitation'],
  },
  {
    id: 'shoulder-r', label: 'Right Shoulder',
    top: 20, left: 77,
    conditions: ['Rotator Cuff Injury', 'Shoulder Dislocation', 'Bursitis'],
    treatments: ['Arthroscopy', 'Physiotherapy', 'Activity Modification'],
  },
  {
    id: 'elbow-l', label: 'Left Elbow',
    top: 32, left: 18,
    conditions: ['Tennis Elbow', 'Golfer Elbow', 'Bursitis'],
    treatments: ['PRP Injection', 'Bracing', 'Physical Therapy'],
  },
  {
    id: 'elbow-r', label: 'Right Elbow',
    top: 32, left: 82,
    conditions: ['Tennis Elbow', 'Ulnar Nerve Entrapment', 'Arthritis'],
    treatments: ['Steroid Injection', 'Nerve Release', 'Physiotherapy'],
  },
  {
    id: 'back', label: 'Back & Spine',
    top: 40, left: 50,
    conditions: ['Disc Herniation', 'Sciatica', 'Spondylolisthesis'],
    treatments: ['Spine Surgery Consultation', 'Epidural Injection', 'Core Strengthening'],
  },
  {
    id: 'hip-l', label: 'Left Hip',
    top: 55, left: 30,
    conditions: ['Hip Arthritis', 'Labral Tear', 'Avascular Necrosis'],
    treatments: ['Total Hip Replacement', 'Hip Arthroscopy', 'Conservative Care'],
  },
  {
    id: 'hip-r', label: 'Right Hip',
    top: 55, left: 70,
    conditions: ['Osteoarthritis', 'Hip Bursitis', 'Femoroacetabular Impingement'],
    treatments: ['Joint Replacement', 'Injection Therapy', 'Physiotherapy'],
  },
  {
    id: 'knee-l', label: 'Left Knee',
    top: 72, left: 32,
    conditions: ['Knee Arthritis', 'Meniscus Tear', 'Ligament Injury'],
    treatments: ['Total Knee Replacement', 'Arthroscopy', 'PRP Therapy'],
  },
  {
    id: 'knee-r', label: 'Right Knee',
    top: 72, left: 68,
    conditions: ['Osteoarthritis', 'ACL Tear', 'Patellar Tendinitis'],
    treatments: ['Knee Replacement', 'Ligament Reconstruction', 'Rehabilitation'],
  },
  {
    id: 'foot-l', label: 'Left Foot & Ankle',
    top: 90, left: 30,
    conditions: ['Plantar Fasciitis', 'Ankle Sprain', 'Bunions'],
    treatments: ['Ankle Arthroscopy', 'Orthotics', 'Physical Therapy'],
  },
  {
    id: 'foot-r', label: 'Right Foot & Ankle',
    top: 90, left: 70,
    conditions: ['Achilles Tendinitis', 'Ankle Instability', 'Flat Foot'],
    treatments: ['Tendon Repair', 'Ankle Stabilization', 'Custom Orthotics'],
  },
];

const BACK_POINTS: BodyPoint[] = [
  {
    id: 'neck-back', label: 'Neck & Upper Spine',
    top: 12, left: 50,
    conditions: ['Cervical Radiculopathy', 'Whiplash', 'Muscle Spasm'],
    treatments: ['Cervical Traction', 'Nerve Block', 'Physiotherapy'],
  },
  {
    id: 'shoulder-blade-l', label: 'Left Shoulder Blade',
    top: 25, left: 30,
    conditions: ['Scapular Dyskinesis', 'Muscle Strain', 'Thoracic Outlet'],
    treatments: ['Manual Therapy', 'Postural Training', 'Trigger Point Release'],
  },
  {
    id: 'shoulder-blade-r', label: 'Right Shoulder Blade',
    top: 25, left: 70,
    conditions: ['Myofascial Pain', 'Rotator Cuff Referral', 'Rib Dysfunction'],
    treatments: ['Deep Tissue Massage', 'Stretching Protocol', 'Chiropractic Care'],
  },
  {
    id: 'spine-back', label: 'Spine & Lower Back',
    top: 45, left: 50,
    conditions: ['Lumbar Disc Herniation', 'Spinal Stenosis', 'Facet Joint Arthritis'],
    treatments: ['Minimally Invasive Spine Surgery', 'Epidural Steroid', 'Core Rehab'],
  },
  {
    id: 'hip-back-l', label: 'Left Hip / SI Joint',
    top: 65, left: 30,
    conditions: ['SI Joint Dysfunction', 'Piriformis Syndrome', 'Gluteal Tendinopathy'],
    treatments: ['SI Joint Injection', 'Manual Manipulation', 'Strengthening'],
  },
  {
    id: 'hip-back-r', label: 'Right Hip / SI Joint',
    top: 65, left: 70,
    conditions: ['Sacroiliitis', 'Deep Gluteal Syndrome', 'Hip-Spine Syndrome'],
    treatments: ['Joint Injection', 'Physical Therapy', 'Activity Modification'],
  },
  {
    id: 'knee-back-l', label: 'Left Knee (Posterior)',
    top: 80, left: 32,
    conditions: ['Baker Cyst', 'Hamstring Tendinopathy', 'Posterior Horn Tear'],
    treatments: ['Cyst Aspiration', 'Eccentric Training', 'Arthroscopic Repair'],
  },
  {
    id: 'knee-back-r', label: 'Right Knee (Posterior)',
    top: 80, left: 68,
    conditions: ['Popliteal Tendinitis', 'Meniscus Tear', 'Posterior Knee Pain'],
    treatments: ['Injection Therapy', 'Arthroscopy', 'Rehabilitation Program'],
  },
];

export default function BodyMapSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [activeView, setActiveView] = useState<'front' | 'back'>('front');
  const [activePoint, setActivePoint] = useState<BodyPoint | null>(null);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });
  const bodyRef = useRef<HTMLDivElement>(null);

  const points = activeView === 'front' ? FRONT_POINTS : BACK_POINTS;

  const handlePointClick = useCallback((point: BodyPoint, e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePoint?.id === point.id) {
      setActivePoint(null);
      return;
    }

    if (bodyRef.current) {
      const rect = bodyRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCardPos({ x, y });
    }
    setActivePoint(point);
  }, [activePoint]);

  const handleBodyClick = useCallback(() => {
    setActivePoint(null);
  }, []);

  return (
    <section id="body-map" className="py-20 md:py-28 bg-background-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full border border-primary-200/30 opacity-20 animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-accent-200/20 opacity-15 animate-float-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-500 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Interactive Symptom Checker
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Where Does It{' '}
            <span className="text-primary-500">Hurt</span>?
          </h2>
          <p className="text-foreground-500 text-base md:text-lg max-w-xl mx-auto mt-4">
            Tap any body area to discover related conditions and treatment options available with Dr. Sagar K V.
          </p>
        </div>

        {/* View Toggle */}
        <div className={`flex items-center justify-center gap-2 mb-8 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-background-100 border border-background-200/70 rounded-full p-1 flex">
            <button
              onClick={() => { setActiveView('front'); setActivePoint(null); }}
              className={`px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeView === 'front'
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-foreground-500 hover:text-foreground-700'
              }`}
            >
              Front View
            </button>
            <button
              onClick={() => { setActiveView('back'); setActivePoint(null); }}
              className={`px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeView === 'back'
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-foreground-500 hover:text-foreground-700'
              }`}
            >
              Back View
            </button>
          </div>
        </div>

        {/* Interactive Body Container */}
        <div className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Body Map Area */}
          <div
            ref={bodyRef}
            onClick={handleBodyClick}
            className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[3/5] mx-auto lg:mx-0 shrink-0 bg-background-100 rounded-3xl border border-background-200/70 overflow-hidden cursor-crosshair group"
          >
            {/* Body outline silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Abstract body silhouette */}
              <div className="relative w-[55%] h-[85%]">
                {/* Head */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[42%] pt-[42%] rounded-full border-2 border-foreground-200/60 bg-foreground-100/20" />
                {/* Neck */}
                <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[12%] h-[4%] bg-foreground-200/40 rounded" />
                {/* Torso */}
                <div className="absolute top-[19%] left-1/2 -translate-x-1/2 w-[58%] h-[28%] bg-foreground-100/20 border-2 border-foreground-200/50 rounded-t-[40%] rounded-b-xl" />
                {/* Left Arm */}
                <div className="absolute top-[20%] left-[10%] w-[10%] h-[30%] bg-foreground-100/20 border-2 border-foreground-200/40 rounded-full -rotate-12 origin-top" />
                {/* Right Arm */}
                <div className="absolute top-[20%] right-[10%] w-[10%] h-[30%] bg-foreground-100/20 border-2 border-foreground-200/40 rounded-full rotate-12 origin-top" />
                {/* Left Leg */}
                <div className="absolute top-[46%] left-[25%] w-[12%] h-[34%] bg-foreground-100/20 border-2 border-foreground-200/40 rounded-b-[40%] rounded-t-xl" />
                {/* Right Leg */}
                <div className="absolute top-[46%] right-[25%] w-[12%] h-[34%] bg-foreground-100/20 border-2 border-foreground-200/40 rounded-b-[40%] rounded-t-xl" />
              </div>
            </div>

            {/* Clickable Hotspots */}
            {points.map((point) => {
              const isActive = activePoint?.id === point.id;
              return (
                <button
                  key={point.id}
                  onClick={(e) => handlePointClick(point, e)}
                  className={`absolute z-10 transition-all duration-300 cursor-pointer group/hotspot ${
                    isActive ? 'scale-125' : 'hover:scale-110'
                  }`}
                  style={{
                    top: `${point.top}%`,
                    left: `${point.left}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  aria-label={`Click for ${point.label} information`}
                >
                  {/* Outer pulse ring */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-500/15 animate-ripple'
                      : 'bg-primary-500/0 group-hover/hotspot:bg-primary-500/8'
                  }`} style={{ width: '48px', height: '48px', top: '-16px', left: '-16px' }} />
                  {/* Inner dot */}
                  <div className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-500 shadow-lg animate-node-glow'
                      : 'bg-primary-400/70 group-hover/hotspot:bg-primary-500 shadow-sm'
                  }`}>
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-primary-400 animate-ping opacity-30' : ''
                    }`} />
                  </div>
                  {/* Label tooltip on hover (only when not active) */}
                  {!isActive && (
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-7 opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      <span className="text-[10px] font-medium text-foreground-600 bg-background-50 px-2 py-0.5 rounded-full border border-background-200/60 shadow-sm">
                        {point.label}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}

            {/* Instruction overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none opacity-40">
              <div className="flex items-center gap-1.5 text-foreground-400 text-xs">
                <i className="ri-cursor-line text-sm"></i>
                <span>Tap dots for details</span>
              </div>
            </div>
          </div>

          {/* Floating Treatment Card */}
          <div className="flex-1 w-full min-h-[300px] lg:min-h-[400px] flex items-start justify-center">
            {activePoint ? (
              <div
                key={activePoint.id}
                className="w-full bg-background-50 border border-primary-200/50 rounded-2xl p-6 md:p-8 animate-slide-in-bottom relative overflow-hidden"
                style={{ animation: 'slide-in-bottom 0.4s ease-out forwards' }}
              >
                {/* Glow background */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-500/5 blur-[60px] pointer-events-none" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center">
                      <i className="ri-focus-3-line text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg md:text-xl text-foreground-900">
                        {activePoint.label}
                      </h3>
                      <p className="text-primary-500 text-xs font-medium">
                        {activeView === 'front' ? 'Front View' : 'Back View'}
                      </p>
                    </div>
                  </div>

                  {/* Conditions */}
                  <div className="mb-5">
                    <h4 className="font-heading font-semibold text-sm text-foreground-700 mb-3 flex items-center gap-2">
                      <i className="ri-psychotherapy-line text-primary-500"></i>
                      Common Conditions
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activePoint.conditions.map((condition, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-medium border border-red-100"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Treatments */}
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-sm text-foreground-700 mb-3 flex items-center gap-2">
                      <i className="ri-surgical-mask-line text-accent-500"></i>
                      Treatment Options
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activePoint.treatments.map((treatment, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-accent-50 text-accent-700 text-xs font-medium border border-accent-100"
                        >
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#booking"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold rounded-full text-sm transition-all duration-300 glow-primary hover:scale-105 whitespace-nowrap"
                  >
                    <i className="ri-calendar-check-line text-lg"></i>
                    Book Consultation for {activePoint.label}
                  </a>
                </div>
              </div>
            ) : (
              <div className="w-full flex items-center justify-center text-center min-h-[300px] lg:min-h-[400px]">
                <div className="max-w-sm">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center">
                    <i className="ri-body-scan-line text-primary-400 text-3xl md:text-4xl"></i>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground-800 text-base mb-2">
                    Select a Body Area
                  </h3>
                  <p className="text-foreground-400 text-sm leading-relaxed">
                    Tap any highlighted dot on the body diagram to see related orthopedic conditions and treatments offered by Dr. Sagar K V.
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-4 text-foreground-300 text-xs">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary-400/70"></span> Front</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent-400/70"></span> Back</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
