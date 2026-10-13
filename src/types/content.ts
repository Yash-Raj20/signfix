export interface NavLink {
  label: string;
  href: string;
}

export interface BrandConfig {
  name: string;
  tagline: string;
  location: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  hours: string;
  emergencyHours: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  symptoms: string[];
  deliverables: string[];
  image: string;
  alt: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  timeframe: string;
  description: string;
  actionNote: string;
}

export interface WorkProject {
  id: string;
  title: string;
  client: string;
  category: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  specs: string[];
}

export interface WhyUsPoint {
  number: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteContent {
  brand: BrandConfig;
  nav: {
    links: NavLink[];
    ctaLabel: string;
  };
  hero: {
    eyebrow: string;
    headlineStart: string;
    headlineFlicker: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    statusPill: string;
    proofTag: string;
  };
  beforeAfter: {
    eyebrow: string;
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    caption: string;
    initialSliderPosition: number;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    projects: WorkProject[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    description: string;
    points: WhyUsPoint[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  ctaBand: {
    titleStart: string;
    titleAccent: string;
    subtext: string;
    whatsappCta: string;
    callCta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    responseTime: string;
    signTypes: string[];
    commonProblems: string[];
  };
  footer: {
    tagline: string;
    copyright: string;
    disclaimer: string;
  };
}
