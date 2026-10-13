'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Only enable on desktop pointer: fine
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (reducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null ||
          target.getAttribute('role') === 'button';
        setIsPointer(Boolean(isClickable));
      }
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [visible, reducedMotion]);

  if (reducedMotion || !visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-amber-500/30 shadow-[0_0_20px_rgba(255,176,32,0.15)]"
      animate={{
        x: position.x - (isPointer ? 24 : 18),
        y: position.y - (isPointer ? 24 : 18),
        width: isPointer ? 48 : 36,
        height: isPointer ? 48 : 36,
        scale: isPointer ? 1.25 : 1,
        backgroundColor: isPointer ? 'rgba(255, 176, 32, 0.02)' : 'rgba(255, 176, 32, 0.05)',
        borderColor: isPointer ? 'rgba(217, 119, 6, 0.45)' : 'rgba(255, 176, 32, 0.25)',
        opacity: isPointer ? 0.9 : 0.7,
      }}
      transition={{
        type: 'spring',
        stiffness: 450,
        damping: 30,
        mass: 0.12,
      }}
    />
  );
}
