import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FAQ_CATEGORIES = [
  {
    category: 'General Orthopedic Care',
    icon: 'ri-stethoscope-line',
    faqs: [
      {
        q: 'What conditions does Dr. Sagar K V treat?',
        a: 'Dr. Sagar K V treats all orthopedic conditions including joint pain, arthritis, sports injuries, fractures, back pain, neck pain, shoulder disorders, knee injuries, hip problems, foot & ankle conditions. He specializes in joint replacement surgeries for knees, hips, and shoulders, and provides comprehensive trauma and fracture care.',
      },
      {
        q: 'Do I need a referral to see Dr. Sagar?',
        a: 'No referral is required. You can directly book an appointment with Dr. Sagar K V through our website, phone call (+91 81973 44754), or WhatsApp. Walk-in appointments are also available at South End Speciality Clinic, Basavanagudi, though we recommend booking in advance for minimal waiting time.',
      },
      {
        q: 'What should I bring to my first appointment?',
        a: 'Please bring any previous X-rays, MRI or CT scan reports, a list of current medications, your insurance card (if applicable), and a family member or friend for support if you\'d like. Wear comfortable clothing that allows easy examination of the affected area. Also bring any relevant medical history documents from other doctors.',
      },
      {
        q: 'Is surgery always necessary for orthopedic problems?',
        a: 'Not at all. Dr. Sagar believes in conservative treatment first. Surgery is recommended only when non-surgical treatments like physiotherapy, medication, lifestyle modifications, and injections have not provided adequate relief. Over 70% of patients recover fully without needing surgery.',
      },
      {
        q: 'How experienced is Dr. Sagar K V?',
        a: 'Dr. Sagar K V has over 12 years of experience in orthopedics. He holds an MBBS degree, a Diploma in Orthopaedics (D.Ortho), and DNB Orthopedics certification. He has successfully performed over 3,000 surgeries and treated thousands of patients at South End Speciality Clinic, Basavanagudi.',
      },
    ],
  },
  {
    category: 'Joint Replacement Surgery',
    icon: 'ri-surgical-mask-line',
    faqs: [
      {
        q: 'What is joint replacement surgery?',
        a: 'Joint replacement surgery (arthroplasty) involves removing damaged or diseased parts of a joint and replacing them with artificial components (prosthesis). Dr. Sagar performs knee, hip, and shoulder replacements using modern techniques and high-quality implants designed to restore mobility and eliminate pain.',
      },
      {
        q: 'How long does joint replacement surgery take?',
        a: 'A typical knee or hip replacement surgery takes approximately 1 to 2 hours. Shoulder replacement may take slightly longer. You will spend time in the recovery room after surgery before being moved to your hospital room. The total hospital stay is usually 3-5 days depending on your progress.',
      },
      {
        q: 'How long is the recovery after joint replacement?',
        a: 'Most knee replacement patients start walking with support within 24 hours, return home in 3-4 days, and resume normal activities in 6-12 weeks. Hip replacement recovery is often faster. Dr. Sagar uses minimally invasive techniques that typically result in faster recovery and less post-operative pain.',
      },
      {
        q: 'How long do joint replacements last?',
        a: 'Modern joint replacements typically last 15-20 years or more, depending on factors like your activity level, weight, and overall health. Dr. Sagar uses premium-quality implants from trusted manufacturers. Regular follow-up visits help monitor the joint\'s condition over time.',
      },
      {
        q: 'Am I too old or too young for joint replacement?',
        a: 'There is no fixed age for joint replacement — the decision is based on your pain level, mobility limitation, and quality of life, not age. Dr. Sagar has performed joint replacements on patients ranging from their 40s to 80s. Each case is evaluated individually to determine the best treatment approach.',
      },
    ],
  },
  {
    category: 'Sports Injuries & Arthritis',
    icon: 'ri-run-line',
    faqs: [
      {
        q: 'What sports injuries does Dr. Sagar treat?',
        a: 'Dr. Sagar treats a wide range of sports injuries including ACL tears, meniscus injuries, rotator cuff tears, tennis elbow, golfer\'s elbow, ankle sprains, stress fractures, muscle strains, ligament injuries, and shoulder dislocations. He provides both non-surgical treatment and arthroscopic surgery when needed.',
      },
      {
        q: 'How soon can I return to sports after an injury?',
        a: 'Return to sports depends on the injury type, severity, and your recovery progress. Minor sprains may heal in 2-4 weeks, while ACL reconstruction recovery typically takes 6-9 months. Dr. Sagar creates personalized rehabilitation plans and clears you for return to sports only when you\'re fully ready to prevent re-injury.',
      },
      {
        q: 'What arthritis treatments are available?',
        a: 'Dr. Sagar offers a comprehensive arthritis management ladder including lifestyle modifications, physiotherapy, medications (pain relievers, anti-inflammatories), joint injections (steroid, hyaluronic acid), and when necessary, joint replacement surgery. Treatment is personalized based on arthritis type, severity, and your lifestyle needs.',
      },
      {
        q: 'Can arthritis be cured?',
        a: 'While arthritis cannot be completely cured, it can be effectively managed. With proper treatment, most patients experience significant pain relief, improved joint function, and better quality of life. Early intervention is key — the sooner treatment begins, the better the long-term outcomes.',
      },
      {
        q: 'What is the difference between osteoarthritis and rheumatoid arthritis?',
        a: 'Osteoarthritis is a wear-and-tear condition where joint cartilage gradually breaks down over time, commonly affecting knees, hips, and hands. Rheumatoid arthritis is an autoimmune condition where the body\'s immune system attacks joint tissues, causing inflammation. Treatment approaches differ, and Dr. Sagar tailors management to your specific arthritis type.',
      },
    ],
  },
  {
    category: 'Fractures & Trauma Care',
    icon: 'ri-first-aid-kit-line',
    faqs: [
      {
        q: 'What should I do if I suspect a fracture?',
        a: 'If you suspect a fracture, immobilize the injured area, apply ice (wrapped in cloth, not directly on skin), and seek medical attention immediately. Do not try to move or straighten the injured bone yourself. For severe fractures, dislocations, or open wounds, call +91 81973 44754 for emergency guidance or go to the nearest hospital.',
      },
      {
        q: 'Are emergency orthopedic services available?',
        a: 'Yes, Dr. Sagar K V provides emergency orthopedic care for fractures, dislocations, and acute injuries at South End Speciality Clinic, Basavanagudi. For emergencies, call +91 81973 44754 immediately for guidance.',
      },
      {
        q: 'How long does a fracture take to heal?',
        a: 'Fracture healing time varies by bone type, fracture severity, your age, and overall health. Simple fractures typically heal in 6-8 weeks. Larger bones like the femur may take 3-6 months. Children heal faster than adults. Dr. Sagar monitors healing through follow-up X-rays and adjusts treatment as needed.',
      },
      {
        q: 'Will I need surgery for my fracture?',
        a: 'Not all fractures require surgery. Simple, non-displaced fractures can often heal with casting or splinting alone. Surgery is recommended for displaced fractures, open fractures, fractures involving joints, or fractures that fail to heal with conservative treatment. Dr. Sagar discusses all options and recommends the best approach for your specific case.',
      },
    ],
  },
  {
    category: 'Appointments & Consultation',
    icon: 'ri-calendar-check-line',
    faqs: [
      {
        q: 'How much is the consultation fee?',
        a: 'The consultation fee for Dr. Sagar K V is ₹700. This includes a thorough clinical examination, review of your medical history, detailed discussion of your condition, and a personalized treatment plan. Follow-up consultation fees may be different — please inquire at the clinic.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'You can book an appointment through our website booking form, by calling +91 81973 44754, via WhatsApp at the same number, or by visiting South End Speciality Clinic, Basavanagudi. Online booking is the fastest method. Our team typically confirms appointments within 1-2 hours during working hours.',
      },
      {
        q: 'What are the clinic timings?',
        a: 'Dr. Sagar K V consults at South End Speciality Clinic, Basavanagudi — Mon-Sat 9 AM to 7 PM. The clinic is closed on Sundays.'
      },
      {
        q: 'Which insurance plans are accepted?',
        a: 'We accept most major health insurance plans including cashless facility at our partner hospitals. Please bring your insurance card during your visit, and our team will help verify your coverage and explain the process. For specific plan details and pre-authorization requirements, call our clinic directly.',
      },
      {
        q: 'Can I get a video consultation?',
        a: 'Yes, Dr. Sagar offers teleconsultation for follow-up visits and initial assessments where physical examination is not immediately necessary. Video consultations can be booked the same way as in-person appointments. Please call +91 81973 44754 to inquire about teleconsultation availability and fees.',
      },
    ],
  },
  {
    category: 'Recovery & Aftercare',
    icon: 'ri-heart-pulse-line',
    faqs: [
      {
        q: 'How long is the recovery period after orthopedic surgery?',
        a: 'Recovery varies by procedure. Arthroscopic procedures may need 2-6 weeks. Joint replacement typically requires 6-12 weeks for normal activities. Complex trauma surgeries may need 3-6 months. Dr. Sagar provides a detailed recovery timeline specific to your procedure and monitors your progress through follow-up visits.',
      },
      {
        q: 'Will I need physiotherapy after treatment?',
        a: 'Most orthopedic treatments benefit from physiotherapy. After surgery, physiotherapy is essential for regaining strength, mobility, and function. Even for non-surgical treatments, physiotherapy helps speed recovery and prevent recurrence. Dr. Sagar works with experienced physiotherapists and provides exercise guidance specific to your condition.',
      },
      {
        q: 'What can I do to speed up my recovery?',
        a: 'Follow your prescribed treatment plan exactly, attend all physiotherapy sessions, maintain a healthy diet rich in calcium and protein, stay hydrated, avoid smoking (which slows bone healing), get adequate rest, and gradually increase activity as advised. Do not rush the process — proper healing takes time.',
      },
      {
        q: 'When can I drive after surgery?',
        a: 'This depends on the surgery type. After knee replacement, most patients can drive in 4-6 weeks (sooner for left knee, later for right knee). After hip replacement, typically 4-6 weeks. You must be off strong pain medications, have adequate reaction time, and be cleared by Dr. Sagar before driving.',
      },
    ],
  },
];

export default function FAQAccordion() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.03);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isOpenKey = (categoryIndex: number, faqIndex: number) => {
    return !!openItems[`${categoryIndex}-${faqIndex}`];
  };

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div ref={sectionRef} className="max-w-3xl mx-auto px-4 md:px-8">
        <div className={`space-y-6 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {FAQ_CATEGORIES.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-background-200/70">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <i className={`${category.icon} text-primary-500 text-lg`}></i>
                </div>
                <h3 className="font-heading font-bold text-foreground-900 text-lg">
                  {category.category}
                </h3>
                <span className="text-foreground-300 text-sm ml-auto">{category.faqs.length} questions</span>
              </div>

              {/* FAQ Items */}
              <div className="space-y-2">
                {category.faqs.map((faq, faqIdx) => {
                  const isOpen = isOpenKey(catIdx, faqIdx);
                  return (
                    <div
                      key={faqIdx}
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'bg-background-50 border-primary-300/60'
                          : 'bg-background-50 border-background-200/70 hover:border-primary-100'
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(catIdx, faqIdx)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                      >
                        <span className={`font-heading font-semibold text-sm md:text-base pr-4 transition-colors duration-300 ${
                          isOpen ? 'text-primary-600' : 'text-foreground-900'
                        }`}>
                          {faq.q}
                        </span>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-primary-500 text-white rotate-45'
                            : 'bg-background-100 text-foreground-400'
                        }`}>
                          <i className="ri-add-line text-sm"></i>
                        </div>
                      </button>
                      <div
                        className={`transition-all duration-400 overflow-hidden ${
                          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-5 pb-5 text-foreground-500 text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-lg mx-auto bg-secondary-600 rounded-3xl p-8 md:p-10">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary-500/20 flex items-center justify-center">
              <i className="ri-question-line text-primary-400 text-2xl"></i>
            </div>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-white/60 text-sm mb-6">
              We&apos;re happy to help. Call us or book a consultation to discuss your specific concerns with Dr. Sagar K V directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+918197344754"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                <i className="ri-phone-line mr-2"></i>
                Call Now
              </a>
              <a
                href="https://wa.me/918197344754"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
