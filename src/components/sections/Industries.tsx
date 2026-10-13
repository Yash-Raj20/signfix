'use client';

import React from 'react';
import {
  Building2,
  UtensilsCrossed,
  Store,
  ShoppingBag,
  Gem,
  Landmark,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface IndustryCardData {
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

const industriesData: IndustryCardData[] = [
  {
    number: '01',
    title: 'Corporate & Offices',
    description:
      'Building identification, reception logos, corporate name plates, illuminated letters, directional signs and branded environments.',
    bullets: [
      'Building identification & reception logos',
      'Corporate name plates & directories',
      'Illuminated letters & branded spaces',
    ],
    icon: <Building2 className="w-4.5 h-4.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    isWide: true,
    colSpan: 'lg:col-span-7',
  },
  {
    number: '02',
    title: 'Restaurants & Cafés',
    description:
      'Storefront signs, illuminated logos, 3D letters, fascia signage, menu-area branding and high-visibility night signage.',
    bullets: [
      'Storefront signs & illuminated logos',
      '3D channel letters & fascia signage',
      'Menu-area branding & night visibility',
    ],
    icon: <UtensilsCrossed className="w-4.5 h-4.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    isWide: false,
    colSpan: 'lg:col-span-5',
  },
  {
    number: '03',
    title: 'Retail Chains',
    description:
      'Storefront fascia, channel letters, acrylic signs, brand-standard signage, replacement signs and multi-location support.',
    bullets: [
      'Storefront fascia & channel letters',
      'Acrylic signs & brand-standard formats',
      'Replacement signs & multi-location support',
    ],
    icon: <Store className="w-4.5 h-4.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    isWide: false,
    colSpan: 'lg:col-span-5',
  },
  {
    number: '04',
    title: 'Malls',
    description:
      'Retail outlet signage, illuminated letters, fascia repairs, replacement components and signage work coordinated around operating schedules.',
    bullets: [
      'Retail outlet signage & fascia repairs',
      'Illuminated letters & replacement parts',
      'Night-shift installation & mall compliance',
    ],
    icon: <ShoppingBag className="w-4.5 h-4.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2.2]" />,
    image:
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80',
    isWide: true,
    colSpan: 'lg:col-span-7',
  },
];

export function Industries() {
  const discussUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Signage Inquiry: I would like to discuss signage solutions for our business sector / industry.',
  });

  return (
    <section
      id="industries"
      aria-label="Industries We Serve"
      className="relative py-16 sm:py-20 bg-[#f8f6f0] overflow-hidden"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <Reveal delay={0.05} yOffset={16}>
              <Badge variant="default" size="md" className="mb-3">
                INDUSTRIES WE WORK WITH
              </Badge>
            </Reveal>

            <Reveal delay={0.1} yOffset={20}>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#07182d] tracking-tight leading-[1.12]">
                Signage for businesses that{' '}
                <br className="hidden sm:inline" />
                care about presentation
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.15} yOffset={16}>
            <a
              href={discussUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#07182d] hover:text-[#d97706] border-b-2 border-[#d97706] pb-1 transition-colors group self-start md:self-end"
            >
              <span>DISCUSS YOUR SECTOR</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#d97706]" />
            </a>
          </Reveal>
        </div>

        {/* Alternating Asymmetric Bento Grid matching Services layout (7-5, 5-7, 7-5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          {industriesData.map((item, idx) => {
            const waUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
              signType: item.title,
              problem: item.description,
            });

            const cardBorderStyles = item.highlighted
              ? 'border-amber-400/90 shadow-[0_4px_24px_rgba(217,119,6,0.08)] ring-1 ring-amber-400/30 hover:border-amber-500'
              : 'border-black/[0.08] shadow-[0_4px_20px_rgba(7,24,45,0.03)] hover:border-amber-500/70';

            return (
              <div key={item.number} className={`${item.colSpan} flex`}>
                <Reveal delay={idx * 0.08} yOffset={24} className="w-full h-full">
                  {item.isWide ? (
                    /* WIDE BENTO CARD (Horizontal split on sm+) */
                    <div
                      className={`group relative w-full h-full bg-white rounded-2xl border ${cardBorderStyles} transition-all duration-300 p-5 sm:p-7 flex flex-col sm:flex-row gap-6 justify-between overflow-hidden`}
                    >
                      {/* Left Side: Content */}
                      <div className="flex-1 flex flex-col">
                       

                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#07182d] tracking-tight group-hover:text-amber-600 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed mt-2">
                          {item.description}
                        </p>

                        <div className="border-t border-slate-100 my-4" />

                        <ul className="space-y-2 mb-5">
                          {item.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-600 font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto pt-3 border-t border-slate-100/70 flex items-center justify-between">
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#07182d] group-hover:text-amber-600 transition-colors"
                          >
                            <span>Discuss Requirements</span>
                            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>

                      {/* Right Side: Photo Showcase */}
                      <div className="sm:w-5/12 md:w-[46%] h-52 sm:h-auto min-h-[220px] rounded-xl overflow-hidden relative shrink-0 bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
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
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.96]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Body Content */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#07182d] tracking-tight group-hover:text-amber-600 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed mt-2">
                          {item.description}
                        </p>

                        <div className="border-t border-slate-100 my-4" />

                        <ul className="space-y-2 mb-5">
                          {item.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-600 font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto pt-3 border-t border-slate-100/70 flex items-center justify-between">
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#07182d] group-hover:text-amber-600 transition-colors"
                          >
                            <span>Discuss Requirements</span>
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

        {/* Editorial Sub-Section: Why customers need more than a sign vendor */}
        <Reveal delay={0.1} yOffset={24} className="mt-16 pt-8 ">
          <div className="max-w-4xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07182d] tracking-tight mb-4">
              Why customers need more than a sign vendor
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A serious signage project involves more than printing a logo. It can involve
              material selection, letter depth, acrylic or metal construction, LED density, driver
              capacity, wiring, heat management, weather exposure, fixing methods, access
              equipment, brand colours, night visibility and final alignment. SignFix brings these
              considerations into one workflow so the customer does not have to coordinate
              separate technicians for every part of the job.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Industries;
