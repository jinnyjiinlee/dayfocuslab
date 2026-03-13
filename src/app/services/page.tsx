'use client';

import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* AI PT Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {t.services.ax.title}
              </h2>
              <p className="text-lg text-gray-500 mb-6">{t.services.ax.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t.services.ax.description}
              </p>

              {/* Price & Location */}
              <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Price</p>
                    <p className="font-bold text-lg">{t.services.ax.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                    <p className="font-bold text-lg">{t.services.ax.location}</p>
                  </div>
                </div>
              </div>

              {/* Target Customers */}
              <div className="mb-8 space-y-3 bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-4">타겟 고객</h3>
                <div className="flex items-start gap-3">
                  <span className="inline-block mt-1.5 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold">{t.services.ax.target.office.title}:</span>
                    <span className="text-gray-600"> {t.services.ax.target.office.description}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block mt-1.5 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold">{t.services.ax.target.business.title}:</span>
                    <span className="text-gray-600"> {t.services.ax.target.business.description}</span>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">이용 절차</h3>
                <div className="flex items-center gap-3">
                  {t.services.ax.process.map((step: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                      {i < t.services.ax.process.length - 1 && (
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-3">
                {t.services.ax.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div>
              <div className="aspect-square bg-white rounded-3xl border border-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                <div className="relative text-black/10">
                  <svg className="w-48 h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute top-8 right-8 w-20 h-20 border border-gray-200 rounded-full" />
                <div className="absolute bottom-8 left-8 w-32 h-32 border border-gray-200 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div>
              <div className="aspect-square bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                <div className="relative text-black/10">
                  <svg className="w-48 h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute top-8 left-8 w-20 h-20 border border-gray-200 rounded-full" />
                <div className="absolute bottom-8 right-8 w-32 h-32 border border-gray-200 rounded-full" />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {t.services.workshop.title}
              </h2>
              <p className="text-lg text-gray-500 mb-6">{t.services.workshop.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t.services.workshop.description}
              </p>

              {/* Info Cards */}
              <div className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Price</p>
                    <p className="font-bold text-lg">{t.services.workshop.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                    <p className="font-bold text-lg">{t.services.workshop.location}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Date</p>
                    <p className="font-bold">{t.services.workshop.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Capacity</p>
                    <p className="font-bold">{t.services.workshop.capacity}</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {t.services.workshop.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="inline-block px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                신청하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Space Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {t.services.studycafe.title}
              </h2>
              <p className="text-lg text-gray-500 mb-6">{t.services.studycafe.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t.services.studycafe.description}
              </p>

              <ul className="space-y-3">
                {t.services.studycafe.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div>
              <div className="aspect-square bg-white rounded-3xl border border-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                <div className="relative text-black/10">
                  <svg className="w-48 h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="absolute top-8 right-8 w-20 h-20 border border-gray-200 rounded-full" />
                <div className="absolute bottom-8 left-8 w-32 h-32 border border-gray-200 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.contact.subtitle}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {t.contact.info.description}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </>
  );
}
