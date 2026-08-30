import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Menu, 
  X, 
  MessageSquare, 
  ChevronRight,
  Globe
} from 'lucide-react';
import { BRAND_INFO } from '../data/landingData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  onOpenConsultation?: (defaultCategory?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.hardwareServices, href: '#services' },
    { name: t.nav.webApps, href: '#web-apps' },
    { name: t.nav.freeTools, href: '#free-tools', badge: t.nav.newBadge },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.values, href: '#values' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleWhatsAppDirect = () => {
    const msg = language === 'id'
      ? 'Halo Muh. Mahmud! Saya ingin konsultasi gratis mengenai servis hardware / pembuatan aplikasi web kustom.'
      : 'Hi Muh. Mahmud! I am interested in a free technical consultation regarding hardware repair / custom web apps.';
    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent border-b border-slate-800/30 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Name + Tagline */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {BRAND_INFO.name}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {t.nav.dualDomainBadge}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block truncate max-w-[280px]">
                {t.brand.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors hover:bg-slate-800/50 rounded-lg flex items-center gap-1.5"
              >
                {link.name}
                {link.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Switcher Pill Button */}
            <div className="flex items-center p-0.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold shadow-inner">
              <button
                id="lang-btn-id"
                onClick={() => setLanguage('id')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all ${
                  language === 'id'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Ganti Bahasa ke Bahasa Indonesia"
              >
                <span>🇮🇩</span>
                <span>ID</span>
              </button>
              <button
                id="lang-btn-en"
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Switch Language to English"
              >
                <span>🇬🇧</span>
                <span>EN</span>
              </button>
            </div>

            <button
              id="header-whatsapp-cta"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-400/60 rounded-xl transition-all shadow-sm hover:shadow-emerald-500/10"
              title="WhatsApp Direct Consultation"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.freeConsultation}</span>
            </button>

            <button
              id="header-book-btn"
              onClick={() => onOpenConsultation ? onOpenConsultation('general') : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <span>{t.nav.getEstimate}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu & Quick Lang Switcher Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Lang Switcher for mobile header */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400"
              title="Toggle Language (ID / EN)"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'id' ? 'ID' : 'EN'}</span>
            </button>

            <button
              onClick={handleWhatsAppDirect}
              className="p-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg sm:hidden"
              aria-label="WhatsApp Contact"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl backdrop-blur-xl">
          
          {/* Mobile Language Selector */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-2">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Bahasa / Language:</span>
            </span>
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  language === 'id'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 bg-slate-950/60'
                }`}
              >
                🇮🇩 Indonesia
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  language === 'en'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 bg-slate-950/60'
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 rounded-lg"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppDirect();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.nav.freeConsultation} (WhatsApp)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm"
            >
              {t.nav.getEstimate}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
