/**
 * DayFocusLab Brand Symbol
 * Two overlapping parallelograms representing direction and growth layers.
 */
export default function DFLSymbol({
  className = '',
  color = 'currentColor',
  secondaryColor,
  size = 24,
}: {
  className?: string;
  color?: string;
  secondaryColor?: string;
  size?: number;
}) {
  const secondary = secondaryColor || color;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Left parallelogram - top */}
      <polygon points="0,30 50,0 50,60 0,90" fill={color} />
      {/* Right parallelogram - top */}
      <polygon points="50,0 100,30 100,90 50,60" fill={secondary} />
      {/* Left parallelogram - bottom */}
      <polygon points="0,30 50,60 50,120 0,90" fill={color} opacity="0.6" />
      {/* Right parallelogram - bottom */}
      <polygon points="50,60 100,90 100,120 50,120" fill={secondary} opacity="0.6" />
      {/* Center gap (white space) */}
      <rect x="38" y="30" width="24" height="60" fill="white" />
    </svg>
  );
}
