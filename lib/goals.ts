import type { GoalSlug } from './types';

export type GoalRecord = {
  slug: GoalSlug;
  label: string;
  desc: string;
  longDesc: string;
  whatToLookFor: string[];
};

export const GOALS: GoalRecord[] = [
  {
    slug: 'fat-loss',
    label: 'Fat Loss',
    desc: 'GLP-1s, energy partitioning, body composition',
    longDesc:
      'Compounds that produce sustained reductions in fat mass — primarily through appetite suppression, slowed gastric emptying, and improved insulin sensitivity. The strongest evidence base in the entire peptide field sits here.',
    whatToLookFor: [
      'Phase-3 RCT data with mean weight reduction reported, not just responder rates',
      'Trial duration of at least 56 weeks (shorter trials systematically over-state effect size)',
      'A clear titration schedule — abrupt initiation produces near-universal GI side effects',
      'UK MHRA licensing status; counterfeit injector pens are a documented safety risk',
    ],
  },
  {
    slug: 'muscle-growth',
    label: 'Muscle Growth',
    desc: 'Lean mass, recovery, anabolic signalling',
    longDesc:
      'Growth-hormone secretagogues and IGF-axis modulators that increase endogenous GH pulsatility. Effects on lean mass are real but modest compared to anabolic steroid pathways — frame expectations accordingly.',
    whatToLookFor: [
      'Studies reporting body-composition outcomes (DEXA), not just GH/IGF-1 surrogate markers',
      'Realistic effect sizes — most published increases in lean mass are 1–3 kg over 12+ weeks',
      'Dosing protocols matched to natural GH pulsatility (typically pre-bed or fasted state)',
      'UK legal status — many GH secretagogues are unlicensed or restricted to research use',
    ],
  },
  {
    slug: 'recovery',
    label: 'Recovery',
    desc: 'Tendon, ligament, gut & soft-tissue repair',
    longDesc:
      'Compounds that may accelerate tissue repair via angiogenesis, fibroblast activity, or growth-factor modulation. Evidence is largely preclinical or anecdotal — promising mechanism, thin clinical data.',
    whatToLookFor: [
      'Human trials, not just rat / rabbit tendon models',
      'Specific tissue claims with mechanism — generic "anti-inflammatory" claims are red flags',
      'Honest acknowledgement of evidence quality (clinical trial data is sparse here)',
      'Route of administration evidence (topical, injected, oral all behave very differently)',
    ],
  },
  {
    slug: 'longevity',
    label: 'Longevity',
    desc: 'Cellular health, senescence, metabolic ageing',
    longDesc:
      'Peptides positioned around mitochondrial function, telomere maintenance, or senescent-cell clearance. Evidence in humans is overwhelmingly preliminary; we apply the highest scrutiny here.',
    whatToLookFor: [
      'Human data over preclinical mouse/Drosophila studies',
      'Outcomes that matter (function, biomarkers) rather than mechanism alone',
      'Independent replication — single-lab results in this field rarely hold up',
      'Realistic claims, not "reverse ageing" marketing language',
    ],
  },
  {
    slug: 'sleep',
    label: 'Sleep',
    desc: 'Slow-wave sleep, GH pulsatility, recovery',
    longDesc:
      'Compounds that modulate sleep architecture — typically by increasing slow-wave (deep) sleep, which carries downstream effects on GH release and recovery. A small evidence base, mostly older sleep-lab studies.',
    whatToLookFor: [
      'Polysomnography (sleep-lab) outcome data, not subjective sleep scores',
      'Effects on slow-wave sleep specifically (not just total sleep time)',
      'Tolerance / habituation data over 4+ weeks of use',
      'Interaction warnings with other sedatives or sleep medications',
    ],
  },
  {
    slug: 'cognitive',
    label: 'Cognitive',
    desc: 'Focus, neuroprotection, memory',
    longDesc:
      'Nootropic peptides claimed to enhance focus, neuroprotection, or memory. Most evidence comes from Russian / Eastern European research with replication challenges. Apply the same scrutiny you would to nootropic supplements.',
    whatToLookFor: [
      'Standardised cognitive batteries (e.g. n-back, Stroop) over self-rated focus claims',
      'Independent (non-original-author) replication',
      'Acute vs chronic effect distinction — many compounds show acute lift then habituate',
      'UK legal/regulatory status; many cognitive peptides are unlicensed',
    ],
  },
];

export function getGoal(slug: string): GoalRecord | undefined {
  return GOALS.find((g) => g.slug === slug);
}
