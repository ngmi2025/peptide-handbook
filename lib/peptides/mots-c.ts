import type { Peptide } from '../types';

export const motsC: Peptide = {
  slug: 'mots-c',
  name: 'MOTS-c',
  altNames: ['Mitochondrial-derived peptide MOTS-c'],
  className: 'Mitochondrial-derived peptide',
  classShort: 'MDP',
  goal: 'longevity',
  rating: 2.6,
  confidence: 'Low',
  ukLegal: 'Investigational',
  ukLegalNote: 'Investigational — preclinical/early-phase only',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Nadia Hassan', credentials: 'PhD · Mitochondrial Biology · University of Manchester' },
  studiesReviewed: 7,
  intro:
    'A 16-amino-acid peptide encoded within the mitochondrial 12S rRNA gene. Discovered in 2015 and intensively studied preclinically for metabolic and longevity-relevant effects, but human therapeutic data is essentially nil.',
  tldr: [
    'Endogenous mitochondrial-derived peptide (MDP) — the body produces it, the question is whether supplementing it has therapeutic effect.',
    'Robust preclinical evidence for improved insulin sensitivity, exercise capacity, and metabolic homeostasis in rodent models.',
    'No published human RCTs; circulating levels in humans correlate with fitness and metabolic health, but causality is unestablished.',
    'Mechanism implicates AMPK activation and mitochondrial biogenesis — biologically interesting if it translates.',
    'UK: no approval; not legally available outside research use.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'MOTS-c (Mitochondrial Open Reading frame of Twelve S rRNA type-c) is a 16-amino-acid peptide encoded within the mitochondrial 12S ribosomal RNA gene. It was identified in 2015 by Pinchas Cohen\'s group at USC and rapidly became a major focus of mitochondrial-derived peptide research.',
      'It is endogenously produced — circulating levels can be measured in human plasma and decline with age. The therapeutic hypothesis is that exogenous MOTS-c administration may restore favourable metabolic signalling. To date, this hypothesis has been tested extensively in rodent models but only minimally in humans.',
    ],
  },
  how: {
    intro:
      "MOTS-c appears to act as a metabolic signalling peptide that crosses cell membranes and translocates to the nucleus under stress. The dominant proposed mechanism is activation of AMP-activated protein kinase (AMPK) — the same pathway targeted by metformin and exercise.",
    steps: [
      { title: 'Endogenous production / injection', desc: 'Encoded by mt-12S rRNA; or administered subcutaneously.', iconKey: 'cell' },
      { title: 'Cellular uptake', desc: 'Crosses cell membranes; translocates to nucleus under stress.', iconKey: 'tissue' },
      { title: 'AMPK activation', desc: 'Activates AMPK signalling — central metabolic sensor.', iconKey: 'receptor' },
      { title: 'Metabolic effects', desc: 'Improved insulin sensitivity; mitochondrial biogenesis (preclinical).', iconKey: 'insulin' },
    ],
  },
  benefits: [
    {
      heading: 'Metabolic effects (preclinical only)',
      paragraphs: [
        'Mouse studies consistently show that MOTS-c administration improves insulin sensitivity, increases exercise capacity, and prevents diet-induced obesity. Effect sizes in rodents are substantial. Whether any of this transfers to humans is unknown.',
      ],
    },
    {
      heading: 'Age-related decline (low confidence)',
      paragraphs: [
        'Cross-sectional human studies show that circulating MOTS-c levels decline with age and correlate with insulin sensitivity, fitness, and metabolic health markers. This is associative — it does not establish that exogenous administration would restore those parameters.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'Translational gap',
    body:
      'MOTS-c has had a relatively short research history (since 2015), and human therapeutic studies have not yet appeared in the published literature. Until a controlled human trial reports outcomes, even encouraging preclinical data should not be over-interpreted.',
  },
  studies: [
    {
      title: 'MOTS-c regulates insulin sensitivity and metabolic homeostasis (preclinical)',
      year: '2015',
      design: 'Mechanism / animal',
      n: 'Mice + cell culture',
      finding:
        'Original characterisation paper. MOTS-c administration prevented diet-induced obesity in mice and improved insulin sensitivity. Mechanism implicated AMPK activation.',
      link: 'Cell Metab · doi:10.1016/j.cmet.2015.02.009',
      href: 'https://doi.org/10.1016/j.cmet.2015.02.009',
    },
    {
      title: 'MOTS-c levels and aerobic capacity in humans (cross-sectional)',
      year: '2018',
      design: 'Observational',
      n: '120',
      finding:
        'Plasma MOTS-c levels positively correlated with VO₂max and inversely with HOMA-IR. Suggestive of metabolic role; not interventional.',
      link: 'Aging Cell · doi:10.1111/acel.12804',
      href: 'https://doi.org/10.1111/acel.12804',
    },
    {
      title: 'Mitochondrial-derived peptides: review',
      year: '2022',
      design: 'Literature review',
      n: 'N/A',
      finding:
        'Comprehensive review of the MDP family, including MOTS-c, Humanin, and SHLPs. Concludes that translational potential is interesting but largely unrealised; calls for human RCTs.',
      link: 'Trends Endocrinol Metab · 33(2):106-122',
      href: '#',
    },
  ],
  dosage: {
    intro:
      'No regulatory dosing exists. MOTS-c is investigational; published trial protocols in humans are not available. Material in the research-chemical channel uses dose ranges extrapolated from rodent studies (typically 5–15 mg/kg), which lack any human clinical justification.',
    rows: [
      { phase: 'Research / preclinical', dose: 'Mouse: 5–15 mg/kg', duration: 'Variable', notes: 'No human protocol' },
    ],
    caption: 'No human dosing protocol has been published. Treat any human-use dose schedule with high scepticism.',
  },
  safety: {
    intro:
      'Acute safety in animals appears benign. There is essentially no human safety dataset for exogenous MOTS-c administration.',
    rows: [
      { effect: 'Injection-site reaction', frequency: 'Likely mild', severity: 'Estimated' },
      { effect: 'Long-term effects', frequency: 'Unstudied', severity: 'Unknown' },
      { effect: 'Allergic / immunological response', frequency: 'Theoretical', severity: 'Unknown' },
    ],
    contraindications: 'Active malignancy (theoretical). Pregnancy. Concurrent metformin (theoretical AMPK overlap).',
  },
  legal: {
    title: 'Investigational — research use only',
    body:
      'MOTS-c has no marketing authorisation in any jurisdiction. It is not currently in any registered phase-2 or phase-3 human trial as of May 2026. Material sold as MOTS-c through research-chemical channels has no quality assurance or identity verification. Supply for human use without prescription is illegal under the Human Medicines Regulations 2012.',
  },
  summary:
    'MOTS-c is genuinely interesting biology — an endogenous mitochondrial-derived peptide with robust preclinical metabolic effects. The translational evidence in humans is essentially nil. We cover it because the mechanism is plausible and the early data is encouraging, but UK readers considering this compound should understand that they would be making a personal-experiment decision well outside the boundaries of clinical evidence.',
  references: [
    'Lee C, et al. The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis. <em>Cell Metab</em>. 2015;21(3):443-454.',
    'Reynolds JC, et al. MOTS-c is an exercise-induced mitochondrial-encoded regulator. <em>Nat Commun</em>. 2021;12:470.',
    'Kim SJ, et al. Mitochondrial-derived peptides MOTS-c and Humanin: aging-relevant signalling molecules. <em>Trends Endocrinol Metab</em>. 2022;33(2):106-122.',
    'Yen K, et al. The emerging role of the mitochondrial-derived peptide humanin in aging. <em>Hum Genet</em>. 2020;139(3):397-405.',
    'MHRA. Note: MOTS-c has no UK marketing authorisation as of May 2026.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '7' },
    { label: 'Human RCTs published', value: '0' },
    { label: 'Half-life', value: 'Unknown in humans' },
    { label: 'Administration', value: 'Subcutaneous (research)' },
    { label: 'UK legal status', value: 'Investigational', highlight: true },
  ],
  budgetTier: 'mid',
  timelineFit: ['long'],
  riskFit: ['higher'],
  experienceFit: ['experienced'],
  compareWith: [],
  relatedGuides: [],
};
