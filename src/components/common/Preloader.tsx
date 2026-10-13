'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
    }, 160);

    // Trigger shutter opening after progress completes
    const shutterTimer = setTimeout(() => {
      setShutterOpen(true);
    }, 1500);

    // Completely remove preloader from DOM
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(shutterTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${
        shutterOpen ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      aria-label="Website Loading"
    >
      {/* Top Shutter Panel (Theme Cream #f8f6f0) */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#f8f6f0] border-b border-slate-200/90 transition-transform duration-800 ease-in-out ${
          shutterOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Bottom Shutter Panel (Theme Cream #f8f6f0) */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#f8f6f0] border-t border-slate-200/90 transition-transform duration-800 ease-in-out ${
          shutterOpen ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Centered Logo Card & Light Sweep */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center p-6 sm:p-8 transition-all duration-700 ease-out ${
          shutterOpen
            ? 'opacity-0 scale-95 -translate-y-4'
            : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        {/* Ambient radial glow */}
        <div className="absolute w-72 h-72 rounded-full bg-amber-500/20 blur-3xl pointer-events-none animate-pulse" />

        {/* Logo Card Frame in theme */}
        <div className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-2xl overflow-hidden flex flex-col items-center max-w-sm sm:max-w-md w-full">
          {/* Light Sweep Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent animate-sweep pointer-events-none" />

          {/* Centered Large PNG Logo using /new-logo.png */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-3">
            <Image
              src="/new-logo.png"
              alt="SignFix All Signage Solutions"
              fill
              priority
              className="object-contain drop-shadow-md"
            />
          </div>

          {/* Brand Typography */}
          <div className="text-center mb-5">
            <h2 className="text-2xl font-extrabold text-[#07182d] tracking-tight">
              Sign<span className="text-amber-600">Fix</span>
            </h2>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mt-0.5">
              ALL SIGNAGE SOLUTIONS
            </p>
          </div>

          {/* Progress Indicator Container */}
          <div className="w-full pt-4 border-t border-slate-100 flex flex-col items-center gap-2.5">
            <div className="flex items-center justify-between w-full text-xs text-slate-600 font-medium px-1">
              <span className="flex items-center gap-2 text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                CALIBRATING LED ILLUMINATION
              </span>
              <span className="text-amber-600 font-extrabold font-mono text-sm">
                {progress}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-0.5">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-[#ffb020] to-amber-500 rounded-full transition-all duration-200 ease-out shadow-[0_0_10px_rgba(255,176,32,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Location badge underneath */}
        <p className="mt-4 text-xs tracking-wider text-slate-500 uppercase font-bold text-center">
          Hyderabad · Telangana · Pan-India Supply
        </p>
      </div>
    </div>
  );
};

export default Preloader;
