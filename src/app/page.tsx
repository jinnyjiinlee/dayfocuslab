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
      {/* ===== HERO - Dark Navy Full Screen ===== */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#050A34]" aria-label={ko ? '메인 히어로' : 'Main hero'}>
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-15%] right-[-5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[140px] opacity-25 animate-mesh-1"
            style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] opacity-20 animate-mesh-2"
            style={{ background: 'radial-gradient(circle, #713FFF 0%, transparent 70%)' }} />
          <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full blur-[100px] opacity-10 animate-mesh-3"
            style={{ background: 'radial-gradient(circle, #AFE9FD 0%, transparent 70%)' }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        {/* Large symbol watermark */}
        <div className="absolute right-[-5%] top-[50%] -translate-y-1/2 opacity-[0.03] hidden lg:block" aria-hidden="true">
          <Image src="/images/logo/symbol-blue.png" alt="" width={600} height={600} className="w-[500px] h-auto" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
          <div className="max-w-3xl">
            {/* Badge - #8 improved contrast */}
            <div className="opacity-0 animate-fade-in">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-sm text-[#AFE9FD] font-semibold mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#085CF0] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#AFE9FD]" />
                </span>
                AI Transformation Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tight leading-[1.08] mb-6 opacity-0 animate-fade-in animation-delay-200">
              <span className="text-white">{ko ? '당신의 하루에' : 'Focus on'}</span>
              <br />
              <span className="hero-gradient-text">{ko ? '집중하다' : 'Your Day'}</span>
            </h1>

            {/* Subtitle - #9 improved contrast white/40→white/70 */}
            <p className="text-lg md:text-2xl text-white/70 mb-3 opacity-0 animate-fade-in animation-delay-400 font-semibold tracking-tight">
              {t.hero.subtitle}
            </p>
            {/* #10 improved contrast white/50→white/60 */}
            <p className="text-base md:text-lg text-white/60 max-w-xl mb-12 opacity-0 animate-fade-in animation-delay-600 leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA - #11 min touch target 48px */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 opacity-0 animate-fade-in animation-delay-800">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] bg-[#085CF0] text-white font-semibold rounded-2xl hover:bg-[#0950D0] transition-[background-color,box-shadow,transform] duration-300 hover:shadow-[0_0_40px_rgba(8,92,240,0.3)] text-[15px]"
              >
                {t.hero.cta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://open.kakao.com/o/sSp6Rcli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white/90 font-semibold rounded-2xl hover:bg-white/[0.12] hover:text-white transition-[background-color,color] duration-300 text-[15px]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.54 1.91-.62 2.21-.1.37.14.36.29.26.12-.08 1.82-1.22 2.56-1.72.69.1 1.4.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z"/>
                </svg>
                {t.hero.freeConsultation}
              </a>
            </div>
          </div>

          {/* Stats - #12 improved contrast white/30→white/50 */}
          <div ref={statsView.ref} className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-0 animate-fade-in animation-delay-1000">
            {[
              { value: <AnimatedCounter end={90} suffix="%" isInView={statsView.isInView} />, label: t.stats.automation },
              { value: '1:1', label: t.stats.personalizedTraining },
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animation-delay-1200" aria-hidden="true">
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ===== BRAND VALUES - DAY / FOCUS / LAB ===== */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* #13 - Mobile responsive large text, overflow hidden */}
          <FadeIn className="text-center mb-6 overflow-hidden">
            <p className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black text-gray-100 leading-none select-none tracking-tighter whitespace-nowrap" aria-hidden="true">
              DAILY GROWTH
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 -mt-12 md:-mt-20 relative z-10">
            {[
              {
                num: '01',
                keyword: 'DAY',
                title: ko ? '매일의 기회' : 'Daily Opportunity',
                desc: ko
                  ? '작은 변화가 쌓여 큰 성과가 되도록, 지속 가능한 성장 환경을 설계합니다.'
                  : 'We design sustainable growth environments where small changes accumulate into big results.',
                color: '#085CF0',
              },
              {
                num: '02',
                keyword: 'FOCUS',
                title: ko ? '깊은 몰입' : 'Deep Focus',
                desc: ko
                  ? 'AI를 통해 업무를 단순화하고, 가장 중요한 일에 몰입할 수 있도록 돕습니다.'
                  : 'We simplify work with AI so you can focus on what matters most.',
                color: '#713FFF',
              },
              {
                num: '03',
                keyword: 'LAB',
                title: ko ? '실험과 혁신' : 'Experiment & Innovate',
                desc: ko
                  ? '업무 전 과정(End-to-End)을 최적화하여 지속적으로 성과를 만드는 시스템을 구축합니다.'
                  : 'We optimize the entire workflow to build systems that continuously deliver results.',
                color: '#AFE9FD',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="text-center px-6 md:px-8 py-10 md:py-12">
                <span className="text-xs font-mono text-gray-300 tracking-widest">{item.num}</span>
                <h3 className="text-3xl md:text-5xl font-black mt-3 mb-2 tracking-tight" style={{ color: item.color }}>
                  {item.keyword}
                </h3>
                <p className="text-base font-semibold text-[#050A34] mb-3">{item.title}</p>
                {/* #14 - gray-400→gray-500 for contrast */}
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES - Bento Grid ===== */}
      <section className="py-20 md:py-28 bg-[#F7F9FC] relative">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200/60 rounded-full text-xs font-bold text-[#085CF0] uppercase tracking-wider mb-5 shadow-sm">
              Services
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#050A34] tracking-tight">
              {t.services.title}
            </h2>
          </FadeIn>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* AI PT - Large featured card */}
            <FadeIn className="md:col-span-7" delay={0}>
              <div className="group relative h-full bg-[#050A34] text-white p-8 md:p-12 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-[box-shadow] duration-500">
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20" aria-hidden="true"
                  style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px] opacity-10" aria-hidden="true"
                  style={{ background: 'radial-gradient(circle, #713FFF 0%, transparent 70%)' }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <span className="px-3 py-1 bg-[#085CF0] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg">Main</span>
                    <span className="text-white/40 text-sm font-medium">1:1 & Group</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black mb-3 tracking-tight">{t.services.ax.title}</h3>
                  {/* #15 - white/40→white/60 for contrast */}
                  <p className="text-white/60 text-sm mb-4 md:mb-6 font-medium">{t.services.ax.subtitle}</p>
                  {/* #16 - white/60→white/70 for contrast */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6 md:mb-8 max-w-md">{t.services.ax.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg font-bold text-[#AFE9FD]">{t.services.ax.price}</p>
                    <Link href="/services" className="group/link inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-[#AFE9FD] transition-colors font-medium min-h-[44px] min-w-[44px] justify-center">
                      {ko ? '자세히' : 'Details'}
                      <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right column - 2 stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* Workshop */}
              <FadeIn delay={100}>
                <div className="group bg-white p-7 md:p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-[box-shadow,transform] duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#085CF0]/[0.08] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#085CF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#050A34]">{t.services.workshop.title}</h3>
                      {/* #17 - gray-400→gray-500 */}
                      <p className="text-xs text-gray-500 font-medium">{t.services.workshop.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.services.workshop.description}</p>
                  <p className="text-sm font-bold text-[#050A34]">{t.services.workshop.price}</p>
                </div>
              </FadeIn>

              {/* Focus Space */}
              <FadeIn delay={200}>
                <div className="group bg-gradient-to-br from-[#085CF0] to-[#092676] text-white p-7 md:p-8 rounded-3xl hover:shadow-xl hover:-translate-y-0.5 transition-[box-shadow,transform] duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{t.services.studycafe.title}</h3>
                      {/* #18 - white/50→white/70 */}
                      <p className="text-xs text-white/70 font-medium">{t.services.studycafe.subtitle}</p>
                    </div>
                  </div>
                  {/* #19 - white/70→white/80 */}
                  <p className="text-white/80 text-sm leading-relaxed">{t.services.studycafe.description}</p>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn className="mt-8 md:mt-10" delay={300}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-[#085CF0] hover:gap-3 transition-all group text-sm min-h-[44px]"
            >
              {t.services.viewAll}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== PROCESS - Horizontal Steps ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#050A34] rounded-full text-xs font-bold text-white uppercase tracking-wider mb-5">
              Process
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#050A34] tracking-tight">
              {t.process.title}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Connecting line - desktop horizontal */}
            <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#085CF0] via-[#713FFF] to-[#AFE9FD]" aria-hidden="true" />

            {/* #20 - Mobile vertical connecting line */}
            <div className="md:hidden absolute top-[60px] bottom-[60px] left-1/2 w-px bg-gradient-to-b from-[#085CF0] via-[#713FFF] to-[#AFE9FD]" aria-hidden="true" />

            {[
              { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: '#085CF0' },
              { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', color: '#713FFF' },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: '#AFE9FD' },
            ].map((item, i) => (
              <FadeIn key={i} className="text-center px-6 py-6 md:py-8" delay={i * 100}>
                <div className="relative z-10 mx-auto w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-[28px] md:rounded-[32px] flex items-center justify-center mb-6 md:mb-8 border-2 bg-white transition-[transform] duration-300 hover:scale-105"
                  style={{ borderColor: item.color }}>
                  <span className="absolute -top-3 -right-3 w-7 h-7 md:w-8 md:h-8 rounded-full text-white text-[10px] md:text-xs font-bold flex items-center justify-center"
                    style={{ backgroundColor: item.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <svg className="w-7 h-7 md:w-8 md:h-8" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#050A34] mb-2">{t.process.steps[i].title}</h3>
                {/* #21 - gray-400→gray-500 */}
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
            <h2 className="text-3xl md:text-5xl font-black text-[#050A34] tracking-tight mb-5">
              {t.whyUs.title}
            </h2>
            {/* #22 - gray-400→gray-500 */}
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">{t.whyUs.subtitle}</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { gradient: 'from-[#085CF0] to-[#092676]', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { gradient: 'from-[#713FFF] to-[#085CF0]', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
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
                  {/* #23 - gray-400→gray-500 */}
                  <p className="text-gray-500 text-sm leading-[1.8]">{t.whyUs.items[i].desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION - Dark Section ===== */}
      <section className="py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050A34]" />
        <div className="absolute inset-0" aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(8,92,240,0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(113,63,255,0.15) 0%, transparent 50%)' }} />

        {/* Symbol watermark */}
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
          {/* #24 - white/50→white/60 */}
          <p className="text-base md:text-xl leading-relaxed text-white/60 max-w-2xl mx-auto">
            {t.about.mission.description}
          </p>
          <div className="mt-10 md:mt-14">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 min-h-[48px] bg-white text-[#050A34] font-bold rounded-2xl transition-[box-shadow,transform] duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 text-[15px]"
            >
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
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-[0.06]" aria-hidden="true"
          style={{ background: 'radial-gradient(circle, #085CF0 0%, transparent 70%)' }} />

        <FadeIn className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="text-2xl md:text-5xl font-black mb-5 text-[#050A34] tracking-tight leading-tight">
            {t.cta.title}
          </h2>
          {/* #25 - gray-400→gray-500 */}
          <p className="text-gray-500 mb-10 md:mb-12 text-base md:text-lg leading-relaxed">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] bg-[#050A34] text-white font-bold rounded-2xl hover:bg-[#020151] transition-[background-color,box-shadow,transform] duration-300 hover:shadow-[0_0_40px_rgba(5,10,52,0.2)] text-[15px]"
            >
              {t.nav.contact}
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
