'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/LanguageContext';
import MobileMenu from './MobileMenu';

function useScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return isScrolled;
}

function useLockBody(locked: boolean) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [locked]);
}

function HamburgerIcon({ isOpen, isDark }: { isOpen: boolean; isDark: boolean }) {
  const bar = 'absolute left-0 h-[2px] w-5 rounded-full transition-all duration-300';
  const color = isOpen ? 'bg-gray-700' : isDark ? 'bg-white' : 'bg-gray-700';
  return (
    <div className="relative w-5 h-4">
      <span className={`${bar} ${isOpen ? 'top-[7px] rotate-45' : 'top-0'} ${color}`} />
      <span className={`${bar} top-[7px] ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'} ${color}`} />
      <span className={`${bar} ${isOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'} ${color}`} />
    </div>
  );
}

function headerBgClass(isScrolled: boolean, isHome: boolean) {
  if (isScrolled) return 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm';
  if (isHome) return 'bg-transparent border-b border-transparent';
  return 'bg-white/90 backdrop-blur-md border-b border-gray-100';
}

function navLinkClass(isDark: boolean, isActive: boolean) {
  const base = 'relative text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 after:content-[\'\'] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full';
  const theme = isDark ? 'text-white/60 hover:text-white after:bg-white' : 'text-gray-500 hover:text-[#050A34] after:bg-[#085CF0]';
  const active = isActive ? 'after:w-full' : '';
  return `${base} ${theme} ${active}`;
}

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isDark = isHome && !isScrolled;

  useLockBody(isMenuOpen);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${headerBgClass(isScrolled, isHome)}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center relative z-50">
            <Image src={isDark ? '/images/logo/logo-white.png' : '/images/logo/logo-dark-blue.png'} alt="DayFocusLab" width={160} height={32} className="h-7 w-auto" priority />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass(isDark, pathname === link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 relative z-50">
            <button
              onClick={() => setLocale(locale === 'ko' ? 'en' : 'ko')}
              className={`text-xs font-bold px-3 py-1.5 border rounded-full uppercase tracking-wider transition-all duration-200 ${isDark ? 'border-white/20 text-white/60 hover:border-white/40 hover:text-white' : 'border-gray-200 text-gray-500 hover:border-[#050A34] hover:bg-[#050A34] hover:text-white'}`}
            >
              {locale === 'ko' ? 'EN' : 'KO'}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="mobile-nav">
              <HamburgerIcon isOpen={isMenuOpen} isDark={isDark} />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} links={navLinks} ctaLabel={t.nav.contact} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
