import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { REVIEWS } from '@/mocks/reviews';

export default function TestimonialsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = Math.ceil(REVIEWS.length / 3);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const visibleReviews = REVIEWS.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background-100">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-accent-500 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Patient Stories
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Real People. Real{' '}
            <span className="text-primary-500">Results</span>.
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-400 text-lg"></i>
                ))}
              </div>
              <span className="text-foreground-600 font-medium text-sm">5.0 Rating</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-foreground-300" />
            <span className="text-foreground-500 text-sm">{REVIEWS.length}+ Verified Reviews</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background-50 border border-background-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 cursor-pointer"
            aria-label="Previous reviews"
          >
            <i className="ri-arrow-left-s-line text-xl text-foreground-600"></i>
          </button>
          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background-50 border border-background-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 cursor-pointer"
            aria-label="Next reviews"
          >
            <i className="ri-arrow-right-s-line text-xl text-foreground-600"></i>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-500">
            {visibleReviews.map((review, i) => (
              <div
                key={`${review.name}-${i}`}
                className="bg-background-50 border border-background-200/70 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-primary-200 hover:-translate-y-1 cursor-default group"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, s) => (
                    <i key={s} className="ri-star-fill text-amber-400 text-sm"></i>
                  ))}
                </div>
                {/* Headline */}
                <h3 className="font-heading font-semibold text-foreground-900 text-base mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {review.headline}
                </h3>
                {/* Review text */}
                <p className="text-foreground-500 text-sm leading-relaxed flex-1 mb-4 line-clamp-5">
                  {review.review}
                </p>
                {/* Procedure tag */}
                <span className="inline-block self-start px-3 py-1 rounded-full bg-accent-50 text-accent-600 text-xs font-medium mb-4">
                  {review.procedure}
                </span>
                {/* User info */}
                <div className="flex items-center gap-3 pt-4 border-t border-background-200/60">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-heading font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground-900 text-sm">{review.name}</div>
                    <div className="text-foreground-400 text-xs">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentSlide(i); setIsAutoPlaying(false); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentSlide
                    ? 'w-8 bg-primary-500'
                    : 'bg-foreground-300 hover:bg-foreground-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
