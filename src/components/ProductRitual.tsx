import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProductRitual() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const coreIngredients = [
    { nameKey: 'core.collagen', doseKey: 'core.collagen.dose', descKey: 'core.collagen.desc' },
    { nameKey: 'core.grape', doseKey: 'core.grape.dose', descKey: 'core.grape.desc' },
  ];

  const vitamins = [
    { nameKey: 'vit.c', doseKey: 'vit.c.dose', descKey: 'vit.c.desc' },
    { nameKey: 'vit.e', doseKey: 'vit.e.dose', descKey: 'vit.e.desc' },
    { nameKey: 'vit.beta', doseKey: 'vit.beta.dose', descKey: 'vit.beta.desc' },
  ];

  const bVitamins = [
    { nameKey: 'vit.b2', doseKey: 'vit.b2.dose', descKey: 'vit.b2.desc' },
    { nameKey: 'vit.b6', doseKey: 'vit.b6.dose', descKey: 'vit.b6.desc' },
    { nameKey: 'vit.biotin', doseKey: 'vit.biotin.dose', descKey: 'vit.biotin.desc' },
  ];

  const otherVitamins = [
    { nameKey: 'vit.d3', doseKey: 'vit.d3.dose', descKey: 'vit.d3.desc' },
  ];

  const minerals = [
    { nameKey: 'mineral.zinc', doseKey: 'mineral.zinc.dose', descKey: 'mineral.zinc.desc' },
    { nameKey: 'mineral.selenium', doseKey: 'mineral.selenium.dose', descKey: 'mineral.selenium.desc' },
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
      id="products"
      ref={sectionRef}
      className="py-32 md:py-48 relative z-10"
    >
      <div className="section-padding">
        <div className="text-center mb-16">
          <span className="fade-in-section heading-sans text-[11px] text-gold-600 block mb-6">
            {t('ritual.label')}
          </span>
          <h2 className="fade-in-section heading-display text-3xl md:text-5xl text-warm-800 mb-6">
            {t('ritual.title')}
          </h2>
          <div className="fade-in-section divider mt-8" />
        </div>

        <div className="fade-in-section max-w-4xl mx-auto mb-24 text-center">
          <div className="w-24 h-24 mx-auto mb-8 relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-200/40 via-cream-100 to-blush-100/30 animate-pulse-slow" />
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cream-50 to-white flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-14 h-14 animate-float-gentle" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="6" fill="url(#flowerCenter)" className="animate-pulse-slow" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <ellipse
                    key={i}
                    cx="32"
                    cy="16"
                    rx="6"
                    ry="12"
                    fill="url(#petalGradient)"
                    opacity="0.85"
                    transform={`rotate(${angle} 32 32)`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
                <defs>
                  <linearGradient id="petalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#A97DB0" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C66B7F" stopOpacity="0.7" />
                  </linearGradient>
                  <radialGradient id="flowerCenter" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#724578" />
                    <stop offset="100%" stopColor="#8B5A94" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-0 rounded-full border border-gold-300/40 animate-spin-very-slow" />
          </div>

          <p className="heading-sans text-[10px] text-gold-500/80 tracking-ultra mb-3">
            INNEWTOLEA
          </p>
          <h3 className="heading-display text-3xl md:text-4xl text-warm-800 mb-2">
            {t('product.name')}
          </h3>
          <p className="heading-sans text-xs text-warm-400 mb-8">
            {t('product.name.en')}
          </p>

          <p className="body-text text-base max-w-md mx-auto text-warm-500 leading-relaxed">
            {t('product.desc')}
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent mx-auto mt-10" />
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="fade-in-section text-center mb-14">
            <h4 className="heading-sans text-[11px] text-gold-600 tracking-widest mb-3">
              {t('ingredient.core.label')}
            </h4>
            <p className="body-text text-sm text-warm-500">{t('ingredient.core.sublabel')}</p>
          </div>

          <div className="space-y-10">
            {coreIngredients.map((item, index) => (
              <div
                key={item.nameKey}
                className="fade-in-section group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 flex-shrink-0">
                    <h5 className="heading-display text-xl md:text-2xl text-warm-800 group-hover:text-gold-700 transition-colors duration-500">
                      {t(item.nameKey)}
                    </h5>
                    <p className="heading-sans text-xs text-gold-600 mt-1">
                      {t(item.doseKey)}
                    </p>
                  </div>
                  <p className="body-text text-sm text-warm-600 leading-relaxed flex-1">
                    {t(item.descKey)}
                  </p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent mt-10" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="fade-in-section text-center mb-14">
            <h4 className="heading-sans text-[11px] text-gold-600 tracking-widest mb-3">
              {t('ingredient.antioxidant.label')}
            </h4>
            <p className="body-text text-sm text-warm-500">{t('ingredient.antioxidant.sublabel')}</p>
          </div>

          <div className="space-y-8">
            {vitamins.map((item, index) => (
              <div
                key={item.nameKey}
                className="fade-in-section group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 flex-shrink-0">
                    <h5 className="heading-display text-lg md:text-xl text-warm-800 group-hover:text-gold-700 transition-colors duration-500">
                      {t(item.nameKey)}
                    </h5>
                    <p className="heading-sans text-xs text-gold-600 mt-1">
                      {t(item.doseKey)}
                    </p>
                  </div>
                  <p className="body-text text-sm text-warm-600 leading-relaxed flex-1">
                    {t(item.descKey)}
                  </p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent mt-8" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="fade-in-section text-center mb-14">
            <h4 className="heading-sans text-[11px] text-gold-600 tracking-widest mb-3">
              {t('ingredient.vitb.label')}
            </h4>
            <p className="body-text text-sm text-warm-500">{t('ingredient.vitb.sublabel')}</p>
          </div>

          <div className="space-y-8">
            {bVitamins.map((item, index) => (
              <div
                key={item.nameKey}
                className="fade-in-section group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 flex-shrink-0">
                    <h5 className="heading-display text-lg md:text-xl text-warm-800 group-hover:text-gold-700 transition-colors duration-500">
                      {t(item.nameKey)}
                    </h5>
                    <p className="heading-sans text-xs text-gold-600 mt-1">
                      {t(item.doseKey)}
                    </p>
                  </div>
                  <p className="body-text text-sm text-warm-600 leading-relaxed flex-1">
                    {t(item.descKey)}
                  </p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent mt-8" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="fade-in-section text-center mb-14">
            <h4 className="heading-sans text-[11px] text-gold-600 tracking-widest mb-3">
              {t('ingredient.sunshine.label')}
            </h4>
          </div>

          <div className="space-y-8">
            {otherVitamins.map((item, index) => (
              <div
                key={item.nameKey}
                className="fade-in-section group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 flex-shrink-0">
                    <h5 className="heading-display text-lg md:text-xl text-warm-800 group-hover:text-gold-700 transition-colors duration-500">
                      {t(item.nameKey)}
                    </h5>
                    <p className="heading-sans text-xs text-gold-600 mt-1">
                      {t(item.doseKey)}
                    </p>
                  </div>
                  <p className="body-text text-sm text-warm-600 leading-relaxed flex-1">
                    {t(item.descKey)}
                  </p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent mt-8" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="fade-in-section text-center mb-14">
            <h4 className="heading-sans text-[11px] text-gold-600 tracking-widest mb-3">
              {t('ingredient.mineral.label')}
            </h4>
            <p className="body-text text-sm text-warm-500">{t('ingredient.mineral.sublabel')}</p>
          </div>

          <div className="space-y-8">
            {minerals.map((item, index) => (
              <div
                key={item.nameKey}
                className="fade-in-section group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 flex-shrink-0">
                    <h5 className="heading-display text-lg md:text-xl text-warm-800 group-hover:text-gold-700 transition-colors duration-500">
                      {t(item.nameKey)}
                    </h5>
                    <p className="heading-sans text-xs text-gold-600 mt-1">
                      {t(item.doseKey)}
                    </p>
                  </div>
                  <p className="body-text text-sm text-warm-600 leading-relaxed flex-1">
                    {t(item.descKey)}
                  </p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent mt-8" />
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-section text-center mt-24">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-10" />
          <p className="body-text text-base max-w-md mx-auto text-warm-600">
            {t('product.footer')}
          </p>
          <p className="heading-sans text-[11px] text-gold-600 mt-6 tracking-widest">
            {t('product.footer.2')}
          </p>
        </div>
      </div>
    </section>
  );
}
