import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Contact } from '@/components/sections/Contact';
import { Faq } from '@/components/sections/Faq';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import { IconButton, Button } from '@/components/ui/Button';
import { ArrowRight, Phone, MessageSquare, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { HeroSignageGraphic } from '@/components/common/HeroSignageGraphic';

export const metadata: Metadata = {
  title: 'Contact SignFix | Sign Board Repair & Fast Quotes Hyderabad',
  description:
    'Contact SignFix Hyderabad for emergency signboard repair, LED diagnostics, and new 3D letters. WhatsApp quote under 60 mins. Workshop in Jubilee Hills & Madhapur.',
};

export default function ContactPage() {
  const quoteUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Direct Contact Page Inquiry',
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f0] text-ink">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Dedicated Page Hero */}
        <section className="relative pt-12 sm:pt-20 pb-12 sm:pb-16 overflow-hidden border-b border-slate-200/90">
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/20 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-360 mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal delay={0.05} yOffset={16}>
                <Badge variant="amber" size="md" className="mb-4">
                  06 — DIRECT COMMUNICATION & FAST ESTIMATES
                </Badge>
              </Reveal>

              <Reveal delay={0.1} yOffset={20}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#07182d] tracking-tight leading-[1.1] mb-6">
                  Get an itemized signboard estimate{' '}
                  <span className="text-amber-600">within 60 minutes.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.15} yOffset={16}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Send us a daytime photo and a nighttime photo of your signboard on WhatsApp, or complete the quick request form below. We will diagnose the fault and reply with transparent, fixed pricing.
                </p>
              </Reveal>

              <Reveal delay={0.2} yOffset={20}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                  <IconButton
                    asLink
                    href={quoteUrl}
                    size="md"
                    icon={<ArrowRight className="w-4 h-4 text-[#07182d] stroke-[2.5]" />}
                    iconPosition="right"
                  >
                    CHAT ON WHATSAPP: 00000000
                  </IconButton>

                  <Button
                    asLink
                    href={`tel:${siteContent.brand.phone}`}
                    variant="secondary"
                    size="md"
                  >
                    <Phone className="w-4 h-4 text-amber-600 mr-2" />
                    Call: {siteContent.brand.phoneDisplay}
                  </Button>
                </div>
              </Reveal>

              {/* Direct Quick Info Strip */}
              <Reveal delay={0.25} yOffset={16} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/90 text-xs w-full max-w-2xl">
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Road No. 36, Jubilee Hills & Madhapur</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Mon – Sat: 9 AM – 8 PM (24/7 Emergency)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Hyderabad & Pan-India Supply</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: 3D Floating Signage Image Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <Reveal delay={0.2} className="w-full">
                <HeroSignageGraphic />
              </Reveal>
            </div>
          </div>
        </section>

        {/* The Full Interactive Form & Contact Details */}
        <Contact />

        {/* 4-Step Site Visit & Estimation Process */}
        <section className="py-20 sm:py-24 bg-white border-b border-slate-200/90">
          <div className="max-w-360 mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-12">
              <Badge variant="amber" size="md" className="mb-3">
                HOW ESTIMATION WORKS
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07182d] tracking-tight">
                Simple, transparent, zero surprises.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Send Sign Photo',
                  desc: 'Take 1 daytime wide shot and 1 night shot with lights turned on. WhatsApp to 00000000.',
                },
                {
                  step: '02',
                  title: 'Technical Triage',
                  desc: 'Our lead technician reviews power driver load, letter face status, and provides an instant estimate within 60 mins.',
                },
                {
                  step: '03',
                  title: 'On-Site Verification',
                  desc: 'For complex high-altitude or structural projects, our team visits for digital lux measurement and laser tape sizing.',
                },
                {
                  step: '04',
                  title: 'Guaranteed Execution',
                  desc: 'Fixed-cost written quote. We execute with genuine MeanWell/Samsung spares and provide a written warranty.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-3xl bg-[#f8f6f0]/70 border border-slate-200/90 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-500/15 px-3 py-1 rounded-full inline-block mb-4">
                      STEP {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-[#07182d] mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <Faq />
      </main>

      <Footer />
    </div>
  );
}
