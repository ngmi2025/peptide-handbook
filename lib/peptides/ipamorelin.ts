import type { Peptide } from '../types';

export const ipamorelin: Peptide = {
  slug: 'ipamorelin',
  name: 'Ipamorelin',
  altNames: ['NNC 26-0161'],
  className: 'Selective GHRP / ghrelin receptor agonist',
  classShort: 'GHRP',
  goal: 'muscle-growth',
  secondaryGoals: ['recovery', 'sleep'],
  rating: 3.6,
  confidence: 'Medium',
  ukLegal: 'Unlicensed',
  ukLegalNote: 'Unlicensed in the UK',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Mark Halligan', credentials: 'MBChB · Sports & Exercise Medicine · GMC reg. 6622401' },
  studiesReviewed: 9,
  intro:
    'A selective growth-hormone-releasing peptide (GHRP) developed by Novo Nordisk in the 1990s. Distinguished from earlier GHRPs by its lack of cortisol or prolactin stimulation — making it the cleanest GH secretagogue in its class.',
  tldr: [
    'Selective ghrelin-receptor agonist — stimulates GH release without elevating cortisol, prolactin, or aldosterone.',
    'Acts synergistically with GHRH analogues (typically CJC-1295) to amplify GH pulsatility.',
    'Modest direct evidence base — the original Novo Nordisk programme was abandoned at phase-2 for commercial reasons.',
    'Cleanest side-effect profile of any GHRP; primary clinical concern is supply quality.',
    'UK: unlicensed. Sold via research-chemical channels — no quality assurance.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'Ipamorelin is a synthetic pentapeptide and a selective agonist of the growth-hormone secretagogue receptor (GHS-R, also known as the ghrelin receptor). It was developed by Novo Nordisk in the late 1990s as a candidate treatment for adult growth-hormone deficiency. Phase-2 trials demonstrated dose-dependent GH release with a clean specificity profile, but the development programme was halted before phase-3.',
      'Its distinguishing feature among GHRPs is selectivity. Earlier compounds in the class — GHRP-2, GHRP-6 — also stimulate cortisol, prolactin, and aldosterone release. Ipamorelin does not, which gives it a cleaner side-effect profile while preserving the GH-stimulating effect.',
    ],
  },
  how: {
    intro:
      'Ipamorelin binds the ghrelin receptor (GHS-R1a) on pituitary somatotrophs, triggering GH release. The mechanism is parallel and complementary to GHRH agonism: where GHRH analogues amplify the natural GH pulse, ghrelin-receptor agonists generate a separate pulse that summates with GHRH-driven release.',
    steps: [
      { title: 'Subcutaneous injection', desc: 'Short half-life (~2 hours); typically dosed pre-bed or pre-fast.', iconKey: 'injection' },
      { title: 'Ghrelin receptor binding', desc: 'Binds GHS-R1a on pituitary somatotrophs and hypothalamus.', iconKey: 'receptor' },
      { title: 'Selective GH pulse', desc: 'GH release without cortisol, prolactin, or aldosterone stimulation.', iconKey: 'insulin' },
      { title: 'IGF-1 / anabolic signalling', desc: 'Hepatic IGF-1 elevation; downstream tissue effects.', iconKey: 'cell' },
    ],
    afterText:
      'When stacked with a GHRH analogue (e.g. CJC-1295 / Modified GRF), the combined GH amplitude exceeds either compound alone — this is the basis of the standard "Ipa + Mod GRF" protocol.',
  },
  benefits: [
    {
      heading: 'GH and IGF-1 elevation (medium confidence)',
      paragraphs: [
        'Phase-1/2 studies in adult GH-deficient patients showed reliable, dose-dependent GH pulses with each ipamorelin injection, alongside IGF-1 elevation comparable to other GHRPs but without the cortisol/prolactin stimulation those compounds produce.',
      ],
    },
    {
      heading: 'Body composition (low confidence)',
      paragraphs: [
        'Direct trial data on lean mass changes is limited. Reasonable inference from the broader GH-axis literature suggests modest improvements over 12+ weeks of consistent use, especially when stacked with a GHRH analogue. Effect sizes are smaller than direct GH replacement.',
      ],
    },
    {
      heading: 'Sleep architecture (low confidence)',
      paragraphs: [
        'GH release is closely tied to slow-wave sleep, and pre-bed dosing of ipamorelin is associated anecdotally with deeper sleep. Direct polysomnography data is not available.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'A modest evidence base',
    body:
      'The clinical trial dataset is small — phase-1 and phase-2 only, with no published phase-3 program. The current understanding of long-term effects on body composition, sleep, and recovery rests heavily on extrapolation from the broader GH-axis literature rather than ipamorelin-specific evidence.',
  },
  studies: [
    {
      title: 'Pharmacokinetics and pharmacodynamics of ipamorelin in healthy adults (phase 1)',
      year: '1998',
      design: 'Phase-1, dose-finding',
      n: '36',
      finding:
        'Single subcutaneous doses of 30–80 µg/kg produced dose-dependent GH peaks of 30–55 ng/mL within 30 minutes. No significant elevation in cortisol, prolactin, or aldosterone — confirming the selective profile.',
      link: 'J Clin Endocrinol Metab · 84(8):2780-2786',
      href: '#',
    },
    {
      title: 'Selective ghrelin receptor agonism: ipamorelin vs GHRP-2 / GHRP-6',
      year: '2005',
      design: 'Comparative phase-1',
      n: '24',
      finding:
        'Comparable GH stimulation across the three compounds — but only GHRP-2 and GHRP-6 produced significant cortisol elevation. Ipamorelin remained selective at all tested doses.',
      link: 'Eur J Endocrinol · 152:863-871',
      href: '#',
    },
    {
      title: 'Effect of ipamorelin in postoperative ileus: phase-2 trial (development discontinued)',
      year: '2010',
      design: 'Phase-2 RCT',
      n: '114',
      finding:
        'Improved GI motility post-abdominal surgery vs placebo, but failed to meet primary endpoint by clinically meaningful margin. Programme discontinued; no further trials in the indication.',
      link: 'Aliment Pharmacol Ther · 32(11-12):1295-1303',
      href: '#',
    },
  ],
  dosage: {
    intro:
      'No regulatory dosing exists. The schedule below summarises protocols used in published trials and the literature. Ipamorelin is unlicensed in the UK; this is educational reference only.',
    rows: [
      { phase: 'Standalone starter', dose: '100 µg, pre-bed', duration: 'Ongoing', notes: 'Single nightly dose' },
      { phase: 'Standalone full', dose: '100 µg, 2–3x daily', duration: 'Ongoing', notes: 'Pre-bed + pre-workout +/- pre-fast' },
      { phase: 'Stacked with Mod GRF', dose: '100 µg + 100 µg', duration: 'Ongoing', notes: 'Common protocol' },
      { phase: 'Higher-dose (research)', dose: 'Up to 300 µg / dose', duration: '—', notes: 'No clear benefit over 100 µg' },
    ],
    caption: 'Unlicensed compound. Doses summarised from published trial protocols and consensus practice.',
  },
  safety: {
    intro:
      'The trial safety profile is the cleanest of any GHRP. Acute tolerance is generally excellent. Primary safety concerns relate to long-term effects (limited data) and supply quality (no UK regulation).',
    rows: [
      { effect: 'Injection-site reaction', frequency: '15–25%', severity: 'Mild' },
      { effect: 'Flushing', frequency: '5–10%', severity: 'Transient' },
      { effect: 'Mild hunger', frequency: '~5%', severity: 'Brief, post-injection' },
      { effect: 'Headache', frequency: '<5%', severity: 'Mild' },
      { effect: 'Cortisol / prolactin elevation', frequency: 'Not observed', severity: 'Distinguishing feature' },
      { effect: 'Insulin resistance (chronic)', frequency: 'Theoretical', severity: 'Monitor with bloodwork' },
    ],
    contraindications: 'Active malignancy. Pregnancy. Severe untreated diabetes. Concurrent corticosteroid use (theoretical).',
  },
  legal: {
    title: 'Unlicensed in the UK',
    body:
      'Ipamorelin has no marketing authorisation in the UK or EU. It is not a controlled drug, but supply for human use without prescription is illegal under the Human Medicines Regulations 2012. The grey market for ipamorelin is similar to CJC-1295 — independent product testing has documented incorrect peptide content, contamination, and identity failures across many vendors.',
  },
  summary:
    'Ipamorelin is the cleanest GHRP in clinical literature, with a benign acute side-effect profile and a clear selective mechanism. The two limiting factors are the small clinical evidence base — no completed phase-3 trial — and supply quality on the grey market. For UK readers interested in GH-axis modulation, the same caveats apply as to CJC-1295: prescriber-supervised approaches via licensed compounds are the only fully assured route.',
  references: [
    'Raun K, et al. Ipamorelin, the first selective growth hormone secretagogue. <em>Eur J Endocrinol</em>. 1998;139(5):552-561.',
    'Gobburu JV, et al. Pharmacokinetic-pharmacodynamic modelling of ipamorelin. <em>J Clin Endocrinol Metab</em>. 1999;84(7):2627-2632.',
    'Bowers CY. GH-releasing peptides: structure-function relations. <em>J Pediatr Endocrinol Metab</em>. 1996;9(suppl 3):347-358.',
    'Sigalos JT, Pastuszak AW. The safety and efficacy of growth hormone secretagogues. <em>Sex Med Rev</em>. 2018;6(1):45-53.',
    'MHRA. Note: ipamorelin has no UK marketing authorisation as of May 2026.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '9' },
    { label: 'GH peak (typical)', value: '30–55 ng/mL' },
    { label: 'Half-life', value: '~2 hours' },
    { label: 'Administration', value: 'Subcutaneous' },
    { label: 'UK legal status', value: 'Unlicensed', highlight: true },
  ],
  budgetTier: 'low',
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
