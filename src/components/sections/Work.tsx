'use client';

import React, { useState } from 'react';
import { siteContent } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { Lightbox } from '@/components/ui/Lightbox';
import { WorkProject } from '@/types/content';

export function Work() {
  const [activeProject, setActiveProject] = useState<WorkProject | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 px-5 md:px-10 bg-ink border-b border-white/10">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-[0.16em] text-led ">
                  {siteContent.work.eyebrow}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-paper tracking-tight leading-[1.08]">
                {siteContent.work.title}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end">
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg text-paper/70  leading-relaxed max-w-[60ch]">
                {siteContent.work.description}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Horizontal Scroll-Snap Gallery */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory focus-visible:outline-none">
          {siteContent.work.projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="snap-start shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] p-6 rounded-2xl bg-deep border border-white/10 hover:border-led/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Visual Card Header */}
                <div className="relative aspect-[16/10] rounded-xl bg-ink border border-white/10 overflow-hidden mb-6 flex flex-col items-center justify-center p-6 text-center">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,176,32,0.12)_0%,transparent_70%)]" />

                  <span className="text-[10px]  text-led uppercase tracking-widest mb-1.5 z-10">
                    {project.category}
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl text-paper group-hover:text-led transition-colors z-10">
                    {project.client}
                  </h4>
                  <span className="text-xs  text-paper/40 mt-1 z-10">
                    {project.location}
                  </span>

                  {/* Corner inspect pill */}
                  <span className="absolute bottom-3 right-3 text-[10px]  text-paper/60 px-2 py-1 bg-black/40 rounded border border-white/10">
                    Click to inspect ↗
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs  text-paper/50 mb-2">
                  <span>PROJ_0{index + 1}</span>
                  <span className="text-led">{project.category}</span>
                </div>

                <h3 className="font-serif text-2xl text-paper group-hover:text-led transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-paper/70  leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Specs Pills */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {project.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="text-[10px]  text-paper/60 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-4 flex items-center justify-between text-xs  text-paper/40">
          <span>← Scroll horizontally to view all projects →</span>
          <span>Click any card to inspect full specification</span>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
