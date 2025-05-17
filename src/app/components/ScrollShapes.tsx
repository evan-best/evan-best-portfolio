'use client';

import { useEffect, useRef } from 'react';

export default function ScrollShapes() {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!shapesRef.current) return;

      const shapes = shapesRef.current.children;
      const scrollY = window.scrollY;

      Array.from(shapes).forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        const yOffset = scrollY * speed;
        const rotation = (scrollY * 0.02) * (index % 2 === 0 ? 1 : -1);
        
        (shape as HTMLElement).style.transform = `translateY(${yOffset}px) rotate(${rotation}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={shapesRef} className="fixed inset-0 pointer-events-none">
      <div className="absolute top-20 right-20 dev-shape code-bracket text-neutral-900" style={{ transform: 'rotate(15deg)' }} />
      <div className="absolute top-40 left-20 dev-shape terminal text-neutral-900" style={{ transform: 'rotate(-10deg)' }} />
      <div className="absolute bottom-40 right-40 dev-shape function text-neutral-900" style={{ transform: 'rotate(5deg)' }} />
      <div className="absolute top-60 left-40 dev-shape code-bracket text-neutral-900" style={{ transform: 'rotate(-20deg)' }} />
      <div className="absolute bottom-20 left-60 dev-shape terminal text-neutral-900" style={{ transform: 'rotate(10deg)' }} />
      <div className="absolute top-80 right-60 dev-shape function text-neutral-900" style={{ transform: 'rotate(-5deg)' }} />
    </div>
  );
} 