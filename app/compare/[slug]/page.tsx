import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { StarRating } from '@/components/StarRating';
import { Callout } from '@/components/Callout';
import { PageNav, type NavItem } from '@/components/PageNav';
import { ArrowRight } from '@/components/Icons';
import { COMPARISONS, getComparison } from '@/lib/comparisons';
import { getPeptide } from '@/lib/peptides';
import { JsonLd } from '@/components/JsonLd';
import { jsonLdGraph, comparisonArticleSchema, breadcrumbSchema } from '@/lib/schema';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) return { title: 'Comparison not found' };
  return {
    title: c.title,
    description: c.intro,
    alternates: { canonical: `/compare/${c.slug}` },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) notFound();

  const navItems: NavItem[] = c.sections.map((s) => ({ id: s.id, label: s.label }));
  navItems.push({ id: 'verdict', label: 'Verdict' });

  const leftPeptide = getPeptide(c.leftSlug);
  const rightPeptide = getPeptide(c.rightSlug);

  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="guides" />

      <section className="compare-hero">
        <div className="wrap">
          <div className="profile-hero__breadcrumb">
            <Link href="/">Handbook</Link>
            <span>›</span>
            <Link href="/compare">Comparisons</Link>
            <span>›</span>
            <span style={{ color: 'var(--charcoal)' }}>{c.title}</span>
          </div>
          <span className="eyebrow">{c.subtitle}</span>
          <h1 className="h-display" style={{ marginTop: 12, marginBottom: 16, maxWidth: 920 }}>
            {c.left.name}{' '}
            <span style={{ color: 'var(--cool-gray)', fontWeight: 400 }}>vs</span> {c.right.name}
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            {c.intro}
          </p>

          <div className="compare-vs">
            <div className="compare-side">
              <span className="eyebrow">{c.left.className}</span>
              <h3 className="compare-side__name">{c.left.name}</h3>
              <p className="compare-side__alt">{c.left.altNames}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
                <span className="rating-card__rating-val tabular">{c.left.rating.toFixed(1)}</span>
                <StarRating value={c.left.rating} lg />
                <span className="chip chip--dot" style={{ marginLeft: 'auto' }}>
                  {c.left.confidence} conf.
                </span>
              </div>
              {c.left.rows.map((row) => (
                <div key={row.label} className="compare-side__row">
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="compare-vs__divider">VS</div>
            <div className="compare-side">
              <span className="eyebrow">{c.right.className}</span>
              <h3 className="compare-side__name">{c.right.name}</h3>
              <p className="compare-side__alt">{c.right.altNames}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
                <span className="rating-card__rating-val tabular">{c.right.rating.toFixed(1)}</span>
                <StarRating value={c.right.rating} lg />
                <span className="chip chip--dot" style={{ marginLeft: 'auto' }}>
                  {c.right.confidence} conf.
                </span>
              </div>
              {c.right.rows.map((row) => (
                <div key={row.label} className="compare-side__row">
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageNav items={navItems} />

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          {c.sections.map((s) => (
            <div key={s.id} className="cmp-section">
              <h2 id={s.id}>{s.heading}</h2>
              {s.subheading && <p className="h2-sub">{s.subheading}</p>}
              {s.body?.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
              {s.table && (
                <table className="cmp-table">
                  <thead>
                    <tr>
                      {s.table.columns.map((col, i) => (
                        <th key={i}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            dangerouslySetInnerHTML={{
                              __html: typeof cell === 'string' ? cell : cell.html,
                            }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  {s.table.caption && <caption>{s.table.caption}</caption>}
                </table>
              )}
              {s.callout && (
                <Callout kind={s.callout.kind} title={s.callout.title}>
                  {s.callout.body}
                </Callout>
              )}
            </div>
          ))}

          <div className="cmp-section">
            <h2 id="verdict">Verdict</h2>
            <div className="verdict">
              <h3>{c.verdict.headline}</h3>
              {c.verdict.paragraphs.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
              <div className="verdict__split">
                <div className="verdict__lane">
                  <h4>{c.verdict.leftLane.title}</h4>
                  <p>{c.verdict.leftLane.body}</p>
                </div>
                <div className="verdict__lane">
                  <h4>{c.verdict.rightLane.title}</h4>
                  <p>{c.verdict.rightLane.body}</p>
                </div>
              </div>
            </div>
            <p className="micro" style={{ marginTop: 16 }}>
              This verdict reflects the published evidence as of {c.updated}. We update comparison pages whenever new
              phase-3 data is published.
            </p>
          </div>

          <details className="refs" id="refs" open>
            <summary>References ({c.references.length})</summary>
            <ol>
              {c.references.map((r, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: r }} />
              ))}
            </ol>
          </details>

          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            {leftPeptide && (
              <Link href={`/peptides/${leftPeptide.slug}`} className="btn btn--secondary">
                Read {leftPeptide.name} profile <ArrowRight size={14} />
              </Link>
            )}
            {rightPeptide && (
              <Link href={`/peptides/${rightPeptide.slug}`} className="btn btn--secondary">
                Read {rightPeptide.name} profile <ArrowRight size={14} />
              </Link>
            )}
            <Link href="/assessment" className="btn btn--primary" style={{ marginLeft: 'auto' }}>
              Find your match <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <JsonLd
        data={jsonLdGraph(
          comparisonArticleSchema(c),
          breadcrumbSchema([
            { name: 'Handbook', url: '/' },
            { name: 'Comparisons', url: '/compare' },
            { name: c.title, url: `/compare/${c.slug}` },
          ]),
        )}
      />
    </>
  );
}
