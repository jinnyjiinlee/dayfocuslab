'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">
              Day Focus <span className="font-light">Lab</span>
            </div>
            <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.services}
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Services
            </h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-gray-300">{t.services.ax.title}</span>
              <span className="text-gray-300">{t.services.studycafe.title}</span>
              <span className="text-gray-300">{t.services.coaching.title}</span>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
