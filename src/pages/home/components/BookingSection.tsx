import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const LOCATION_OPTIONS = [
  'South End Speciality Clinic',
  'Other Clinic Location',
  'Need Guidance',
];

const CONCERN_OPTIONS = [
  'Joint Pain',
  'Arthritis',
  'Fracture',
  'Sports Injury',
  'Pain Management',
  'Paediatric Orthopaedics',
  'Trauma Care',
  'Second Opinion',
  'Post Surgery Follow Up',
  'Other',
];

const TIME_OPTIONS = ['Morning', 'Afternoon', 'Evening', 'Flexible'];

export default function BookingSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    concern: '',
    time: '',
    message: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const buildWhatsAppMessage = () => {
    const msg = `Hello Dr. Sagar K V,

I would like to book an orthopaedic consultation.

Patient Details:

Name: ${formData.name}

Phone: ${formData.phone}

Preferred Location: ${formData.location || 'Not specified'}

Primary Concern: ${formData.concern || 'Not specified'}

Preferred Appointment Time: ${formData.time || 'Flexible'}

Additional Message:

${formData.message || 'None'}

I found you through your website and would like to schedule an appointment.

Thank you.`;

    return encodeURIComponent(msg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const whatsappUrl = `https://wa.me/918197344754?text=${buildWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-secondary-600 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-primary-500/6 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-accent-500/5 blur-[120px]" />
      </div>

      <div ref={sectionRef} className="max-w-xl mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-10 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-400 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Book Appointment
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            Book Your{' '}
            <span className="text-primary-400">Consultation</span>
          </h2>
          <p className="text-white/50 text-base mt-3">
            Fill the form and we&apos;ll open WhatsApp with your details pre-filled for quick booking.
          </p>
        </div>

        <div className={`glass-dark rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-500/8 blur-[60px] pointer-events-none" />

          <form id="callback-form" data-readdy-form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="cb-name" className="block text-white/70 text-sm font-medium mb-2">Full Name *</label>
              <input
                id="cb-name" name="name" type="text" required
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-primary-400 focus:bg-white/12 transition-all duration-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="cb-phone" className="block text-white/70 text-sm font-medium mb-2">Phone Number *</label>
              <input
                id="cb-phone" name="phone" type="tel" required
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-primary-400 focus:bg-white/12 transition-all duration-300"
              />
            </div>

            {/* Preferred Location */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Preferred Location</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {LOCATION_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updateField('location', opt)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-center cursor-pointer whitespace-nowrap ${
                      formData.location === opt
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-white/8 border border-white/10 text-white/60 hover:bg-white/12 hover:text-white/80'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Concern */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Primary Concern</label>
              <div className="grid grid-cols-2 gap-2">
                {CONCERN_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updateField('concern', opt)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left cursor-pointer whitespace-nowrap ${
                      formData.concern === opt
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-white/8 border border-white/10 text-white/60 hover:bg-white/12 hover:text-white/80'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Appointment Time */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Preferred Appointment Time</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TIME_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updateField('time', opt)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-center cursor-pointer whitespace-nowrap ${
                      formData.time === opt
                        ? 'bg-accent-500 text-white border-accent-500'
                        : 'bg-white/8 border border-white/10 text-white/60 hover:bg-white/12 hover:text-white/80'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="cb-message" className="block text-white/70 text-sm font-medium mb-2">Additional Message</label>
              <textarea
                id="cb-message" name="message"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                maxLength={500}
                rows={3}
                placeholder="Briefly describe your condition or any specific requirements..."
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-primary-400 focus:bg-white/12 transition-all duration-300 resize-none"
              />
              <p className="text-white/30 text-xs mt-1 text-right">{formData.message.length}/500</p>
            </div>

            {/* WhatsApp Submit Button */}
            <button
              type="submit"
              disabled={!formData.name.trim() || !formData.phone.trim()}
              className="w-full px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Book Appointment on WhatsApp
            </button>

            <div className="flex gap-3 pt-1">
              <a
                href="tel:+918197344754"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line text-lg"></i>
                Call Dr. Sagar
              </a>
              <a
                href="tel:+918050816686"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-building-line text-lg"></i>
                Call Hospital
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
