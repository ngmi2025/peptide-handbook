import Link from 'next/link';
import { ArrowUpRight, IconFatLoss, IconMuscle, IconRecovery, IconLongevity, IconSleep, IconCognitive } from './Icons';

const ICONS = {
  'fat-loss': IconFatLoss,
  'muscle-growth': IconMuscle,
  recovery: IconRecovery,
  longevity: IconLongevity,
  sleep: IconSleep,
  cognitive: IconCognitive,
} as const;

export type GoalSlug = keyof typeof ICONS;

export type Goal = {
  slug: GoalSlug;
  label: string;
  desc: string;
  count: number;
  top: string;
  topConf: 'High' | 'Medium' | 'Low';
};

export function GoalGrid({ goals }: { goals: Goal[] }) {
  return (
    <div className="goal-grid">
      {goals.map((g) => {
        const I = ICONS[g.slug];
        return (
          <Link key={g.slug} href={`/goals/${g.slug}`} className="goal-tile">
            <I className="goal-tile__icon" size={28} />
            <ArrowUpRight className="goal-tile__arrow" size={16} />
            <h3 className="goal-tile__label">{g.label}</h3>
            <p className="goal-tile__desc">{g.desc}</p>
            <div className="goal-tile__count">{g.count} peptides reviewed</div>
          </Link>
        );
      })}
    </div>
  );
}
