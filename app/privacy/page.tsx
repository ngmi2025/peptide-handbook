import type { Metadata } from 'next';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Peptide Handbook handles your data. GDPR-compliant; minimal data collection.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader active="about" />

      <div className="wrap">
        <article className="simple-page">
          <span className="eyebrow">Legal</span>
          <h1>Privacy policy</h1>
          <p className="lead">
            We collect the minimum data needed to operate the site and honour any requests you make of us. This page
            describes what we collect, why, and how to remove it.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Email addresses</strong> — only when you choose to subscribe to the Peptide Starter Handbook or
              the personalised assessment-results PDF. Stored in our email service provider; used only for the purpose
              you submitted it for.
            </li>
            <li>
              <strong>Anonymous analytics</strong> — pageviews, referrer, country-level location. We do not collect
              personally identifiable data via analytics. We do not use third-party advertising trackers.
            </li>
            <li>
              <strong>Assessment answers</strong> — your quiz responses are passed in the URL only. We do not store them
              server-side or tie them to any identifier.
            </li>
          </ul>

          <h2>What we do not collect</h2>
          <ul>
            <li>Health records, medication lists, or any clinical data.</li>
            <li>Payment information (we do not sell anything).</li>
            <li>Browsing data outside this site.</li>
          </ul>

          <h2>Your rights (UK GDPR)</h2>
          <p>
            You have the right to access, rectify, or erase any personal data we hold about you. To exercise these
            rights, email <strong>privacy@peptidehandbook.co.uk</strong>. We respond within 30 days.
          </p>

          <h2>Cookies</h2>
          <p>
            We use a single first-party cookie to remember your acceptance of the educational disclaimer. We do not
            use third-party cookies, advertising cookies, or cross-site trackers.
          </p>
        </article>
      </div>

      <SiteFooter />
    </>
  );
}
