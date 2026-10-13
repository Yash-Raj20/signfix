import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import { IconButton, Button } from '@/components/ui/Button';
import { ArrowRight, Home, Wrench, AlertTriangle, Phone, Search } from 'lucide-react';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function NotFound() {
  const whatsappUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: '404 Page Lost Link Inquiry',
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f0] text-ink">
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col justify-center relative overflow-hidden py-16 sm:py-24">
        {/* Ambient Glows & Grid */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/20 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-360 mx-auto px-6 md:px-12 relative z-10 w-full text-center flex flex-col items-center">
          <Reveal delay={0.05} yOffset={16}>
            <Badge variant="amber" size="md" className="mb-6">
              404 — CIRCUIT NOT FOUND
            </Badge>
          </Reveal>

          {/* Illuminated 404 Signboard Graphic */}
          <Reveal delay={0.1} yOffset={20}>
            <div className="relative my-4 select-none">
              <div className="text-[90px] sm:text-[140px] lg:text-[180px] font-extrabold leading-none tracking-tight text-[#07182d] flex items-center justify-center">
                <span>4</span>
                <span className="text-amber-500 drop-shadow-[0_0_35px_rgba(255,176,32,0.65)] animate-pulse inline-block mx-1">
                  0
                </span>
                <span>4</span>
              </div>

              {/* Warning Circuit Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider -mt-4 relative z-10 shadow-2xs">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>POWER INTERRUPTED · PAGE CIRCUIT DARK</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} yOffset={20}>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#07182d] tracking-tight mt-6 mb-4 max-w-xl">
              The sign you are looking for has been powered down.
            </h1>
          </Reveal>

          <Reveal delay={0.2} yOffset={16}>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mb-8">
              The page link or destination does not exist, has been relocated, or is currently under technical maintenance. Let&apos;s get you back on track.
            </p>
          </Reveal>

          {/* Action Navigation Buttons */}
          <Reveal delay={0.25} yOffset={20}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
              <IconButton
                asLink
                href="/"
                size="md"
                icon={<ArrowRight className="w-4 h-4 text-[#07182d] stroke-[2.5]" />}
                iconPosition="right"
              >
                BACK TO HOMEPAGE
              </IconButton>

              <Button
                asLink
                href="/services"
                variant="secondary"
                size="md"
              >
                <Wrench className="w-4 h-4 text-amber-600 mr-2" />
                Explore Services
              </Button>

              <Button
                asLink
                href={whatsappUrl}
                variant="secondary"
                size="md"
              >
                <Phone className="w-4 h-4 text-amber-600 mr-2" />
                WhatsApp: 00000000
              </Button>
            </div>
          </Reveal>

          {/* Quick Helpful Directory Links Card */}
          <Reveal delay={0.3} yOffset={20}>
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm max-w-xl w-full text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                QUICK DIRECTORY:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
                <Link
                  href="/services"
                  className="p-2.5 rounded-xl bg-[#f8f6f0] hover:bg-amber-500/10 text-[#07182d] hover:text-amber-800 transition-colors text-center"
                >
                  Services
                </Link>
                <Link
                  href="/led-repair"
                  className="p-2.5 rounded-xl bg-[#f8f6f0] hover:bg-amber-500/10 text-[#07182d] hover:text-amber-800 transition-colors text-center"
                >
                  LED Repair
                </Link>
                <Link
                  href="/industries"
                  className="p-2.5 rounded-xl bg-[#f8f6f0] hover:bg-amber-500/10 text-[#07182d] hover:text-amber-800 transition-colors text-center"
                >
                  Industries
                </Link>
                <Link
                  href="/portfolio"
                  className="p-2.5 rounded-xl bg-[#f8f6f0] hover:bg-amber-500/10 text-[#07182d] hover:text-amber-800 transition-colors text-center"
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
