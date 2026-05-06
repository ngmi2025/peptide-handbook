import type { Metadata } from 'next';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Editorial policy',
  description:
    'How content on Peptide Handbook is written, reviewed, updated, and corrected. Conflict-of-interest disclosure and citation standards.',
  alternates: { canonical: '/editorial-policy' },
};

export default function EditorialPolicy() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="about" />

      <div className="wrap">
        <article className="simple-page">
          <span className="eyebrow">Editorial standards</span>
          <h1>How we research, write, and review</h1>
          <p className="lead">
            Every page on Peptide Handbook is written, reviewed, and updated against the same set of editorial
            principles. This document describes them in full, so any reader can audit our process.
          </p>

          <h2>Sourcing</h2>
          <p>
            We prefer phase-3 RCT data over phase-2, and phase-2 over phase-1 or preclinical. Where preclinical or
            mechanistic data is the only available evidence, we say so explicitly and lower the confidence rating
            accordingly. We do not cite blog posts, vendor marketing material, podcast claims, or social-media threads
            as primary evidence.
          </p>
          <p>
            UK regulatory information comes from MHRA published documents, NICE technology appraisals, the British
            National Formulary, and primary legislation (Human Medicines Regulations 2012, Medicines and Medical Devices
            Act 2021). All citations include sufficient detail to locate the source independently.
          </p>

          <h2>Confidence ratings</h2>
          <p>Each peptide profile carries a confidence rating: High, Medium, or Low. These map to evidence quality:</p>
          <ul>
            <li>
              <strong>High</strong> — multiple completed phase-3 RCTs with consistent effect-size signals; regulatory
              approval in major markets; replicated findings.
            </li>
            <li>
              <strong>Medium</strong> — phase-2 data, single phase-3 trial, or strong mechanistic evidence with limited
              clinical replication.
            </li>
            <li>
              <strong>Low</strong> — preclinical only, single small clinical study, or evidence from a single research
              group without independent replication.
            </li>
          </ul>

          <h2>Update cadence</h2>
          <p>
            Every peptide profile is reviewed at least quarterly. Where new phase-3 data publishes, we update the
            relevant page within 30 days. Updates are timestamped. Significant changes (rating revisions, new
            confidence levels, new safety signals) trigger a documented changelog on the page.
          </p>

          <h2>Conflict of interest</h2>
          <p>
            Peptide Handbook does not sell peptides, supplements, or related products. We do not earn affiliate
            commission on peptide purchases, clinic referrals, or prescription dispensing. We do not accept editorial
            funding, sponsorship, or content input from peptide manufacturers, distributors, vendors, or clinics.
          </p>
          <p>
            All editorial-team members&apos; clinical practice affiliations are disclosed on their byline. Where any
            potential conflict exists for a specific topic, the affected reviewer recuses from that article.
          </p>

          <h2>Corrections</h2>
          <p>
            We welcome corrections. Email <strong>corrections@peptidehandbook.co.uk</strong> with the page URL, the
            specific claim, and the contradicting source. Corrections will be applied with a public changelog entry
            and acknowledgement.
          </p>
        </article>
      </div>

      <SiteFooter />
    </>
  );
}
