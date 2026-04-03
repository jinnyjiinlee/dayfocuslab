'use client';

import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';
import { Suspense, useState } from 'react';

function CheckoutContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const amount = Number(searchParams.get('amount')) || 660000;
  const hours = Number(searchParams.get('hours')) || 3;

  const isValid = amount >= 600000 && hours >= 3;

  const handlePayment = async () => {
    if (!agreed || !isValid || loading) return;
    setLoading(true);

    try {
      const { loadTossPayments } = await import('@tosspayments/tosspayments-sdk');
      const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!;
      const tossPayments = await loadTossPayments(clientKey);
      const payment = tossPayments.payment({ customerKey: 'ANONYMOUS' });

      const orderId = `AIPT-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const orderName = `AI PT ${hours}시간`;

      await payment.requestPayment({
        method: 'CARD',
        amount: { currency: 'KRW', value: amount },
        orderId,
        orderName,
        successUrl: `${window.location.origin}/payments/success`,
        failUrl: `${window.location.origin}/payments/fail`,
      });
    } catch (error) {
      // User cancelled or SDK error - do nothing
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isValid) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-6">{t.payment.checkout.invalidParams}</p>
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-[#1B2A4A] text-white rounded-xl hover:bg-[#132038] transition-colors"
          >
            {t.payment.checkout.goBack}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="w-16 h-1 bg-[#1B2A4A] rounded-full mb-8" />
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#0B1222]">
          {t.payment.checkout.title}
        </h1>
        <p className="text-gray-500 mb-10">{t.payment.checkout.subtitle}</p>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="font-bold text-lg mb-6 text-[#0B1222]">{t.payment.checkout.serviceName}</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-500">{t.payment.checkout.hours}</span>
              <span className="font-semibold text-[#0B1222]">{hours}시간</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-500">{t.payment.checkout.amount}</span>
              <span className="font-bold text-xl text-[#1B2A4A]">{amount.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-500">{t.payment.checkout.serviceDuration}</span>
              <span className="font-semibold text-[#0B1222]">{t.payment.checkout.serviceDurationValue}</span>
            </div>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 text-[#1B2A4A] rounded border-gray-300 focus:ring-[#1B2A4A]"
            />
            <span className="text-sm text-gray-700">
              {t.payment.checkout.agreeTerms}
            </span>
            <Link
              href="/terms"
              target="_blank"
              className="text-sm text-[#1B2A4A] hover:underline ml-auto"
            >
              {t.payment.checkout.viewTerms}
            </Link>
          </label>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={!agreed || loading}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${
            agreed && !loading
              ? 'bg-[#1B2A4A] text-white hover:bg-[#132038]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {loading ? '처리 중...' : `${t.payment.checkout.pay} (${amount.toLocaleString()}원)`}
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          결제는 토스페이먼츠를 통해 안전하게 처리됩니다.
        </p>
      </div>
    </section>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gray-500">로딩 중...</p>
        </div>
      </section>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
