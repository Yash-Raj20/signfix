'use client';

import React from 'react';
import {
  Search,
  ClipboardList,
  Hammer,
  Paintbrush,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import Badge from '../ui/Badge';
import { IconButton } from '../ui/Button';

interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStepItem[] = [
  {
    number: '1',
    title: 'Inspect',
    description:
      'Sign, mounting, electrical condition, illumination, materials and overall appearance.',
    icon: <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    number: '2',
    title: 'Plan',
    description:
      'Separate essential repairs from optional upgrades; identify what is worth preserving.',
    icon: <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    number: '3',
    title: 'Rebuild',
    description:
      'Failed components repaired or replaced; damaged surfaces restored.',
    icon: <Hammer className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    number: '4',
    title: 'Refinish',
    description:
      'Faces, graphics, letters and finishes refreshed where required.',
    icon: <Paintbrush className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    number: '5',
    title: 'Test',
    description:
      'Illumination, electrical connections and visual consistency checked before handover.',
    icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    number: '6',
    title: 'Transparent Diagnostics',
    description: 'Direct itemized quotes with clear photo evidence before any physical repair begins.',
    icon: <ShieldCheck className="w-5 h-5 stroke-[2]" />
  },
];

export function Process() {
  const inspectionUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Book an Inspection: I would like to schedule a site inspection for our sign board.',
  });

  return (
    <section
      id="process"
      aria-label="The SignFix Approach"
      className="relative py-16 sm:py-24 bg-[#f8f6f0] overflow-hidden"
    >
      {/* Ambient background glowing elements to maximize frosted glass refraction */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-amber-500/20 via-orange-400/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#07182d]/10 via-amber-400/10 to-transparent blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#07182d_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Reveal delay={0.05} yOffset={16}>
            <Badge variant="default" size="md" className="mb-3">
              THE SIGNFIX APPROACH
            </Badge>
          </Reveal>

          <Reveal delay={0.1} yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#07182d] tracking-tight leading-[1.14] mb-4">
              Inspect. Plan. Rebuild. Refinish. Test.
            </h2>
          </Reveal>

          <Reveal delay={0.15} yOffset={16}>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              We separate essential repairs from optional upgrades, and tell you which parts
              of your sign are worth preserving — instead of forcing one solution.
            </p>
          </Reveal>
        </div>

        {/* 2-Column True Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {processSteps.map((step, idx) => (
            <Reveal key={step.number} delay={0.08 * (idx + 1)} yOffset={20}>
              <div className="group relative h-full rounded-2xl p-6 sm:p-8 bg-white/45 backdrop-blur-2xl border border-white/70 ring-1 ring-black/[0.04] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_10px_35px_-5px_rgba(7,24,45,0.05)] hover:bg-white/65 hover:border-amber-400/60 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_18px_45px_-5px_rgba(217,119,6,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                {/* Specular top-edge shine */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

                {/* Subtle glass reflection highlight */}
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Top Row: Number & Watermark Icon */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-b from-white/90 to-white/40 border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.03)] backdrop-blur-md">
                    <span className="text-2xl font-extrabold text-[#d97706] ">
                      {step.number}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/40 border border-white/60 flex items-center justify-center text-slate-400/80 group-hover:text-amber-500 group-hover:scale-110 group-hover:bg-white/70 transition-all duration-300 shadow-2xs">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#07182d] mb-2.5 tracking-tight group-hover:text-[#d97706] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Dark Banner Callout matching screenshot */}
        <Reveal delay={0.2} yOffset={24} className="mt-6 sm:mt-8">
          <div className="bg-[#07182d] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-white/10">
            <p className="text-white font-bold text-base sm:text-lg leading-snug max-w-2xl">
              Repair or replace? The cheapest component is not always the most economical answer.
              We explain the options after inspection.
            </p>

            <IconButton
              href={inspectionUrl}
              size="md"
              icon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
              iconPosition="right"
              className="shrink-0 self-start md:self-auto font-extrabold"
            >
              BOOK AN INSPECTION
            </IconButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Process;
