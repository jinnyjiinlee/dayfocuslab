'use client';

import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#1B2A4A] rounded-full mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1222] mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1222] mb-4">{t.about.founder.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-[#F7F9FC] rounded-2xl overflow-hidden border border-gray-100">
                <img
                  src="/images/founder.png"
                  alt={t.about.founder.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-[#2563EB]"><svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>';
                  }}
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B1222] mb-2">{t.about.founder.name}</h3>
                  <p className="text-lg text-[#2563EB] font-medium mb-4">{t.about.founder.role}</p>
                  <p className="text-gray-600 leading-relaxed">{t.about.founder.bio}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#0B1222] mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {t.about.founder.expertise.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#1B2A4A] text-white text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#0B1222] mb-3">Experience</h4>
                  <ul className="space-y-2">
                    {t.about.founder.experience.map((exp: string, index: number) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-[#1B2A4A] rounded-full flex-shrink-0" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={t.about.founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full hover:bg-[#004182] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-[#1B2A4A] text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1222] mb-4">{t.about.mission.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t.about.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-[#1B2A4A] text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1222] mb-4">{t.about.vision.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t.about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-br from-[#1B2A4A] to-[#0B1222] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.values.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.values.items.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
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
            <div className="w-12 h-1 bg-[#1B2A4A] rounded-full mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1222] mb-8">Day Focus Lab</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-left">
              <p>
                Day Focus Lab은 &quot;집중&quot;이라는 단순하지만 강력한 가치에서 시작되었습니다.
                현대 사회에서 우리는 수많은 정보와 자극 속에서 살아가며, 정작 중요한 것에 집중하기 어려운 환경에 놓여 있습니다.
              </p>
              <p>
                우리는 이러한 문제를 해결하기 위해 두 가지 접근법을 제시합니다.
                AI 기술을 활용한 비즈니스 혁신(AX 컨설팅)과 집중할 수 있는 물리적 환경(포커스 스페이스)입니다.
              </p>
              <p>
                Day Focus Lab과 함께 당신의 하루에 집중하세요.
                작은 집중이 모여 큰 성장을 만들어냅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Space Locations */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1222] mb-4">{t.about.focusSpace.title}</h2>
            <p className="text-lg text-gray-500">{t.about.focusSpace.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location 1 - Gunja */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#0B1222]">{t.about.focusSpace.location1.name}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {t.about.focusSpace.location1.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{t.about.focusSpace.location1.address}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t.about.focusSpace.location1.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {t.about.focusSpace.location1.website && (
                  <a
                    href={t.about.focusSpace.location1.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#2563EB] hover:underline"
                  >
                    웹사이트 방문
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {'map' in t.about.focusSpace.location1 && (
                  <a
                    href={(t.about.focusSpace.location1 as { map: string }).map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:underline"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    네이버 지도
                  </a>
                )}
              </div>
            </div>

            {/* Location 2 - Sanbon */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#0B1222]">{t.about.focusSpace.location2.name}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {t.about.focusSpace.location2.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{t.about.focusSpace.location2.address}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t.about.focusSpace.location2.description}
              </p>
              {'map' in t.about.focusSpace.location2 && (
                <a
                  href={(t.about.focusSpace.location2 as { map: string }).map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:underline"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  네이버 지도
                </a>
              )}
            </div>

            {/* Location 3 - Coming Soon */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#0B1222]">{t.about.focusSpace.location3.name}</h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {t.about.focusSpace.location3.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{t.about.focusSpace.location3.address}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.about.focusSpace.location3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1222] mb-6">
            {t.contact.subtitle}
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#1B2A4A] text-white font-medium rounded-full hover:bg-[#132038] transition-colors"
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </>
  );
}
