'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/data/siteData';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  UploadCloud,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export const QuoteSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    signType: '3D LED Channel Letters',
    condition: 'Partial Dark / Flickering',
    location: 'Hyderabad, Telangana',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [fileAttached, setFileAttached] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi SignFix, I would like to request a quote.
Name: ${formData.name || 'Customer'}
Phone: ${formData.phone || 'N/A'}
Sign Type: ${formData.signType}
Issue/Condition: ${formData.condition}
Location: ${formData.location}
Notes: ${formData.notes || 'Please share quote.'}`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-navy relative border-b border-navy-line">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-brand/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-card border border-navy-line text-xs font-semibold uppercase tracking-wider text-amber-brand mb-3 w-fit">
              <span>Fast Response Guarantee</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Get an Itemized Signage Quote in 60 Minutes
            </h2>

            <p className="text-sm sm:text-base text-cloud-sign leading-relaxed mb-8">
              Send us your sign photo or book an in-person site inspection. Our engineering squad will calculate power requirements, letter depth, and structural stability.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-card border border-navy-line hover:border-amber-brand/60 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-soft border border-navy-line flex items-center justify-center text-amber-brand group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-sign  uppercase">Direct Hotline</span>
                  <p className="text-base font-bold text-white group-hover:text-amber-brand transition-colors">
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20SignFix,%20I%20would%20like%20to%20get%20a%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-card border border-navy-line hover:border-amber-brand/60 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-soft border border-navy-line flex items-center justify-center text-amber-brand group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-sign  uppercase">WhatsApp Desk (Photo Uploads)</span>
                  <p className="text-base font-bold text-white group-hover:text-amber-brand transition-colors">
                    Chat with Sign Engineer
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-card border border-navy-line">
                <div className="w-10 h-10 rounded-lg bg-navy-soft border border-navy-line flex items-center justify-center text-amber-brand shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-sign  uppercase">Hyderabad Facility & Pan-India Hub</span>
                  <p className="text-xs sm:text-sm text-cloud-sign">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>
            </div>

            {/* SLA Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-navy-line">
              <div className="flex items-center gap-2 text-xs text-muted-sign">
                <Clock className="w-4 h-4 text-amber-brand" />
                <span>60-Min Estimate</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-sign">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Zero Obligation Quote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Calculation & Request Form (Max rounded-xl) */}
          <div className="lg:col-span-7 rounded-xl bg-navy-card border border-navy-line p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 flex items-center justify-center mb-5 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Quote Request Received!
                </h3>
                <p className="text-sm text-cloud-sign max-w-md mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. A SignFix technical specialist will evaluate your request and contact you at <strong className="text-amber-brand">{formData.phone}</strong> within 60 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-navy-soft border border-navy-line text-sm text-white hover:text-amber-brand transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-navy-line pb-4 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Request Site Inspection or Estimate
                  </h3>
                  <p className="text-xs text-muted-sign mt-0.5">
                    Fill out the parameters below or switch to instant WhatsApp chat.
                  </p>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-cloud-sign uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy-soft border border-navy-line focus:border-amber-brand focus:outline-none text-sm text-white placeholder-muted-sign/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-cloud-sign uppercase tracking-wider mb-1.5">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy-soft border border-navy-line focus:border-amber-brand focus:outline-none text-sm text-white placeholder-muted-sign/50"
                    />
                  </div>
                </div>

                {/* Sign Type & Condition */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-cloud-sign uppercase tracking-wider mb-1.5">
                      Signboard Type
                    </label>
                    <select
                      value={formData.signType}
                      onChange={(e) => setFormData({ ...formData, signType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy-soft border border-navy-line focus:border-amber-brand focus:outline-none text-sm text-white"
                    >
                      <option value="3D LED Channel Letters">3D LED Channel Letters</option>
                      <option value="Sign Board Repair & Driver Fix">Sign Board Repair & Driver Fix</option>
                      <option value="Sign Restoration & Makeover">Sign Restoration & Makeover</option>
                      <option value="ACP Facade Panel Cladding">ACP Facade Panel Cladding</option>
                      <option value="Glow Sign Box / Lightbox">Glow Sign Box / Lightbox</option>
                      <option value="In-Shop & Retail Branding">In-Shop & Retail Branding</option>
                      <option value="Mall & Corporate Signage">Mall & Corporate Signage</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-cloud-sign uppercase tracking-wider mb-1.5">
                      Current Condition / Problem
                    </label>
                    <select
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy-soft border border-navy-line focus:border-amber-brand focus:outline-none text-sm text-white"
                    >
                      <option value="Completely Dark / Burnt Driver">Completely Dark / Burnt Driver</option>
                      <option value="Partial Dark / Flickering">Partial Dark / Flickering</option>
                      <option value="Cracked / Sun-Faded Face">Cracked / Sun-Faded Face</option>
                      <option value="Brand New Sign Fabrication">Brand New Sign Fabrication</option>
                      <option value="Site Inspection & Audit">Site Inspection & Audit</option>
                    </select>
                  </div>
                </div>

                {/* Project Location & Dimensions */}
                <div>
                  <label className="block text-xs font-semibold text-cloud-sign uppercase tracking-wider mb-1.5">
                    Location / City & Dimensions (Approx)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jubilee Hills, Hyderabad (Approx 12ft x 3ft)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-navy-soft border border-navy-line focus:border-amber-brand focus:outline-none text-sm text-white placeholder-muted-sign/50"
                  />
                </div>

                {/* Simulated Photo Attachment Area */}
                <div>
                  <label className="block text-xs font-semibold text-cloud-sign uppercase tracking-wider mb-1.5">
                    Attach Signboard Photo (Optional)
                  </label>
                  <div
                    onClick={() => setFileAttached(fileAttached ? null : 'signboard-site-photo.jpg')}
                    className="border border-dashed border-navy-line hover:border-amber-brand/70 rounded-lg p-3.5 text-center cursor-pointer transition-colors bg-navy-soft/40"
                  >
                    {fileAttached ? (
                      <div className="flex items-center justify-center gap-2 text-xs text-amber-brand font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Attached: {fileAttached} (Click to remove)</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-sign">
                        <UploadCloud className="w-4 h-4 text-amber-brand" />
                        <span>Click to attach photo or send directly on WhatsApp</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-cloud-sign uppercase tracking-wider mb-1.5">
                    Project Notes / Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe specific letters dark, height from ground, mall permits, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-navy-soft border border-navy-line focus:border-amber-brand focus:outline-none text-sm text-white placeholder-muted-sign/50"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 rounded-xl bg-amber-brand hover:bg-amber-hover text-navy font-bold text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,176,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,176,0,0.5)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>REQUEST DETAILED QUOTE</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-navy-soft border border-navy-line hover:border-amber-brand text-amber-brand font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
