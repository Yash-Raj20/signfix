import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';
import { LedDiagnostics } from '@/components/sections/LedDiagnostics';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import { IconButton, Button } from '@/components/ui/Button';
import { ArrowRight, Phone, Zap, ShieldCheck, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { HeroSignageGraphic } from '@/components/common/HeroSignageGraphic';

export const metadata: Metadata = {
  title: 'LED Sign Board Repair & Rapid Diagnostics | SignFix Hyderabad',
  description:
    'Emergency LED signboard repair in Hyderabad. We fix dark letters, burnt MeanWell drivers, flickering LEDs, and water-damaged lightboxes within 2-4 hours. WhatsApp quote in 60 mins.',
};

export default function LedRepairPage() {
  const quoteUrl = buildWhatsAppUrl(siteContent.brand.whatsapp, {
    problem: 'Emergency LED Repair & Inspection Request',
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f0] text-ink">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Dedicated Page Hero */}
        <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/90">
          {/* Ambient Glows & Grid */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/20 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-360 mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal delay={0.05} yOffset={16}>
                <Badge variant="amber" size="md" className="mb-4">
                  02 — RAPID ELECTRICAL DIAGNOSTICS & LED REPAIR
                </Badge>
              </Reveal>

              <Reveal delay={0.1} yOffset={20}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#07182d] tracking-tight leading-[1.1] mb-6">
                  Signboards that flicker, buzz, or go dark —{' '}
                  <span className="text-amber-600">fixed within hours.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.15} yOffset={16}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  In 85% of cases, the structure and acrylic letters are completely sound. Only the power driver or internal LED modules failed. We isolate electrical faults, upgrade to MeanWell IP67 power units, and restore bright, uniform luminescence across Hyderabad.
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
                    REQUEST 2-HOUR DISPATCH
                  </IconButton>

                  <Button
                    asLink
                    href={`tel:${siteContent.brand.phone}`}
                    variant="secondary"
                    size="md"
                  >
                    <Phone className="w-4 h-4 text-amber-600 mr-2" />
                    Call Direct: {siteContent.brand.phoneDisplay}
                  </Button>
                </div>
              </Reveal>

              {/* Trust Indicators Bar */}
              <Reveal delay={0.25} yOffset={16} className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/90 text-xs w-full max-w-2xl">
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>&lt; 60 Mins WhatsApp Reply</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>2–4 Hr Hyderabad Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>2-Year Driver Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>IP67 Samsung LEDs</span>
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

        {/* Interactive Diagnostics Triage Section */}
        <LedDiagnostics />

        {/* Engineering Fault Breakdown Grid */}
        <section className="py-20 sm:py-28 bg-white border-b border-slate-200/90">
          <div className="max-w-360 mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-14">
              <Badge variant="amber" size="md" className="mb-3">
                HOW WE FIX YOUR BOARD
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07182d] tracking-tight">
                The 4 most common LED signage failures.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Understanding what broke inside your sign prevents recurring service calls and unnecessary full-board replacements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  number: '01',
                  title: 'Blown Constant-Voltage Power Drivers',
                  symptom: 'Entire board is dark or flickers rapidly like a strobe.',
                  cause: 'Non-waterproof Chinese power supply overheated in monsoon rain or suffered 440V phase surges.',
                  solution: 'Replace with MeanWell IP67 constant-voltage metal-cased drivers with built-in surge arrestor and 3-year manufacturer guarantee.',
                },
                {
                  number: '02',
                  title: 'Burnt & Discolored LED Injection Modules',
                  symptom: 'Only 2 or 3 letters are dark while the rest remain lit, or noticeable dim patches.',
                  cause: 'Cheap series wiring caused current spikes that fried individual diodes.',
                  solution: 'Rewire to parallel ladder circuits and install Samsung 2835 injection modules with wide-angle 160° diffusion lenses.',
                },
                {
                  number: '03',
                  title: 'Monsoon Rain & Water Ingress',
                  symptom: 'Tripping the building MCB breaker whenever night lighting switch is turned on.',
                  cause: 'Missing weep drainage holes or degraded acrylic silicone seals allowed rainwater to short circuit terminals.',
                  solution: 'Full interior drying, rust neutralization, drill bottom condensation weep slots, and apply industrial UV silicone bead.',
                },
                {
                  number: '04',
                  title: 'Severe Voltage Drop Across Long Runs',
                  symptom: 'Letters on the far end of the signboard are noticeably dimmer than letters near the power supply.',
                  cause: 'Thin 0.5 sq mm wiring used by previous contractor cannot carry 12V DC current over 15+ feet without drop.',
                  solution: 'Re-cable with 1.5 sq mm copper bus lines feeding power from both ends for 100% uniform lumen output.',
                },
              ].map((fault) => (
                <div
                  key={fault.number}
                  className="p-7 sm:p-8 rounded-3xl bg-[#f8f6f0]/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-amber-700 bg-amber-500/15 px-3 py-1 rounded-full">
                        FAULT {fault.number}
                      </span>
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#07182d] mb-3">
                      {fault.title}
                    </h3>
                    <div className="space-y-3 text-sm text-slate-600 mb-4">
                      <p>
                        <strong className="text-[#07182d]">Symptom:</strong> {fault.symptom}
                      </p>
                      <p>
                        <strong className="text-[#07182d]">Root Cause:</strong> {fault.cause}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200/90 text-sm text-amber-900 bg-amber-500/10 p-3.5 rounded-xl font-medium">
                    <strong className="text-amber-800">SignFix Fix:</strong> {fault.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof of Work Comparison */}
        <BeforeAfter />

        {/* Emergency Service Locations in Hyderabad */}
        <section className="py-16 sm:py-20 bg-[#f8f6f0] border-b border-slate-200/90">
          <div className="max-w-360 mx-auto px-6 md:px-12 text-center">
            <Badge variant="amber" size="md" className="mb-3">
              RAPID SERVICE NETWORK
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07182d] mb-4">
              Rapid response across Hyderabad commercial corridors.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8">
              Our mobile service vans are equipped with diagnostic kits, ladders, and spare parts ready to deploy within 2 to 4 hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
              {[
                'Madhapur',
                'Hitech City',
                'Jubilee Hills',
                'Banjara Hills',
                'Gachibowli',
                'Kondapur',
                'Financial District',
                'Begumpet',
                'Secunderabad',
                'Kukatpally',
                'Ameerpet',
                'Somajiguda',
              ].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-bold text-[#07182d] shadow-2xs"
                >
                  📍 {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Faq />

        {/* CTA Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
