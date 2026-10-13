'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Intro() {
  const [show, setShow] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    try {
      const hasPlayed = sessionStorage.getItem('signfix_intro_played');
      if (!hasPlayed) {
        setShow(true);
        sessionStorage.setItem('signfix_intro_played', 'true');

        const timer = setTimeout(() => {
          setShow(false);
        }, 1150);

        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage errors in incognito
    }
  }, [reducedMotion]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setShow(false)}
        className="fixed inset-0 z-50 bg-ink flex flex-col items-center justify-center cursor-pointer select-none"
        aria-label="Skip intro"
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 rounded-full bg-led shadow-[0_0_16px_#ffb020] animate-sign-flicker" />
            <h1 className="font-serif text-4xl sm:text-5xl text-paper tracking-tight">
              Sign<span className="italic animate-sign-flicker text-led">Fix</span>
            </h1>
          </div>
          <p className="mt-3 text-[11px]  uppercase tracking-[0.25em] text-paper/40">
            Lights back on · Hyderabad
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShow(false)}
          className="absolute bottom-8 text-[11px]  text-paper/40 hover:text-paper uppercase tracking-widest"
        >
          Skip [esc]
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
