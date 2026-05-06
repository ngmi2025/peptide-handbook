export type GoalSlug = 'fat-loss' | 'muscle-growth' | 'recovery' | 'longevity' | 'sleep' | 'cognitive';
export type Confidence = 'High' | 'Medium' | 'Low';
export type RiskTier = 'conservative' | 'moderate' | 'higher';
export type ExperienceTier = 'newcomer' | 'some' | 'experienced';
export type TimelineTier = '1-3' | '3-6' | '6-12' | 'long';
export type BudgetTier = 'low' | 'mid' | 'high';

export type DosageRow = {
  phase: string;
  dose: string;
  duration: string;
  notes: string;
};

export type SideEffectRow = {
  effect: string;
  frequency: string;
  severity: string;
};

export type Study = {
  title: string;
  year: string;
  design: string;
  n: string;
  finding: string;
  link: string;
  href?: string;
};

export type Reference = {
  citation: string;
};

export type StatRow = {
  label: string;
  value: string;
  highlight?: boolean;
};

export type Section = {
  heading: string;
  paragraphs: string[];
};

export type Peptide = {
  slug: string;
  name: string;
  shortName?: string;
  altNames: string[];
  className: string;
  classShort: string;
  goal: GoalSlug;
  secondaryGoals?: GoalSlug[];
  rating: number;
  confidence: Confidence;
  ukLegal: 'POM' | 'Investigational' | 'Unlicensed' | 'Research' | 'Mixed';
  ukLegalNote: string;
  updated: string;
  reviewedBy: { name: string; credentials: string };
  studiesReviewed: number;
  intro: string;
  tldr: string[];
  what: Section;
  how: {
    intro: string;
    steps: { title: string; desc: string; iconKey: 'injection' | 'receptor' | 'insulin' | 'clock' | 'brain' | 'cell' | 'tissue' }[];
    afterText?: string;
  };
  benefits: Section[];
  benefitsLimit?: { title: string; body: string };
  studies: Study[];
  dosage: {
    intro: string;
    rows: DosageRow[];
    caption: string;
    note?: string;
  };
  safety: {
    intro: string;
    rows: SideEffectRow[];
    contraindications: string;
  };
  legal: { title: string; body: string };
  summary: string;
  references: string[];
  stats: StatRow[];
  budgetTier: BudgetTier;
  timelineFit: TimelineTier[];
  riskFit: RiskTier[];
  experienceFit: ExperienceTier[];
  compareWith?: { slug: string; tagline: string }[];
  relatedGuides?: { href: string; label: string }[];
};
