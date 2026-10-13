import React from 'react';
import { Cpu, CheckCircle2, ShieldCheck, Wrench, Sparkles, Truck, Layers } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

const capabilities = [
  'Laser CNC router acrylic & ACP cutting',
  'Automated channel letter bending machines',
  'Heavy-gauge MS & SS structural welding',
  'Clean-room vinyl application & edge laminating',
  'Controlled LED soldering & wiring discipline',
  'Continuous 8-hour pre-dispatch burn-in testing',
  'Anti-rust polyurethane & powder coating',
  'Shock-absorbent export crating for Pan-India freight',
];

export const FabricationAdvantage: React.FC = () => {
  return (
    <section id="fabrication" className="py-20 sm:py-24 bg-[#040e1c] relative border-b border-navy-line">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-brand/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-card border border-navy-line text-xs font-semibold uppercase tracking-wider text-amber-brand mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>In-House Manufacturing Facility</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Skilled People, Precision Machines, Full Control.
            </h2>

            <p className="text-sm sm:text-base text-cloud-sign leading-relaxed mb-6">
              When a signage project moves through multiple uncontrolled subcontractors, small variations become visible in the final board: letter depths drift, module spacing becomes uneven, and promised delivery dates slip.
            </p>

            <p className="text-sm sm:text-base text-cloud-sign leading-relaxed mb-8">
              At SignFix, everything from precision CNC acrylic routering to electrical load calibration and final weatherproof silicone sealing is performed directly under one roof in Hyderabad.
            </p>

            {/* In-House Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-cloud-sign">
                  <CheckCircle2 className="w-4 h-4 text-amber-brand shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-brand hover:bg-amber-hover text-navy font-bold text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,176,0,0.3)] hover:-translate-y-0.5"
              >
                <span>Share Your Architectural Drawing</span>
              </a>
            </div>
          </div>

          {/* Right Column: Workshop Credential Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 rounded-xl bg-navy-card border border-navy-line hover:border-amber-brand/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-navy-soft border border-navy-line flex items-center justify-center text-amber-brand mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-brand transition-colors">
                Virgin Cast Acrylic Only
              </h3>
              <p className="text-xs text-muted-sign leading-relaxed">
                We never use recycled scrap plastic. 100% UV-stabilized cast acrylic sheets with 10-year anti-yellowing performance under harsh Indian sunlight.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-card border border-navy-line hover:border-amber-brand/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-navy-soft border border-navy-line flex items-center justify-center text-amber-brand mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-brand transition-colors">
                IP67 Waterproof Modules
              </h3>
              <p className="text-xs text-muted-sign leading-relaxed">
                Injection-molded lenses with ultrasonic welding prevent moisture ingress even during heavy monsoon downpours and high humidity.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-card border border-navy-line hover:border-amber-brand/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-navy-soft border border-navy-line flex items-center justify-center text-amber-brand mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-brand transition-colors">
                Continuous 8-Hour Burn Test
              </h3>
              <p className="text-xs text-muted-sign leading-relaxed">
                Every assembled channel sign is hooked to our automated test bench for thermal monitoring and current spike detection before installation.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-card border border-navy-line hover:border-amber-brand/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-navy-soft border border-navy-line flex items-center justify-center text-amber-brand mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-brand transition-colors">
                Pan-India Transit Crating
              </h3>
              <p className="text-xs text-muted-sign leading-relaxed">
                Plywood crating with high-density EPE foam cradling guarantees zero scratch or letter fracture during cross-country delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
