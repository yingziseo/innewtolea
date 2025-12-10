import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const langCodes = {
  zh: 'zh-CN',
  en: 'en',
  ko: 'ko',
};

export default function SEO() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = t('seo.title');

    document.documentElement.lang = langCodes[language];

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.description'));
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', t('seo.keywords'));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('seo.title'));
    } else {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.setAttribute('content', t('seo.title'));
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('seo.description'));
    } else {
      const newOgDesc = document.createElement('meta');
      newOgDesc.setAttribute('property', 'og:description');
      newOgDesc.setAttribute('content', t('seo.description'));
      document.head.appendChild(newOgDesc);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      const newTwitterTitle = document.createElement('meta');
      newTwitterTitle.setAttribute('name', 'twitter:title');
      newTwitterTitle.setAttribute('content', t('seo.title'));
      document.head.appendChild(newTwitterTitle);
    } else {
      twitterTitle.setAttribute('content', t('seo.title'));
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      const newTwitterDesc = document.createElement('meta');
      newTwitterDesc.setAttribute('name', 'twitter:description');
      newTwitterDesc.setAttribute('content', t('seo.description'));
      document.head.appendChild(newTwitterDesc);
    } else {
      twitterDescription.setAttribute('content', t('seo.description'));
    }
  }, [language, t]);

  return null;
}
