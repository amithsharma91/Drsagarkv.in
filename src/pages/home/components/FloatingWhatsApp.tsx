import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Main floating button group */}
      <div
        className={`fixed bottom-24 md:bottom-8 right-4 md:right-6 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Expanded quick actions */}
        <div className={`flex flex-col gap-2 transition-all duration-400 ${expanded ? 'opacity-100 translate-y-0 max-h-60' : 'opacity-0 -translate-y-2 max-h-0 overflow-hidden'}`}>
          {/* Emergency pill */}
          <a
            href="tel:+918197344754"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-500/95 backdrop-blur-sm text-white text-xs font-semibold shadow-lg hover:bg-red-600 transition-all duration-300 whitespace-nowrap cursor-pointer group"
          >
            <div className="w-2 h-2 rounded-full bg-white animate-pulse-strong" />
            <span>Call Dr. Sagar</span>
            <i className="ri-phone-fill text-sm group-hover:scale-110 transition-transform"></i>
          </a>

          {/* Hospital */}
          <a
            href="tel:+918050816686"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent-500/95 backdrop-blur-sm text-white text-xs font-semibold shadow-lg hover:bg-accent-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-building-line text-sm"></i>
            <span>Call Hospital</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918197344754?text=Hi%20Dr.%20Sagar%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/95 backdrop-blur-sm text-white text-xs font-semibold shadow-lg hover:bg-emerald-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-sm"></i>
            <span>WhatsApp</span>
          </a>

          {/* Book */}
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              setExpanded(false);
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-semibold shadow-lg hover:bg-white/20 border border-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-calendar-check-line text-sm"></i>
            <span>Book Now</span>
          </a>
        </div>

        {/* Main toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 cursor-pointer ${
            expanded
              ? 'bg-white rotate-45'
              : 'bg-primary-500 hover:bg-primary-600'
          }`}
          aria-label={expanded ? 'Close quick actions' : 'Open quick actions'}
        >
          {/* Pulse ring */}
          {!expanded && (
            <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20" />
          )}
          <i className={`text-2xl md:text-3xl transition-colors duration-300 ${expanded ? 'ri-close-line text-foreground-600' : 'ri-message-3-line text-white'}`}></i>
        </button>
      </div>
    </>
  );
}
