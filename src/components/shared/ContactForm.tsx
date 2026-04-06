'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useLanguage } from '@/components/LanguageContext';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meepvkog';
const MAX_MESSAGE_LENGTH = 2000;

type Status = 'idle' | 'sending' | 'success' | 'error';
type InquiryType = 'enterprise' | 'aipt' | 'workshop' | 'consulting' | 'other' | '';

export default function ContactForm() {
  const { t, locale } = useLanguage();
  const ko = locale === 'ko';

  const [status, setStatus] = useState<Status>('idle');
  const [inquiryType, setInquiryType] = useState<InquiryType>('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);

  const f = t.contact.form;

  function resetForm() {
    setStatus('idle');
    setInquiryType('');
    setMessage('');
    setAgreed(false);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;

    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    // Attach a human-readable inquiry type label for the email body
    if (inquiryType) {
      data.set('_subject', `[${f.inquiryTypes[inquiryType]}] ${data.get('subject') || ''}`);
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setInquiryType('');
        setMessage('');
        setAgreed(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center">
          <svg className="w-9 h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#050A34] mb-3">{f.successTitle}</h3>
        <p className="text-gray-500 max-w-md mx-auto mb-8">{f.successDescription}</p>
        <button
          type="button"
          onClick={resetForm}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#050A34] text-white font-semibold rounded-xl hover:bg-[#0a1250] transition"
        >
          {f.successAction}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  }

  const messagePlaceholder = inquiryType
    ? f.messagePlaceholders[inquiryType]
    : f.messagePlaceholders.other;

  const isSubmitDisabled = status === 'sending' || !agreed;

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100">
      {/* Header with expected response */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#050A34] mb-2">{t.contact.info.title}</h2>
          <p className="text-gray-500">{t.contact.info.description}</p>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#085CF0] rounded-xl text-xs font-semibold whitespace-nowrap self-start">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{f.expectedResponse}: {f.expectedResponseValue}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Honeypot field for spam bots (hidden) */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        {/* Inquiry Type */}
        <FieldLabel htmlFor="inquiryType" label={f.inquiryType} required requiredLabel={f.required}>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={inquiryType}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setInquiryType(e.target.value as InquiryType)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#050A34] focus:ring-1 focus:ring-[#050A34] outline-none transition text-[#050A34] bg-white"
          >
            <option value="">{f.inquiryTypePlaceholder}</option>
            <option value="enterprise">{f.inquiryTypes.enterprise}</option>
            <option value="aipt">{f.inquiryTypes.aipt}</option>
            <option value="workshop">{f.inquiryTypes.workshop}</option>
            <option value="consulting">{f.inquiryTypes.consulting}</option>
            <option value="other">{f.inquiryTypes.other}</option>
          </select>
        </FieldLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FieldLabel htmlFor="name" label={f.name} required requiredLabel={f.required}>
            <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} />
          </FieldLabel>
          <FieldLabel htmlFor="email" label={f.email} required requiredLabel={f.required}>
            <input type="email" id="email" name="email" required autoComplete="email" inputMode="email" className={inputClass} />
          </FieldLabel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FieldLabel htmlFor="company" label={f.company} optional optionalLabel={f.optional}>
            <input type="text" id="company" name="company" autoComplete="organization" className={inputClass} />
          </FieldLabel>
          <FieldLabel htmlFor="position" label={f.position} optional optionalLabel={f.optional}>
            <input type="text" id="position" name="position" autoComplete="organization-title" className={inputClass} />
          </FieldLabel>
        </div>

        <FieldLabel htmlFor="subject" label={f.subject} required requiredLabel={f.required}>
          <input type="text" id="subject" name="subject" required className={inputClass} />
        </FieldLabel>

        <FieldLabel
          htmlFor="message"
          label={f.message}
          required
          requiredLabel={f.required}
          meta={`${message.length} / ${MAX_MESSAGE_LENGTH}${ko ? f.charCount : ' ' + f.charCount}`}
        >
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            maxLength={MAX_MESSAGE_LENGTH}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={messagePlaceholder}
            className={`${inputClass} resize-none placeholder:text-gray-300`}
          />
        </FieldLabel>

        {/* Privacy consent */}
        <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#050A34] focus:ring-[#050A34] focus:ring-offset-0"
            required
          />
          <div className="flex-1 text-sm">
            <span className="font-semibold text-[#050A34]">
              <span className="text-red-500 mr-1">*</span>
              {f.privacy}
            </span>
            <p className="text-gray-500 text-xs mt-1">{f.privacyDetail}</p>
          </div>
        </label>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#050A34] text-white font-semibold rounded-xl hover:bg-[#0a1250] transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                {f.sending}
              </>
            ) : (
              <>
                {f.submit}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Error state */}
        {status === 'error' && (
          <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-red-700 font-semibold text-sm">{f.errorTitle}</p>
              <p className="text-red-600 text-xs mt-0.5">{f.errorDescription}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#050A34] focus:ring-1 focus:ring-[#050A34] outline-none transition text-[#050A34]';

function FieldLabel({
  htmlFor,
  label,
  required,
  optional,
  requiredLabel,
  optionalLabel,
  meta,
  children,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  requiredLabel?: string;
  optionalLabel?: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          {optional && optionalLabel && (
            <span className="text-gray-400 text-xs font-normal ml-1.5">({optionalLabel})</span>
          )}
        </label>
        {meta && <span className="text-xs text-gray-400 tabular-nums">{meta}</span>}
      </div>
      {children}
    </div>
  );
}
