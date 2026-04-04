'use client';

import FadeIn from '@/components/shared/FadeIn';

const VALUES = [
  { num: '01', keyword: 'DAY', color: '#085CF0' },
  { num: '02', keyword: 'FOCUS', color: '#713FFF' },
  { num: '03', keyword: 'LAB', color: '#AFE9FD' },
] as const;

const TITLES_KO = ['매일의 기회', '깊은 몰입', '실험과 혁신'];
const TITLES_EN = ['Daily Opportunity', 'Deep Focus', 'Experiment & Innovate'];
const DESCS_KO = [
  '작은 변화가 쌓여 큰 성과가 되도록, 지속 가능한 성장 환경을 설계합니다.',
  'AI를 통해 업무를 단순화하고, 가장 중요한 일에 몰입할 수 있도록 돕습니다.',
  '업무 전 과정(End-to-End)을 최적화하여 지속적으로 성과를 만드는 시스템을 구축합니다.',
];
const DESCS_EN = [
  'We design sustainable growth environments where small changes accumulate into big results.',
  'We simplify work with AI so you can focus on what matters most.',
  'We optimize the entire workflow to build systems that continuously deliver results.',
];

export default function BrandValuesSection({ ko }: { ko: boolean }) {
  const titles = ko ? TITLES_KO : TITLES_EN;
  const descs = ko ? DESCS_KO : DESCS_EN;

  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-6 overflow-hidden">
          <p className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black text-gray-100 leading-none select-none tracking-tighter whitespace-nowrap" aria-hidden="true">
            DAILY GROWTH
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 -mt-12 md:-mt-20 relative z-10">
          {VALUES.map((v, i) => (
            <FadeIn key={v.keyword} delay={i * 100} className="text-center px-6 md:px-8 py-10 md:py-12">
              <span className="text-xs font-mono text-gray-300 tracking-widest">{v.num}</span>
              <h3 className="text-3xl md:text-5xl font-black mt-3 mb-2 tracking-tight" style={{ color: v.color }}>{v.keyword}</h3>
              <p className="text-base font-semibold text-[#050A34] mb-3">{titles[i]}</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{descs[i]}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
