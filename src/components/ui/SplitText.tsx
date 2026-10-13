'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SplitTextProps {
  lines: string[];
  className?: string;
  delay?: number;
}

export function SplitText({ lines, className = '', delay = 0 }: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={className}>
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            initial={{ y: '105%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '105%', opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
