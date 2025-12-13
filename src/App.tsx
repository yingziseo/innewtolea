import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import SEO from './components/SEO';
import DynamicBackground from './components/DynamicBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import BrandValues from './components/BrandValues';
import WomenAppreciation from './components/WomenAppreciation';
import ProductRitual from './components/ProductRitual';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

type Page = 'home' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/about') {
        setCurrentPage('about');
        window.scrollTo(0, 0);
      } else if (hash === '#/contact') {
        setCurrentPage('contact');
        window.scrollTo(0, 0);
      } else {
        // 空 hash、纯锚点 hash（如 #hero, #values）或其他情况都显示首页
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <BrandIntro />
            <BrandValues />
            <WomenAppreciation />
            <ProductRitual />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <SEO />
            <div className="min-h-screen bg-cream-50 relative">
        <DynamicBackground />
        <Header />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
