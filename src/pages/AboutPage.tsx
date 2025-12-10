import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const namingParts = ['in', 'new', 'to', 'lea'] as const;

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-cream-50 relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-cream-100 to-cream-50 pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-200/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center section-padding">
          <div className="fade-in-section">
            <h1 className="heading-display text-5xl md:text-7xl text-warm-800 mb-4">
              {t('aboutPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-warm-600 font-light mb-6">
              {t('aboutPage.hero.subtitle')}
            </p>
            <div className="divider mx-auto mb-8" />
            <p className="text-lg text-gold-600 italic">
              {t('aboutPage.hero.tagline')}
            </p>
            <p className="text-sm text-warm-500 mt-2">
              {t('aboutPage.hero.tagline.en')}
            </p>
          </div>
        </div>
      </section>

      {/* Naming Section */}
      <section className="py-24 md:py-32 section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-section text-center mb-16">
            <span className="heading-sans text-[11px] text-gold-600 block mb-4">
              BRAND NAMING
            </span>
            <h2 className="heading-display text-3xl md:text-4xl text-warm-800 mb-6">
              {t('aboutPage.naming.title')}
            </h2>
            <p className="body-text text-warm-600">
              {t('aboutPage.naming.intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {namingParts.map((part, index) => (
              <div
                key={part}
                className="fade-in-section group p-8 rounded-2xl bg-gradient-to-br from-cream-50 to-white border border-cream-200 hover:border-gold-300 hover:shadow-premium transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl md:text-5xl font-serif text-gold-500 font-light">
                    {t(`aboutPage.naming.${part}.title`)}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gold-600 mb-2 font-medium">
                      {t(`aboutPage.naming.${part}.meaning`)}
                    </p>
                    <p className="body-text text-warm-600 text-sm leading-relaxed">
                      {t(`aboutPage.naming.${part}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-in-section">
            <span className="heading-sans text-[11px] text-gold-600 block mb-4">
              PHILOSOPHY
            </span>
            <h2 className="heading-display text-3xl md:text-4xl text-warm-800 mb-6">
              {t('aboutPage.philosophy.title')}
            </h2>
            <div className="divider mx-auto mb-10" />
          </div>

          <div className="fade-in-section mb-12">
            <p className="text-2xl md:text-3xl font-serif text-warm-700 italic mb-8">
              "{t('aboutPage.philosophy.core')}"
            </p>
            <p className="body-text text-warm-600 leading-relaxed">
              {t('aboutPage.philosophy.intro')}
            </p>
          </div>

          <div className="fade-in-section bg-white rounded-2xl p-8 md:p-12 shadow-premium border border-cream-200">
            <h3 className="text-lg font-medium text-warm-800 mb-6">
              {t('aboutPage.philosophy.commitment.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-start gap-3 p-4 rounded-xl bg-cream-50">
                  <span className="w-6 h-6 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center text-xs font-medium flex-shrink-0">
                    {num}
                  </span>
                  <p className="body-text text-warm-600 text-sm">
                    {t(`aboutPage.philosophy.commitment.${num}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-section mt-12 pt-12 border-t border-cream-200">
            <p className="body-text text-warm-600 leading-relaxed">
              {t('aboutPage.philosophy.closing')}
            </p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-16 section-padding bg-white">
        <div className="text-center">
          <a
            href="#/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-warm-300 text-warm-600 hover:border-gold-400 hover:text-gold-600 hover:bg-gold-50 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('aboutPage.back')}
          </a>
        </div>
      </section>
    </div>
  );
}
