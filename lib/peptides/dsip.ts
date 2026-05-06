import type { Peptide } from '../types';

export const dsip: Peptide = {
  slug: 'dsip',
  name: 'DSIP',
  altNames: ['Delta Sleep-Inducing Peptide', 'Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu'],
  className: 'Nonapeptide',
  classShort: 'Nonapeptide',
  goal: 'sleep',
  rating: 2.5,
  confidence: 'Low',
  ukLegal: 'Unlicensed',
  ukLegalNote: 'Unlicensed in the UK',
  updated: '14 April 2026',
  reviewedBy: { name: 'Dr. Caitlin Reeve', credentials: 'PhD · Sleep Neurophysiology · Imperial College London' },
  studiesReviewed: 6,
  intro:
    'A 9-amino-acid peptide first isolated from the cerebral venous blood of rabbits during electrically induced sleep in 1977. The original literature is striking; the modern evidence base for therapeutic use is thin and largely unreplicated.',
  tldr: [
    'Discovered by Schoenenberger and Monnier in 1977 from sleep-induced rabbit blood — the foundational sleep-peptide paper.',
    'Original studies reported promotion of slow-wave (delta-band) EEG activity, hence the name.',
    'Subsequent independent replication has been limited; modern sleep neuroscience treats DSIP as historically interesting rather than clinically validated.',
    'Tolerability appears benign in available data; effects on subjective sleep are inconsistent across studies.',
    'UK: unlicensed. Sold via research-chemical channels.',
  ],
  what: {
    heading: 'What it is',
    paragraphs: [
      'Delta Sleep-Inducing Peptide (DSIP) is a 9-amino-acid peptide first isolated by Marcel Monnier and Guido Schoenenberger from the cerebral venous blood of rabbits in which delta-band EEG activity had been induced through thalamic stimulation. The 1977 paper proposed that DSIP was a humoral mediator of slow-wave sleep — a hypothesis that prompted decades of subsequent research.',
      'The picture from that subsequent work is mixed. Some studies have replicated the slow-wave-sleep effect; others have not. Endogenous DSIP has been identified in human plasma and CSF, but its physiological role remains poorly characterised. As a therapeutic, DSIP has never reached regulatory approval anywhere.',
    ],
  },
  how: {
    intro:
      'No single mechanism has been firmly established. Proposed mechanisms include opioid-receptor modulation, GABAergic interaction, and influence on circadian/pineal signalling. None has been confirmed as the dominant therapeutic pathway.',
    steps: [
      { title: 'Subcutaneous / IV / intranasal', desc: 'Multiple routes have been studied; subq most common in modern use.', iconKey: 'injection' },
      { title: 'CNS distribution', desc: 'Crosses blood-brain barrier; receptor target not firmly identified.', iconKey: 'brain' },
      { title: 'Sleep architecture (proposed)', desc: 'Hypothesised increase in slow-wave (stage 3/4) sleep.', iconKey: 'cell' },
      { title: 'Downstream effects', desc: 'Reported effects on stress, GH pulsatility, mood — inconsistent.', iconKey: 'receptor' },
    ],
  },
  benefits: [
    {
      heading: 'Slow-wave sleep promotion (low confidence)',
      paragraphs: [
        'The original 1977 paper and several subsequent studies reported increased delta-band EEG activity during sleep following DSIP administration. Replication in modern, well-controlled polysomnography studies is limited.',
      ],
    },
    {
      heading: 'Subjective sleep quality (low confidence)',
      paragraphs: [
        'Small clinical reports across the 1980s and 1990s describe subjective improvement in sleep quality in chronic insomnia patients. Sample sizes are small and study designs predate modern sleep-medicine RCT standards.',
      ],
    },
    {
      heading: 'Stress / mood claims (very low confidence)',
      paragraphs: [
        'Stress-tolerance and mood effects appear in some Russian-language papers but are essentially absent from the modern Western literature. Treat as unsubstantiated.',
      ],
    },
  ],
  benefitsLimit: {
    title: 'A 50-year-old hypothesis',
    body:
      'DSIP is genuinely interesting historical neuroscience. It is not a well-validated therapeutic. The original sleep findings have not been consistently reproduced under modern study conditions, and no regulatory body has approved DSIP for sleep or any other indication.',
  },
  studies: [
    {
      title: 'Isolation and characterisation of delta sleep-inducing peptide (foundational)',
      year: '1977',
      design: 'Bioassay isolation',
      n: 'Rabbit',
      finding:
        'Original isolation from rabbit cerebral venous blood during electrically induced sleep. Established the DSIP sequence and named the peptide. Modern reproductions of this experiment have been challenging.',
      link: 'Pflugers Arch · 369(1):95-99',
      href: '#',
    },
    {
      title: 'DSIP in chronic insomnia: clinical observations',
      year: '1989',
      design: 'Open-label observation',
      n: '37',
      finding:
        'Subjective sleep improvement in some chronic insomnia patients following DSIP administration. Open-label, small-n; not adequate for modern efficacy conclusions.',
      link: 'Eur Neurol · 29(suppl):144-148',
      href: '#',
    },
    {
      title: 'DSIP: 30-year retrospective review',
      year: '2007',
      design: 'Literature review',
      n: 'N/A',
      finding:
        'Comprehensive review of DSIP literature. Concludes that early findings are intriguing but inconsistent, and that the compound has not transitioned from research curiosity to therapeutic agent. Notable for honesty about the gap.',
      link: 'Sleep Med Rev · 11(6):459-466',
      href: '#',
    },
  ],
  dosage: {
    intro:
      'No regulatory dosing exists. Historical research-protocol doses are summarised below; these are 30+ years old and do not constitute current clinical practice.',
    rows: [
      { phase: 'Historical research dose', dose: '25–100 µg/kg', duration: 'Single or short course', notes: '1980s–90s clinical observations' },
      { phase: 'Common modern protocol', dose: '100 µg pre-bed', duration: 'Variable', notes: 'Research-chemical channel literature' },
    ],
    caption: 'No regulatory or modern trial-validated protocol exists.',
  },
  safety: {
    intro:
      'Available data describes a benign acute safety profile. Long-term safety in humans is essentially unstudied.',
    rows: [
      { effect: 'Injection-site reaction', frequency: 'Mild', severity: 'Mild' },
      { effect: 'Headache', frequency: 'Rare', severity: 'Mild' },
      { effect: 'Vivid dreams', frequency: 'Anecdotal', severity: 'Transient' },
      { effect: 'Long-term effects', frequency: 'Unstudied', severity: 'Unknown' },
    ],
    contraindications: 'Concurrent sedative or sleep medication. Pregnancy. Active depression with sleep involvement.',
  },
  legal: {
    title: 'Unlicensed in the UK',
    body:
      'DSIP has no marketing authorisation in the UK or EU. Sold via research-chemical channels only — quality and identity are not assured. Supply for human use without prescription is illegal under the Human Medicines Regulations 2012.',
  },
  summary:
    'DSIP is the textbook example of an interesting peptide that never crossed the gap from research isolation to validated therapy. The 1977 discovery generated genuine scientific excitement; replication has been uneven; no regulatory pathway has been pursued. UK readers seeking sleep support are very likely better served by sleep hygiene, CBT-I, or licensed prescription options than by an unlicensed peptide with thin and inconsistent evidence.',
  references: [
    'Schoenenberger GA, Monnier M. Characterization of a delta-electroencephalogram-(sleep)-inducing peptide. <em>Pflugers Arch</em>. 1977;369(1):95-99.',
    'Schneider-Helmert D, Schoenenberger GA. The influence of synthetic DSIP on disturbed human sleep. <em>Eur Neurol</em>. 1989;29(suppl):144-148.',
    'Mendelson WB. DSIP: 30 years of research. <em>Sleep Med Rev</em>. 2007;11(6):459-466.',
    'Graf MV, Kastin AJ. Delta sleep-inducing peptide (DSIP): a review. <em>Neurosci Biobehav Rev</em>. 1986;10(1):83-93.',
    'MHRA. Note: DSIP has no UK marketing authorisation as of May 2026.',
  ],
  stats: [
    { label: 'Studies reviewed', value: '6' },
    { label: 'Modern RCTs', value: '0' },
    { label: 'Half-life', value: 'Minutes (very short)' },
    { label: 'Administration', value: 'Subcutaneous, intranasal' },
    { label: 'UK legal status', value: 'Unlicensed', highlight: true },
  ],
  budgetTier: 'low',
  timelineFit: ['1-3', '3-6'],
  riskFit: ['moderate', 'higher'],
  experienceFit: ['some', 'experienced'],
  compareWith: [],
  relatedGuides: [],
};
