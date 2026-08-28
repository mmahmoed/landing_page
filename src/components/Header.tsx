import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Code2, 
  Sparkles, 
  Menu, 
  X, 
  MessageSquare, 
  PhoneCall, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { BRAND_INFO } from '../data/landingData';

interface HeaderProps {
  onOpenConsultation?: (defaultCategory?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hardware & PC Services', href: '#services' },
    { name: 'Custom Web Apps', href: '#web-apps' },
    { name: 'Free Tools', href: '#free-tools', badge: 'New' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Values', href: '#values' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppDirect = () => {
    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`;
    window.open(url, '_blank');
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
                  Dual-Domain
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block truncate max-w-[280px]">
                {BRAND_INFO.tagline}
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

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-whatsapp-cta"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-400/60 rounded-xl transition-all shadow-sm hover:shadow-emerald-500/10"
              title="Chat directly on WhatsApp for instant estimate"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Free Consultation</span>
              <span className="text-[11px] opacity-75 font-mono">(WhatsApp)</span>
            </button>

            <button
              id="header-book-btn"
              onClick={() => onOpenConsultation ? onOpenConsultation('general') : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <span>Get Estimate</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
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
              <span>Free Consultation via WhatsApp</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm"
            >
              Request Free Diagnostics / Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
