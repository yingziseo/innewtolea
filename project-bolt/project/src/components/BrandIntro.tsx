import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function BrandIntro() {
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
      id="about"
      ref={sectionRef}
      className="py-32 md:py-48 section-padding relative z-10 bg-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="fade-in-section heading-sans text-[11px] text-gold-600 block mb-6">
          {t('about.label')}
        </span>

        <h2 className="fade-in-section heading-display text-3xl md:text-5xl text-warm-800 mb-10">
          {t('about.title')}
        </h2>

        <div className="fade-in-section divider mb-14" />

        <div className="fade-in-section space-y-10">
          <p className="body-text text-base md:text-lg text-warm-600">
            {t('about.p1')}
            <br />
            {t('about.p1.2')}
          </p>

          <p className="body-text text-warm-600">
            {t('about.p2')}
            <br />
            {t('about.p2.2')}
            <br />
            {t('about.p2.3')}
          </p>

          <p className="body-text text-warm-600">
            {t('about.p3')}
            <br />
            {t('about.p3.2')}
            <br />
            {t('about.p3.3')}
          </p>
        </div>

        <div className="fade-in-section mt-20 pt-16 border-t border-cream-200">
          <p className="font-serif text-warm-700 text-base md:text-lg italic">
            {t('about.quote')}
          </p>
        </div>
      </div>
    </section>
  );
}
