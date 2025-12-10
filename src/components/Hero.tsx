import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-100/30 via-transparent to-transparent" />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-100/40 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blush-100/50 rounded-full blur-[100px] animate-float-delayed" />

      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <p className="heading-sans text-[11px] md:text-xs text-gold-600 mb-10 opacity-0 animate-fade-in tracking-ultra">
          INNEWTOLEA
        </p>

        <div className="mb-14 opacity-0 animate-fade-in animate-delay-200">
          <p className="heading-display text-lg md:text-xl text-warm-500 mb-8">
            {t('hero.subtitle')}
          </p>
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-warm-800 leading-tight">
            {t('hero.title.1')}
            <br />
            <span className="text-gradient">{t('hero.title.2')}</span>
          </h1>
        </div>

        <div className="divider opacity-0 animate-fade-in animate-delay-400" />

        <p className="body-text text-base md:text-lg mt-14 max-w-lg mx-auto opacity-0 animate-fade-in animate-delay-500 text-warm-600">
          {t('hero.desc')}
          <br />
          {t('hero.desc.2')}
        </p>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-700">
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <span className="text-[10px] tracking-ultra text-warm-500 uppercase font-medium group-hover:text-gold-600 transition-colors duration-300">
            {t('hero.scroll')}
          </span>
          <div className="relative w-6 h-10 rounded-full border border-warm-300 group-hover:border-gold-400 transition-colors duration-300">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-gold-500 rounded-full animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}
