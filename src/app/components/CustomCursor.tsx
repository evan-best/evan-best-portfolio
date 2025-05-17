'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const updatePointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updatePointer);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updatePointer);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-5 h-5 rounded-full bg-neutral-300 transition-transform duration-200 ${
            isPointer ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
} 