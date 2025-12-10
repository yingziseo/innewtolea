import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-24 md:py-32 section-padding relative z-10 overflow-hidden bg-gold-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,_var(--tw-gradient-stops))] from-gold-600/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blush-600/10 via-transparent to-transparent" />

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
                  <stop offset="0%" stopColor="#C5A3CB" />
                  <stop offset="100%" stopColor="#A97DB0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <p className="heading-sans text-xs text-gold-300 tracking-ultra mb-2">
          INNEWTOLEA
        </p>
        <p className="text-xs tracking-widest mb-12 text-gold-400/60">
          {t('brand.name')}
        </p>

        <div className="w-16 h-[1px] mx-auto mb-12 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

        <p className="font-serif text-base mb-10 leading-relaxed text-gold-100/90">
          {t('footer.wish')}
        </p>

        <div className="flex items-center justify-center gap-8 mb-16">
          <a
            href="#"
            className="text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 text-gold-300/70 hover:text-gold-200"
          >
            Instagram
          </a>
          <span className="text-gold-500/40">|</span>
          <a
            href="#"
            className="text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 text-gold-300/70 hover:text-gold-200"
          >
            WeChat
          </a>
          <span className="text-gold-500/40">|</span>
          <a
            href="#"
            className="text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 text-gold-300/70 hover:text-gold-200"
          >
            Contact
          </a>
        </div>

        <p className="text-[10px] tracking-wide text-gold-400/50">
          &copy; {new Date().getFullYear()} INNEWTOLEA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
