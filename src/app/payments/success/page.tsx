'use client';

import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';

function SuccessContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [errorMessage, setErrorMessage] = useState('');

  const paymentKey = searchParams.get('paymentKey');
  const orderId = searchParams.get('orderId');
  const amount = Number(searchParams.get('amount'));

  useEffect(() => {
    if (!paymentKey || !orderId || !amount) {
      setStatus('error');
      setErrorMessage('결제 정보가 올바르지 않습니다.');
      return;
    }

    const confirmPayment = async () => {
      try {
        const res = await fetch('/api/payments/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentKey, orderId, amount }),
        });

        if (res.ok) {
          setStatus('success');
        } else {
          const data = await res.json();
          setStatus('error');
          setErrorMessage(data.error || t.payment.success.error);
        }
      } catch {
        setStatus('error');
        setErrorMessage(t.payment.success.error);
      }
    };

    confirmPayment();
  }, [paymentKey, orderId, amount, t.payment.success.error]);

  if (status === 'verifying') {
    return (
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-16 h-16 border-4 border-[#1B2A4A] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <p className="text-gray-600">{t.payment.success.verifying}</p>
        </div>
      </section>
    );
  }

  if (status === 'error') {
    return (
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#0B1222] mb-4">{t.payment.success.error}</h1>
          <p className="text-gray-600 mb-8">{errorMessage}</p>
          <Link
            href="/checkout"
            className="inline-block px-6 py-3 bg-[#1B2A4A] text-white rounded-xl hover:bg-[#132038] transition-colors"
          >
            {t.payment.success.retry}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-[#0B1222] mb-8">{t.payment.success.title}</h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 text-left">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-500">{t.payment.success.orderId}</span>
              <span className="font-mono text-sm text-[#0B1222]">{orderId}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-500">{t.payment.success.amount}</span>
              <span className="font-bold text-xl text-[#1B2A4A]">{amount.toLocaleString()}원</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-8">{t.payment.success.guide}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://open.kakao.com/o/sSp6Rcli"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#1B2A4A] text-white font-medium rounded-xl hover:bg-[#132038] transition-colors"
          >
            {t.payment.success.kakao}
          </a>
          <Link
            href="/"
            className="px-8 py-4 bg-white text-[#0B1222] font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            {t.payment.success.home}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-16 h-16 border-4 border-[#1B2A4A] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <p className="text-gray-500">로딩 중...</p>
        </div>
      </section>
    }>
      <SuccessContent />
    </Suspense>
  );
}
