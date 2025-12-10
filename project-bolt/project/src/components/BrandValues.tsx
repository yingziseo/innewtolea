import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function BrandValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const values = [
    { titleKey: 'value.1.title', enKey: 'value.1.en', descKey: 'value.1.desc' },
    { titleKey: 'value.2.title', enKey: 'value.2.en', descKey: 'value.2.desc' },
    { titleKey: 'value.3.title', enKey: 'value.3.en', descKey: 'value.3.desc' },
    { titleKey: 'value.4.title', enKey: 'value.4.en', descKey: 'value.4.desc' },
    { titleKey: 'value.5.title', enKey: 'value.5.en', descKey: 'value.5.desc' },
    { titleKey: 'value.6.title', enKey: 'value.6.en', descKey: 'value.6.desc' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="values"
      ref={sectionRef}
      className="py-32 md:py-48 bg-cream-50 relative z-10"
    >
      <div className="section-padding">
        <div className="text-center mb-20">
          <span className="fade-in-section heading-sans text-[11px] text-gold-600 block mb-6">
            {t('values.label')}
          </span>
          <h2 className="fade-in-section heading-display text-3xl md:text-5xl text-warm-800 mb-6">
            {t('values.title')}
          </h2>
          <div className="fade-in-section divider mt-8" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={value.titleKey}
                className="fade-in-section group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="premium-card p-8 md:p-10 text-center h-full transition-all duration-500 hover:scale-[1.02]">
                  <div className="w-px h-8 bg-gold-400 mx-auto mb-8 group-hover:h-12 group-hover:bg-gold-500 transition-all duration-500" />

                  <h3 className="heading-display text-xl md:text-2xl text-warm-800 mb-2">
                    {t(value.titleKey)}
                  </h3>
                  <p className="heading-sans text-[9px] text-warm-400 mb-6">
                    {t(value.enKey)}
                  </p>

                  <p className="body-text text-sm leading-relaxed text-warm-600">
                    {t(value.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
