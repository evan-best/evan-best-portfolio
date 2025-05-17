'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/40 backdrop-blur-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)]'
          : 'bg-black pb-1'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group"
        >
          <div className={`w-12 h-12 rounded-full overflow-hidden border transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] flex items-center justify-center ${
            isScrolled 
              ? 'border-neutral-200/40 bg-neutral-200/80 backdrop-blur-sm' 
              : 'border-white/20 bg-neutral-800'
          }`}>
            <span className={`text-lg font-medium tracking-tight transition-colors duration-300 font-sf ${
              isScrolled 
                ? 'text-neutral-900' 
                : 'text-neutral-200'
            }`}>
              EB
            </span>
          </div>
          <span className={`text-lg font-medium transition-colors duration-300 ${
            isScrolled 
              ? 'text-neutral-900 group-hover:text-neutral-600' 
              : 'text-white group-hover:text-neutral-200'
          }`}>
            Evan Best
          </span>
        </button>
        
        <div className="flex items-center space-x-8">
          {['experience', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'text-neutral-600 hover:text-neutral-900'
                  : 'text-white hover:text-neutral-200'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
} 