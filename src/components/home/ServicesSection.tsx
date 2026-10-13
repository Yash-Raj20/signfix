import React from 'react';
import { SERVICES_DATA, SITE_CONFIG } from '@/data/siteData';
import {
  Sparkles,
  RefreshCw,
  Layers,
  Building2,
  Store,
  ShieldCheck,
  Check,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-amber-brand" />,
  RefreshCw: <RefreshCw className="w-5 h-5 text-amber-brand" />,
  Layers: <Layers className="w-5 h-5 text-amber-brand" />,
  Building2: <Building2 className="w-5 h-5 text-amber-brand" />,
  Store: <Store className="w-5 h-5 text-amber-brand" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-brand" />,
};

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef9e7] border border-[#f6de8c] text-xs font-bold uppercase tracking-wider text-[#855e00] mb-3">
              <span>Engineering & Craftsmanship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight">
              Complete Signage Solutions & Repair Capabilities
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              From emergency single-module LED fixes to multi-story ACP facade remodeling and nationwide retail chain rollouts, SignFix brings technical mastery to every letter.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20SignFix,%20I%20need%20assistance%20with%20a%20signage%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-brand hover:bg-amber-hover text-ink font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(255,176,0,0.35)]"
            >
              <MessageCircle className="w-4 h-4 fill-ink" />
              <span>Consult Our Sign Engineer</span>
            </a>
          </div>
        </div>

        {/* Services Grid (6 Cards, Max rounded-xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-xl bg-[#faf8f2] border border-slate-200/80 hover:border-amber-brand p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category / Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:border-amber-brand flex items-center justify-center transition-colors shadow-sm">
                    {serviceIcons[service.iconName] || <Sparkles className="w-5 h-5 text-amber-brand" />}
                  </div>

                  {service.badge && (
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-amber-brand/15 text-[#855e00] border border-amber-brand/40">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Category & Title */}
                <div className="text-xs  uppercase tracking-wider text-slate-500 mb-1">
                  {service.category}
                </div>
                <h3 className="text-xl font-bold text-ink group-hover:text-amber-brand transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-amber-brand shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Specs & Action */}
              <div className="pt-5 border-t border-slate-200">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px]  px-2 py-0.5 rounded-lg bg-white text-slate-600 border border-slate-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white hover:bg-amber-brand text-ink font-bold text-xs transition-colors duration-200 border border-slate-200 hover:border-amber-brand shadow-sm"
                >
                  <span>Request Service Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
