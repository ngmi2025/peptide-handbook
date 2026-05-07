import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { ArrowRight } from '@/components/Icons';
import { JsonLd } from '@/components/JsonLd';
import { COMPARISONS } from '@/lib/comparisons';
import { jsonLdGraph, collectionPageSchema, breadcrumbSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Peptide comparisons',
  description:
    'Head-to-head reviews of the most-discussed peptide pairings. Tirzepatide vs Semaglutide, CJC-1295 vs Ipamorelin, and more — with side-by-side evidence and verdicts.',
  alternates: { canonical: '/compare' },
};

export default function CompareIndex() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="guides" />

      <section className="profile-hero">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Comparisons</span>
            <h1 className="profile-hero__title" style={{ marginTop: 8 }}>
              Head-to-head reviews
            </h1>
            <p className="profile-hero__sub">
              Side-by-side evidence reviews of the most-discussed peptide pairings. Each comparison ends with a clear
              verdict — without false equivalence.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
            {COMPARISONS.map((c) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} className="card card--lift" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12, color: 'inherit' }}>
                <span className="eyebrow">{c.subtitle}</span>
                <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.2, margin: 0 }}>
                  {c.title}
                </h2>
                <p style={{ fontSize: 14, color: 'var(--cool-gray)', margin: 0, lineHeight: 1.55 }}>{c.intro}</p>
                <span style={{ marginTop: 'auto', fontSize: 13, color: 'var(--sage-deep)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Read comparison <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <JsonLd
        data={jsonLdGraph(
          collectionPageSchema({
            url: `${SITE_URL}/compare`,
            name: 'Peptide comparisons',
            description: 'Head-to-head reviews of the most-discussed peptide pairings.',
            items: COMPARISONS.map((c) => ({ name: c.title, url: `${SITE_URL}/compare/${c.slug}` })),
          }),
          breadcrumbSchema([
            { name: 'Handbook', url: '/' },
            { name: 'Comparisons', url: '/compare' },
          ]),
        )}
      />
    </>
  );
}
