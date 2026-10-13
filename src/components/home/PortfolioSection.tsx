'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/siteData';
import { Layers, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

const categories = ['All', '3D LED', 'ACP Facade', 'Restoration', 'Corporate', 'Retail'] as const;

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-navy relative border-b border-navy-line">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-brand/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-card border border-navy-line text-xs font-semibold uppercase tracking-wider text-amber-brand mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Signage Installations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Proof of Craftsmanship
          </h2>

          <p className="mt-4 text-sm sm:text-base text-cloud-sign">
            Browse our completed sign board restorations, architectural 3D channel letters, and high-impact facade installations across Hyderabad and nationwide retail rollouts.
          </p>

          {/* Category Filter Pills (Max rounded-lg) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 border ${activeCategory === cat
                    ? 'bg-amber-brand text-navy border-amber-brand shadow-[0_2px_12px_rgba(255,176,0,0.3)]'
                    : 'bg-navy-card text-cloud-sign border-navy-line hover:text-white hover:border-amber-brand/50 hover:bg-navy-soft'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid (Max rounded-xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl bg-navy-card/90 border border-navy-line hover:border-amber-brand/60 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_6px_24px_-8px_rgba(7,26,45,0.5)] flex flex-col justify-between"
            >
              {/* Visual Card Canvas Header */}
              <div className="p-6 sm:p-7 relative bg-gradient-to-br from-[#0c233c] to-[#051323] border-b border-navy-line/80 overflow-hidden">
                {/* Visual Ambient Light */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: item.accentColor || '#ffb000' }}
                />

                {/* Category & Location */}
                <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                  <span className="text-[11px]  uppercase tracking-wider px-2.5 py-1 rounded-lg bg-navy/80 border border-navy-line text-amber-brand">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-muted-sign">
                    <MapPin className="w-3 h-3 text-amber-brand" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Client & Title */}
                <div className="relative z-10">
                  <span className="text-xs font-semibold text-muted-sign uppercase tracking-wider">
                    {item.client}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-brand transition-colors mt-1">
                    {item.title}
                  </h3>
                </div>

                {/* Glowing neon decorative bar */}
                <div
                  className="w-16 h-1 rounded-full mt-4 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: item.accentColor || '#ffb000' }}
                />
              </div>

              {/* Specs & Highlight Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs  text-muted-sign uppercase tracking-wider mb-2">
                    ENGINEERED SPECIFICATIONS
                  </div>
                  <p className="text-xs sm:text-sm text-cloud-sign mb-4 leading-relaxed  bg-navy-soft/60 p-3 rounded-lg border border-navy-line">
                    {item.specs}
                  </p>

                  <div className="flex items-start gap-2 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-amber-brand shrink-0 mt-0.5" />
                    <span className="leading-snug">{item.highlight}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-5 mt-5 border-t border-navy-line/80">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-cloud-sign group-hover:text-amber-brand transition-colors"
                  >
                    <span>Request Similar Specification</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
