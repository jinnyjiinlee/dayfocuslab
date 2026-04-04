'use client';

import DFLSymbol from '@/components/brand/DFLSymbol';

export default function PageHero({ title, subtitle }: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="pt-[96px] pb-24 bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <DFLSymbol size={28} variant="blue" className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#050A34] mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
