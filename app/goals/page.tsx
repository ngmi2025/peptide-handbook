import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { GoalGrid, type Goal } from '@/components/GoalGrid';
import { GOALS } from '@/lib/goals';
import { countByGoal, topByGoal } from '@/lib/peptides';

export const metadata: Metadata = {
  title: 'Browse peptides by goal',
  description:
    'Six categories: fat loss, muscle growth, recovery, longevity, sleep, cognitive. Each goal landing page surfaces the strongest-evidence compounds first.',
  alternates: { canonical: '/goals' },
};

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

export default function GoalsIndex() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="goals" />

      <section className="profile-hero">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Browse by goal</span>
          <h1 className="profile-hero__title" style={{ marginTop: 8 }}>
            Start with what you&apos;re trying to change
          </h1>
          <p className="profile-hero__sub">
            Every peptide on the handbook is graded by evidence. Six goal categories — pick the one that matches your
            outcome.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <GoalGrid goals={goals} />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
