'use client';

import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100">
              <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.about.mission.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t.about.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100">
              <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.about.vision.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t.about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.values.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.values.items.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Day Focus Lab</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-left">
              <p>
                Day Focus Lab은 &quot;집중&quot;이라는 단순하지만 강력한 가치에서 시작되었습니다.
                현대 사회에서 우리는 수많은 정보와 자극 속에서 살아가며, 정작 중요한 것에 집중하기 어려운 환경에 놓여 있습니다.
              </p>
              <p>
                우리는 이러한 문제를 해결하기 위해 세 가지 접근법을 제시합니다.
                AI 기술을 활용한 비즈니스 혁신(AX 컨설팅), 집중할 수 있는 물리적 환경(스터디카페),
                그리고 개인의 성장을 돕는 전문적인 가이드(코칭)입니다.
              </p>
              <p>
                Day Focus Lab과 함께 당신의 하루에 집중하세요.
                작은 집중이 모여 큰 성장을 만들어냅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.contact.subtitle}
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </>
  );
}
