import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://peptidehandbook.co.uk';

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
  ],
  applicationName: 'Peptide Handbook',
  authors: [{ name: 'Peptide Handbook editorial team' }],
  creator: 'Peptide Handbook',
  publisher: 'Peptide Handbook',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Peptide Handbook',
    title: 'Peptide Handbook — Science. Longevity. Potential.',
    description:
      "The UK's trusted decision engine for peptides, performance, and longevity. Clear, science-backed insights into what works — and what doesn't.",
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Handbook — Science. Longevity. Potential.',
    description: "The UK's trusted decision engine for peptides, performance, and longevity.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
