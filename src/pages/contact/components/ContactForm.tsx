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

export default function ContactForm() {
  const { ref, isVisible } = useScrollAnimation(0.05);
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
    <section className="py-20 md:py-28 bg-background-100">
      <div ref={ref} className="max-w-xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-10 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-primary-500 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Book Appointment
          </h4>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-900">
            Book Your{' '}
            <span className="text-primary-500">Consultation</span>
          </h2>
          <p className="text-foreground-500 text-base mt-3">
            Fill the form and we&apos;ll open WhatsApp with your details pre-filled for quick booking.
          </p>
        </div>

        <div className={`transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form
            id="contact-form"
            data-readdy-form
            onSubmit={handleSubmit}
            className="bg-background-50 border border-background-200/70 rounded-2xl p-6 md:p-8 space-y-5"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="contact-name" className="block text-foreground-700 text-sm font-medium mb-2">Full Name *</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl bg-background-100 border border-background-200/70 text-foreground-900 placeholder-foreground-300 text-sm focus:outline-none focus:border-primary-400 focus:bg-background-50 transition-all duration-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="contact-phone" className="block text-foreground-700 text-sm font-medium mb-2">Phone Number *</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-background-100 border border-background-200/70 text-foreground-900 placeholder-foreground-300 text-sm focus:outline-none focus:border-primary-400 focus:bg-background-50 transition-all duration-300"
              />
            </div>

            {/* Preferred Location */}
            <div>
              <label className="block text-foreground-700 text-sm font-medium mb-2">Preferred Location</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {LOCATION_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updateField('location', opt)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-center cursor-pointer whitespace-nowrap ${
                      formData.location === opt
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-background-100 border border-background-200/70 text-foreground-600 hover:bg-background-200 hover:text-foreground-900'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Concern */}
            <div>
              <label className="block text-foreground-700 text-sm font-medium mb-2">Primary Concern</label>
              <div className="grid grid-cols-2 gap-2">
                {CONCERN_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updateField('concern', opt)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left cursor-pointer whitespace-nowrap ${
                      formData.concern === opt
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-background-100 border border-background-200/70 text-foreground-600 hover:bg-background-200 hover:text-foreground-900'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Appointment Time */}
            <div>
              <label className="block text-foreground-700 text-sm font-medium mb-2">Preferred Appointment Time</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TIME_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updateField('time', opt)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-center cursor-pointer whitespace-nowrap ${
                      formData.time === opt
                        ? 'bg-accent-500 text-white border-accent-500'
                        : 'bg-background-100 border border-background-200/70 text-foreground-600 hover:bg-background-200 hover:text-foreground-900'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="contact-message" className="block text-foreground-700 text-sm font-medium mb-2">Additional Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                maxLength={500}
                rows={4}
                placeholder="Briefly describe your condition or any specific requirements..."
                className="w-full px-4 py-3 rounded-xl bg-background-100 border border-background-200/70 text-foreground-900 placeholder-foreground-300 text-sm focus:outline-none focus:border-primary-400 focus:bg-background-50 transition-all duration-300 resize-none"
              />
              <p className="text-foreground-300 text-xs mt-1 text-right">{formData.message.length}/500</p>
            </div>

            {/* WhatsApp Submit Button */}
            <button
              type="submit"
              disabled={!formData.name.trim() || !formData.phone.trim()}
              className="w-full px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Book Appointment on WhatsApp
            </button>

            {/* Quick alternatives */}
            <div className="flex gap-3 pt-1">
              <a
                href="tel:+918197344754"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-background-100 hover:bg-background-200 border border-background-200/70 text-foreground-700 text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line text-lg"></i>
                Call Dr. Sagar
              </a>
              <a
                href="tel:+918050816686"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-background-100 hover:bg-background-200 border border-background-200/70 text-foreground-700 text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
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
