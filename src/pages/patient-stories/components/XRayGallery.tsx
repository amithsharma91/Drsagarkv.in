import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CATEGORIES = ['All', 'Joint Replacement', 'Fracture Care', 'Sports Injuries', 'Arthritis', 'Trauma Cases'];

const XRAY_CASES = [
  {
    id: 'xr-1',
    category: 'Joint Replacement',
    title: 'Total Knee Replacement',
    beforeLabel: 'Pre-Op Arthritis',
    afterLabel: 'Post-Op Implant',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20knee%20joint%20with%20severe%20osteoarthritis%2C%20narrowed%20joint%20space%2C%20bone%20spurs%2C%20irregular%20bone%20surfaces%2C%20arthritic%20deterioration%2C%20blue-tinted%20radiograph%2C%20clinical%20diagnostic%20quality%2C%20orthopedic%20imaging&width=800&height=600&seq=xray-card-before-knee&orientation=landscape',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20knee%20joint%20with%20total%20knee%20replacement%20implant%20in%20perfect%20alignment%2C%20clean%20surgical%20outcome%2C%20prosthetic%20components%20visible%2C%20smooth%20joint%20surfaces%2C%20blue-tinted%20radiograph%2C%20postoperative%20orthopedic%20imaging&width=800&height=600&seq=xray-card-after-knee&orientation=landscape',
    summary: 'Full restoration of joint space. Patient pain-free within 3 months post-surgery.',
  },
  {
    id: 'xr-2',
    category: 'Joint Replacement',
    title: 'Total Hip Replacement',
    beforeLabel: 'Pre-Op Degeneration',
    afterLabel: 'Post-Op Implant',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20hip%20joint%20with%20complete%20loss%20of%20joint%20space%2C%20bone-on-bone%20contact%2C%20severe%20osteoarthritis%2C%20femoral%20head%20irregularity%2C%20blue-tinted%20radiograph%2C%20diagnostic%20orthopedic%20imaging&width=800&height=600&seq=xray-card-before-hip&orientation=landscape',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20hip%20joint%20with%20total%20hip%20replacement%20implant%20properly%20positioned%2C%20prosthetic%20femoral%20head%20and%20acetabular%20cup%20visible%2C%20clean%20surgical%20outcome%2C%20smooth%20prosthetic%20joint%2C%20blue-tinted%20radiograph%2C%20postoperative%20imaging&width=800&height=600&seq=xray-card-after-hip&orientation=landscape',
    summary: 'Excellent implant positioning. Patient walking unaided at 4-week follow-up.',
  },
  {
    id: 'xr-3',
    category: 'Fracture Care',
    title: 'Distal Radius Fracture',
    beforeLabel: 'Pre-Op Displacement',
    afterLabel: 'Post-Op Fixation',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20displaced%20distal%20radius%20fracture%20with%20clear%20fracture%20line%20and%20dorsal%20angulation%2C%20wrist%20trauma%2C%20bone%20misalignment%20visible%2C%20blue-tinted%20radiograph%2C%20emergency%20orthopedic%20diagnostic%20quality&width=800&height=600&seq=xray-card-before-radius&orientation=landscape',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20distal%20radius%20fracture%20with%20volar%20locking%20plate%20and%20screws%20in%20perfect%20anatomical%20alignment%2C%20restored%20wrist%20joint%20surface%2C%20healed%20fracture%2C%20blue-tinted%20radiograph%2C%20postoperative%20orthopedic%20imaging&width=800&height=600&seq=xray-card-after-radius&orientation=landscape',
    summary: 'Anatomic reduction achieved. Full wrist function restored by Week 8.',
  },
  {
    id: 'xr-4',
    category: 'Sports Injuries',
    title: 'ACL Reconstruction',
    beforeLabel: 'Pre-Op Instability',
    afterLabel: 'Post-Op Graft',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20MRI%20or%20X-ray%20showing%20knee%20joint%20with%20ACL%20tear%20indicators%2C%20anterior%20tibial%20translation%2C%20joint%20effusion%2C%20ligament%20instability%20signs%2C%20blue-tinted%20radiographic%20imaging%2C%20sports%20medicine%20diagnostic%20quality&width=800&height=600&seq=xray-card-before-acl&orientation=landscape',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20knee%20joint%20after%20ACL%20reconstruction%20with%20bone%20tunnels%20and%20fixation%20devices%20in%20proper%20position%2C%20stable%20knee%20joint%2C%20anatomical%20ligament%20reconstruction%2C%20blue-tinted%20radiograph%2C%20postoperative%20sports%20medicine%20imaging&width=800&height=600&seq=xray-card-after-acl&orientation=landscape',
    summary: 'Stable knee joint confirmed. Return to sports cleared at Month 6.',
  },
  {
    id: 'xr-5',
    category: 'Arthritis',
    title: 'Shoulder Arthritis',
    beforeLabel: 'Pre-Op Joint Damage',
    afterLabel: 'Post-Op Replacement',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20shoulder%20joint%20with%20severe%20glenohumeral%20arthritis%2C%20narrowed%20joint%20space%2C%20osteophyte%20formation%2C%20humeral%20head%20irregularity%2C%20bone%20changes%2C%20blue-tinted%20radiograph%2C%20diagnostic%20orthopedic%20imaging&width=800&height=600&seq=xray-card-before-shoulder&orientation=landscape',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20shoulder%20joint%20with%20anatomic%20total%20shoulder%20replacement%20implant%20properly%20positioned%2C%20humeral%20stem%20and%20glenoid%20component%20visible%2C%20restored%20joint%20space%2C%20blue-tinted%20radiograph%2C%20postoperative%20orthopedic%20imaging&width=800&height=600&seq=xray-card-after-shoulder&orientation=landscape',
    summary: 'Pain-free overhead movement restored. Implant well-positioned and stable.',
  },
  {
    id: 'xr-6',
    category: 'Trauma Cases',
    title: 'Tibial Plateau Fracture',
    beforeLabel: 'Pre-Op Depression',
    afterLabel: 'Post-Op Elevation',
    beforeImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20tibial%20plateau%20fracture%20with%20joint%20surface%20depression%20and%20displacement%2C%20complex%20knee%20trauma%2C%20articular%20surface%20involvement%2C%20blue-tinted%20radiograph%2C%20emergency%20orthopedic%20trauma%20imaging&width=800&height=600&seq=xray-card-before-tibia&orientation=landscape',
    afterImage: 'https://readdy.ai/api/search-image?query=Medical%20X-ray%20showing%20tibial%20plateau%20fracture%20after%20open%20reduction%20internal%20fixation%20with%20plate%20and%20screws%2C%20restored%20joint%20surface%20congruity%2C%20anatomical%20alignment%2C%20blue-tinted%20radiograph%2C%20postoperative%20orthopedic%20trauma%20imaging&width=800&height=600&seq=xray-card-after-tibia&orientation=landscape',
    summary: 'Joint surface restored to anatomic level. Full weight-bearing at Week 12.',
  },
];

export default function XRayGallery() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'card'>('grid');

  const filteredCases = activeCategory === 'All'
    ? XRAY_CASES
    : XRAY_CASES.filter((c) => c.category === activeCategory);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20 bg-background-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-10 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4 tracking-wide">
            IMAGING GALLERY
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950 mb-4">
            Before &amp; After <span className="text-accent-500">X-Ray Gallery</span>
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Diagnostic imaging comparisons showing treatment outcomes across different orthopedic procedures.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-accent-500 text-white'
                  : 'bg-background-100 border border-background-200 text-foreground-500 hover:bg-background-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-background-200 overflow-hidden group hover:border-accent-200 transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
            >
              {/* Thumbnails */}
              <div className="grid grid-cols-2 gap-0.5 bg-background-200">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.beforeImage}
                    alt={item.beforeLabel}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium">
                    {item.beforeLabel}
                  </span>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.afterImage}
                    alt={item.afterLabel}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-green-600/80 backdrop-blur-sm text-white text-[10px] font-medium">
                    {item.afterLabel}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-accent-100 text-accent-700 text-[10px] font-semibold">
                    {item.category}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-foreground-900 text-sm mb-1.5">{item.title}</h4>
                <p className="text-foreground-500 text-xs leading-relaxed line-clamp-2">{item.summary}</p>

                {/* Expand indicator */}
                <div className="flex items-center gap-1 mt-3 text-accent-500 text-xs font-medium">
                  <span>{expandedCard === item.id ? 'Show less' : 'View summary'}</span>
                  {expandedCard === item.id ? (
                    <i className="ri-arrow-up-s-line text-[10px]"></i>
                  ) : (
                    <i className="ri-arrow-down-s-line text-[10px]"></i>
                  )}
                </div>

                {/* Expanded summary */}
                {expandedCard === item.id && (
                  <div className="mt-3 pt-3 border-t border-background-200">
                    <p className="text-foreground-600 text-xs leading-relaxed">{item.summary}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCases.length === 0 && (
          <div className="text-center py-16">
            <i className="ri-scan-line text-5xl text-foreground-200 mb-4 block"></i>
            <p className="text-foreground-400 text-sm">No X-rays in this category yet.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-100 border border-background-200">
            <i className="ri-information-line text-foreground-400 text-xs"></i>
            <span className="text-foreground-400 text-[11px]">X-ray images represent typical orthopedic outcomes. Full case details available for in-clinic review.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
