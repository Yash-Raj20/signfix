'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSignageGraphic() {
  return (
    <div className="relative w-full max-w-lg mx-auto py-4 sm:py-6 flex items-center justify-center select-none">
      {/* Volumetric Amber Radial Backlight behind the 3D element */}
      <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full blur-[100px] pointer-events-none bg-amber-500/25 opacity-100 scale-110" />

      {/* 3D Floating Motion Container */}
      <motion.div
        animate={{
          y: [-7, 7, -7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-full flex flex-col items-center justify-center"
      >
        <div className="relative w-full aspect-square max-w-[440px] flex items-center justify-center">
          <Image
            src="/images/signfix-3d-transparent.png"
            alt="SignFix 3D Illuminated LED Channel Letters Signboard"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] brightness-105 contrast-105 filter drop-shadow-[0_0_35px_rgba(255,176,32,0.5)]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSignageGraphic;
