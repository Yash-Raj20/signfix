'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '../ui/Badge';
import { IconButton } from '../ui/Button';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const leftChecklist = [
  'Measurement & job prep',
  'Acrylic and sign-face prep',
  'Cutting and assembly',
  'Painting and finishing',
];

const rightChecklist = [
  'Letter and panel fabrication',
  'Metal and frame fabrication',
  'LED installation & wiring',
  'Testing and quality checks',
];

export function Fabrication() {
  const waUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Fabrication Inquiry: Interested in in-house manufacturing, CNC cutting, and custom LED signage assembly.',
  });

  return (
    <section
      id="fabrication"
      aria-label="In-House Fabrication Workshop"
      className="relative py-16 sm:py-24 bg-[#f8f6f0] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-amber-500/[0.07] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#07182d]/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Reveal delay={0.05} yOffset={16}>
              <Badge variant="amber" size="md" className="mb-3.5">
                06 — IN-HOUSE FABRICATION
              </Badge>
            </Reveal>

            <Reveal delay={0.1} yOffset={20}>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#07182d] tracking-tight leading-[1.14] mb-4">
                Tools and machines are only useful when skilled people use them
              </h2>
            </Reveal>

            <Reveal delay={0.15} yOffset={16}>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Measuring, fabrication, cutting, assembly, LED installation, wiring, finishing,
                testing and dispatch — controlled in-house so issues are caught while the sign is
                still being made, not after it is on the building.
              </p>
            </Reveal>

            {/* 2-Column Checklist */}
            <Reveal delay={0.2} yOffset={20} className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-9 max-w-xl">
                {/* Column 1 */}
                <div className="space-y-3.5">
                  {leftChecklist.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 group">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#d97706] shrink-0 stroke-[2] group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-semibold text-[#07182d]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-3.5">
                  {rightChecklist.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 group">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#d97706] shrink-0 stroke-[2] group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-semibold text-[#07182d]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Optional CTA */}
            <Reveal delay={0.25} yOffset={16}>
              <IconButton
                href={waUrl}
                size="md"
                icon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
                iconPosition="right"
                className="font-extrabold uppercase tracking-wider"
              >
                DISCUSS CUSTOM FABRICATION
              </IconButton>
            </Reveal>
          </div>

          {/* Right Column: Single Large Workshop Showcase Image */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <Reveal delay={0.2} yOffset={24} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] rounded-3xl bg-white p-1.5 border border-slate-200/90 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#07182d]">
                  <img
                    src="/images/channel-letter-3d-diagnostic.jpg"
                    alt="In-house Channel Letter Fabrication & LED Diagnostics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle ambient gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Floating Glass Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[11px]  font-bold text-[#07182d]">
                      WORKSHOP • IN-HOUSE FABRICATION
                    </span>
                  </div>

                  {/* Bottom Floating Glass Card */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-[#07182d]/90 backdrop-blur-md border border-white/10 shadow-lg text-white">
                    <div className="flex flex-col">
                      <span className="text-[11px]  text-amber-400 font-bold uppercase tracking-wider">
                        Precision CNC & Acrylic Assembly
                      </span>
                      <span className="text-xs text-slate-300 font-medium">
                        Bench tested for uniform luminescence
                      </span>
                    </div>
                    <span className="text-[10px]  px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold shrink-0">
                      IP67 SPEC
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fabrication;
