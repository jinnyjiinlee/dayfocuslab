'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
              <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                {t.nav.home}
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                {t.nav.services}
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                {t.nav.about}
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                이용약관
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                개인정보처리방침
              </Link>
            </nav>
          </div>

          {/* Business Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Business
            </h4>
            <div className="text-gray-400 text-xs space-y-1 leading-relaxed">
              <p>상호: 데이포커스랩</p>
              <p>대표: 이지인</p>
              <p>사업자등록번호: 546-10-03346</p>
              <p>주소: 서울특별시 광진구 능동로 330, 5층</p>
              <p>이메일: dayfocuslab@gmail.com</p>
              <p>전화: 010-4067-5392</p>
            </div>
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
