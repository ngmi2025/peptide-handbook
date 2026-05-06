export type GuideSection = {
  heading?: string;
  body: string[];
};

export type Guide = {
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  publishedDate: string;
  updated: string;
  readTime: string;
  cover: 'chart' | 'bars' | 'molecule' | 'comparison';
  sections: GuideSection[];
  references?: string[];
};

export const GUIDES: Guide[] = [
  {
    slug: 'best-peptides-for-fat-loss-uk',
    title: 'Best peptides for fat loss in the UK',
    kicker: 'Fat loss',
    excerpt:
      'A clinician-reviewed look at the strongest-evidence compounds for body-composition outcomes, with UK legal status, prescribing routes, and where the marketing oversells the science.',
    publishedDate: '6 May 2026',
    updated: '6 May 2026',
    readTime: '14 min read',
    cover: 'chart',
    sections: [
      {
        body: [
          'The fat-loss peptide landscape changed completely between 2017 and 2024. The arrival of GLP-1 receptor agonists — first liraglutide, then semaglutide, then tirzepatide — produced effect sizes that no prior pharmacological category had approached. UK readers now have several genuinely effective options, alongside a busy grey market of unlicensed compounds with thinner evidence.',
          'This guide ranks the compounds by published clinical evidence — not by marketing volume — and is written for UK readers, with prescribing routes and legal status reflecting the May 2026 environment.',
        ],
      },
      {
        heading: 'How we rank',
        body: [
          'Each compound is assessed on four criteria: phase-3 trial evidence (mean effect size, sample size, replication); UK regulatory status and accessibility; safety profile and tolerability; and durability of effect after discontinuation. We weight phase-3 RCT data heavily — phase-2 effect sizes systematically over-state what phase-3 confirms.',
          'Peptides marketed for fat loss but lacking completed phase-3 evidence (or any human RCT data) are listed but with explicit confidence flags. Marketing claims for these compounds frequently extend beyond what the published evidence supports.',
        ],
      },
      {
        heading: '1. Tirzepatide (Mounjaro / Zepbound)',
        body: [
          'Currently the strongest-evidenced compound in any pharmacologic weight-management category. Mean weight reduction of −20.9% over 72 weeks at the 15mg dose in the SURMOUNT-1 phase-3 trial. Approved in the UK as both Mounjaro (type-2 diabetes) and for chronic weight management.',
          'Available via NHS pathways for eligible patients (NICE TA1026) and through regulated private clinics. Counterfeit injector pens are a documented and ongoing safety problem — the MHRA has issued multiple alerts; supply via unregulated channels carries real risk.',
        ],
      },
      {
        heading: '2. Semaglutide (Wegovy / Ozempic)',
        body: [
          'The most-studied modern obesity drug. Mean weight reduction of −14.9% over 68 weeks at the 2.4mg dose (STEP-1). Smaller effect than tirzepatide, but with a larger long-term dataset and unique cardiovascular outcome evidence (SELECT trial: 20% MACE reduction in patients with established CVD and overweight/obesity).',
          'Wegovy is licensed for chronic weight management; Ozempic for type-2 diabetes. Available on the NHS for narrow eligibility (NICE TA875) and through regulated private clinics. Counterfeit pens documented in 2024–2025.',
        ],
      },
      {
        heading: '3. Liraglutide (Saxenda)',
        body: [
          'A first-generation, daily-injection GLP-1 with mean weight reduction of approximately −8.0% over 56 weeks at the 3.0mg dose. Effective but largely superseded on both efficacy and convenience by the weekly options.',
          'Worth knowing about for two reasons: it has the longest post-marketing safety dataset of any GLP-1, and the LEADER trial provided the original cardiovascular benefit signal in the GLP-1 class. UK NHS access via NICE TA664; widely available privately.',
        ],
      },
      {
        heading: '4. Retatrutide (investigational)',
        body: [
          'A triple GIP / GLP-1 / glucagon agonist in late-stage development. Phase-2 data show the largest weight reductions ever seen for a pharmacologic agent (−24.2% on 12mg over 48 weeks). Phase-3 program (TRIUMPH) is ongoing; primary readouts expected 2026–2027.',
          'Not legally available outside clinical trials. Material sold under the name "retatrutide" through grey-market channels has no verified identity and should be assumed unsafe.',
        ],
      },
      {
        heading: 'Compounds we don\'t recommend (and why)',
        body: [
          '<strong>AOD-9604</strong>: Marketed extensively as a "fat-loss peptide". Multiple phase-2 trials in the 2000s failed to demonstrate clinically meaningful weight reduction; the development programme was discontinued. Despite this, AOD-9604 remains widely sold via research-chemical channels — a clear case of marketing volume diverging from evidence base.',
          '<strong>HGH fragment 176-191</strong>: A smaller AOD-9604-related fragment with even less human evidence. The lipolysis claims rely almost entirely on in-vitro and rodent data.',
          '<strong>Tesamorelin</strong>: An exception to the "we don\'t recommend" framing — it has FDA approval for HIV-associated lipodystrophy and is genuinely effective in that specific context. But it is not approved for general weight management and the cost/access picture in the UK doesn\'t support general use.',
        ],
      },
      {
        heading: 'A note on supply quality',
        body: [
          'The dominant practical risk in this category is not the compound itself but the supply chain. For licensed POMs (tirzepatide, semaglutide, liraglutide), supply via your GP, private prescriber, or registered pharmacy is the only fully assured route. Counterfeit injector pens have been found to contain insulin, saline, or different active ingredients entirely.',
          'For unlicensed compounds, independent third-party testing has consistently documented identity failures and contamination. There is no regulatory body in the UK that vouches for "research chemical" peptide quality — and the absence of such oversight is the central reason most of those compounds rank poorly here on the practical-recommendation axis even where the underlying mechanism may be promising.',
        ],
      },
    ],
    references: [
      'Jastreboff AM, et al. SURMOUNT-1: Tirzepatide once weekly for the treatment of obesity. <em>N Engl J Med</em>. 2022;387(3):205-216.',
      'Wilding JPH, et al. STEP-1: Once-weekly semaglutide. <em>N Engl J Med</em>. 2021;384(11):989-1002.',
      'Lincoff AM, et al. SELECT: Semaglutide and cardiovascular outcomes. <em>N Engl J Med</em>. 2023;389(24):2221-2232.',
      'Pi-Sunyer X, et al. SCALE: liraglutide 3.0mg for weight management. <em>N Engl J Med</em>. 2015;373(1):11-22.',
      'Jastreboff AM, et al. TRIUMPH phase-2: retatrutide for obesity. <em>N Engl J Med</em>. 2023;389(6):514-526.',
      'NICE TA1026 (tirzepatide), TA875 (semaglutide), TA664 (liraglutide).',
      'MHRA Drug Safety Update. Counterfeit GLP-1 injector pens: clinician alert. January 2025.',
    ],
  },
  {
    slug: 'uk-legal-status',
    title: 'A guide to UK peptide legality',
    kicker: 'Regulation',
    excerpt:
      'Which peptides are licensed prescription medicines, which are unlicensed, and which sit in legal grey areas. The honest version, with regulatory citations.',
    publishedDate: '14 April 2026',
    updated: '14 April 2026',
    readTime: '11 min read',
    cover: 'molecule',
    sections: [
      {
        body: [
          'UK peptide regulation is more nuanced than the social-media version suggests. Most peptides discussed in performance and longevity contexts fall into one of three categories: licensed Prescription-Only Medicines (POM), unlicensed compounds with no UK marketing authorisation, or compounds approved overseas but unlicensed in the UK. Each category has different legal implications for supply, possession, and personal use.',
          'This guide summarises the regulatory framework and the practical implications for UK readers. It is not legal advice — it\'s a clinician-reviewed reference document.',
        ],
      },
      {
        heading: 'Prescription-only medicines (POM)',
        body: [
          'POMs are licensed by the MHRA (Medicines and Healthcare products Regulatory Agency) and can only be supplied legally in the UK with a valid prescription from a UK-registered prescriber. Tirzepatide, semaglutide, and liraglutide all fall into this category for their licensed indications.',
          'Supply outside a prescription is illegal under the Human Medicines Regulations 2012 — both for the seller and, in some circumstances, for the buyer. The MHRA actively enforces against unlicensed online suppliers.',
        ],
      },
      {
        heading: 'Unlicensed peptides — the "research chemical" category',
        body: [
          'Most peptides discussed in performance contexts (BPC-157, CJC-1295, Ipamorelin, TB-500, etc.) have no UK marketing authorisation. They are sold legally only as "research chemicals" — compounds intended for in-vitro research, not human use.',
          'Selling these compounds for human use is illegal under the Human Medicines Regulations 2012. The "research chemical" framing exists to keep the seller within the law; once a buyer uses the compound on themselves, both parties have moved outside the legal framework, regardless of disclaimers.',
        ],
      },
      {
        heading: 'Approved-overseas, unlicensed-in-UK',
        body: [
          'Some peptides are approved as prescription medicines in other countries but have no UK marketing authorisation. Semax is a clear example: it\'s a prescription medicine in Russia for ischaemic stroke, but unlicensed in the UK.',
          'Compounds in this category are sometimes available on a "specials" basis or through compassionate-use frameworks — but for ordinary supply, the same constraints apply as for fully unlicensed peptides.',
        ],
      },
      {
        heading: 'WADA (sport) implications',
        body: [
          'The World Anti-Doping Agency Prohibited List bans specific peptide categories at all times for competitive athletes — including all GLP-1 receptor agonists, all GH secretagogues (GHRPs and GHRH analogues), GH itself, and growth-factor modulators including TB-500.',
          'For UK athletes registered with their national sport governing body, "I had a prescription" is not always a sufficient defence — Therapeutic Use Exemptions (TUE) must be applied for in advance for prohibited compounds, even where a clinical indication exists.',
        ],
      },
      {
        heading: 'Personal use and possession',
        body: [
          'The legal status of personal possession (without supply) is more nuanced than the supply rules. POMs supplied with a valid prescription are entirely legal to possess. Unlicensed peptides imported for personal use are technically not regulated as controlled drugs, but importation can still trigger Border Force action under medicines legislation in some circumstances.',
          'In practice, the enforcement focus is on suppliers, not personal-use possessors. But "rarely enforced" is not the same as "legal" — and individual circumstances can vary.',
        ],
      },
    ],
    references: [
      'Human Medicines Regulations 2012. SI 2012/1916.',
      'Medicines and Medical Devices Act 2021.',
      'MHRA. "Buying medicines online: the dangers." Updated 2024.',
      'World Anti-Doping Agency. Prohibited List 2026.',
      'BNF Online (British National Formulary). Accessed May 2026.',
    ],
  },
  {
    slug: 'avoiding-counterfeit-injector-pens',
    title: 'Avoiding counterfeit injector pens',
    kicker: 'Safety',
    excerpt:
      'Counterfeit GLP-1 pens have driven multiple MHRA safety alerts. Here\'s what to look for, where to buy, and what the documented failures have included.',
    publishedDate: '28 April 2026',
    updated: '28 April 2026',
    readTime: '8 min read',
    cover: 'bars',
    sections: [
      {
        body: [
          'Counterfeit injector pens — particularly for tirzepatide and semaglutide — have become one of the most documented medicines-safety problems in modern UK healthcare. The MHRA issued multiple Drug Safety Updates between 2024 and 2025; the Counter Fraud Authority confirmed product seizures; and individual clinicians have published case reports of patients who received counterfeit material.',
          'This is a practical, not theoretical, problem. The compounds work, the demand exceeds licensed supply, and the resulting grey market has been demonstrably hazardous.',
        ],
      },
      {
        heading: 'What has been found in counterfeit pens',
        body: [
          'Documented findings from MHRA and CFA seizures include: pens containing insulin (life-threatening hypoglycaemia risk in non-diabetic users); pens containing only saline (no therapeutic effect, but injection-site infections); pens with incorrect doses (often higher than labelled, producing severe GI symptoms); and pens with legitimate appearance but fake batch numbers.',
          'In several cases the counterfeit pens were sold via online pharmacies that initially appeared legitimate. Visual inspection of the pen itself is not a reliable safeguard.',
        ],
      },
      {
        heading: 'How to buy safely',
        body: [
          'Three legitimate routes exist for licensed GLP-1 medicines in the UK: NHS prescription (eligibility-restricted via NICE criteria); private prescription via a GMC-registered prescriber and dispensed by a GPhC-registered pharmacy; or licensed-clinic supply through a regulated private weight-management service.',
          'The two key markers of legitimacy are the prescriber registration (GMC for doctors, GPhC for pharmacists) and the pharmacy registration. Both registration numbers can be verified via public registers — gmc-uk.org for doctors, pharmacyregulation.org for pharmacies.',
        ],
      },
      {
        heading: 'Red flags',
        body: [
          'Selling without a prescription, requiring no prescriber consultation, claiming "no prescription needed for personal-use quantities", offering substantially below-market pricing (legitimate Mounjaro starts around £170/month privately), shipping from outside the UK without a UK pharmacy involved, accepting cryptocurrency or gift-card payment only, and using messaging apps for orders rather than a regulated platform — any of these patterns should prompt extreme caution.',
        ],
      },
      {
        heading: 'If you think you have a counterfeit',
        body: [
          'Stop using the product immediately. Report to the MHRA Yellow Card scheme (yellowcard.mhra.gov.uk) and to your GP. If you\'ve experienced symptoms — particularly hypoglycaemia, severe GI symptoms, or injection-site infection — seek medical advice.',
          'The MHRA also encourages reporting of suspected counterfeit products even if you haven\'t used them. This contributes directly to enforcement against unregulated suppliers.',
        ],
      },
    ],
    references: [
      'MHRA Drug Safety Update. Counterfeit GLP-1 injector pens: clinician alert. January 2025.',
      'NHS Counter Fraud Authority. Annual report 2024. Pharmaceutical fraud section.',
      'BMJ Open. Case series of counterfeit semaglutide injector pens. 2024;14(8):e078901.',
      'MHRA Yellow Card scheme. https://yellowcard.mhra.gov.uk',
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
