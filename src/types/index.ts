export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface ClientItem {
  name: string;
  category: string;
  tagline: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  specs: string[];
  badge?: string;
}

export interface DiagnosticItem {
  id: string;
  problem: string;
  symptom: string;
  rootCause: string;
  solution: string;
  turnaround: string;
  urgency: 'Standard' | 'High' | 'Emergency';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'All' | '3D LED' | 'ACP Facade' | 'Restoration' | 'Corporate' | 'Retail';
  client: string;
  location: string;
  specs: string;
  highlight: string;
  accentColor?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  content: string;
  serviceUsed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
