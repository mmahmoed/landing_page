import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FreeToolsSection } from './components/FreeToolsSection';
import { ServicesSection } from './components/ServicesSection';
import { KeyValuesSection } from './components/KeyValuesSection';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [activeServiceTab, setActiveServiceTab] = useState<'hardware-pc' | 'web-dev'>('web-dev');

  const handleOpenConsultation = (defaultCategory?: string) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (service: ServiceItem) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
      {/* 1. Header (Brand, Navigation, WhatsApp CTA) */}
      <Header onOpenConsultation={handleOpenConsultation} />

      <main>
        {/* 2. Hero Section (Headline, Sub-headline, CTAs for Servicing and Web Projects) */}
        <Hero onSelectServiceTab={(tab) => setActiveServiceTab(tab)} />

        {/* 3. Free Tools Section (Excel Document Compressor Lead Magnet + Source Code) */}
        <FreeToolsSection />

        {/* 4. Main Services Section (Hardware/PC & Network + Custom Web & App Development) */}
        <ServicesSection 
          initialTab={activeServiceTab} 
          onBookService={handleBookService} 
        />

        {/* 5. Key Value Proposition (Professionalism, Fast Turnaround, SMB Affordability, Direct Tech Support) */}
        <KeyValuesSection />

        {/* 6. Portfolio Showcase (POS systems, Asset Management ERP, Workstations, Network) */}
        <PortfolioShowcase />

        {/* 7. Testimonials and Client Reviews Section */}
        <TestimonialsSection />

        {/* 8. Contact & Consultation Section (WhatsApp / Form / FAQ) */}
        <ContactSection />
      </main>

      {/* 9. Footer (Location, Hours, Contact, Social Media, Copyright) */}
      <Footer />
    </div>
  );
}
