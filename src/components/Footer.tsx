import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-24 md:py-32 section-padding relative z-10 overflow-hidden bg-warm-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,_var(--tw-gradient-stops))] from-gold-600/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23" stroke="url(#footerLogoGradient)" strokeWidth="1.5" fill="none" />
              <path
                d="M24 12C24 12 18 18 18 24C18 30 24 36 24 36C24 36 30 30 30 24C30 18 24 12 24 12Z"
                fill="url(#footerLogoGradient)"
                opacity="0.2"
              />
              <path
                d="M24 12C24 12 18 18 18 24C18 30 24 36 24 36C24 36 30 30 30 24C30 18 24 12 24 12Z"
                stroke="url(#footerLogoGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="24" y1="14" x2="24" y2="34" stroke="url(#footerLogoGradient)" strokeWidth="1" opacity="0.6" />
              <defs>
                <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D2D2D7" />
                  <stop offset="100%" stopColor="#AEAEB2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <p className="heading-sans text-xs text-cream-300 tracking-ultra mb-2">
          INNEWTOLEA
        </p>
        <p className="text-xs tracking-widest mb-12 text-cream-400">
          {t('brand.name')}
        </p>

        <div className="w-16 h-[1px] mx-auto mb-12 bg-gradient-to-r from-transparent via-cream-500/40 to-transparent" />

        <div className="mb-10 text-center">
          <p className="font-serif text-lg mb-2 text-cream-200">
            {t('footer.wish')}
          </p>
          <p className="font-sans text-xs tracking-wide text-cream-400">
            {t('footer.wish.en')}
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 mb-16">
          <a
            href="#"
            className="text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 text-cream-400 hover:text-white"
          >
            Instagram
          </a>
          <span className="text-cream-500/40">|</span>
          <a
            href="#"
            className="text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 text-cream-400 hover:text-white"
          >
            WeChat
          </a>
          <span className="text-cream-500/40">|</span>
          <a
            href="#"
            className="text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 text-cream-400 hover:text-white"
          >
            Contact
          </a>
        </div>

        <p className="text-[10px] tracking-wide text-cream-500">
          &copy; {new Date().getFullYear()} INNEWTOLEA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
