import type { Confidence } from './types';

export type CompareSection = {
  id: string;
  label: string;
  heading: string;
  subheading?: string;
  body?: string[];
  table?: { columns: string[]; rows: (string | { html: string })[][]; caption?: string };
  callout?: { kind: 'limit' | 'legal'; title: string; body: string };
};

export type Comparison = {
  slug: string;
  leftSlug: string;
  rightSlug: string;
  title: string;
  subtitle: string;
  intro: string;
  left: ComparisonSide;
  right: ComparisonSide;
  sections: CompareSection[];
  verdict: {
    headline: string;
    paragraphs: string[];
    leftLane: { title: string; body: string };
    rightLane: { title: string; body: string };
  };
  references: string[];
  updated: string;
};

export type ComparisonSide = {
  name: string;
  altNames: string;
  className: string;
  rating: number;
  confidence: Confidence;
  rows: { label: string; value: string }[];
};

export const COMPARISONS: Comparison[] = [
  {
    slug: 'tirzepatide-vs-semaglutide',
    leftSlug: 'tirzepatide',
    rightSlug: 'semaglutide',
    title: 'Tirzepatide vs Semaglutide',
    subtitle: 'Head-to-head review',
    intro:
      "Two of the most-discussed peptides in UK weight management. Here's where each one sits on the evidence — without the marketing.",
    left: {
      name: 'Tirzepatide',
      altNames: 'Mounjaro · Zepbound · LY3298176',
      className: 'GLP-1 / GIP receptor agonist',
      rating: 4.6,
      confidence: 'High',
      rows: [
        { label: 'First approved', value: '2022' },
        { label: 'Mean weight reduction', value: '−20.9%' },
        { label: 'Half-life', value: '~5 days' },
        { label: 'UK status', value: 'POM' },
      ],
    },
    right: {
      name: 'Semaglutide',
      altNames: 'Wegovy · Ozempic · Rybelsus',
      className: 'GLP-1 receptor agonist',
      rating: 4.3,
      confidence: 'High',
      rows: [
        { label: 'First approved', value: '2017' },
        { label: 'Mean weight reduction', value: '−14.9%' },
        { label: 'Half-life', value: '~7 days' },
        { label: 'UK status', value: 'POM' },
      ],
    },
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        heading: 'Overview at a glance',
        subheading: 'The headline numbers, side by side.',
        table: {
          columns: ['', 'Tirzepatide', 'Semaglutide'],
          rows: [
            ['Mechanism', 'Dual GIP + GLP-1 agonist', 'GLP-1 agonist'],
            ['Manufacturer', 'Eli Lilly', 'Novo Nordisk'],
            ['Approval (UK obesity)', '2023', '2021'],
            ['Mean weight reduction', '−20.9% at 15mg (72w)', '−14.9% at 2.4mg (68w)'],
            ['HbA1c reduction (T2D)', '−2.30% at 15mg', '−1.86% at 1mg'],
            ['Maximum weekly dose', '15 mg', '2.4 mg (obesity)'],
            ['Trials reviewed', '42', '67'],
          ],
        },
      },
      {
        id: 'mechanism',
        label: 'How they work',
        heading: 'How they work',
        subheading: 'The same gut-hormone family — but tirzepatide pulls on two levers, not one.',
        body: [
          'Both compounds belong to the incretin class. <strong>Semaglutide</strong> is a long-acting GLP-1 receptor agonist: it potentiates insulin release, suppresses glucagon, slows gastric emptying, and signals satiety. <strong>Tirzepatide</strong> does all of that plus simultaneously activates the GIP receptor — the body\'s other major incretin pathway. This dual agonism appears genuinely additive: SURPASS-2 found tirzepatide outperformed semaglutide on every primary endpoint, at every matched dose level<sup>[1]</sup>.',
        ],
      },
      {
        id: 'effectiveness',
        label: 'Effectiveness',
        heading: 'Effectiveness',
        subheading: 'Tirzepatide produces larger effects on average. Semaglutide has more long-term data.',
        body: [
          'In the head-to-head SURPASS-2 trial, tirzepatide 15mg produced ~3.5x the absolute weight reduction of semaglutide 1mg over 40 weeks<sup>[1]</sup>. Across the SURMOUNT and STEP programs, mean reductions at the highest approved obesity doses are roughly −20.9% (tirzepatide) versus −14.9% (semaglutide) — both vastly exceeding any prior pharmacologic agent in this class.',
          'Semaglutide, however, has the larger long-term safety dataset, more years of post-marketing surveillance, and a completed cardiovascular outcomes trial (SELECT) showing a 20% MACE reduction in patients with established cardiovascular disease<sup>[2]</sup>. The equivalent tirzepatide trial (SURPASS-CVOT) reads out in 2026–2027.',
        ],
      },
      {
        id: 'safety',
        label: 'Side effects',
        heading: 'Side effects',
        subheading: 'Profiles are broadly similar — GI-dominated and dose-dependent.',
        table: {
          columns: ['Effect', 'Tirzepatide', 'Semaglutide'],
          rows: [
            ['Nausea', '30–40%', '30–44%'],
            ['Diarrhoea', '15–22%', '17–30%'],
            ['Constipation', '10–18%', '11–24%'],
            ['Vomiting', '9–13%', '10–24%'],
            ['Discontinuation rate', '~6%', '~7%'],
            ['Acute pancreatitis', '<0.5%', '<0.5%'],
          ],
        },
        callout: {
          kind: 'limit',
          title: 'Slow titration matters for both',
          body:
            'Side-effect rates above are from trial populations using the recommended titration schedule. Skipping titration steps — common in non-prescribed use — produces near-universal severe GI symptoms. Both compounds carry the same warning regarding personal/family history of medullary thyroid carcinoma.',
        },
      },
      {
        id: 'legal',
        label: 'Legal status',
        heading: 'UK legal status',
        subheading: 'Identical regulatory category. Different real-world supply pictures.',
        body: [
          'Both are prescription-only medicines (POM) under the Human Medicines Regulations 2012. Both are licensed for type-2 diabetes and chronic weight management. Both can be obtained through NHS pathways (with strict eligibility) or via regulated private clinics with prescriber assessment.',
          'The MHRA has issued counterfeit warnings for <strong>both</strong> products in 2024–2025. Tirzepatide\'s higher demand-vs-supply gap has driven a particularly active grey market — with documented cases of injector pens containing wrong doses, unsterile contents, or entirely different active ingredients<sup>[3]</sup>.',
        ],
      },
      {
        id: 'cost',
        label: 'Cost',
        heading: 'Cost (UK private)',
        subheading: 'Indicative monthly figures from regulated private prescribers, May 2026.',
        table: {
          columns: ['Dose tier', 'Tirzepatide', 'Semaglutide'],
          rows: [
            ['Starter', '£170 / month', '£140 / month'],
            ['Mid-range', '£220 / month', '£190 / month'],
            ['Maximum dose', '£260 / month', '£240 / month'],
          ],
          caption:
            'Median across 6 regulated private clinics. Excludes consultation fees. NHS access depends on BMI and comorbidities — typically free at point of use where eligible.',
        },
      },
    ],
    verdict: {
      headline: 'If we had to choose, today: tirzepatide — narrowly.',
      paragraphs: [
        'On a pure evidence-of-effect basis, tirzepatide produces larger mean reductions on every primary endpoint that has been measured head-to-head. The dual-incretin mechanism is no longer hypothetical — it\'s the most plausible explanation for the observed delta. For most readers asking "which one works better?", the honest answer is tirzepatide.',
        'That said, semaglutide has earned a longer track record. The SELECT cardiovascular data is meaningful for anyone with established CVD; the equivalent tirzepatide data isn\'t published yet. Semaglutide\'s supply chain is also more stable, which matters more than it should given how disruptive forced switches are.',
      ],
      leftLane: {
        title: 'Choose tirzepatide if',
        body:
          'Body-composition outcomes are your primary endpoint, you can tolerate the titration schedule, and you have reliable supply through a regulated route.',
      },
      rightLane: {
        title: 'Choose semaglutide if',
        body:
          "You have established cardiovascular disease, you're prioritising the longer evidence base, or supply continuity matters more than peak effect size for you.",
      },
    },
    references: [
      'Frías JP, et al. Tirzepatide versus Semaglutide once weekly in patients with type 2 diabetes (SURPASS-2). <em>N Engl J Med</em>. 2021;385(6):503-515.',
      'Lincoff AM, et al. Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT). <em>N Engl J Med</em>. 2023;389(24):2221-2232.',
      'MHRA Drug Safety Update. Counterfeit GLP-1 injector pens: clinician alert. January 2025.',
      'Jastreboff AM, et al. SURMOUNT-1: Tirzepatide once weekly for obesity. <em>N Engl J Med</em>. 2022;387(3):205-216.',
      'Wilding JPH, et al. STEP-1: Once-weekly semaglutide in adults with overweight or obesity. <em>N Engl J Med</em>. 2021;384(11):989-1002.',
      'NICE TA1026. Tirzepatide for managing overweight and obesity. December 2024.',
      'NICE TA875. Semaglutide for managing overweight and obesity. March 2023.',
      'BNF online. Tirzepatide / Semaglutide — Cost & prescribing notes. Accessed May 2026.',
    ],
    updated: '2 May 2026',
  },
  {
    slug: 'cjc-1295-vs-ipamorelin',
    leftSlug: 'cjc-1295',
    rightSlug: 'ipamorelin',
    title: 'CJC-1295 vs Ipamorelin',
    subtitle: 'Stack components compared',
    intro:
      'Two compounds frequently sold together as a "GH stack". They are mechanistically distinct — and most clinical literature treats them as complementary rather than competing.',
    left: {
      name: 'CJC-1295',
      altNames: 'Modified GRF (1-29) · CJC-1295 DAC',
      className: 'GHRH analogue',
      rating: 3.7,
      confidence: 'Medium',
      rows: [
        { label: 'Receptor', value: 'GHRH receptor' },
        { label: 'Half-life', value: '~30 min / ~6–8 days (DAC)' },
        { label: 'Selectivity', value: 'GHRH-pathway' },
        { label: 'UK status', value: 'Unlicensed' },
      ],
    },
    right: {
      name: 'Ipamorelin',
      altNames: 'NNC 26-0161',
      className: 'Selective GHRP',
      rating: 3.6,
      confidence: 'Medium',
      rows: [
        { label: 'Receptor', value: 'Ghrelin receptor (GHS-R)' },
        { label: 'Half-life', value: '~2 hours' },
        { label: 'Selectivity', value: 'Clean — no cortisol/prolactin' },
        { label: 'UK status', value: 'Unlicensed' },
      ],
    },
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        heading: 'Different pathways, same axis',
        subheading: 'Both stimulate GH release — but via independent mechanisms that combine synergistically.',
        body: [
          '<strong>CJC-1295</strong> is a GHRH analogue: it binds GHRH receptors on pituitary somatotrophs and amplifies the body\'s natural GHRH-driven GH pulse. <strong>Ipamorelin</strong> is a ghrelin-receptor agonist: it generates a separate GH pulse through a different pathway. Combining the two produces summation — higher GH amplitude than either compound alone.',
          'This is the basis of the standard "Ipa + Mod GRF" stack. Most clinical and grey-market literature pairs them rather than positions them in opposition.',
        ],
      },
      {
        id: 'mechanism',
        label: 'How they work',
        heading: 'Mechanistic comparison',
        subheading: 'Two GH pathways, summed.',
        table: {
          columns: ['', 'CJC-1295', 'Ipamorelin'],
          rows: [
            ['Receptor target', 'GHRH receptor (somatotrophs)', 'Ghrelin receptor (GHS-R1a)'],
            ['Pulse style', 'Amplifies endogenous GH pulse', 'Generates independent GH pulse'],
            ['Cortisol effect', 'None expected', 'None — selective by design'],
            ['Prolactin effect', 'None expected', 'None — selective by design'],
            ['Combined use', 'Synergistic with ghrelin agonists', 'Synergistic with GHRH analogues'],
          ],
        },
      },
      {
        id: 'effectiveness',
        label: 'Effectiveness',
        heading: 'Effects in published data',
        subheading: 'Both produce GH/IGF-1 elevation; combined use produces larger amplitude than either alone.',
        body: [
          'CJC-1295 with DAC produces sustained 1.5–3x baseline IGF-1 elevation over 7–14 days following a single dose, in phase-1 data. Modified GRF (1-29) produces shorter, sharper pulses.',
          'Ipamorelin produces dose-dependent GH peaks of 30–55 ng/mL within 30 minutes of subcutaneous administration. The selective profile means no concomitant cortisol or prolactin elevation — a meaningful advantage over earlier GHRPs.',
          'Combined use stacks the two pathways. Most GH-axis literature treats the combination as the practical use-case; standalone use of either compound is less common in published protocols.',
        ],
      },
      {
        id: 'safety',
        label: 'Safety',
        heading: 'Side effects compared',
        subheading: 'Both are well-tolerated acutely; supply quality is the dominant practical concern for both.',
        table: {
          columns: ['Effect', 'CJC-1295', 'Ipamorelin'],
          rows: [
            ['Injection-site reaction', '20–30%', '15–25%'],
            ['Flushing / warmth', '10–15%', '5–10%'],
            ['Mild hunger (acute)', 'Minimal', '~5%'],
            ['Cortisol elevation', 'Not expected', 'Not observed'],
            ['Prolactin elevation', 'Not expected', 'Not observed'],
            ['Long-term safety data', 'Limited', 'Limited'],
          ],
        },
      },
      {
        id: 'legal',
        label: 'Legal status',
        heading: 'UK legal status',
        subheading: 'Both unlicensed; both supply via research-chemical channels.',
        body: [
          'Neither compound has UK marketing authorisation. Both are sold via research-chemical channels with no regulatory quality assurance. Independent product testing across vendors has documented identity failures, contamination, and incorrect peptide content for both compounds.',
          'Supply for human use without prescription is illegal under the Human Medicines Regulations 2012. There is no meaningful difference in legal status between the two.',
        ],
      },
    ],
    verdict: {
      headline: "The honest framing: it's a stack, not a versus.",
      paragraphs: [
        'Most published GH-axis literature treats CJC-1295 and Ipamorelin as complementary components rather than competing options. The two compounds work through independent receptor pathways and produce summated GH amplitude when used together — that\'s why "Ipa + Mod GRF" is the dominant practical protocol.',
        'If forced to pick one, the answer depends on what you\'re prioritising. Ipamorelin alone has the cleaner side-effect profile and shorter dosing intervals. CJC-1295 with DAC offers weekly dosing and more sustained IGF-1 elevation. But the strongest position in the available literature is the stacked use — neither compound is positioned as a standalone primary therapy in published trial protocols.',
      ],
      leftLane: {
        title: 'Lean toward CJC-1295 alone if',
        body:
          'You want sustained IGF-1 elevation with weekly dosing convenience, and the longer half-life of the DAC variant suits your protocol. Mod GRF (1-29) suits closer-to-physiological pulse mimicry.',
      },
      rightLane: {
        title: 'Lean toward Ipamorelin alone if',
        body:
          "You're prioritising the cleanest side-effect profile and want flexible per-pulse dosing. Standalone Ipa is occasionally used as an entry-level GHRP before adding a GHRH analogue.",
      },
    },
    references: [
      'Teichman SL, et al. CJC-1295: prolonged stimulation of GH and IGF-I secretion. <em>J Clin Endocrinol Metab</em>. 2006;91(3):799-805.',
      'Raun K, et al. Ipamorelin, the first selective growth hormone secretagogue. <em>Eur J Endocrinol</em>. 1998;139(5):552-561.',
      'Sigalos JT, Pastuszak AW. The safety and efficacy of growth hormone secretagogues. <em>Sex Med Rev</em>. 2018;6(1):45-53.',
      'Garcia JM, et al. GHRH analogues for growth hormone deficiency: review. <em>Pituitary</em>. 2010;13(2):153-167.',
      'MHRA. Note: CJC-1295 and Ipamorelin have no UK marketing authorisations as of May 2026.',
    ],
    updated: '14 April 2026',
  },
  {
    slug: 'tirzepatide-vs-retatrutide',
    leftSlug: 'tirzepatide',
    rightSlug: 'retatrutide',
    title: 'Tirzepatide vs Retatrutide',
    subtitle: 'Next-generation comparison',
    intro:
      "Tirzepatide is the current best-evidenced obesity drug. Retatrutide is the most-discussed challenger. Phase-3 retatrutide data hasn't published yet — so this comparison is partial.",
    left: {
      name: 'Tirzepatide',
      altNames: 'Mounjaro · Zepbound · LY3298176',
      className: 'GLP-1 / GIP receptor agonist',
      rating: 4.6,
      confidence: 'High',
      rows: [
        { label: 'Receptors', value: 'GIP + GLP-1' },
        { label: 'Mean weight reduction', value: '−20.9% (phase-3)' },
        { label: 'Trial stage', value: 'Approved' },
        { label: 'UK status', value: 'POM' },
      ],
    },
    right: {
      name: 'Retatrutide',
      altNames: 'LY3437943',
      className: 'GLP-1 / GIP / Glucagon agonist',
      rating: 3.9,
      confidence: 'Medium',
      rows: [
        { label: 'Receptors', value: 'GLP-1 + GIP + Glucagon' },
        { label: 'Mean weight reduction', value: '−24.2% (phase-2)' },
        { label: 'Trial stage', value: 'Phase-3 ongoing' },
        { label: 'UK status', value: 'Investigational' },
      ],
    },
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        heading: 'Two from Eli Lilly, one generation apart',
        subheading: 'Tirzepatide is licensed; retatrutide is in late-stage development.',
        table: {
          columns: ['', 'Tirzepatide', 'Retatrutide'],
          rows: [
            ['Receptor count', '2 (GIP + GLP-1)', '3 (GIP + GLP-1 + Glucagon)'],
            ['Mean weight reduction', '−20.9% (phase-3)', '−24.2% (phase-2)'],
            ['Trial program', 'SURMOUNT / SURPASS', 'TRIUMPH'],
            ['Approval status', 'Approved 2022/2023', 'No approval anywhere'],
            ['Half-life', '~5 days', '~6 days'],
          ],
        },
      },
      {
        id: 'evidence',
        label: 'Evidence',
        heading: 'Evidence quality is the deciding factor',
        subheading: 'Phase-3 vs phase-2 is not just a step number — it determines confidence.',
        body: [
          'Tirzepatide has multiple completed phase-3 trials with >11,000 enrolled participants. Effect sizes, safety signals, and durability are all well characterised. The compound is approved by major regulators worldwide.',
          'Retatrutide\'s phase-2 data are striking — the 12mg arm reported the largest mean weight reduction ever observed for a pharmacologic agent — but phase-2 trials systematically over-state effect sizes vs subsequent phase-3 confirmation. Until TRIUMPH-3 reports, retatrutide should not be treated as if it were already established.',
        ],
        callout: {
          kind: 'limit',
          title: 'Investigational status matters',
          body:
            'Retatrutide is not legally available outside clinical trials anywhere as of May 2026. Material sold under the name "retatrutide" through unregulated channels is not the trial compound and has no verified identity.',
        },
      },
    ],
    verdict: {
      headline: 'Tirzepatide today; revisit when retatrutide reads out phase-3.',
      paragraphs: [
        'For any UK reader making a decision in 2026, the answer is tirzepatide. It is approved, prescribable, has a complete phase-3 evidence base, and produces the largest weight reduction of any approved compound.',
        'Retatrutide is genuinely promising and may rewrite the rankings — but the answer to "should I be using retatrutide right now" is no, because it isn\'t legally available outside trials. We will revise this comparison when phase-3 data publish, expected 2026–2027.',
      ],
      leftLane: {
        title: 'Tirzepatide is the right answer if',
        body: 'You are making a decision today and want regulatory-grade evidence behind it.',
      },
      rightLane: {
        title: 'Retatrutide may become the right answer if',
        body:
          'Phase-3 data published in 2026–2027 confirm phase-2 effect sizes, regulatory approval follows, and the supply picture stabilises.',
      },
    },
    references: [
      'Jastreboff AM, et al. SURMOUNT-1: Tirzepatide once weekly for obesity. <em>N Engl J Med</em>. 2022;387(3):205-216.',
      'Jastreboff AM, et al. Triple-hormone-receptor agonist retatrutide for obesity (TRIUMPH phase-2). <em>N Engl J Med</em>. 2023;389(6):514-526.',
      'ClinicalTrials.gov. TRIUMPH-3 (NCT05882045). Phase-3 obesity trial.',
      'NICE TA1026. Tirzepatide for managing overweight and obesity. December 2024.',
    ],
    updated: '14 April 2026',
  },
];

export function getComparison(slug: string) {
  return COMPARISONS.find((c) => c.slug === slug);
}
