import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c2 0 3.5 1.5 3.5 3.5L19 8.5c1.7 1 1.7 3.5 0 4.5l-3.5 2c0 2-1.5 3.5-3.5 3.5s-3.5-1.5-3.5-3.5L5 13c-1.7-1-1.7-3.5 0-4.5l3.5-2C8.5 4.5 10 3 12 3Z" />
      <circle cx="12" cy="10.8" r="2.2" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h3l1.5-2.5h7L17 8h3v11H4V8Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  );
}

export function MicIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
    </svg>
  );
}

export function TranslateIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 5h9M7.5 3v2M5 5c.5 3 2.5 5.5 5.5 7M10 5c-.5 3-2.5 5.5-6 7.5" />
      <path d="m12.5 20 4-10 4 10M14 16.5h5" />
    </svg>
  );
}

export function GlassesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 9h19M4 9c0 4 1 6.5 4 6.5S11 13 11.5 10.5c.3-1 1.2-1 1.5 0 .5 2.5 1 5 4 5s4-2.500 4-6.500" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 4 16 16M20 4 4 20" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="currentColor" stroke="none" />
      <path d="m10.5 9.5 4 2.500-4 2.500v-5Z" fill="#0a0a0a" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 10v8M6 6.500v.01M10.500 18v-8M10.500 13c0-2 1.200-3 2.800-3s2.700 1 2.700 3v5" />
    </svg>
  );
}
