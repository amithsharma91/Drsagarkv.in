import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PHILOSOPHY_POINTS = [
  {
    icon: 'ri-lightbulb-line',
    title: 'Evidence-Based Care',
    detail: 'Latest research-driven treatment protocols and modern orthopaedic practices.',
  },
  {
    icon: 'ri-surgical-mask-line',
    title: 'Minimally Invasive Surgery',
    detail: 'Advanced surgical techniques designed for faster recovery and reduced pain.',
  },
  {
    icon: 'ri-chat-heart-line',
    title: 'Patient-Centered Care',
    detail: 'Personalized treatment plans focused on individual patient needs.',
  },
  {
    icon: 'ri-computer-line',
    title: 'Modern Technology',
    detail: 'Advanced diagnostics, imaging and surgical technology.',
  },
];

export default function ExpertisePhilosophy() {
  const philosophyAnim = useScrollAnimation(0.1);

  return (
    <section className="py-16 md:py-24 bg-secondary-700 text-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary-500 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-500 blur-[80px]" />
      </div>

      <div ref={philosophyAnim.ref} className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Professional Philosophy</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Why I Practice Orthopedics
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className={`text-white/60 text-base leading-relaxed text-center mb-12 transition-all duration-700 ${
            philosophyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Orthopedic surgery isn't just about fixing bones and joints — it's about restoring lives. When someone can walk without pain,
            return to work, play with their children, or simply sleep through the night, that's the real measure of success.
            My practice philosophy is simple: treat every patient like family, recommend surgery only when truly needed,
            and stay committed until full recovery is achieved.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {PHILOSOPHY_POINTS.map((point, i) => (
              <div
                key={i}
                className={`glass-card rounded-[20px] p-6 w-full flex flex-col transition-all duration-500 ${
                  philosophyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 120}ms`, minHeight: 'fit-content', overflowWrap: 'break-word', wordWrap: 'break-word' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                    <i className={`${point.icon} text-primary-400 text-lg`}></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-heading font-semibold text-white text-sm mb-1.5 break-words">{point.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed break-words">{point.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
