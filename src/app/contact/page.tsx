'use client';

import { useLanguage } from '@/components/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0066FF] rounded-full mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1222] mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            {/* KakaoTalk */}
            <a
              href="https://open.kakao.com/o/sSp6Rcli"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#FEE500] p-8 rounded-3xl hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-[#3C1E1E] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="#FEE500">
                    <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.54 1.91-.62 2.21-.1.37.14.36.29.26.12-.08 1.82-1.22 2.56-1.72.69.1 1.4.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[#3C1E1E] text-xl mb-1">카카오톡으로 문의하기</p>
                  <p className="text-[#3C1E1E]/60">빠른 상담을 원하시면 카카오톡으로 연락주세요</p>
                </div>
                <svg className="w-6 h-6 text-[#3C1E1E]/40 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Phone Call */}
            <a
              href="tel:010-4067-5392"
              className="block bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-[#0066FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[#0B1222] text-xl mb-1">전화로 문의하기</p>
                  <p className="text-gray-500">010-4067-5392</p>
                </div>
                <svg className="w-6 h-6 text-gray-300 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>

          {/* Tagline */}
          <div className="mt-12 bg-gradient-to-br from-[#0066FF] to-[#0B1222] text-white p-8 rounded-3xl text-center">
            <p className="text-2xl font-bold mb-2">Day Focus Lab</p>
            <p className="text-blue-100">{t.footer.tagline}</p>
          </div>
        </div>
      </section>
    </>
  );
}
