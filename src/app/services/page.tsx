'use client';

import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-[#0066FF] rounded-full mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#0B1222]">
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* AI PT Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-[#0066FF] rounded-2xl mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0B1222]">
                {t.services.ax.title}
              </h2>
              <p className="text-lg text-gray-400 mb-6">{t.services.ax.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t.services.ax.description}
              </p>

              {/* Price & Location */}
              <div className="mb-8 bg-blue-50 p-6 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-[#0066FF]/60 uppercase tracking-wider font-medium mb-1">Price</p>
                    <p className="font-bold text-lg text-[#0B1222]">{t.services.ax.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#0066FF]/60 uppercase tracking-wider font-medium mb-1">Location</p>
                    <p className="font-bold text-lg text-[#0B1222]">{t.services.ax.location}</p>
                  </div>
                </div>
              </div>

              {/* Target Customers */}
              <div className="mb-8 space-y-3 bg-[#F7F9FC] p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 text-[#0B1222]">타겟 고객</h3>
                <div className="flex items-start gap-3">
                  <span className="inline-block mt-1.5 w-2 h-2 bg-[#0066FF] rounded-full flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-[#0B1222]">{t.services.ax.target.office.title}:</span>
                    <span className="text-gray-600"> {t.services.ax.target.office.description}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block mt-1.5 w-2 h-2 bg-[#0066FF] rounded-full flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-[#0B1222]">{t.services.ax.target.business.title}:</span>
                    <span className="text-gray-600"> {t.services.ax.target.business.description}</span>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4 text-[#0B1222]">이용 절차</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {t.services.ax.process.map((step: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 bg-[#0066FF] text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                        <span className="text-sm font-medium text-[#0B1222]">{step}</span>
                      </div>
                      {i < t.services.ax.process.length - 1 && (
                        <svg className="w-4 h-4 text-[#0066FF]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {t.services.ax.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#0066FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div>
              <div className="aspect-square bg-[#F7F9FC] rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Abstract geometric design */}
                <div className="absolute inset-0">
                  {/* Large gradient circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-[#0066FF]/20 to-[#0066FF]/5" />
                  {/* Smaller accent circles */}
                  <div className="absolute top-12 right-16 w-24 h-24 rounded-full bg-[#0066FF]/10" />
                  <div className="absolute bottom-16 left-12 w-32 h-32 rounded-full border-2 border-[#0066FF]/15" />
                  <div className="absolute top-24 left-20 w-16 h-16 rounded-full bg-[#0066FF]/8" />
                  {/* Ring */}
                  <div className="absolute bottom-24 right-20 w-20 h-20 rounded-full border-2 border-[#0066FF]/20" />
                  {/* Dot grid pattern */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-5 gap-4">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-[#0066FF]/10" />
                    ))}
                  </div>
                  {/* Center icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-[#0066FF] flex items-center justify-center shadow-lg shadow-[#0066FF]/25">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div>
              <div className="aspect-square bg-white rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Abstract geometric design */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-[#0066FF]/15 to-transparent" />
                  <div className="absolute top-16 left-16 w-28 h-28 rounded-full border-2 border-[#0066FF]/15" />
                  <div className="absolute bottom-12 right-16 w-36 h-36 rounded-full bg-[#0066FF]/8" />
                  <div className="absolute top-20 right-24 w-12 h-12 rounded-full bg-[#0066FF]/12" />
                  <div className="absolute bottom-28 left-24 w-16 h-16 rounded-full border-2 border-[#0066FF]/20" />
                  {/* Horizontal lines */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-3 w-32">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-1 rounded-full bg-[#0066FF]/10" style={{ width: `${100 - i * 15}%` }} />
                    ))}
                  </div>
                  {/* Center icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-[#0066FF] flex items-center justify-center shadow-lg shadow-[#0066FF]/25">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-[#0066FF] rounded-2xl mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0B1222]">
                {t.services.workshop.title}
              </h2>
              <p className="text-lg text-gray-400 mb-6">{t.services.workshop.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t.services.workshop.description}
              </p>

              {/* Info Cards */}
              <div className="mb-8 bg-blue-50 p-6 rounded-xl">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-[#0066FF]/60 uppercase tracking-wider font-medium mb-1">Price</p>
                    <p className="font-bold text-lg text-[#0B1222]">{t.services.workshop.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#0066FF]/60 uppercase tracking-wider font-medium mb-1">Location</p>
                    <p className="font-bold text-lg text-[#0B1222]">{t.services.workshop.location}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-[#0066FF]/60 uppercase tracking-wider font-medium mb-1">Date</p>
                    <p className="font-bold text-[#0B1222]">{t.services.workshop.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#0066FF]/60 uppercase tracking-wider font-medium mb-1">Capacity</p>
                    <p className="font-bold text-[#0B1222]">{t.services.workshop.capacity}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {t.services.workshop.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#0066FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={t.services.workshop.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#0066FF] text-white font-medium rounded-xl hover:bg-[#0052CC] transition-colors"
              >
                신청하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Space Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-[#0066FF] rounded-2xl mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0B1222]">
                {t.services.studycafe.title}
              </h2>
              <p className="text-lg text-gray-400 mb-6">{t.services.studycafe.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t.services.studycafe.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {t.services.studycafe.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#0066FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div>
              <div className="aspect-square bg-[#F7F9FC] rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Abstract geometric design */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-to-bl from-[#0066FF]/18 to-[#0066FF]/3" />
                  <div className="absolute top-10 right-14 w-20 h-20 rounded-full bg-[#0066FF]/10" />
                  <div className="absolute bottom-14 left-10 w-28 h-28 rounded-full border-2 border-[#0066FF]/15" />
                  <div className="absolute top-28 left-16 w-14 h-14 rounded-full bg-[#0066FF]/8" />
                  <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border-2 border-[#0066FF]/12" />
                  {/* Stacked rectangles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="h-2 rounded-full bg-[#0066FF]/10" style={{ width: `${80 - i * 20}px`, marginLeft: `${i * 10}px` }} />
                    ))}
                  </div>
                  {/* Center icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-[#0066FF] flex items-center justify-center shadow-lg shadow-[#0066FF]/25">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.contact.subtitle}
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            {t.contact.info.description}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#0066FF] font-medium rounded-xl hover:bg-white/90 transition-colors"
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </>
  );
}
