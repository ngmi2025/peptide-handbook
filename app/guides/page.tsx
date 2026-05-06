import type { Metadata } from 'next';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { ArticleCard, CoverChart, CoverBars, CoverMolecule, CoverComparison } from '@/components/ArticleCard';
import { GUIDES } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Guides — long-form peptide research',
  description:
    'Long-form, evidence-led articles. UK legal status, fat-loss compound rankings, comparison reviews, and safety guidance — all peer-reviewed.',
  alternates: { canonical: '/guides' },
};

const COVER_MAP = {
  chart: <CoverChart />,
  bars: <CoverBars />,
  molecule: <CoverMolecule />,
  comparison: <CoverComparison />,
};

export default function GuidesIndex() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="guides" />

      <section className="profile-hero">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Guides</span>
          <h1 className="profile-hero__title" style={{ marginTop: 8 }}>
            Long-form, evidence-led articles
          </h1>
          <p className="profile-hero__sub">
            Deep dives into specific questions — what works, what doesn&apos;t, what UK readers should actually do. Every
            guide is clinician-reviewed and timestamped.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="article-grid">
            {GUIDES.map((g) => (
              <ArticleCard
                key={g.slug}
                href={`/guides/${g.slug}`}
                kicker={g.kicker}
                title={g.title}
                date={g.publishedDate}
                readTime={g.readTime}
                cover={COVER_MAP[g.cover]}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
