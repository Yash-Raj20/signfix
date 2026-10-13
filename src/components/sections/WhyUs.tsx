'use client';

import React from 'react';
import { siteContent } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 px-5 md:px-10 bg-ink border-b border-white/10">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-[0.16em] text-led ">
                  {siteContent.whyUs.eyebrow}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-paper tracking-tight leading-[1.08]">
                {siteContent.whyUs.title}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end">
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg text-paper/70  leading-relaxed max-w-[60ch]">
                {siteContent.whyUs.description}
              </p>
            </Reveal>
          </div>
        </div>

        {/* 2x2 Grid Separated by 1px Hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10">
          {/* Left Column (Items 0 & 2) */}
          <div className="divide-y divide-white/10">
            {siteContent.whyUs.points.filter((_, i) => i % 2 === 0).map((point, index) => (
              <Reveal key={point.number} delay={0.1 * index} className="p-8 sm:p-12">
                <div className="flex items-baseline justify-between mb-8">
                  <span className=" text-sm tracking-widest text-led">
                    {point.number}
                  </span>
                  <div className="text-right">
                    <span className="font-serif text-3xl sm:text-4xl text-paper block">
                      {point.metric}
                    </span>
                    <span className="text-[11px]  text-paper/40 uppercase tracking-wider">
                      {point.metricLabel}
                    </span>
                  </div>
                </div>

                <h3 className=" text-xl sm:text-2xl font-medium text-paper mb-3">
                  {point.title}
                </h3>

                <p className="text-sm sm:text-base text-paper/70  leading-relaxed max-w-[50ch]">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Right Column (Items 1 & 3) */}
          <div className="divide-y divide-white/10">
            {siteContent.whyUs.points.filter((_, i) => i % 2 !== 0).map((point, index) => (
              <Reveal key={point.number} delay={0.15 * index} className="p-8 sm:p-12">
                <div className="flex items-baseline justify-between mb-8">
                  <span className=" text-sm tracking-widest text-led">
                    {point.number}
                  </span>
                  <div className="text-right">
                    <span className="font-serif text-3xl sm:text-4xl text-paper block">
                      {point.metric}
                    </span>
                    <span className="text-[11px]  text-paper/40 uppercase tracking-wider">
                      {point.metricLabel}
                    </span>
                  </div>
                </div>

                <h3 className=" text-xl sm:text-2xl font-medium text-paper mb-3">
                  {point.title}
                </h3>

                <p className="text-sm sm:text-base text-paper/70  leading-relaxed max-w-[50ch]">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
