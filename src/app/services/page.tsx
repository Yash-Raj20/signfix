import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Fabrication } from '@/components/sections/Fabrication';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import { IconButton, Button } from '@/components/ui/Button';
import { ArrowRight, Phone, Wrench, Sparkles, Zap, Factory, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { HeroSignageGraphic } from '@/components/common/HeroSignageGraphic';

export const metadata: Metadata = {
  title: 'Signage Services & Restoration | SignFix Hyderabad',
  description:
    'Comprehensive signboard repair, LED diagnostics, signboard restoration, and new 3D letters fabrication in Hyderabad. Fast WhatsApp quotes under 60 mins.',
};

export default function ServicesPage() {
  const quoteUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Signage Services Consultation Request',
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f0] text-ink">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Dedicated Page Hero */}
        <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/90">
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/20 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-360 mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal delay={0.05} yOffset={16}>
                <Badge variant="amber" size="md" className="mb-4">
                  01 — FULL-SPECTRUM SIGNAGE CAPABILITIES
                </Badge>
              </Reveal>

              <Reveal delay={0.1} yOffset={20}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#07182d] tracking-tight leading-[1.1] mb-6">
                  Four focused specialties. Done by technicians,{' '}
                  <span className="text-amber-600">not middlemen.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.15} yOffset={16}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Signage problems are electrical and structural. We trace the exact fault, give you an honest quote, and carry genuine spares in our service vans across Hyderabad. From single module repairs to turnkey high-rise installations.
                </p>
              </Reveal>

              <Reveal delay={0.2} yOffset={20}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                  <IconButton
                    asLink
                    href={quoteUrl}
                    size="md"
                    icon={<ArrowRight className="w-4 h-4 text-[#07182d] stroke-[2.5]" />}
                    iconPosition="right"
                  >
                    GET A FREE INSPECTION QUOTE
                  </IconButton>

                  <Button
                    asLink
                    href={`tel:${siteContent.brand.phone}`}
                    variant="secondary"
                    size="md"
                  >
                    <Phone className="w-4 h-4 text-amber-600 mr-2" />
                    Direct Call: {siteContent.brand.phoneDisplay}
                  </Button>
                </div>
              </Reveal>

              {/* Service Pillars Bar */}
              <Reveal delay={0.25} yOffset={16} className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/90 text-xs w-full max-w-2xl">
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>60-Min Diagnosis</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>MeanWell Genuine Spares</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Factory className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>In-House Fabrication</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>2-Year Warranty</span>
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

        {/* The Core Interactive Services Component */}
        <Services />

        {/* Deep-Dive Service Deliverables & Standards */}
        <section className="py-20 sm:py-28 bg-white border-b border-slate-200/90">
          <div className="max-w-360 mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-14">
              <Badge variant="amber" size="md" className="mb-3">
                DETAILED DELIVERABLES
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07182d] tracking-tight">
                What each service covers from start to finish.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                No ambiguity. Every project includes structured inspection, genuine materials, and certified installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
              {[
                {
                  icon: Wrench,
                  title: 'Sign Board Structural & Physical Repair',
                  tagline: 'When boards suffer storm damage, bent channels, or cracked faces',
                  checklist: [
                    'Reinforce internal iron / MS sub-frame against heavy wind shear',
                    'Replace shattered or sun-bleached acrylic faceplates with virgin cast sheet',
                    'Re-align displaced 3D letter returns and seal edge perimeter against rain',
                    'Heavy-duty stainless steel anchor bolts into building concrete facade',
                  ],
                  highlight: 'Ideal when frame is intact — avoids 60% of replacement cost.',
                },
                {
                  icon: Zap,
                  title: 'LED Electrical & Circuit Diagnostics',
                  tagline: 'For dark letters, buzzing ballasts, and flickering night signs',
                  checklist: [
                    'Isolate failed DC circuits with digital multi-meters and load testers',
                    'Upgrade low-cost power supplies to IP67 MeanWell constant-voltage drivers',
                    'Retrofit with IP67 Samsung 2835 injection LED modules (160° optic lens)',
                    'Re-cable using 1.5 sq mm pure copper conductors to eliminate voltage drop',
                  ],
                  highlight: 'Emergency 2 to 4 hour site dispatch across commercial Hyderabad.',
                },
                {
                  icon: Sparkles,
                  title: 'Complete Signboard Restoration & Makeover',
                  tagline: 'Transform weathered, faded signs into brand-new architectural displays',
                  checklist: [
                    'Chemical strip old cracked vinyl graphics and clean oxidized metal surfaces',
                    'Multi-coat polyurethane anti-rust industrial spray paint on metal trims',
                    'Brand-new CNC laser cut acrylic faces and modern typographic styling',
                    'Energy retrofitting reducing electricity bills by up to 70%',
                  ],
                  highlight: 'Brand makeover that gives your storefront a luxury high-street look.',
                },
                {
                  icon: Factory,
                  title: 'New Custom Signage & 3D Fabrication',
                  tagline: 'Custom building signs, corporate logos, and architectural letters',
                  checklist: [
                    'Solid brass, SS 304 stainless steel, and cast acrylic precision cutting',
                    'CNC V-grooving and hydraulic letter return bending for seamless 3D depth',
                    'Halo backlit, frontlit, edge-lit, and neon LED illumination systems',
                    'Turnkey high-altitude crane installation with certified scaffolding',
                  ],
                  highlight: 'Fabricated entirely in our 8,000 sq ft facility with zero subcontractors.',
                },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-7 sm:p-8 rounded-3xl bg-[#f8f6f0]/70 border border-slate-200/90 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center mb-5">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#07182d] mb-1.5">{item.title}</h3>
                      <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-5">
                        {item.tagline}
                      </p>

                      <ul className="space-y-2.5 mb-6 text-sm text-slate-600">
                        {item.checklist.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200/90 text-xs text-amber-900 bg-amber-500/10 p-3 rounded-xl font-medium">
                      ★ {item.highlight}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The SignFix Approach Process */}
        <Process />

        {/* Workshop In-House Fabrication */}
        <Fabrication />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Call to Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
