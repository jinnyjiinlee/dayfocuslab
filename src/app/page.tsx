'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)' }}
      >
        {/* Decorative background circles/dots */}
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
          {/* Dot pattern */}
          <div className="absolute top-32 left-[15%] w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: '#0066FF' }} />
          <div className="absolute top-48 left-[10%] w-2 h-2 rounded-full opacity-15" style={{ backgroundColor: '#0066FF' }} />
          <div className="absolute top-20 right-[20%] w-2.5 h-2.5 rounded-full opacity-20" style={{ backgroundColor: '#0066FF' }} />
          <div className="absolute bottom-32 left-[25%] w-2 h-2 rounded-full opacity-15" style={{ backgroundColor: '#0066FF' }} />
          <div className="absolute top-[60%] right-[12%] w-3 h-3 rounded-full opacity-10" style={{ backgroundColor: '#0066FF' }} />
          <div className="absolute bottom-48 right-[35%] w-1.5 h-1.5 rounded-full opacity-25" style={{ backgroundColor: '#0066FF' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in"
            style={{ color: '#0B1222' }}
          >
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
              className="inline-block px-8 py-4 text-white font-medium rounded-xl transition-colors"
              style={{ backgroundColor: '#0066FF' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0052CC')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0066FF')}
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
      <section className="py-24" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1222' }}>
              {t.services.title}
            </h2>
            <p className="text-gray-600">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* AI PT */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              style={{ borderColor: undefined }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#0066FF')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(0, 102, 255, 0.1)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="#0066FF" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0B1222' }}>{t.services.ax.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.services.ax.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.services.ax.description}</p>
              <p className="text-sm font-bold mt-4" style={{ color: '#0066FF' }}>{t.services.ax.price}</p>
            </div>

            {/* Workshop */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#0066FF')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
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
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#0066FF')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(0, 102, 255, 0.1)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="#0066FF" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
              className="inline-flex items-center font-medium hover:underline"
              style={{ color: '#0066FF' }}
            >
              서비스 알아보기
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section
        className="py-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {t.about.mission.title}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#BFDBFE' }}>
            {t.about.mission.description}
          </p>
          <div className="mt-12">
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-white font-medium rounded-xl transition-colors hover:bg-gray-100"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0B1222' }}>
            {t.contact.subtitle}
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-medium rounded-xl transition-colors"
            style={{ backgroundColor: '#0066FF' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0052CC')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0066FF')}
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </>
  );
}
