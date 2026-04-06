'use client';

import Link from 'next/link';

export default function MobileMenu({ isOpen, links, ctaLabel, onClose }: {
  isOpen: boolean;
  links: { href: string; label: string }[];
  ctaLabel: string;
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
        <Link
          href="/contact"
          onClick={onClose}
          className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-[#050A34] text-white font-bold rounded-2xl hover:bg-[#020151] transition-colors"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.4s ease ${150 + links.length * 80}ms, transform 0.4s ease ${150 + links.length * 80}ms, background-color 0.2s`,
          }}
        >
          {ctaLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
