import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WomenAppreciation() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 section-padding relative overflow-hidden z-10 bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50/40 via-transparent to-blush-50/40" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="fade-in-section heading-sans text-[11px] text-gold-600 block mb-8">
          {t('women.label')}
        </span>

        <div className="fade-in-section mb-16">
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-warm-800 leading-relaxed">
            {t('women.title')}
          </h2>
        </div>

        <div className="fade-in-section divider mb-16" />

        <div className="fade-in-section space-y-12 md:space-y-14">
          <p className="heading-display text-xl md:text-2xl text-warm-700 leading-loose">
            {t('women.p1')}
            <br />
            <span className="text-warm-800 font-medium">{t('women.p1.2')}</span>
          </p>

          <p className="body-text text-base md:text-lg max-w-2xl mx-auto text-warm-600">
            {t('women.p2.1')}
            <br />
            {t('women.p2.2')}
            <br />
            {t('women.p2.3')}
          </p>

          <div className="py-6">
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </div>

          <p className="body-text text-base md:text-lg max-w-2xl mx-auto text-warm-600">
            {t('women.p3.1')}
            <br />
            {t('women.p3.2')}
          </p>

          <p className="heading-display text-xl md:text-2xl text-warm-700 leading-loose">
            {t('women.p4')}
            <br />
            {t('women.p4.2')}
          </p>
        </div>

        <div className="fade-in-section mt-20 pt-12 border-t border-cream-200">
          <p className="text-warm-500 text-xs tracking-widest font-medium">
            — INNEWTOLEA {t('brand.name')}
          </p>
        </div>
      </div>
    </section>
  );
}
