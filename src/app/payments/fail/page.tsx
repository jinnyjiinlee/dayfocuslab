'use client';

import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';
import { Suspense } from 'react';

function FailContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const code = searchParams.get('code') || 'UNKNOWN';
  const message = searchParams.get('message') || '알 수 없는 오류가 발생했습니다.';

  return (
    <section className="pt-[96px] pb-24 bg-[#F7F9FC]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#050A34] mb-8">{t.payment.fail.title}</h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 text-left">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-500">{t.payment.fail.errorCode}</span>
              <span className="font-mono text-sm text-red-500">{code}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-500">{t.payment.fail.errorMessage}</span>
              <span className="text-sm text-[#050A34]">{message}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/checkout"
            className="px-8 py-4 bg-[#050A34] text-white font-medium rounded-xl hover:bg-[#020151] transition-colors"
          >
            {t.payment.fail.retry}
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-[#050A34] font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            {t.payment.fail.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PaymentFailPage() {
  return (
    <Suspense fallback={
      <section className="pt-[96px] pb-24 bg-[#F7F9FC]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gray-500">로딩 중...</p>
        </div>
      </section>
    }>
      <FailContent />
    </Suspense>
  );
}
