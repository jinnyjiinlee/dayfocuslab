import Image from 'next/image';

/**
 * DayFocusLab Brand Symbol - uses actual brand asset PNG
 */
export default function DFLSymbol({
  className = '',
  size = 24,
  variant = 'blue',
}: {
  className?: string;
  size?: number;
  variant?: 'blue' | 'purple' | 'skyblue';
}) {
  const src = `/images/logo/symbol-${variant}.png`;
  // Original aspect ratio: 355x438 = 0.81:1
  const height = Math.round(size * 1.23);

  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={height}
      className={className}
      aria-hidden
    />
  );
}
