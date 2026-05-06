import type { Peptide } from '../types';

export const semaglutide: Peptide = {
  slug: 'semaglutide',
  name: 'Semaglutide',
  altNames: ['Wegovy', 'Ozempic', 'Rybelsus'],
  className: 'GLP-1 receptor agonist',
  classShort: 'GLP-1',
  goal: 'fat-loss',
  rating: 4.3,
  confidence: 'High',
  ukLegal: 'POM',
  ukLegalNote: 'Prescription only (POM)',
  updated: '28 April 2026',
  reviewedBy: { name: 'Dr. Rachel Okonkwo', credentials: 'MBBS · Endocrinology · GMC reg. 7211983' },
  studiesReviewed: 67,
  intro:
    'A long-acting GLP-1 receptor agonist developed by Novo Nordisk. The most-prescribed and longest-studied compound in the modern weight-management class — and the first to demonstrate cardiovascular benefit in non-diabetic obesity.',
  tldr: [
    'Mean weight reduction of −14.9% over 68 weeks at the 2.4mg dose (STEP-1 trial).',
    'SELECT trial demonstrated a 20% relative reduction in MACE in patients with established CVD and overweight/obesity — the first such evidence for any obesity drug.',
    'Largest body of long-term and post-marketing data of any GLP-1; >15 years of clinical use.',
    'GI side effects (nausea, reflux) are common during titration; usually transient.',
    'UK: POM. Available on the NHS for eligible patients (Wegovy) and via regulated private clinics. Counterfeit pens documented in 2024–2025.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'Semaglutide is a 31-amino-acid GLP-1 receptor agonist that mimics the action of native glucagon-like peptide-1. Modifications to the peptide backbone resist DPP-4 enzymatic breakdown, and a fatty-acid side chain binds reversibly to albumin — together extending the half-life to ~7 days and enabling once-weekly subcutaneous dosing.',
      'It was first approved for type-2 diabetes (Ozempic) in 2017, then for chronic weight management (Wegovy) in 2021. An oral formulation (Rybelsus) is also licensed for diabetes. UK MHRA approval for obesity followed in 2021.',
    ],
  },
  how: {
    intro:
      'Semaglutide activates GLP-1 receptors in the pancreas, gut, and brain. The downstream effects compound across systems — improved insulin sensitivity, slowed gastric emptying, and central appetite suppression each contribute to the observed weight reduction.',
    steps: [
      { title: 'Subcutaneous injection', desc: 'Weekly dose absorbed into circulation; albumin-bound for slow release.', iconKey: 'injection' },
      { title: 'GLP-1 receptor binding', desc: 'Activates receptors in pancreas, GI tract, and CNS — particularly the hypothalamus.', iconKey: 'receptor' },
      { title: 'Insulin & glucagon control', desc: 'Glucose-dependent insulin secretion; glucagon suppressed.', iconKey: 'insulin' },
      { title: 'Satiety & gastric emptying', desc: 'Caloric intake falls; slowed gastric emptying produces early satiety.', iconKey: 'brain' },
    ],
    afterText:
      'Weight reduction is driven primarily by reduced caloric intake — most studies report a sustained ~30–35% reduction in food consumption at the maintenance dose.',
  },
  benefits: [
    {
      heading: 'Weight reduction (high confidence)',
      paragraphs: [
        'STEP-1 (n=1,961, 68 weeks) reported a mean weight reduction of −14.9% on 2.4mg vs −2.4% on placebo. Approximately 50% of participants achieved ≥15% weight reduction. Effects begin within 4 weeks of initiation and continue accumulating through ~60 weeks.',
      ],
    },
    {
      heading: 'Cardiovascular outcomes (high confidence)',
      paragraphs: [
        'The SELECT trial (n=17,604, mean follow-up 39.8 months) demonstrated a 20% relative reduction in MACE (death from CV causes, non-fatal MI, non-fatal stroke) in adults with established cardiovascular disease and overweight/obesity but without diabetes. This is the first hard-outcome trial to show cardiovascular benefit from an obesity drug in a non-diabetic population.',
      ],
    },
    {
      heading: 'Glycaemic control (high confidence)',
      paragraphs: [
        'Across the SUSTAIN program in type-2 diabetes, semaglutide produced HbA1c reductions of −1.3% to −1.9% across doses, with simultaneous weight reduction. Effective both as monotherapy and add-on to metformin/insulin regimens.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'Effect plateau and rebound',
    body:
      'Mean weight reduction plateaus around 60 weeks. Discontinuation typically results in regain of approximately two-thirds of lost weight within 12 months (STEP-4 extension data). Maintenance dosing should be considered a long-term rather than time-limited intervention.',
  },
  studies: [
    {
      title: 'Once-weekly semaglutide in adults with overweight or obesity (STEP-1)',
      year: '2021',
      design: 'Phase-3 RCT, double-blind, placebo-controlled',
      n: '1,961',
      finding:
        'Mean change in body weight from baseline at 68 weeks: −14.9% with 2.4mg semaglutide vs −2.4% with placebo. 86.4% achieved ≥5% reduction; 50.5% achieved ≥15%.',
      link: 'N Engl J Med · doi:10.1056/NEJMoa2032183',
      href: 'https://doi.org/10.1056/NEJMoa2032183',
    },
    {
      title: 'Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT)',
      year: '2023',
      design: 'Phase-3 RCT, primary CV outcomes',
      n: '17,604',
      finding:
        '20% relative risk reduction in primary MACE composite endpoint (HR 0.80, 95% CI 0.72–0.90, p<0.001). First obesity-drug trial to demonstrate cardiovascular benefit in non-diabetic patients.',
      link: 'N Engl J Med · doi:10.1056/NEJMoa2307563',
      href: 'https://doi.org/10.1056/NEJMoa2307563',
    },
    {
      title: 'Continued vs discontinued semaglutide for weight maintenance (STEP-4)',
      year: '2021',
      design: 'Phase-3 RCT, withdrawal design',
      n: '803',
      finding:
        'Participants who switched to placebo after 20 weeks regained ~7% body weight by week 68, vs continued reduction (−7.9%) in those maintained on 2.4mg. Confirms long-term-therapy framing.',
      link: 'JAMA · doi:10.1001/jama.2021.3224',
      href: 'https://doi.org/10.1001/jama.2021.3224',
    },
  ],
  dosage: {
    intro:
      'Semaglutide for chronic weight management is administered as a weekly subcutaneous injection, with a 16–20 week titration schedule. The titration is mandatory for tolerance — skipping steps produces near-universal severe GI symptoms.',
    rows: [
      { phase: 'Initiation', dose: '0.25 mg / week', duration: '4 weeks', notes: 'Tolerance phase only' },
      { phase: 'Step 1', dose: '0.5 mg / week', duration: '4 weeks', notes: 'Diabetes maintenance starts here' },
      { phase: 'Step 2', dose: '1.0 mg / week', duration: '4 weeks', notes: 'Common diabetes maintenance dose' },
      { phase: 'Step 3', dose: '1.7 mg / week', duration: '4 weeks', notes: 'Obesity titration step' },
      { phase: 'Maximum', dose: '2.4 mg / week', duration: '—', notes: 'Highest approved obesity dose' },
    ],
    caption: 'Wegovy titration schedule per UK SmPC. Ozempic (diabetes) maxes at 2.0mg.',
    note:
      'Always escalate under prescriber supervision. The MHRA has issued counterfeit warnings — verify pen authenticity through your prescribing clinician.',
  },
  safety: {
    intro:
      'GI symptoms dominate the side-effect profile; tolerability improves substantially after the first 8–12 weeks of titration.',
    rows: [
      { effect: 'Nausea', frequency: '30–44%', severity: 'Mild–moderate' },
      { effect: 'Diarrhoea', frequency: '17–30%', severity: 'Mild' },
      { effect: 'Constipation', frequency: '11–24%', severity: 'Mild' },
      { effect: 'Vomiting', frequency: '10–24%', severity: 'Mild–moderate' },
      { effect: 'Headache', frequency: '14%', severity: 'Mild' },
      { effect: 'Acute pancreatitis', frequency: '<0.5%', severity: 'Serious — discontinue' },
    ],
    contraindications:
      'Personal/family history of medullary thyroid carcinoma or MEN-2. Active gallbladder disease. Pregnancy.',
  },
  legal: {
    title: 'Prescription-only medicine (POM) in the UK',
    body:
      'Both Wegovy (obesity) and Ozempic (diabetes) are licensed POMs under the Human Medicines Regulations 2012. NHS access for Wegovy follows NICE TA875 criteria — typically BMI ≥35 with at least one weight-related comorbidity. The MHRA has issued counterfeit pen warnings; the Counter Fraud Authority confirmed seizures in 2024 of pens containing insulin or saline rather than semaglutide.',
  },
  summary:
    'Semaglutide is the most established and broadly evidenced compound in modern weight management. Its mean weight-reduction signal is smaller than tirzepatide\'s — but the long-term safety dataset, post-marketing experience, and unique cardiovascular outcome data (SELECT) give it advantages in specific clinical situations. Discontinuation produces predictable rebound, so framing should be long-term not "course-based". UK supply via regulated private clinics is widely available; the grey market is documented to contain counterfeit pens and should be avoided.',
  references: [
    'Wilding JPH, et al. Once-weekly semaglutide in adults with overweight or obesity (STEP-1). <em>N Engl J Med</em>. 2021;384(11):989-1002. <a href="https://doi.org/10.1056/NEJMoa2032183">doi:10.1056/NEJMoa2032183</a>',
    'Lincoff AM, et al. Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT). <em>N Engl J Med</em>. 2023;389(24):2221-2232.',
    'Rubino D, et al. Effect of continued weekly subcutaneous semaglutide vs placebo on weight loss maintenance (STEP-4). <em>JAMA</em>. 2021;325(14):1414-1425.',
    'Davies M, et al. Semaglutide 2·4 mg once a week in adults with overweight or obesity, and type 2 diabetes (STEP-2). <em>Lancet</em>. 2021;397(10278):971-984.',
    'Wadden TA, et al. Effect of subcutaneous semaglutide vs placebo as adjunct to intensive behavioural therapy on body weight (STEP-3). <em>JAMA</em>. 2021;325(14):1403-1413.',
    'NICE TA875. Semaglutide for managing overweight and obesity. March 2023.',
    'MHRA. Wegovy 0.25/0.5/1/1.7/2.4 mg solution for injection — Summary of Product Characteristics. 2024.',
    'MHRA Drug Safety Update. Counterfeit GLP-1 injector pens: clinician alert. January 2025.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '67' },
    { label: 'Mean weight reduction', value: '−14.9% (2.4mg)' },
    { label: 'Half-life', value: '~7 days' },
    { label: 'Administration', value: 'Subcutaneous, weekly' },
    { label: 'UK legal status', value: 'Prescription only (POM)', highlight: true },
  ],
  budgetTier: 'mid',
  timelineFit: ['3-6', '6-12', 'long'],
  riskFit: ['conservative', 'moderate', 'higher'],
  experienceFit: ['newcomer', 'some', 'experienced'],
  compareWith: [
    { slug: 'tirzepatide-vs-semaglutide', tagline: 'Head-to-head review' },
  ],
  relatedGuides: [
    { href: '/guides/best-peptides-for-fat-loss-uk', label: 'Best peptides for fat loss in the UK' },
    { href: '/guides/uk-legal-status', label: 'A guide to UK peptide legality' },
  ],
};
