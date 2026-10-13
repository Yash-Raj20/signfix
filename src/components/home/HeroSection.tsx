'use client';

import React from 'react';
import { Send, Layers, Award, Wrench, Globe } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-8 bg-[#faf8f2] overflow-hidden"
    >
      {/* Warm ambient radial glows in background matching screenshot */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#fde047]/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-[550px] h-[550px] bg-[#fef08a]/25 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow Pill Badge with pixel mosaic dots */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef9e7] border border-[#f6de8c] text-xs font-semibold text-[#855e00] mb-6 shadow-sm">
            {/* Pixel Mosaic Colorful Dots */}
            <div className="flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-3 rounded-[2px] bg-[#101820]" />
              <span className="w-1.5 h-3 rounded-[2px] bg-[#f97316]" />
              <span className="w-1.5 h-3 rounded-[2px] bg-[#ef4444]" />
              <span className="w-1.5 h-3 rounded-[2px] bg-[#10b981]" />
              <span className="w-1.5 h-3 rounded-[2px] bg-[#6366f1]" />
              <span className="w-1.5 h-3 rounded-[2px] bg-[#06b6d4]" />
              <span className="w-1.5 h-3 rounded-[2px] bg-[#ffb000]" />
            </div>

            <Globe className="w-3.5 h-3.5 text-[#b45309]" />
            <span className="tracking-wide">
              Pan India Signage & Branding Services • Est. {SITE_CONFIG.estYear}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-ink tracking-tight leading-[1.12] mb-5">
            The complete signage solution for{' '}
            <span className="relative inline-block font-black">
              indoor and outdoor branding
              {/* Yellow highlighter stroke */}
              <span className="absolute bottom-1.5 left-0 w-full h-3.5 bg-[#fde047]/75 -z-10 rounded-sm" />
            </span>
          </h1>

          {/* Description line with bullet dots */}
          <p className="text-sm sm:text-base text-slate-body font-medium leading-relaxed max-w-2xl mb-8">
            Outdoor Advertising • Hoardings • ACP Sign Boards • Glow Sign Boards • LED Signage • Flex Printing • Vinyl Branding • Shop Branding • Corporate Branding • Vehicle Branding • Hoarding
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            {/* Primary Yellow Button: Request Quote */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-brand hover:bg-amber-hover text-ink font-bold text-sm sm:text-base transition-all duration-200 shadow-[0_4px_18px_rgba(255,176,0,0.4)] hover:shadow-[0_6px_24px_rgba(255,176,0,0.6)] transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="w-4 h-4 fill-ink" />
              <span>Request Quote</span>
            </a>

            {/* Secondary Dark Navy Button: Explore Services */}
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#101820] hover:bg-[#1e293b] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Services</span>
            </a>
          </div>

          {/* 3 Modern Feature Badges (bottom-left) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl">
            {/* 1. Red Badge: Premium Materials */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#e11d48] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(225,29,72,0.35)] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-ink">
                Premium Materials
              </span>
            </div>

            {/* 2. Cyan Badge: On-Site Installation */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#06b6d4] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(6,182,212,0.35)] shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-ink">
                On-Site Installation
              </span>
            </div>

            {/* 3. Blue/Indigo Badge: Pan-India Delivery */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#4f46e5] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(79,70,229,0.35)] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-ink">
                Pan-India Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean White Logo Branding Showcase Card */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full max-w-lg rounded-xl bg-white border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-8 sm:p-12 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Subtle inner corner glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#fde047]/30 blur-2xl rounded-full pointer-events-none" />

            {/* SignFix Hero Logo Display */}
            <div className="flex flex-col items-center text-center py-4 relative z-10">
              {/* Graphic Logo Header with pixel mosaic */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#07182d] via-[#0b2135] to-[#040e1c] flex items-center justify-center shadow-xl border border-amber-brand/40 group-hover:scale-105 transition-transform duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 text-amber-brand drop-shadow-[0_0_8px_rgba(255,176,0,0.8)]"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    <circle cx="18" cy="6" r="1.5" className="fill-amber-brand stroke-none" />
                  </svg>
                </div>

                {/* Floating mini pixel mosaic badge */}
                <div className="absolute -bottom-2 -right-2 flex gap-1 p-1 bg-white rounded-lg shadow-md border border-slate-100">
                  <span className="w-2 h-2 rounded-[2px] bg-[#101820]" />
                  <span className="w-2 h-2 rounded-[2px] bg-[#ffb000]" />
                  <span className="w-2 h-2 rounded-[2px] bg-[#ef4444]" />
                </div>
              </div>

              {/* Brand Typography */}
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-ink">
                Sign<span className="text-amber-brand">Fix</span>
              </div>

              <div className="text-xs font-bold tracking-[0.22em] uppercase text-slate-500 mt-1 mb-4">
                All Signage Solutions
              </div>

              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fef9e7] border border-[#f6de8c] text-[11px] font-semibold text-[#855e00] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-brand animate-ping" />
                <span>Repair · Restore · Refresh · Transform</span>
              </div>

              {/* Sub-tagline handwritten script style */}
              <p className="text-sm italic font-serif text-[#be123c] font-semibold tracking-wide">
                Part of your success...
              </p>
            </div>

            {/* Bottom status bar in card */}
            <div className="w-full mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-ink">3D LED & ACP Specialists</span>
              <span className="text-amber-brand font-bold">100% Genuine Parts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
