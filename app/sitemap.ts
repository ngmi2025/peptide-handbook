import type { MetadataRoute } from 'next';
import { PEPTIDES } from '@/lib/peptides';
import { COMPARISONS } from '@/lib/comparisons';
import { GOALS } from '@/lib/goals';
import { GUIDES } from '@/lib/guides';

const BASE = 'https://peptidehandbook.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/peptides`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/goals`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/compare`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/assessment`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/editorial-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/medical-disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const peptideUrls: MetadataRoute.Sitemap = PEPTIDES.map((p) => ({
    url: `${BASE}/peptides/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const goalUrls: MetadataRoute.Sitemap = GOALS.map((g) => ({
    url: `${BASE}/goals/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const compareUrls: MetadataRoute.Sitemap = COMPARISONS.map((c) => ({
    url: `${BASE}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const guideUrls: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${BASE}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticUrls, ...peptideUrls, ...goalUrls, ...compareUrls, ...guideUrls];
}
