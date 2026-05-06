import Link from 'next/link';
import { SiteHeader, DisclaimerStrip } from '@/components/Header';
import { SiteFooter } from '@/components/Footer';
import { ArrowRight } from '@/components/Icons';

export default function NotFound() {
  return (
    <>
      <DisclaimerStrip />
      <SiteHeader />

      <div className="wrap">
        <article className="simple-page" style={{ textAlign: 'center', paddingTop: 120, paddingBottom: 120 }}>
          <span className="eyebrow">404</span>
          <h1>Page not found</h1>
          <p className="lead" style={{ marginTop: 16, marginBottom: 32 }}>
            That URL doesn&apos;t exist on the handbook. The peptide directory and assessment tool are the fastest ways
            to find what you&apos;re looking for.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/peptides" className="btn btn--primary">
              Browse all peptides <ArrowRight size={14} />
            </Link>
            <Link href="/assessment" className="btn btn--secondary">
              Start the assessment
            </Link>
          </div>
        </article>
      </div>

      <SiteFooter />
    </>
  );
}
