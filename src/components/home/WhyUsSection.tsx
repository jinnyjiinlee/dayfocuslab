'use client';

import FadeIn from '@/components/FadeIn';
import type { Translations } from '@/lib/i18n';

const CARDS = [
  { gradient: 'from-[#085CF0] to-[#092676]', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { gradient: 'from-[#713FFF] to-[#085CF0]', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { gradient: 'from-[#050A34] to-[#713FFF]', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
];

export default function WhyUsSection({ t }: { t: Translations }) {
  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#050A34] tracking-tight mb-5">{t.whyUs.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">{t.whyUs.subtitle}</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CARDS.map((card, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group bg-white p-8 md:p-10 rounded-3xl border border-gray-100 h-full hover:shadow-2xl hover:-translate-y-1 transition-[box-shadow,transform] duration-500">
                <div className={`w-14 h-14 bg-gradient-to-br ${card.gradient} text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:shadow-lg transition-[transform,box-shadow] duration-500`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#050A34] mb-3">{t.whyUs.items[i].title}</h3>
                <p className="text-gray-500 text-sm leading-[1.8]">{t.whyUs.items[i].desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
