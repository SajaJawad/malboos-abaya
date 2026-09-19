'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#151311] text-[#F7F2EA] border border-[#C4A36B]/50 flex items-center justify-center shadow-lg hover:bg-[#C4A36B] hover:text-[#151311] hover:scale-110 transition-all duration-300 group cursor-pointer"
      aria-label="العودة لأعلى الصفحة"
      title="العودة لأعلى الصفحة"
    >
      <ChevronUp className="w-5 h-5 stroke-[2] transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};
