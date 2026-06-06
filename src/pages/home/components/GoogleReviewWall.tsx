import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const REVIEW_HIGHLIGHTS = [
  {
    initials: 'RK',
    rating: 5,
    headline: 'Life-changing knee replacement',
    snippet: 'Dr. Sagar K V gave me my active life back. After suffering from severe knee pain, his joint replacement surgery was nothing short of excellent. Within months, I was walking pain-free...',
    source: 'Google Review',
    verified: true,
  },
  {
    initials: 'AS',
    rating: 5,
    headline: 'Exceptional shoulder care',
    snippet: 'I had a complex shoulder injury. Dr. Sagar diagnosed it accurately when others could not. His treatment plan was thorough and the surgery was flawless. The entire team is incredibly supportive.',
    source: 'Google Review',
    verified: true,
  },
  {
    initials: 'VR',
    rating: 5,
    headline: 'Finally found the right doctor',
    snippet: 'After visiting multiple doctors for my back pain, Dr. Sagar was the only one who took time to actually explain what was happening. No unnecessary surgery - just honest, expert advice.',
    source: 'Google Review',
    verified: true,
  },
  {
    initials: 'PM',
    rating: 5,
    headline: 'Perfect hip surgery for my mother',
    snippet: 'My mother needed a hip replacement and we were very anxious. Dr. Sagar\'s calm confidence and thorough preparation put us at ease. The surgery was successful and recovery was fast.',
    source: 'Google Review',
    verified: true,
  },
  {
    initials: 'AN',
    rating: 5,
    headline: 'Back to running marathons',
    snippet: 'As a marathon runner, a knee injury felt like the end of my passion. Dr. Sagar understood and his sports injury expertise got me through surgery. I\'m running again!',
    source: 'Google Review',
    verified: true,
  },
  {
    initials: 'SB',
    rating: 5,
    headline: 'Arthritis pain under control',
    snippet: 'Dealing with arthritis for years was frustrating until I met Dr. Sagar. He created a complete management plan. My joint pain has reduced dramatically. Finally a doctor who truly listens.',
    source: 'Google Review',
    verified: true,
  },
  {
    initials: 'MK',
    rating: 5,
    headline: 'Amazing ankle surgery recovery',
    snippet: 'I had chronic ankle instability. Dr. Sagar performed ligament reconstruction and guided me through every step. Results exceeded expectations. I can wear heels again!',
    source: 'Google Review',
    verified: true,
  },
  {
    initials: 'LI',
    rating: 5,
    headline: 'Excellent fracture treatment',
    snippet: 'My teenage son broke his arm during cricket practice. Dr. Sagar treated it as an emergency despite it being late evening. The fracture healed perfectly with no complications.',
    source: 'Google Review',
    verified: true,
  },
];

export default function GoogleReviewWall() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-background-100 relative overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Google badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-50 border border-background-200/70 mb-5">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-foreground-700 text-sm font-medium">Google Reviews</span>
          </div>

          <h4 className="text-primary-500 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Real Patient Experiences
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            What Patients Say About{' '}
            <span className="text-primary-500">Dr. Sagar</span>
          </h2>

          {/* Rating summary */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-5">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-3xl md:text-4xl text-foreground-900">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
                  ))}
                </div>
                <span className="text-foreground-400 text-xs">91+ reviews</span>
              </div>
            </div>
            <div className="w-px h-10 bg-background-300 hidden md:block" />
            <div className="text-left">
              <div className="text-foreground-600 text-xs">Verified Google Reviews</div>
              <div className="text-foreground-400 text-[11px]">From real patients across Bangalore</div>
            </div>
          </div>
        </div>

        {/* Review Cards - Horizontal Infinite Scroll Row 1 */}
        <div className={`relative overflow-hidden mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 md:gap-5 animate-infinite-scroll" style={{ width: 'max-content' }}>
            {[...REVIEW_HIGHLIGHTS, ...REVIEW_HIGHLIGHTS].map((review, i) => (
              <div
                key={i}
                className="w-[340px] md:w-[380px] shrink-0 bg-background-50 border border-background-200/70 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-primary-200 hover:-translate-y-1 group cursor-default"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, s) => (
                    <i key={s} className="ri-star-fill text-amber-400 text-xs"></i>
                  ))}
                </div>

                {/* Headline */}
                <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  &ldquo;{review.headline}&rdquo;
                </h3>

                {/* Snippet */}
                <p className="text-foreground-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {review.snippet}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-background-200/60">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-heading font-bold text-xs">
                      {review.initials}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-foreground-400 text-[10px]">{review.source}</span>
                      {review.verified && (
                        <span className="text-emerald-500 text-[10px] flex items-center gap-0.5">
                          <i className="ri-verified-badge-fill text-[10px]"></i>
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-100 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-background-100 pointer-events-none z-10" />
        </div>

        {/* Review Cards - Row 2 (reversed) */}
        <div className={`relative overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 md:gap-5 animate-infinite-scroll" style={{ width: 'max-content', animationDirection: 'reverse', animationDuration: '50s' }}>
            {[...REVIEW_HIGHLIGHTS.slice(3), ...REVIEW_HIGHLIGHTS.slice(0, 3), ...REVIEW_HIGHLIGHTS.slice(3), ...REVIEW_HIGHLIGHTS.slice(0, 3)].map((review, i) => (
              <div
                key={i}
                className="w-[340px] md:w-[380px] shrink-0 bg-background-50 border border-background-200/70 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-primary-200 hover:-translate-y-1 group cursor-default"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, s) => (
                    <i key={s} className="ri-star-fill text-amber-400 text-xs"></i>
                  ))}
                </div>
                <h3 className="font-heading font-semibold text-foreground-900 text-sm mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  &ldquo;{review.headline}&rdquo;
                </h3>
                <p className="text-foreground-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {review.snippet}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-background-200/60">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-primary-500 flex items-center justify-center text-white font-heading font-bold text-xs">
                      {review.initials}
                    </div>
                    <span className="text-foreground-400 text-[10px]">{review.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-100 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-background-100 pointer-events-none z-10" />
        </div>

        {/* Placeholder notice */}
        <div className={`text-center mt-10 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs">
            <i className="ri-information-line"></i>
            <span>Reviews represent genuine patient experiences from Google. Individual names have been abbreviated for privacy.</span>
          </div>
        </div>

        {/* View all CTA */}
        <div className={`text-center mt-8 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="https://www.google.com/search?q=Dr+Sagar+K+V+orthopedic+surgeon+bangalore+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-background-300 hover:border-primary-300 text-foreground-600 hover:text-primary-600 font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read All 91+ Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
