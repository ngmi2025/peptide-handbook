import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { PeptideProfileBody } from '@/components/PeptideProfileBody';
import { getPeptide, PEPTIDES } from '@/lib/peptides';

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
    alternates: { canonical: `/peptides/${p.slug}` },
    openGraph: {
      title: `${p.name} — Peptide Handbook`,
      description: p.intro.slice(0, 200),
      type: 'article',
    },
  };
}

export default async function PeptidePage({ params }: Props) {
  const { slug } = await params;
  const p = getPeptide(slug);
  if (!p) notFound();

  const ldjson = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${p.name} — Peptide Handbook`,
    description: p.intro,
    dateModified: p.updated,
    medicalAudience: 'General public — educational use',
    reviewedBy: {
      '@type': 'Person',
      name: p.reviewedBy.name,
      jobTitle: p.reviewedBy.credentials,
    },
    about: {
      '@type': 'Drug',
      name: p.name,
      alternateName: p.altNames,
      drugClass: p.className,
      legalStatus: p.ukLegalNote,
    },
  };

  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="peptides" />
      <PeptideProfileBody p={p} />
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldjson) }}
      />
    </>
  );
}
