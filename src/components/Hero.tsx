import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-100/30 via-transparent to-transparent" />

      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold-200/30 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blush-200/25 rounded-full blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-rose-200/15 rounded-full blur-[100px] animate-float" />

      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <p className="heading-sans text-[11px] md:text-xs text-gold-500 mb-10 opacity-0 animate-fade-in tracking-ultra">
          INNEWTOLEA
        </p>

        <div className="mb-14 opacity-0 animate-fade-in animate-delay-200">
          <p className="font-sans text-sm md:text-base text-warm-400 mb-10 tracking-widest font-light">
            {t('hero.subtitle')}
          </p>
          <h1 className="font-display font-normal text-4xl md:text-5xl lg:text-6xl text-warm-800 leading-[1.3] tracking-wide">
            <span className="block mb-2 bg-gradient-to-r from-warm-800 via-gold-500 to-warm-800 bg-clip-text text-transparent">{t('hero.title.1')}</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-warm-800 via-gold-500 to-warm-800 bg-clip-text text-transparent">{t('hero.title.2')}</span>
          </h1>
        </div>

        <div className="divider opacity-0 animate-fade-in animate-delay-400" />

        <p className="body-text text-base md:text-lg mt-14 max-w-lg mx-auto opacity-0 animate-fade-in animate-delay-500 text-warm-600">
          {t('hero.desc')}
          {t('hero.desc.2') && <><br />{t('hero.desc.2')}</>}
          {t('hero.desc.3') && <><br />{t('hero.desc.3')}</>}
        </p>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-700">
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="relative w-6 h-10 rounded-full border border-warm-300 group-hover:border-gold-400 transition-colors duration-300">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-gold-500 rounded-full animate-scroll-indicator" />
          </div>
          <span className="text-[10px] tracking-ultra text-warm-500 uppercase font-medium group-hover:text-gold-600 transition-colors duration-300">
            {t('hero.scroll')}
          </span>
        </div>
      </div>
    </section>
  );
}
