import { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    const handleGlobalUp = () => { isDragging.current = false; };
    const handleGlobalMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    };
    const handleGlobalTouch = (e: TouchEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.touches[0].clientX);
    };

    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('touchend', handleGlobalUp);
    window.addEventListener('touchmove', handleGlobalTouch);

    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('touchend', handleGlobalUp);
      window.removeEventListener('touchmove', handleGlobalTouch);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl select-none cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchMove={handleTouchMove}
    >
      <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
        {/* After image (full, behind) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />

        {/* Before image (clipped from left) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover object-top"
            draggable={false}
          />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-0 bottom-0 -translate-x-1/2 w-1 bg-white shadow-lg" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="flex gap-1.5">
              <i className="ri-arrow-left-s-line text-foreground-600 text-sm"></i>
              <i className="ri-arrow-right-s-line text-foreground-600 text-sm"></i>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium border border-white/15">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium border border-white/15">
            {afterLabel}
          </span>
        </div>

        {/* Instruction */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white/60 text-[10px] font-medium pointer-events-none">
          <i className="ri-drag-move-line mr-1"></i>
          Drag slider to compare
        </div>
      </div>
    </div>
  );
}
