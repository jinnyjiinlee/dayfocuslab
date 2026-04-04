'use client';

import Link from 'next/link';

export default function MobileMenu({ isOpen, links, kakaoLabel, onClose }: {
  isOpen: boolean;
  links: { href: string; label: string }[];
  kakaoLabel: string;
  onClose: () => void;
}) {
  return (
    <div
      id="mobile-nav"
      role="navigation"
      aria-label="Mobile navigation"
      className={`fixed inset-0 top-0 bg-white/98 backdrop-blur-xl md:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="flex flex-col items-center justify-center h-full gap-2">
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-3xl font-black text-[#050A34] hover:text-[#085CF0] transition-all duration-300 py-3"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${150 + i * 80}ms, transform 0.4s ease ${150 + i * 80}ms, color 0.2s`,
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://open.kakao.com/o/sSp6Rcli"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-[#FEE500] text-[#3C1E1E] font-bold rounded-2xl"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.4s ease ${150 + links.length * 80}ms, transform 0.4s ease ${150 + links.length * 80}ms`,
          }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.54 1.91-.62 2.21-.1.37.14.36.29.26.12-.08 1.82-1.22 2.56-1.72.69.1 1.4.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z"/>
          </svg>
          {kakaoLabel}
        </a>
      </nav>
    </div>
  );
}
