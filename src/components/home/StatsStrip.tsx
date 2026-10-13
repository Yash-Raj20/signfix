import React from 'react';
import { STATS_DATA } from '@/data/siteData';
import { Wrench, Zap, ShieldCheck, Globe } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5 text-amber-brand" />,
  Zap: <Zap className="w-5 h-5 text-amber-brand" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-brand" />,
  Globe: <Globe className="w-5 h-5 text-amber-brand" />,
};

export const StatsStrip: React.FC = () => {
  return (
    <section className="relative z-20 py-10 px-4 sm:px-8 border-y border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 rounded-xl bg-[#faf8f2] border border-slate-200/80 hover:border-amber-brand/80 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 group-hover:border-amber-brand transition-colors shadow-sm">
                  {iconMap[stat.iconName] || <Wrench className="w-5 h-5 text-amber-brand" />}
                </div>
                <span className="text-[10px]  uppercase tracking-widest text-slate-400">
                  METRIC_0{idx + 1}
                </span>
              </div>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-ink tracking-tight group-hover:text-amber-brand transition-colors">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </div>

              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
