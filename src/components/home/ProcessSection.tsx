'use client';

import FadeIn from '@/components/shared/FadeIn';
import type { Translations } from '@/lib/i18n';

const STEPS = [
  { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', color: '#085CF0' },
  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: '#092676' },
  { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z', color: '#713FFF' },
  { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: '#AFE9FD' },
];

export default function ProcessSection({ t }: { t: Translations }) {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#050A34] rounded-full text-xs font-bold text-white uppercase tracking-wider mb-5">Process</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#050A34] tracking-tight">{t.process.title}</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 relative">
          <div className="hidden md:block absolute top-[48px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#085CF0] via-[#713FFF] to-[#AFE9FD]" aria-hidden="true" />
          <div className="md:hidden absolute top-[48px] bottom-[48px] left-1/2 w-px bg-gradient-to-b from-[#085CF0] via-[#713FFF] to-[#AFE9FD]" aria-hidden="true" />

          {STEPS.map((step, i) => (
            <FadeIn key={i} className="text-center px-4 py-6" delay={i * 100}>
              <div className="relative z-10 mx-auto w-[96px] h-[96px] rounded-[24px] flex items-center justify-center mb-6 border-2 bg-white transition-[transform] duration-300 hover:scale-105"
                style={{ borderColor: step.color }}>
                <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                  style={{ backgroundColor: step.color }}>{String(i + 1).padStart(2, '0')}</span>
                <svg className="w-6 h-6" style={{ color: step.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#050A34] mb-2">{t.process.steps[i].title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t.process.steps[i].desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
