'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)' }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-dot-grid" />

        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-10 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-10 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)' }}
          />
        </div>

        {/* Floating tech badges */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          <div className="absolute top-[18%] left-[8%] animate-float-slow opacity-0 animate-fade-in animation-delay-800">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl px-4 py-2.5 shadow-lg shadow-blue-500/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs font-mono text-gray-600">AI-Powered</span>
              </div>
            </div>
          </div>
          <div className="absolute top-[25%] right-[10%] animate-float-delay opacity-0 animate-fade-in animation-delay-1000">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl px-4 py-2.5 shadow-lg shadow-blue-500/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span className="text-xs font-mono text-gray-600">1:1 & Group PT</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[28%] left-[12%] animate-float opacity-0 animate-fade-in animation-delay-1000">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl px-4 py-2.5 shadow-lg shadow-blue-500/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-xs font-mono text-gray-600">Automation 90%</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[22%] right-[8%] animate-float-slow opacity-0 animate-fade-in animation-delay-800">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl px-4 py-2.5 shadow-lg shadow-blue-500/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-mono text-gray-600">Focus Space</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="opacity-0 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm text-[#0066FF] font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
              AI Transformation Partner
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in animation-delay-200"
          >
            <span className="text-gradient">{t.hero.title}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-4 opacity-0 animate-fade-in animation-delay-400">
            {t.hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-600">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-800">
            <Link
              href="/services"
              className="btn-glow shimmer inline-block px-8 py-4 text-white font-medium rounded-xl"
            >
              {t.hero.cta}
            </Link>
            <a
              href="https://open.kakao.com/o/sSp6Rcli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.54 1.91-.62 2.21-.1.37.14.36.29.26.12-.08 1.82-1.22 2.56-1.72.69.1 1.4.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z"/>
              </svg>
              {t.nav.contact === '문의' ? '무료 상담하기' : 'Free Consultation'}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-gradient">90%</p>
              <p className="text-sm text-gray-500">{t.nav.contact === '문의' ? '업무 자동화 달성' : 'Automation Achieved'}</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-gradient">1:1</p>
              <p className="text-sm text-gray-500">{t.nav.contact === '문의' ? '맞춤 대면 PT' : 'Personalized Training'}</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-gradient">2{t.nav.contact === '문의' ? '개 지점' : ' Locations'}</p>
              <p className="text-sm text-gray-500">{t.nav.contact === '문의' ? '포커스 스페이스 운영' : 'Focus Spaces Operating'}</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-gradient">24/7</p>
              <p className="text-sm text-gray-500">{t.nav.contact === '문의' ? '상시 운영' : 'Always Open'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-dot-grid" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono text-[#0066FF] uppercase tracking-wider mb-4">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1222' }}>
              {t.services.title}
            </h2>
            <p className="text-gray-600">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* AI PT - Featured */}
            <div className="card-glow relative bg-white p-8 rounded-2xl border border-gray-200 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] to-[#00C2FF]" />
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center relative pulse-ring"
                  style={{ backgroundColor: 'rgba(0, 102, 255, 0.1)' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="#0066FF" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="px-2 py-0.5 bg-[#0066FF] text-white text-[10px] font-bold uppercase tracking-wider rounded">Main</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0B1222' }}>{t.services.ax.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.services.ax.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.services.ax.description}</p>
              <p className="text-sm font-bold mt-4" style={{ color: '#0066FF' }}>{t.services.ax.price}</p>
            </div>

            {/* Workshop */}
            <div className="card-glow bg-white p-8 rounded-2xl border border-gray-200">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(0, 102, 255, 0.1)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="#0066FF" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0B1222' }}>{t.services.workshop.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.services.workshop.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.services.workshop.description}</p>
              <p className="text-sm font-bold mt-4" style={{ color: '#0066FF' }}>{t.services.workshop.price}</p>
            </div>

            {/* Focus Space */}
            <div className="card-glow bg-white p-8 rounded-2xl border border-gray-200">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(0, 102, 255, 0.1)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="#0066FF" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0B1222' }}>{t.services.studycafe.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.services.studycafe.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.services.studycafe.description}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-medium text-[#0066FF] hover:gap-3 transition-all"
            >
              {t.nav.contact === '문의' ? '서비스 자세히 보기' : 'View All Services'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono text-[#0066FF] uppercase tracking-wider mb-4">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1222]">
              {t.nav.contact === '문의' ? '이용 절차' : 'How It Works'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: t.nav.contact === '문의' ? '무료 설문지 작성' : 'Free Survey',
                desc: t.nav.contact === '문의' ? '현재 업무 현황과 AI 도입 목표를 알려주세요' : 'Tell us about your workflow and AI goals',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
              },
              {
                step: '02',
                title: t.nav.contact === '문의' ? '무료 상담 진행' : 'Free Consultation',
                desc: t.nav.contact === '문의' ? '설문 내용을 바탕으로 맞춤 상담을 진행합니다' : 'We design a personalized training plan',
                icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
              },
              {
                step: '03',
                title: t.nav.contact === '문의' ? '결제 후 PT 시작' : 'Start AI PT',
                desc: t.nav.contact === '문의' ? '1:1 또는 그룹 AI PT로 업무 혁신을 시작하세요' : 'Begin your AI transformation journey',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#0066FF] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#0066FF] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <span className="text-xs font-mono text-[#0066FF]/50 uppercase tracking-widest">{item.step}</span>
                <h3 className="text-lg font-bold text-[#0B1222] mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 text-gray-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Social Proof Section */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono text-[#0066FF] uppercase tracking-wider mb-4">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1222] mb-4">
              {t.nav.contact === '문의' ? '왜 Day Focus Lab인가요?' : 'Why Day Focus Lab?'}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t.nav.contact === '문의'
                ? '실전 경험을 바탕으로 한 AI 트레이닝과 자동화 솔루션을 제공합니다'
                : 'Real-world experience backed AI training and automation solutions'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1222] mb-3">
                {t.nav.contact === '문의' ? '검증된 실무 경험' : 'Proven Experience'}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.nav.contact === '문의'
                  ? '코르카 AX 엔지니어, 코드잇 운영 기획을 거쳐 스터디카페 2개 지점을 직접 운영하며 AI로 업무 90%를 자동화한 실전 경험'
                  : 'From AX engineer at Korka to operating 2 focus spaces with 90% AI automation - proven, hands-on expertise'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1222] mb-3">
                {t.nav.contact === '문의' ? '맞춤형 대면 트레이닝' : 'Personalized In-Person Training'}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.nav.contact === '문의'
                  ? '온라인 강의가 아닌 대면 1:1 또는 그룹 PT로 당신의 실제 업무 환경에 맞는 AI 활용법을 직접 코칭합니다'
                  : 'Not online courses but face-to-face 1:1 or group PT, coaching AI skills tailored to your actual work environment'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1222] mb-3">
                {t.nav.contact === '문의' ? '즉시 적용 가능한 솔루션' : 'Ready-to-Apply Solutions'}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.nav.contact === '문의'
                  ? '이론이 아닌 실전. PT 직후부터 바로 업무에 적용할 수 있는 AI 자동화 워크플로우와 도구를 제공합니다'
                  : 'Practice, not theory. Get AI automation workflows and tools you can apply to your work immediately after training'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section
        className="py-24 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 50%, #0B1222 100%)' }}
      >
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {t.about.mission.title}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-blue-100">
            {t.about.mission.description}
          </p>
          <div className="mt-12">
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-white font-medium rounded-xl transition-all hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20"
              style={{ color: '#0066FF' }}
            >
              {t.nav.about}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1222' }}>
            {t.contact.subtitle}
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            {t.nav.contact === '문의'
              ? 'AI로 업무를 혁신하고 싶다면, 지금 바로 무료 상담을 신청하세요.'
              : 'Ready to transform your work with AI? Schedule a free consultation now.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-glow shimmer inline-block px-8 py-4 text-white font-medium rounded-xl"
            >
              {t.nav.contact}
            </Link>
            <a
              href="https://open.kakao.com/o/sSp6Rcli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FEE500] text-[#3C1E1E] font-medium rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.54 1.91-.62 2.21-.1.37.14.36.29.26.12-.08 1.82-1.22 2.56-1.72.69.1 1.4.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z"/>
              </svg>
              {t.nav.contact === '문의' ? '카카오톡 상담' : 'KakaoTalk'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
