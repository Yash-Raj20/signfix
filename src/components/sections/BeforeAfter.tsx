'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowRight, SlidersHorizontal, CheckCircle2, AlertOctagon } from 'lucide-react';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '../ui/Badge';
import { IconButton } from '../ui/Button';

export function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState<number>(siteContent.beforeAfter.initialSliderPosition || 50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore pointer capture errors
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  const auditUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Before & After Signboard Restoration Audit Request',
  });

  return (
    <section
      id="work"
      aria-label="Before and After Proof of Work"
      className="relative py-20 sm:py-28 bg-[#f8f6f0] overflow-hidden border-b border-slate-200/90"
    >
      {/* Background ambient radial glows matching theme */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-360 mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header (12-col Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-5 flex flex-col items-start">
            <Reveal delay={0.05} yOffset={16}>
              <Badge variant="amber" size="md" className="mb-4">
                03 — PROOF OF WORK
              </Badge>
            </Reveal>

            <Reveal delay={0.1} yOffset={20}>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#07182d] tracking-tight leading-[1.14]">
                The difference between forgotten and{' '}
                <span className="text-amber-600 block">visible.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end">
            <Reveal delay={0.15} yOffset={16}>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {siteContent.beforeAfter.description}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Draggable Comparison Showcase Card */}
        <Reveal delay={0.2} yOffset={24}>
          <div className="bg-white rounded-3xl sm:rounded-[32px] p-3 sm:p-5 border border-slate-200/90 shadow-2xl relative">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="slider"
              aria-label="Comparison slider: Faded & Dark vs Restored & Lit signboard"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPos)}
              className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl sm:rounded-3xl border border-black/15 overflow-hidden cursor-ew-resize select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 bg-[#061220]"
            >
              {/* LAYER 2 (AFTER): Restored & Lit (Full Canvas Underneath) */}
              <div className="absolute inset-0 bg-radial from-[#0c223c] via-[#07182d] to-[#040e1b] flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
                {/* Night Glow Ambient Lighting */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,176,32,0.18)_0%,transparent_70%)] pointer-events-none" />

                {/* Restored Illuminated Signboard Graphic */}
                <div className="relative w-full max-w-2xl px-6 py-8 sm:px-10 sm:py-12 rounded-2xl bg-[#081a2e]/90 border border-amber-500/50 shadow-[0_0_60px_rgba(255,176,32,0.35)] flex flex-col items-center text-center backdrop-blur-md">
                  {/* Status Tag Header */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>100% EVEN LUMEN DISTRIBUTION · SAMSUNG IP67</span>
                  </div>

                  {/* Restored Glowing Brand Lettering */}
                  <div className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-wider sm:tracking-widest drop-shadow-[0_0_32px_rgba(255,176,32,0.95)]">
                    KARACHI <span className="text-[#ffb020]">BAKERY</span>
                  </div>

                  {/* Subtitle & Specs */}
                  <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs uppercase font-bold text-amber-400/90 mt-3 sm:mt-4 tracking-widest">
                    <span>ESTD. 1953</span>
                    <span>·</span>
                    <span>BANJARA HILLS</span>
                    <span>·</span>
                    <span>6500K CRISP HALO</span>
                  </div>
                </div>

                {/* AFTER Badge Tag in Bottom Right */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 px-3.5 py-1.5 rounded-full bg-[#07182d]/90 border border-amber-400/40 text-[11px] sm:text-xs font-bold text-amber-300 shadow-lg flex items-center gap-2 backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{siteContent.beforeAfter.afterLabel}</span>
                </div>
              </div>

              {/* LAYER 1 (BEFORE): Faded & Dark (Clipped by Slider Position) */}
              <div
                className="absolute inset-0 bg-radial from-[#0a111a] via-[#060b12] to-[#03060a] flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden border-r-2 border-amber-400"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                {/* Cold dark/flickering background tint */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                {/* Faulty / Broken Signboard Graphic */}
                <div className="relative w-full max-w-2xl px-6 py-8 sm:px-10 sm:py-12 rounded-2xl bg-[#090f17]/90 border border-white/10 opacity-60 flex flex-col items-center text-center shadow-inner">
                  {/* Warning Header */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>DEAD MODULES · WATER INGRESS · BLOWN DRIVER</span>
                  </div>

                  {/* Flickering / Half-Dead Lettering */}
                  <div className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-500/50 tracking-wider sm:tracking-widest flex items-center justify-center gap-2">
                    <span className="text-amber-200/40 animate-pulse">KARA</span>
                    <span className="line-through decoration-rose-500/60 opacity-30">CHI BAKERY</span>
                  </div>

                  {/* Fault Subtitle */}
                  <div className="text-[10px] sm:text-xs uppercase font-bold text-rose-400/70 mt-3 sm:mt-4 tracking-widest">
                    [POWER LOST · ZERO NIGHT VISIBILITY]
                  </div>
                </div>

                {/* BEFORE Badge Tag in Bottom Left */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 px-3.5 py-1.5 rounded-full bg-[#0a111a]/90 border border-white/20 text-[11px] sm:text-xs font-bold text-slate-300 shadow-lg flex items-center gap-2 backdrop-blur-md">
                  <AlertOctagon className="w-3.5 h-3.5 text-rose-400" />
                  <span>{siteContent.beforeAfter.beforeLabel}</span>
                </div>
              </div>

              {/* SLIDER DIVIDING HANDLE */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-300 via-[#ffb020] to-amber-400 shadow-[0_0_18px_rgba(255,176,32,0.9)] pointer-events-none transition-transform"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center Thumb Knob with Arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#07182d] border-2 border-[#ffb020] shadow-[0_0_24px_rgba(255,176,32,0.8)] flex items-center justify-center text-[#ffb020] hover:scale-110 active:scale-95 transition-transform cursor-ew-resize">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L4.5 12m0 0l3.75-3.75M4.5 12h15m0 0l-3.75 3.75M19.5 12l-3.75-3.75" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Caption & Interactive Control Bar */}
            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2 sm:px-3 text-xs text-slate-500">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{siteContent.beforeAfter.caption}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider shrink-0">
                <SlidersHorizontal className="w-3 h-3 text-amber-600" />
                <span>Drag slider or use arrow keys</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Banner: Save up to 60% with Restoration */}
        <Reveal delay={0.25} yOffset={20}>
          <div className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-[#07182d] leading-snug">
                  Have a dark, flickering, or weathered signboard?
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Send a photo for a rapid diagnosis — save 50%–70% compared to buying an entire new board.
                </p>
              </div>
            </div>

            <IconButton
              asLink
              href={auditUrl}
              size="md"
              icon={<ArrowRight className="w-4 h-4 text-[#07182d] stroke-[2.5]" />}
              iconPosition="right"
              className="shrink-0 w-full sm:w-auto"
            >
              SEND PHOTO FOR AUDIT
            </IconButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default BeforeAfter;
