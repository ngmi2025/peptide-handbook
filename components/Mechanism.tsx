import { Fragment, type ReactNode } from 'react';

export type MechanismStep = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export function Mechanism({ steps }: { steps: MechanismStep[] }) {
  return (
    <div
      className="mechanism"
      style={{ gridTemplateColumns: gridFor(steps.length) }}
    >
      {steps.map((s, i) => (
        <Fragment key={i}>
          <div className="mechanism__step">
            <div className="mechanism__step-icon">{s.icon}</div>
            <span className="mechanism__step-num">Step {i + 1}</span>
            <h5 className="mechanism__step-title">{s.title}</h5>
            <p className="mechanism__step-desc">{s.desc}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="mechanism__chev" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

function gridFor(n: number) {
  if (n <= 1) return '1fr';
  const cols: string[] = [];
  for (let i = 0; i < n; i++) {
    cols.push('1fr');
    if (i < n - 1) cols.push('28px');
  }
  return cols.join(' ');
}
