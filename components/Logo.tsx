type LogoProps = {
  height?: number;
  mark?: 'horizontal' | 'icon';
  color?: string;
  sage?: string;
};

export function PeptideLogo({
  height = 28,
  mark = 'horizontal',
  color = '#0A0A0A',
  sage = '#4F7C6A',
}: LogoProps) {
  const scale = height / 32;
  const Chain = () => (
    <svg width={48 * scale} height={32 * scale} viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <line x1="6" y1="24" x2="18" y2="14" stroke={color} strokeWidth="1.5" />
      <line x1="18" y1="14" x2="30" y2="18" stroke={color} strokeWidth="1.5" />
      <line x1="30" y1="18" x2="42" y2="8" stroke={color} strokeWidth="1.5" />
      <circle cx="6" cy="24" r="4" fill="white" stroke={color} strokeWidth="1.5" />
      <circle cx="18" cy="14" r="3.5" fill={sage} />
      <circle cx="30" cy="18" r="3.5" fill="white" stroke={color} strokeWidth="1.5" />
      <circle cx="42" cy="8" r="4.5" fill={sage} />
    </svg>
  );

  if (mark === 'icon') return <Chain />;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, height }}>
      <Chain />
      <div style={{ height: height * 0.85, width: 1, background: 'rgba(0,0,0,0.18)' }} />
      <span style={{ fontSize: height * 0.7, fontWeight: 600, letterSpacing: '-0.02em', color, lineHeight: 1 }}>
        Peptide<span style={{ fontWeight: 400 }}> Handbook</span>
      </span>
    </div>
  );
}
