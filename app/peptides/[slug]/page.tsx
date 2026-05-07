import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { PeptideProfileBody } from '@/components/PeptideProfileBody';
import { JsonLd } from '@/components/JsonLd';
import { getPeptide, PEPTIDES } from '@/lib/peptides';
import {
  jsonLdGraph,
  peptideDrugSchema,
  peptideMedicalWebPageSchema,
  peptideAggregateRating,
  peptideReviewSchema,
  breadcrumbSchema,
} from '@/lib/schema';
import { GOALS } from '@/lib/goals';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PEPTIDES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPeptide(slug);
  if (!p) return { title: 'Peptide not found' };
  return {
    title: `${p.name} — Evidence, dosage, UK legal status`,
    description: p.intro.slice(0, 160),
    keywords: [p.name, ...p.altNames, p.className, p.classShort, `${p.name} UK`, `${p.name} dosage`, `${p.name} side effects`],
    alternates: { canonical: `/peptides/${p.slug}` },
    openGraph: {
      title: `${p.name} — Peptide Handbook`,
      description: p.intro.slice(0, 200),
      type: 'article',
      url: `/peptides/${p.slug}`,
    },
  };
}

export default async function PeptidePage({ params }: Props) {
  const { slug } = await params;
  const p = getPeptide(slug);
  if (!p) notFound();

  const goalLabel = GOALS.find((g) => g.slug === p.goal)?.label ?? 'Peptides';

  const graph = jsonLdGraph(
    peptideDrugSchema(p),
    peptideMedicalWebPageSchema(p),
    peptideAggregateRating(p),
    peptideReviewSchema(p),
    breadcrumbSchema([
      { name: 'Handbook', url: '/' },
      { name: 'Peptides', url: '/peptides' },
      { name: goalLabel, url: `/goals/${p.goal}` },
      { name: p.name, url: `/peptides/${p.slug}` },
    ]),
  );

  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="peptides" />
      <PeptideProfileBody p={p} />
      <SiteFooter />
      <JsonLd data={graph} />
    </>
  );
}
