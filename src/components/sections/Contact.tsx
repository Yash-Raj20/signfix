'use client';

import React, { useState, useRef } from 'react';
import {
  MapPin,
  Globe,
  Mail,
  Phone,
  Camera,
  UploadCloud,
  X,
  FileCheck,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import Badge from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteContent } from '@/lib/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const needOptions = [
  'LED sign repair',
  'Restoration',
  'New sign board',
  'Name plates',
  'Multi-location',
];

export function Contact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [selectedNeed, setSelectedNeed] = useState(needOptions[0]);
  const [problemDescription, setProblemDescription] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!phone.trim()) newErrors.phone = 'Please enter your contact number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const validImageFiles = Array.from(files).filter((file) =>
      file.type.startsWith('image/')
    );
    setUploadedFiles((prev) => [...prev, ...validImageFiles]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const fileSummary =
      uploadedFiles.length > 0
        ? `Photos Attached: ${uploadedFiles.length} image(s) [${uploadedFiles
          .map((f) => f.name)
          .join(', ')}]`
        : '';

    const detailsText = [
      company ? `Company: ${company}` : '',
      selectedNeed ? `Requirement: ${selectedNeed}` : '',
      problemDescription ? `Details: ${problemDescription}` : '',
      fileSummary,
    ]
      .filter(Boolean)
      .join(' | ');

    const url = buildWhatsAppUrl(siteContent.brand.whatsapp, {
      name,
      phone,
      location,
      signType: selectedNeed,
      problem: detailsText || 'Site Inspection Request',
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      aria-label="Request a Quote & Contact"
      className="relative py-16 sm:py-24 bg-[#f8f6f0] overflow-hidden"
    >
      {/* Background ambient radial glows matching Hero theme */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-led/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle architectural grid pattern matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-360 mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading and Contact Information */}
          <div className="lg:col-span-6 flex flex-col items-start lg:sticky lg:top-28">
            <Reveal delay={0.05} yOffset={16}>
              <Badge variant="amber" size="md" className="mb-4">
                23 — REQUEST A QUOTE
              </Badge>
            </Reveal>

            <Reveal delay={0.1} yOffset={20}>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#07182d] tracking-tight leading-[1.14] mb-4">
                Your sign is already telling people something about{' '}
                <span className="text-amber-600 block">your business.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15} yOffset={16}>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-10 max-w-xl">
                Make sure it is saying the right thing. The fastest way to start is to show us
                the sign.
              </p>
            </Reveal>

            {/* Contact Details List */}
            <Reveal delay={0.2} yOffset={20} className="w-full">
              <div className="space-y-6 pt-6 border-t border-slate-200/90 w-full max-w-lg">
                {/* 1. Workshop */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-2xs">
                    <MapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[11px]  font-bold uppercase tracking-wider text-[#d97706] block mb-1">
                      WORKSHOP
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#07182d]">
                      {siteContent.brand.location || 'Hyderabad, Telangana'}
                    </span>
                  </div>
                </div>

                {/* 2. Service Area */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-2xs">
                    <Globe className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[11px]  font-bold uppercase tracking-wider text-[#d97706] block mb-1">
                      SERVICE AREA
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#07182d]">
                      Hyderabad · Pan-India supply · Selected international
                    </span>
                  </div>
                </div>

                {/* 3. Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-2xs">
                    <Mail className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[11px]  font-bold uppercase tracking-wider text-[#d97706] block mb-1">
                      EMAIL
                    </span>
                    <a
                      href="mailto:admin@signfix.in"
                      className="text-sm sm:text-base font-bold text-[#07182d] hover:text-[#d97706] transition-colors"
                    >
                      admin@signfix.in
                    </a>
                  </div>
                </div>

                {/* 4. Phone & WhatsApp */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-2xs">
                    <Phone className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#d97706] block mb-1">
                      PHONE / WHATSAPP
                    </span>
                    <a
                      href={`tel:${siteContent.brand.phone}`}
                      className="text-sm sm:text-base font-bold text-[#07182d] hover:text-[#d97706] transition-colors"
                    >
                      {siteContent.brand.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Theme-Styled Clean Form Card matching screenshot */}
          <div className="lg:col-span-6 w-full">
            <Reveal delay={0.2} yOffset={24}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 sm:px-9 border border-slate-200/90 shadow-xl relative">
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-[#07182d] tracking-tight mb-1">
                    Tell us about the sign
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Short form first — add detail if you have it.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px]  font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        NAME
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Your name"
                        className={cn(
                          'w-full bg-[#f8f6f0]/70 border rounded-xl px-4 py-2.5 text-sm text-[#07182d] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 focus:bg-white transition-all',
                          errors.name ? 'border-rose-400' : 'border-slate-200'
                        )}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-rose-500 mt-1 block font-medium">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px]  font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Business name"
                        className="w-full bg-[#f8f6f0]/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#07182d] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Mobile / WhatsApp & Site Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px]  font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        MOBILE / WHATSAPP
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+91"
                        className={cn(
                          'w-full bg-[#f8f6f0]/70 border rounded-xl px-4 py-2.5 text-sm text-[#07182d] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 focus:bg-white transition-all',
                          errors.phone ? 'border-rose-400' : 'border-slate-200'
                        )}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-rose-500 mt-1 block font-medium">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px]  font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        SITE LOCATION
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="City / area"
                        className="w-full bg-[#f8f6f0]/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#07182d] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: What Do You Need? (Pill Selectors) */}
                  <div>
                    <label className="block text-[11px]  font-bold uppercase tracking-wider text-slate-400 mb-2">
                      WHAT DO YOU NEED?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {needOptions.map((opt) => {
                        const isSelected = selectedNeed === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedNeed(opt)}
                            className={cn(
                              'px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer select-none',
                              isSelected
                                ? 'bg-amber-500 text-[#07182d] font-bold border border-amber-500 shadow-xs'
                                : 'bg-[#f8f6f0] text-slate-700 border border-slate-200 hover:border-amber-400/60 font-medium'
                            )}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Describe The Problem */}
                  <div>
                    <label className="block text-[11px]  font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      DESCRIBE THE PROBLEM
                    </label>
                    <textarea
                      rows={3}
                      value={problemDescription}
                      onChange={(e) => setProblemDescription(e.target.value)}
                      placeholder="e.g. Half the letters are dark after rain, sign is about 12ft wide"
                      className="w-full bg-[#f8f6f0]/70 border border-slate-200 rounded-xl p-3 text-sm text-[#07182d] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Row 5: Interactive Photo Upload / Drag-and-Drop Area */}
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={cn(
                        'border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center select-none',
                        isDragging
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-slate-300 hover:border-amber-400 bg-[#f8f6f0]/50 hover:bg-[#f8f6f0]'
                      )}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-slate-600 mb-2 group-hover:text-amber-600">
                        {isDragging ? (
                          <UploadCloud className="w-5 h-5 text-amber-600 animate-bounce" />
                        ) : (
                          <Camera className="w-5 h-5 text-[#d97706]" />
                        )}
                      </div>

                      <p className="font-bold text-xs sm:text-sm text-[#07182d]">
                        Attach daylight + night photos on WhatsApp
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Click to browse or drag & drop sign photos (JPG, PNG, WebP)
                      </p>
                    </div>

                    {/* Uploaded Files Previews / Chips */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                          <span>{uploadedFiles.length} photo(s) selected:</span>
                          <button
                            type="button"
                            onClick={() => setUploadedFiles([])}
                            className="text-rose-500 hover:underline cursor-pointer"
                          >
                            Clear all
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {uploadedFiles.map((file, idx) => (
                            <div
                              key={`${file.name}-${idx}`}
                              className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#f8f6f0] border border-slate-200 text-xs"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                                <div className="truncate">
                                  <p className="font-semibold text-[#07182d] truncate">
                                    {file.name}
                                  </p>
                                  <p className="text-[10px] text-slate-400">
                                    {(file.size / 1024).toFixed(0)} KB
                                  </p>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFile(idx);
                                }}
                                className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors shrink-0 cursor-pointer"
                                aria-label="Remove photo"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full font-extrabold uppercase tracking-wider py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm"
                  >
                    <span>REQUEST A SITE INSPECTION</span>
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
