'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 border border-black rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-black rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-4 opacity-0 animate-fade-in animation-delay-200">
            {t.hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-400">
            {t.hero.description}
          </p>
          <div className="opacity-0 animate-fade-in animation-delay-600">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              {t.hero.cta}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-gray-600">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AX Consulting */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t.services.ax.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.services.ax.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.services.ax.description}</p>
            </div>

            {/* Study Cafe */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t.services.studycafe.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.services.studycafe.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.services.studycafe.description}</p>
            </div>

            {/* Coaching */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t.services.coaching.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.services.coaching.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.services.coaching.description}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-black font-medium hover:underline"
            >
              {t.hero.cta}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {t.about.mission.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {t.about.mission.description}
          </p>
          <div className="mt-12">
            <Link
              href="/about"
              className="inline-block px-8 py-4 border border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors"
            >
              {t.nav.about}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
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
