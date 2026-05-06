import type { Metadata } from 'next';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Peptide Handbook',
  description:
    "Who we are, why we exist, and how we maintain editorial independence. The UK's evidence-first guide to peptides — independently funded, no products sold, no affiliates.",
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="about" />

      <div className="wrap">
        <article className="simple-page">
          <span className="eyebrow">About</span>
          <h1>Why this exists</h1>
          <p className="lead">
            Peptide Handbook is the UK&apos;s evidence-first guide to peptides, performance, and longevity. We exist
            because the gap between what the science actually says and what the market is selling has become large
            enough to be hazardous — and nobody UK-based was filling it.
          </p>

          <h2>Our position</h2>
          <p>
            We believe most readers approaching this category deserve three things: clear summaries of the published
            evidence; honest distinctions between high-evidence and low-evidence compounds; and explicit, current
            guidance on UK legal status. Most existing sources do at most one of these.
          </p>
          <p>
            We are educational. We are not a clinic, not a vendor, not an affiliate marketer, and not a forum. Every
            page on this site links back to primary sources. Confidence levels are graded against trial design, sample
            size, and replication — not against what would make the most sales.
          </p>

          <h2 id="authors">Editorial team</h2>
          <ul>
            <li>
              <strong>Dr. Rachel Okonkwo</strong> — MBBS, Endocrinology (GMC reg. 7211983). Reviews GLP-1 and metabolic
              compound profiles.
            </li>
            <li>
              <strong>Dr. Mark Halligan</strong> — MBChB, Sports &amp; Exercise Medicine (GMC reg. 6622401). Reviews
              recovery and growth-hormone-axis content.
            </li>
            <li>
              <strong>Dr. Caitlin Reeve</strong> — PhD, Sleep Neurophysiology, Imperial College London. Reviews sleep
              and cognitive content.
            </li>
            <li>
              <strong>Dr. Nadia Hassan</strong> — PhD, Mitochondrial Biology, University of Manchester. Reviews
              longevity and mitochondrial-derived peptide content.
            </li>
          </ul>

          <h2>Funding and independence</h2>
          <p>
            Peptide Handbook is independently funded. We do not sell products. We do not earn affiliate commission on
            peptide purchases or clinic referrals. We do not accept editorial input from manufacturers, distributors,
            or peptide vendors. Funding sources will be disclosed publicly in full.
          </p>

          <h2 id="contact">Contact</h2>
          <p>
            For corrections, evidence updates, partnership inquiries, or press: <strong>hello@peptidehandbook.co.uk</strong>.
          </p>
          <p>For Yellow Card-equivalent reporting of suspected counterfeit medicines or adverse reactions, please
            contact the MHRA directly via <a href="https://yellowcard.mhra.gov.uk" rel="noopener noreferrer">yellowcard.mhra.gov.uk</a>.</p>
        </article>
      </div>

      <SiteFooter />
    </>
  );
}
