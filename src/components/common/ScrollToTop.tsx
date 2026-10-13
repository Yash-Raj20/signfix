'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-xl bg-navy-card/90 hover:bg-amber-brand text-cloud-sign hover:text-navy border border-navy-line hover:border-amber-brand flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-sm cursor-pointer"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
