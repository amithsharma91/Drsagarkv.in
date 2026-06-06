import { Link, useNavigate } from 'react-router-dom';

const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Dr. Sagar', href: '/about' },
    { label: 'Treatments', href: '/treatments' },
    { label: 'Joint Replacement', href: '/treatments/joint-replacement' },
    { label: 'Knee Pain', href: '/treatments/knee-pain' },
    { label: 'Sports Injuries', href: '/treatments/sports-injuries' },
    { label: 'Patient Stories', href: '/patient-stories' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
};

function FooterLink({ href, label }: { href: string; label: string }) {
  const navigate = useNavigate();
  const isAnchor = href.startsWith('/#');

  if (isAnchor) {
    const anchorId = href.replace('/#', '');
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          if (window.location.pathname === '/') {
            document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/');
            setTimeout(() => {
              document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
            }, 150);
          }
        }}
        className="text-white/50 hover:text-primary-400 text-sm transition-colors duration-200 cursor-pointer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className="text-white/50 hover:text-primary-400 text-sm transition-colors duration-200 cursor-pointer">
      {label}
    </Link>
  );
}

export default function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="bg-secondary-700 text-white">
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 mb-4 cursor-pointer">
              <img
                src="https://storage.readdy-site.link/project_files/d7791bc5-fa82-4ceb-bc38-a4807062b94b/c6ff5162-71f2-4035-8f7a-7c8a8fc1c16a_5915-removebg-preview.png"
                alt="Dr. Sagar K V"
                className="h-12 w-auto object-contain"
              />
            </a>
            <h3 className="font-heading font-bold text-white text-lg mb-1">Dr. Sagar K V</h3>
            <p className="text-white/40 text-xs mb-2 tracking-wide">MBBS, D.Ortho, DNB Orthopedics</p>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Joint Replacement Specialist &bull; 15+ Years Experience
            </p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
              ))}
              <span className="text-white/60 text-sm ml-2">5.0 (91+ Reviews)</span>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-col gap-2">
              <a
                href="tel:+918197344754"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
              >
                <i className="ri-phone-line text-primary-400 w-5"></i>
                +91 81973 44754 — Dr. Sagar
              </a>
              <a
                href="tel:+918050816686"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
              >
                <i className="ri-building-line text-accent-400 w-5"></i>
                +91 80508 16686 — Hospital
              </a>
              <a
                href="https://wa.me/918197344754"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-emerald-400 transition-colors duration-200 cursor-pointer text-sm"
              >
                <i className="ri-whatsapp-line text-emerald-400 w-5"></i>
                WhatsApp Appointment
              </a>
              <a
                href="https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-primary-400 transition-colors duration-200 cursor-pointer text-sm"
              >
                <i className="ri-navigation-line text-primary-400 w-5"></i>
                Get Directions
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 tracking-wide">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="ri-map-pin-line text-primary-400 text-xs"></i>
                </div>
                <div>
                  <span className="text-white font-medium text-sm block">South End Speciality Clinic</span>
                  <span className="text-white/40 text-xs">Basavanagudi, Bangalore</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs pl-7">
                <i className="ri-time-line"></i>
                <span>Mon - Sat: 9 AM - 7 PM</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="tel:+918197344754"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary-500/15 hover:bg-primary-500 text-primary-300 hover:text-white border border-primary-500/20 text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line"></i>
                Call Dr. Sagar
              </a>
              <a
                href="tel:+918050816686"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent-500/15 hover:bg-accent-500 text-accent-300 hover:text-white border border-accent-500/20 text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-building-line"></i>
                Call Hospital
              </a>
              <a
                href="https://wa.me/918197344754"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-white border border-emerald-500/20 text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line"></i>
                WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-foreground-300/10 hover:bg-foreground-300/20 text-white/50 hover:text-white/80 border border-white/5 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-navigation-line"></i>
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Dr. Sagar K V. Orthopedic Surgeon, Bangalore.
          </p>
          <p className="text-white/20 text-xs">
            MBBS | D.Ortho | DNB Orthopedics | Joint Replacement Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}
