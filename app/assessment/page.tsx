import type { Metadata } from 'next';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { AssessmentQuiz } from '@/components/AssessmentQuiz';
import { JsonLd } from '@/components/JsonLd';
import {
  jsonLdGraph,
  assessmentHowToSchema,
  assessmentWebApplicationSchema,
  breadcrumbSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Find the right peptide for your goal',
  description:
    'A 90-second, evidence-graded assessment. Five questions, then 2–3 peptides matched to your goal, experience, risk tolerance, timeline, and budget — with the studies behind each.',
  alternates: { canonical: '/assessment' },
};

type Props = { searchParams: Promise<{ goal?: string }> };

export default async function AssessmentPage({ searchParams }: Props) {
  const { goal } = await searchParams;

  return (
    <>
      <DisclaimerStrip text="Educational results based on publicly available research. Not a prescription or medical advice." />
      <SiteHeader active="tool" />

      <section className="profile-hero">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Assessment tool</span>
          <h1 className="profile-hero__title" style={{ marginTop: 8 }}>
            Find the right peptide for your goal
          </h1>
          <p className="profile-hero__sub">
            Five questions. Ninety seconds. We surface 2–3 compounds matched to your goal, experience, and risk
            tolerance — with the evidence behind each recommendation.
          </p>
        </div>
      </section>

      <section className="section">
        <AssessmentQuiz initialGoal={goal} />
      </section>

      <SiteFooter />
      <JsonLd
        data={jsonLdGraph(
          assessmentHowToSchema(),
          assessmentWebApplicationSchema(),
          breadcrumbSchema([
            { name: 'Handbook', url: '/' },
            { name: 'Assessment', url: '/assessment' },
          ]),
        )}
      />
    </>
  );
}
