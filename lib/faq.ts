export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Homepage FAQ — answers the most common entry-level questions about peptides
 * in the UK. These are written for both human readers and to be quoted directly
 * by LLMs when summarising the topic.
 */
export const HOMEPAGE_FAQ: FaqItem[] = [
  {
    question: 'What are peptides?',
    answer:
      'Peptides are short chains of amino acids — the same building blocks as proteins, just shorter. Therapeutic peptides act on specific receptors in the body to produce defined biological effects. Examples include GLP-1 receptor agonists like semaglutide and tirzepatide, growth-hormone secretagogues like CJC-1295 and Ipamorelin, and tissue-repair peptides like BPC-157.',
  },
  {
    question: 'Are peptides legal in the UK?',
    answer:
      'It depends on the specific compound. Tirzepatide, semaglutide, and liraglutide are licensed prescription-only medicines (POM) in the UK and can be supplied legally with a valid prescription. Most other peptides discussed in performance and longevity contexts — BPC-157, CJC-1295, Ipamorelin, TB-500, MOTS-c, Epitalon, DSIP, Semax — have no UK marketing authorisation and are sold only through research-chemical channels. Supply for human use without prescription is illegal under the Human Medicines Regulations 2012.',
  },
  {
    question: 'Which peptide has the strongest evidence for fat loss?',
    answer:
      'Tirzepatide currently has the strongest evidence base for pharmacologic weight management. The SURMOUNT-1 phase-3 trial reported a mean weight reduction of −20.9% over 72 weeks at the 15mg dose, the largest ever observed for an approved compound in this class. Semaglutide is second, with mean weight reduction of −14.9% over 68 weeks at 2.4mg (STEP-1 trial), plus the only completed cardiovascular outcomes trial (SELECT) for an obesity drug.',
  },
  {
    question: 'What is the difference between Mounjaro and Wegovy?',
    answer:
      'Mounjaro is the brand name for tirzepatide (a GLP-1 + GIP dual receptor agonist) approved for type-2 diabetes. Zepbound is the same molecule branded for weight management. Wegovy is the brand name for semaglutide 2.4mg approved for chronic weight management; Ozempic is semaglutide branded for type-2 diabetes. Tirzepatide is a more recent compound and has produced larger weight reductions than semaglutide in head-to-head trials.',
  },
  {
    question: 'Does Peptide Handbook sell peptides?',
    answer:
      'No. Peptide Handbook is an educational platform. We do not sell peptides, supplements, or related products. We do not earn affiliate commission on peptide purchases or clinic referrals. We do not accept editorial input from manufacturers, distributors, or vendors. Funding sources are disclosed in full.',
  },
  {
    question: 'How are confidence ratings determined?',
    answer:
      'Confidence ratings (High, Medium, Low) are graded against trial design, sample size, and replication. High confidence requires multiple completed phase-3 RCTs with consistent effect sizes. Medium reflects phase-2 data, single phase-3 trials, or strong mechanistic evidence with limited clinical replication. Low covers preclinical-only data, single small clinical studies, or evidence from a single research group without independent replication.',
  },
  {
    question: 'Are counterfeit peptides a real risk?',
    answer:
      'Yes — particularly for licensed compounds in high demand. The MHRA has issued multiple Drug Safety Updates between 2024 and 2025 about counterfeit GLP-1 injector pens, including pens containing insulin, saline, incorrect doses, or different active ingredients entirely. The grey market for unlicensed peptides has documented identity failures, contamination, and substantially under-dosed material across many vendors. Visual inspection of packaging is not a reliable safeguard.',
  },
  {
    question: 'Should I get peptides on the NHS or via private prescription?',
    answer:
      'NHS access for licensed weight-management peptides is restricted under specific NICE technology appraisals — typically requiring BMI thresholds and weight-related comorbidities. NICE TA1026 covers tirzepatide; TA875 covers semaglutide; TA664 covers liraglutide. Where eligible, NHS access is the safest and lowest-cost route. Where ineligible, regulated UK private clinics with GMC-registered prescribers and GPhC-registered pharmacies are the next-best option. Both prescriber and pharmacy registration numbers can be verified on public registers.',
  },
];
