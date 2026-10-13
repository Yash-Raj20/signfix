'use client';

import React from 'react';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function FloatingActions() {
  const whatsappUrl = buildWhatsAppUrl(siteContent.brand.whatsapp);

  return (
    <div className="md:hidden fixed bottom-5 left-5 right-5 z-40 flex items-center gap-2.5 pointer-events-none">
      {/* Call Button */}
      <a
        href={`tel:${siteContent.brand.phone}`}
        className="pointer-events-auto flex-1 h-12 rounded-lg bg-ink border border-white/20 text-paper  text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform"
      >
        <svg className="w-3.5 h-3.5 text-led" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex-[1.4] h-12 rounded-lg bg-led text-ink  text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,176,32,0.4)] active:scale-95 transition-transform"
      >
        <svg className="w-4 h-4 fill-ink" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
