'use client';

import { useState, type FormEvent } from 'react';
import { Check } from './Icons';

export function EmailGate() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <div className="email-gate" style={{ marginTop: 48 }}>
      <div>
        <h3>Get your full personalised breakdown</h3>
        <p>
          A detailed PDF covering each match: dosing protocols from the literature, side-effect timelines, study
          citations, and UK access guidance — sent to your inbox.
        </p>
      </div>
      {!sent ? (
        <form className="email-form" style={{ minWidth: 320 }} onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="you@example.com"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn--primary">
            Send me the PDF
          </button>
        </form>
      ) : (
        <div
          className="chip"
          style={{ background: '#9bc3b1', color: 'var(--black)', borderColor: 'transparent' }}
        >
          <Check size={14} /> Sent — check your inbox
        </div>
      )}
    </div>
  );
}
