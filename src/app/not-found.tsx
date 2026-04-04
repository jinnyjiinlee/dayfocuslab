import Link from 'next/link';
import DFLSymbol from '@/components/DFLSymbol';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050A34] text-white px-6 pt-[72px] relative overflow-hidden">
      {/* Background symbol */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]" aria-hidden="true">
        <DFLSymbol size={500} variant="blue" />
      </div>

      <div className="relative z-10 text-center max-w-md">
        <DFLSymbol size={64} variant="blue" className="mx-auto mb-8" />
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">404</h1>
        <p className="text-white/60 text-lg mb-8">
          페이지를 찾을 수 없습니다
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#085CF0] text-white font-bold rounded-2xl hover:bg-[#0950D0] transition-[background-color] duration-300 text-[15px]"
        >
          홈으로 돌아가기
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
