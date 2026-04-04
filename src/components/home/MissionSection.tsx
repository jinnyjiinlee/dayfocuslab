'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import DFLSymbol from '@/components/DFLSymbol';
import type { Translations } from '@/lib/i18n';

export default function MissionSection({ t, ko }: { t: Translations; ko: boolean }) {
  return (
    <section className="py-24 md:py-32 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050A34]" />
      <div className="absolute inset-0" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(8,92,240,0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(113,63,255,0.15) 0%, transparent 50%)' }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" aria-hidden="true">
        <DFLSymbol size={400} variant="blue" />
      </div>

      <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-[#AFE9FD] text-sm font-bold uppercase tracking-widest mb-6 md:mb-8">Mission</p>
        <h2 className="text-2xl md:text-5xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
          {ko
            ? <>더 많은 사람들이 매일<br className="hidden md:block" /> 성장의 기회와 깊은 몰입의<br className="hidden md:block" /> 순간을 누릴 수 있도록</>
            : t.about.mission.title}
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-white/60 max-w-2xl mx-auto">{t.about.mission.description}</p>
        <div className="mt-10 md:mt-14">
          <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 min-h-[48px] bg-white text-[#050A34] font-bold rounded-2xl transition-[box-shadow,transform] duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 text-[15px]">
            {t.nav.about}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
