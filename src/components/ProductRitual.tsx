import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProductRitual() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 3;

  const coreIngredients = [
    { nameKey: 'core.pqq', descKey: 'core.pqq.desc' },
    { nameKey: 'core.birdnest', descKey: 'core.birdnest.desc' },
    { nameKey: 'core.ejiao', descKey: 'core.ejiao.desc' },
    { nameKey: 'core.ginseng', descKey: 'core.ginseng.desc' },
    { nameKey: 'core.rehmannia', descKey: 'core.rehmannia.desc' },
  ];

  const otherIngredients = [
    { nameKey: 'other.saffron', descKey: 'other.saffron.desc' },
    { nameKey: 'other.carob', descKey: 'other.carob.desc' },
    { nameKey: 'other.pomegranate', descKey: 'other.pomegranate.desc' },
    { nameKey: 'other.rose', descKey: 'other.rose.desc' },
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
      className="py-32 md:py-48 relative z-10 overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gold-200/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-40 right-1/4 w-[350px] h-[350px] bg-blush-200/15 rounded-full blur-[100px] animate-float-delayed" />

      <div className="section-padding relative z-10">
        <div className="text-center mb-16">
          <span className="fade-in-section heading-sans text-[11px] text-gold-500 block mb-6">
            {t('ritual.label')}
          </span>
          <h2 className="fade-in-section heading-display text-3xl md:text-5xl text-warm-800 mb-6">
            {t('ritual.title')}
          </h2>
          <div className="fade-in-section divider mt-8" />
        </div>

        {/* 首屏：产品身份（唯一焦点） */}
        <div className="fade-in-section max-w-4xl mx-auto mb-8 text-center">
          {/* Logo花 */}
          <div className="w-24 h-24 mx-auto mb-6 relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-200/40 via-cream-100 to-blush-100/30 animate-pulse-slow" />
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cream-50 to-white flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-16 h-16 animate-float-gentle" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          <h3 className="heading-display text-2xl md:text-3xl text-warm-600 mb-2">
            {t('product.name')}
          </h3>
          <p className="font-sans text-sm text-[#8B5A94] mb-4">
            {t('product.name.sub')}
          </p>
          <p className="heading-sans text-[10px] text-gold-400/60 tracking-ultra">
            INNEWTOLEA
          </p>
        </div>

        {/* 产品图 + 左右切换箭头 */}
        <div className="fade-in-section max-w-4xl mx-auto mb-8 flex items-center justify-center gap-6 md:gap-10">
          {/* 左箭头 */}
          <button
            onClick={() => setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages)}
            className="w-10 h-10 rounded-full border border-gold-300 flex items-center justify-center text-gold-400 hover:border-gold-500 hover:text-gold-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 产品图 */}
          <div className="w-64 h-80 md:w-72 md:h-[22rem] rounded-xl bg-gradient-to-br from-cream-100 to-cream-200 border border-cream-300 flex items-center justify-center overflow-hidden">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[10px] text-warm-400 mt-1">Product Image {currentImage + 1}</p>
            </div>
          </div>

          {/* 右箭头 */}
          <button
            onClick={() => setCurrentImage((prev) => (prev + 1) % totalImages)}
            className="w-10 h-10 rounded-full border border-gold-300 flex items-center justify-center text-gold-400 hover:border-gold-500 hover:text-gold-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 图片指示器 */}
        <div className="fade-in-section flex justify-center gap-2 mb-6">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentImage === index ? 'bg-gold-500' : 'bg-gold-200'
              }`}
            />
          ))}
        </div>

        {/* 价格 + 购买按钮 */}
        <div className="fade-in-section max-w-4xl mx-auto mb-16 text-center">
          <p className="heading-display text-xl md:text-2xl text-warm-800 mb-4">
            {t('product.price')}
          </p>
          <button
            disabled
            className="px-8 py-3 rounded-full border border-gold-300 text-gold-500 text-sm tracking-wide cursor-not-allowed opacity-60 hover:border-[#8B5A94] hover:text-[#8B5A94] hover:bg-[#8B5A94]/10 transition-all duration-300"
          >
            {t('product.buy')}
          </button>
        </div>

        {/* 第二屏：规格与情绪句 */}
        <div className="fade-in-section max-w-4xl mx-auto mb-16 text-center">
          <p className="heading-sans text-[10px] text-warm-400 tracking-wide mb-6">
            {t('product.name.en')} · {t('product.spec')}
          </p>
          <p className="body-text text-base text-warm-600 leading-relaxed">
            {t('product.desc')}
          </p>
        </div>

        {/* 核心配料 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="fade-in-section text-center mb-10">
            <h4 className="heading-sans text-[11px] text-gold-600 tracking-widest mb-2">
              {t('ingredient.core.label')}
            </h4>
            <p className="body-text text-sm text-warm-500">{t('ingredient.core.sublabel')}</p>
          </div>

          <div className="space-y-6">
            {coreIngredients.map((item, index) => (
              <div
                key={item.nameKey}
                className="fade-in-section group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                  <h5 className="md:w-40 flex-shrink-0 heading-display text-lg md:text-xl text-warm-800 group-hover:text-gold-700 transition-colors duration-500">
                    {t(item.nameKey)}
                  </h5>
                  <p className="body-text text-sm text-warm-600 leading-relaxed flex-1">
                    {t(item.descKey)}
                  </p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent mt-6" />
              </div>
            ))}
          </div>
        </div>

        {/* 其他配料 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="fade-in-section text-center mb-8">
            <h4 className="heading-sans text-[11px] text-gold-600 tracking-widest mb-2">
              {t('ingredient.other.label')}
            </h4>
            <p className="body-text text-sm text-warm-500">{t('ingredient.other.sublabel')}</p>
          </div>

          <div className="space-y-5">
            {otherIngredients.map((item, index) => (
              <div
                key={item.nameKey}
                className="fade-in-section group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                  <h5 className="md:w-40 flex-shrink-0 heading-display text-base md:text-lg text-warm-800 group-hover:text-gold-700 transition-colors duration-500">
                    {t(item.nameKey)}
                  </h5>
                  <p className="body-text text-sm text-warm-600 leading-relaxed flex-1">
                    {t(item.descKey)}
                  </p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent mt-5" />
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-section text-center mt-16">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-10" />
          <p className="body-text text-base max-w-md mx-auto text-warm-600">
            {t('product.footer')}
          </p>
          <p className="text-[9px] text-warm-400 mt-8 tracking-wide">
            {t('product.footer.2')}
          </p>
        </div>
      </div>
    </section>
  );
}
