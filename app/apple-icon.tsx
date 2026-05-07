import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
          borderRadius: 40,
        }}
      >
        <svg width="140" height="100" viewBox="0 0 48 32">
          <line x1="6" y1="24" x2="18" y2="14" stroke="#0A0A0A" strokeWidth="1.5" />
          <line x1="18" y1="14" x2="30" y2="18" stroke="#0A0A0A" strokeWidth="1.5" />
          <line x1="30" y1="18" x2="42" y2="8" stroke="#0A0A0A" strokeWidth="1.5" />
          <circle cx="6" cy="24" r="4" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" />
          <circle cx="18" cy="14" r="3.5" fill="#4F7C6A" />
          <circle cx="30" cy="18" r="3.5" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" />
          <circle cx="42" cy="8" r="4.5" fill="#4F7C6A" />
        </svg>
      </div>
    ),
    size,
  );
}
