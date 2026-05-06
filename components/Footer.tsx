import Link from 'next/link';
import { PeptideLogo } from './Logo';

const goals = [
  { label: 'Fat Loss', href: '/goals/fat-loss' },
  { label: 'Muscle Growth', href: '/goals/muscle-growth' },
  { label: 'Recovery', href: '/goals/recovery' },
  { label: 'Longevity', href: '/goals/longevity' },
  { label: 'Sleep', href: '/goals/sleep' },
  { label: 'Cognitive', href: '/goals/cognitive' },
];

const peptides = [
  { label: 'BPC-157', href: '/peptides/bpc-157' },
  { label: 'CJC-1295', href: '/peptides/cjc-1295' },
  { label: 'Ipamorelin', href: '/peptides/ipamorelin' },
  { label: 'Semaglutide', href: '/peptides/semaglutide' },
  { label: 'Tirzepatide', href: '/peptides/tirzepatide' },
  { label: 'View all', href: '/peptides' },
];

const guides = [
  { label: 'Latest research', href: '/guides' },
  { label: 'Comparisons', href: '/compare' },
  { label: 'UK legal status', href: '/guides/uk-legal-status' },
  { label: 'Best peptides for fat loss', href: '/guides/best-peptides-for-fat-loss-uk' },
  { label: 'Avoiding counterfeit pens', href: '/guides/avoiding-counterfeit-injector-pens' },
];

const company = [
  { label: 'About', href: '/about' },
  { label: 'Editorial standards', href: '/editorial-policy' },
  { label: 'Authors', href: '/about#authors' },
  { label: 'Contact', href: '/about#contact' },
  { label: 'Press', href: '/about#press' },
];

const legal = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Medical disclaimer', href: '/medical-disclaimer' },
  { label: 'Editorial policy', href: '/editorial-policy' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <PeptideLogo height={26} color="#fff" />
            <p>
              The UK&apos;s trusted decision engine for peptides, performance, and longevity. Science.
              Longevity. Potential.
            </p>
          </div>
          <FooterColumn heading="Goals" items={goals} />
          <FooterColumn heading="Peptides A–Z" items={peptides} />
          <FooterColumn heading="Guides" items={guides} />
          <FooterColumn heading="Company" items={company} />
        </div>
        <div className="site-footer__disclaimer">
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>Educational content only.</strong>{' '}
            Peptide Handbook does not provide medical advice, diagnosis, or treatment. Information here is intended
            for educational purposes only. Always consult a qualified clinician before starting any compound. Several
            compounds discussed are prescription-only or not approved for human use in the UK.
          </p>
          <div className="site-footer__legal">
            {legal.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 32, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} Peptide Handbook. Registered in England &amp; Wales.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ heading, items }: { heading: string; items: { label: string; href: string }[] }) {
  return (
    <div className="site-footer__col">
      <h5>{heading}</h5>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
