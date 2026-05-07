import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { JsonLd } from '@/components/JsonLd';
import { jsonLdGraph, organizationSchema, webSiteSchema, SITE_URL } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Peptide Handbook — Science. Longevity. Potential.',
    template: '%s — Peptide Handbook',
  },
  description:
    "The UK's trusted decision engine for peptides, performance, and longevity. Clear, science-backed insights into what works — and what doesn't. Independently researched, peer-reviewed by clinicians.",
  keywords: [
    'peptides',
    'tirzepatide',
    'semaglutide',
    'GLP-1',
    'weight loss UK',
    'BPC-157',
    'CJC-1295',
    'Ipamorelin',
    'longevity peptides',
    'UK peptide guide',
    'MHRA peptides',
    'evidence-based peptides',
    'Mounjaro vs Wegovy',
    'GHRH',
    'GHRP',
    'retatrutide',
  ],
  applicationName: 'Peptide Handbook',
  authors: [{ name: 'Peptide Handbook editorial team', url: `${SITE_URL}/about` }],
  creator: 'Peptide Handbook',
  publisher: 'Peptide Handbook',
  category: 'Health & medicine',
  classification: 'Educational health information',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Peptide Handbook',
    title: 'Peptide Handbook — Science. Longevity. Potential.',
    description:
      "The UK's trusted decision engine for peptides, performance, and longevity. Clear, science-backed insights into what works — and what doesn't.",
    url: SITE_URL,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Peptide Handbook — the UK\'s evidence-first guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Handbook — Science. Longevity. Potential.',
    description: "The UK's trusted decision engine for peptides, performance, and longevity.",
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  // Icons are auto-generated from app/icon.tsx (32x32) and app/apple-icon.tsx (180x180).
  // /favicon.svg in public/ provides the SVG fallback for high-DPI browsers.
  manifest: '/manifest.webmanifest',
  verification: {
    // Placeholder verification IDs — replace with real values once console accounts are set up.
    // google: 'google-site-verification-token',
    // other: { 'msvalidate.01': 'bing-site-verification-token' },
  },
  other: {
    'apple-mobile-web-app-title': 'Peptide Handbook',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>
        {children}
        <JsonLd data={jsonLdGraph(organizationSchema(), webSiteSchema())} />
      </body>
    </html>
  );
}
