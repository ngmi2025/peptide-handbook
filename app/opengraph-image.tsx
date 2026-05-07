import { ImageResponse } from 'next/og';

export const alt = "Peptide Handbook — the UK's evidence-first guide to peptides, performance, and longevity";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Brand mark + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg width="60" height="40" viewBox="0 0 48 32">
            <line x1="6" y1="24" x2="18" y2="14" stroke="#0A0A0A" strokeWidth="1.5" />
            <line x1="18" y1="14" x2="30" y2="18" stroke="#0A0A0A" strokeWidth="1.5" />
            <line x1="30" y1="18" x2="42" y2="8" stroke="#0A0A0A" strokeWidth="1.5" />
            <circle cx="6" cy="24" r="4" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" />
            <circle cx="18" cy="14" r="3.5" fill="#4F7C6A" />
            <circle cx="30" cy="18" r="3.5" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" />
            <circle cx="42" cy="8" r="4.5" fill="#4F7C6A" />
          </svg>
          <div style={{ width: 1, height: 32, background: 'rgba(0,0,0,0.18)' }} />
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#0A0A0A',
              display: 'flex',
            }}
          >
            <span>Peptide</span>
            <span style={{ fontWeight: 400, marginLeft: 8 }}>Handbook</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            marginTop: 80,
            fontSize: 18,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#4F7C6A',
            fontWeight: 500,
          }}
        >
          Science. Longevity. Potential.
        </div>

        {/* Headline */}
        <div
          style={{
            marginTop: 24,
            fontSize: 68,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            fontWeight: 600,
            color: '#0A0A0A',
            maxWidth: 920,
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          The UK&apos;s trusted guide to peptides, performance, and{' '}
          <span style={{ color: '#4F7C6A' }}>&nbsp;longevity</span>.
        </div>

        {/* Footer row */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 16, color: '#717680' }}>
              12 peptides reviewed · 320+ studies cited · Peer-reviewed by clinicians
            </div>
            <div style={{ fontSize: 14, color: '#717680' }}>peptidehandbook.co.uk</div>
          </div>
          <div
            style={{
              padding: '12px 24px',
              background: '#0A0A0A',
              color: '#FFFFFF',
              fontSize: 16,
              borderRadius: 999,
              letterSpacing: '0.02em',
            }}
          >
            Independently researched · UK
          </div>
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#4F7C6A',
          }}
        />
      </div>
    ),
    size,
  );
}
