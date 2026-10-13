'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, ChevronRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';
import { IconButton } from '../ui/Button';

const headerNavLinks = [
  { label: 'SERVICES', href: '/services' },
  { label: 'LED REPAIR', href: '/led-repair' },
  { label: 'INDUSTRIES', href: '/industries' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'CONTACT', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const quoteUrl = buildWhatsAppUrl(siteContent.brand.whatsapp);

  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50 transition-all duration-300 w-full backdrop-blur-md',
        scrolled
          ? 'bg-[#f8f6f0]/95 border-b border-black/[0.08] shadow-sm py-2.5 sm:py-3'
          : 'bg-[#f8f6f0]/95 border-b border-black/[0.06] py-3'
      )}
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Brand Logo using /new-logo.png */}
        <a
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-led rounded-md shrink-0"
          aria-label="SignFix Home"
        >
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image
              src="/new-logo.png"
              alt="SignFix All Signage Solutions"
              fill
              priority
              sizes="(max-width: 768px) 40px, 48px"
              className="object-contain object-left transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl text-[#07182d] leading-none tracking-tight">
              Sign<span className="text-[#d97706]">Fix</span>
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mt-0.5">
              All Signage Solutions
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {headerNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-bold tracking-wider uppercase transition-colors text-[#07182d] hover:text-[#d97706]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions Group (App Stores + Get a Quote + Harmonized Hamburger) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* App Store Pill Button using /apple.png */}
          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-2 h-10 px-3.5 rounded-full bg-white hover:bg-slate-50 text-[#07182d] font-bold text-[11px] uppercase tracking-wider border border-slate-200/90 shadow-2xs transition-all hover:border-slate-300"
          >
            <Image
              src="/apple.png"
              alt="App Store"
              width={16}
              height={16}
              className="w-4 h-4 object-contain shrink-0"
            />
            <span>APP STORE</span>
          </a>

          {/* Google Play Pill Button using /play.png */}
          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-2 h-10 px-3.5 rounded-full bg-white hover:bg-slate-50 text-[#07182d] font-bold text-[11px] uppercase tracking-wider border border-slate-200/90 shadow-2xs transition-all hover:border-slate-300"
          >
            <Image
              src="/play.png"
              alt="Google Play"
              width={16}
              height={16}
              className="w-4 h-4 object-contain shrink-0"
            />
            <span>GOOGLE PLAY</span>
          </a>

          {/* GET A QUOTE CTA Button (hidden on mobile, visible on sm and above) */}
          <div className="hidden sm:inline-flex shrink-0">
            <IconButton
              asLink
              href={quoteUrl}
              size="sm"
              icon={<ArrowRight className="w-4 h-4 text-[#07182d] stroke-[2.5]" />}
              iconPosition="right"
              className="h-10 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 sm:px-4.5 rounded-full shadow-xs hover:shadow-md transition-all shrink-0"
            >
              GET A QUOTE
            </IconButton>
          </div>

          {/* Sleek Harmonized Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={cn(
              'lg:hidden h-10 w-10 rounded-full flex flex-col items-center justify-center gap-[4.5px] shrink-0 transition-all duration-200 shadow-2xs active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb020]',
              mobileMenuOpen
                ? 'bg-[#07182d] text-white border border-[#07182d]'
                : 'bg-white hover:bg-slate-50 text-[#07182d] border border-slate-200/90'
            )}
          >
            {/* Animated hamburger bars */}
            <span
              className={cn(
                'w-4 h-[2px] rounded-full transition-transform duration-200',
                mobileMenuOpen
                  ? 'bg-[#ffb020] translate-y-[6.5px] rotate-45'
                  : 'bg-[#07182d]'
              )}
            />
            <span
              className={cn(
                'w-4 h-[2px] rounded-full transition-all duration-200',
                mobileMenuOpen
                  ? 'opacity-0 scale-x-0'
                  : 'bg-[#07182d]'
              )}
            />
            <span
              className={cn(
                'w-4 h-[2px] rounded-full transition-transform duration-200',
                mobileMenuOpen
                  ? 'bg-[#ffb020] -translate-y-[6.5px] -rotate-45'
                  : 'bg-[#07182d]'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Outside Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] sm:top-[64px] bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Elevated Mobile Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 z-50 lg:hidden bg-[#f8f6f0] border-b border-slate-200/90 shadow-2xl px-5 sm:px-8 pt-4 pb-7 rounded-b-3xl max-h-[85vh] overflow-y-auto"
            >
              {/* Navigation Links List */}
              <nav className="flex flex-col gap-1">
                {headerNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white text-[#07182d] hover:text-[#d97706] transition-all group font-bold text-sm tracking-wider uppercase border border-transparent hover:border-slate-200/70"
                  >
                    <div className="flex items-center gap-3">
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </nav>

              {/* Mobile Drawer Quick Action Section */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-col gap-3">
                {/* Large Primary Action Button */}
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#ffb020] hover:bg-[#ffba38] text-[#07182d] text-xs uppercase tracking-wider font-extrabold shadow-sm active:scale-98 transition-all"
                >
                  <span>REQUEST FREE ESTIMATE / WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                {/* Direct Call & Response Pill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`tel:${siteContent.brand.phone}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-[#07182d] text-xs font-bold hover:bg-slate-50 shadow-2xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Call: {siteContent.brand.phoneDisplay}</span>
                  </a>

                  <div className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500/10 text-amber-800 text-[11px] font-bold">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Response under 60 mins</span>
                  </div>
                </div>

                {/* App Store / Play Store Links */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-slate-200 text-[#07182d] text-[10px] uppercase font-bold hover:bg-slate-50 shadow-2xs transition-colors"
                  >
                    <Image
                      src="/apple.png"
                      alt="App Store"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span>APP STORE</span>
                  </a>
                  <a
                    href={quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-slate-200 text-[#07182d] text-[10px] uppercase font-bold hover:bg-slate-50 shadow-2xs transition-colors"
                  >
                    <Image
                      src="/play.png"
                      alt="Google Play"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span>GOOGLE PLAY</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
