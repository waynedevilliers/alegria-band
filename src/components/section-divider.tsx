export interface SectionDividerProps {
  color: string;
  className?: string;
}

export function SectionDivider({ color, className = '' }: SectionDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-auto"
        style={{ display: 'block' }}
      >
        {/* Irregular brush-stroke edge with organic wave pattern */}
        <path
          d="M0,20 Q60,8 120,15 T240,12 T360,22 T480,10 T600,18 T720,14 T840,24 T960,12 T1080,20 T1200,16 T1320,22 T1440,18 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
