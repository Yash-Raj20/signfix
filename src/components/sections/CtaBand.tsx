'use client';

import React from 'react';
import { ArrowRight, Phone, MessageSquare, Clock, Zap } from 'lucide-react';
import { siteContent } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '../ui/Badge';
import { IconButton } from '../ui/Button';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function CtaBand() {
  const whatsappUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Emergency / Fast Dispatch: Need quick signboard assistance.',
  });

  return (
    <section
      id="cta-band"
      aria-label="Fast Service Dispatch"
      className="relative py-20 sm:py-28 px-6 md:px-12 bg-[#f8f6f0] border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background ambient radial glows matching Hero theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-led/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle architectural grid pattern matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-360 mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Eyebrow Badge */}
        <Reveal delay={0.05} yOffset={16}>
          <Badge variant="amber" size="md" className="mb-5 sm:mb-6">
            FAST HYDERABAD DISPATCH
          </Badge>
        </Reveal>

        {/* Main Title */}
        <Reveal delay={0.1} yOffset={20}>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#07182d] leading-[1.12] tracking-tight max-w-[22ch] mb-4 ">
            {siteContent.ctaBand.titleStart}{' '}
            <span className="text-[#d97706] inline-block ">
              {siteContent.ctaBand.titleAccent}
            </span>
          </h2>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={0.15} yOffset={16}>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-9">
            {siteContent.ctaBand.subtext}
          </p>
        </Reveal>

        {/* Theme Styled Buttons */}
        <Reveal delay={0.2} yOffset={20}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <IconButton
              href={whatsappUrl}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
              iconPosition="right"
              className="font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              {siteContent.ctaBand.whatsappCta}
            </IconButton>

            <IconButton
              href={`tel:${siteContent.brand.phone}`}
              variant="secondary"
              size="lg"
              icon={<Phone className="w-4 h-4 text-[#d97706]" />}
              iconPosition="left"
              className="font-bold w-full sm:w-auto"
            >
              {siteContent.ctaBand.callCta}
            </IconButton>
          </div>
        </Reveal>

        {/* Quick Highlights / Trust Pills */}
        <Reveal delay={0.25} yOffset={16}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-slate-500 mt-10 pt-6 border-t border-slate-200/80">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Under 60 Mins WhatsApp Response</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>Direct Technician Diagnosis</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
              <span>Free Photo Assessment</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CtaBand;
