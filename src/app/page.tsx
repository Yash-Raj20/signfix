import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { ClientMarquee } from '@/components/sections/ClientMarquee';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Services } from '@/components/sections/Services';
import { LedDiagnostics } from '@/components/sections/LedDiagnostics';
import { Industries } from '@/components/sections/Industries';
import { Process } from '@/components/sections/Process';
import { Fabrication } from '@/components/sections/Fabrication';
import { Work } from '@/components/sections/Work';
import { WhyUs } from '@/components/sections/WhyUs';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f0] text-ink">
      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <Stats />
        <ClientMarquee />
        <BeforeAfter />
        <Services />
        <LedDiagnostics />
        <Industries />
        <Process />
        <Fabrication />
        <Faq />
        <CtaBand />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
