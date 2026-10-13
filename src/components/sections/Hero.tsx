'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Wrench,
  ShieldCheck,
  Lightbulb,
} from 'lucide-react';
import { siteContent } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { IconButton } from '@/components/ui/Button';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import Badge from '../ui/Badge';

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl(siteContent.brand.whatsapp);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Interactive 3D Stage States
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isGlowOn, setIsGlowOn] = useState(true);

  // Smooth 3D Perspective Tilt on Mouse Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const xOffset = (e.clientX - centerX) / (rect.width / 2);
    const yOffset = (e.clientY - centerY) / (rect.height / 2);

    // Controlled 3D tilt
    setRotateX(-yOffset * 10);
    setRotateY(xOffset * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-20 bg-[#f8f6f0] overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-360 mx-auto  px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Content Matching User Specification & Reference */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <Reveal delay={0.05} yOffset={16}>
            <Badge variant="amber" size="md" className="mb-3">
              REPAIR · RESTORE · REFRESH · TRANSFORM
            </Badge>
          </Reveal>
          {/* Main Headline */}
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#07182d] tracking-tight leading-[1.12] mb-6 ">
              Your sign is not just a board. It is your business{' '}
              <span className="relative inline-block text-[#d97706]">
                from a distance.
                {/* Hand-drawn organic amber underline curve */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3.5 text-[#d97706] pointer-events-none"
                  viewBox="0 0 260 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5C65 2.5 175 2.5 257 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          {/* Description Paragraph */}
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-slate-700  leading-relaxed max-w-[62ch] mb-8 font-normal">
              SignFix is a Hyderabad, Telangana signage specialist for sign board repair, LED sign repair, restoration, in-house fabrication and installation — for corporate offices, malls, restaurants, retail chains and showrooms.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Amber Button: SEND YOUR SIGN PHOTO */}
              <MagneticButton>
                <IconButton
                  asLink
                  href={whatsappUrl}
                  external
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
                  iconPosition="right"
                  className="uppercase tracking-wider text-xs sm:text-sm "
                >
                  SEND YOUR SIGN PHOTO
                </IconButton>
              </MagneticButton>

              {/* Secondary Button: SEE WHAT WE REPAIR */}
              <IconButton
                asLink
                href="#services"
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 text-[#d97706] stroke-[2.5]" />}
                iconPosition="right"
                className="uppercase tracking-wider text-xs sm:text-sm "
              >
                SEE WHAT WE REPAIR
              </IconButton>
            </div>
          </Reveal>

          {/* 3 Value Pillars Badges (Bottom-Left, Max rounded-lg) */}
          <Reveal delay={0.4}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-3xl">
              <div className="flex items-center gap-2.5 p-2.5 rounded-full bg-white border border-slate-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#e11d48] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(225,29,72,0.3)] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm font-medium text-[#07182d]">
                    In-House
                  </span>
                  <span className="text-[10px] md:text-[12px] text-slate-500 font-normal">
                    Fabrication & LED
                  </span>
                </div>
              </div>

              {/* 2. Cyan Badge: Rapid Site Repair */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-full bg-white border border-slate-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#06b6d4] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(6,182,212,0.3)] shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm text-[#07182d] font-medium">
                    Pan-India
                  </span>
                  <span className="text-[10px] md:text-[12px] text-slate-500 font-normal">
                    Supply & Rollouts
                  </span>
                </div>
              </div>

              {/* 3. Indigo Badge: IP67 Meanwell Power */}
              <div className="flex items-center gap-2.5 p-3 rounded-full bg-white border border-slate-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#4f46e5] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(79,70,229,0.3)] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm text-[#07182d] font-medium">
                    Repair-first
                  </span>
                  <span className="text-[10px] md:text-[12px] text-slate-500 font-normal">
                    Honest Assessment
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Freestanding 3D Transparent Floating Signage Showcase */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <Reveal delay={0.2} className="w-full">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-lg mx-auto py-6 flex items-center justify-center select-none"
              style={{ perspective: 1200 }}
            >
              {/* Volumetric Radial Backlight behind the 3D element */}
              <div
                className={`absolute w-[420px] h-[420px] rounded-full blur-[110px] pointer-events-none transition-all duration-700 ${isGlowOn
                    ? 'bg-amber-500/25 opacity-100 scale-110'
                    : 'bg-black/5 opacity-30 scale-90'
                  }`}
              />

              {/* 3D Floating Motion Container with Interactive Mouse Tilt */}
              <motion.div
                animate={{
                  y: reducedMotion ? 0 : [-8, 8, -8],
                  rotateX: reducedMotion ? 0 : rotateX,
                  rotateY: reducedMotion ? 0 : rotateY,
                }}
                transition={{
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  rotateX: { type: 'spring', stiffness: 220, damping: 20 },
                  rotateY: { type: 'spring', stiffness: 220, damping: 20 },
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative w-full flex flex-col items-center justify-center"
              >
                {/* Freestanding 3D Transparent Signboard Object */}
                <div className="relative w-full aspect-square max-w-[460px] flex items-center justify-center">
                  <Image
                    src="/images/signfix-3d-transparent.png"
                    alt="SignFix 3D Illuminated LED Channel Letters Signboard"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 480px"
                    className={`object-contain transition-all duration-700 drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] ${isGlowOn
                        ? 'brightness-105 contrast-105 filter drop-shadow-[0_0_35px_rgba(255,176,32,0.5)]'
                        : 'brightness-85 contrast-95 saturate-80'
                      }`}
                  />
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
