'use client';

import React from 'react';
import { siteContent } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import Badge from '../ui/Badge';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function Faq() {
  const waUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'FAQ Question: I have a specific question regarding signboard repair / lighting.',
  });

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative py-16 sm:py-24 bg-[#f8f6f0] overflow-hidden"
    >
      {/* Background ambient radial glow matching Hero */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle architectural grid pattern matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-360 mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & WhatsApp CTA */}
          <div className="lg:col-span-5 sticky top-28">
            <Reveal delay={0.05} yOffset={16}>
              <Badge variant="amber" size="md" className="mb-3.5">
                {siteContent.faq.eyebrow || 'QUESTIONS & ANSWERS'}
              </Badge>
            </Reveal>

            <Reveal delay={0.1} yOffset={20}>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#07182d] tracking-tight leading-[1.12] mb-4">
                {siteContent.faq.title}
              </h2>
            </Reveal>

            <Reveal delay={0.15} yOffset={16}>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[45ch]">
                {siteContent.faq.description}
              </p>
            </Reveal>

            <Reveal delay={0.2} yOffset={16}>
              <div className="mt-8 pt-6 border-t border-slate-200/90 text-xs sm:text-sm text-slate-600">
                Have a different question?{' '}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d97706] font-bold hover:underline"
                >
                  Ask us directly on WhatsApp →
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean Accordion Container */}
          <div className="lg:col-span-7 bg-white/75 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <Reveal delay={0.2} yOffset={20}>
              <Accordion items={siteContent.faq.items} theme="light" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
