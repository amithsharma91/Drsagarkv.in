import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import BeforeAfterSlider from './BeforeAfterSlider';

const COMPARISONS = [
  {
    id: 'knee-xray',
    title: 'Knee Replacement — X-Ray Comparison',
    beforeLabel: 'Before: Severe Arthritis',
    afterLabel: 'After: Implant in Place',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20knee%20joint%20with%20severe%20osteoarthritis%2C%20narrowed%20joint%20space%2C%20bone%20spurs%2C%20irregular%20bone%20surfaces%2C%20arthritic%20deterioration%20clearly%20visible%2C%20medical%20imaging%20style%2C%20blue-tinted%20radiograph%2C%20clinical%20diagnostic%20quality&width=1200&height=800&seq=xray-before-knee-01&orientation=landscape',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20knee%20joint%20with%20total%20knee%20replacement%20implant%20in%20perfect%20alignment%2C%20clean%20surgical%20outcome%2C%20prosthetic%20components%20clearly%20visible%2C%20smooth%20joint%20surfaces%2C%20blue-tinted%20radiograph%2C%20clinical%20diagnostic%20quality%2C%20postoperative%20imaging&width=1200&height=800&seq=xray-after-knee-01&orientation=landscape',
    outcome: 'Complete pain relief. Patient walking independently within 4 weeks.',
  },
  {
    id: 'hip-xray',
    title: 'Hip Replacement — X-Ray Comparison',
    beforeLabel: 'Before: Degenerative Arthritis',
    afterLabel: 'After: Total Hip Implant',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20hip%20joint%20with%20severe%20degenerative%20arthritis%2C%20complete%20loss%20of%20joint%20space%2C%20bone-on-bone%20contact%2C%20osteophyte%20formation%2C%20femoral%20head%20irregularity%2C%20blue-tinted%20radiograph%2C%20diagnostic%20quality&width=1200&height=800&seq=xray-before-hip-01&orientation=landscape',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20hip%20joint%20with%20total%20hip%20replacement%20implant%20properly%20positioned%2C%20prosthetic%20femoral%20head%20and%20acetabular%20cup%20clearly%20visible%2C%20clean%20surgical%20outcome%2C%20smooth%20prosthetic%20joint%2C%20blue-tinted%20radiograph%2C%20postoperative%20imaging&width=1200&height=800&seq=xray-after-hip-01&orientation=landscape',
    outcome: 'Full mobility restored. Returned to normal activities within 6 weeks.',
  },
  {
    id: 'fracture-xray',
    title: 'Fracture Fixation — X-Ray Comparison',
    beforeLabel: 'Before: Displaced Fracture',
    afterLabel: 'After: Internal Fixation',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20displaced%20long%20bone%20fracture%20with%20clear%20fracture%20line%20and%20misalignment%2C%20acute%20orthopedic%20injury%2C%20bone%20fragments%20visible%2C%20blue-tinted%20radiograph%2C%20emergency%20diagnostic%20quality%2C%20trauma%20imaging&width=1200&height=800&seq=xray-before-fracture-01&orientation=landscape',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20bone%20fracture%20with%20internal%20fixation%20plates%20and%20screws%20in%20perfect%20alignment%2C%20healed%20fracture%20line%2C%20anatomical%20reduction%2C%20clean%20surgical%20outcome%2C%20blue-tinted%20radiograph%2C%20postoperative%20orthopedic%20imaging&width=1200&height=800&seq=xray-after-fracture-01&orientation=landscape',
    outcome: 'Anatomic alignment achieved. Full fracture healing within 12 weeks.',
  },
];

export default function BeforeAfterGallery() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [activeComparison, setActiveComparison] = useState(0);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20 bg-background-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4 tracking-wide">
            TREATMENT PROOF
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950 mb-4">
            Before &amp; After <span className="text-accent-500">Comparisons</span>
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            See the difference. Drag the slider to compare pre-treatment and post-treatment results from real orthopedic cases.
          </p>
        </div>

        {/* Tab selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {COMPARISONS.map((comp, i) => (
            <button
              key={comp.id}
              onClick={() => setActiveComparison(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeComparison === i
                  ? 'bg-accent-500 text-white'
                  : 'bg-background-50 border border-background-200 text-foreground-500 hover:border-accent-200'
              }`}
            >
              {comp.title.replace(' — X-Ray Comparison', '')}
            </button>
          ))}
        </div>

        {/* Active comparison */}
        <div className="space-y-4">
          <BeforeAfterSlider
            key={COMPARISONS[activeComparison].id}
            beforeImage={COMPARISONS[activeComparison].beforeImage}
            afterImage={COMPARISONS[activeComparison].afterImage}
            beforeLabel={COMPARISONS[activeComparison].beforeLabel}
            afterLabel={COMPARISONS[activeComparison].afterLabel}
          />

          {/* Outcome card */}
          <div className="bg-white rounded-2xl border border-background-200 p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <i className="ri-check-double-line text-green-600"></i>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-1">Outcome</h4>
              <p className="text-foreground-600 text-sm leading-relaxed">{COMPARISONS[activeComparison].outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
