import type { Metadata } from 'next';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Medical disclaimer',
  description: 'Educational content only. Not medical advice. How to read information on Peptide Handbook.',
  alternates: { canonical: '/medical-disclaimer' },
};

export default function MedicalDisclaimer() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="about" />

      <div className="wrap">
        <article className="simple-page">
          <span className="eyebrow">Disclaimer</span>
          <h1>Medical disclaimer</h1>
          <p className="lead">
            Peptide Handbook publishes educational content. Information on this site is not a substitute for advice,
            diagnosis, or treatment from a qualified healthcare professional.
          </p>

          <h2>What this site is</h2>
          <p>
            Educational. Reference material on the published evidence behind specific peptide compounds, written by a
            clinician-reviewed editorial team. Designed to help readers understand the science, the safety profile, and
            the UK legal status of compounds they may encounter.
          </p>

          <h2>What this site is not</h2>
          <p>
            A medical practice. A pharmacy. A prescribing service. A vendor. A diagnosis platform. We do not provide
            individualised medical advice. Reading this site does not establish a clinician-patient relationship.
          </p>

          <h2>What you should do</h2>
          <p>
            Before starting, stopping, or changing any peptide regimen, consult a qualified UK clinician familiar with
            your medical history. Several of the compounds we cover are prescription-only medicines (POM); others are
            unlicensed, investigational, or available only through grey-market channels with no regulatory quality
            assurance. The decision to use any of them carries clinical, legal, and supply-quality risk that is
            specific to your individual circumstances.
          </p>

          <h2>Reporting adverse events</h2>
          <p>
            Suspected adverse reactions to medicines should be reported via the MHRA Yellow Card scheme:{' '}
            <a href="https://yellowcard.mhra.gov.uk" rel="noopener noreferrer">yellowcard.mhra.gov.uk</a>. Reports
            contribute directly to UK pharmacovigilance.
          </p>

          <h2>Counterfeit medicine concerns</h2>
          <p>
            If you suspect you have received a counterfeit medicine — particularly a counterfeit GLP-1 injector pen —
            stop using it, retain the packaging, and report to the MHRA via the Yellow Card scheme. Suspicious
            suppliers can also be reported to the MHRA Enforcement Group.
          </p>
        </article>
      </div>

      <SiteFooter />
    </>
  );
}
