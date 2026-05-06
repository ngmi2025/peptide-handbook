import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number; children?: ReactNode };

export function Icon({ size = 20, children, strokeWidth = 1.5, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Icon>
);

export const ArrowUpRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);

export const Search = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icon>
);

export const Check = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 13 4 4L19 7" />
  </Icon>
);

export const Star = ({ filled = false, size = 14 }: { filled?: boolean; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const IconFatLoss = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 17l4-4 4 3 4-7 6 6" />
    <path d="M3 21h18" />
  </Icon>
);

export const IconMuscle = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 12h3l2-3 3 6 3-9 2 6h3" />
  </Icon>
);

export const IconRecovery = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21a9 9 0 1 0-9-9" />
    <path d="M3 12h4l2-3 3 6 2-3" />
  </Icon>
);

export const IconLongevity = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const IconSleep = (p: IconProps) => (
  <Icon {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </Icon>
);

export const IconCognitive = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 4.5A3.5 3.5 0 0 0 5.5 8v.5A3 3 0 0 0 4 14a3 3 0 0 0 2 2.8V19a3 3 0 0 0 3 3" />
    <path d="M15 4.5A3.5 3.5 0 0 1 18.5 8v.5A3 3 0 0 1 20 14a3 3 0 0 1-2 2.8V19a3 3 0 0 1-3 3" />
    <path d="M9 4.5h6" />
    <path d="M9 12h6" />
  </Icon>
);

export const IconBeaker = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 3h6M10 3v6L5 19a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V3" />
    <path d="M7.5 14h9" />
  </Icon>
);

export const IconScale = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v18" />
    <path d="M5 7h14" />
    <path d="M5 7l-2 6a4 4 0 0 0 8 0L9 7" />
    <path d="M19 7l-2 6a4 4 0 0 0 8 0l-2-6" />
  </Icon>
);

export const IconShield = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

export const IconInjection = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 12h18M12 3v18" />
  </Icon>
);

export const IconReceptor = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </Icon>
);

export const IconInsulin = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 12h6l2-6 4 12 2-6h4" />
  </Icon>
);

export const IconClock = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const IconBrain = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 4.5A3.5 3.5 0 0 0 5.5 8v.5A3 3 0 0 0 4 14a3 3 0 0 0 2 2.8V19a3 3 0 0 0 3 3" />
    <path d="M15 4.5A3.5 3.5 0 0 1 18.5 8v.5A3 3 0 0 1 20 14a3 3 0 0 1-2 2.8V19a3 3 0 0 1-3 3" />
  </Icon>
);

export const IconCell = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9h6v6H9z" />
  </Icon>
);

export const IconTissue = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12c0-3 2-6 7-6s7 3 7 6-2 6-7 6-7-3-7-6z" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </Icon>
);
