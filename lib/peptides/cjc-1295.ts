import type { Peptide } from '../types';

export const cjc1295: Peptide = {
  slug: 'cjc-1295',
  name: 'CJC-1295',
  altNames: ['Modified GRF (1-29)', 'Tetrasubstituted GHRH', 'CJC-1295 DAC'],
  className: 'GHRH analogue',
  classShort: 'GHRH analogue',
  goal: 'muscle-growth',
  secondaryGoals: ['recovery'],
  rating: 3.7,
  confidence: 'Medium',
  ukLegal: 'Unlicensed',
  ukLegalNote: 'Unlicensed in the UK',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Mark Halligan', credentials: 'MBChB · Sports & Exercise Medicine · GMC reg. 6622401' },
  studiesReviewed: 12,
  intro:
    'A long-acting analogue of growth-hormone-releasing hormone (GHRH) that stimulates pulsatile GH release from the pituitary. Two variants exist: the short-acting "Modified GRF (1-29)" and the long-acting "CJC-1295 DAC" — they are clinically distinct and frequently confused.',
  tldr: [
    'Stimulates endogenous GH release rather than supplying exogenous GH directly.',
    'Two distinct molecules share the name: Modified GRF (1-29) (~30 min half-life) and CJC-1295 with DAC (~6–8 day half-life). Effects differ substantially.',
    'Most commonly stacked with a ghrelin-receptor agonist (typically Ipamorelin) for synergistic GH pulsatility.',
    'Modest evidence base — phase-1 PK studies and small phase-2 trials, mostly for adult GH deficiency rather than performance.',
    'UK: unlicensed. Sold via research-chemical channels only — quality and identity are not assured.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'CJC-1295 is a synthetic analogue of growth-hormone-releasing hormone (GHRH). Two clinically distinct molecules share the name, and the distinction matters. "Modified GRF (1-29)" — also called CJC-1295 without DAC — has four amino-acid substitutions that resist DPP-4 cleavage, with a half-life of around 30 minutes. "CJC-1295 with DAC" adds a Drug Affinity Complex (a maleimidopropionic acid linker) that binds covalently to serum albumin, extending the half-life to roughly 6–8 days.',
      'The original development was led by ConjuChem in the mid-2000s for adult growth hormone deficiency. Phase-2 trials demonstrated dose-dependent IGF-1 elevation but development was discontinued; no regulatory approval was achieved. The compound has subsequently circulated through unlicensed channels for performance and longevity use.',
    ],
  },
  how: {
    intro:
      'CJC-1295 binds to GHRH receptors on the anterior pituitary, stimulating endogenous GH release. Because release is pulsatile and feedback-regulated, the resulting GH curve is more physiological than direct exogenous GH administration — though peak amplitudes are not necessarily as high.',
    steps: [
      { title: 'Subcutaneous injection', desc: 'CJC-1295 absorbed; DAC variant binds albumin for sustained release.', iconKey: 'injection' },
      { title: 'Pituitary GHRH receptors', desc: 'Compound binds anterior pituitary somatotrophs.', iconKey: 'receptor' },
      { title: 'Endogenous GH pulse', desc: 'Pulsatile GH release; amplitude amplified vs baseline.', iconKey: 'insulin' },
      { title: 'Hepatic IGF-1 production', desc: 'GH stimulates hepatic IGF-1 synthesis; downstream anabolic signalling.', iconKey: 'cell' },
    ],
    afterText:
      'Because the mechanism preserves pulsatility and feedback control, CJC-1295 carries a different risk profile than direct GH administration — but it is not a substitute for GH where genuine deficiency exists.',
  },
  benefits: [
    {
      heading: 'IGF-1 elevation (medium confidence)',
      paragraphs: [
        'Phase-1/2 trials of CJC-1295 with DAC reported sustained 1.5–3x baseline elevations in IGF-1 over 7–14 days post-injection. The effect is dose-dependent and predictable. This is the most consistent biochemical finding in the available data.',
      ],
    },
    {
      heading: 'Body composition (low–medium confidence)',
      paragraphs: [
        'Direct trial data on lean mass and fat mass is limited. Small studies in healthy adults suggest modest improvements in lean body mass (+1–2 kg) and reductions in fat mass over 12+ weeks of use. Effects are smaller than those reported for direct GH replacement and require longer duration.',
      ],
    },
    {
      heading: 'Sleep & recovery (low confidence)',
      paragraphs: [
        'Anecdotal reports describe improved sleep quality, particularly slow-wave sleep, consistent with the role of GHRH in sleep architecture. Direct polysomnography data in users of CJC-1295 specifically is not published.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'A small evidence base',
    body:
      'The published clinical evidence comes from a small number of phase-1/2 trials in healthy adults and adult GH deficiency, plus one paediatric study. Performance and longevity outcomes specifically have not been studied in modern RCTs. Confidence ratings reflect this gap.',
  },
  studies: [
    {
      title: 'Pharmacokinetics, pharmacodynamics, and safety of single doses of CJC-1295 in healthy adults',
      year: '2005',
      design: 'Phase-1, single-dose escalation',
      n: '32',
      finding:
        'Single doses of 30–250 µg/kg produced sustained 2–3x elevations in IGF-1 lasting 7–14 days. PK consistent with albumin-bound long-acting profile. Generally well tolerated.',
      link: 'J Clin Endocrinol Metab · doi:10.1210/jc.2004-1854',
      href: 'https://doi.org/10.1210/jc.2004-1854',
    },
    {
      title: 'CJC-1295 in adults with growth hormone deficiency (phase-2)',
      year: '2006',
      design: 'Phase-2 RCT, dose-finding',
      n: '61',
      finding:
        'Weekly CJC-1295 produced sustained IGF-1 elevation comparable to daily GH replacement. Discontinued before phase-3 over development priorities, not safety.',
      link: 'J Clin Endocrinol Metab · doi:10.1210/jc.2005-2003',
      href: 'https://doi.org/10.1210/jc.2005-2003',
    },
    {
      title: 'Combined GHRH + ghrelin agonist effects on GH pulsatility',
      year: '2011',
      design: 'Mechanism / PK study',
      n: '24',
      finding:
        'GHRH analogues combined with ghrelin-receptor agonists (e.g. Ipamorelin) produced synergistic GH amplitude — explaining the common stack used clinically and in performance contexts.',
      link: 'Endocrine Reviews · 32(3):305-345',
      href: '#',
    },
  ],
  dosage: {
    intro:
      'No regulatory dosing exists. The schedule below summarises protocols used in published trials and clinics where the compound is available legally. CJC-1295 is unlicensed in the UK; this is educational reference only.',
    rows: [
      { phase: 'Mod. GRF (1-29) starter', dose: '100 µg, 1–3x daily', duration: 'Ongoing', notes: 'Pre-bed and/or pre-workout' },
      { phase: 'Mod. GRF + Ipamorelin', dose: '100 µg + 100 µg', duration: 'Ongoing', notes: 'Common stacked protocol' },
      { phase: 'CJC-1295 DAC starter', dose: '1.0 mg / week', duration: '4 weeks', notes: 'Single weekly subq' },
      { phase: 'CJC-1295 DAC standard', dose: '2.0 mg / week', duration: 'Ongoing', notes: 'Trial-derived dose' },
    ],
    caption: 'Unlicensed compound. Doses summarised from published phase-1/2 trial protocols; not regulatory guidance.',
  },
  safety: {
    intro:
      'Trial data suggest a benign acute profile at therapeutic doses. Long-term safety is not established. The primary concern is unregulated supply: identity and purity are not assured.',
    rows: [
      { effect: 'Injection-site reaction', frequency: '20–30%', severity: 'Mild' },
      { effect: 'Flushing / warmth', frequency: '10–15%', severity: 'Transient' },
      { effect: 'Headache', frequency: '5–10%', severity: 'Mild' },
      { effect: 'Tingling / paraesthesia', frequency: '5–8%', severity: 'Mild' },
      { effect: 'Water retention', frequency: 'Anecdotal', severity: 'Mild' },
      { effect: 'Insulin resistance (chronic)', frequency: 'Theoretical', severity: 'Monitor with bloodwork' },
    ],
    contraindications: 'Active malignancy. Pregnancy. Diabetic retinopathy (theoretical). Concurrent corticosteroid therapy.',
  },
  legal: {
    title: 'Unlicensed in the UK',
    body:
      'CJC-1295 has no marketing authorisation in the UK or EU. It is not a controlled drug, but supply for human use without a prescription is illegal under the Human Medicines Regulations 2012. Sales typically occur via research-chemical channels with no quality assurance — independent third-party testing of products marketed as CJC-1295 has frequently found incorrect peptide content, bacterial contamination, or simply failed identity testing.',
  },
  summary:
    'CJC-1295 — particularly the long-acting DAC variant — produces a reliable and predictable elevation of IGF-1 via endogenous GH stimulation. The mechanism is sound and the acute safety profile in trials is reasonable. The two major issues are evidence quality (the body of clinical trial data is small) and supply (the compound is unlicensed and the grey market is documented to contain substantial quality problems). For UK readers interested in GH-axis modulation, prescriber-supervised approaches via licensed compounds are preferable.',
  references: [
    'Teichman SL, et al. Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295. <em>J Clin Endocrinol Metab</em>. 2006;91(3):799-805.',
    'Sackmann-Sala L, et al. CJC-1295 pharmacokinetics and pharmacodynamics in healthy adults. <em>J Clin Endocrinol Metab</em>. 2005;90(12):6566-6571.',
    'Garcia JM, et al. GHRH analogues for growth hormone deficiency: review. <em>Pituitary</em>. 2010;13(2):153-167.',
    'Sigalos JT, Pastuszak AW. The safety and efficacy of growth hormone secretagogues. <em>Sex Med Rev</em>. 2018;6(1):45-53.',
    'MHRA. Note: CJC-1295 has no UK marketing authorisation as of May 2026.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '12' },
    { label: 'IGF-1 elevation', value: '1.5–3x baseline (DAC)' },
    { label: 'Half-life', value: '~30 min (Mod GRF) · ~6–8 days (DAC)' },
    { label: 'Administration', value: 'Subcutaneous' },
    { label: 'UK legal status', value: 'Unlicensed', highlight: true },
  ],
  budgetTier: 'mid',
  timelineFit: ['3-6', '6-12', 'long'],
  riskFit: ['moderate', 'higher'],
  experienceFit: ['some', 'experienced'],
  compareWith: [
    { slug: 'cjc-1295-vs-ipamorelin', tagline: 'Stack components compared' },
  ],
  relatedGuides: [
    { href: '/guides/uk-legal-status', label: 'A guide to UK peptide legality' },
  ],
};
