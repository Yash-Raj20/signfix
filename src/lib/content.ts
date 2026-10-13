import { SiteContent } from '@/types/content';

export const siteContent: SiteContent = {
  brand: {
    name: 'SignFix',
    tagline: 'Your sign, fixed and glowing again.',
    location: 'Hyderabad, Telangana',
    phone: '00000000',
    phoneDisplay: '00000000',
    whatsapp: '00000000',
    email: 'contact@signfix.me',
    address: 'Road No. 36, Jubilee Hills & Madhapur, Hyderabad, Telangana 500033',
    googleMapsUrl: 'https://maps.google.com/?q=Madhapur+Hyderabad+Telangana',
    hours: 'Mon – Sat: 9:00 AM – 8:00 PM',
    emergencyHours: '24/7 emergency repair response across Hyderabad',
  },

  nav: {
    links: [
      { label: 'Work', href: '#work' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Why Us', href: '#why-us' },
      { label: 'FAQ', href: '#faq' },
    ],
    ctaLabel: 'Get a Free Quote',
  },

  hero: {
    eyebrow: 'Hyderabad · Sign Board & LED Repair',
    headlineStart: 'Broken sign? We bring it ',
    headlineFlicker: 'back to light.',
    subtext:
      'We fix dark letters, flickering LEDs, cracked acrylic and burnt power drivers. Fast site inspection in Hyderabad. We repair first, rebuild only when needed.',
    primaryCta: 'Get a Free Quote',
    secondaryCta: 'Call Now',
    statusPill: 'Tech team on call across Hyderabad',
    proofTag: 'Average response under 60 mins on WhatsApp',
  },

  beforeAfter: {
    eyebrow: 'Proof of Work',
    title: 'The difference between forgotten and visible.',
    description:
      'Most businesses think a dead sign means buying a costly new board. In 8 out of 10 cases, the frame is intact. We replace the dead modules, install protected power supplies, and restore full nighttime luminance.',
    beforeLabel: 'Faded & Dark',
    afterLabel: 'Restored & Lit',
    caption: 'Storefront restoration in Banjara Hills: salvaged frame, new Samsung IP67 LEDs, virgin cast acrylic face.',
    initialSliderPosition: 52,
  },

  services: {
    eyebrow: 'What We Fix',
    title: 'Four focused specialties. Done by technicians, not middlemen.',
    description:
      'Signage problems are electrical and structural. We trace the exact fault, give you an honest quote, and carry genuine spares in our service vans.',
    items: [
      {
        id: 'sign-board-repair',
        number: '01',
        title: 'Sign Board Repair',
        tagline: 'Physical and structural fixes for damaged boards',
        description:
          'Wind damage, cracked acrylic faces, bent channel returns, and loose mounting brackets. We secure the structure, replace broken letter faces, and seal against rain.',
        symptoms: [
          'Cracked or fallen letter faces',
          'Rusted or rattling mounting frames',
          'Water pooling inside letter casings',
        ],
        deliverables: [
          'Structural anchor reinforcement',
          'UV-resistant cast acrylic face replacement',
          'All-weather silicone sealing',
        ],
        image: '/images/work-repair.webp',
        alt: 'Technician repairing cracked acrylic channel letter',
      },
      {
        id: 'led-lightbox-repair',
        number: '02',
        title: 'LED & Lightbox Repair',
        tagline: 'Electrical diagnostics for dark and flickering signs',
        description:
          'Dark letters, buzzing boxes, strobe effects, and dim modules. We test every circuit, replace burnt MeanWell drivers, and match color temperature across every character.',
        symptoms: [
          'Only three letters light up at night',
          'Board flickers or buzzes continuously',
          'Visible dark patches and hotspots',
        ],
        deliverables: [
          'IP67 waterproof constant-voltage driver upgrades',
          'High-lumen injection module retrofitting',
          'Complete wire trace and soldered joints',
        ],
        image: '/images/work-led.webp',
        alt: 'Internal LED wiring and driver replacement',
      },
      {
        id: 'sign-restoration',
        number: '03',
        title: 'Sign Restoration',
        tagline: 'Complete makeover without buying a new board',
        description:
          'Keep your sound metal chassis and save up to 60%. We strip old vinyl, polish metal trims, repaint weathered brackets, and replace worn internal lighting with high-efficiency LEDs.',
        symptoms: [
          'Sign looks sun-bleached and tired from a distance',
          'Old fluorescent tubes consuming high power',
          'Yellowed cloudy plastic faces',
        ],
        deliverables: [
          'Fresh CNC-routed acrylic faceplate',
          'Anti-rust polyurethane frame coating',
          'Up to 70% reduction in electricity load',
        ],
        image: '/images/work-restoration.webp',
        alt: 'Fully restored storefront sign illuminated at night',
      },
      {
        id: 'new-led-signage',
        number: '04',
        title: 'New LED Signage',
        tagline: 'Fabricated in-house for businesses that need new presence',
        description:
          'When an old sign cannot be saved or you are launching a new site. 3D acrylic channel letters, warm back-lit halo letters, and ACP architectural facades built to mall and corporate standards.',
        symptoms: [
          'Opening a new storefront or office',
          'Rebranding to a modern identity',
          'Mall fit-out requiring fire-retardant compliance',
        ],
        deliverables: [
          'Precision laser and CNC router fabrication',
          'Even module spacing with zero hotspots',
          'Continuous 8-hour pre-dispatch burn-in test',
        ],
        image: '/images/work-new.webp',
        alt: 'Newly installed 3D channel letters with warm halo glow',
      },
    ],
  },

  process: {
    eyebrow: 'Simple Process',
    title: 'How we get your lights back on.',
    description:
      'No lengthy back-and-forth. Most repairs are diagnosed within minutes from a photo.',
    steps: [
      {
        number: '01',
        title: 'Send a photo on WhatsApp',
        timeframe: 'Immediate',
        description:
          'Snap one photo of the sign in daytime and one at night with the lights switched on. Tell us your location in Hyderabad.',
        actionNote: 'Send photo now →',
      },
      {
        number: '02',
        title: 'Clear diagnostic & quote',
        timeframe: 'Within 60 mins',
        description:
          'We inspect the photos, identify the probable root cause, and give you an itemized estimate. We state clearly if repair or restoration makes the most sense.',
        actionNote: 'Itemized pricing',
      },
      {
        number: '03',
        title: 'Site visit & bench fix',
        timeframe: '24 to 48 hours',
        description:
          'Our service team arrives with testing gear, ladders, power supplies and modules. We fix on site or service the face in our workshop.',
        actionNote: 'Genuine IP67 spares',
      },
      {
        number: '04',
        title: 'Lights on & warranty',
        timeframe: 'Final handover',
        description:
          'We check the voltage balance, verify that every letter matches in brightness, and test rain seals. You get a direct replacement warranty on replaced parts.',
        actionNote: 'Uniform illumination',
      },
    ],
  },

  work: {
    eyebrow: 'Selected Work',
    title: 'Real storefronts restored in Hyderabad.',
    description:
      'A small sample of recent repair and restoration jobs across retail, clinics, food joints and office premises.',
    projects: [
      {
        id: 'work-1',
        title: 'Retail Storefront Full LED Overhaul',
        client: 'Flagship Bakery & Cafe',
        category: 'LED Repair',
        location: 'Banjara Hills',
        description:
          'Old fluorescent box sign converted to high-brightness 3D channel letters. Letter faces restored, internal drivers relocated to weatherproof ventilated cabinet.',
        beforeImage: '/images/project-1-before.webp',
        afterImage: '/images/project-1-after.webp',
        specs: ['14ft x 3.5ft', '4000K Natural White', 'MeanWell IP67 Drivers'],
      },
      {
        id: 'work-2',
        title: 'Emergency Power Driver Replacement',
        client: 'Multi-Speciality Diagnostic Centre',
        category: 'Electrical Fix',
        location: 'Madhapur',
        description:
          'Main sign went completely dark following monsoon voltage spike. Isolated short-circuit, replaced failed transformer, and balanced load across all 22 letters.',
        beforeImage: '/images/project-2-before.webp',
        afterImage: '/images/project-2-after.webp',
        specs: ['Same-day Turnaround', 'Surge Protected', 'Zero Letter Removal'],
      },
      {
        id: 'work-3',
        title: 'Faded Acrylic Face Re-skin & Polishing',
        client: 'Family Restaurant & Biryani House',
        category: 'Restoration',
        location: 'Jubilee Hills',
        description:
          'Structure was intact but 6-year-old plastic had cracked from sun exposure. Routed fresh cast acrylic letters and resealed perimeter channel trims.',
        beforeImage: '/images/project-3-before.webp',
        afterImage: '/images/project-3-after.webp',
        specs: ['3mm Cast Virgin Acrylic', '6500K Cool White', 'Saved 55% Cost'],
      },
      {
        id: 'work-4',
        title: 'Mall Interior Halo Backlit Letters',
        client: 'Boutique Apparel Store',
        category: 'New Signage',
        location: 'Kukatpally Mall',
        description:
          'Mall fit-out compliance job. Low-voltage 12V halo letters with brushed titanium gold finish mounted on fire-retardant backing panel.',
        beforeImage: '/images/project-4-before.webp',
        afterImage: '/images/project-4-after.webp',
        specs: ['Mall Night Installation', 'CE Certified Wiring', 'Warm 3000K'],
      },
    ],
  },

  whyUs: {
    eyebrow: 'Why SignFix',
    title: 'Straight talk. Proper components. Real technicians.',
    description:
      'We do not subcontract your work to random handymen. Every repair is done by workers who understand signage electrical loads.',
    points: [
      {
        number: '01',
        title: 'Repair first, replace only when needed',
        description:
          'Most signage shops want to sell you a brand-new board for ₹80,000. If your frame is solid, we fix the electronics and faces for a fraction of the cost.',
        metric: 'Up to 60%',
        metricLabel: 'saved compared to buying new',
      },
      {
        number: '02',
        title: 'Genuine IP67 waterproof parts',
        description:
          'Cheap LED strips fail in the first Hyderabad monsoon. We only install injection-molded lenses with ultrasonic seals and branded power supplies.',
        metric: '100%',
        metricLabel: 'waterproof-rated components',
      },
      {
        number: '03',
        title: 'Even light, zero hot spots',
        description:
          'We calculate letter depth and optical beam angles. You get uniform illumination from end to end, not patchy dots showing through the face.',
        metric: '160°–175°',
        metricLabel: 'wide-beam optical lenses',
      },
      {
        number: '04',
        title: 'Fast site inspection in Hyderabad',
        description:
          'Our service team covers Hitech City, Madhapur, Jubilee Hills, Gachibowli, Secunderabad, and Begumpet with diagnostic tools ready.',
        metric: '< 60 min',
        metricLabel: 'WhatsApp diagnosis response',
      },
    ],
  },

  faq: {
    eyebrow: 'Questions & Answers',
    title: 'Frequently asked questions.',
    description:
      'Honest answers about costs, turnaround, and what can and cannot be repaired.',
    items: [
      {
        id: 'faq-1',
        question: 'Can you fix only the letters that are dark without replacing the whole sign?',
        answer:
          'Yes. We open the dark letter casings, test the continuity, replace the dead LED module cluster, and match the brightness and color temperature to the rest of your board.',
      },
      {
        id: 'faq-2',
        question: 'How fast can someone visit our store in Hyderabad?',
        answer:
          'For emergency blackouts in commercial areas (Madhapur, Jubilee Hills, Banjara Hills, Gachibowli, Kondapur), we can dispatch a technician within 2 to 4 hours of your WhatsApp confirmation.',
      },
      {
        id: 'faq-3',
        question: 'What is the cost difference between repair and a brand-new sign?',
        answer:
          'Repair typically costs between 20% to 40% of the cost of a new board. If the structure is sound, restoring the acrylic faces and replacing the power supply saves you substantial money.',
      },
      {
        id: 'faq-4',
        question: 'Do you carry out night installations for shopping malls?',
        answer:
          'Yes. We regularly handle mall fit-outs in Inorbit, Nexus, and Sarath City Capital under night work permits (11:00 PM to 7:00 AM) with fire-retardant wiring certificates.',
      },
      {
        id: 'faq-5',
        question: 'What warranty do you provide on repaired signage?',
        answer:
          'We provide direct replacement warranty on all newly installed power drivers and LED modules. If a component replaced by us fails within the warranty term, we fix it at no charge.',
      },
      {
        id: 'faq-6',
        question: 'What do I need to send to get an accurate quote?',
        answer:
          'Just two things on WhatsApp: one daytime photo showing the whole sign, and one nighttime photo with the switch turned on. Include your location in Hyderabad.',
      },
    ],
  },

  ctaBand: {
    titleStart: "Let's get your sign ",
    titleAccent: 'glowing again.',
    subtext:
      'Send a photo on WhatsApp now. A technician will review the fault and reply with an honest estimate.',
    whatsappCta: 'Chat on WhatsApp',
    callCta: 'Call 00000000',
  },

  contact: {
    eyebrow: 'Get in Touch',
    title: 'Tell us what is wrong with your sign.',
    description:
      'Fill out the quick form below. It prepares a pre-filled WhatsApp message so you can send photos and get an immediate reply.',
    responseTime: 'Replies typically in 15–30 minutes during work hours',
    signTypes: [
      '3D Acrylic Channel Letters',
      'LED Glow Sign Box',
      'ACP Facade Cladding',
      'Neon Sign',
      'Metal / Backlit Halo Letters',
      'Not Sure / Other',
    ],
    commonProblems: [
      'Entire sign is completely dark',
      'A few letters are dark',
      'Sign is flickering / buzzing',
      'Acrylic face is cracked or faded',
      'Water entered the casing',
      'Need a new sign made',
    ],
  },

  footer: {
    tagline: 'Your sign, fixed and glowing again.',
    copyright: '© 2026 SignFix. All rights reserved.',
    disclaimer: 'Sign board repair, LED diagnostics and restoration across Hyderabad & Telangana.',
  },
};
