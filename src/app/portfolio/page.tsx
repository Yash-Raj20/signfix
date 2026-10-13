'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Fabrication } from '@/components/sections/Fabrication';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import { IconButton, Button } from '@/components/ui/Button';
import { ArrowRight, MapPin, Sparkles, Star, CheckCircle2, Filter } from 'lucide-react';
import { siteContent } from '@/lib/content';
import { PORTFOLIO_DATA, TESTIMONIALS_DATA } from '@/data/siteData';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';
import { HeroSignageGraphic } from '@/components/common/HeroSignageGraphic';

const categories = ['All', '3D LED', 'ACP Facade', 'Corporate', 'Restoration', 'Retail'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === selectedCategory);

  const quoteUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Portfolio Project Inquiry',
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f0] text-ink">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/90">
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/20 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-360 mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal delay={0.05} yOffset={16}>
                <Badge variant="amber" size="md" className="mb-4">
                  04 — PORTFOLIO & PROVEN TRACK RECORD
                </Badge>
              </Reveal>

              <Reveal delay={0.1} yOffset={20}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#07182d] tracking-tight leading-[1.1] mb-6">
                  Real projects. Real precision.{' '}
                  <span className="text-amber-600">Real luminance.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.15} yOffset={16}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Over 300+ executed signboards across Hyderabad and Pan-India. From high-altitude building ACP cladding in Hitech City to fine brushed-brass corporate emblems and rapid LED restorations in Banjara Hills.
                </p>
              </Reveal>

              <Reveal delay={0.2} yOffset={20}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <IconButton
                    asLink
                    href={quoteUrl}
                    size="md"
                    icon={<ArrowRight className="w-4 h-4 text-[#07182d] stroke-[2.5]" />}
                    iconPosition="right"
                  >
                    GET QUOTE FOR SIMILAR WORK
                  </IconButton>

                  <Button
                    asLink
                    href={`tel:${siteContent.brand.phone}`}
                    variant="secondary"
                    size="md"
                  >
                    Direct Call: {siteContent.brand.phoneDisplay}
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right Column: 3D Floating Signage Image Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <Reveal delay={0.2} className="w-full">
                <HeroSignageGraphic />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery with Filter Chips */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/90">
          <div className="max-w-360 mx-auto px-6 md:px-12">
            {/* Filter Category Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-200/90">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  FILTER BY SECTOR:
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      'px-4 py-2 rounded-full text-xs font-bold transition-all shadow-2xs',
                      selectedCategory === cat
                        ? 'bg-[#07182d] text-white shadow-sm'
                        : 'bg-[#f8f6f0] text-slate-600 hover:text-[#07182d] hover:bg-slate-200/60'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {filteredProjects.map((project) => {
                const projectWaUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
                  problem: `Inquiry regarding ${project.title} for ${project.client}`,
                });

                return (
                  <div
                    key={project.id}
                    className="p-6 sm:p-7 rounded-3xl bg-[#f8f6f0]/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Category & Location Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 text-amber-800">
                          {project.category}
                        </span>

                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="w-3.5 h-3.5 text-amber-600" />
                          <span>{project.location}</span>
                        </div>
                      </div>

                      {/* Client & Title */}
                      <h3 className="text-xl font-extrabold text-[#07182d] mb-1 group-hover:text-amber-700 transition-colors">
                        {project.client}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                        {project.title}
                      </p>

                      {/* Technical Specs Box */}
                      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 mb-4 text-xs text-slate-600 space-y-1.5 shadow-2xs">
                        <p>
                          <strong className="text-[#07182d]">Specs:</strong> {project.specs}
                        </p>
                        <p className="text-amber-700 font-medium">
                          ✓ {project.highlight}
                        </p>
                      </div>
                    </div>

                    {/* Bottom WhatsApp Button */}
                    <div className="pt-4 border-t border-slate-200/90">
                      <a
                        href={projectWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-amber-500/10 border border-slate-200 text-[#07182d] hover:text-amber-700 text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
                      >
                        <span>WhatsApp for similar quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 sm:py-28 bg-[#f8f6f0] border-b border-slate-200/90">
          <div className="max-w-360 mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-14">
              <Badge variant="amber" size="md" className="mb-3">
                CLIENT VERIFICATIONS
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07182d] tracking-tight">
                What Hyderabad business leaders say.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS_DATA.map((t) => (
                <div
                  key={t.id}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-500 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 italic">
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-[#07182d] text-sm">{t.name}</h4>
                      <p className="text-xs text-slate-500">
                        {t.role} · {t.company}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-500/10 px-2 py-1 rounded-md">
                      {t.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop In-House Fabrication Showcase */}
        <Fabrication />

        {/* Call to Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
