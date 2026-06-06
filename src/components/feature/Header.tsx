import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const textScheme = (scrolled || !isHome) ? 'scrolled' : 'transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        textScheme === 'scrolled'
          ? 'bg-white/80 backdrop-blur-xl border-b border-background-200/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[64px] md:h-[72px]">
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="https://storage.readdy-site.link/project_files/d7791bc5-fa82-4ceb-bc38-a4807062b94b/c6ff5162-71f2-4035-8f7a-7c8a8fc1c16a_5915-removebg-preview.png"
              alt="Dr. Sagar K V"
              className={`h-9 md:h-10 w-auto object-contain transition-all duration-500 ${
                textScheme === 'scrolled'
                  ? 'filter-none'
                  : 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* Desktop Navigation — always visible on lg+ */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    active
                      ? textScheme === 'scrolled'
                        ? 'bg-primary-50 text-primary-600'
                        : 'bg-white/15 text-white'
                      : textScheme === 'scrolled'
                        ? 'text-foreground-600 hover:text-foreground-900 hover:bg-background-100'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop: Call Now button */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="tel:+918197344754"
              className={`flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                textScheme === 'scrolled'
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white text-secondary-600 hover:bg-white/90'
              }`}
            >
              <i className="ri-phone-line text-lg"></i>
              Call Dr. Sagar
            </a>
            <a
              href="tel:+918050816686"
              className={`hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                textScheme === 'scrolled'
                  ? 'bg-accent-500 text-white hover:bg-accent-600'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/15'
              }`}
            >
              <i className="ri-building-line"></i>
              Hospital
            </a>
          </div>

          {/* Mobile & Tablet: Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            <i
              className={`text-2xl transition-colors duration-500 ${
                textScheme === 'scrolled' ? 'text-foreground-800' : 'text-white'
              } ${mobileOpen ? 'ri-close-line' : 'ri-menu-3-line'}`}
            ></i>
          </button>
        </div>

        {/* Slide-out Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 bg-white/95 backdrop-blur-xl rounded-2xl p-3 border border-background-200/60 shadow-lg">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    active ? 'bg-primary-50 text-primary-600' : 'text-foreground-600 hover:bg-background-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-background-200">
              <a
                href="tel:+918197344754"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500 text-white text-sm font-semibold whitespace-nowrap"
              >
                <i className="ri-phone-line"></i>Call Dr. Sagar
              </a>
              <a
                href="tel:+918050816686"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent-500 text-white text-sm font-semibold whitespace-nowrap"
              >
                <i className="ri-building-line"></i>Call Hospital
              </a>
              <a
                href="https://wa.me/918197344754?text=Hi%20Dr.%20Sagar%2C%20I%20need%20help%20with%20an%20orthopedic%20concern."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold whitespace-nowrap"
              >
                <i className="ri-whatsapp-line"></i>WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-foreground-800 text-white text-sm font-semibold whitespace-nowrap"
              >
                <i className="ri-navigation-line"></i>Get Directions
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
