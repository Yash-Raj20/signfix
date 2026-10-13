import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Industries } from '@/components/sections/Industries';
import { ClientMarquee } from '@/components/sections/ClientMarquee';
import { Process } from '@/components/sections/Process';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import { IconButton, Button } from '@/components/ui/Button';
import { ArrowRight, Building2, Store, HeartPulse, Utensils, ShoppingBag, ShieldCheck } from 'lucide-react';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { HeroSignageGraphic } from '@/components/common/HeroSignageGraphic';

export const metadata: Metadata = {
  title: 'Signage Solutions by Industry | SignFix Hyderabad',
  description:
    'Custom architectural signage engineered for Corporate IT parks, retail chains, hospitals, restaurants, and shopping malls across Hyderabad and Pan-India.',
};

export default function IndustriesPage() {
  const consultUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Industry-Specific Signage Project Consultation',
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
                  03 — SECTOR-SPECIFIC SIGNAGE EXPERTISE
                </Badge>
              </Reveal>

              <Reveal delay={0.1} yOffset={20}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#07182d] tracking-tight leading-[1.1] mb-6">
                  Architectural signage engineered for{' '}
                  <span className="text-amber-600">your specific industry.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.15} yOffset={16}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Every sector has unique architectural and operational requirements. Malls demand zero-flame wiring during night fitouts; corporate headquarters need brushed gold precision; retail chains require strict Pan-India color codes. We build to your industry standard.
                </p>
              </Reveal>

              <Reveal delay={0.2} yOffset={20}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                  <IconButton
                    asLink
                    href={consultUrl}
                    size="md"
                    icon={<ArrowRight className="w-4 h-4 text-[#07182d] stroke-[2.5]" />}
                    iconPosition="right"
                  >
                    CONSULT WITH SIGNAGE ENGINEER
                  </IconButton>

                  <Button
                    asLink
                    href="#sectors"
                    variant="secondary"
                    size="md"
                  >
                    View Sector Standards
                  </Button>
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

        {/* Bento Grid Sector Showcase Component */}
        <Industries />

        {/* Specialized Sector Standards Grid */}
        <section id="sectors" className="py-20 sm:py-28 bg-white border-b border-slate-200/90">
          <div className="max-w-360 mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-14">
              <Badge variant="amber" size="md" className="mb-3">
                TECHNICAL COMPLIANCE
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07182d] tracking-tight">
                How we tailor fabrication by industry.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Materials, power specifications, and structural anchoring vary by operational environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Building2,
                  title: 'Corporate & IT Parks',
                  audience: 'Hitech City, Madhapur, Financial District',
                  specs: 'Solid Brass & SS 304 Brushed Finish · 3000K Warm Halo Backlighting · Low-glare acrylic faceplates',
                  guarantee: 'ISO-grade clean edge laser cutting & invisible concealed mounting.',
                },
                {
                  icon: Store,
                  title: 'Retail Chains & Franchises',
                  audience: 'Multi-outlet Pan-India Brand Networks',
                  specs: 'RAL exact Pantone color matching · MeanWell IP67 drivers · Standardized aluminum chassis modules',
                  guarantee: 'Rapid Pan-India batch manufacturing with 10-day store turnaround.',
                },
                {
                  icon: HeartPulse,
                  title: 'Healthcare & Hospitals',
                  audience: 'Emergency Care, Diagnostics, Clinics',
                  specs: 'High-luminance 6500K daylight visibility · Fire-retardant zero-halogen cables · 24/7 continuous duty cycle',
                  guarantee: 'Zero-downtime dual-circuit redundant power supplies for critical entrances.',
                },
                {
                  icon: Utensils,
                  title: 'Restaurants & Cafés',
                  audience: 'Fine Dining, Cafes, Cloud Kitchens',
                  specs: '3D Front + Side glow channel letters · High-CRI warm 4000K illumination · Weather-sealed acrylic trays',
                  guarantee: 'Vibrant street presence designed to photograph beautifully on social media.',
                },
                {
                  icon: ShoppingBag,
                  title: 'Shopping Malls & Showrooms',
                  audience: 'Nexus Mall, Inorbit, Forum Sujana',
                  specs: 'Mall-compliant fire ratings · 1 AM – 5 AM overnight certified fitout installation · Low-voltage 12V DC circuits',
                  guarantee: 'Full mall security permit coordination and zero disruption to day shoppers.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Real Estate & Facades',
                  audience: 'Commercial Towers, Gated Communities',
                  specs: 'Wind-load certified sub-frame structures · 4mm PVDF coated Eurobond ACP · Anti-corrosion galvanized brackets',
                  guarantee: 'High-altitude crane installation with certified safety harness rigging.',
                },
              ].map((sector, idx) => {
                const IconComponent = sector.icon;
                return (
                  <div
                    key={sector.title}
                    className="p-7 rounded-3xl bg-[#f8f6f0]/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center mb-5">
                        <IconComponent className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#07182d] mb-1.5">
                        {sector.title}
                      </h3>
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-4">
                        {sector.audience}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        <strong className="text-[#07182d] block mb-1">Specifications:</strong>
                        {sector.specs}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/90 text-xs text-slate-700 font-medium">
                      ✓ {sector.guarantee}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Corporate Trust Marquee */}
        <ClientMarquee />

        {/* The 6-Step Engineering Process */}
        <Process />

        {/* Call to Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
