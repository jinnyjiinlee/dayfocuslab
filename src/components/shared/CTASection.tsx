'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

export default function CTASection({ title, subtitle, ctaLabel, ctaHref }: {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-[0.06]" aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />
      <FadeIn className="max-w-3xl mx-auto px-6 text-center relative">
        <h2 className="text-2xl md:text-5xl font-black mb-5 text-[#050A34] tracking-tight leading-tight">{title}</h2>
        <p className="text-gray-500 mb-10 md:mb-12 text-base md:text-lg leading-relaxed">{subtitle}</p>
        <div className="flex justify-center">
          <Link
            href={ctaHref}
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 min-h-[48px] bg-[#050A34] text-white font-bold rounded-2xl hover:bg-[#020151] transition-[background-color,box-shadow] duration-300 hover:shadow-[0_0_40px_rgba(5,10,52,0.2)] text-[15px]"
          >
            {ctaLabel}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
