'use client';

import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import DFLSymbol from '@/components/brand/DFLSymbol';
import type { Translations } from '@/lib/i18n';

export default function HeroSection({ t, ko }: { t: Translations; ko: boolean }) {
  const statsView = useInView(0.2);

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#050A34]" aria-label={ko ? '메인 히어로' : 'Main hero'}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-15%] right-[-5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[140px] opacity-25 animate-mesh-1"
          style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] opacity-20 animate-mesh-2"
          style={{ background: 'radial-gradient(circle, #713FFF 0%, transparent 70%)' }} />
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full blur-[100px] opacity-10 animate-mesh-3"
          style={{ background: 'radial-gradient(circle, #AFE9FD 0%, transparent 70%)' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="absolute right-[-5%] top-[50%] -translate-y-1/2 opacity-[0.04] hidden lg:block" aria-hidden="true">
        <DFLSymbol size={500} variant="blue" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
        <div className="max-w-3xl">
          <div className="opacity-0 animate-fade-in">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-sm text-[#AFE9FD] font-semibold mb-10">
              <DFLSymbol size={14} variant="skyblue" />
              AI Transformation Partner
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.08] mb-6 opacity-0 animate-fade-in animation-delay-200">
            <span className="text-white">{t.hero.titleShort1}</span><br />
            <span className="hero-gradient-text">{t.hero.titleShort2}</span><br />
            <span className="text-white">{t.hero.titleShort3}</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/70 mb-3 opacity-0 animate-fade-in animation-delay-400 font-semibold tracking-tight">{t.hero.subtitle}</p>
          <p className="text-base md:text-lg text-white/60 max-w-xl mb-12 opacity-0 animate-fade-in animation-delay-600 leading-relaxed">{t.hero.description}</p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 opacity-0 animate-fade-in animation-delay-800">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] bg-[#085CF0] text-white font-semibold rounded-2xl hover:bg-[#0950D0] transition-[background-color,box-shadow] duration-300 hover:shadow-[0_0_40px_rgba(8,92,240,0.3)] text-[15px]">
              {t.hero.cta}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white/90 font-semibold rounded-2xl hover:bg-white/[0.12] hover:text-white transition-[background-color,color] duration-300 text-[15px]">
              {t.hero.ctaPersonal}
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsView.ref} className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-0 animate-fade-in animation-delay-1000">
          {[
            { value: <AnimatedCounter end={90} suffix="%" isInView={statsView.isInView} />, label: t.stats.automation },
            { value: 'B2B · B2C', label: t.stats.personalizedTraining },
            { value: <AnimatedCounter end={2} suffix={ko ? '개' : ''} isInView={statsView.isInView} />, label: t.stats.focusSpaces },
            { value: '24/7', label: t.stats.alwaysOpen },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-black text-white tabular-nums mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-white/50 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1200" aria-hidden="true">
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
