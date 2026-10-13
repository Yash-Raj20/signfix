'use client';

import React, { useState } from 'react';
import { DIAGNOSTICS_DATA, SITE_CONFIG } from '@/data/siteData';
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Zap,
  Wrench,
  Search,
  MessageCircle,
} from 'lucide-react';

export const RepairDiagnosticsSection: React.FC = () => {
  const [selectedIssueId, setSelectedIssueId] = useState(DIAGNOSTICS_DATA[0].id);

  const activeIssue =
    DIAGNOSTICS_DATA.find((item) => item.id === selectedIssueId) || DIAGNOSTICS_DATA[0];

  return (
    <section id="diagnostics" className="py-20 sm:py-24 bg-navy relative border-b border-navy-line">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-amber-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-card border border-navy-line text-xs font-semibold uppercase tracking-wider text-amber-brand mb-3">
            <Search className="w-3.5 h-3.5" />
            <span>SignFix Diagnostic Protocol</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What Went Wrong With Your Signboard?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-cloud-sign">
            Most signage failures can be permanently resolved in 24 to 48 hours without buying an expensive new sign. Select your symptom below to see the exact engineering diagnosis and permanent fix.
          </p>
        </div>

        {/* Diagnostic Layout: Sidebar tabs on left, Deep-dive card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Issue Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-xs  text-muted-sign uppercase tracking-wider px-1">
              Select Current Sign Condition:
            </span>

            {DIAGNOSTICS_DATA.map((diag) => {
              const isActive = diag.id === selectedIssueId;
              return (
                <button
                  key={diag.id}
                  onClick={() => setSelectedIssueId(diag.id)}
                  className={`text-left p-4 sm:p-4.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${isActive
                      ? 'bg-navy-card border-amber-brand shadow-[0_0_20px_rgba(255,176,0,0.2)]'
                      : 'bg-navy-soft/60 border-navy-line hover:border-navy-line/90 hover:bg-navy-soft'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${isActive
                          ? 'bg-amber-brand text-navy border-amber-brand'
                          : 'bg-navy border-navy-line text-muted-sign'
                        }`}
                    >
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3
                        className={`text-sm sm:text-base font-bold transition-colors ${isActive ? 'text-amber-brand' : 'text-white'
                          }`}
                      >
                        {diag.problem}
                      </h3>
                      <p className="text-xs text-muted-sign line-clamp-1 mt-0.5">
                        {diag.symptom}
                      </p>
                    </div>
                  </div>

                  {/* Urgency Badge */}
                  <span
                    className={`text-[10px]  uppercase px-2 py-0.5 rounded-lg shrink-0 border ${diag.urgency === 'Emergency'
                        ? 'bg-red-500/15 text-red-400 border-red-500/30'
                        : diag.urgency === 'High'
                          ? 'bg-amber-brand/15 text-amber-brand border-amber-brand/30'
                          : 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                      }`}
                  >
                    {diag.urgency}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Diagnostic Detail Card (Max rounded-xl) */}
          <div className="lg:col-span-7 rounded-xl bg-navy-card border border-navy-line p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top Bar with Status & SLA */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-navy-line/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-brand animate-pulse" />
                <span className="text-xs  uppercase tracking-wider text-muted-sign">
                  DIAGNOSTIC_ANALYSIS_REPORT
                </span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-soft border border-navy-line text-xs  text-cloud-sign">
                <Clock className="w-3.5 h-3.5 text-amber-brand" />
                <span>Turnaround SLA: <strong className="text-white">{activeIssue.turnaround}</strong></span>
              </div>
            </div>

            {/* Problem Title & Observed Symptom */}
            <div className="my-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {activeIssue.problem}
              </h3>
              <p className="text-sm text-cloud-sign leading-relaxed bg-navy-soft/80 p-3.5 rounded-lg border border-navy-line">
                <strong className="text-amber-brand font-semibold">Observed Symptom: </strong>
                {activeIssue.symptom}
              </p>
            </div>

            {/* Root Cause & Engineered Fix Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Root Cause Box */}
              <div className="p-4.5 rounded-xl bg-[#071321] border border-red-500/30">
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Technical Root Cause</span>
                </div>
                <p className="text-xs sm:text-sm text-cloud-sign leading-relaxed">
                  {activeIssue.rootCause}
                </p>
              </div>

              {/* Permanent Fix Box */}
              <div className="p-4.5 rounded-xl bg-[#061828] border border-amber-brand/40">
                <div className="flex items-center gap-2 text-amber-brand text-xs font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>SignFix Engineered Fix</span>
                </div>
                <p className="text-xs sm:text-sm text-white leading-relaxed">
                  {activeIssue.solution}
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-6 border-t border-navy-line/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-muted-sign text-center sm:text-left">
                <span>Free site inspection available in Hyderabad & Secunderabad.</span>
              </div>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20SignFix,%20my%20signboard%20has%20the%20following%20issue:%20${encodeURIComponent(
                  activeIssue.problem
                )}.%20Please%20provide%20a%20repair%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-brand hover:bg-amber-hover text-navy font-bold text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,176,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,176,0,0.5)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fix This Issue On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
