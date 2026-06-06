import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FAQS = [
  {
    q: 'What conditions does Dr. Sagar K V treat?',
    a: 'Dr. Sagar K V treats all orthopedic conditions including joint pain, arthritis, sports injuries, fractures, back pain, neck pain, shoulder disorders, knee injuries, hip problems, foot & ankle conditions, and provides joint replacement surgeries for knees, hips, and shoulders.',
  },
  {
    q: 'How much is the consultation fee?',
    a: 'The consultation fee for Dr. Sagar K V is ₹700. This includes a thorough clinical examination, review of your medical history, and a detailed treatment plan discussion. Follow-up consultations may have different fees.',
  },
  {
    q: 'Do I need a referral to see Dr. Sagar?',
    a: 'No referral is required. You can directly book an appointment with Dr. Sagar K V through our website, phone call, or WhatsApp. Walk-in appointments are also available at all three clinic locations in Bangalore.',
  },
  {
    q: 'Is surgery always necessary for orthopedic problems?',
    a: 'Not at all. Dr. Sagar believes in conservative treatment first. Surgery is recommended only when non-surgical treatments like physiotherapy, medication, and lifestyle modifications have not provided adequate relief. Many patients recover fully without surgery.',
  },
  {
    q: 'How long is the recovery after joint replacement surgery?',
    a: 'Recovery varies by patient and procedure. Most knee replacement patients start walking with support within 24 hours, return home in 3-4 days, and resume normal activities in 6-12 weeks. Dr. Sagar uses minimally invasive techniques that typically result in faster recovery and less pain.',
  },
  {
    q: 'Which insurance plans are accepted?',
    a: 'We accept most major health insurance plans including cashless facility at our partner hospitals. Please bring your insurance card during your visit, and our team will help verify your coverage. For specific plan details, call our clinic.',
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'Please bring any previous X-rays, MRI or CT scan reports, list of current medications, your insurance card, and a family member or friend if you\'d like support. Wear comfortable clothing that allows easy examination of the affected area.',
  },
  {
    q: 'Are emergency orthopedic services available?',
    a: 'Yes, Dr. Sagar K V provides emergency orthopedic care for fractures, dislocations, and acute injuries at South End Speciality Clinic, Basavanagudi. For emergencies, call +91 81973 44754 immediately for guidance.',
  },
];

export default function FAQSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background-50">
      <div ref={sectionRef} className="max-w-3xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Frequently Asked
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground-900">
            Your Questions,{' '}
            <span className="text-accent-500">Answered</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`border border-background-200/70 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'bg-background-50 border-primary-200' : 'bg-background-50 hover:border-primary-100'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left cursor-pointer"
              >
                <span className={`font-heading font-semibold text-sm md:text-base pr-4 transition-colors duration-300 ${
                  openIndex === i ? 'text-primary-600' : 'text-foreground-900'
                }`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  openIndex === i
                    ? 'bg-primary-500 text-white rotate-45'
                    : 'bg-background-100 text-foreground-400'
                }`}>
                  <i className="ri-add-line text-sm"></i>
                </div>
              </button>
              <div
                className={`transition-all duration-400 overflow-hidden ${
                  openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-5 text-foreground-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-10 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-foreground-400 text-sm mb-4">Still have questions? We&apos;re here to help.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+918197344754"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line"></i>
              Call +91 81973 44754
            </a>
            <a
              href="https://wa.me/918197344754"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
