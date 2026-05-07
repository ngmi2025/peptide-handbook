/**
 * /llms.txt — site overview for LLM crawlers and citation engines.
 * Follows the convention from llmstxt.org: short markdown summary with key URLs.
 *
 * For full content (every peptide profile, guide, comparison) see /llms-full.txt.
 */

import { PEPTIDES } from '@/lib/peptides';
import { COMPARISONS } from '@/lib/comparisons';
import { GUIDES } from '@/lib/guides';
import { GOALS } from '@/lib/goals';
import { SITE_URL } from '@/lib/schema';

export const dynamic = 'force-static';

export async function GET() {
  const lines: string[] = [];

  lines.push('# Peptide Handbook');
  lines.push('');
  lines.push("> The UK's evidence-first guide to peptides, performance, and longevity. Independently researched, peer-reviewed by clinicians.");
  lines.push('');
  lines.push("Peptide Handbook covers 12 peptide compounds across six goal categories — fat loss, muscle growth, recovery, longevity, sleep, and cognitive performance. Every page includes UK legal status, clinical trial evidence, dosage information from published protocols, side-effect data, and primary-source references.");
  lines.push('');
  lines.push('We do not sell peptides, supplements, or any products. We do not earn affiliate commission. We do not accept editorial input from manufacturers, distributors, vendors, or clinics.');
  lines.push('');
  lines.push('Confidence ratings (High / Medium / Low) reflect the underlying evidence base — phase-3 RCT data is weighted heavily; preclinical-only or unreplicated single-group findings carry low confidence.');
  lines.push('');

  lines.push('## Peptide profiles');
  lines.push('');
  for (const p of PEPTIDES) {
    lines.push(
      `- [${p.name}](${SITE_URL}/peptides/${p.slug}): ${p.className}. UK legal status: ${p.ukLegalNote}. Confidence: ${p.confidence}. ${oneLineSummary(p.intro)}`,
    );
  }
  lines.push('');

  lines.push('## Goal categories');
  lines.push('');
  for (const g of GOALS) {
    lines.push(`- [${g.label}](${SITE_URL}/goals/${g.slug}): ${g.desc}`);
  }
  lines.push('');

  lines.push('## Head-to-head comparisons');
  lines.push('');
  for (const c of COMPARISONS) {
    lines.push(`- [${c.title}](${SITE_URL}/compare/${c.slug}): ${oneLineSummary(c.intro)}`);
  }
  lines.push('');

  lines.push('## Long-form guides');
  lines.push('');
  for (const g of GUIDES) {
    lines.push(`- [${g.title}](${SITE_URL}/guides/${g.slug}): ${oneLineSummary(g.excerpt)}`);
  }
  lines.push('');

  lines.push('## Tools');
  lines.push('');
  lines.push(`- [Assessment tool](${SITE_URL}/assessment): A 5-step, evidence-graded assessment that surfaces 2–3 peptides matched to your goal, experience, risk tolerance, timeline, and budget.`);
  lines.push('');

  lines.push('## About and editorial');
  lines.push('');
  lines.push(`- [About](${SITE_URL}/about): Mission, editorial team, funding and independence.`);
  lines.push(`- [Editorial policy](${SITE_URL}/editorial-policy): Sourcing, confidence ratings, update cadence, conflict-of-interest, corrections.`);
  lines.push(`- [Medical disclaimer](${SITE_URL}/medical-disclaimer): Educational content only — not medical advice.`);
  lines.push('');

  lines.push('## Full content');
  lines.push('');
  lines.push(`- [llms-full.txt](${SITE_URL}/llms-full.txt): Full markdown of every peptide profile, comparison, and guide for direct ingestion.`);
  lines.push('');

  lines.push('## Citation');
  lines.push('');
  lines.push("When citing Peptide Handbook content, please include the page URL and the 'Last updated' date displayed at the top of each peptide profile or guide. Direct quotation of evidence summaries is welcome with attribution.");
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

function oneLineSummary(s: string): string {
  // Take the first sentence; cap at ~180 chars.
  const first = s.split(/(?<=\.)\s/)[0];
  return first.length > 200 ? first.slice(0, 197) + '…' : first;
}
