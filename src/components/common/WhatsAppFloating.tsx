'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export const WhatsAppFloating: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20SignFix,%20I%20need%20a%20signboard%20repair%20or%20new%20quote.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
        aria-label="Chat with SignFix on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white stroke-none" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-out hidden sm:inline">
          WhatsApp Sign Photo
        </span>
      </a>
    </div>
  );
};
