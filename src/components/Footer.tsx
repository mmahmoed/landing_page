import React from 'react';
import { 
  Code2, 
  MapPin, 
  Clock, 
  PhoneCall, 
  Mail, 
  MessageSquare, 
  Github, 
  Linkedin, 
  ShieldCheck 
} from 'lucide-react';
import { BRAND_INFO } from '../data/landingData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand, Bio & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md">
                <Code2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  {BRAND_INFO.name}
                </span>
                <p className="text-[11px] text-cyan-400 font-mono">
                  {language === 'id' ? 'Layanan Servis PC & Pembuatan Aplikasi Web' : BRAND_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.bio}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Hardware Services Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.footer.hardwareColTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'id' ? 'Diagnostik Motherboard & Komponen' : 'Component Motherboard Diagnostics'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'id' ? 'Ganti Thermal Paste & Pad PTM7950' : 'Thermal Repasting & Overhaul'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'id' ? 'Rakit PC Workstation & CAD' : 'Custom CAD / 3D Workstations'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'id' ? 'Penyelamatan Data SSD / HDD' : 'Emergency NVMe Data Recovery'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'id' ? 'Instalasi Jaringan Mesh & VLAN' : 'Ubiquiti UniFi VLAN & Mesh'}</a></li>
            </ul>
          </div>

          {/* Col 4: Custom Web Apps & Free Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.footer.webColTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#web-apps" className="hover:text-cyan-400 transition-colors">{language === 'id' ? 'Aplikasi Kasir (POS) Web' : 'Point-of-Sale (POS) Web Apps'}</a></li>
              <li><a href="#web-apps" className="hover:text-cyan-400 transition-colors">{language === 'id' ? 'Portal ERP & Inventaris Barang' : 'Asset & Inventory ERP Portals'}</a></li>
              <li><a href="#web-apps" className="hover:text-cyan-400 transition-colors">{language === 'id' ? 'Dashboard Operasional Bisnis' : 'Full-Stack SaaS Dashboards'}</a></li>
              <li><a href="#free-tools" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                <span>{language === 'id' ? 'Kompresor File Excel (.xlsx)' : 'Excel (.xlsx) Compressor'}</span>
                <span className="text-[9px] px-1 bg-cyan-500/20 rounded">{language === 'id' ? 'Gratis' : 'Free'}</span>
              </a></li>
              <li><a href="#free-tools" className="hover:text-cyan-400 transition-colors">{language === 'id' ? 'Utilitas Web Developer' : 'Browser Developer Utilities'}</a></li>
            </ul>
          </div>

          {/* Col 5: Location, Lab Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.footer.labColTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="truncate">{BRAND_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Privacy Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} {BRAND_INFO.name}. {t.footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400/80">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.footer.privacyPledge}</span>
            </span>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">{t.nav.freeConsultation}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
