import type { Peptide } from '../types';

export const epitalon: Peptide = {
  slug: 'epitalon',
  name: 'Epitalon',
  altNames: ['Epithalon', 'Epithalamin (related parent compound)'],
  className: 'Synthetic tetrapeptide (Ala-Glu-Asp-Gly)',
  classShort: 'Tetrapeptide',
  goal: 'longevity',
  rating: 2.4,
  confidence: 'Low',
  ukLegal: 'Unlicensed',
  ukLegalNote: 'Unlicensed in the UK',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Nadia Hassan', credentials: 'PhD · Mitochondrial Biology · University of Manchester' },
  studiesReviewed: 8,
  intro:
    'A synthetic four-amino-acid peptide developed in Soviet-era Russia and intensively studied by the St Petersburg Institute of Bioregulation and Gerontology. Marketed for longevity and pineal-axis effects, but Western clinical evidence is sparse and replication outside Russia is limited.',
  tldr: [
    'Synthesised in 1990 by Russian gerontologist Vladimir Khavinson; conceived as a synthetic analogue of pineal-derived "epithalamin".',
    'Russian/Eastern-European research reports modest longevity, sleep, and metabolic effects — replication outside that research community is limited.',
    'Mechanism claims include telomerase activation; in-vitro evidence exists, in-vivo human data essentially does not.',
    'Long history of use in Russian gerontology clinics; minimal Western peer-reviewed RCT presence.',
    'UK: unlicensed. Sold via research-chemical channels.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'Epitalon (also spelled Epithalon) is a synthetic tetrapeptide with the sequence Ala-Glu-Asp-Gly. It was synthesised in 1990 by Vladimir Khavinson and colleagues at the St Petersburg Institute of Bioregulation and Gerontology, conceived as a stable synthetic analogue of "epithalamin" — a pineal-gland-derived peptide preparation studied in earlier Russian work.',
      'The compound has a long history of Russian clinical use, predominantly in gerontology contexts. The Western literature is much thinner: a small number of papers from the original Khavinson group, occasional translations of Russian work, and few independent replication studies.',
    ],
  },
  how: {
    intro:
      'The proposed mechanism centres on telomerase activation and pineal-axis modulation. In-vitro evidence supports telomerase induction in some cell lines; in-vivo translation is not well established.',
    steps: [
      { title: 'Subcutaneous injection', desc: 'Most common; sometimes intranasal in older Russian protocols.', iconKey: 'injection' },
      { title: 'Pineal-axis interaction', desc: 'Hypothesised modulation of melatonin and circadian signalling.', iconKey: 'brain' },
      { title: 'Telomerase activity', desc: 'In-vitro elevation in some cell lines; in-vivo evidence weaker.', iconKey: 'cell' },
      { title: 'Cellular effects', desc: 'Reported gene-expression and cell-cycle changes — replication uneven.', iconKey: 'receptor' },
    ],
  },
  benefits: [
    {
      heading: 'Longevity / mortality (low confidence)',
      paragraphs: [
        'A 12-year follow-up Russian study reported reduced mortality in elderly subjects given annual epitalon courses (n≈266). The trial design and lack of independent replication limit how much weight Western clinical practice can place on these results.',
      ],
    },
    {
      heading: 'Sleep and circadian effects (low confidence)',
      paragraphs: [
        'Reports of improved sleep quality and melatonin pulsatility appear in Russian literature; similar magnitude effects have not been demonstrated in Western randomised trials.',
      ],
    },
    {
      heading: 'Telomerase activity (low confidence — in vitro)',
      paragraphs: [
        'In-vitro studies in human somatic cell lines have demonstrated transient telomerase induction following epitalon exposure. Whether this translates to clinically meaningful telomere lengthening in living humans is unestablished.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'Replication is the central question',
    body:
      'Epitalon\'s evidence base is dominated by a single research community over multiple decades. The findings are consistent within that community but largely unreplicated in Western research. We are not dismissing the work — but we apply higher scrutiny than for compounds with diverse, independent replication.',
  },
  studies: [
    {
      title: 'Effect of Epithalon on biomarkers of aging in elderly subjects (12-year follow-up)',
      year: '2003',
      design: 'Long-term follow-up, Russian',
      n: '266',
      finding:
        'Annual courses of Epithalon associated with reduced overall mortality and improved markers of immune function in elderly subjects over 12 years. Trial design limits causal inference; major source for longevity claims.',
      link: 'Bull Exp Biol Med · 135(2):207-211',
      href: '#',
    },
    {
      title: 'Epitalon and telomerase activity in human somatic cells (in vitro)',
      year: '2007',
      design: 'In-vitro / cell culture',
      n: 'Cell lines',
      finding:
        'Epitalon administration induced telomerase activity in human somatic fibroblast cultures. Effect was transient and dose-dependent. Foundational in-vitro evidence for telomerase claim.',
      link: 'Neuro Endocrinol Lett · 24(1-2):9-15',
      href: '#',
    },
    {
      title: 'Khavinson V. Peptide regulation of aging: review',
      year: '2014',
      design: 'Review by original developer',
      n: 'N/A',
      finding:
        'Comprehensive review of decades of Russian work on peptide bioregulators including Epithalamin and Epitalon. Author was lead developer; treat as primary advocate perspective.',
      link: 'Adv Gerontol · 27:419-424',
      href: '#',
    },
  ],
  dosage: {
    intro:
      'No regulatory dosing exists. The schedule below summarises Russian gerontology clinic protocols; Epitalon has no UK marketing authorisation.',
    rows: [
      { phase: 'Annual course', dose: '5–10 mg / day', duration: '10–20 days', notes: 'Russian gerontology protocol' },
      { phase: 'Maintenance', dose: 'Repeat course annually', duration: '—', notes: 'Variable across reports' },
    ],
    caption: 'Source: Russian gerontology literature. No regulatory or Western trial dose protocol.',
  },
  safety: {
    intro:
      'No serious adverse events reported in available Russian literature. Acute safety appears benign at therapeutic doses. Independent long-term safety data is scarce.',
    rows: [
      { effect: 'Injection-site reaction', frequency: 'Mild', severity: 'Mild' },
      { effect: 'Headache', frequency: 'Rare', severity: 'Mild' },
      { effect: 'Long-term effects', frequency: 'Limited data', severity: 'Unknown' },
      { effect: 'Tumour-promotion (theoretical)', frequency: 'Telomerase mechanism concern', severity: 'Unstudied' },
    ],
    contraindications: 'Active malignancy (mechanism-based concern). Pregnancy. Concurrent telomerase-related research participation.',
  },
  legal: {
    title: 'Unlicensed in the UK',
    body:
      'Epitalon has no marketing authorisation in the UK or EU. It is registered for clinical use in the Russian Federation but holds no equivalent UK status. Sold in the UK and Western markets only via research-chemical channels — identity, purity, and quality are not assured.',
  },
  summary:
    'Epitalon is the prototypical "Russian peptide" for longevity contexts: a long history of clinical use within one research community, limited Western replication, and a mechanism (telomerase activation) that is biologically interesting but only partially substantiated in vivo. Mortality findings from the Russian literature are notable but require independent replication to enter Western evidence-based practice. UK readers should regard this compound as evidence-thin and supply-uncertain.',
  references: [
    'Khavinson VKh, et al. Effect of bioregulators on the indicators of biological age. <em>Bull Exp Biol Med</em>. 2003;135(2):207-211.',
    'Khavinson VKh. Peptides and aging. <em>Neuro Endocrinol Lett</em>. 2002;23(suppl 3):11-144.',
    'Khavinson VKh. Peptide regulation of aging. <em>Adv Gerontol</em>. 2014;27:419-424.',
    'Anisimov VN, et al. Effects of synthetic tetrapeptide Epitalon on biomarkers of aging. <em>Mech Ageing Dev</em>. 2003;124(7):785-794.',
    'MHRA. Note: Epitalon has no UK marketing authorisation as of May 2026.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '8' },
    { label: 'Western RCTs published', value: '0' },
    { label: 'Half-life', value: 'Hours (estimated)' },
    { label: 'Administration', value: 'Subcutaneous, intranasal' },
    { label: 'UK legal status', value: 'Unlicensed', highlight: true },
  ],
  budgetTier: 'low',
  timelineFit: ['long'],
  riskFit: ['higher'],
  experienceFit: ['experienced'],
  compareWith: [],
  relatedGuides: [],
};
