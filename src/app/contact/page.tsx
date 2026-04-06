'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';

export default function Contact() {
  const { t, locale } = useLanguage();
  const ko = locale === 'ko';

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/meepvkog', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <>
      <PageHero title={t.contact.title} subtitle={t.contact.subtitle} />

      {/* Contact Form */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-[#050A34] mb-2">
              {t.contact.info.title}
            </h2>
            <p className="text-gray-500 mb-8">{t.contact.info.description}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#050A34] focus:ring-1 focus:ring-[#050A34] outline-none transition text-[#050A34]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#050A34] focus:ring-1 focus:ring-[#050A34] outline-none transition text-[#050A34]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#050A34] focus:ring-1 focus:ring-[#050A34] outline-none transition text-[#050A34]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#050A34] focus:ring-1 focus:ring-[#050A34] outline-none transition resize-none text-[#050A34]"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full md:w-auto px-8 py-3.5 bg-[#050A34] text-white font-semibold rounded-xl hover:bg-[#0a1250] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
              </button>

              {status === 'success' && (
                <p className="text-green-600 font-medium">{t.contact.form.success}</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 font-medium">{t.contact.form.error}</p>
              )}
            </form>
          </div>

          <p className="text-center text-sm text-gray-400 mb-4 uppercase tracking-wider">
            {ko ? '또는 다른 채널로 연락하기' : 'Or reach us through other channels'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ContactCard href="tel:010-4067-5392" title={ko ? '전화 문의' : 'Phone'} subtitle="010-4067-5392" linkLabel={ko ? '전화하기' : 'Call Now'} iconBg="bg-[#050A34]"
              icon={<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>} />

            <ContactCard href="mailto:dayfocuslab@gmail.com" title={ko ? '이메일' : 'Email'} subtitle="dayfocuslab@gmail.com" linkLabel={ko ? '이메일 보내기' : 'Send Email'} iconBg="bg-[#050A34]"
              icon={<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} />

            <ContactCard href="https://www.linkedin.com/in/jiin-jinny-lee-15b4072b8/" external title="LinkedIn" subtitle={ko ? '비즈니스 네트워킹' : 'Business Networking'} linkLabel={ko ? '프로필 보기' : 'View Profile'} iconBg="bg-[#085CF0]"
              icon={<svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>} />
          </div>

          {/* Business Info */}
          <div className="mt-8 bg-white p-8 rounded-3xl border border-gray-100">
            <h3 className="font-bold text-[#050A34] text-lg mb-4">{ko ? '사업자 정보' : 'Business Information'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {[
                { label: ko ? '상호' : 'Company', value: ko ? '데이포커스랩' : 'DayFocusLab' },
                { label: ko ? '대표' : 'CEO', value: ko ? '이지인' : 'Jiin Lee' },
                { label: ko ? '주소' : 'Address', value: ko ? '서울특별시 광진구 능동로 330, 5층' : '5F, 330 Neungdong-ro, Gwangjin-gu, Seoul' },
                { label: ko ? '사업자등록번호' : 'Business Reg.', value: '546-10-03346' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                  <p className="text-[#050A34]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-[#050A34] text-white p-10 rounded-3xl text-center">
            <p className="text-2xl font-bold mb-2">DayFocusLab</p>
            <p className="text-blue-100">{t.footer.tagline}</p>
          </div>
        </div>
      </section>
    </>
  );
}
