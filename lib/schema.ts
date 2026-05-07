/**
 * JSON-LD schema generators for SEO + GEO (Generative Engine Optimization).
 *
 * Strategy: stamp every page with the most specific schema types that apply.
 * LLMs and search engines use this both to understand the content and to cite it.
 */

import type { Peptide } from './types';
import type { Comparison } from './comparisons';
import type { Guide } from './guides';
import type { GoalRecord } from './goals';

export const SITE_URL = 'https://peptidehandbook.co.uk';

// ─── Global identifiers ─────────────────────────────────

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

// ─── Organization (publisher) ───────────────────────────

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Peptide Handbook',
    alternateName: 'Peptide Handbook UK',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.svg`,
      width: 48,
      height: 32,
    },
    description:
      "The UK's evidence-first guide to peptides, performance, and longevity. Independently researched and peer-reviewed by clinicians.",
    foundingDate: '2026',
    founder: {
      '@type': 'Organization',
      name: 'Peptide Handbook editorial team',
    },
    knowsAbout: [
      'Peptide therapy',
      'GLP-1 receptor agonists',
      'GIP receptor agonists',
      'Growth hormone secretagogues',
      'Tirzepatide',
      'Semaglutide',
      'Body composition pharmacology',
      'UK MHRA regulation',
      'Clinical trial appraisal',
    ],
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'editorial',
      email: 'hello@peptidehandbook.co.uk',
      availableLanguage: ['English'],
    },
    publishingPrinciples: `${SITE_URL}/editorial-policy`,
    actionableFeedbackPolicy: `${SITE_URL}/editorial-policy`,
    correctionsPolicy: `${SITE_URL}/editorial-policy`,
  };
}

// ─── WebSite (with internal site search) ────────────────

export function webSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE_URL,
    name: 'Peptide Handbook',
    description: "The UK's trusted decision engine for peptides, performance, and longevity.",
    inLanguage: 'en-GB',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/peptides?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ─── BreadcrumbList ─────────────────────────────────────

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// ─── Person (clinical reviewers) ────────────────────────

export function reviewerPerson(reviewer: { name: string; credentials: string }) {
  // Try to parse the credential string into role + qualifications
  const credentialParts = reviewer.credentials.split('·').map((s) => s.trim());
  const qualifications = credentialParts.filter((p) => /^[A-Z]{2,}/.test(p));
  const speciality = credentialParts.find((p) => !qualifications.includes(p) && !/reg\./i.test(p));
  return {
    '@type': 'Person',
    name: reviewer.name,
    jobTitle: speciality ?? 'Clinical reviewer',
    description: `${speciality ?? 'Clinical reviewer'} for Peptide Handbook. Credentials: ${reviewer.credentials}.`,
    knowsAbout: [speciality ?? 'Clinical medicine'],
    worksFor: { '@id': ORG_ID },
    hasCredential: qualifications.map((q) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: q,
    })),
  };
}

// ─── Drug + MedicalWebPage (peptide profiles) ───────────

const LEGAL_STATUS_MAP: Record<Peptide['ukLegal'], string> = {
  POM: 'PrescriptionOnly',
  Investigational: 'InvestigationalUseOnly',
  Unlicensed: 'NotApprovedForUse',
  Research: 'NotApprovedForUse',
  Mixed: 'PrescriptionOnly',
};

const CONFIDENCE_TO_RATING_REVIEW: Record<Peptide['confidence'], string> = {
  High: 'Strong, replicated phase-3 evidence base; regulatory approval where applicable.',
  Medium: 'Moderate evidence base — phase-2 or single phase-3 trial, or mechanism with limited replication.',
  Low: 'Limited human evidence — preclinical only, single small study, or unreplicated single-group findings.',
};

export function peptideDrugSchema(p: Peptide) {
  return {
    '@type': 'Drug',
    '@id': `${SITE_URL}/peptides/${p.slug}#drug`,
    name: p.name,
    alternateName: p.altNames,
    description: p.intro,
    drugClass: p.className,
    legalStatus: {
      '@type': 'DrugLegalStatus',
      name: p.ukLegalNote,
      applicableLocation: { '@type': 'Country', name: 'United Kingdom' },
    },
    url: `${SITE_URL}/peptides/${p.slug}`,
    administrationRoute: extractRoute(p),
    activeIngredient: p.name,
    mechanismOfAction: p.how.intro,
    relatedDrug: p.compareWith?.map((c) => ({
      '@type': 'Drug',
      name: c.tagline,
      url: `${SITE_URL}/compare/${c.slug}`,
    })),
  };
}

function extractRoute(p: Peptide): string {
  const admin = p.stats.find((s) => s.label.toLowerCase().includes('administ'));
  return admin?.value ?? 'Subcutaneous';
}

export function peptideMedicalWebPageSchema(p: Peptide) {
  return {
    '@type': 'MedicalWebPage',
    '@id': `${SITE_URL}/peptides/${p.slug}#medicalwebpage`,
    url: `${SITE_URL}/peptides/${p.slug}`,
    name: `${p.name} — Evidence, dosage, UK legal status`,
    description: p.intro,
    inLanguage: 'en-GB',
    isPartOf: { '@id': SITE_ID },
    publisher: { '@id': ORG_ID },
    datePublished: '2026-04-01',
    dateModified: parseDate(p.updated),
    audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@id': `${SITE_URL}/peptides/${p.slug}#drug` },
    reviewedBy: reviewerPerson(p.reviewedBy),
    lastReviewed: parseDate(p.updated),
    significantLink: [
      { '@type': 'WebPage', name: 'Editorial policy', url: `${SITE_URL}/editorial-policy` },
      { '@type': 'WebPage', name: 'Medical disclaimer', url: `${SITE_URL}/medical-disclaimer` },
    ],
    keywords: [p.name, ...p.altNames, p.className, p.classShort, p.goal].join(', '),
    citation: p.references.slice(0, 6).map((r) => ({
      '@type': 'CreativeWork',
      name: stripHtml(r),
    })),
    mainContentOfPage: {
      '@type': 'WebPageElement',
      cssSelector: 'article.article-body',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#tldr', 'h1', '.profile-hero__sub'],
    },
  };
}

export function peptideAggregateRating(p: Peptide) {
  return {
    '@type': 'AggregateRating',
    itemReviewed: { '@id': `${SITE_URL}/peptides/${p.slug}#drug` },
    ratingValue: p.rating,
    bestRating: 5,
    worstRating: 1,
    ratingCount: 1,
    reviewCount: 1,
    description: `Evidence-graded rating from Peptide Handbook editorial review. Confidence: ${p.confidence}. Based on ${p.studiesReviewed} studies reviewed.`,
  };
}

export function peptideReviewSchema(p: Peptide) {
  return {
    '@type': 'Review',
    itemReviewed: { '@id': `${SITE_URL}/peptides/${p.slug}#drug` },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: p.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: reviewerPerson(p.reviewedBy),
    publisher: { '@id': ORG_ID },
    datePublished: parseDate(p.updated),
    reviewBody: `${p.intro} ${CONFIDENCE_TO_RATING_REVIEW[p.confidence]} ${p.summary}`,
    name: `${p.name} — clinician-reviewed evidence summary`,
  };
}

// ─── Article schema (guides, comparisons) ──────────────

export function guideArticleSchema(g: Guide) {
  return {
    '@type': 'Article',
    '@id': `${SITE_URL}/guides/${g.slug}#article`,
    headline: g.title,
    description: g.excerpt,
    url: `${SITE_URL}/guides/${g.slug}`,
    datePublished: parseDate(g.publishedDate),
    dateModified: parseDate(g.updated),
    inLanguage: 'en-GB',
    isPartOf: { '@id': SITE_ID },
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
    articleSection: g.kicker,
    keywords: g.kicker,
    mainEntityOfPage: `${SITE_URL}/guides/${g.slug}`,
    image: `${SITE_URL}/og-image.png`,
    citation: g.references?.slice(0, 6).map((r) => ({
      '@type': 'CreativeWork',
      name: stripHtml(r),
    })),
  };
}

export function comparisonArticleSchema(c: Comparison) {
  return {
    '@type': 'Article',
    '@id': `${SITE_URL}/compare/${c.slug}#article`,
    headline: c.title,
    description: c.intro,
    url: `${SITE_URL}/compare/${c.slug}`,
    datePublished: '2026-04-01',
    dateModified: parseDate(c.updated),
    inLanguage: 'en-GB',
    isPartOf: { '@id': SITE_ID },
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
    articleSection: c.subtitle,
    keywords: [c.left.name, c.right.name, c.subtitle].join(', '),
    mainEntityOfPage: `${SITE_URL}/compare/${c.slug}`,
    image: `${SITE_URL}/og-image.png`,
    about: [
      { '@id': `${SITE_URL}/peptides/${c.leftSlug}#drug` },
      { '@id': `${SITE_URL}/peptides/${c.rightSlug}#drug` },
    ],
    citation: c.references.slice(0, 6).map((r) => ({
      '@type': 'CreativeWork',
      name: stripHtml(r),
    })),
  };
}

// ─── CollectionPage (directories, goal pages) ──────────

export function collectionPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  items: { name: string; url: string }[];
}) {
  return {
    '@type': 'CollectionPage',
    '@id': `${opts.url}#collection`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': SITE_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-GB',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

// ─── HowTo (assessment tool) ───────────────────────────

export function assessmentHowToSchema() {
  return {
    '@type': 'HowTo',
    name: 'Find the right peptide for your goal',
    description:
      'A 5-step, evidence-graded assessment that surfaces 2–3 peptides matched to your goal, experience, risk tolerance, timeline, and budget.',
    url: `${SITE_URL}/assessment`,
    totalTime: 'PT90S',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Goal',
        text: 'Choose the outcome you are most focused on: fat loss, muscle growth, recovery, longevity, sleep, or cognitive performance.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Experience',
        text: 'Indicate how familiar you are with peptides: newcomer, some prior research, or experienced.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Risk tolerance',
        text: 'Indicate how conservative your approach is: conservative, moderate, or higher risk tolerance.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Timeline',
        text: 'Indicate when you want to see results: 1–3 months, 3–6 months, 6–12 months, or long-term.',
        position: 4,
      },
      {
        '@type': 'HowToStep',
        name: 'Budget',
        text: 'Indicate your investment level: £, ££, or £££.',
        position: 5,
      },
    ],
  };
}

export function assessmentWebApplicationSchema() {
  return {
    '@type': 'WebApplication',
    '@id': `${SITE_URL}/assessment#app`,
    name: 'Peptide Handbook Assessment',
    url: `${SITE_URL}/assessment`,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    description:
      'A 5-step, evidence-graded assessment that surfaces 2–3 peptides matched to your goal, experience, risk tolerance, timeline, and budget.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-GB',
  };
}

// ─── FAQPage ───────────────────────────────────────────

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

// ─── Goal: MedicalWebPage with category ────────────────

export function goalCollectionSchema(g: GoalRecord, peptides: Peptide[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/goals/${g.slug}#collection`,
        url: `${SITE_URL}/goals/${g.slug}`,
        name: `Best peptides for ${g.label.toLowerCase()}`,
        description: g.longDesc,
        isPartOf: { '@id': SITE_ID },
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-GB',
        about: { '@type': 'MedicalCondition', name: g.label },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: peptides.length,
          itemListElement: peptides.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.name,
            url: `${SITE_URL}/peptides/${p.slug}`,
            item: { '@id': `${SITE_URL}/peptides/${p.slug}#drug` },
          })),
        },
      },
    ],
  };
}

// ─── Helpers ───────────────────────────────────────────

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function parseDate(s: string): string {
  // Accepts "2 May 2026", "May 2 2026", "2026-05-02", "Ongoing", etc.
  // Returns ISO 8601 (YYYY-MM-DD) where possible, falling back to today.
  const monthMap: Record<string, string> = {
    jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
    jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
    january: '01', february: '02', march: '03', april: '04',
    june: '06', july: '07', august: '08', september: '09',
    october: '10', november: '11', december: '12',
  };
  // Already ISO?
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  const m = s.match(/(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (m) {
    const day = m[1].padStart(2, '0');
    const month = monthMap[m[2].toLowerCase()];
    const year = m[3];
    if (month) return `${year}-${month}-${day}`;
  }
  return new Date().toISOString().slice(0, 10);
}

// ─── Wrapper helpers for emitting JSON-LD in pages ─────

export type SchemaNode = Record<string, unknown>;

export function jsonLdGraph(...nodes: SchemaNode[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes,
  });
}

export function jsonLd(node: SchemaNode): string {
  return JSON.stringify({ '@context': 'https://schema.org', ...node });
}
