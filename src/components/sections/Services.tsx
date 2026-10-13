'use client';

import React from 'react';
import {
  Wrench,
  Sparkles,
  Zap,
  Factory,
  BadgeCheck,
  SlidersHorizontal,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceCardData {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
  image: string;
  isWide: boolean;
  colSpan: string;
  highlighted?: boolean;
}

const servicesData: ServiceCardData[] = [
  {
    number: '01',
    title: 'Sign Board Repair',
    description:
      'Damage is rarely one component. We inspect the whole sign before replacing the most obvious failed part.',
    bullets: [
      'LED modules, drivers & wiring',
      'Acrylic faces and sign panels',
      'Frames, fascia and mounting hardware',
    ],
    icon: <Wrench className="w-4.5 h-4.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    isWide: true,
    colSpan: 'lg:col-span-7',
  },
  {
    number: '02',
    title: 'Restoration & Makeover',
    description:
      'Repair fixes a fault. Restoration brings the sign back to a better standard as a complete visual object.',
    bullets: [
      'New faces, graphics and refinishing',
      'Brighter, more even LED illumination',
      'Wiring correction & weather protection',
    ],
    icon: <Sparkles className="w-4.5 h-4.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    isWide: false,
    colSpan: 'lg:col-span-5',
  },
  {
    number: '03',
    title: 'LED Signage & Repair',
    description:
      'Front-lit, backlit, halo-lit and light boxes — designed, installed and serviced as part of the sign.',
    bullets: [
      'Even module spacing and brightness',
      'Correct driver and power capacity',
      'LED upgrades for older signs',
    ],
    icon: <Zap className="w-4.5 h-4.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1572945553123-01584607924d?auto=format&fit=crop&w=800&q=80',
    isWide: false,
    colSpan: 'lg:col-span-5',
  },
  {
    number: '04',
    title: 'New Sign Manufacturing',
    description:
      'In-house fabrication from measurement to dispatch, with quality checked while the sign is being made.',
    bullets: [
      'Acrylic, ACP, steel and aluminium',
      '3D and channel letters',
      'Large facade and building signs',
    ],
    icon: <Factory className="w-4.5 h-4.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    isWide: true,
    colSpan: 'lg:col-span-7',
  },
  {
    number: '05',
    title: 'Name Plates & Corporate Signs',
    description:
      'Small in size does not mean small in importance. Standardised formats for multi-branch organisations.',
    bullets: [
      'Acrylic, steel, brass and engraved',
      'Reception, room and building plates',
      'Pan-India dispatch from one spec',
    ],
    icon: <BadgeCheck className="w-4.5 h-4.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    isWide: true,
    colSpan: 'lg:col-span-7',
  },
  {
    number: '06',
    title: 'Installation & Maintenance',
    description:
      'Installation determines how a finished sign looks on the building — and how it is serviced later.',
    bullets: [
      'Access, lifting and site coordination',
      'Electrical connection and testing',
      'Preventive plans for multi-site brands',
    ],
    icon: <SlidersHorizontal className="w-4.5 h-4.5 text-[#d97706] stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    isWide: false,
    colSpan: 'lg:col-span-5',
    highlighted: true,
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-label="Our Core Services"
      className="relative py-16 sm:py-24 bg-[#f8f6f0] overflow-hidden"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Reveal delay={0.05} yOffset={20}>
            <Badge variant="default" size="md" className="mb-4">
              SERVICES WE OFFER
            </Badge>
          </Reveal>

          <Reveal delay={0.1} yOffset={24}>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#07182d] tracking-tight leading-[1.12] mb-4">
              One team for the whole sign —{' '}
              <span className="text-[#d97706] block">not one part of it</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16} yOffset={20}>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Material selection, letter depth, LED density, driver capacity, wiring, weather exposure,
              fixing method, brand colour, night visibility and final alignment — brought into a single
              workflow.
            </p>
          </Reveal>
        </div>

        {/* Alternating Asymmetric Bento Grid (7-5, 5-7, 7-5) matching wireframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          {servicesData.map((service, idx) => {
            const waUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
              signType: service.title,
              problem: service.description,
            });

            const cardBorderStyles = service.highlighted
              ? 'border-amber-400/90 shadow-[0_4px_24px_rgba(217,119,6,0.08)] ring-1 ring-amber-400/30 hover:border-amber-500'
              : 'border-black/[0.08] shadow-[0_4px_20px_rgba(7,24,45,0.03)] hover:border-amber-500/70'

            return (
              <div key={service.number} className={`${service.colSpan} flex`}>
                <Reveal delay={idx * 0.08} yOffset={24} className="w-full h-full">
                  {service.isWide ? (
                    /* WIDE BENTO CARD (Horizontal split on sm+) */
                    <div
                      className={`group relative w-full h-full bg-white rounded-2xl border ${cardBorderStyles} transition-all duration-300 p-5 sm:p-7 flex flex-col sm:flex-row gap-6 justify-between overflow-hidden`}
                    >
                      {/* Left Side: Content */}
                      <div className="flex-1 flex flex-col">
                        {/* Header with Icon and Number */}
                        <div className="flex items-center justify-between mb-3.5">
                          {/* <div className="w-10 h-10 rounded-xl bg-[#f8f6f0] border border-black/[0.06] flex items-center justify-center text-[#07182d] group-hover:bg-[#07182d] group-hover:text-amber-400 transition-colors shadow-2xs">
                            {service.icon}
                          </div> */}
                          {/* <span className="text-xs  font-bold text-slate-400">
                            {service.number}
                          </span> */}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#07182d] tracking-tight group-hover:text-amber-600 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed mt-2">
                          {service.description}
                        </p>

                        {/* Minimal Divider & Bullets directly connected without gap */}
                        <div className="border-t border-slate-100 my-4" />

                        <ul className="space-y-2 mb-5">
                          {service.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-600 font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA at bottom */}
                        <div className="mt-auto pt-3 border-t border-slate-100/70 flex items-center justify-between">
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#07182d] group-hover:text-amber-600 transition-colors"
                          >
                            <span>Inquire Service</span>
                            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                          </a>

                        </div>
                      </div>

                      {/* Right Side: Photo Showcase */}
                      <div className="sm:w-5/12 md:w-[46%] h-52 sm:h-auto min-h-[220px] rounded-xl overflow-hidden relative shrink-0 bg-slate-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.96]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  ) : (
                    /* NARROW BENTO CARD (Vertical Stack) */
                    <div
                      className={`group relative w-full h-full bg-white rounded-2xl border ${cardBorderStyles} transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between overflow-hidden`}
                    >
                      {/* Top Visual Showcase */}
                      <div className="h-44 sm:h-48 w-full rounded-xl overflow-hidden relative mb-5 bg-slate-100 shrink-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.96]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Icon Badge */}
                        {/* <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-xs border border-black/[0.08] flex items-center justify-center shadow-xs">
                          {service.icon}
                        </div> */}

                        {/* Number Badge */}
                        {/* <span className="absolute top-3 right-3 text-xs  font-bold text-white bg-[#07182d]/85 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10">
                          {service.number}
                        </span> */}
                      </div>

                      {/* Body Content */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#07182d] tracking-tight group-hover:text-amber-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed mt-2">
                          {service.description}
                        </p>

                        {/* Minimal Divider & Bullets directly connected */}
                        <div className="border-t border-slate-100 my-4" />

                        <ul className="space-y-2 mb-5">
                          {service.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-600 font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA at bottom */}
                        <div className="mt-auto pt-3 border-t border-slate-100/70 flex items-center justify-between">
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#07182d] group-hover:text-amber-600 transition-colors"
                          >
                            <span>Inquire Service</span>
                            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                          </a>

                        </div>
                      </div>
                    </div>
                  )}
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Editorial Philosophy (Directly below cards) */}
        <Reveal delay={0.1} yOffset={24} className="mt-16 sm:mt-20 pt-6">
          <div className="max-w-5xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07182d] tracking-tight leading-tight mb-3">
              Repair. Restore. Refresh. Transform.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our approach is simple: inspect the complete sign, identify the real issue, preserve what is worth keeping, replace what has failed and upgrade what can improve the result. A broken LED may be the immediate problem, but the finished job still has to look like a professional sign.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
