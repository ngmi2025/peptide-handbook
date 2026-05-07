import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { ArrowRight, Check, IconBeaker, IconScale, IconShield } from '@/components/Icons';
import { GoalGrid } from '@/components/GoalGrid';
import { RatingCard } from '@/components/RatingCard';
import { ArticleCard, CoverChart, CoverBars, CoverComparison, CoverMolecule } from '@/components/ArticleCard';
import { HeroVisualAmbient, HeroBackground } from '@/components/HeroVisual';
import { PeptideLogo } from '@/components/Logo';
import { JsonLd } from '@/components/JsonLd';
import { GOALS } from '@/lib/goals';
import { countByGoal, topByGoal, PEPTIDES } from '@/lib/peptides';
import { HOMEPAGE_FAQ } from '@/lib/faq';
import { jsonLdGraph, faqSchema, breadcrumbSchema } from '@/lib/schema';
import type { Goal } from '@/components/GoalGrid';

export const metadata: Metadata = {
  title: "The UK's trusted guide to peptides, performance, and longevity",
  description:
    'Clear, science-backed insights to help you understand what works — and what doesn\'t. Reviews of 12+ peptides, an evidence-graded assessment tool, and UK legal status on every page.',
  alternates: { canonical: '/' },
};

const totalStudies = PEPTIDES.reduce((sum, p) => sum + p.studiesReviewed, 0);

const goals: Goal[] = GOALS.map((g) => {
  const top = topByGoal(g.slug);
  return {
    slug: g.slug,
    label: g.label,
    desc: g.desc,
    count: countByGoal(g.slug),
    top: top?.name ?? '—',
    topConf: top?.confidence ?? 'Low',
  };
});

export default function HomePage() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader />

      <section className="hero">
        <HeroBackground />
        <div className="wrap">
          <div className="hero__inner">
            <div>
              <div className="hero__eyebrow-row">
                <span className="eyebrow">Peptide Handbook</span>
                <span className="dot-sep" />
                <span className="micro">Independently researched · UK</span>
              </div>
              <h1 className="h-display hero__title">
                The UK&apos;s trusted guide to peptides, performance, and <em>longevity</em>.
              </h1>
              <p className="lead hero__sub">
                Clear, science-backed insights to help you understand what works — and what doesn&apos;t. No hype. No
                shortcuts. Just evidence.
              </p>
              <div className="hero__cta-row">
                <Link href="/assessment" className="btn btn--primary">
                  Find the right peptide for your goal <ArrowRight size={16} />
                </Link>
                <Link href="/peptides" className="btn btn--ghost">
                  Browse the handbook <ArrowRight size={16} className="arrow" />
                </Link>
              </div>
              <div className="meta-row" style={{ marginTop: 40 }}>
                <span className="micro tabular">{PEPTIDES.length} peptides reviewed</span>
                <span className="dot-sep" />
                <span className="micro tabular">{totalStudies}+ studies cited</span>
                <span className="dot-sep" />
                <span className="micro">Updated weekly</span>
              </div>
            </div>
            <div className="hero__visual">
              <HeroVisualAmbient />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--off" id="goals">
        <div className="wrap">
          <div className="sect-head">
            <div className="sect-head__text">
              <span className="eyebrow">Browse by goal</span>
              <h2 className="h1">Start with what you&apos;re trying to change.</h2>
              <p className="sect-head__sub">
                Every peptide on the handbook is graded by the strength of the evidence behind it — not how loud the
                marketing is.
              </p>
            </div>
            <Link href="/peptides" className="btn btn--ghost">
              View all peptides <ArrowRight size={16} className="arrow" />
            </Link>
          </div>
          <GoalGrid goals={goals} />
        </div>
      </section>

      <section className="section section--tight" id="tool">
        <div className="wrap">
          <div className="tool-block">
            <div>
              <span className="eyebrow tool-block__sage">The assessment tool</span>
              <h2 className="h1" style={{ marginTop: 16, marginBottom: 16 }}>
                Find the right peptide for your goals.
              </h2>
              <p className="tool-block__desc">
                A five-question, evidence-graded assessment. We surface 2–3 compounds matched to your goal, experience,
                and risk tolerance — with the studies behind each recommendation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {[
                  'Based on publicly available research',
                  'No products sold, no affiliates',
                  'Personalised PDF breakdown via email',
                ].map((line) => (
                  <div key={line} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.85)', fontSize: 14 }}>
                    <Check size={16} style={{ color: '#9bc3b1', flexShrink: 0 }} /> {line}
                  </div>
                ))}
              </div>
              <Link href="/assessment" className="btn" style={{ background: '#9bc3b1', color: '#0A0A0A' }}>
                Start the assessment <ArrowRight size={14} />
              </Link>
              <div className="micro" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 16 }}>
                Takes about 90 seconds. No account needed.
              </div>
            </div>
            <QuizPreviewStatic />
          </div>
        </div>
      </section>

      <section className="section section--tight" id="peptides">
        <div className="wrap">
          <div className="sect-head">
            <div className="sect-head__text">
              <span className="eyebrow">Top-rated this month</span>
              <h2 className="h1">Three compounds worth understanding.</h2>
            </div>
            <Link href="/peptides" className="btn btn--ghost">
              All peptides <ArrowRight size={16} className="arrow" />
            </Link>
          </div>
          <div className="featured-grid">
            <RatingCard
              href="/peptides/tirzepatide"
              kicker="GLP-1 / GIP"
              name="Tirzepatide"
              alt="Mounjaro · Zepbound"
              rating={4.6}
              confidence="High"
              updated="2 May 2026"
            />
            <RatingCard
              href="/peptides/semaglutide"
              kicker="GLP-1 receptor agonist"
              name="Semaglutide"
              alt="Wegovy · Ozempic"
              rating={4.3}
              confidence="High"
              updated="28 Apr 2026"
            />
            <RatingCard
              href="/peptides/bpc-157"
              kicker="Pentadecapeptide"
              name="BPC-157"
              alt="Body protective compound"
              rating={3.4}
              confidence="Low"
              updated="14 Apr 2026"
            />
          </div>
        </div>
      </section>

      <section className="section" id="guides">
        <div className="wrap">
          <div className="sect-head">
            <div className="sect-head__text">
              <span className="eyebrow">Popular guides</span>
              <h2 className="h1">Long-form, evidence-led, written by clinicians.</h2>
            </div>
            <Link href="/guides" className="btn btn--ghost">
              All guides <ArrowRight size={16} className="arrow" />
            </Link>
          </div>
          <div className="article-grid">
            <ArticleCard
              href="/guides/best-peptides-for-fat-loss-uk"
              kicker="Fat loss"
              title="Best peptides for fat loss in the UK"
              date="6 May 2026"
              readTime="14 min read"
              cover={<CoverChart />}
            />
            <ArticleCard
              href="/peptides/semaglutide"
              kicker="GLP-1 deep dive"
              title="Semaglutide: a complete UK guide"
              date="2 May 2026"
              readTime="22 min read"
              cover={<CoverBars />}
            />
            <ArticleCard
              href="/compare/tirzepatide-vs-semaglutide"
              kicker="Comparison"
              title="Tirzepatide vs Semaglutide: head-to-head"
              date="28 Apr 2026"
              readTime="18 min read"
              cover={<CoverComparison />}
            />
            <ArticleCard
              href="/peptides/bpc-157"
              kicker="Recovery"
              title="BPC-157 explained: what the research says"
              date="14 Apr 2026"
              readTime="11 min read"
              cover={<CoverMolecule />}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <div className="sect-head">
            <div className="sect-head__text">
              <span className="eyebrow">Frequently asked</span>
              <h2 className="h1">Peptides in the UK — quick answers.</h2>
              <p className="sect-head__sub">
                Every claim links back to a primary source on the relevant peptide profile or guide.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {HOMEPAGE_FAQ.map((q) => (
              <details key={q.question} className="refs" style={{ background: 'var(--off-white)' }}>
                <summary>{q.question}</summary>
                <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.65, color: 'var(--charcoal)' }}>
                  {q.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="wrap">
          <div className="trust-grid">
            <div className="trust-item">
              <IconBeaker className="trust-item__icon" size={32} />
              <h3 className="trust-item__title">Science-backed insights</h3>
              <p className="trust-item__desc">
                Every claim is tied to a primary source. Confidence levels are graded against study design, sample
                size, and replication — not vibes.
              </p>
            </div>
            <div className="trust-item">
              <IconScale className="trust-item__icon" size={32} />
              <h3 className="trust-item__title">Independent analysis</h3>
              <p className="trust-item__desc">
                No products sold. No affiliate links. No commercial relationships with peptide vendors or clinics.
                Funding sources disclosed in full.
              </p>
            </div>
            <div className="trust-item">
              <IconShield className="trust-item__icon" size={32} />
              <h3 className="trust-item__title">No hype, no shortcuts</h3>
              <p className="trust-item__desc">
                UK legal status displayed on every page. Limitations called out plainly. We update entries when the
                evidence does — and timestamp every change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="email-block">
            <div>
              <span className="eyebrow">Free download</span>
              <h2 className="h1" style={{ marginTop: 16, marginBottom: 16 }}>
                The Peptide Starter Handbook.
              </h2>
              <p className="lead" style={{ marginBottom: 24, maxWidth: 480 }}>
                A 32-page evidence-graded primer on the most-discussed compounds in the UK — what they do, what the
                studies say, and the legal status of each.
              </p>
              <form className="email-form" action="/api/subscribe" method="post">
                <input type="email" name="email" placeholder="you@example.com" aria-label="Email address" required />
                <button type="submit" className="btn btn--primary">
                  Get the PDF <ArrowRight size={14} />
                </button>
              </form>
              <span className="micro" style={{ display: 'block', marginTop: 12 }}>
                One email. Unsubscribe in a click. GDPR-compliant.
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="pdf-mock">
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                  <PeptideLogo mark="icon" height={18} />
                </div>
                <span className="eyebrow" style={{ fontSize: 9, marginBottom: 8 }}>Starter Handbook</span>
                <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 'auto' }}>
                  The Peptide Starter Handbook.
                </div>
                <hr className="divider" style={{ margin: '16px 0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {['01  Foundations', '02  GLP-1s & fat loss', '03  GH secretagogues', '04  Repair & recovery', '05  UK legal status'].map((s) => (
                    <span key={s} style={{ fontSize: 9, color: '#717680', fontVariantNumeric: 'tabular-nums' }}>{s}</span>
                  ))}
                </div>
                <span style={{ fontSize: 8, color: '#717680', marginTop: 12, letterSpacing: '0.08em' }}>SCIENCE. LONGEVITY. POTENTIAL.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <JsonLd
        data={jsonLdGraph(
          faqSchema(HOMEPAGE_FAQ),
          breadcrumbSchema([{ name: 'Handbook', url: '/' }]),
        )}
      />
    </>
  );
}

function QuizPreviewStatic() {
  return (
    <div className="quiz">
      <div className="quiz__progress" aria-hidden="true">
        <span className="active" />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="quiz__step">Step 1 of 5 · Goal</div>
      <h3 className="quiz__q">What outcome are you most focused on?</h3>
      <div className="quiz__opts" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {[
          ['Fat loss', true],
          ['Muscle growth', false],
          ['Recovery', false],
          ['Longevity', false],
          ['Sleep', false],
          ['Cognitive', false],
        ].map(([label, selected]) => (
          <div key={String(label)} className={'quiz__opt' + (selected ? ' selected' : '')}>
            {label as string}
          </div>
        ))}
      </div>
      <div className="quiz__nav">
        <span className="quiz__back" style={{ visibility: 'hidden' }}>← Back</span>
        <Link href="/assessment" className="quiz__next">
          Continue <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
