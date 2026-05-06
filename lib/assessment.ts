import type {
  BudgetTier,
  ExperienceTier,
  GoalSlug,
  Peptide,
  RiskTier,
  TimelineTier,
} from './types';
import { PEPTIDES } from './peptides';

export type AssessmentAnswers = {
  goal: GoalSlug;
  experience: ExperienceTier;
  risk: RiskTier;
  timeline: TimelineTier;
  budget: BudgetTier;
};

export type Match = {
  peptide: Peptide;
  rank: number;
  score: number;
  why: string;
};

const BUDGET_ORDER: Record<BudgetTier, number> = { low: 1, mid: 2, high: 3 };

function scorePeptide(p: Peptide, a: AssessmentAnswers): number {
  let score = 0;

  // Goal match (primary or secondary)
  if (p.goal === a.goal) score += 50;
  else if (p.secondaryGoals?.includes(a.goal)) score += 25;
  else return 0; // Not relevant to the goal at all

  // Confidence weighting — strong evidence gets a meaningful bump
  if (p.confidence === 'High') score += 20;
  else if (p.confidence === 'Medium') score += 10;

  // Rating contribution (peptides are 1-5 stars)
  score += p.rating * 6;

  // Risk fit
  if (p.riskFit.includes(a.risk)) score += 12;
  else score -= 8;

  // Experience fit
  if (p.experienceFit.includes(a.experience)) score += 8;
  else score -= 4;

  // Timeline fit
  if (p.timelineFit.includes(a.timeline)) score += 6;

  // Budget — penalise mismatches but not symmetrically
  const peptideBudget = BUDGET_ORDER[p.budgetTier];
  const userBudget = BUDGET_ORDER[a.budget];
  if (peptideBudget > userBudget) score -= (peptideBudget - userBudget) * 6;

  // Conservative users should weigh approved compounds heavily
  if (a.risk === 'conservative') {
    if (p.ukLegal === 'POM') score += 10;
    else if (p.ukLegal === 'Investigational' || p.ukLegal === 'Unlicensed' || p.ukLegal === 'Research') score -= 20;
  }

  // Newcomers shouldn't be funnelled to experimental compounds
  if (a.experience === 'newcomer' && p.ukLegal !== 'POM') score -= 15;

  return score;
}

const RISK_LABEL: Record<RiskTier, string> = {
  conservative: 'a conservative risk profile',
  moderate: 'a moderate risk profile',
  higher: 'a higher risk tolerance',
};

const EXPERIENCE_LABEL: Record<ExperienceTier, string> = {
  newcomer: 'newcomer to peptides',
  some: 'with some prior research',
  experienced: 'experienced',
};

const TIMELINE_LABEL: Record<TimelineTier, string> = {
  '1-3': '1–3 month timeline',
  '3-6': '3–6 month timeline',
  '6-12': '6–12 month timeline',
  long: 'long-term horizon',
};

function reasonFor(p: Peptide, a: AssessmentAnswers, rank: number): string {
  const parts: string[] = [];

  if (rank === 1) {
    if (p.confidence === 'High') {
      parts.push(`Strongest evidence base in your goal category, with ${p.studiesReviewed} studies reviewed.`);
    } else if (p.confidence === 'Medium') {
      parts.push(`Promising evidence base in your goal category — confidence is medium pending additional data.`);
    } else {
      parts.push(`The most-cited compound in your category, though the human evidence base remains thin.`);
    }
  } else if (rank === 2) {
    parts.push(`A well-evidenced second option for ${a.goal.replace('-', ' ')}, suited to ${RISK_LABEL[a.risk]}.`);
  } else {
    parts.push(`A complementary option worth understanding — included for breadth across the evidence landscape.`);
  }

  // Add specific peptide context
  if (p.slug === 'tirzepatide') {
    parts.push('Mean weight reduction of −20.9% over 72 weeks at the 15mg dose; dual-incretin mechanism appears additive vs single-receptor agonists.');
  } else if (p.slug === 'semaglutide') {
    parts.push('Largest body of long-term data of any GLP-1, plus the only obesity drug with cardiovascular outcome data (SELECT trial).');
  } else if (p.slug === 'retatrutide') {
    parts.push('Phase-2 data show the largest weight-reduction signals to date — but phase-3 confirmation is still pending.');
  } else if (p.slug === 'liraglutide') {
    parts.push('First-generation GLP-1 with established efficacy and CV outcome data — daily dosing is a practical drawback.');
  } else if (p.slug === 'cjc-1295') {
    parts.push('Long-acting GHRH analogue producing sustained IGF-1 elevation. Supply quality is the dominant practical concern.');
  } else if (p.slug === 'ipamorelin') {
    parts.push('Cleanest GHRP profile — selective GH release without cortisol or prolactin stimulation. Often stacked with CJC-1295.');
  } else if (p.slug === 'bpc-157') {
    parts.push('Strong preclinical mechanism for tissue repair; almost no completed human RCT data. Treat as evidence-thin.');
  } else if (p.slug === 'tb-500') {
    parts.push('Material commonly sold under this name is a fragment of thymosin beta-4, not the full molecule used in published trials. Identity matters.');
  } else if (p.slug === 'mots-c') {
    parts.push('Mitochondrial-derived peptide with robust preclinical metabolic effects; human therapeutic data is essentially nil.');
  } else if (p.slug === 'epitalon') {
    parts.push('Russian gerontology research describes longevity effects; Western independent replication is limited.');
  } else if (p.slug === 'dsip') {
    parts.push('Foundational sleep peptide research from the 1970s; modern replication has been inconsistent.');
  } else if (p.slug === 'semax') {
    parts.push('Russian-approved heptapeptide for ischaemic stroke recovery; cognitive nootropic claims extend beyond the regulatory indications.');
  }

  // Fit context
  if (p.timelineFit.includes(a.timeline)) {
    parts.push(`Well-matched to ${EXPERIENCE_LABEL[a.experience]} on a ${TIMELINE_LABEL[a.timeline]}.`);
  }

  return parts.join(' ');
}

export function recommend(answers: AssessmentAnswers): Match[] {
  const candidates = PEPTIDES
    .map((p) => ({ peptide: p, score: scorePeptide(p, answers) }))
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return candidates.map((c, i) => ({
    peptide: c.peptide,
    rank: i + 1,
    score: c.score,
    why: reasonFor(c.peptide, answers, i + 1),
  }));
}

export function defaultAnswersFor(goal?: GoalSlug): AssessmentAnswers {
  return {
    goal: goal ?? 'fat-loss',
    experience: 'some',
    risk: 'moderate',
    timeline: '6-12',
    budget: 'mid',
  };
}

export const ANSWER_LABELS = {
  goal: {
    'fat-loss': 'Fat loss',
    'muscle-growth': 'Muscle growth',
    recovery: 'Recovery',
    longevity: 'Longevity',
    sleep: 'Sleep',
    cognitive: 'Cognitive',
  },
  experience: { newcomer: 'Newcomer', some: 'Some research', experienced: 'Experienced' },
  risk: { conservative: 'Conservative', moderate: 'Moderate', higher: 'Higher' },
  timeline: { '1-3': '1–3 months', '3-6': '3–6 months', '6-12': '6–12 months', long: 'Long-term' },
  budget: { low: '£', mid: '££', high: '£££' },
} as const;
