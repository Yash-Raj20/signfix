import {
  NavItem,
  StatItem,
  ClientItem,
  ServiceItem,
  DiagnosticItem,
  PortfolioItem,
  TestimonialItem,
  FAQItem
} from '@/types';

export const SITE_CONFIG = {
  name: 'SignFix',
  legalName: 'SignFix Signage Solutions LLP',
  tagline: 'Repair · Restore · Refresh · Transform',
  subTagline: 'ALL SIGNAGE SOLUTIONS',
  phone: '00000000',
  whatsapp: '00000000',
  email: 'hello@signfix.me',
  address: 'Road No. 36, Jubilee Hills & Madhapur, Hyderabad, Telangana 500033',
  serviceArea: 'Hyderabad, Telangana — Pan-India Supply & Installation',
  estYear: '2019',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'LED Diagnostics', href: '#diagnostics', badge: 'Fast Repair' },
  { label: 'Fabrication', href: '#fabrication' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Workflow', href: '#process' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const STATS_DATA: StatItem[] = [
  {
    value: '500+',
    label: 'Signs Restored & Installed',
    description: 'Across IT Parks, retail chains and corporate offices',
    iconName: 'Wrench',
  },
  {
    value: '24-48h',
    label: 'Diagnostic & Repair Turnaround',
    description: 'Fast emergency repair squad on standby in Hyderabad',
    iconName: 'Zap',
  },
  {
    value: '99.6%',
    label: 'Client Satisfaction Rate',
    description: 'Zero compromised illumination or faulty wiring',
    iconName: 'ShieldCheck',
  },
  {
    value: 'PAN INDIA',
    label: 'Supply & Installation Network',
    description: 'Turnkey manufacturing with safe interstate crating',
    iconName: 'Globe',
  },
];

export const CLIENTS_DATA: ClientItem[] = [
  { name: 'Haldiram\'s', category: 'F&B Retail', tagline: 'Turnkey Illuminated Storefront' },
  { name: 'Blue Dart Express', category: 'Logistics', tagline: 'Branch Fascia Standardization' },
  { name: 'HDFC Bank', category: 'Banking', tagline: 'High-Lumen 3D Channel Letters' },
  { name: 'Karachi Bakery', category: 'Flagship Retail', tagline: 'Architectural Acrylic & Neon' },
  { name: 'Apollo Hospitals', category: 'Healthcare', tagline: 'Emergency & Wayfinding Signage' },
  { name: 'Pista House', category: 'Hospitality', tagline: 'Facade ACP & Warm LED Display' },
  { name: 'Tech Mahindra', category: 'Corporate Campus', tagline: 'Campus Exterior Monument Signs' },
  { name: 'Reliance Retail', category: 'Multi-Store', tagline: 'Pan-Telangana Retail Branding' },
  { name: 'Nerolac Paints', category: 'Dealer Network', tagline: 'Standardized Glow Sign Boxes' },
  { name: 'Prestige Group', category: 'Commercial Real Estate', tagline: 'Architectural Lobby Wayfinding' },
  { name: 'Legrand', category: 'Industrial', tagline: 'Laser Cut SS & Edge-lit Displays' },
  { name: 'Paradise Biryani', category: 'F&B Icon', tagline: 'Retrofit Night-glow Restoration' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'led-repair',
    title: 'Sign Board & LED Repair',
    category: 'Rapid Diagnostics & Fix',
    badge: 'Same-Day Assessment',
    shortDesc: 'Complete diagnosis and repair of dark letters, flickering LEDs, burnt power drivers, and weathered internal wiring.',
    fullDesc: 'SignFix diagnoses the root problem rather than patching over it. Whether water seeped into the aluminum casing or high-voltage spike damaged your SMPS drivers, we restore clean, uniform brilliance with genuine IP67 components.',
    iconName: 'Sparkles',
    features: [
      'Faulty LED module & strip replacement',
      'Waterproof IP67 power supply upgrades',
      'Short-circuit diagnosis & rewire',
      'Balanced letter-by-letter lumens matching'
    ],
    specs: ['LED Specs: 1.2W-2.4W Injection Modules', 'Power: MeanWell / Philips IP67 Drivers', 'Warranty: Up to 2-Year Replacement']
  },
  {
    id: 'restoration-makeover',
    title: 'Sign Restoration & Makeover',
    category: 'Visual Transformation',
    badge: 'Save Up to 60%',
    shortDesc: 'Why rebuild when you can restore? Turn faded, cracked, or dull signage into a crisp, modern architectural showpiece.',
    fullDesc: 'Restoration preserves a structurally sound foundation while stripping away aged acrylic, oxidized vinyl, and outdated incandescent/fluorescent tubes. We replace with high-grade cast acrylic and energy-saving Samsung/Osram LEDs.',
    iconName: 'RefreshCw',
    features: [
      'Old acrylic face replacement with UV cast sheet',
      'Structural frame rust-proofing & powder coating',
      'Energy-efficient LED retrofit conversion',
      'Vinyl graphics refresh and edge sealing'
    ],
    specs: ['Acrylic: Cast Virgin Grade 3mm-5mm', 'Frame: Heavy-duty Zinc Chromate Primed', 'Eco-benefit: Zero structural metal waste']
  },
  {
    id: '3d-letters',
    title: '3D Acrylic & LED Channel Letters',
    category: 'Premium Storefronts',
    badge: 'High Impact',
    shortDesc: 'Ultra-bright 3D fabricated channel letters: front-lit, back-lit halo glow, side-lit, and solid acrylic block letterings.',
    fullDesc: 'Crafted with precision CNC router cutting and computerized bending machines. Designed to make your storefront visible and distinctly identifiable even from a 500-meter distance during busy night traffic.',
    iconName: 'Layers',
    features: [
      'Front-lit acrylic face with aluminum return trim',
      'Warm/Cool halo edge back-lit letters with spacers',
      'Titanium gold, rose gold & brushed SS finishes',
      'Liquid acrylic & neon flex accent integrations'
    ],
    specs: ['Materials: SS 304, Brass, Cast Acrylic', 'Depth: 25mm to 120mm custom returns', 'Visibility: Daytime crisp + Night halo glow']
  },
  {
    id: 'acp-facade',
    title: 'ACP Panel Facade Cladding',
    category: 'Architectural Remodeling',
    shortDesc: 'Total exterior building makeover using weather-resistant Aluminium Composite Panels with structural steel framing.',
    fullDesc: 'Give your entire building facade a sleek corporate presence. We engineer the structural sub-grid to withstand local wind loads while integrating laser-cut illuminated grooves and backlit logos seamlessly.',
    iconName: 'Building2',
    features: [
      'Fire-retardant (FR grade) ACP panels',
      'Laser CNC precision router cutouts',
      'Concealed framing & weather silicone caulking',
      'Seamless multi-story cladding execution'
    ],
    specs: ['ACP Brands: Aludecor, Eurobond, Alstone', 'Thickness: 3mm / 4mm with PVDF Coating', 'Warranty: 10-Year Fade Resistance']
  },
  {
    id: 'inshop-branding',
    title: 'In-Shop & Retail Branding',
    category: 'Interior & Experience',
    shortDesc: 'Elevate your retail interior with reception logo backdrops, pillar wraps, edge-lit directional signs, and frosted films.',
    fullDesc: 'Interior brand touchpoints require fine-art attention to letter edge smoothness and gentle diffusion. We create sophisticated lobby statements that inspire client confidence from the moment they step through your door.',
    iconName: 'Store',
    features: [
      'Reception feature wall logo emblems',
      'Ultra-thin crystal lightboxes (snap frame)',
      'Acoustic felt & moss wall signage integration',
      'Architectural frosted glass film design'
    ],
    specs: ['Finish: Micro-satin acrylic & anodized aluminum', 'Mounting: Concealed stainless steel standoffs', 'Lighting: Low-voltage flicker-free 24V']
  },
  {
    id: 'mall-corporate',
    title: 'Mall & Corporate Signage Standards',
    category: 'Compliance & Delivery',
    badge: '100% Mall Compliant',
    shortDesc: 'Strict mall management compliance, fire retardant ratings, silent installations, and architectural grade finishes.',
    fullDesc: 'We coordinate directly with mall fitout teams (Inorbit, Nexus, Forum, Sarath City) and corporate safety officers, adhering to strict evening working windows, electrical certifications, and load distribution guidelines.',
    iconName: 'ShieldCheck',
    features: [
      'Zero-flame rated cabling & fire-retardant backing',
      'Night-shift installation & safety paperwork',
      'Architectural drawing submission & approvals',
      'Single-point project manager coordination'
    ],
    specs: ['Compliance: Mall Fitout Manual & CE/BIS wires', 'Timing: Night-shift 11 PM - 7 AM operations', 'Certifications: Load & Megger Test Reports']
  }
];

export const DIAGNOSTICS_DATA: DiagnosticItem[] = [
  {
    id: 'diag-1',
    problem: 'Completely Dark Signboard',
    symptom: 'Entire board stopped lighting up overnight or after heavy monsoon rain.',
    rootCause: 'Main SMPS power driver burnout, tripped MCB breaker, or water ingress in the terminal junction box.',
    solution: 'Replace with IP67 rated MeanWell constant-voltage driver with built-in surge protector and re-seal electrical glands.',
    turnaround: 'Same day (4-6 Hours)',
    urgency: 'Emergency'
  },
  {
    id: 'diag-2',
    problem: 'Flickering / Strobe Effect',
    symptom: 'Letters flicker intermittently like a strobe light or buzz under load.',
    rootCause: 'Power supply capacitor degradation, under-rated driver amperage, or loose crimped wire joints.',
    solution: 'Recalculate total wattage load, upgrade to high-amperage stabilized power unit, and re-solder all wire splices.',
    turnaround: '24 Hours',
    urgency: 'High'
  },
  {
    id: 'diag-3',
    problem: 'Partial Letter Blackout',
    symptom: 'Only 2 or 3 letters are dark while the rest of the logo remains lit.',
    rootCause: 'Individual series LED module failure, broken bridge wiring inside channel returns, or localized moisture.',
    solution: 'Trace circuit continuity, replace defective module clusters, and match color temperature (Kelvin) precisely.',
    turnaround: '24-48 Hours',
    urgency: 'High'
  },
  {
    id: 'diag-4',
    problem: 'Visible Hotspots & "Dotting"',
    symptom: 'Unpleasant bright pin-points of LEDs visible instead of uniform soft glow.',
    rootCause: 'Insufficient letter depth, incorrect optical beam angle, or cheap low-grade translucent acrylic face.',
    solution: 'Retrofit wide-angle 160°/175° lens LED modules with optimized pitch spacing and install high-diffusion cast acrylic.',
    turnaround: '48 Hours',
    urgency: 'Standard'
  },
  {
    id: 'diag-5',
    problem: 'Cracked / Sun-Faded Face',
    symptom: 'Letters look yellowed, brittle, hairline-cracked, or faded from intense sun.',
    rootCause: 'Non-UV stabilized recycled plastic used by previous low-cost fabricator.',
    solution: 'CNC route brand-new 100% virgin cast acrylic faces with UV inhibitor and precision laser cut edges.',
    turnaround: '2-3 Days',
    urgency: 'Standard'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'p-1',
    title: '3D High-Gloss Acrylic Channel Sign',
    category: '3D LED',
    client: 'Haldiram\'s Retail & Restaurant',
    location: 'Banjara Hills, Hyderabad',
    specs: '5.2m x 1.2m ACP Backer + 3D Warm White 4000K Front-lit Letters',
    highlight: 'Restored from cracked old box to pristine modern channel letters',
    accentColor: '#ffb000'
  },
  {
    id: 'p-2',
    title: 'Architectural ACP Facade Remodeling',
    category: 'ACP Facade',
    client: 'Prestige Business Tower',
    location: 'Hitech City, Hyderabad',
    specs: 'Eurobond 4mm PVDF Grey Metallic with CNC Grooving & Hidden Standoffs',
    highlight: 'Turnkey building cladding with integrated evening LED architectural lines',
    accentColor: '#1e6091'
  },
  {
    id: 'p-3',
    title: 'Corporate Lobby Brushed Gold Logo',
    category: 'Corporate',
    client: 'Tech Mahindra Campus HQ',
    location: 'Madhapur, Hyderabad',
    specs: 'Solid Brass & SS 304 Brushed Finish with 3000K Warm Halo Backlight',
    highlight: 'High-precision micro laser cutting for fine corporate typemark',
    accentColor: '#ffb000'
  },
  {
    id: 'p-4',
    title: 'Retail Storefront Complete Revival',
    category: 'Restoration',
    client: 'Karachi Bakery Sweets & Café',
    location: 'Gachibowli, Hyderabad',
    specs: 'Complete wiring overhaul + IP67 Samsung LED modules upgrade',
    highlight: 'Retained client structure while doubling brightness & slashing 70% power',
    accentColor: '#ffb000'
  },
  {
    id: 'p-5',
    title: 'Multi-Outlet Standardized Fascia',
    category: 'Retail',
    client: 'Blue Dart Express',
    location: 'Regional Hub Network (14 Locations)',
    specs: 'Standardized RAL color code flex lightboxes with MeanWell power systems',
    highlight: 'Strict Pan-India brand guideline execution in record 10 days',
    accentColor: '#1e6091'
  },
  {
    id: 'p-6',
    title: 'Nexus Mall Outlet Illuminated Signage',
    category: 'Retail',
    client: 'Fine Dining Bistro & Bar',
    location: 'Nexus Hyderabad Mall, Kukatpally',
    specs: 'Zero-flame rated wiring, 3D Acrylic Face with Amber Neon Accent Rim',
    highlight: 'Executed under strict 1 AM - 5 AM mall fitout permit guidelines',
    accentColor: '#ffb000'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Suresh Reddy',
    role: 'Operations Director',
    company: 'Nexus Mall Retailer Group',
    location: 'Hyderabad',
    rating: 5,
    content: 'Our main store signage went completely dark on a Friday evening right before prime weekend traffic. The SignFix team arrived in 2 hours with diagnostic gear, isolated the blown driver, and had us fully lit before dinner rush. Exceptional speed and professional discipline!',
    serviceUsed: 'Emergency Sign Board Repair'
  },
  {
    id: 't-2',
    name: 'Ananya Deshmukh',
    role: 'Brand & Marketing Manager',
    company: 'Novus Health Systems',
    location: 'Madhapur',
    rating: 5,
    content: 'Other agencies told us we needed to spend ₹3.5 Lakhs on a brand new sign. SignFix inspected the frame, informed us the core aluminum base was in mint condition, and restored the acrylic face and LEDs for less than half the cost. The result looks 10x better than the original.',
    serviceUsed: 'Sign Restoration & Makeover'
  },
  {
    id: 't-3',
    name: 'Vikramaditya Rao',
    role: 'Managing Partner',
    company: 'Skyline Hospitality',
    location: 'Jubilee Hills',
    rating: 5,
    content: 'The finish on their 3D channel letters is flawless. No adhesive leaks, no visible screws, and the halo backlight creates a truly luxury glow on our facade. Highly recommend SignFix for any business that cares about their distance appearance.',
    serviceUsed: '3D Acrylic & LED Channel Letters'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Can you replace only the burnt LED modules without rebuilding the entire sign?',
    answer: 'Yes, absolutely! In over 70% of dark signboards, the physical letter structure and casing are completely reusable. We test every module and driver independently, replace burnt components with premium IP67 Samsung/Osram rated LEDs, and balance the luminescence across every letter so you get a brand-new appearance without buying a new sign.',
    category: 'Repair & Diagnostics'
  },
  {
    question: 'How fast can a technician visit our site in Hyderabad?',
    answer: 'For emergency blackouts in commercial hubs (Hitech City, Madhapur, Jubilee Hills, Banjara Hills, Gachibowli, Begumpet, Secunderabad), our rapid inspection team can reach your site within 2 to 4 hours of receiving your photo or WhatsApp request. We carry mobile testing kits and standard power drivers in our vans.',
    category: 'Turnaround'
  },
  {
    question: 'What is the difference between Sign Repair and Sign Restoration?',
    answer: 'Repair fixes an active electrical or structural fault (e.g. replacing a blown transformer or reconnecting a snapped line). Restoration looks at the entire board as an architectural visual object: polishing or replacing faded acrylic faces, repainting weathered frames with rust-inhibiting polyurethane, upgrading old fluorescent tubes to ultra-dense LED arrays, and resealing all joints for years of storm protection.',
    category: 'Services'
  },
  {
    question: 'Do you work with strict shopping mall fit-out regulations?',
    answer: 'Yes! We frequently execute installations in leading malls including Nexus Hyderabad, Inorbit Cyberabad, Sarath City Capital, and GVK One. We prepare architectural elevations, provide fire-retardant material certificates, comply with night-shift work windows (11:00 PM – 7:00 AM), and ensure certified electrical grounding.',
    category: 'Compliance'
  },
  {
    question: 'Do you supply and install signage outside Hyderabad / Pan-India?',
    answer: 'Yes. For multi-store retail rollouts, restaurant chains, and corporate brands, we manufacture complete signage kits in our in-house facility in Hyderabad, pack them in heavy-duty foam-padded plywood crates, and deploy trained mounting crews across Maharashtra, Karnataka, Andhra Pradesh, Tamil Nadu, and Pan-India.',
    category: 'Coverage'
  },
  {
    question: 'How can I get an accurate quotation for my signboard?',
    answer: 'Simply click "Send Your Sign Photo" or WhatsApp us a short video/photo of your current signboard along with your location and approximate dimensions. Our engineering team will review the structure and provide a transparent, itemized quotation within 60 minutes.',
    category: 'Pricing'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Inspect & Diagnose',
    desc: 'Send a photo or book a site visit. We measure load balance, letter condition, and structural integrity.',
    iconName: 'Search'
  },
  {
    step: '02',
    title: 'Plan & Transparent Quote',
    desc: 'Clear itemized proposal explaining whether repair, restoration, or new fabrication is the most cost-effective path.',
    iconName: 'FileText'
  },
  {
    step: '03',
    title: 'Precision In-House Fabrication',
    desc: 'Computerized CNC routing, letter bending, high-grade IP67 LED wiring, and clean edge finishing under one roof.',
    iconName: 'Cpu'
  },
  {
    step: '04',
    title: 'Bench Testing & Burn-In',
    desc: 'Every sign undergoes continuous 8-hour illumination and current stability checks before site dispatch.',
    iconName: 'CheckCircle2'
  },
  {
    step: '05',
    title: 'Safe Mounting & Final Handover',
    desc: 'Certified technicians mount the sign with heavy-duty structural anchors, secure silicone weatherproofing, and final lumen test.',
    iconName: 'Truck'
  }
];
