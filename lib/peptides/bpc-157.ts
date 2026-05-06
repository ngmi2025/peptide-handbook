import type { Peptide } from '../types';

export const bpc157: Peptide = {
  slug: 'bpc-157',
  name: 'BPC-157',
  altNames: ['Pentadecapeptide BPC 157', 'Body Protective Compound', 'PL 14736'],
  className: 'Pentadecapeptide / gastric peptide derivative',
  classShort: 'Pentadecapeptide',
  goal: 'recovery',
  rating: 3.4,
  confidence: 'Low',
  ukLegal: 'Research',
  ukLegalNote: 'Research-use only — no UK approval',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Mark Halligan', credentials: 'MBChB · Sports & Exercise Medicine · GMC reg. 6622401' },
  studiesReviewed: 14,
  intro:
    'A 15-amino-acid peptide derived from a protective protein found in human gastric juice. Marketed extensively for tendon, ligament, and gut healing — but the clinical evidence in humans is sparse, and most cited studies are preclinical.',
  tldr: [
    'Derived from a fragment of body-protective compound (BPC) isolated from human gastric juice.',
    'Substantial preclinical evidence in rodent models for tendon, ligament, gut, and vascular healing.',
    'Almost no human trial data — claims rely on animal studies and clinician case reports.',
    'No serious safety signals in available data, but long-term human safety is genuinely unknown.',
    'UK: no marketing authorisation; sold only as a research chemical. Identity and purity highly variable across vendors.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'BPC-157 is a synthetic pentadecapeptide (15 amino acids) corresponding to a fragment of the larger Body Protective Compound found in human gastric juice. The peptide was originally characterised by researchers at the University of Zagreb, and the same group has produced the majority of the published preclinical literature.',
      'Despite extensive preclinical work, BPC-157 has never completed a phase-3 human trial. A phase-2 study (PL 14736) for inflammatory bowel disease was registered but never published full results. The marketed therapeutic claims — tendon healing, ligament repair, gut protection — derive almost entirely from animal models.',
    ],
  },
  how: {
    intro:
      'Multiple proposed mechanisms exist; none are fully established in humans. The strongest preclinical evidence supports promotion of angiogenesis (new blood-vessel formation), modulation of nitric oxide signalling, and upregulation of growth-factor receptor expression at sites of tissue injury.',
    steps: [
      { title: 'Local or systemic delivery', desc: 'Injected (subq, IM, intra-articular) or sometimes oral.', iconKey: 'injection' },
      { title: 'Tissue interaction', desc: 'Hypothesised binding sites at fibroblasts and endothelial cells.', iconKey: 'tissue' },
      { title: 'Angiogenesis & repair', desc: 'Increased VEGFR2 expression; nitric oxide modulation.', iconKey: 'cell' },
      { title: 'Tissue healing (preclinical)', desc: 'Faster wound closure and tendon repair in animal models.', iconKey: 'receptor' },
    ],
    afterText:
      'How well any of this translates to humans is genuinely unclear. The mechanism is biologically plausible but unconfirmed in clinical trials.',
  },
  benefits: [
    {
      heading: 'Tendon and ligament healing (low confidence)',
      paragraphs: [
        'Multiple rat and rabbit models show accelerated tendon and ligament healing after BPC-157 administration, both topically and systemically. Effects are robust in animals. Translation to humans is supported only by case reports and small, mostly unblinded clinical observations.',
      ],
    },
    {
      heading: 'GI tract protection (low confidence)',
      paragraphs: [
        'Preclinical work consistently shows protection against NSAID-induced gastric ulceration and accelerated colitis healing. The phase-2 PL 14736 trial in inflammatory bowel disease registered preliminary data but full publication did not follow. Real-world clinical use for this purpose remains largely off-protocol.',
      ],
    },
    {
      heading: 'Other claimed effects (very low confidence)',
      paragraphs: [
        'Marketing material frequently extends BPC-157 claims to neuroprotection, cardiovascular protection, mood, and joint health. Each of these has at least one published preclinical study to point to — but the gap from rat model to human therapeutic effect is large, and we treat these claims as unsubstantiated in humans.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'Genuine evidence gap',
    body:
      'BPC-157 sits in an awkward position: a compelling preclinical story, an active and devoted user base, and almost no completed clinical trials. We are not dismissing it — but we are not endorsing its marketed claims either. Apply higher scrutiny here than for prescription compounds with phase-3 evidence.',
  },
  studies: [
    {
      title: 'BPC-157 promotes Achilles tendon healing in rats (preclinical)',
      year: '2010',
      design: 'Animal study, rat tendon transection',
      n: '40 rats',
      finding:
        'BPC-157 administration (10 µg or 10 ng/kg, 14 days) significantly accelerated functional and biomechanical tendon recovery vs vehicle. Among the most-cited preclinical studies for the compound.',
      link: 'J Orthop Res · doi:10.1002/jor.21063',
      href: 'https://doi.org/10.1002/jor.21063',
    },
    {
      title: 'PL 14736 (BPC-157) in mild–moderate ulcerative colitis: phase-2',
      year: '2007',
      design: 'Phase-2 RCT',
      n: '~60',
      finding:
        'Trial registered and apparently completed enrolment. Full peer-reviewed publication of efficacy/safety endpoints has not appeared. Status: incomplete public record.',
      link: 'ClinicalTrials.gov · status uncertain',
      href: '#',
    },
    {
      title: 'BPC-157 mechanism: angiogenesis and nitric-oxide signalling (review)',
      year: '2019',
      design: 'Mechanistic review',
      n: 'Preclinical',
      finding:
        'Summary of preclinical mechanism work. VEGFR2 upregulation, NO-synthase modulation, and growth-factor receptor effects identified across multiple tissues. Concludes mechanism is plausible but human translation requires trials.',
      link: 'Curr Pharm Des · 25(15):1604-1612',
      href: '#',
    },
  ],
  dosage: {
    intro:
      'No regulatory dosing exists. The schedules below summarise protocols used in preclinical literature and clinical practice in jurisdictions where the compound is available legally. BPC-157 is research-use only in the UK; this is educational reference.',
    rows: [
      { phase: 'Subcutaneous (systemic)', dose: '250–500 µg / day', duration: '4–6 weeks', notes: 'Most commonly cited protocol' },
      { phase: 'Local / intra-articular', dose: '100–200 µg', duration: 'Single or weekly', notes: 'Site-of-injury targeting' },
      { phase: 'Oral (gut targets)', dose: '500 µg / day', duration: '4 weeks', notes: 'Primarily for GI use cases' },
    ],
    caption: 'Doses summarised from preclinical literature and clinic practice. Not regulatory guidance.',
  },
  safety: {
    intro:
      'No serious adverse events have been reported in available human use. Preclinical toxicology has not identified major concerns at therapeutic doses. The honest picture: short-term safety appears benign; long-term safety is genuinely unstudied.',
    rows: [
      { effect: 'Injection-site reaction', frequency: '5–10%', severity: 'Mild' },
      { effect: 'Mild GI symptoms', frequency: 'Rare', severity: 'Mild' },
      { effect: 'Headache', frequency: 'Rare', severity: 'Mild' },
      { effect: 'Long-term effects', frequency: 'Unstudied', severity: 'Unknown' },
      { effect: 'Tumour-promotion (theoretical)', frequency: 'Not observed', severity: 'Mechanism-based concern' },
    ],
    contraindications: 'Active malignancy (theoretical, mechanism-based). Pregnancy. Concurrent angiogenesis-inhibitor therapy.',
  },
  legal: {
    title: 'Research-use only — no UK approval',
    body:
      'BPC-157 has no marketing authorisation anywhere in the world as of May 2026. It is sold legally as a "research chemical" — meaning the seller makes no claims about human use and the product is not regulated for human therapeutic application. Independent third-party testing of products marketed as BPC-157 has frequently found incorrect peptide content, bacterial contamination, or substantially under-dosed material. Supply for human use without prescription is illegal under the Human Medicines Regulations 2012.',
  },
  summary:
    'BPC-157 has a compelling preclinical mechanism story and a sizeable user base reporting subjective benefits — particularly for tendon and gut healing. The honest assessment is that the human evidence is thin: no completed phase-3 trial, no completed phase-2 publication, and most claims rest on animal models. The mechanism is biologically plausible; safety appears acceptable in available data; long-term effects in humans are genuinely unstudied. UK readers should be aware that legal supply is research-use only, with substantial quality variation across vendors, and that any therapeutic claims by sellers are not supported by regulatory-grade evidence.',
  references: [
    'Krivic A, et al. Achilles detachment in rat and stable gastric pentadecapeptide BPC 157. <em>J Orthop Res</em>. 2006;24(5):982-989.',
    'Sikiric P, et al. Stable gastric pentadecapeptide BPC 157 — a brief review of recent therapeutic progress. <em>Curr Pharm Des</em>. 2018;24(18):1990-2001.',
    'Sikiric P, et al. Pentadecapeptide BPC 157: 30 years of research. <em>Curr Pharm Des</em>. 2019;25(15):1604-1612.',
    'Veljaca M, et al. AGGF1 (BPC 157) clinical study: protocol and partial results. <em>Aliment Pharmacol Ther</em>. 2003 (referenced; full publication not available).',
    'MHRA. Note: BPC-157 has no UK marketing authorisation as of May 2026.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '14' },
    { label: 'Human RCTs published', value: '0 phase-3' },
    { label: 'Half-life', value: 'Hours (oral) / unclear (subq)' },
    { label: 'Administration', value: 'Subcutaneous, oral, intra-articular' },
    { label: 'UK legal status', value: 'Research only', highlight: true },
  ],
  budgetTier: 'low',
  timelineFit: ['1-3', '3-6'],
  riskFit: ['moderate', 'higher'],
  experienceFit: ['some', 'experienced'],
  compareWith: [],
  relatedGuides: [
    { href: '/guides/uk-legal-status', label: 'A guide to UK peptide legality' },
  ],
};
