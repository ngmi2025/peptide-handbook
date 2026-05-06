import type { ReactNode } from 'react';

type Props = {
  kind?: 'limit' | 'legal';
  title: string;
  children: ReactNode;
};

export function Callout({ kind = 'limit', title, children }: Props) {
  return (
    <div className={'callout callout--' + kind}>
      <div className="callout__icon">
        {kind === 'limit' ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v6M12 16.5v.5" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10h18M5 6h14l1 4-2 10H6L4 10l1-4z" />
            <path d="M9 14h6" />
          </svg>
        )}
      </div>
      <div>
        <h5 className="callout__title">{title}</h5>
        <div className="callout__body">{children}</div>
      </div>
    </div>
  );
}
