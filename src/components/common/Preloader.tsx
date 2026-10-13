'use client';

import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [shutterOpen, setShutterOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 20) + 15;
        return Math.min(100, prev + step);
      });
    }, 180);

    // Trigger shutter opening after progress completes
    const shutterTimer = setTimeout(() => {
      setShutterOpen(true);
    }, 1600);

    // Completely remove preloader from DOM
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(shutterTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${shutterOpen ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
      aria-label="Website Loading"
    >
      {/* Top Shutter Panel */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#040e1c] border-b border-navy-line transition-transform duration-800 ease-in-out ${shutterOpen ? '-translate-y-full' : 'translate-y-0'
          }`}
      />

      {/* Bottom Shutter Panel */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#040e1c] border-t border-navy-line transition-transform duration-800 ease-in-out ${shutterOpen ? 'translate-y-full' : 'translate-y-0'
          }`}
      />

      {/* Centered Logo Card & Light Sweep */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center p-8 transition-all duration-700 ease-out ${shutterOpen ? 'opacity-0 scale-95 -translate-y-4' : 'opacity-100 scale-100 translate-y-0'
          }`}
      >
        {/* Glow ambient circle */}
        <div className="absolute w-48 h-48 rounded-full bg-amber-brand/15 blur-2xl pointer-events-none animate-pulse" />

        {/* Logo Card Frame (Max rounded-xl) */}
        <div className="relative bg-navy-card/90 backdrop-blur-md border border-amber-brand/30 rounded-xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(4,14,28,0.9)] overflow-hidden">
          {/* Light Sweep Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-brand/15 to-transparent animate-sweep pointer-events-none" />

          {/* Centered Large Logo */}
          <Logo size="lg" showTagline={true} />

          {/* Tagline / System Init Indicator */}
          <div className="mt-5 pt-4 border-t border-navy-line/80 flex flex-col items-center gap-2.5">
            <div className="flex items-center justify-between w-full text-xs  text-muted-sign">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-brand animate-ping" />
                CALIBRATING LED ILLUMINATION
              </span>
              <span className="text-amber-brand font-bold">{progress}%</span>
            </div>

            {/* Progress bar container (max rounded-lg) */}
            <div className="w-64 sm:w-72 h-1.5 bg-navy-dark rounded-lg overflow-hidden border border-navy-line">
              <div
                className="h-full bg-gradient-to-r from-amber-brand via-amber-hover to-amber-brand transition-all duration-200 ease-out shadow-[0_0_8px_rgba(255,176,0,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Location badge underneath */}
        <p className="mt-4 text-xs tracking-wider text-muted-sign uppercase font-medium">
          Hyderabad · Telangana · Pan-India Supply
        </p>
      </div>
    </div>
  );
};
