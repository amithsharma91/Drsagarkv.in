import { useState, useCallback, useRef } from 'react';

export function useMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    }
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  const glowStyle = isHovering
    ? {
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, oklch(0.669 0.175 245 / 0.08), transparent 40%)`,
      }
    : {};

  return { ref, isHovering, position, glowStyle, handleMouseEnter, handleMouseLeave, handleMouseMove };
}
