const MAPS_URL = 'https://maps.app.goo.gl/oaE4HD9J1FDFjqZq6?g_st=ac';

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-background-200/60 px-3 py-2 safe-area-bottom">
      <div className="flex items-center gap-2">
        <a
          href="tel:+918197344754"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary-500 text-white text-xs font-semibold whitespace-nowrap cursor-pointer"
        >
          <i className="ri-phone-fill text-sm"></i>
          Call Now
        </a>
        <a
          href="https://wa.me/918197344754?text=Hi%20Dr.%20Sagar%2C%20I%20need%20help%20with%20an%20orthopedic%20concern."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-500 text-white text-xs font-semibold whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-fill text-sm"></i>
          WhatsApp
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-foreground-800 text-white text-xs font-semibold whitespace-nowrap cursor-pointer"
        >
          <i className="ri-navigation-fill text-sm"></i>
          Get Directions
        </a>
      </div>
    </div>
  );
}
