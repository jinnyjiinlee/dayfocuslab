'use client';

import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import FeatureList from '@/components/shared/FeatureList';
import InfoGrid from '@/components/shared/InfoGrid';
import CTASection from '@/components/shared/CTASection';

function ServiceSection({ children, bg = 'bg-white' }: { children: React.ReactNode; bg?: string }) {
  return (
    <section className={`py-20 md:py-24 ${bg}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {children}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ icon, className = '' }: { icon: string; className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-[#085CF0] rounded-2xl mb-6 ${className}`}>
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
      </svg>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.services.title} subtitle={t.services.subtitle} />

      {/* AI PT */}
      <ServiceSection>
        <div>
          <ServiceIcon icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#050A34]">{t.services.ax.title}</h2>
          <p className="text-lg text-gray-500 mb-6">{t.services.ax.subtitle}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{t.services.ax.description}</p>

          <InfoGrid items={[
            { label: 'Price', value: t.services.ax.price },
            { label: 'Location', value: t.services.ax.location },
            { label: 'Duration', value: t.services.ax.serviceDuration },
          ]} />

          <div className="my-8 space-y-3 bg-[#F7F9FC] p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-[#050A34]">타겟 고객</h3>
            {[t.services.ax.target.office, t.services.ax.target.business].map((target, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="inline-block mt-1.5 w-2 h-2 bg-[#050A34] rounded-full flex-shrink-0" />
                <p><span className="font-semibold text-[#050A34]">{target.title}:</span> <span className="text-gray-600">{target.description}</span></p>
              </div>
            ))}
          </div>

          <FeatureList features={t.services.ax.features} className="mb-8" />

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="px-8 py-4 bg-[#050A34] text-white font-medium rounded-xl hover:bg-[#020151] transition-colors text-center">무료 상담 신청</Link>
            <Link href="/checkout" className="px-8 py-4 bg-white border border-[#050A34] text-[#050A34] font-medium rounded-xl hover:bg-gray-50 transition-colors text-center">바로 결제하기</Link>
          </div>
        </div>
        <div>
          <div className="aspect-[4/3] bg-[#F7F9FC] rounded-3xl overflow-hidden shadow-lg">
            <img src="/images/ai-pt-group.png" alt="DAYFOCUS LAB AI PT 그룹 트레이닝 현장 — 참여자들이 노트북으로 AI 자동화 실습을 진행하는 모습" className="w-full h-full object-cover" />
          </div>
        </div>
      </ServiceSection>

      {/* Workshop */}
      <ServiceSection bg="bg-[#F7F9FC]">
        <ServiceVisual title={t.services.workshop.title} features={t.services.workshop.features} icon="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <div>
          <ServiceIcon icon="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#050A34]">{t.services.workshop.title}</h2>
          <p className="text-lg text-gray-500 mb-6">{t.services.workshop.subtitle}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{t.services.workshop.description}</p>

          <InfoGrid items={[
            { label: 'Price', value: t.services.workshop.price },
            { label: 'Location', value: t.services.workshop.location },
            { label: 'Date', value: t.services.workshop.date },
            { label: 'Capacity', value: t.services.workshop.capacity },
          ]} />

          <FeatureList features={t.services.workshop.features} className="my-8" />

          <a href={t.services.workshop.link} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#050A34] text-white font-medium rounded-xl hover:bg-[#020151] transition-colors">신청하기</a>
        </div>
      </ServiceSection>

      {/* Focus Space */}
      <ServiceSection>
        <div>
          <ServiceIcon icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#050A34]">{t.services.studycafe.title}</h2>
          <p className="text-lg text-gray-500 mb-6">{t.services.studycafe.subtitle}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{t.services.studycafe.description}</p>
          <FeatureList features={t.services.studycafe.features} />
        </div>
        <ServiceVisual title={t.services.studycafe.title} features={t.services.studycafe.features} icon="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </ServiceSection>

      <CTASection
        title={t.contact.subtitle}
        subtitle={t.contact.info.description}
        ctaLabel={t.nav.contact}
        ctaHref="/contact"
      />
    </>
  );
}

function ServiceVisual({ title, features, icon }: { title: string; features: string[]; icon: string }) {
  return (
    <div className="aspect-[4/3] bg-white rounded-3xl flex items-center justify-center relative overflow-hidden border border-gray-100 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A34]/5 to-transparent" />
      <div className="relative z-10 text-center p-10">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#050A34] flex items-center justify-center shadow-lg shadow-[#050A34]/25">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#050A34] mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {features.map((f: string, i: number) => (
            <span key={i} className="px-3 py-1.5 bg-[#050A34]/12 text-[#050A34] text-xs font-semibold rounded-full">{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
