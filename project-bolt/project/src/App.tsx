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

function App() {
  return (
    <LanguageProvider>
      <SEO />
      <div className="min-h-screen bg-cream-50 relative">
        <DynamicBackground />
        <Header />
        <main>
          <Hero />
          <BrandIntro />
          <BrandValues />
          <WomenAppreciation />
          <ProductRitual />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
