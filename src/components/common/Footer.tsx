import React from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG, SERVICES_DATA } from '@/data/siteData';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030914] text-cloud-sign border-t border-navy-line relative overflow-hidden">
      {/* Top Banner / Callout Strip */}
      <div className="border-b border-navy-line/80 py-8 px-4 sm:px-8 bg-gradient-to-r from-[#07182d] via-[#0b2135] to-[#07182d]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Signboard went dark or damaged?
            </h3>
            <p className="text-xs sm:text-sm text-cloud-sign mt-1">
              Rapid emergency response team on standby across Hyderabad & Secunderabad.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy border border-navy-line hover:border-amber-brand text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-brand" />
              <span>Call Hotline</span>
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20SignFix,%20I%20have%20an%20urgent%20signboard%20repair%20need.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-brand hover:bg-amber-hover text-navy font-bold text-xs sm:text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,176,0,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Photo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Logo size="lg" showTagline={true} className="mb-4" />
            <p className="text-xs sm:text-sm text-muted-sign leading-relaxed mb-6 max-w-sm">
              SignFix is Hyderabad&apos;s premier signage engineering specialist for 3D LED letters, ACP facade remodeling, rapid driver replacement, and commercial sign restoration across India.
            </p>

            <div className="space-y-2 text-xs text-cloud-sign">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-brand" />
                <span>Mon – Sat: 9:30 AM – 8:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                <span>24/7 Night Emergency Mall Repair Support</span>
              </div>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs  uppercase tracking-wider text-white font-bold mb-4 pb-1 border-b border-navy-line w-fit">
              Signage Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-amber-brand transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-amber-brand shrink-0" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs  uppercase tracking-wider text-white font-bold mb-4 pb-1 border-b border-navy-line w-fit">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-brand transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-brand transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#diagnostics" className="hover:text-amber-brand transition-colors">
                  LED Diagnostics
                </a>
              </li>
              <li>
                <a href="#fabrication" className="hover:text-amber-brand transition-colors">
                  In-House Fabrication
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-brand transition-colors">
                  Project Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-brand transition-colors">
                  Our Workflow
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-brand transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-brand transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs  uppercase tracking-wider text-white font-bold mb-4 pb-1 border-b border-navy-line w-fit">
              Headquarters
            </h4>
            <div className="space-y-3.5 text-xs text-cloud-sign">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-brand shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-brand shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-amber-brand transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-brand shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-amber-brand transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="p-3 rounded-lg bg-navy-card border border-navy-line text-[11px] text-muted-sign mt-3">
                <strong className="text-amber-brand">Pan-India Supply: </strong>
                Daily heavy-goods crating & transit dispatch to Mumbai, Bangalore, Pune, Chennai, Delhi NCR.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-14 pt-8 border-t border-navy-line/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-sign">
          <p>© 2026 {SITE_CONFIG.name}. {SITE_CONFIG.legalName}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed for High Distance Visibility</span>
            <span>•</span>
            <span className="text-amber-brand">Est. {SITE_CONFIG.estYear}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
