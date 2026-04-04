'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { useInView } from '@/components/useInView';
import AnimatedCounter from '@/components/AnimatedCounter';

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const { t, locale } = useLanguage();
  const statsView = useInView(0.2);
  const ko = locale === 'ko';

  return (
    <>
      {/* ===== HERO - B2B Focused ===== */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#050A34]" aria-label={ko ? '메인 히어로' : 'Main hero'}>
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-15%] right-[-5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[140px] opacity-25 animate-mesh-1"
            style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] opacity-20 animate-mesh-2"
            style={{ background: 'radial-gradient(circle, #713FFF 0%, transparent 70%)' }} />
          <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full blur-[100px] opacity-10 animate-mesh-3"
            style={{ background: 'radial-gradient(circle, #AFE9FD 0%, transparent 70%)' }} />
        </div>

        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        <div className="absolute right-[-5%] top-[50%] -translate-y-1/2 opacity-[0.03] hidden lg:block" aria-hidden="true">
          <Image src="/images/logo/symbol-blue.png" alt="" width={600} height={600} className="w-[500px] h-auto" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
          <div className="max-w-3xl">
            <div className="opacity-0 animate-fade-in">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-sm text-[#AFE9FD] font-semibold mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#085CF0] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#AFE9FD]" />
                </span>
                AI Transformation Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.08] mb-6 opacity-0 animate-fade-in animation-delay-200">
              <span className="text-white">{t.hero.titleShort1}</span>
              <br />
              <span className="hero-gradient-text">{t.hero.titleShort2}</span>
              <br />
              <span className="text-white">{t.hero.titleShort3}</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/70 mb-3 opacity-0 animate-fade-in animation-delay-400 font-semibold tracking-tight">
              {t.hero.subtitle}
            </p>
            <p className="text-base md:text-lg text-white/60 max-w-xl mb-12 opacity-0 animate-fade-in animation-delay-600 leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 opacity-0 animate-fade-in animation-delay-800">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] bg-[#085CF0] text-white font-semibold rounded-2xl hover:bg-[#0950D0] transition-[background-color,box-shadow] duration-300 hover:shadow-[0_0_40px_rgba(8,92,240,0.3)] text-[15px]"
              >
                {t.hero.cta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white/90 font-semibold rounded-2xl hover:bg-white/[0.12] hover:text-white transition-[background-color,color] duration-300 text-[15px]"
              >
                {t.hero.ctaPersonal}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsView.ref} className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-0 animate-fade-in animation-delay-1000">
            {[
              { value: <AnimatedCounter end={90} suffix="%" isInView={statsView.isInView} />, label: t.stats.automation },
              { value: 'B2B · B2C', label: t.stats.personalizedTraining },
              { value: <AnimatedCounter end={2} suffix={ko ? '개' : '' } isInView={statsView.isInView} />, label: t.stats.focusSpaces },
              { value: '24/7', label: t.stats.alwaysOpen },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-black text-white tabular-nums mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/50 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animation-delay-1200" aria-hidden="true">
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ===== SERVICES - B2B First, then B2C ===== */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#050A34] rounded-full text-xs font-bold text-white uppercase tracking-wider mb-5">
              Services
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#050A34] tracking-tight">
              {t.services.title}
            </h2>
            <p className="text-gray-500 mt-3 text-base md:text-lg">{t.services.subtitle}</p>
          </FadeIn>

          {/* B2B - Enterprise AX Solution (Full Width Featured) */}
          <FadeIn className="mb-4" delay={0}>
            <div className="group relative bg-[#050A34] text-white p-8 md:p-14 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-[box-shadow] duration-500">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20" aria-hidden="true"
                style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />
              <div className="absolute bottom-0 left-[30%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-10" aria-hidden="true"
                style={{ background: 'radial-gradient(circle, #713FFF 0%, transparent 70%)' }} />

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
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <p className="text-[#AFE9FD] text-sm font-bold">{t.services.enterprise.price}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.services.enterprise.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/[0.05] rounded-2xl p-4">
                      <div className="w-8 h-8 rounded-lg bg-[#085CF0]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#AFE9FD]">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <p className="text-white/80 text-sm font-medium leading-snug">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* B2C Row - AI PT + AX Workshop + Focus Space */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* AI PT */}
            <FadeIn delay={100}>
              <div className="group bg-[#F7F9FC] p-7 md:p-8 rounded-3xl border border-gray-100 h-full hover:shadow-xl hover:-translate-y-0.5 transition-[box-shadow,transform] duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#085CF0]/[0.08] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#085CF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#050A34]">{t.services.ax.title}</h3>
                    <p className="text-xs text-gray-500 font-medium">{t.services.ax.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.services.ax.description}</p>
                <p className="text-sm font-bold text-[#050A34]">{t.services.ax.price}</p>
              </div>
            </FadeIn>

            {/* AX Workshop */}
            <FadeIn delay={200}>
              <div className="group bg-[#F7F9FC] p-7 md:p-8 rounded-3xl border border-gray-100 h-full hover:shadow-xl hover:-translate-y-0.5 transition-[box-shadow,transform] duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#713FFF]/[0.08] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#713FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#050A34]">{t.services.workshop.title}</h3>
                    <p className="text-xs text-gray-500 font-medium">{t.services.workshop.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.services.workshop.description}</p>
                <p className="text-sm font-bold text-[#050A34]">{t.services.workshop.price}</p>
              </div>
            </FadeIn>

            {/* Focus Space - small */}
            <FadeIn delay={300}>
              <div className="group bg-[#F7F9FC] p-7 md:p-8 rounded-3xl border border-gray-100 h-full hover:shadow-xl hover:-translate-y-0.5 transition-[box-shadow,transform] duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gray-200/60 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#050A34]">{t.services.studycafe.title}</h3>
                    <p className="text-xs text-gray-500 font-medium">{t.services.studycafe.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{t.services.studycafe.description}</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-8" delay={400}>
            <Link href="/services" className="inline-flex items-center gap-2 font-bold text-[#085CF0] hover:gap-3 transition-all group text-sm min-h-[44px]">
              {t.services.viewAll}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== BRAND VALUES - DAY / FOCUS / LAB ===== */}
      <section className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-6 overflow-hidden">
            <p className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black text-gray-100 leading-none select-none tracking-tighter whitespace-nowrap" aria-hidden="true">
              DAILY GROWTH
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 -mt-12 md:-mt-20 relative z-10">
            {[
              { num: '01', keyword: 'DAY', title: ko ? '매일의 기회' : 'Daily Opportunity', desc: ko ? '작은 변화가 쌓여 큰 성과가 되도록, 지속 가능한 성장 환경을 설계합니다.' : 'We design sustainable growth environments where small changes accumulate into big results.', color: '#085CF0' },
              { num: '02', keyword: 'FOCUS', title: ko ? '깊은 몰입' : 'Deep Focus', desc: ko ? 'AI를 통해 업무를 단순화하고, 가장 중요한 일에 몰입할 수 있도록 돕습니다.' : 'We simplify work with AI so you can focus on what matters most.', color: '#713FFF' },
              { num: '03', keyword: 'LAB', title: ko ? '실험과 혁신' : 'Experiment & Innovate', desc: ko ? '업무 전 과정(End-to-End)을 최적화하여 지속적으로 성과를 만드는 시스템을 구축합니다.' : 'We optimize the entire workflow to build systems that continuously deliver results.', color: '#AFE9FD' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="text-center px-6 md:px-8 py-10 md:py-12">
                <span className="text-xs font-mono text-gray-300 tracking-widest">{item.num}</span>
                <h3 className="text-3xl md:text-5xl font-black mt-3 mb-2 tracking-tight" style={{ color: item.color }}>{item.keyword}</h3>
                <p className="text-base font-semibold text-[#050A34] mb-3">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS - 4 Steps ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#050A34] rounded-full text-xs font-bold text-white uppercase tracking-wider mb-5">
              Process
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#050A34] tracking-tight">{t.process.title}</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 relative">
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-[48px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#085CF0] via-[#713FFF] to-[#AFE9FD]" aria-hidden="true" />
            <div className="md:hidden absolute top-[48px] bottom-[48px] left-1/2 w-px bg-gradient-to-b from-[#085CF0] via-[#713FFF] to-[#AFE9FD]" aria-hidden="true" />

            {[
              { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', color: '#085CF0' },
              { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: '#092676' },
              { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z', color: '#713FFF' },
              { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: '#AFE9FD' },
            ].map((item, i) => (
              <FadeIn key={i} className="text-center px-4 py-6" delay={i * 100}>
                <div className="relative z-10 mx-auto w-[96px] h-[96px] rounded-[24px] flex items-center justify-center mb-6 border-2 bg-white transition-[transform] duration-300 hover:scale-105"
                  style={{ borderColor: item.color }}>
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                    style={{ backgroundColor: item.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <svg className="w-6 h-6" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#050A34] mb-2">{t.process.steps[i].title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.process.steps[i].desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-20 md:py-28 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#050A34] tracking-tight mb-5">{t.whyUs.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">{t.whyUs.subtitle}</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { gradient: 'from-[#085CF0] to-[#092676]', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { gradient: 'from-[#713FFF] to-[#085CF0]', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
              { gradient: 'from-[#050A34] to-[#713FFF]', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group bg-white p-8 md:p-10 rounded-3xl border border-gray-100 h-full hover:shadow-2xl hover:-translate-y-1 transition-[box-shadow,transform] duration-500">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:shadow-lg transition-[transform,box-shadow] duration-500`}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
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

      {/* ===== MISSION ===== */}
      <section className="py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050A34]" />
        <div className="absolute inset-0" aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(8,92,240,0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(113,63,255,0.15) 0%, transparent 50%)' }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]" aria-hidden="true">
          <Image src="/images/logo/symbol-blue.png" alt="" width={500} height={500} className="w-[400px] h-auto" />
        </div>

        <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#AFE9FD] text-sm font-bold uppercase tracking-widest mb-6 md:mb-8">Mission</p>
          <h2 className="text-2xl md:text-5xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
            {ko
              ? <>더 많은 사람들이 매일<br className="hidden md:block" /> 성장의 기회와 깊은 몰입의<br className="hidden md:block" /> 순간을 누릴 수 있도록</>
              : t.about.mission.title
            }
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-white/60 max-w-2xl mx-auto">{t.about.mission.description}</p>
          <div className="mt-10 md:mt-14">
            <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 min-h-[48px] bg-white text-[#050A34] font-bold rounded-2xl transition-[box-shadow,transform] duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 text-[15px]">
              {t.nav.about}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-[0.06]" aria-hidden="true"
          style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />

        <FadeIn className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="text-2xl md:text-5xl font-black mb-5 text-[#050A34] tracking-tight leading-tight">{t.cta.title}</h2>
          <p className="text-gray-500 mb-10 md:mb-12 text-base md:text-lg leading-relaxed">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] bg-[#050A34] text-white font-bold rounded-2xl hover:bg-[#020151] transition-[background-color,box-shadow] duration-300 hover:shadow-[0_0_40px_rgba(5,10,52,0.2)] text-[15px]"
            >
              {t.cta.enterprise}
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
              {t.cta.kakao}
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
