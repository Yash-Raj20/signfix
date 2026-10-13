'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about', active: false },
  { label: 'Services', href: '#services', active: false },
  { label: 'Clients', href: '#clients', active: false },
  { label: 'Portfolio', href: '#portfolio', active: false },
  { label: 'Contact', href: '#contact', active: false },
];

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Clean White Navbar matching screenshot */}
      <div
        className={`w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 ${
          scrolled
            ? 'shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3'
            : 'shadow-[0_1px_4px_rgba(0,0,0,0.03)] py-4'
        }`}
      >
        <div className="max-w-360 mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo with clean white card badge wrapper */}
          <a
            href="#home"
            className="flex items-center p-1.5 rounded-xl hover:opacity-95 transition-opacity"
            aria-label="SignFix Home"
          >
            <Logo size="md" showTagline={true} theme="light" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative py-1 text-sm font-semibold transition-colors duration-150 ${
                  item.active
                    ? 'text-ink after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-amber-brand after:rounded-full'
                    : 'text-slate-600 hover:text-ink hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-amber-brand/70'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Get a Quote Pill Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenQuoteModal) {
                  e.preventDefault();
                  onOpenQuoteModal();
                }
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-amber-brand hover:bg-amber-hover text-ink font-bold text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,176,0,0.35)] hover:shadow-[0_6px_22px_rgba(255,176,0,0.55)] transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-100 border border-slate-200 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-6 shadow-xl transition-all">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-ink hover:bg-amber-light transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3 rounded-xl bg-amber-brand hover:bg-amber-hover text-ink font-bold text-sm shadow-md"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
