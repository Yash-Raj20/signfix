'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FaqItem } from '@/types/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface AccordionProps {
  items: FaqItem[];
  className?: string;
  theme?: 'light' | 'dark';
}

export function Accordion({ items, className = '', theme = 'light' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reducedMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isDark = theme === 'dark';

  return (
    <div className={cn('divide-y', isDark ? 'divide-white/10' : 'divide-slate-200/80', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.id} className="py-5 sm:py-6 first:pt-0 last:pb-0">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left gap-4 sm:gap-6 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg select-none"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  'text-base sm:text-lg font-bold tracking-tight transition-colors duration-200',
                  isDark
                    ? isOpen
                      ? 'text-amber-400'
                      : 'text-white group-hover:text-amber-300'
                    : isOpen
                    ? 'text-[#d97706]'
                    : 'text-[#07182d] group-hover:text-[#d97706]'
                )}
              >
                {item.question}
              </span>

              {/* Open / Close Toggle Button with Smooth 45deg Plus-to-Close (X) Rotation */}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  'shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-colors duration-200 shadow-2xs',
                  isOpen
                    ? 'bg-[#d97706] text-white border-[#d97706] shadow-sm'
                    : isDark
                    ? 'border-white/15 text-white/70 bg-white/5 group-hover:border-amber-400/50 group-hover:text-amber-400'
                    : 'border-slate-200/90 text-slate-500 bg-white group-hover:border-amber-400/60 group-hover:text-amber-600 group-hover:bg-amber-500/10'
                )}
                aria-hidden="true"
              >
                <Plus className="w-4 h-4 stroke-[2.2]" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  animate={
                    reducedMotion
                      ? { opacity: 1 }
                      : { opacity: 1, height: 'auto' }
                  }
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      'pt-3.5 text-sm sm:text-[15px] leading-relaxed max-w-[65ch]',
                      isDark ? 'text-white/70' : 'text-slate-600'
                    )}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
