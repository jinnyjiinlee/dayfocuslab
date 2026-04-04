'use client';

import { useCountUp } from '@/hooks/useCountUp';

interface Props {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}

export default function AnimatedCounter({ end, duration, suffix = '', prefix = '', isInView }: Props) {
  const count = useCountUp(end, isInView, duration);
  return <>{prefix}{count}{suffix}</>;
}
