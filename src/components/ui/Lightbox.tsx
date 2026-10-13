'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { WorkProject } from '@/types/content';

interface LightboxProps {
  project: WorkProject | null;
  onClose: () => void;
}

export function Lightbox({ project, onClose }: LightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Focus close button on open
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-ink/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-deep border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl focus:outline-none overflow-hidden"
      >
        {/* Top bar with category & close button */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-led ">
              {project.category}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-xs text-paper/60">{project.location}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-paper/70 hover:text-paper hover:border-white/40 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content details */}
        <h3 className="font-serif text-2xl sm:text-3xl text-paper mb-2">
          {project.title}
        </h3>
        <p className="text-xs text-led mb-4  uppercase tracking-wider">
          Client: {project.client}
        </p>
        <p className="text-sm text-paper/80 leading-relaxed max-w-[65ch] mb-6">
          {project.description}
        </p>

        {/* Simulated high-fidelity comparison or sign photograph card */}
        <div className="relative aspect-video w-full rounded-xl bg-ink border border-white/10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent z-10 opacity-70" />

          {/* Subtle neon glow graphic */}
          <div className="flex flex-col items-center justify-center text-center p-8 z-20">
            <span className="text-led  text-xs uppercase tracking-widest mb-2">
              COMPLETED RESTORATION
            </span>
            <h4 className="font-serif text-3xl sm:text-4xl text-paper tracking-wide">
              {project.client}
            </h4>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {project.specs.map((spec, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px]  text-paper/80 bg-white/5 border border-white/10 rounded-md"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-paper/50">
          <span>SignFix Technical Division · Hyderabad</span>
          <span className="text-led">WhatsApp photo for similar quote →</span>
        </div>
      </div>
    </div>
  );
}
