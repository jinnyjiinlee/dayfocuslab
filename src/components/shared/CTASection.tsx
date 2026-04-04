'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

export default function CTASection({ title, subtitle, ctaLabel, ctaHref, kakaoLabel }: {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  kakaoLabel: string;
}) {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-[0.06]" aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />
      <FadeIn className="max-w-3xl mx-auto px-6 text-center relative">
        <h2 className="text-2xl md:text-5xl font-black mb-5 text-[#050A34] tracking-tight leading-tight">{title}</h2>
        <p className="text-gray-500 mb-10 md:mb-12 text-base md:text-lg leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4">
          <Link
            href={ctaHref}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] bg-[#050A34] text-white font-bold rounded-2xl hover:bg-[#020151] transition-[background-color,box-shadow] duration-300 hover:shadow-[0_0_40px_rgba(5,10,52,0.2)] text-[15px]"
          >
            {ctaLabel}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="https://open.kakao.com/o/sSp6Rcli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] bg-[#FEE500] text-[#3C1E1E] font-bold rounded-2xl hover:shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300 text-[15px]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.54 1.91-.62 2.21-.1.37.14.36.29.26.12-.08 1.82-1.22 2.56-1.72.69.1 1.4.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z"/>
            </svg>
            {kakaoLabel}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
