import { useState, ChangeEvent, FocusEvent } from 'react';

export type EmailState = 'idle' | 'korean' | 'invalid' | 'valid';

const HANGUL_REGEX = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useEmailValidation() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<EmailState>('idle');
  const [touched, setTouched] = useState(false);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);

    if (value.length === 0) {
      setState('idle');
      return;
    }

    // Highest priority: Korean IME warning (real-time)
    if (HANGUL_REGEX.test(value)) {
      setState('korean');
      return;
    }

    // If already touched (blurred once), show live validation
    if (touched) {
      setState(EMAIL_REGEX.test(value) ? 'valid' : 'invalid');
    } else {
      // Show valid check even before blur (positive reinforcement)
      setState(EMAIL_REGEX.test(value) ? 'valid' : 'idle');
    }
  }

  function onBlur(_e: FocusEvent<HTMLInputElement>) {
    setTouched(true);
    if (email.length === 0) {
      setState('idle');
      return;
    }
    if (HANGUL_REGEX.test(email)) {
      setState('korean');
      return;
    }
    setState(EMAIL_REGEX.test(email) ? 'valid' : 'invalid');
  }

  function reset() {
    setEmail('');
    setState('idle');
    setTouched(false);
  }

  return { email, state, onChange, onBlur, reset };
}
