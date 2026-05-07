import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { GUIDES, getGuide } from '@/lib/guides';
import { JsonLd } from '@/components/JsonLd';
import { jsonLdGraph, guideArticleSchema, breadcrumbSchema } from '@/lib/schema';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return { title: 'Guide not found' };
  return {
    title: g.title,
    description: g.excerpt,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { title: g.title, description: g.excerpt, type: 'article' },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="guides" />

      <section className="profile-hero">
        <div className="wrap">
          <div className="profile-hero__breadcrumb">
            <Link href="/">Handbook</Link>
            <span>›</span>
            <Link href="/guides">Guides</Link>
            <span>›</span>
            <span style={{ color: 'var(--charcoal)' }}>{g.title}</span>
          </div>
          <span className="eyebrow">{g.kicker}</span>
          <h1 className="profile-hero__title" style={{ marginTop: 8, maxWidth: 880 }}>
            {g.title}
          </h1>
          <p className="profile-hero__sub">{g.excerpt}</p>
          <div className="meta-row" style={{ marginTop: 24 }}>
            <span className="micro tabular">Published {g.publishedDate}</span>
            <span className="dot-sep" />
            <span className="micro tabular">Updated {g.updated}</span>
            <span className="dot-sep" />
            <span className="micro">{g.readTime}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <article className="article-body" style={{ margin: '0 auto' }}>
            {g.sections.map((s, i) => (
              <div key={i}>
                {s.heading && <h2>{s.heading}</h2>}
                {s.body.map((para, j) => (
                  <p key={j} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            ))}

            {g.references && g.references.length > 0 && (
              <details className="refs" id="refs" open>
                <summary>References ({g.references.length})</summary>
                <ol>
                  {g.references.map((r, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: r }} />
                  ))}
                </ol>
              </details>
            )}
          </article>
        </div>
      </section>

      <SiteFooter />
      <JsonLd
        data={jsonLdGraph(
          guideArticleSchema(g),
          breadcrumbSchema([
            { name: 'Handbook', url: '/' },
            { name: 'Guides', url: '/guides' },
            { name: g.title, url: `/guides/${g.slug}` },
          ]),
        )}
      />
    </>
  );
}
