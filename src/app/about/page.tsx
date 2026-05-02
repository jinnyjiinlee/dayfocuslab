'use client';

import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';
import DFLSymbol from '@/components/brand/DFLSymbol';
import PageHero from '@/components/shared/PageHero';
import LocationCard from '@/components/shared/LocationCard';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.about.title} subtitle={t.about.subtitle} />

      {/* Founder */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050A34] mb-12 text-center">{t.about.founder.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 w-full max-w-[280px] sm:max-w-xs mx-auto lg:max-w-none lg:mx-0">
              <div className="aspect-[3/4] bg-[#F7F9FC] rounded-2xl overflow-hidden border border-gray-100">
                <img src="/images/founder.png" alt={`${t.about.founder.name} — ${t.about.founder.role}`} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#050A34] mb-2">{t.about.founder.name}</h3>
                <p className="text-lg text-[#085CF0] font-medium mb-4">{t.about.founder.role}</p>
                <p className="text-gray-600 leading-relaxed">{t.about.founder.bio}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.about.founder.expertise.map((skill: string, i: number) => (
                  <span key={i} className="px-4 py-2 bg-[#050A34] text-white text-sm rounded-2xl">{skill}</span>
                ))}
              </div>

              {/* Career timeline */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-semibold text-[#085CF0] uppercase tracking-wider">{t.about.founder.careerLabel}</h4>
                <ol className="space-y-5 border-l-2 border-gray-100 pl-5">
                  {t.about.founder.career.map((item: { role: string; company: string; period: string }, i: number) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[26px] top-1.5 w-3 h-3 bg-[#085CF0] rounded-full border-2 border-white" />
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-semibold text-[#050A34]">{item.role}</span>
                        <span className="text-gray-500 text-sm">· {item.company}</span>
                      </div>
                      <p className="text-xs text-gray-400">{item.period}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Credentials */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-[#085CF0] uppercase tracking-wider mb-3">{t.about.founder.credentialsLabel}</h4>
                <div className="flex flex-wrap gap-2">
                  {t.about.founder.credentials.map((c: string, i: number) => (
                    <span key={i} className="px-3 py-1.5 bg-[#F7F9FC] text-[#050A34] text-sm rounded-lg border border-gray-200">{c}</span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-[#085CF0] uppercase tracking-wider mb-3">{t.about.founder.projectsLabel}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.about.founder.projects.map((p: { name: string; tagline: string; description: string; stack: string[]; url: string }, i: number) => {
                    const hasUrl = Boolean(p.url);
                    return (
                      <a
                        key={i}
                        href={hasUrl ? p.url : undefined}
                        target={hasUrl ? '_blank' : undefined}
                        rel={hasUrl ? 'noopener noreferrer' : undefined}
                        className={`block p-4 rounded-xl border border-gray-200 bg-white ${hasUrl ? 'hover:border-[#085CF0] hover:shadow-sm transition' : 'opacity-90 cursor-default'}`}
                      >
                        <div className="font-semibold text-[#050A34]">{p.name}</div>
                        <div className="text-xs text-[#085CF0] mb-2">{p.tagline}</div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {p.stack.map((s: string, j: number) => (
                            <span key={j} className="px-2 py-0.5 bg-[#F7F9FC] text-gray-500 text-xs rounded">{s}</span>
                          ))}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <a href={t.about.founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#085CF0] text-white rounded-2xl hover:bg-[#0950D0] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: t.about.mission.title, desc: t.about.mission.description, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: t.about.vision.title, desc: t.about.vision.description, icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-[#050A34] text-white rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#050A34] mb-4">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-24 bg-[#050A34] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.about.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.values.items.map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white text-[#085CF0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{value.title}</h3>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#AFE9FD]/70 mb-3 h-3.5">
                  {value.subtitle && value.subtitle.toUpperCase() !== value.title.toUpperCase() ? value.subtitle : ''}
                </p>
                <p className="text-blue-100 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <DFLSymbol size={28} variant="blue" className="mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#050A34] mb-8">DayFocusLab</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-left">
            <p>DayFocusLab은 &quot;집중&quot;이라는 단순하지만 강력한 가치에서 시작되었습니다. 현대 사회에서 우리는 수많은 정보와 자극 속에서 살아가며, 정작 중요한 것에 집중하기 어려운 환경에 놓여 있습니다.</p>
            <p>우리는 이러한 문제를 해결하기 위해 두 가지 접근법을 제시합니다. AI 기술을 활용한 비즈니스 혁신(AX 컨설팅)과 집중할 수 있는 물리적 환경(포커스 스페이스)입니다.</p>
            <p>DayFocusLab과 함께 당신의 하루에 집중하세요. 작은 집중이 모여 큰 성장을 만들어냅니다.</p>
          </div>
        </div>
      </section>

      {/* Focus Space Locations */}
      <section className="py-20 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050A34] mb-4">{t.about.focusSpace.title}</h2>
            <p className="text-lg text-gray-500">{t.about.focusSpace.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LocationCard {...t.about.focusSpace.location1} statusColor="green" />
            <LocationCard {...t.about.focusSpace.location2} statusColor="blue" />
            <LocationCard {...t.about.focusSpace.location3} statusColor="gray" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050A34] mb-6">{t.contact.subtitle}</h2>
          <Link href="/contact" className="inline-block px-8 py-4 bg-[#050A34] text-white font-medium rounded-2xl hover:bg-[#020151] transition-colors">{t.nav.contact}</Link>
        </div>
      </section>
    </>
  );
}
