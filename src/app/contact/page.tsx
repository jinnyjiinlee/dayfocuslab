'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/components/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, you would send this to your backend
    console.log('Form submitted:', formState);

    setStatus('success');
    setFormState({ name: '', email: '', subject: '', message: '' });

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0066FF] rounded-full mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1222] mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all resize-none outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-[#0066FF] text-white font-medium rounded-xl hover:bg-[#0052CC] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 text-center">{t.contact.form.success}</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center">{t.contact.form.error}</p>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B1222] mb-4">{t.contact.info.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t.contact.info.description}
                </p>
              </div>

              {/* Service Icons */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#0066FF] text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#0B1222]">AX</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#0066FF] text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#0B1222]">Study</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#0066FF] text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#0B1222]">Coach</span>
                </div>
              </div>

              {/* KakaoTalk */}
              <a
                href="https://open.kakao.com/o/sSp6Rcli"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#FEE500] p-6 rounded-2xl hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#3C1E1E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#FEE500">
                      <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.54 1.91-.62 2.21-.1.37.14.36.29.26.12-.08 1.82-1.22 2.56-1.72.69.1 1.4.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#3C1E1E] text-lg">카카오톡으로 문의하기</p>
                    <p className="text-[#3C1E1E]/60 text-sm">빠른 상담을 원하시면 카카오톡으로 연락주세요</p>
                  </div>
                  <svg className="w-5 h-5 text-[#3C1E1E]/40 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* Tagline */}
              <div className="bg-gradient-to-br from-[#0066FF] to-[#0B1222] text-white p-8 rounded-3xl">
                <p className="text-2xl font-bold mb-2">Day Focus Lab</p>
                <p className="text-blue-100">{t.footer.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
