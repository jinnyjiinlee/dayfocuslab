'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/LanguageContext';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  // On home page: transparent header over dark hero, white text
  // On scroll or other pages: white header, dark text
  const isDark = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : isHome
            ? 'bg-transparent border-b border-transparent'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-50">
            <Image
              src={isDark ? '/images/logo/logo-white.png' : '/images/logo/logo-dark-blue.png'}
              alt="DayFocusLab"
              width={160}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
                  isDark
                    ? 'text-white/60 hover:text-white after:bg-white'
                    : 'text-gray-500 hover:text-[#050A34] after:bg-[#085CF0]'
                } ${pathname === link.href ? 'after:w-full' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3 relative z-50">
            <button
              onClick={() => setLocale(locale === 'ko' ? 'en' : 'ko')}
              className={`text-xs font-bold px-3 py-1.5 border rounded-full uppercase tracking-wider transition-all duration-200 ${
                isDark
                  ? 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                  : 'border-gray-200 text-gray-500 hover:border-[#050A34] hover:bg-[#050A34] hover:text-white'
              }`}
            >
              {locale === 'ko' ? 'EN' : 'KO'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'top-[7px] rotate-45 bg-gray-700' : `top-0 ${isDark ? 'bg-white' : 'bg-gray-700'}`
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-x-0 bg-gray-700' : `opacity-100 ${isDark ? 'bg-white' : 'bg-gray-700'}`
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'top-[7px] -rotate-45 bg-gray-700' : `top-[14px] ${isDark ? 'bg-white' : 'bg-gray-700'}`
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} links={navLinks} kakaoLabel={t.hero.freeConsultation} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
