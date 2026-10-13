'use client';

import React, { useState } from 'react';
import { FAQS_DATA } from '@/data/siteData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#040e1c] relative border-b border-navy-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-card border border-navy-line text-xs font-semibold uppercase tracking-wider text-amber-brand mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Common Inquiries & Technical Answers
          </h2>

          <p className="mt-4 text-sm sm:text-base text-cloud-sign">
            Everything you need to know about signboard repair, LED upgrades, turnaround times, and shopping mall fit-out compliance.
          </p>
        </div>

        {/* Accordion Container (Max rounded-xl) */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'bg-navy-card border-amber-brand/60 shadow-lg'
                    : 'bg-navy-card/60 border-navy-line hover:border-navy-line/90'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-300 ${isOpen
                        ? 'bg-amber-brand text-navy border-amber-brand rotate-180'
                        : 'bg-navy-soft text-cloud-sign border-navy-line'
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-cloud-sign leading-relaxed border-t border-navy-line/60">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px]  text-amber-brand">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
