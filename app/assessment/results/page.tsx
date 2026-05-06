import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { ArrowRight, Check } from '@/components/Icons';
import { StarRating } from '@/components/StarRating';
import { Callout } from '@/components/Callout';
import { EmailGate } from '@/components/EmailGate';
import {
  recommend,
  ANSWER_LABELS,
  type AssessmentAnswers,
} from '@/lib/assessment';
import type {
  BudgetTier,
  ExperienceTier,
  GoalSlug,
  RiskTier,
  TimelineTier,
} from '@/lib/types';

export const metadata: Metadata = {
  title: 'Your assessment results',
  description: 'Three peptides matched to your goal — based on the published evidence.',
  robots: { index: false, follow: false },
};

const VALID_GOALS: GoalSlug[] = ['fat-loss', 'muscle-growth', 'recovery', 'longevity', 'sleep', 'cognitive'];
const VALID_EXPERIENCE: ExperienceTier[] = ['newcomer', 'some', 'experienced'];
const VALID_RISK: RiskTier[] = ['conservative', 'moderate', 'higher'];
const VALID_TIMELINE: TimelineTier[] = ['1-3', '3-6', '6-12', 'long'];
const VALID_BUDGET: BudgetTier[] = ['low', 'mid', 'high'];

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function ResultsPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const get = (k: string) => (Array.isArray(sp[k]) ? (sp[k] as string[])[0] : sp[k]);

  const goal = get('goal') as GoalSlug | undefined;
  const experience = get('experience') as ExperienceTier | undefined;
  const risk = get('risk') as RiskTier | undefined;
  const timeline = get('timeline') as TimelineTier | undefined;
  const budget = get('budget') as BudgetTier | undefined;

  if (
    !goal ||
    !experience ||
    !risk ||
    !timeline ||
    !budget ||
    !VALID_GOALS.includes(goal) ||
    !VALID_EXPERIENCE.includes(experience) ||
    !VALID_RISK.includes(risk) ||
    !VALID_TIMELINE.includes(timeline) ||
    !VALID_BUDGET.includes(budget)
  ) {
    redirect('/assessment');
  }

  const answers: AssessmentAnswers = { goal, experience, risk, timeline, budget };
  const matches = recommend(answers);

  return (
    <>
      <DisclaimerStrip text="Educational results based on publicly available research. Not a prescription or medical advice." />
      <SiteHeader active="tool" />

      <section className="results-hero">
        <div className="wrap">
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
            <span className="chip">
              <Check size={12} /> Assessment complete
            </span>
            <span className="micro tabular">{matches.length} matches found</span>
          </div>
          <h1 className="h1" style={{ maxWidth: 760 }}>
            {matches.length === 0
              ? 'No matches with strong evidence'
              : `${matches.length} ${matches.length === 1 ? 'peptide' : 'peptides'} matched to your goal.`}
          </h1>
          <p className="lead" style={{ marginTop: 16, maxWidth: 640 }}>
            Based on your answers, here&apos;s where the evidence currently points. Confidence levels reflect the quality
            and quantity of clinical data behind each compound.
          </p>
          <div className="results-summary">
            <span className="chip chip--neutral">
              Goal<strong>{ANSWER_LABELS.goal[goal]}</strong>
            </span>
            <span className="chip chip--neutral">
              Experience<strong>{ANSWER_LABELS.experience[experience]}</strong>
            </span>
            <span className="chip chip--neutral">
              Risk tolerance<strong>{ANSWER_LABELS.risk[risk]}</strong>
            </span>
            <span className="chip chip--neutral">
              Timeline<strong>{ANSWER_LABELS.timeline[timeline]}</strong>
            </span>
            <span className="chip chip--neutral">
              Budget<strong>{ANSWER_LABELS.budget[budget]}</strong>
            </span>
            <Link href="/assessment" className="chip chip--neutral" style={{ color: 'var(--sage-deep)' }}>
              Edit answers →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {matches.length === 0 ? (
            <Callout kind="limit" title="No high-evidence matches in this category">
              Your goal selection has limited high-confidence evidence in our handbook. We don&apos;t want to surface
              speculative matches just to fill a list. Browse the goal-specific peptides directly to see what we have.
            </Callout>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
              {matches.map((m) => (
                <article key={m.peptide.slug} className="match-card">
                  <div className={'match-card__rank' + (m.rank === 1 ? ' match-card__rank--1' : '')}>
                    {String(m.rank).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="match-card__head">
                      <div>
                        <span className="eyebrow">{m.peptide.className}</span>
                        <h3 className="match-card__name" style={{ marginTop: 6 }}>
                          {m.peptide.name}
                        </h3>
                        <p className="match-card__alt">{m.peptide.altNames.join(' · ')}</p>
                      </div>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <div style={{ textAlign: 'right' }}>
                          <div className="rating-card__rating-lbl">Overall</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', marginTop: 4 }}>
                            <span className="rating-card__rating-val tabular">{m.peptide.rating.toFixed(1)}</span>
                            <StarRating value={m.peptide.rating} />
                          </div>
                        </div>
                        <span className="chip chip--dot">{m.peptide.confidence} conf.</span>
                      </div>
                    </div>
                    <div className="match-card__why">
                      <div className="match-card__why-label">Why selected</div>
                      <p className="match-card__why-text">{m.why}</p>
                    </div>
                    <div className="match-card__meta-grid">
                      {summarisedMeta(m.peptide).map((x) => (
                        <div key={x.label} className="match-card__meta-row">
                          <span className="match-card__meta-label">{x.label}</span>
                          <span className="match-card__meta-val">{x.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="match-card__cta">
                    <Link href={`/peptides/${m.peptide.slug}`} className="btn btn--primary btn--sm" style={{ justifyContent: 'center' }}>
                      Read profile <ArrowRight size={14} />
                    </Link>
                    {m.peptide.compareWith && m.peptide.compareWith.length > 0 ? (
                      <Link
                        href={`/compare/${m.peptide.compareWith[0].slug}`}
                        className="btn btn--secondary btn--sm"
                        style={{ justifyContent: 'center' }}
                      >
                        Compare
                      </Link>
                    ) : (
                      <Link href="/compare" className="btn btn--secondary btn--sm" style={{ justifyContent: 'center' }}>
                        All comparisons
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          <Callout kind="limit" title="What this list isn't">
            These are educational matches based on publicly available research — not personalised medical
            recommendations. Several compounds listed are prescription-only or investigational in the UK. A qualified
            clinician should make any prescribing decision after a full assessment of your medical history.
          </Callout>

          <EmailGate />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function summarisedMeta(p: { stats: { label: string; value: string }[] }) {
  return p.stats.slice(0, 4).map(({ label, value }) => ({ label, value }));
}
