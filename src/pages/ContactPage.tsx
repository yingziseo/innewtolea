import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// 美化二维码组件（带品牌Logo）
function StyledQRCode() {
  return (
    <div className="w-44 h-44 bg-white rounded-xl border border-cream-200 shadow-soft p-3 relative">
      {/* QR Code Pattern */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* 左上角定位图案 */}
        <rect x="4" y="4" width="20" height="20" rx="2" fill="none" stroke="#724578" strokeWidth="3"/>
        <rect x="8" y="8" width="12" height="12" rx="1" fill="#724578"/>

        {/* 右上角定位图案 */}
        <rect x="76" y="4" width="20" height="20" rx="2" fill="none" stroke="#724578" strokeWidth="3"/>
        <rect x="80" y="8" width="12" height="12" rx="1" fill="#724578"/>

        {/* 左下角定位图案 */}
        <rect x="4" y="76" width="20" height="20" rx="2" fill="none" stroke="#724578" strokeWidth="3"/>
        <rect x="8" y="80" width="12" height="12" rx="1" fill="#724578"/>

        {/* 数据区域模拟 - 使用品牌色渐变 */}
        <defs>
          <linearGradient id="qrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#724578"/>
            <stop offset="100%" stopColor="#A97DB0"/>
          </linearGradient>
        </defs>

        {/* 随机数据点 */}
        {[
          [28, 6], [32, 6], [40, 6], [44, 6], [52, 6], [60, 6], [68, 6],
          [28, 10], [36, 10], [48, 10], [56, 10], [64, 10], [72, 10],
          [6, 28], [10, 28], [18, 28], [28, 28], [36, 28], [64, 28], [72, 28], [80, 28], [88, 28],
          [6, 32], [14, 32], [28, 32], [40, 32], [56, 32], [68, 32], [84, 32], [92, 32],
          [6, 40], [18, 40], [28, 40], [48, 40], [60, 40], [72, 40], [88, 40],
          [10, 48], [22, 48], [28, 48], [72, 48], [80, 48], [92, 48],
          [6, 56], [14, 56], [28, 56], [40, 56], [56, 56], [68, 56], [84, 56],
          [6, 60], [18, 60], [28, 60], [48, 60], [64, 60], [76, 60], [92, 60],
          [6, 68], [10, 68], [22, 68], [28, 68], [36, 68], [52, 68], [60, 68], [72, 68], [84, 68], [92, 68],
          [28, 76], [36, 76], [44, 76], [56, 76], [68, 76], [80, 76], [88, 76],
          [28, 80], [40, 80], [52, 80], [64, 80], [76, 80], [92, 80],
          [28, 88], [32, 88], [44, 88], [48, 88], [60, 88], [72, 88], [84, 88], [88, 88],
          [28, 92], [36, 92], [56, 92], [68, 92], [80, 92],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="4" height="4" rx="0.5" fill="url(#qrGradient)" opacity={0.7 + Math.random() * 0.3}/>
        ))}
      </svg>

      {/* 中心Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-cream-100">
          <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="5" fill="url(#logoCenter)"/>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <ellipse
                key={i}
                cx="32"
                cy="18"
                rx="5"
                ry="10"
                fill="url(#logoPetal)"
                opacity="0.9"
                transform={`rotate(${angle} 32 32)`}
              />
            ))}
            <defs>
              <linearGradient id="logoPetal" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A97DB0"/>
                <stop offset="100%" stopColor="#C66B7F"/>
              </linearGradient>
              <radialGradient id="logoCenter" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#724578"/>
                <stop offset="100%" stopColor="#8B5A94"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
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
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-warm-600 font-light mb-6">
              {t('contact.hero.subtitle')}
            </p>
            <div className="divider mx-auto" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Person Card with Flower */}
          <div className="fade-in-section text-center mb-20">
            {/* Flower Logo */}
            <div className="w-24 h-24 mx-auto mb-8 relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-200/40 via-cream-100 to-blush-100/30 animate-pulse-slow" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cream-50 to-white flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-16 h-16 animate-float-gentle" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="6" fill="url(#flowerCenterContact)" className="animate-pulse-slow" />
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <ellipse
                      key={i}
                      cx="32"
                      cy="16"
                      rx="6"
                      ry="12"
                      fill="url(#petalGradientContact)"
                      opacity="0.85"
                      transform={`rotate(${angle} 32 32)`}
                    />
                  ))}
                  <defs>
                    <linearGradient id="petalGradientContact" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#A97DB0" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#C66B7F" stopOpacity="0.7" />
                    </linearGradient>
                    <radialGradient id="flowerCenterContact" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#724578" />
                      <stop offset="100%" stopColor="#8B5A94" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full border border-gold-300/40 animate-spin-very-slow" />
            </div>

            <span className="heading-sans text-[11px] text-gold-600 block mb-4">
              BRAND PARTNERSHIP
            </span>
            <h2 className="heading-display text-3xl md:text-4xl text-warm-800 mb-3">
              {t('contact.person.name')}
            </h2>
            <p className="body-text text-warm-500">
              {t('contact.person.title')}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: WeChat Card */}
            <div className="fade-in-section">
              <div className="h-full bg-gradient-to-br from-cream-50 to-white rounded-2xl p-8 md:p-10 border border-cream-200 hover:border-gold-300 hover:shadow-premium transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-gold-200 to-gold-300 flex items-center justify-center shadow-[0_2px_8px_rgba(180,160,120,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                    <svg className="w-5 h-5 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gold-600 font-medium">{t('contact.info.wechat')}</span>
                </div>

                <div className="flex flex-col items-center">
                  <StyledQRCode />
                  <p className="text-warm-600 text-sm mt-6">{t('contact.info.wechat.scan')}</p>
                  <p className="text-warm-400 text-xs mt-1">{t('contact.info.wechat.value')}</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="fade-in-section group p-6 rounded-2xl bg-gradient-to-br from-cream-50 to-white border border-cream-200 hover:border-purple-300/60 hover:shadow-[0_4px_20px_rgba(139,90,148,0.1)] hover:bg-gradient-to-br hover:from-purple-50/30 hover:to-white transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-gold-200 to-gold-300 group-hover:from-[#A97DB0] group-hover:to-[#8B5A94] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(180,160,120,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:shadow-[0_2px_8px_rgba(114,69,120,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300">
                    <svg className="w-5 h-5 text-gold-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gold-600 group-hover:text-purple-600 mb-1 transition-colors duration-300">{t('contact.info.email')}</p>
                    <a href={`mailto:${t('contact.info.email.value')}`} className="text-warm-700 group-hover:text-purple-700 transition-colors duration-300">
                      {t('contact.info.email.value')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="fade-in-section group p-6 rounded-2xl bg-gradient-to-br from-cream-50 to-white border border-cream-200 hover:border-purple-300/60 hover:shadow-[0_4px_20px_rgba(139,90,148,0.1)] hover:bg-gradient-to-br hover:from-purple-50/30 hover:to-white transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-gold-200 to-gold-300 group-hover:from-[#A97DB0] group-hover:to-[#8B5A94] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(180,160,120,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:shadow-[0_2px_8px_rgba(114,69,120,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300">
                    <svg className="w-5 h-5 text-gold-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gold-600 group-hover:text-purple-600 mb-1 transition-colors duration-300">{t('contact.info.phone')}</p>
                    <a href={`tel:${t('contact.info.phone.value')}`} className="text-warm-700 group-hover:text-purple-700 transition-colors duration-300">
                      {t('contact.info.phone.value')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="fade-in-section group p-6 rounded-2xl bg-gradient-to-br from-cream-50 to-white border border-cream-200 hover:border-purple-300/60 hover:shadow-[0_4px_20px_rgba(139,90,148,0.1)] hover:bg-gradient-to-br hover:from-purple-50/30 hover:to-white transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-gold-200 to-gold-300 group-hover:from-[#A97DB0] group-hover:to-[#8B5A94] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(180,160,120,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:shadow-[0_2px_8px_rgba(114,69,120,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300">
                    <svg className="w-5 h-5 text-gold-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gold-600 group-hover:text-purple-600 mb-1 transition-colors duration-300">{t('contact.info.address')}</p>
                    <p className="text-warm-600 text-sm group-hover:text-purple-700 transition-colors duration-300">{t('contact.info.address.value')}</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="fade-in-section group p-6 rounded-2xl bg-gradient-to-br from-cream-50 to-white border border-cream-200 hover:border-purple-300/60 hover:shadow-[0_4px_20px_rgba(139,90,148,0.1)] hover:bg-gradient-to-br hover:from-purple-50/30 hover:to-white transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-gold-200 to-gold-300 group-hover:from-[#A97DB0] group-hover:to-[#8B5A94] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(180,160,120,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:shadow-[0_2px_8px_rgba(114,69,120,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300">
                    <svg className="w-5 h-5 text-gold-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gold-600 group-hover:text-purple-600 mb-1 transition-colors duration-300">{t('contact.info.hours')}</p>
                    <p className="text-warm-600 text-sm group-hover:text-purple-700 transition-colors duration-300">{t('contact.info.hours.value')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-16 section-padding bg-cream-50">
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
