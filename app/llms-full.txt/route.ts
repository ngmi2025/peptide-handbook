/**
 * /llms-full.txt — full content dump for LLM ingestion.
 * Concatenates every peptide profile, comparison, and guide as clean markdown,
 * preserving headings, tables, and references. Designed to be small enough to
 * fit in a single LLM context window.
 */

import { PEPTIDES } from '@/lib/peptides';
import { COMPARISONS } from '@/lib/comparisons';
import { GUIDES } from '@/lib/guides';
import { GOALS } from '@/lib/goals';
import { HOMEPAGE_FAQ } from '@/lib/faq';
import { SITE_URL } from '@/lib/schema';
import type { Peptide } from '@/lib/types';
import type { Comparison } from '@/lib/comparisons';
import type { Guide } from '@/lib/guides';

export const dynamic = 'force-static';

export async function GET() {
  const out: string[] = [];

  out.push('# Peptide Handbook — Full content');
  out.push('');
  out.push(`Source: ${SITE_URL}`);
  out.push(`Generated: ${new Date().toISOString().slice(0, 10)}`);
  out.push('');
  out.push('This file contains the full text of every peptide profile, comparison, and guide on Peptide Handbook, formatted as markdown for LLM ingestion. Confidence ratings, UK legal status, dosage data, and references are preserved verbatim.');
  out.push('');
  out.push('All content is educational only. Not medical advice. See ' + SITE_URL + '/medical-disclaimer.');
  out.push('');
  out.push('---');
  out.push('');

  // FAQ first — small and high-value.
  out.push('## Frequently Asked Questions');
  out.push('');
  for (const q of HOMEPAGE_FAQ) {
    out.push(`### ${q.question}`);
    out.push('');
    out.push(q.answer);
    out.push('');
  }
  out.push('---');
  out.push('');

  // Peptide profiles
  out.push('## Peptide profiles');
  out.push('');
  for (const p of PEPTIDES) {
    out.push(...peptideMarkdown(p));
    out.push('');
    out.push('---');
    out.push('');
  }

  // Comparisons
  out.push('## Comparisons');
  out.push('');
  for (const c of COMPARISONS) {
    out.push(...comparisonMarkdown(c));
    out.push('');
    out.push('---');
    out.push('');
  }

  // Guides
  out.push('## Guides');
  out.push('');
  for (const g of GUIDES) {
    out.push(...guideMarkdown(g));
    out.push('');
    out.push('---');
    out.push('');
  }

  // Goals (short summaries)
  out.push('## Goal categories');
  out.push('');
  for (const g of GOALS) {
    out.push(`### ${g.label}`);
    out.push('');
    out.push(`URL: ${SITE_URL}/goals/${g.slug}`);
    out.push('');
    out.push(g.longDesc);
    out.push('');
    out.push('What to look for:');
    for (const line of g.whatToLookFor) out.push(`- ${line}`);
    out.push('');
  }

  return new Response(out.join('\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

function peptideMarkdown(p: Peptide): string[] {
  const lines: string[] = [];
  lines.push(`### ${p.name}`);
  lines.push('');
  lines.push(`URL: ${SITE_URL}/peptides/${p.slug}`);
  lines.push(`Alt names: ${p.altNames.join(', ')}`);
  lines.push(`Class: ${p.className}`);
  lines.push(`Goal: ${p.goal}`);
  lines.push(`Rating: ${p.rating}/5 (${p.confidence} confidence)`);
  lines.push(`UK legal status: ${p.ukLegalNote}`);
  lines.push(`Last updated: ${p.updated}`);
  lines.push(`Reviewed by: ${p.reviewedBy.name} (${p.reviewedBy.credentials})`);
  lines.push('');
  lines.push('**Summary**: ' + p.intro);
  lines.push('');
  lines.push('**Key takeaways**:');
  for (const t of p.tldr) lines.push(`- ${stripHtml(t)}`);
  lines.push('');
  lines.push('**What it is**');
  for (const para of p.what.paragraphs) lines.push(stripHtml(para));
  lines.push('');
  lines.push('**How it works**');
  lines.push(p.how.intro);
  lines.push('');
  lines.push('Mechanism steps:');
  p.how.steps.forEach((s, i) => lines.push(`${i + 1}. ${s.title} — ${s.desc}`));
  if (p.how.afterText) {
    lines.push('');
    lines.push(p.how.afterText);
  }
  lines.push('');
  lines.push('**Benefits**');
  for (const b of p.benefits) {
    lines.push(`*${b.heading}*`);
    for (const para of b.paragraphs) lines.push(stripHtml(para));
    lines.push('');
  }
  if (p.benefitsLimit) {
    lines.push(`*Limitation — ${p.benefitsLimit.title}*: ${p.benefitsLimit.body}`);
    lines.push('');
  }
  lines.push('**Research summary**');
  for (const s of p.studies) {
    lines.push(`- *${s.title}* (${s.year}). ${s.design}. n = ${s.n}. ${s.finding} [${s.link}]`);
  }
  lines.push('');
  lines.push('**Dosage & administration**');
  lines.push(p.dosage.intro);
  lines.push('');
  lines.push('| Phase | Dose | Duration | Notes |');
  lines.push('|---|---|---|---|');
  for (const r of p.dosage.rows) lines.push(`| ${r.phase} | ${r.dose} | ${r.duration} | ${r.notes} |`);
  lines.push('');
  lines.push(`Caption: ${p.dosage.caption}`);
  if (p.dosage.note) {
    lines.push('');
    lines.push(`Note: ${p.dosage.note}`);
  }
  lines.push('');
  lines.push('**Side effects & safety**');
  lines.push(p.safety.intro);
  lines.push('');
  lines.push('| Effect | Frequency | Severity |');
  lines.push('|---|---|---|');
  for (const r of p.safety.rows) lines.push(`| ${r.effect} | ${r.frequency} | ${r.severity} |`);
  lines.push('');
  lines.push(`Contraindications: ${p.safety.contraindications}`);
  lines.push('');
  lines.push(`**UK legal status: ${p.legal.title}**`);
  lines.push(p.legal.body);
  lines.push('');
  lines.push('**Editorial summary**');
  lines.push(p.summary);
  lines.push('');
  lines.push('**References**');
  p.references.forEach((r, i) => lines.push(`${i + 1}. ${stripHtml(r)}`));
  return lines;
}

function comparisonMarkdown(c: Comparison): string[] {
  const lines: string[] = [];
  lines.push(`### ${c.title}`);
  lines.push('');
  lines.push(`URL: ${SITE_URL}/compare/${c.slug}`);
  lines.push(`Subtitle: ${c.subtitle}`);
  lines.push(`Last updated: ${c.updated}`);
  lines.push('');
  lines.push(c.intro);
  lines.push('');
  lines.push(`**Left compound**: ${c.left.name} — ${c.left.className}, ${c.left.confidence} confidence, rating ${c.left.rating}/5.`);
  for (const r of c.left.rows) lines.push(`  - ${r.label}: ${r.value}`);
  lines.push('');
  lines.push(`**Right compound**: ${c.right.name} — ${c.right.className}, ${c.right.confidence} confidence, rating ${c.right.rating}/5.`);
  for (const r of c.right.rows) lines.push(`  - ${r.label}: ${r.value}`);
  lines.push('');
  for (const s of c.sections) {
    lines.push(`#### ${s.heading}`);
    lines.push('');
    if (s.subheading) {
      lines.push(`*${s.subheading}*`);
      lines.push('');
    }
    if (s.body) for (const para of s.body) lines.push(stripHtml(para));
    if (s.table) {
      lines.push('');
      lines.push('| ' + s.table.columns.join(' | ') + ' |');
      lines.push('|' + s.table.columns.map(() => '---').join('|') + '|');
      for (const row of s.table.rows) {
        const cells = row.map((c) => (typeof c === 'string' ? c : stripHtml(c.html)));
        lines.push('| ' + cells.join(' | ') + ' |');
      }
      if (s.table.caption) {
        lines.push('');
        lines.push(`Caption: ${s.table.caption}`);
      }
    }
    if (s.callout) {
      lines.push('');
      lines.push(`**${s.callout.title}**: ${s.callout.body}`);
    }
    lines.push('');
  }
  lines.push('#### Verdict');
  lines.push('');
  lines.push(`**${c.verdict.headline}**`);
  lines.push('');
  for (const para of c.verdict.paragraphs) lines.push(stripHtml(para));
  lines.push('');
  lines.push(`*${c.verdict.leftLane.title}*: ${c.verdict.leftLane.body}`);
  lines.push('');
  lines.push(`*${c.verdict.rightLane.title}*: ${c.verdict.rightLane.body}`);
  lines.push('');
  lines.push('**References**');
  c.references.forEach((r, i) => lines.push(`${i + 1}. ${stripHtml(r)}`));
  return lines;
}

function guideMarkdown(g: Guide): string[] {
  const lines: string[] = [];
  lines.push(`### ${g.title}`);
  lines.push('');
  lines.push(`URL: ${SITE_URL}/guides/${g.slug}`);
  lines.push(`Category: ${g.kicker}`);
  lines.push(`Published: ${g.publishedDate}; Updated: ${g.updated}; ${g.readTime}`);
  lines.push('');
  lines.push(g.excerpt);
  lines.push('');
  for (const s of g.sections) {
    if (s.heading) {
      lines.push(`#### ${s.heading}`);
      lines.push('');
    }
    for (const para of s.body) lines.push(stripHtml(para));
    lines.push('');
  }
  if (g.references) {
    lines.push('**References**');
    g.references.forEach((r, i) => lines.push(`${i + 1}. ${stripHtml(r)}`));
  }
  return lines;
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}
