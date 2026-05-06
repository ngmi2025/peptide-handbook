import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  kicker: string;
  title: string;
  date: string;
  readTime: string;
  cover: ReactNode;
};

export function ArticleCard({ href, kicker, title, date, readTime, cover }: Props) {
  return (
    <Link href={href} className="article-card">
      <div className="article-card__cover">{cover}</div>
      <span className="article-card__kicker">{kicker}</span>
      <h4 className="article-card__title">{title}</h4>
      <span className="article-card__meta tabular">{date} · {readTime}</span>
    </Link>
  );
}

export function CoverChart() {
  return (
    <svg viewBox="0 0 200 150" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="200" height="150" fill="url(#grid)" />
      <path d="M 10 120 L 40 100 L 70 90 L 100 70 L 130 60 L 160 40 L 190 30" fill="none" stroke="#4F7C6A" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 10 120 L 40 100 L 70 90 L 100 70 L 130 60 L 160 40 L 190 30 L 190 130 L 10 130 Z" fill="#4F7C6A" fillOpacity="0.08" />
      {[
        [40, 100],
        [70, 90],
        [100, 70],
        [130, 60],
        [160, 40],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#4F7C6A" />
      ))}
    </svg>
  );
}

export function CoverBars() {
  return (
    <svg viewBox="0 0 200 150" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
      <line x1="20" y1="125" x2="190" y2="125" stroke="#D1D5DB" strokeWidth="0.5" />
      {[70, 100, 60, 85, 50, 95, 75].map((h, i) => (
        <rect key={i} x={28 + i * 22} y={125 - h} width="14" height={h} fill={i % 2 === 0 ? '#4F7C6A' : '#E6F1EB'} />
      ))}
    </svg>
  );
}

export function CoverMolecule() {
  return (
    <svg viewBox="0 0 200 150" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <line x1="40" y1="110" x2="80" y2="80" stroke="#0A0A0A" strokeWidth="1.2" />
      <line x1="80" y1="80" x2="125" y2="95" stroke="#0A0A0A" strokeWidth="1.2" />
      <line x1="125" y1="95" x2="160" y2="55" stroke="#0A0A0A" strokeWidth="1.2" />
      <line x1="160" y1="55" x2="180" y2="90" stroke="#0A0A0A" strokeWidth="1.2" />
      <circle cx="40" cy="110" r="7" fill="#fff" stroke="#0A0A0A" strokeWidth="1.2" />
      <circle cx="80" cy="80" r="6.5" fill="#4F7C6A" />
      <circle cx="125" cy="95" r="7" fill="#fff" stroke="#0A0A0A" strokeWidth="1.2" />
      <circle cx="160" cy="55" r="8" fill="#4F7C6A" />
      <circle cx="180" cy="90" r="6" fill="#fff" stroke="#0A0A0A" strokeWidth="1.2" />
    </svg>
  );
}

export function CoverComparison() {
  return (
    <svg viewBox="0 0 200 150" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
      <line x1="100" y1="20" x2="100" y2="130" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="3 3" />
      <text x="50" y="40" fontFamily="Inter" fontSize="9" fontWeight="600" textAnchor="middle" fill="#0A0A0A">TIRZEPATIDE</text>
      <text x="150" y="40" fontFamily="Inter" fontSize="9" fontWeight="600" textAnchor="middle" fill="#0A0A0A">SEMAGLUTIDE</text>
      <rect x="20" y="60" width="60" height="6" fill="#4F7C6A" />
      <rect x="80" y="60" width="2" height="6" fill="#0A0A0A" />
      <rect x="20" y="80" width="50" height="6" fill="#4F7C6A" fillOpacity="0.4" />
      <rect x="120" y="60" width="48" height="6" fill="#4F7C6A" />
      <rect x="118" y="60" width="2" height="6" fill="#0A0A0A" />
      <rect x="120" y="80" width="40" height="6" fill="#4F7C6A" fillOpacity="0.4" />
      <text x="20" y="110" fontFamily="Inter" fontSize="8" fill="#717680">Weight reduction</text>
      <text x="120" y="110" fontFamily="Inter" fontSize="8" fill="#717680">Weight reduction</text>
    </svg>
  );
}
