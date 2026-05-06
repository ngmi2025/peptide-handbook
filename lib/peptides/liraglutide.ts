import type { Peptide } from '../types';

export const liraglutide: Peptide = {
  slug: 'liraglutide',
  name: 'Liraglutide',
  altNames: ['Saxenda', 'Victoza'],
  className: 'GLP-1 receptor agonist',
  classShort: 'GLP-1',
  goal: 'fat-loss',
  rating: 3.6,
  confidence: 'High',
  ukLegal: 'POM',
  ukLegalNote: 'Prescription only (POM)',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Rachel Okonkwo', credentials: 'MBBS · Endocrinology · GMC reg. 7211983' },
  studiesReviewed: 35,
  intro:
    'A first-generation, daily-injection GLP-1 receptor agonist developed by Novo Nordisk. Effective but largely superseded by semaglutide and tirzepatide on both efficacy and dosing frequency.',
  tldr: [
    'Mean weight reduction of approximately −8.0% over 56 weeks at the 3.0mg dose (SCALE trial).',
    'Daily subcutaneous injection — practical drawback compared to weekly newer options.',
    'Approved 2010 for diabetes (Victoza), 2014 for obesity (Saxenda) — the longest-standing GLP-1 in clinical use.',
    'Modest effect size relative to semaglutide and tirzepatide; primarily relevant when those are unavailable.',
    'UK: POM. Saxenda available via NHS for narrow eligibility and via private clinics.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'Liraglutide is a 31-amino-acid GLP-1 receptor agonist with 97% homology to native human GLP-1. A C16 fatty acid (palmitic acid) attached to the peptide backbone enables albumin binding and resistance to DPP-4 cleavage, extending the half-life to ~13 hours and supporting once-daily subcutaneous dosing.',
      'It was approved for type-2 diabetes (Victoza, 2010) and chronic weight management (Saxenda, 2014), making it the longest-marketed GLP-1 receptor agonist. In most modern contexts it has been superseded by semaglutide and tirzepatide on efficacy, but its dosing schedule and tolerability profile still suit some users.',
    ],
  },
  how: {
    intro:
      'Mechanism is identical in principle to semaglutide — single-receptor GLP-1 agonism. The shorter half-life means less stable plasma levels and a more frequent dosing burden, but a faster off-time when needed.',
    steps: [
      { title: 'Daily injection', desc: 'Subcutaneous dose binds to albumin, persists ~13 hours.', iconKey: 'injection' },
      { title: 'GLP-1 receptor binding', desc: 'Activates pancreatic, gut, and CNS receptors.', iconKey: 'receptor' },
      { title: 'Insulin & glucagon control', desc: 'Glucose-dependent insulin release; glucagon suppression.', iconKey: 'insulin' },
      { title: 'Satiety signalling', desc: 'Slowed gastric emptying; central appetite reduction.', iconKey: 'brain' },
    ],
  },
  benefits: [
    {
      heading: 'Weight reduction (high confidence)',
      paragraphs: [
        'The SCALE trial program (n=3,731 across studies) reported mean weight reduction of approximately −8.0% over 56 weeks at the 3.0mg dose vs −2.6% on placebo. Clinically meaningful, but smaller than semaglutide (−14.9%) or tirzepatide (−20.9%) at their respective maximum doses.',
      ],
    },
    {
      heading: 'Cardiovascular outcomes (high confidence)',
      paragraphs: [
        'The LEADER trial (n=9,340, type-2 diabetes population) reported a 13% relative reduction in MACE over 3.8 years of follow-up. Liraglutide was the first GLP-1 to demonstrate cardiovascular benefit in a CVOT.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'Compared to newer options',
    body:
      'Both efficacy and dosing convenience favour semaglutide or tirzepatide for most modern weight-management contexts. Liraglutide remains a reasonable option where weekly injections are unavailable, where shorter wash-out is preferred, or where cost considerations favour it on the NHS.',
  },
  studies: [
    {
      title: 'A randomised, controlled trial of liraglutide for weight management (SCALE Obesity)',
      year: '2015',
      design: 'Phase-3 RCT, double-blind',
      n: '3,731',
      finding:
        '−8.0% mean weight reduction at 56 weeks on 3.0mg vs −2.6% on placebo. 63.2% achieved ≥5% reduction; 33.1% achieved ≥10%.',
      link: 'N Engl J Med · doi:10.1056/NEJMoa1411892',
      href: 'https://doi.org/10.1056/NEJMoa1411892',
    },
    {
      title: 'Liraglutide and cardiovascular outcomes in type-2 diabetes (LEADER)',
      year: '2016',
      design: 'Phase-3 RCT, primary CV outcomes',
      n: '9,340',
      finding:
        '13% relative reduction in MACE composite (HR 0.87, 95% CI 0.78–0.97). First demonstration of CV benefit for any GLP-1 agonist.',
      link: 'N Engl J Med · doi:10.1056/NEJMoa1603827',
      href: 'https://doi.org/10.1056/NEJMoa1603827',
    },
    {
      title: 'Semaglutide vs liraglutide for weight loss (STEP-8)',
      year: '2022',
      design: 'Phase-3 RCT, head-to-head',
      n: '338',
      finding:
        'Semaglutide 2.4mg produced significantly greater weight reduction than liraglutide 3.0mg over 68 weeks (−15.8% vs −6.4%).',
      link: 'JAMA · doi:10.1001/jama.2021.23619',
      href: 'https://doi.org/10.1001/jama.2021.23619',
    },
  ],
  dosage: {
    intro:
      'Liraglutide for weight management requires daily subcutaneous injection, with a 4-week titration schedule.',
    rows: [
      { phase: 'Week 1', dose: '0.6 mg / day', duration: '7 days', notes: 'Titration only' },
      { phase: 'Week 2', dose: '1.2 mg / day', duration: '7 days', notes: 'Titration' },
      { phase: 'Week 3', dose: '1.8 mg / day', duration: '7 days', notes: 'Titration' },
      { phase: 'Week 4', dose: '2.4 mg / day', duration: '7 days', notes: 'Titration' },
      { phase: 'Maintenance', dose: '3.0 mg / day', duration: '—', notes: 'Approved obesity dose' },
    ],
    caption: 'Saxenda titration per UK SmPC. Victoza (diabetes) maxes at 1.8mg.',
  },
  safety: {
    intro: 'Profile broadly resembles other GLP-1 agonists. GI symptoms dominate; tolerance improves over time.',
    rows: [
      { effect: 'Nausea', frequency: '39%', severity: 'Mild–moderate' },
      { effect: 'Diarrhoea', frequency: '21%', severity: 'Mild' },
      { effect: 'Constipation', frequency: '19%', severity: 'Mild' },
      { effect: 'Vomiting', frequency: '16%', severity: 'Mild–moderate' },
      { effect: 'Hypoglycaemia (in T2D)', frequency: '~10%', severity: 'Mild–moderate' },
      { effect: 'Acute pancreatitis', frequency: '<0.5%', severity: 'Serious — discontinue' },
    ],
    contraindications: 'Personal/family history of medullary thyroid carcinoma or MEN-2. Active pancreatitis. Pregnancy.',
  },
  legal: {
    title: 'Prescription-only medicine (POM) in the UK',
    body:
      'Saxenda (3.0mg, obesity) and Victoza (1.8mg, diabetes) are licensed POMs. NHS access for Saxenda is restricted under NICE TA664 to specific BMI thresholds and clinical contexts. Available privately through regulated UK clinics; counterfeit pens are documented but less common than for newer GLP-1 agonists.',
  },
  summary:
    'Liraglutide is a well-evidenced first-generation GLP-1 with a meaningful effect on weight and cardiovascular endpoints. In most modern contexts, semaglutide or tirzepatide will be preferred — both for larger effect sizes and weekly dosing. Liraglutide remains relevant where those are not accessible, where its shorter half-life is clinically preferable, or where cost dominates the decision. UK availability is straightforward through both NHS and private routes.',
  references: [
    'Pi-Sunyer X, et al. A randomised, controlled trial of 3.0 mg of liraglutide in weight management (SCALE). <em>N Engl J Med</em>. 2015;373(1):11-22.',
    'Marso SP, et al. Liraglutide and cardiovascular outcomes in type 2 diabetes (LEADER). <em>N Engl J Med</em>. 2016;375(4):311-322.',
    'Rubino DM, et al. Semaglutide 2.4mg once weekly vs liraglutide 3.0mg once daily (STEP-8). <em>JAMA</em>. 2022;327(2):138-150.',
    'NICE TA664. Liraglutide for managing overweight and obesity. December 2020.',
    'MHRA. Saxenda 6mg/mL solution for injection — Summary of Product Characteristics.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '35' },
    { label: 'Mean weight reduction', value: '−8.0% (3.0mg)' },
    { label: 'Half-life', value: '~13 hours' },
    { label: 'Administration', value: 'Subcutaneous, daily' },
    { label: 'UK legal status', value: 'Prescription only (POM)', highlight: true },
  ],
  budgetTier: 'mid',
  timelineFit: ['3-6', '6-12', 'long'],
  riskFit: ['conservative', 'moderate'],
  experienceFit: ['newcomer', 'some', 'experienced'],
  compareWith: [],
  relatedGuides: [
    { href: '/guides/best-peptides-for-fat-loss-uk', label: 'Best peptides for fat loss in the UK' },
    { href: '/guides/uk-legal-status', label: 'A guide to UK peptide legality' },
  ],
};
