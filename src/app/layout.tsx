import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Cursor } from '@/components/layout/Cursor';
import { Preloader } from '@/components/common/Preloader';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { siteContent } from '@/lib/content';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

export const viewport: Viewport = {
  themeColor: '#07182D',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Sign Board Repair & LED Signage in Hyderabad | SignFix',
  description:
    'SignFix is Hyderabad’s dedicated sign board repair and restoration team. We fix dark letters, flickering LEDs, power drivers and cracked acrylic across Hyderabad. Fast WhatsApp quotes.',
  keywords: [
    'Sign Board Repair Hyderabad',
    'LED Sign Board Repair',
    'Signboard Restoration Hyderabad',
    'Sign Board Power Supply Replacement',
    '3D Acrylic Channel Letters',
    'Signboard Lighting Fix',
    'Madhapur Signboard Repair',
    'Jubilee Hills Signboard Repair',
  ],
  authors: [{ name: 'SignFix Technical Division' }],
  metadataBase: new URL('https://signfix.me'),
  openGraph: {
    title: 'Sign Board Repair & LED Signage in Hyderabad | SignFix',
    description:
      'Broken sign? We bring it back to light. Sign board repair, LED diagnostics, and complete restoration in Hyderabad.',
    url: 'https://signfix.me',
    siteName: 'SignFix Hyderabad',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Board Repair & LED Signage in Hyderabad | SignFix',
    description: 'Broken sign? We bring it back to light. Fast site repair in Hyderabad.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteContent.brand.name,
    image: 'https://signfix.me/assets/signfix-og.jpg',
    telephone: siteContent.brand.phone,
    email: siteContent.brand.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Road No. 36, Jubilee Hills & Madhapur',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500033',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.4399',
      longitude: '78.3908',
    },
    url: 'https://signfix.me',
    priceRange: '₹₹',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-20:00',
    areaServed: [
      'Hyderabad',
      'Madhapur',
      'Jubilee Hills',
      'Banjara Hills',
      'Gachibowli',
      'Kondapur',
      'Secunderabad',
    ],
    description:
      'Specialist sign board repair, LED module diagnostics, and restoration services across Hyderabad and Telangana.',
  };

  return (
    <html
      lang="en"
      className={`${bricolage.variable} font-sans`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bricolage.className} bg-[#f8f6f0] text-ink antialiased selection:bg-led selection:text-ink min-h-screen`}>
        {/* Accessible skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-led text-ink  text-xs font-bold rounded"
        >
          Skip to content
        </a>

        <SmoothScroll>
          {/* <Preloader /> */}
          <Cursor />
          {children}
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
