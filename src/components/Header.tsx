import { useState, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const languages: { code: Language; label: string; short: string }[] = [
  { code: 'zh', label: '中文', short: '中' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ko', label: '한국어', short: '한' },
];

// 首页锚点列表
const homeAnchors = ['hero', 'brand-culture', 'values', 'products'];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setLangMenuOpen(false);
    if (langMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [langMenuOpen]);

  // 处理导航点击，在子页面时跳回首页
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    const currentHash = window.location.hash;
    const isOnSubPage = currentHash === '#/about' || currentHash === '#/contact';

    if (isOnSubPage) {
      e.preventDefault();
      // 先设置锚点 hash，触发 App 切换到首页，然后滚动到锚点
      window.location.hash = anchor;
      // 等待页面渲染完成后滚动到锚点
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const currentLang = languages.find((l) => l.code === language);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-2 shadow-premium'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="section-padding flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-4 cursor-pointer"
        >
          <div className="w-11 h-11 flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23" stroke="url(#logoGradient)" strokeWidth="1.5" fill="none" />
              <path
                d="M24 12C24 12 18 18 18 24C18 30 24 36 24 36C24 36 30 30 30 24C30 18 24 12 24 12Z"
                fill="url(#logoGradient)"
                opacity="0.15"
              />
              <path
                d="M24 12C24 12 18 18 18 24C18 30 24 36 24 36C24 36 30 30 30 24C30 18 24 12 24 12Z"
                stroke="url(#logoGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="24" y1="14" x2="24" y2="34" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.6" />
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5A9B" />
                  <stop offset="100%" stopColor="#6E4580" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-widest text-warm-800 uppercase">
              INNEWTOLEA
            </span>
            <span className="text-[10px] tracking-wider text-warm-500">
              {t('brand.name')}
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {homeAnchors.map((anchor) => (
            <a
              key={anchor}
              href={`#${anchor}`}
              onClick={(e) => handleNavClick(e, anchor)}
              className="text-sm tracking-wider text-warm-600 hover:text-gold-600 transition-colors duration-300"
            >
              {t(anchor === 'hero' ? 'nav.home' :
                 anchor === 'brand-culture' ? 'nav.brandCulture' :
                 anchor === 'values' ? 'nav.values' : 'nav.products')}
            </a>
          ))}
          <a
            href="#/about"
            className="text-sm tracking-wider text-warm-600 hover:text-gold-600 transition-colors duration-300"
          >
            {t('nav.about')}
          </a>
          <a
            href="#/contact"
            className="text-sm tracking-wider text-warm-600 hover:text-gold-600 transition-colors duration-300"
          >
            {t('nav.contact')}
          </a>
        </div>

        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLangMenuOpen(!langMenuOpen);
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-warm-200 hover:border-gold-400 hover:bg-cream-50 transition-all duration-300"
          >
            <span className="text-sm font-medium text-warm-700">
              {currentLang?.short}
            </span>
            <svg
              className={`w-3 h-3 text-warm-500 transition-transform duration-300 ${
                langMenuOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {langMenuOpen && (
            <div className="absolute right-0 top-full mt-2 py-2 bg-white backdrop-blur-md rounded-xl shadow-premium-lg border border-cream-200 min-w-[140px] animate-fade-in">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage(lang.code);
                    setLangMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-all duration-200 flex items-center justify-between ${
                    language === lang.code
                      ? 'text-gold-600 bg-gold-50'
                      : 'text-warm-600 hover:text-warm-800 hover:bg-cream-50'
                  }`}
                >
                  <span>{lang.label}</span>
                  {language === lang.code && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
