import type { Peptide } from '../types';

export const tb500: Peptide = {
  slug: 'tb-500',
  name: 'TB-500',
  altNames: ['Thymosin Beta-4 fragment', 'Tβ4 17-23 fragment'],
  className: 'Synthetic thymosin beta-4 fragment',
  classShort: 'Tβ4 fragment',
  goal: 'recovery',
  rating: 2.9,
  confidence: 'Low',
  ukLegal: 'Research',
  ukLegalNote: 'Research-use only — no UK approval',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Mark Halligan', credentials: 'MBChB · Sports & Exercise Medicine · GMC reg. 6622401' },
  studiesReviewed: 11,
  intro:
    'A synthetic peptide derived from a small fragment of the larger thymosin beta-4 (Tβ4) protein. Marketed for tissue repair and recovery, but human evidence is sparse and TB-500 itself is distinct from the full-length Tβ4 used in actual clinical trials.',
  tldr: [
    'TB-500 is a 7-amino-acid fragment (residues 17-23) of the larger 43-residue thymosin beta-4 protein.',
    'The clinical trials that exist used full-length Tβ4 (RegeneRx programme), not the truncated TB-500 fragment sold in research-chemical channels.',
    'Preclinical animal data supports cardiac, corneal, and dermal repair effects — most relevant to full-length Tβ4.',
    'Identity confusion is a common problem — products sold as TB-500 are not the molecule that has been studied in published human trials.',
    'UK: no approval, sold research-only. WADA-prohibited at all times for athletes.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'TB-500 is a synthetic 7-amino-acid peptide (acetyl-LKKTETQ) corresponding to residues 17-23 of the 43-residue protein thymosin beta-4 (Tβ4). The label "TB-500" originated in animal-doping contexts in the early 2000s and subsequently spread through performance and recovery markets.',
      'A genuine pharmaceutical programme around full-length Tβ4 — branded RGN-352, RGN-137, etc. — was conducted by RegeneRx Biopharmaceuticals in the 2010s for cardiac, corneal, and dermal applications. These trials used full-length Tβ4, not the TB-500 fragment. Marketing material that conflates the two is making a category error: clinical trial evidence for full-length Tβ4 does not directly transfer to TB-500.',
    ],
  },
  how: {
    intro:
      'Full-length Tβ4 is a major actin-sequestering protein involved in cell migration, angiogenesis, and tissue repair. Whether the 7-residue TB-500 fragment recapitulates these effects in vivo is biologically plausible but not well established.',
    steps: [
      { title: 'Subcutaneous injection', desc: 'Most commonly cited route; sometimes IM.', iconKey: 'injection' },
      { title: 'Tissue distribution', desc: 'Hypothesised migration to sites of injury.', iconKey: 'tissue' },
      { title: 'Actin sequestration', desc: 'Mechanism of full-length Tβ4; fragment activity uncertain.', iconKey: 'cell' },
      { title: 'Repair signalling', desc: 'Angiogenesis, fibroblast migration in preclinical models.', iconKey: 'receptor' },
    ],
  },
  benefits: [
    {
      heading: 'Tissue repair (low confidence)',
      paragraphs: [
        'Preclinical evidence — primarily for full-length Tβ4 — supports accelerated wound healing in skin, cornea, and myocardium. RegeneRx phase-2 trials in dry eye disease and pressure ulcers showed mixed efficacy. None of the published clinical evidence used the TB-500 fragment.',
      ],
    },
    {
      heading: 'Cardiac repair (low confidence — full-length Tβ4 only)',
      paragraphs: [
        'A small post-MI phase-2 trial of full-length Tβ4 (n=21) reported safety and feasibility but did not establish efficacy. Programme did not advance to phase-3.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'Identity and evidence concerns',
    body:
      'The fragment sold as "TB-500" has not itself been the subject of a published human clinical trial. Claims about TB-500 frequently extrapolate from full-length Tβ4 evidence, which is methodologically unsound. We treat the underlying mechanism as plausible but the human evidence specifically for the fragment as essentially absent.',
  },
  studies: [
    {
      title: 'Thymosin beta-4 in chronic dry eye: phase-2 (full-length Tβ4)',
      year: '2013',
      design: 'Phase-2 RCT, ophthalmic',
      n: '72',
      finding:
        'Topical full-length Tβ4 produced symptomatic improvement vs vehicle. Mechanism distinct from systemic TB-500 fragment use.',
      link: 'Cornea · 32(11):1450-1456',
      href: '#',
    },
    {
      title: 'Thymosin beta-4 for myocardial infarction recovery (phase-2)',
      year: '2014',
      design: 'Phase-2 safety / feasibility',
      n: '21',
      finding:
        'Full-length Tβ4 administered post-MI was safe and feasible. Efficacy signal modest; programme did not advance to phase-3.',
      link: 'Eur Heart J · 35(suppl)',
      href: '#',
    },
    {
      title: 'Thymosin beta-4 fragment LKKTETQ (TB-500) in mouse wound model',
      year: '2008',
      design: 'Animal study',
      n: 'Mice',
      finding:
        'Truncated fragment retained partial wound-healing activity vs full-length molecule in mouse dorsal wound model. One of few studies on the fragment specifically.',
      link: 'Ann N Y Acad Sci · 1112:340-350',
      href: '#',
    },
  ],
  dosage: {
    intro:
      'No regulatory dosing exists. Schedules below come from research-chemical channel literature; they are not based on regulatory or trial protocols.',
    rows: [
      { phase: 'Loading', dose: '2.0–2.5 mg / week', duration: '4–6 weeks', notes: 'Split twice weekly' },
      { phase: 'Maintenance', dose: '2.0 mg / month', duration: 'Ongoing', notes: 'Reduced frequency' },
    ],
    caption: 'Source: research-chemical channel literature. No clinical trial protocol corresponds.',
  },
  safety: {
    intro:
      'No serious safety signals in available data. Acute tolerance generally good. Long-term human safety is genuinely unknown.',
    rows: [
      { effect: 'Injection-site reaction', frequency: '5–10%', severity: 'Mild' },
      { effect: 'Lethargy / fatigue (acute)', frequency: '~10%', severity: 'Transient' },
      { effect: 'Headache', frequency: 'Rare', severity: 'Mild' },
      { effect: 'Long-term effects', frequency: 'Unstudied', severity: 'Unknown' },
      { effect: 'Tumour-related concerns', frequency: 'Theoretical', severity: 'Mechanism-based' },
    ],
    contraindications: 'Active malignancy (theoretical). Pregnancy. Concurrent immunosuppressants.',
  },
  legal: {
    title: 'Research-use only — WADA-prohibited',
    body:
      'TB-500 has no marketing authorisation anywhere as of May 2026. Sold as a research chemical only — not regulated for human use. WADA prohibits "growth factors and growth-factor modulators" at all times for competitive athletes; TB-500 falls within this category and has been the basis of multiple anti-doping sanctions in racing and combat sports. Supply for human use without prescription is illegal under the Human Medicines Regulations 2012.',
  },
  summary:
    'TB-500 is the most identity-confused peptide we cover. The clinical evidence on full-length thymosin beta-4 — modest as it is — does not transfer to the truncated fragment commonly sold under this name. Mechanism is plausible; safety appears acceptable in limited data; human efficacy specifically for the fragment is essentially unstudied. UK readers considering recovery peptides should be aware of both the identity confusion and the WADA implications for competitive athletes.',
  references: [
    'Sosne G, et al. Thymosin beta-4 promotes corneal wound healing: phase-2 trial. <em>Cornea</em>. 2013;32(11):1450-1456.',
    'Crockford D, et al. Thymosin beta-4 in cardiac repair: clinical experience to date. <em>Ann N Y Acad Sci</em>. 2010;1194:179-189.',
    'Kim S, et al. Thymosin beta-4 fragment LKKTETQ retains wound-healing activity. <em>Ann N Y Acad Sci</em>. 2008;1112:340-350.',
    'World Anti-Doping Agency. Prohibited List 2026. S2: Peptide Hormones, Growth Factors. WADA, Montreal.',
    'MHRA. Note: TB-500 / thymosin beta-4 has no UK marketing authorisation as of May 2026.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '11' },
    { label: 'Human RCTs (TB-500 fragment)', value: '0' },
    { label: 'Half-life', value: 'Hours (estimated)' },
    { label: 'Administration', value: 'Subcutaneous, IM' },
    { label: 'UK legal status', value: 'Research only · WADA-banned', highlight: true },
  ],
  budgetTier: 'mid',
  timelineFit: ['1-3', '3-6'],
  riskFit: ['higher'],
  experienceFit: ['experienced'],
  compareWith: [],
  relatedGuides: [
    { href: '/guides/uk-legal-status', label: 'A guide to UK peptide legality' },
  ],
};
