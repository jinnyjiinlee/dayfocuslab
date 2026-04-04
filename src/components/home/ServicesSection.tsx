'use client';

import Link from 'next/link';
import FadeIn from '@/components/shared/FadeIn';
import DFLSymbol from '@/components/brand/DFLSymbol';
import type { Translations } from '@/lib/i18n';

export default function ServicesSection({ t, ko }: { t: Translations; ko: boolean }) {
  return (
    <section className="py-16 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#050A34] rounded-full text-xs font-bold text-white uppercase tracking-wider mb-5">Services</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#050A34] tracking-tight">{t.services.title}</h2>
          <p className="text-gray-500 mt-3 text-base md:text-lg">{t.services.subtitle}</p>
        </FadeIn>

        {/* Enterprise Card */}
        <FadeIn className="mb-4">
          <div className="group relative bg-[#050A34] text-white p-8 md:p-14 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-[box-shadow] duration-500">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20" aria-hidden="true" style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-[#085CF0] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg">Enterprise</span>
                  <span className="text-white/40 text-sm font-medium">{t.services.enterprise.target}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black mb-3 tracking-tight">{t.services.enterprise.title}</h3>
                <p className="text-white/60 text-sm mb-4 font-medium">{t.services.enterprise.subtitle}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-8">{t.services.enterprise.description}</p>
                <div className="flex items-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-white text-[#050A34] font-bold rounded-xl hover:shadow-lg transition-[box-shadow] duration-300 text-sm">
                    {ko ? '도입 문의' : 'Get Started'}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                  <p className="text-[#AFE9FD] text-sm font-bold">{t.services.enterprise.price}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.services.enterprise.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/[0.05] rounded-2xl p-4">
                    <div className="shrink-0 mt-0.5"><DFLSymbol size={18} variant="skyblue" /></div>
                    <p className="text-white/80 text-sm font-medium leading-snug">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* B2C Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: t.services.ax.title, subtitle: t.services.ax.subtitle, desc: t.services.ax.description, price: t.services.ax.price, color: '#085CF0', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
            { title: t.services.workshop.title, subtitle: t.services.workshop.subtitle, desc: t.services.workshop.description, price: t.services.workshop.price, color: '#713FFF', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { title: t.services.studycafe.title, subtitle: t.services.studycafe.subtitle, desc: t.services.studycafe.description, price: undefined, color: '#9CA3AF', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
          ].map((svc, i) => (
            <FadeIn key={i} delay={(i + 1) * 100}>
              <div className="group bg-[#F7F9FC] p-7 md:p-8 rounded-3xl border border-gray-100 h-full hover:shadow-xl hover:-translate-y-0.5 transition-[box-shadow,transform] duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${svc.color}12` }}>
                    <svg className="w-5 h-5" style={{ color: svc.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#050A34]">{svc.title}</h3>
                    <p className="text-xs text-gray-500 font-medium">{svc.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                {svc.price && <p className="text-sm font-bold text-[#050A34]">{svc.price}</p>}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8" delay={400}>
          <Link href="/services" className="inline-flex items-center gap-2 font-bold text-[#085CF0] hover:gap-3 transition-all group text-sm min-h-[44px]">
            {t.services.viewAll}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
