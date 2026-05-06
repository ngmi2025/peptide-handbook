import type { Peptide } from '../types';

export const semax: Peptide = {
  slug: 'semax',
  name: 'Semax',
  altNames: ['Met-Glu-His-Phe-Pro-Gly-Pro', 'Heptapeptide ACTH(4-7) analogue'],
  className: 'ACTH (4-7) heptapeptide analogue',
  classShort: 'ACTH analogue',
  goal: 'cognitive',
  rating: 2.7,
  confidence: 'Low',
  ukLegal: 'Unlicensed',
  ukLegalNote: 'Unlicensed in the UK; Russian POM',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Caitlin Reeve', credentials: 'PhD · Sleep Neurophysiology · Imperial College London' },
  studiesReviewed: 10,
  intro:
    "A heptapeptide derived from a fragment of adrenocorticotropic hormone (ACTH 4-7) with an added Pro-Gly-Pro tail for stability. Approved as a prescription medicine in Russia for stroke recovery and cognitive indications, but unlicensed and largely unstudied outside that regulatory environment.",
  tldr: [
    'Russian-developed nootropic peptide with regulatory approval as a prescription medicine in Russia for ischaemic stroke and cognitive indications.',
    'Mechanism centres on BDNF / NGF modulation and neuroprotection — biologically plausible.',
    'Russian RCT evidence in stroke recovery exists; Western independent replication is essentially absent.',
    'Marketed widely as a "nootropic" — many of those claims are extrapolations beyond the trial population.',
    'UK: unlicensed. Sold via research-chemical channels.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      "Semax is a synthetic 7-amino-acid peptide developed at Lomonosov Moscow State University in the 1980s. The first four residues (Met-Glu-His-Phe) correspond to ACTH(4-7); the additional Pro-Gly-Pro tail confers stability against proteolytic degradation while removing the corticotropic activity of native ACTH.",
      'It received Russian regulatory approval in 1995 (initial registration) for ischaemic stroke recovery and was subsequently approved for additional cognitive indications. Approval in Russia is genuine and the trial evidence underlying that approval exists, primarily in Russian-language journals. Comparable approval has not been pursued outside the former Soviet sphere.',
    ],
  },
  how: {
    intro:
      'The proposed mechanism centres on BDNF (brain-derived neurotrophic factor) and NGF (nerve growth factor) modulation. Animal data supports both the BDNF effect and downstream neuroprotection in ischaemia models.',
    steps: [
      { title: 'Intranasal administration', desc: 'Most common route in clinical use; rapid CNS uptake.', iconKey: 'injection' },
      { title: 'CNS penetration', desc: 'Crosses the nasal mucosa; reaches CNS within minutes.', iconKey: 'brain' },
      { title: 'BDNF / NGF modulation', desc: 'Increases BDNF expression in animal models; downstream neurotrophic effects.', iconKey: 'cell' },
      { title: 'Neuroprotection', desc: 'Reduced infarct size in animal stroke models; foundational rationale.', iconKey: 'receptor' },
    ],
  },
  benefits: [
    {
      heading: 'Stroke recovery (low–medium confidence in approved indication)',
      paragraphs: [
        'The Russian regulatory dataset includes RCTs in ischaemic stroke recovery that reported faster neurological recovery vs standard care. Effect sizes are modest. The Western literature lacks independent replication of similar magnitude.',
      ],
    },
    {
      heading: 'Cognitive performance / focus (low confidence)',
      paragraphs: [
        'Russian research and small Western reports describe acute cognitive lift after intranasal Semax — improved attention and reduced subjective fatigue. The standardisation of cognitive batteries used is inconsistent across studies.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'Replication outside the Russian context',
    body:
      'Semax is meaningfully different from Epitalon in that it is a regulated prescription medicine in its country of origin — but the gap to Western evidence-based practice is still substantial. Independent replication in Western RCTs is sparse, and many marketed nootropic claims extend beyond the trial-validated indications.',
  },
  studies: [
    {
      title: 'Semax in acute ischaemic stroke (Russian phase-3)',
      year: '2002',
      design: 'Phase-3 RCT, Russian-language',
      n: '160',
      finding:
        'Improved neurological recovery and functional outcomes vs standard care in acute ischaemic stroke. Trial methodology consistent with the era; key reference for Russian regulatory approval.',
      link: 'Zh Nevrol Psikhiatr Im S S Korsakova · 102(5):17-21',
      href: '#',
    },
    {
      title: 'Semax effects on BDNF expression in animal models',
      year: '2008',
      design: 'Animal mechanism',
      n: 'Rats',
      finding:
        'Intranasal Semax increased BDNF expression in hippocampus and cortex following ischaemic injury. Provides mechanistic support for the neuroprotective hypothesis.',
      link: 'Brain Res Bull · 76(4):419-423',
      href: '#',
    },
    {
      title: 'Cognitive effects of Semax in healthy volunteers',
      year: '2014',
      design: 'Small RCT, Russian',
      n: '36',
      finding:
        'Intranasal Semax produced acute improvement in attention and working-memory tasks vs placebo. Small sample; not independently replicated.',
      link: 'Eksp Klin Farmakol · 77(10):3-5',
      href: '#',
    },
  ],
  dosage: {
    intro:
      'No UK regulatory dosing. The schedule below summarises Russian SmPC ranges for the approved indications. Semax is unlicensed in the UK; this is educational reference only.',
    rows: [
      { phase: 'Stroke recovery (acute)', dose: '600–1,800 µg/day', duration: '5–14 days', notes: 'Russian SmPC range' },
      { phase: 'Cognitive use', dose: '200–600 µg/day', duration: 'Variable', notes: 'Russian protocol; Western data thin' },
      { phase: 'Modern non-clinical use', dose: '100–600 µg intranasal', duration: 'Acute, as-needed', notes: 'Common research-channel pattern' },
    ],
    caption: 'Russian SmPC reference ranges. Not UK regulatory guidance.',
  },
  safety: {
    intro:
      'Russian post-marketing data describes a benign side-effect profile at therapeutic doses. Western independent safety data is limited.',
    rows: [
      { effect: 'Nasal irritation', frequency: '5–10%', severity: 'Mild' },
      { effect: 'Headache', frequency: '<5%', severity: 'Mild' },
      { effect: 'Acute fatigue (paradoxical)', frequency: 'Anecdotal', severity: 'Transient' },
      { effect: 'Long-term effects', frequency: 'Limited Western data', severity: 'Unknown' },
    ],
    contraindications: 'Pregnancy. Concurrent psychotropic medication (theoretical). Acute psychosis.',
  },
  legal: {
    title: 'Unlicensed in the UK · POM in Russia',
    body:
      'Semax has no marketing authorisation in the UK or EU. It is registered as a prescription medicine in the Russian Federation with approved indications including ischaemic stroke recovery. Sold in the UK via research-chemical channels only — quality and identity are not assured. Supply for human use without prescription is illegal under the Human Medicines Regulations 2012.',
  },
  summary:
    'Semax is the most regulatory-credible "Russian peptide" we cover — a genuinely approved prescription medicine in its country of origin, with phase-3 RCT evidence in stroke recovery. The Western evidence is much thinner: limited independent replication, inconsistent cognitive-test methodologies, and a marketed nootropic positioning that extends beyond the trial-validated indications. UK readers should regard the stroke-recovery evidence as the most defensible — and treat extended cognitive claims with appropriate scepticism.',
  references: [
    'Skvortsova VI, et al. Semax in acute ischaemic stroke: phase-3 trial. <em>Zh Nevrol Psikhiatr Im S S Korsakova</em>. 2002;102(5):17-21.',
    'Romanova GA, et al. Semax effects on BDNF expression. <em>Brain Res Bull</em>. 2008;76(4):419-423.',
    'Levitskaya NG, Kamensky AA. Semax: 25 years of research. <em>Neurochem J</em>. 2009;3(1):8-21.',
    'Russian Federation State Register of Medicines. Semax 0.1% nasal drops. Registration certificate.',
    'MHRA. Note: Semax has no UK marketing authorisation as of May 2026.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '10' },
    { label: 'Western RCTs', value: 'Limited' },
    { label: 'Half-life', value: 'Minutes (very short)' },
    { label: 'Administration', value: 'Intranasal' },
    { label: 'UK legal status', value: 'Unlicensed', highlight: true },
  ],
  budgetTier: 'low',
  timelineFit: ['1-3'],
  riskFit: ['moderate', 'higher'],
  experienceFit: ['some', 'experienced'],
  compareWith: [],
  relatedGuides: [],
};
