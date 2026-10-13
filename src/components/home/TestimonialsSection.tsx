import React from 'react';
import { TESTIMONIALS_DATA } from '@/data/siteData';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-navy relative border-b border-navy-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-card border border-navy-line text-xs font-semibold uppercase tracking-wider text-amber-brand mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Feedback & Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Loved By Retail Chains & Facility Heads
          </h2>

          <p className="mt-4 text-sm sm:text-base text-cloud-sign">
            Real experiences from operational leaders who trusted SignFix with their most visible storefront assets.
          </p>
        </div>

        {/* Testimonials Grid (Max rounded-xl) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-xl bg-navy-card border border-navy-line hover:border-amber-brand/50 transition-all duration-300 flex flex-col justify-between shadow-lg relative group hover:-translate-y-1"
            >
              <div>
                {/* Top Quote Icon & 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-brand">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-brand" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-sign/40" />
                </div>

                {/* Service Tag */}
                <div className="text-[11px]  text-amber-brand mb-3">
                  Service: {t.serviceUsed}
                </div>

                {/* Review Body */}
                <p className="text-sm text-cloud-sign leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-navy-line flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-brand transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-muted-sign">
                    {t.role}, <span className="text-cloud-sign">{t.company}</span>
                  </p>
                </div>
                <span className="text-[11px]  text-slate-sign">
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
