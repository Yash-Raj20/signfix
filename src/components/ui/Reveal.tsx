'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  yOffset = 24,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
