'use client';

import { useLanguage } from '@/components/LanguageContext';
import DFLSymbol from '@/components/brand/DFLSymbol';
import CTASection from '@/components/shared/CTASection';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import BrandValuesSection from '@/components/home/BrandValuesSection';
import ProcessSection from '@/components/home/ProcessSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import MissionSection from '@/components/home/MissionSection';

export default function Home() {
  const { t, locale } = useLanguage();
  const ko = locale === 'ko';

  return (
    <>
      <HeroSection t={t} ko={ko} />

      <div className="flex justify-center py-6 bg-white" aria-hidden="true">
        <DFLSymbol size={20} variant="blue" className="opacity-30" />
      </div>

      <ServicesSection t={t} ko={ko} />
      <BrandValuesSection ko={ko} />

      <div className="flex justify-center py-6 bg-white" aria-hidden="true">
        <DFLSymbol size={20} variant="blue" className="opacity-30" />
      </div>

      <ProcessSection t={t} />
      <WhyUsSection t={t} />
      <MissionSection t={t} ko={ko} />

      <CTASection
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        ctaLabel={t.cta.enterprise}
        ctaHref="/contact"
        kakaoLabel={t.cta.kakao}
      />
    </>
  );
}
