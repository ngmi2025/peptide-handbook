import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Peptide Handbook',
    short_name: 'Peptide Handbook',
    description:
      "The UK's trusted decision engine for peptides, performance, and longevity. Independently researched, peer-reviewed by clinicians.",
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#FFFFFF',
    lang: 'en-GB',
    orientation: 'portrait',
    categories: ['health', 'medical', 'education', 'reference'],
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/icon', sizes: '32x32', type: 'image/png', purpose: 'any' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
    shortcuts: [
      {
        name: 'Find your match',
        short_name: 'Assessment',
        description: 'Take the 5-step peptide assessment.',
        url: '/assessment',
      },
      {
        name: 'Browse peptides',
        short_name: 'Peptides',
        description: 'See every peptide reviewed on the handbook.',
        url: '/peptides',
      },
    ],
  };
}
