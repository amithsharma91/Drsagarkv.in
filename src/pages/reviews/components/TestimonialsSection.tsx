import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const REVIEWS = [
  {
    name: 'Ramesh K.',
    date: '3 months ago',
    rating: 5,
    text: 'Dr. Sagar treated my knee pain that I had been suffering from for over 3 years. His diagnosis was accurate, and the treatment plan was clearly explained. After knee replacement surgery, I can now walk without any pain. Highly recommended orthopedic surgeon in Basavanagudi.',
    condition: 'Knee Replacement',
  },
  {
    name: 'Lakshmi K. N.',
    date: '2 months ago',
    rating: 5,
    text: 'I consulted Dr. Sagar for severe back pain. Unlike other doctors who immediately suggested surgery, he recommended physiotherapy first. After 6 weeks, my pain reduced significantly without any surgery. Very honest and professional approach.',
    condition: 'Back Pain Treatment',
  },
  {
    name: 'Venkatesh M.',
    date: '1 month ago',
    rating: 5,
    text: 'My father underwent hip replacement surgery with Dr. Sagar at South End Speciality Clinic. The entire process from consultation to post-surgery recovery was smooth. Doctor personally followed up multiple times. Excellent care.',
    condition: 'Hip Replacement',
  },
  {
    name: 'Priya S.',
    date: '4 months ago',
    rating: 5,
    text: 'Fell during a sports event and fractured my wrist. Dr. Sagar\'s fracture management was excellent — minimal pain, quick recovery, and I was back to normal activities within weeks. The clinic in Basavanagudi is well-maintained and easy to reach.',
    condition: 'Fracture Care',
  },
  {
    name: 'Anil Kumar',
    date: '5 months ago',
    rating: 5,
    text: 'Been suffering from arthritis for years. Dr. Sagar explained all my options clearly — medication, injections, and surgery. Started with conservative treatment and now considering joint replacement when I\'m ready. Finally found a doctor who listens.',
    condition: 'Arthritis Management',
  },
  {
    name: 'Deepa Raj',
    date: '2 weeks ago',
    rating: 5,
    text: 'Took my mother for shoulder pain consultation. Dr. Sagar spent nearly 30 minutes explaining the condition, showing us the X-ray, and discussing treatment options. Never felt rushed. Genuinely caring doctor — rare to find these days.',
    condition: 'Shoulder Pain',
  },
  {
    name: 'Suresh Babu',
    date: '6 months ago',
    rating: 5,
    text: 'Sports injury — torn ligament in my knee. Dr. Sagar performed arthroscopic surgery and the recovery has been fantastic. Started walking within days and returned to light jogging in 3 months. The rehabilitation guidance was very helpful.',
    condition: 'Sports Injury',
  },
  {
    name: 'Meenakshi R.',
    date: '1 month ago',
    rating: 5,
    text: 'Mother-in-law had severe foot pain making it difficult to walk. Dr. Sagar diagnosed the condition accurately and started appropriate treatment. Significant improvement within weeks. Grateful for the compassionate care at the JP Nagar clinic.',
    condition: 'Foot & Ankle',
  },
];

export default function TestimonialsSection() {
  const anim = useScrollAnimation(0.05);

  return (
    <section className="py-16 md:py-24 bg-background-50">
      <div ref={anim.ref} className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Patient Testimonials</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900 mt-3">
            What Patients Say
          </h2>
          <p className="text-foreground-500 text-sm mt-3 max-w-xl mx-auto">
            These are real Google reviews shared with patient consent. Names have been partially anonymized for privacy.
          </p>
        </div>

        {/* Auto-scrolling review carousel - Row 1 */}
        <div className="relative overflow-hidden mb-6">
          <div className="flex gap-4 animate-infinite-scroll" style={{ width: 'max-content' }}>
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div
                key={i}
                className="w-[340px] md:w-[380px] flex-shrink-0 bg-white border border-background-200/70 rounded-2xl p-5 transition-all duration-300 hover:border-primary-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <span className="text-primary-600 font-heading font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground-900 text-sm">{review.name}</div>
                    <div className="text-foreground-400 text-[10px]">{review.date}</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-amber-400/10 flex items-center justify-center">
                      <i className="ri-google-fill text-amber-400 text-[10px]"></i>
                    </span>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(review.rating)].map((_, j) => (
                    <i key={j} className="ri-star-fill text-amber-400 text-xs"></i>
                  ))}
                </div>
                <p className="text-foreground-600 text-xs leading-relaxed mb-3">{review.text}</p>
                <span className="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary-600 text-[10px] font-medium">
                  {review.condition}
                </span>
              </div>
            ))}
          </div>
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-background-50 pointer-events-none" />
        </div>

        {/* Row 2 - reverse direction */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-infinite-scroll" style={{ width: 'max-content', animationDirection: 'reverse', animationDuration: '50s' }}>
            {[...REVIEWS.slice().reverse(), ...REVIEWS.slice().reverse()].map((review, i) => (
              <div
                key={i}
                className="w-[340px] md:w-[380px] flex-shrink-0 bg-white border border-background-200/70 rounded-2xl p-5 transition-all duration-300 hover:border-primary-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center">
                    <span className="text-accent-600 font-heading font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground-900 text-sm">{review.name}</div>
                    <div className="text-foreground-400 text-[10px]">{review.date}</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-amber-400/10 flex items-center justify-center">
                      <i className="ri-google-fill text-amber-400 text-[10px]"></i>
                    </span>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(review.rating)].map((_, j) => (
                    <i key={j} className="ri-star-fill text-amber-400 text-xs"></i>
                  ))}
                </div>
                <p className="text-foreground-600 text-xs leading-relaxed mb-3">{review.text}</p>
                <span className="inline-block px-2.5 py-1 rounded-full bg-accent-50 text-accent-600 text-[10px] font-medium">
                  {review.condition}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-background-50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
