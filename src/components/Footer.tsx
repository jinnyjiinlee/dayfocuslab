'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#0B1222] text-white">
      {/* Subtle top gradient border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Image
              src="/images/logo/logo-white.png"
              alt="Day Focus Lab"
              width={160}
              height={32}
              className="h-8 w-auto"
            />
            <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/jiin-jinny-lee-15b4072b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-[#0A66C2] rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://open.kakao.com/o/sSp6Rcli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-[#FEE500] hover:text-[#3C1E1E] rounded-lg flex items-center justify-center transition-colors"
                aria-label="KakaoTalk"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.54 1.91-.62 2.21-.1.37.14.36.29.26.12-.08 1.82-1.22 2.56-1.72.69.1 1.4.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-[#2563EB] transition-colors text-sm">
                {t.nav.home}
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-[#2563EB] transition-colors text-sm">
                {t.nav.services}
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-[#2563EB] transition-colors text-sm">
                {t.nav.about}
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-[#2563EB] transition-colors text-sm">
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
              <Link href="/terms" className="text-gray-300 hover:text-[#2563EB] transition-colors text-sm">
                이용약관
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-[#2563EB] transition-colors text-sm">
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
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <p className="text-gray-500 text-sm text-center">
            &copy; 2025-2026 Day Focus Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
