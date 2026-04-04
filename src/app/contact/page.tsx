'use client';

import { useLanguage } from '@/components/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const isKo = t.nav.contact === '문의';

  return (
    <>
      {/* Hero Section */}
      <section className="pt-[96px] pb-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#050A34] rounded-full mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#050A34] mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pt-[96px] pb-24 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* KakaoTalk */}
            <a
              href="https://open.kakao.com/o/sSp6Rcli"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#FEE500] p-8 rounded-3xl hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-14 h-14 bg-[#3C1E1E] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FEE500">
                    <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.54 1.91-.62 2.21-.1.37.14.36.29.26.12-.08 1.82-1.22 2.56-1.72.69.1 1.4.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#3C1E1E] text-lg mb-1">
                    {isKo ? '카카오톡 상담' : 'KakaoTalk'}
                  </p>
                  <p className="text-[#3C1E1E]/60 text-sm">
                    {isKo ? '가장 빠르게 상담받으실 수 있습니다' : 'Fastest way to reach us'}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[#3C1E1E]/70 text-sm font-medium group-hover:gap-2 transition-all">
                  {isKo ? '바로가기' : 'Open Chat'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:010-4067-5392"
              className="block bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-14 h-14 bg-[#050A34] rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#050A34] text-lg mb-1">
                    {isKo ? '전화 문의' : 'Phone'}
                  </p>
                  <p className="text-gray-500 text-sm">010-4067-5392</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[#085CF0] text-sm font-medium group-hover:gap-2 transition-all">
                  {isKo ? '전화하기' : 'Call Now'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:dayfocuslab@gmail.com"
              className="block bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-14 h-14 bg-[#050A34] rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#050A34] text-lg mb-1">
                    {isKo ? '이메일' : 'Email'}
                  </p>
                  <p className="text-gray-500 text-sm">dayfocuslab@gmail.com</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[#085CF0] text-sm font-medium group-hover:gap-2 transition-all">
                  {isKo ? '이메일 보내기' : 'Send Email'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jiin-jinny-lee-15b4072b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-14 h-14 bg-[#085CF0] rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#050A34] text-lg mb-1">LinkedIn</p>
                  <p className="text-gray-500 text-sm">
                    {isKo ? '비즈니스 네트워킹' : 'Business Networking'}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[#085CF0] text-sm font-medium group-hover:gap-2 transition-all">
                  {isKo ? '프로필 보기' : 'View Profile'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </div>

          {/* Business Info Card */}
          <div className="mt-8 bg-white p-8 rounded-3xl border border-gray-100">
            <h3 className="font-bold text-[#050A34] text-lg mb-4">
              {isKo ? '사업자 정보' : 'Business Information'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
              <div className="flex items-start gap-3">
                <span className="text-gray-400 flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">{isKo ? '상호' : 'Company'}</p>
                  <p className="text-[#050A34]">{isKo ? '데이포커스랩' : 'Day Focus Lab'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">{isKo ? '대표' : 'CEO'}</p>
                  <p className="text-[#050A34]">{isKo ? '이지인' : 'Jiin Lee'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">{isKo ? '주소' : 'Address'}</p>
                  <p className="text-[#050A34]">{isKo ? '서울특별시 광진구 능동로 330, 5층' : '5F, 330 Neungdong-ro, Gwangjin-gu, Seoul'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">{isKo ? '사업자등록번호' : 'Business Reg.'}</p>
                  <p className="text-[#050A34]">546-10-03346</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-8 bg-gradient-to-br from-[#050A34] to-[#050A34] text-white p-10 rounded-3xl text-center">
            <p className="text-2xl font-bold mb-2">Day Focus Lab</p>
            <p className="text-blue-100">{t.footer.tagline}</p>
          </div>
        </div>
      </section>
    </>
  );
}
