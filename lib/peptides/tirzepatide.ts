import type { Peptide } from '../types';

export const tirzepatide: Peptide = {
  slug: 'tirzepatide',
  name: 'Tirzepatide',
  altNames: ['Mounjaro', 'Zepbound', 'LY3298176'],
  className: 'GLP-1 / GIP receptor agonist',
  classShort: 'GLP-1 / GIP',
  goal: 'fat-loss',
  rating: 4.6,
  confidence: 'High',
  ukLegal: 'POM',
  ukLegalNote: 'Prescription only (POM)',
  updated: '2 May 2026',
  reviewedBy: { name: 'Dr. Rachel Okonkwo', credentials: 'MBBS · Endocrinology · GMC reg. 7211983' },
  studiesReviewed: 42,
  intro:
    'A once-weekly dual GIP/GLP-1 receptor agonist developed by Eli Lilly. The first approved compound in its class — and currently the most-studied peptide for body composition and metabolic health.',
  tldr: [
    'Largest mean weight reduction observed for any approved compound in its class — up to 20.9% over 72 weeks at the 15mg dose.',
    'Dual GIP + GLP-1 agonism appears to outperform single GLP-1 agonism on body composition outcomes.',
    'Strong evidence base: 5 published phase-3 RCTs, n > 11,000 across SURMOUNT and SURPASS programs.',
    'Common GI side effects (nausea, constipation) usually resolve with slow titration.',
    'UK: prescription-only. Approved for type-2 diabetes (Mounjaro) and chronic weight management; not legal for non-prescribed use.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'Tirzepatide is a 39-amino-acid synthetic peptide that activates two incretin receptors simultaneously: glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1). It was developed by Eli Lilly and approved by the US FDA in May 2022 for type-2 diabetes (Mounjaro), and in November 2023 for chronic weight management (Zepbound). UK MHRA approval followed in October 2023.',
      "Structurally it's modified from native GIP, with a fatty-acid moiety that binds reversibly to albumin — extending its half-life to roughly 5 days and enabling once-weekly subcutaneous dosing.",
    ],
  },
  how: {
    intro:
      'Both GIP and GLP-1 are incretin hormones — released by the gut in response to nutrient intake. They potentiate insulin secretion, suppress glucagon, and slow gastric emptying. Tirzepatide\'s distinguishing feature is co-activation of both pathways from a single molecule.',
    steps: [
      { title: 'Subcutaneous injection', desc: 'Weekly dose absorbed into circulation; albumin-bound for slow release.', iconKey: 'injection' },
      { title: 'Receptor binding', desc: 'Activates GIP and GLP-1 receptors in pancreas, gut, and brain.', iconKey: 'receptor' },
      { title: 'Insulin response', desc: 'Glucose-dependent insulin release; glucagon suppressed.', iconKey: 'insulin' },
      { title: 'Appetite & satiety', desc: 'Slowed gastric emptying; central satiety signalling increases.', iconKey: 'brain' },
    ],
    afterText:
      'The clinical effect — pronounced reduction in caloric intake, improved insulin sensitivity, and significant fat-mass loss — appears to compound across these mechanisms rather than coming from any single pathway.',
  },
  benefits: [
    {
      heading: 'Weight reduction (high confidence)',
      paragraphs: [
        'The SURMOUNT-1 trial (n=2,539, 72 weeks) reported mean body-weight reductions of −15.0%, −19.5%, and −20.9% at 5mg, 10mg, and 15mg respectively, vs −3.1% on placebo. These are the largest reductions observed for any pharmacologic agent in this class to date.',
      ],
    },
    {
      heading: 'Glycaemic control (high confidence)',
      paragraphs: [
        'In type-2 diabetics (SURPASS-2), tirzepatide outperformed semaglutide on HbA1c reduction at every dose level. Mean HbA1c reductions reached −2.30% at the 15mg dose.',
      ],
    },
    {
      heading: 'Cardiovascular outcomes (medium confidence)',
      paragraphs: [
        'Pre-specified meta-analyses suggest reductions in MACE risk; the dedicated SURPASS-CVOT trial is ongoing as of early 2026. Definitive cardiovascular conclusions await its publication.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'Where the evidence is thinner',
    body:
      'Long-term (>3 year) data is still accumulating. Effects on lean-mass preservation are favourable but trial-design limitations make this a developing rather than settled question. Discontinuation typically results in significant weight regain.',
  },
  studies: [
    {
      title: 'Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1)',
      year: '2022',
      design: 'Phase-3 RCT, double-blind, placebo-controlled',
      n: '2,539',
      finding:
        'At 72 weeks, mean weight reduction was −20.9% on 15mg vs −3.1% on placebo. 91% of participants on the 15mg dose achieved ≥5% weight reduction.',
      link: 'N Engl J Med · doi:10.1056/NEJMoa2206038',
      href: 'https://doi.org/10.1056/NEJMoa2206038',
    },
    {
      title: 'Tirzepatide vs Semaglutide once weekly in patients with type-2 diabetes (SURPASS-2)',
      year: '2021',
      design: 'Phase-3 RCT, open-label, head-to-head',
      n: '1,879',
      finding:
        'Tirzepatide demonstrated greater HbA1c and weight reduction than semaglutide 1mg at all three doses studied. Side-effect profile broadly comparable.',
      link: 'N Engl J Med · doi:10.1056/NEJMoa2107519',
      href: 'https://doi.org/10.1056/NEJMoa2107519',
    },
    {
      title: 'Effects of tirzepatide on cardiovascular outcomes (SURPASS-CVOT)',
      year: 'Ongoing',
      design: 'Phase-3 RCT, primary CV outcomes',
      n: '13,299',
      finding:
        'Pre-specified MACE-3 endpoint analysis underway. Interim safety data consistent with prior trials. Primary readout expected 2026–2027.',
      link: 'ClinicalTrials.gov · NCT04255433',
      href: 'https://clinicaltrials.gov/study/NCT04255433',
    },
  ],
  dosage: {
    intro:
      'Tirzepatide is administered as a weekly subcutaneous injection. Dose escalation is critical to tolerance — abrupt initiation at higher doses produces near-universal GI symptoms.',
    rows: [
      { phase: 'Initiation', dose: '2.5 mg / week', duration: '4 weeks', notes: 'Tolerance phase only' },
      { phase: 'Step 1', dose: '5.0 mg / week', duration: '4+ weeks', notes: 'Lowest therapeutic dose' },
      { phase: 'Step 2', dose: '7.5 mg / week', duration: '4+ weeks', notes: 'Optional intermediate' },
      { phase: 'Step 3', dose: '10.0 mg / week', duration: '4+ weeks', notes: 'Common maintenance' },
      { phase: 'Maximum', dose: '15.0 mg / week', duration: '—', notes: 'Highest approved dose' },
    ],
    caption: 'Standard titration schedule per UK SmPC. Always escalate under clinical supervision.',
    note:
      'Dosing data is summarised from published clinical-trial protocols and the UK Summary of Product Characteristics. It is provided for educational reference only. Specific dose decisions must be made by a UK-registered prescriber familiar with your medical history.',
  },
  safety: {
    intro:
      'The side-effect profile is dominated by GI symptoms, particularly during titration. Most are dose-dependent and transient.',
    rows: [
      { effect: 'Nausea', frequency: '30–40%', severity: 'Mild–moderate' },
      { effect: 'Diarrhoea', frequency: '15–22%', severity: 'Mild' },
      { effect: 'Constipation', frequency: '10–18%', severity: 'Mild' },
      { effect: 'Vomiting', frequency: '9–13%', severity: 'Mild–moderate' },
      { effect: 'Injection-site reaction', frequency: '3–5%', severity: 'Mild' },
      { effect: 'Acute pancreatitis', frequency: '<0.5%', severity: 'Serious — discontinue' },
    ],
    contraindications:
      'Personal/family history of medullary thyroid carcinoma or MEN-2. Use during pregnancy is not recommended.',
  },
  legal: {
    title: 'Prescription-only medicine (POM) in the UK',
    body:
      'Tirzepatide is licensed in the UK under the brand names Mounjaro (type-2 diabetes) and as a chronic weight-management therapy. Supply outside a prescription is illegal under the Human Medicines Regulations 2012. The MHRA has issued multiple warnings about counterfeit injector pens sold via unregulated channels — these have included incorrect dosing, unsterile preparations, and entirely different active ingredients.',
  },
  summary:
    "Tirzepatide currently sits at the front of the evidence base for pharmacologic weight management, with effect sizes that exceed any prior agent. The dual-incretin mechanism appears genuinely additive rather than just incremental over GLP-1-only therapy. For UK readers: it's available on prescription, including via private clinics; supply outside that route is both illegal and demonstrably unsafe given the counterfeit market. Discontinuation produces significant rebound — long-term planning matters.",
  references: [
    'Jastreboff AM, et al. Tirzepatide once weekly for the treatment of obesity. <em>N Engl J Med</em>. 2022;387(3):205-216. <a href="https://doi.org/10.1056/NEJMoa2206038">doi:10.1056/NEJMoa2206038</a>',
    'Coskun T, et al. LY3298176, a novel dual GIP and GLP-1 receptor agonist for the treatment of type 2 diabetes mellitus. <em>Mol Metab</em>. 2018;18:3-14. <a href="https://doi.org/10.1016/j.molmet.2018.09.009">doi:10.1016/j.molmet.2018.09.009</a>',
    'Frías JP, et al. Tirzepatide versus Semaglutide once weekly in patients with type 2 diabetes. <em>N Engl J Med</em>. 2021;385(6):503-515. <a href="https://doi.org/10.1056/NEJMoa2107519">doi:10.1056/NEJMoa2107519</a>',
    'Sattar N, et al. Tirzepatide cardiovascular event risk assessment: pre-specified meta-analysis. <em>Nat Med</em>. 2022;28(3):591-598. <a href="https://doi.org/10.1038/s41591-022-01707-4">doi:10.1038/s41591-022-01707-4</a>',
    'Garvey WT, et al. Tirzepatide once weekly for the treatment of obesity in people with type 2 diabetes (SURMOUNT-2). <em>Lancet</em>. 2023;402(10402):613-626.',
    'Wadden TA, et al. Tirzepatide after intensive lifestyle intervention in adults with overweight or obesity (SURMOUNT-3). <em>Nat Med</em>. 2023;29(11):2909-2918.',
    'Aronne LJ, et al. Continued treatment with tirzepatide for maintenance of weight reduction (SURMOUNT-4). <em>JAMA</em>. 2024;331(1):38-48.',
    'MHRA. Mounjaro 2.5/5/7.5/10/12.5/15 mg solution for injection — Summary of Product Characteristics. October 2023.',
    'NICE. Tirzepatide for managing overweight and obesity. Technology appraisal guidance TA1026. December 2024.',
    'Rosenstock J, et al. Efficacy and safety of a novel dual GIP and GLP-1 receptor agonist tirzepatide (SURPASS-1). <em>Lancet</em>. 2021;398(10295):143-155.',
    'Inagaki N, et al. SURPASS-J-mono: tirzepatide monotherapy in Japanese adults with type 2 diabetes. <em>Lancet Diabetes Endocrinol</em>. 2022;10(9):623-633.',
    'MHRA Drug Safety Update. Counterfeit Mounjaro injector pens: clinician alert. January 2025.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '42' },
    { label: 'Mean weight reduction', value: '−20.9% (15mg)' },
    { label: 'Half-life', value: '~5 days' },
    { label: 'Administration', value: 'Subcutaneous, weekly' },
    { label: 'UK legal status', value: 'Prescription only (POM)', highlight: true },
  ],
  budgetTier: 'high',
  timelineFit: ['3-6', '6-12', 'long'],
  riskFit: ['conservative', 'moderate', 'higher'],
  experienceFit: ['newcomer', 'some', 'experienced'],
  compareWith: [
    { slug: 'tirzepatide-vs-semaglutide', tagline: 'Head-to-head review' },
    { slug: 'tirzepatide-vs-retatrutide', tagline: 'Next-generation comparison' },
  ],
  relatedGuides: [
    { href: '/guides/best-peptides-for-fat-loss-uk', label: 'Best peptides for fat loss in the UK' },
    { href: '/guides/uk-legal-status', label: 'A guide to UK peptide legality' },
    { href: '/guides/avoiding-counterfeit-injector-pens', label: 'Avoiding counterfeit injector pens' },
  ],
};
