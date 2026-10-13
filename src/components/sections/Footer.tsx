'use client';

import React from 'react';
import Image from 'next/image';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Footer Inquiry: Reaching out regarding signage repair, fabrication, or services.',
  });

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#f8f6f0] text-[#07182d] pt-16 sm:pt-20 pb-10 px-6 md:px-12 relative overflow-hidden border-t border-slate-200/90"
    >
      <div className="max-w-360 mx-auto relative z-10 px-0 sm:px-6 md:px-12">
        {/* Main 5-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-14 sm:pb-16">
          {/* Col 1: Brand & New Mascot Logo */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 flex flex-col items-start">
            <a
              href="/"
              className="inline-block mb-3 focus:outline-none group"
              aria-label="SignFix All Signage Solutions"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                <Image
                  src="/new-logo.png"
                  alt="SignFix All Signage Solutions"
                  fill
                  className="object-contain object-left group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  priority
                />
              </div>
            </a>
            <p className="text-sm text-slate-600 leading-relaxed max-w-[220px]">
              We don&apos;t just repair signs. We transform them.
            </p>
          </div>

          {/* Col 2: SECTORS */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#07182d] block mb-4">
              SECTORS
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/industries"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Corporate & offices
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Restaurants & cafés
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Retail chains
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Malls & showrooms
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Large building signage
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: SERVICES */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#07182d] block mb-4">
              SERVICES
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/services"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Sign board repair
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Restoration & makeover
                </a>
              </li>
              <li>
                <a
                  href="/led-repair"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  LED sign repair
                </a>
              </li>
              <li>
                <a
                  href="/#fabrication"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  3D & channel letters
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Installation & maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: COMPANY */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#07182d] block mb-4">
              COMPANY
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/portfolio"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  About SignFix
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Projects / Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: CONTACT */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#07182d] block mb-4">
              CONTACT
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/contact"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Request a quote
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteContent.brand.phone}`}
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  Call: {siteContent.brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@signfix.in"
                  className="text-slate-600 hover:text-amber-600 transition-colors block"
                >
                  admin@signfix.in
                </a>
              </li>
              <li className="text-slate-500 text-xs pt-1">
                Hyderabad, Telangana
              </li>
              <li className="text-slate-500 text-xs">
                Pan-India supply
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching theme */}
        <div className="pt-6 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© SIGNFIX — ALL SIGNAGE SOLUTIONS</p>
          <div className="flex items-center gap-2 tracking-wider text-slate-500">
            <span>REPAIR</span>
            <span>·</span>
            <span>MANUFACTURE</span>
            <span>·</span>
            <span>INSTALL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
