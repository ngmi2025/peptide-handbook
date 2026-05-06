import type { Peptide } from '../types';

export const retatrutide: Peptide = {
  slug: 'retatrutide',
  name: 'Retatrutide',
  altNames: ['LY3437943'],
  className: 'GLP-1 / GIP / Glucagon receptor agonist',
  classShort: 'Triple agonist',
  goal: 'fat-loss',
  rating: 3.9,
  confidence: 'Medium',
  ukLegal: 'Investigational',
  ukLegalNote: 'Investigational — not yet approved',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Rachel Okonkwo', credentials: 'MBBS · Endocrinology · GMC reg. 7211983' },
  studiesReviewed: 8,
  intro:
    'A triple-agonist peptide developed by Eli Lilly that activates GLP-1, GIP, and glucagon receptors. Phase-2 data have produced the largest weight-reduction signals seen for any pharmacologic agent to date — but phase-3 trials are still in progress.',
  tldr: [
    'Phase-2 TRIUMPH-1 trial reported mean weight reduction of −24.2% at 48 weeks on the 12mg dose — exceeding any approved compound.',
    'Triple-receptor mechanism adds glucagon-receptor activation to the GIP/GLP-1 framework — increasing energy expenditure as well as suppressing intake.',
    'Phase-3 TRIUMPH program ongoing; obesity readout expected 2026–2027.',
    'No regulatory approval anywhere as of May 2026. Not legally available outside trials.',
    'Side-effect profile broadly resembles tirzepatide; long-term safety data are limited.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'Retatrutide is a single-molecule triple-receptor agonist that activates GLP-1, GIP, and glucagon receptors. It is structurally derived from the GIP backbone, with sequence modifications that introduce GLP-1 and glucagon agonist activity. Like tirzepatide, it is engineered for once-weekly subcutaneous administration via reversible albumin binding.',
      'It is currently investigational. Eli Lilly\'s phase-3 TRIUMPH program is testing it in obesity, type-2 diabetes, NASH, and obstructive sleep apnoea. No approval exists in any jurisdiction as of May 2026.',
    ],
  },
  how: {
    intro:
      'Retatrutide stacks three incretin-family pathways. The GIP and GLP-1 actions resemble tirzepatide. Adding glucagon-receptor agonism increases hepatic energy turnover and contributes to weight reduction via increased energy expenditure — not just appetite suppression.',
    steps: [
      { title: 'Subcutaneous injection', desc: 'Weekly dose absorbed; albumin-bound for slow release.', iconKey: 'injection' },
      { title: 'Triple receptor binding', desc: 'GLP-1 + GIP + glucagon receptors activated simultaneously.', iconKey: 'receptor' },
      { title: 'Metabolic effect', desc: 'Insulin sensitisation, satiety, and increased energy expenditure.', iconKey: 'insulin' },
      { title: 'Body composition', desc: 'Substantial fat-mass reduction; lean mass preserved in early data.', iconKey: 'cell' },
    ],
    afterText:
      "The glucagon component is the novel element. Activation increases hepatic glucose output transiently — but the dominant effect at therapeutic doses is increased basal metabolic rate, contributing to weight reduction beyond what GLP-1/GIP can achieve alone.",
  },
  benefits: [
    {
      heading: 'Weight reduction (medium confidence — phase-2 only)',
      paragraphs: [
        'TRIUMPH-1 (n=338, 48 weeks) reported mean body-weight reductions of −8.7%, −17.1%, and −24.2% at 4mg, 8mg, and 12mg respectively. These are the largest reductions reported for any pharmacologic obesity intervention. Data are phase-2 only — phase-3 confirmation is required before high-confidence framing is appropriate.',
      ],
    },
    {
      heading: 'Glycaemic control (medium confidence)',
      paragraphs: [
        'In type-2 diabetics, phase-2 data showed HbA1c reductions of approximately −2.0% across the higher dose tiers. Effect sizes are similar to tirzepatide. Definitive head-to-head data are not yet published.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'What the evidence does not yet show',
    body:
      'Phase-3 efficacy and safety data, long-term durability beyond 48 weeks, cardiovascular outcomes, and head-to-head comparisons with tirzepatide are all pending. Confidence ratings will rise once that evidence is published. Until then, this profile reflects an extrapolation from phase-2 data only.',
  },
  studies: [
    {
      title: 'Triple hormone receptor agonist retatrutide for obesity (TRIUMPH-1 phase-2)',
      year: '2023',
      design: 'Phase-2 RCT, double-blind, placebo-controlled',
      n: '338',
      finding:
        'Mean weight reduction at 48 weeks: −24.2% on 12mg vs −2.1% on placebo. 100% of participants on 8mg or 12mg achieved ≥5% reduction; 83% on 12mg achieved ≥20%.',
      link: 'N Engl J Med · doi:10.1056/NEJMoa2301972',
      href: 'https://doi.org/10.1056/NEJMoa2301972',
    },
    {
      title: 'Retatrutide in patients with type-2 diabetes (phase-2)',
      year: '2023',
      design: 'Phase-2 RCT, dose-finding',
      n: '281',
      finding:
        'HbA1c reductions of up to −2.02% at the 12mg dose over 36 weeks. Concomitant weight reduction of up to −16.9%. Side-effect profile dominated by GI symptoms.',
      link: 'Lancet · doi:10.1016/S0140-6736(23)01053-X',
      href: 'https://doi.org/10.1016/S0140-6736(23)01053-X',
    },
    {
      title: 'TRIUMPH-3 (phase-3 obesity & cardiovascular endpoints)',
      year: 'Ongoing',
      design: 'Phase-3 RCT, multi-endpoint',
      n: '~6,000',
      finding:
        'Phase-3 weight-management readout expected 2026–2027. Cardiovascular outcomes secondary endpoint. Will provide first regulatory-grade evidence.',
      link: 'ClinicalTrials.gov · NCT05882045',
      href: 'https://clinicaltrials.gov/study/NCT05882045',
    },
  ],
  dosage: {
    intro:
      'Retatrutide is investigational. The dose schedule below reflects the protocol used in the TRIUMPH-1 phase-2 trial; it is provided for educational reference only. The compound is not legally available for use outside clinical trials.',
    rows: [
      { phase: 'Initiation', dose: '2.0 mg / week', duration: '4 weeks', notes: 'Trial initiation dose' },
      { phase: 'Step 1', dose: '4.0 mg / week', duration: '4+ weeks', notes: 'Lowest study dose' },
      { phase: 'Step 2', dose: '8.0 mg / week', duration: '4+ weeks', notes: 'Mid-range study dose' },
      { phase: 'Maximum', dose: '12.0 mg / week', duration: '—', notes: 'Highest dose tested' },
    ],
    caption: 'Source: TRIUMPH-1 phase-2 trial protocol. Not regulatory dosing — no MHRA SmPC exists.',
  },
  safety: {
    intro:
      'Phase-2 safety data resemble tirzepatide — GI-dominated and dose-dependent. Long-term and rare-event data are limited by trial sample size.',
    rows: [
      { effect: 'Nausea', frequency: '30–35%', severity: 'Mild–moderate' },
      { effect: 'Diarrhoea', frequency: '15–22%', severity: 'Mild' },
      { effect: 'Constipation', frequency: '8–12%', severity: 'Mild' },
      { effect: 'Vomiting', frequency: '6–14%', severity: 'Mild–moderate' },
      { effect: 'Heart rate increase', frequency: '~7 bpm', severity: 'Monitor' },
      { effect: 'Acute pancreatitis', frequency: '<0.5%', severity: 'Serious — trial-only data' },
    ],
    contraindications:
      'No regulatory contraindication list exists. Trial exclusions: personal/family history of medullary thyroid carcinoma or MEN-2; pancreatitis; severe gastroparesis; pregnancy.',
  },
  legal: {
    title: 'Investigational — not legally available outside trials',
    body:
      'Retatrutide has no marketing authorisation in any jurisdiction as of May 2026. UK supply outside an authorised clinical trial is illegal under the Human Medicines Regulations 2012 and Medicines and Medical Devices Act 2021. Any product marketed under the name "retatrutide" through unregulated channels is not the trial compound, has no quality assurance, and cannot be assumed to contain the labelled ingredient.',
  },
  summary:
    'Retatrutide is the most promising next-generation obesity peptide in development. Phase-2 efficacy signals exceed every approved compound — but phase-3 confirmation is essential before treating those numbers as established. UK readers should be aware that the compound is not legally available outside clinical trials, and any "retatrutide" sold via unregulated channels has no verified identity or quality. We will revise this profile when phase-3 readouts are published.',
  references: [
    'Jastreboff AM, et al. Triple-hormone-receptor agonist retatrutide for obesity (phase 2). <em>N Engl J Med</em>. 2023;389(6):514-526.',
    'Rosenstock J, et al. Retatrutide in adults with type-2 diabetes (phase 2). <em>Lancet</em>. 2023;402(10401):529-544.',
    'Coskun T, et al. Pharmacology of LY3437943: a unimolecular GIP/GLP-1/glucagon receptor agonist. <em>Cell Metab</em>. 2022;34(9):1234-1247.',
    'ClinicalTrials.gov. TRIUMPH program. Multiple identifiers: NCT05882045 (TRIUMPH-3), NCT05929066 (TRIUMPH-4).',
    'European Medicines Agency. Note: as of May 2026, retatrutide has no marketing authorisation application under EMA review.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '8' },
    { label: 'Mean weight reduction', value: '−24.2% (12mg, phase-2)' },
    { label: 'Half-life', value: '~6 days' },
    { label: 'Administration', value: 'Subcutaneous, weekly' },
    { label: 'UK legal status', value: 'Investigational', highlight: true },
  ],
  budgetTier: 'high',
  timelineFit: ['6-12', 'long'],
  riskFit: ['higher'],
  experienceFit: ['experienced'],
  compareWith: [
    { slug: 'tirzepatide-vs-retatrutide', tagline: 'Next-generation comparison' },
  ],
  relatedGuides: [
    { href: '/guides/best-peptides-for-fat-loss-uk', label: 'Best peptides for fat loss in the UK' },
  ],
};
