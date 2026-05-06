import type { Metadata } from 'next';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'Terms of use for Peptide Handbook. Educational content only — read alongside the medical disclaimer.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="about" />

      <div className="wrap">
        <article className="simple-page">
          <span className="eyebrow">Legal</span>
          <h1>Terms of use</h1>
          <p className="lead">
            By using Peptide Handbook you agree to the following. Read alongside the medical disclaimer and editorial
            policy.
          </p>

          <h2>Educational use</h2>
          <p>
            All content is provided for educational purposes only. It is not medical advice. Specific clinical
            decisions must be made with a qualified UK-registered prescriber familiar with your medical history.
          </p>

          <h2>Accuracy</h2>
          <p>
            We make a substantial effort to ensure accuracy at the time of publication and review content quarterly.
            Medical evidence changes — particularly in this field — and information may become out of date between
            review cycles. Always check the &quot;last updated&quot; date and consider whether more recent evidence may exist.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Content on this site is © Peptide Handbook unless otherwise marked. Studies, regulatory documents, and
            other primary sources are cited and remain the property of their respective owners.
          </p>

          <h2>Liability</h2>
          <p>
            Peptide Handbook accepts no liability for clinical decisions made on the basis of content published here.
            We are an educational resource. Treatment decisions are always between you and your clinician.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Disputes are subject to the exclusive
            jurisdiction of the courts of England and Wales.
          </p>
        </article>
      </div>

      <SiteFooter />
    </>
  );
}
