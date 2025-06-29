import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import YearlyOffer from './components/YearlyOffer';
import Testimonials from './components/Testimonials';
import AppDownload from './components/AppDownload';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Registration from './components/Registration';
import Login from './components/Login';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'dashboard', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (currentPage === 'registration') {
    return (
      <>
        <SEOHead 
          title="Registrace - Tingting | Vytvořte si účet zdarma"
          description="Zaregistrujte se do Tingting a začněte budovat věrnost zákazníků ještě dnes. 30 dní zdarma, bez závazků."
        />
        <StructuredData />
        <Registration onNavigate={setCurrentPage} />
      </>
    );
  }

  if (currentPage === 'login') {
    return (
      <>
        <SEOHead 
          title="Přihlášení - Tingting | Přístup k vašemu účtu"
          description="Přihlaste se do svého Tingting účtu a spravujte svůj digitální věrnostní program."
        />
        <StructuredData />
        <Login onNavigate={setCurrentPage} />
      </>
    );
  }

  return (
    <>
      <SEOHead />
      <StructuredData />
      <div className="min-h-screen bg-background text-foreground">
        <Header onNavigate={setCurrentPage} />
        <main>
          <section id="home">
            <Hero onNavigate={setCurrentPage} />
          </section>
          <Benefits />
          <HowItWorks />
          <TargetAudience />
          <section id="features">
            <Features />
          </section>
          <section id="dashboard">
            <Dashboard />
          </section>
          <Integrations />
          <Pricing />
          <YearlyOffer />
          <Testimonials />
          <AppDownload />
          <FAQ />
          <section id="contact">
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;