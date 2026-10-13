'use client';

import React from 'react';
import {
  Building2,
  ShoppingBag,
  Utensils,
  Store,
  Sparkles,
  KeyRound,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

interface ClientLogo {
  name: string;
  logo: string;
}

const row1Clients: ClientLogo[] = [
  { name: 'Cargill', logo: 'https://knkenterprises.co/Clients/Cargill%20food.png' },
  { name: 'Coca-Cola', logo: 'https://knkenterprises.co/Clients/Coca%20cola.png' },
  { name: 'Dhara Oil', logo: 'https://knkenterprises.co/Clients/Dhara%20oil.jpg' },
  { name: 'DURO Ply', logo: 'https://knkenterprises.co/Clients/Duro%20ply.jpg' },
  { name: 'Fena', logo: 'https://knkenterprises.co/Clients/Fena%20Ltd.jpg' },
  { name: 'Fortune Oil', logo: 'https://knkenterprises.co/Clients/Fortune%20Oil.png' },
  { name: 'HDFC Bank', logo: 'https://knkenterprises.co/Clients/HDFC%20Bank.png' },
  { name: "Haldiram's", logo: 'https://knkenterprises.co/Clients/Haldirams_Logo_og.png' },
  { name: 'Blue Dart', logo: 'https://knkenterprises.co/Clients/Blue%20Dart.png' },
  { name: 'IndusInd Bank', logo: 'https://knkenterprises.co/Clients/IndusIndBank.jpg' },
  { name: 'Birla White', logo: 'https://knkenterprises.co/Clients/Birla%20Putty.png' },
  { name: 'ACC Cement', logo: 'https://knkenterprises.co/Clients/ACC%20Cement.jpeg' },
];

const row2Clients: ClientLogo[] = [
  { name: 'Shree & Bangur Cement', logo: 'https://knkenterprises.co/Clients/Shree%20&%20Bangur%20cement.jpg' },
  { name: 'Sirca Paints', logo: 'https://knkenterprises.co/Clients/Sirca%20paint.png' },
  { name: 'Suhana Masala', logo: 'https://knkenterprises.co/Clients/Suhana%20Masala.jpg' },
  { name: 'Wagh Bakri Tea', logo: 'https://knkenterprises.co/Clients/Wagbhari%20chai.png' },
  { name: 'Walkaroo', logo: 'https://knkenterprises.co/Clients/Walkroo.jpeg' },
  { name: 'Wonderchef', logo: 'https://knkenterprises.co/Clients/Wonderchef.jpg' },
  { name: 'Shalimar Paints', logo: 'https://knkenterprises.co/Clients/shalimar%20paint.jpg' },
  { name: 'Nerolac Paints', logo: 'https://knkenterprises.co/Clients/Nerolac%20paints.jpg' },
  { name: 'Pepsi', logo: 'https://knkenterprises.co/Clients/Pepsi.jpg' },
  { name: 'Relaxo', logo: 'https://knkenterprises.co/Clients/Relaxo.png' },
  { name: 'Microtek', logo: 'https://knkenterprises.co/Clients/Microtek.jpg' },
];

interface IndustryItem {
  label: string;
  icon: React.ReactNode;
}

const industries: IndustryItem[] = [
  {
    label: 'CORPORATE OFFICES',
    icon: <Building2 className="w-3.5 h-3.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2]" />,
  },
  {
    label: 'MALLS',
    icon: <ShoppingBag className="w-3.5 h-3.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2]" />,
  },
  {
    label: 'RESTAURANTS',
    icon: <Utensils className="w-3.5 h-3.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2]" />,
  },
  {
    label: 'RETAIL CHAINS',
    icon: <Store className="w-3.5 h-3.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2]" />,
  },
  {
    label: 'SHOWROOMS',
    icon: <Sparkles className="w-3.5 h-3.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2]" />,
  },
  {
    label: 'PROPERTY MANAGERS',
    icon: <KeyRound className="w-3.5 h-3.5 text-[#07182d] group-hover:text-amber-600 transition-colors stroke-[2]" />,
  },
];

export function ClientMarquee() {
  return (
    <section
      aria-label="Esteemed Clients and Industries"
      className="relative py-14 sm:py-20 bg-[#f8f6f0] overflow-hidden"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        {/* Editorial Story Hook (Image 2) */}
        <Reveal yOffset={24} className="mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07182d] tracking-tight leading-tight mb-4">
              Before the customer even walks in
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Before a customer enters a restaurant, before a visitor reaches a corporate reception,
              before a shopper walks into a retail store and before a guest recognises a showroom,
              the sign has already communicated something about the business. If the sign is dark,
              damaged, faded, unevenly illuminated or poorly finished, the impression can suffer.
            </p>
          </div>
        </Reveal>

        {/* Sectors Ribbon */}
        <Reveal delay={0.08} yOffset={20} className="mb-16">
          <div className="pt-5 pb-6 border-y border-black/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            <span className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] text-slate-500 shrink-0 font-medium">
              WE WORK WITH
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs sm:text-[13px] font-bold text-[#07182d] tracking-wide">
              {industries.map((item, i) => (
                <React.Fragment key={item.label}>
                  <div className="group flex items-center gap-2 cursor-default">
                    {/* Minimal Rounded Icon Badge */}
                    <span className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-white border border-black/[0.1] shadow-2xs flex items-center justify-center shrink-0 group-hover:border-amber-500/70 group-hover:bg-amber-50/40 transition-all">
                      {item.icon}
                    </span>
                    <span className="group-hover:text-amber-600 transition-colors">{item.label}</span>
                  </div>
                  {i < industries.length - 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 select-none hidden md:inline-block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Clients Header (Image 1) */}
        <Reveal delay={0.12} yOffset={20} className="text-center mb-10 sm:mb-14">
          <div className="flex flex-col items-center">
            <Badge variant="default" size="md" className="mb-3.5">
              TRUSTED NATIONWIDE
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#07182d] tracking-tight leading-tight mb-3">
              Our <span className="text-[#d97706]">Esteemed Clients</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Partnered with 40+ leading brands for turnkey signage manufacturing & Pan-India execution.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Dual Row Seamless Infinite Marquee with Gradient Fade Edges */}
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {/* Row 1: Scrolling Right to Left */}
        <div className="marquee-row-wrap overflow-hidden py-2 sm:py-3.5">
          <div className="marquee-track-left flex gap-4 sm:gap-6">
            {[...row1Clients, ...row1Clients].map((client, idx) => (
              <div
                key={`r1-${client.name}-${idx}`}
                className="group cursor-pointer w-44 sm:w-52 h-20 sm:h-22 bg-white rounded-2xl border border-black/[0.08] shadow-[0_4px_16px_rgba(7,24,45,0.03)] hover:border-amber-500/80 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-3.5 sm:p-4 shrink-0 relative z-10 hover:z-20"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  loading="lazy"
                  className="max-h-10 sm:max-h-12 max-w-[85%] object-contain filter grayscale-25 contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Left to Right */}
        <div className="marquee-row-wrap overflow-hidden py-2 sm:py-3.5 mt-1 sm:mt-2">
          <div className="marquee-track-right flex gap-4 sm:gap-6">
            {[...row2Clients, ...row2Clients].map((client, idx) => (
              <div
                key={`r2-${client.name}-${idx}`}
                className="group cursor-pointer w-44 sm:w-52 h-20 sm:h-22 bg-white rounded-2xl border border-black/[0.08] shadow-[0_4px_16px_rgba(7,24,45,0.03)] hover:border-amber-500/80 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-3.5 sm:p-4 shrink-0 relative z-10 hover:z-20"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  loading="lazy"
                  className="max-h-10 sm:max-h-12 max-w-[85%] object-contain filter grayscale-25 contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
