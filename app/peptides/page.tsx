import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { ArrowRight } from '@/components/Icons';
import { StarRating } from '@/components/StarRating';
import { PEPTIDES } from '@/lib/peptides';

export const metadata: Metadata = {
  title: 'Peptide directory — every compound we\'ve reviewed',
  description:
    'Every peptide on the handbook, ranked by evidence quality. Tirzepatide, semaglutide, BPC-157, CJC-1295, Ipamorelin, and 7 others — with confidence levels and UK legal status.',
  alternates: { canonical: '/peptides' },
};

const sorted = [...PEPTIDES].sort((a, b) => b.rating - a.rating);

export default function PeptidesIndex() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="peptides" />

      <section className="profile-hero">
        <div className="wrap">
          <div style={{ maxWidth: 760 }}>
            <span className="eyebrow">Directory</span>
            <h1 className="profile-hero__title" style={{ marginTop: 8 }}>
              Every peptide we&apos;ve reviewed
            </h1>
            <p className="profile-hero__sub">
              Ranked by overall rating — a composite of evidence quality, effect size, and UK legal status. Click any
              row to read the full profile.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="directory">
            {sorted.map((p) => (
              <Link key={p.slug} href={`/peptides/${p.slug}`} className="directory__row">
                <div>
                  <div className="directory__name">{p.name}</div>
                  <div className="directory__alt">{p.altNames.join(' · ')}</div>
                </div>
                <div className="directory__class">{p.className}</div>
                <div className="directory__rating">
                  <span className="directory__rating-val tabular">{p.rating.toFixed(1)}</span>
                  <StarRating value={p.rating} />
                </div>
                <div className="directory__conf">{p.confidence} conf.</div>
                <ArrowRight className="directory__arrow" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
