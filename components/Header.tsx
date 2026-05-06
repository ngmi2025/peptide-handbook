import Link from 'next/link';
import { PeptideLogo } from './Logo';
import { ArrowRight, Search } from './Icons';

type HeaderProps = {
  active?: 'goals' | 'peptides' | 'guides' | 'tool' | 'about';
};

export function SiteHeader({ active }: HeaderProps) {
  const link = (key: HeaderProps['active'], href: string, label: string) => (
    <Link href={href} className={active === key ? 'active' : ''}>
      {label}
    </Link>
  );
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" aria-label="Peptide Handbook home">
          <PeptideLogo height={26} />
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {link('goals', '/goals', 'Goals')}
          {link('peptides', '/peptides', 'Peptides')}
          {link('guides', '/guides', 'Guides')}
          {link('tool', '/assessment', 'Tool')}
          {link('about', '/about', 'About')}
        </nav>
        <div className="site-header__right">
          <Link href="/peptides" className="site-header__search" aria-label="Search peptides">
            <Search size={18} />
          </Link>
          <Link href="/assessment" className="btn btn--primary btn--sm">
            Start assessment <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function DisclaimerStrip({ text }: { text?: string }) {
  return (
    <div className="disclaimer-strip">
      <span>
        <strong>Educational content only.</strong>{' '}
        {text ?? 'Not medical advice. Consult a qualified clinician before starting any compound.'}
      </span>
    </div>
  );
}
