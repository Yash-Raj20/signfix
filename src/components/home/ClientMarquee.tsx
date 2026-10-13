import React from 'react';
import { CLIENTS_DATA } from '@/data/siteData';
import { Sparkles, Building } from 'lucide-react';

export const ClientMarquee: React.FC = () => {
  const row1 = CLIENTS_DATA.slice(0, 6);
  const row2 = CLIENTS_DATA.slice(6, 12);

  const marqueeSet1 = [...row1, ...row1, ...row1];
  const marqueeSet2 = [...row2, ...row2, ...row2];

  return (
    <section id="clients" className="py-16 sm:py-20 bg-[#faf8f2] overflow-hidden relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef9e7] border border-[#f6de8c] text-xs font-bold uppercase tracking-wider text-[#855e00] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-brand" />
          <span>Trusted by Leading Brands Across India</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-ink tracking-tight">
          Our Esteemed Clients & Partners
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Delivering precision 3D illuminated letters, ACP facade remodeling, and rapid emergency sign repair
          for high-visibility corporate and retail institutions.
        </p>
      </div>

      {/* Marquee Container with edge fading gradients */}
      <div className="relative w-full overflow-hidden space-y-4">
        {/* Left and Right blur masks matching ivory background */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#faf8f2] via-[#faf8f2]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#faf8f2] via-[#faf8f2]/90 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 py-2">
            {marqueeSet1.map((client, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-amber-brand transition-all duration-300 shrink-0 group hover:-translate-y-0.5 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-light border border-amber-border flex items-center justify-center text-amber-brand group-hover:scale-105 transition-transform">
                  <Building className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-ink group-hover:text-amber-brand transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {client.category} · {client.tagline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 py-2">
            {marqueeSet2.map((client, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-amber-brand transition-all duration-300 shrink-0 group hover:-translate-y-0.5 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-light border border-amber-border flex items-center justify-center text-amber-brand group-hover:scale-105 transition-transform">
                  <Building className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-ink group-hover:text-amber-brand transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {client.category} · {client.tagline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
