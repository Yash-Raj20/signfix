'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Gauge, Activity, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import Badge from '../ui/Badge';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button, IconButton } from '../ui/Button';

const symptoms = [
  'Completely dark',
  'Partially dark',
  'Flickering',
  'Too dim',
  'Brighter on one side',
  'Visible LED dots',
];

export function LedDiagnostics() {
  const waUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'LED Sign Diagnostic: Dark/Flickering/Uneven illumination. Sending daylight and night photo.',
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Interactive 3D Perspective Tilt on Mouse Movement
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const xOffset = (e.clientX - centerX) / (rect.width / 2);
    const yOffset = (e.clientY - centerY) / (rect.height / 2);

    setRotateX(-yOffset * 10);
    setRotateY(xOffset * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="led-diagnostics"
      aria-label="LED Sign Repair Diagnostics"
      className="relative py-16 sm:py-20 bg-[#f8f6f0] overflow-hidden"
    >
      {/* Background ambient radial glow matching Hero */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle architectural grid pattern matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-360 mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Copy & Symptoms */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <Badge variant="amber" size="md" className="mb-3">
            05 — LED SIGN REPAIR
          </Badge>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#07182d] tracking-tight leading-[1.14] mb-4 ">
              The light is part of the sign.{' '}
              <span className="text-[#d97706] block sm:inline">
                We diagnose before we replace.
              </span>
            </h2>
          </Reveal>

          {/* Subtext */}
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl">
              Dark, patchy, flickering, dim or brighter on one side — these symptoms have different
              causes. We diagnose before we replace: LED modules, wiring, drivers, connections, moisture
              and physical damage.
            </p>
          </Reveal>

          {/* Symptoms Grid with minimal light badges */}
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 w-full max-w-2xl">
              {symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs group hover:border-amber-400/60 hover:shadow-sm transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#07182d]">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTA Button */}
          <Reveal delay={0.4}>
            <IconButton
              href={waUrl}
              size='md'
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition='right'
            >
              SEND A NIGHT + DAYLIGHT PHOTO
            </IconButton>
          </Reveal>
        </div>

        {/* Right Column: Freestanding 3D Transparent Channel Letter Showcase */}
        <div className="lg:col-span-6 flex items-center justify-center relative">
          <Reveal delay={0.2} className="w-full">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-xl mx-auto py-8 sm:py-12 flex items-center justify-center select-none"
              style={{ perspective: 1200 }}
            >
              {/* Volumetric Radial Backlight behind the 3D element */}
              <div className="absolute w-[440px] h-[440px] rounded-full blur-[110px] bg-amber-500/20 pointer-events-none" />

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
               

                {/* Freestanding 3D Transparent Signage Object (No Card Frame) */}
                <div className="relative w-full aspect-square max-w-[440px] flex items-center justify-center">
                  <Image
                    src="/images/channel-letter-3d-transparent.png"
                    alt="3D Channel Letter YD opened up showing glowing LED modules and wiring diagnostic"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-contain transition-all duration-700 drop-shadow-[0_20px_35px_rgba(7,24,45,0.25)] drop-shadow-[0_0_40px_rgba(245,158,11,0.4)]"
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
