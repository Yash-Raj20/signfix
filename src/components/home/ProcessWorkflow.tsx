import React from 'react';
import { WORKFLOW_STEPS } from '@/data/siteData';
import { Search, FileText, Cpu, CheckCircle2, Truck } from 'lucide-react';

const stepIcons: Record<string, React.ReactNode> = {
  Search: <Search className="w-5 h-5 text-amber-brand" />,
  FileText: <FileText className="w-5 h-5 text-amber-brand" />,
  Cpu: <Cpu className="w-5 h-5 text-amber-brand" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-amber-brand" />,
  Truck: <Truck className="w-5 h-5 text-amber-brand" />,
};

export const ProcessWorkflow: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-24 bg-[#040e1c] relative border-b border-navy-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-card border border-navy-line text-xs font-semibold uppercase tracking-wider text-amber-brand mb-3">
            <span>The SignFix Transformation Approach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Inspect. Plan. Rebuild. Test. Mount.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-cloud-sign">
            Every signboard project follows an exact engineering sequence to guarantee balanced luminescence, water resistance, and zero structural risk.
          </p>
        </div>

        {/* Horizontal Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {WORKFLOW_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 rounded-xl bg-navy-card border border-navy-line hover:border-amber-brand/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black  text-slate-sign group-hover:text-amber-brand transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-navy-soft border border-navy-line flex items-center justify-center group-hover:border-amber-brand/40 transition-colors">
                    {stepIcons[item.iconName]}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-brand transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-cloud-sign leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="mt-6 pt-4 border-t border-navy-line/80 flex items-center justify-between text-[10px]  text-muted-sign">
                <span>STAGE 0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-amber-brand opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
