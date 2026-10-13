'use client';

import React from 'react';
import { Building2, Smile, Award, MapPin } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  value: React.ReactNode;
  label: string;
}

const statsData: StatItem[] = [
  {
    id: 'projects',
    icon: <Building2 className="w-5 h-5 text-[#07182d] group-hover:text-amber-500 transition-colors" />,
    value: (
      <>
        <span>200</span>
        <span className="text-[#d97706] font-bold">+</span>
      </>
    ),
    label: 'PROJECTS DONE',
  },
  {
    id: 'satisfaction',
    icon: <Smile className="w-5 h-5 text-[#07182d] group-hover:text-amber-500 transition-colors" />,
    value: (
      <>
        <span>99</span>
        <span className="text-[#d97706] font-bold">%</span>
      </>
    ),
    label: 'CLIENT SATISFACTION',
  },
  {
    id: 'established',
    icon: <Award className="w-5 h-5 text-[#07182d] group-hover:text-amber-500 transition-colors" />,
    value: '2018',
    label: 'ESTABLISHED SINCE 2018',
  },
  {
    id: 'network',
    icon: <MapPin className="w-5 h-5 text-[#07182d] group-hover:text-amber-500 transition-colors" />,
    value: (
      <span className="flex flex-col leading-[1.05] text-[28px] sm:text-3xl lg:text-[34px]">
        <span>PAN</span>
        <span>INDIA</span>
      </span>
    ),
    label: 'EXECUTION NETWORK',
  },
];

export function Stats() {
  return (
    <section
      aria-label="Key Performance Statistics"
      className="relative py-12 sm:py-16 bg-[#f8f6f0]"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <Reveal yOffset={24} className="w-full">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
            <Badge variant="default" size="md" className="mb-3.5">
              PROVEN TRACK RECORD
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07182d] tracking-tight leading-[1.2] max-w-2xl mx-auto">
              Trusted across industries with <span className="text-[#d97706] block">proven results</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {statsData.map((stat, idx) => (
            <Reveal key={stat.id} delay={idx * 0.12} yOffset={24} className="h-full">
              <div className="group relative bg-white rounded-2xl border border-black/[0.08] shadow-[0_4px_20px_rgba(7,24,45,0.03)] hover:shadow-[0_16px_36px_rgba(7,24,45,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between p-5 sm:p-7 min-h-[180px] sm:min-h-[210px] h-full text-center overflow-hidden">
                {/* Subtle Theme Accent Top Line */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#d97706]/70 to-transparent group-hover:via-[#d97706] transition-all duration-300" />

                {/* Icon Container matching theme */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#f8f6f0] border border-black/[0.06] flex items-center justify-center shadow-2xs mb-2 sm:mb-3 group-hover:bg-[#07182d] transition-colors duration-300">
                  {stat.icon}
                </div>

                {/* Stat Value in Theme Deep Ink with Warm Amber Accents */}
                <div className="flex-1 flex items-center justify-center font-extrabold text-3xl sm:text-4xl lg:text-[42px] tracking-tight text-[#07182d] my-1">
                  {stat.value}
                </div>

                {/* Stat Label */}
                <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-slate-500 uppercase mt-2">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
