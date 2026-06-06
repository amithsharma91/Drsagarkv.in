import { useState, useEffect } from 'react';

export default function PageLoading() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show logo for 1.25s then fade out
    const fadeTimer = setTimeout(() => setFadeOut(true), 1250);
    const removeTimer = setTimeout(() => setVisible(false), 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#031433' }}
    >
      {/* Subtle blue radial glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 rounded-full bg-primary-500/8 blur-[80px]" />

      {/* Logo */}
      <div
        className="relative z-10 transition-all duration-1000 ease-out"
        style={{
          animation: 'loading-logo-in 0.9s ease-out forwards',
        }}
      >
        <img
          src="https://storage.readdy-site.link/project_files/d7791bc5-fa82-4ceb-bc38-a4807062b94b/c6ff5162-71f2-4035-8f7a-7c8a8fc1c16a_5915-removebg-preview.png"
          alt="Dr. Sagar K V"
          className="w-[240px] md:w-[360px] h-auto object-contain"
          style={{ maxWidth: '90vw' }}
        />
      </div>

      <style>{`
        @keyframes loading-logo-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
