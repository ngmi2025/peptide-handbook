import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { ArrowRight } from '@/components/Icons';
import { RatingCard } from '@/components/RatingCard';
import { JsonLd } from '@/components/JsonLd';
import { GOALS, getGoal } from '@/lib/goals';
import { getPeptidesByGoal } from '@/lib/peptides';
import { jsonLdGraph, collectionPageSchema, breadcrumbSchema, SITE_URL } from '@/lib/schema';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return GOALS.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGoal(slug);
  if (!g) return { title: 'Goal not found' };
  return {
    title: `Best peptides for ${g.label.toLowerCase()}`,
    description: g.longDesc,
    alternates: { canonical: `/goals/${g.slug}` },
  };
}

export default async function GoalPage({ params }: Props) {
  const { slug } = await params;
  const g = getGoal(slug);
  if (!g) notFound();

  const peptides = getPeptidesByGoal(g.slug);

  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="goals" />

      <section className="profile-hero">
        <div className="wrap">
          <div className="profile-hero__breadcrumb">
            <Link href="/">Handbook</Link>
            <span>›</span>
            <Link href="/goals">Goals</Link>
            <span>›</span>
            <span style={{ color: 'var(--charcoal)' }}>{g.label}</span>
          </div>
          <span className="eyebrow">{g.label}</span>
          <h1 className="profile-hero__title" style={{ marginTop: 8 }}>
            Best peptides for {g.label.toLowerCase()}
          </h1>
          <p className="profile-hero__sub">{g.longDesc}</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="sect-head">
            <div className="sect-head__text">
              <span className="eyebrow">Top compounds</span>
              <h2 className="h2">Ordered by evidence quality</h2>
              <p className="sect-head__sub">
                The strongest-evidenced compound for this goal sits at the top. Confidence ratings reflect study
                design, sample size, and replication.
              </p>
            </div>
            <Link href={`/assessment?goal=${g.slug}`} className="btn btn--primary">
              Start assessment <ArrowRight size={14} />
            </Link>
          </div>

          {peptides.length === 0 ? (
            <p style={{ color: 'var(--cool-gray)' }}>No peptides reviewed in this category yet.</p>
          ) : (
            <div className="featured-grid">
              {peptides.map((p) => (
                <RatingCard
                  key={p.slug}
                  href={`/peptides/${p.slug}`}
                  kicker={p.classShort}
                  name={p.name}
                  alt={p.altNames.join(' · ')}
                  rating={p.rating}
                  confidence={p.confidence}
                  updated={p.updated}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section section--off">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <span className="eyebrow">How to choose</span>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 16 }}>
            What to look for in a {g.label.toLowerCase()} compound
          </h2>
          <ul style={{ paddingLeft: 22 }}>
            {g.whatToLookFor.map((line, i) => (
              <li key={i} style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--charcoal)', marginBottom: 8 }}>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
      <JsonLd
        data={jsonLdGraph(
          collectionPageSchema({
            url: `${SITE_URL}/goals/${g.slug}`,
            name: `Best peptides for ${g.label.toLowerCase()}`,
            description: g.longDesc,
            items: peptides.map((p) => ({ name: p.name, url: `${SITE_URL}/peptides/${p.slug}` })),
          }),
          breadcrumbSchema([
            { name: 'Handbook', url: '/' },
            { name: 'Goals', url: '/goals' },
            { name: g.label, url: `/goals/${g.slug}` },
          ]),
        )}
      />
    </>
  );
}
