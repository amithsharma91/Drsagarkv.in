export default function PainManagementHero() {
  return (
    <section className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden bg-secondary-600">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Medical%20professional%20consulting%20patient%20about%20pain%20management%20in%20modern%20clinic%2C%20compassionate%20doctor-patient%20interaction%2C%20clean%20bright%20healthcare%20environment%2C%20physiotherapy%20setting%2C%20anatomical%20spine%20model%20on%20desk%2C%20natural%20daylight%2C%20professional%20medical%20care%2C%20warm%20tones%2C%20healing%20atmosphere&width=1600&height=900&seq=pain-mgmt-hero&orientation=landscape"
          alt="Pain Management Treatment - Dr. Sagar K V Bangalore"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-700/65 via-secondary-700/50 to-secondary-700/80" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 w-full py-16 md:py-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6">
          <i className="ri-pulse-line text-primary-300 text-sm"></i>
          <span className="text-white/80 text-sm font-medium tracking-wide">Pain Management</span>
        </div>
        <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4">
          Comprehensive <span className="text-primary-400">Pain Management</span>
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Comprehensive evaluation and treatment for acute and chronic musculoskeletal pain conditions to improve mobility and quality of life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="tel:+918197344754" className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
            <i className="ri-phone-line"></i>Call Now
          </a>
          <a href="https://wa.me/918197344754" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2">
            <i className="ri-whatsapp-line"></i>WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-50 to-transparent pointer-events-none" />
    </section>
  );
}
