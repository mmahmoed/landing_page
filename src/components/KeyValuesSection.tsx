import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Headphones, 
  Layers, 
  Award
} from 'lucide-react';
import { getValuePropsData } from '../data/landingData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const KeyValuesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const valueProps = getValuePropsData(language);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-purple-400" />;
      default: return <Award className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="values" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.values.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.values.title}
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            {t.values.subtitle}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((val) => (
            <div
              key={val.id}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(val.icon)}
                </div>

                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  {val.subtitle}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {val.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 font-semibold">
                  {language === 'id' ? 'Standar Kunci:' : 'Key Standard:'}
                </span>
                <span className="text-xs font-bold text-emerald-400 font-mono">
                  {val.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* SMB Commitment Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>{language === 'id' ? '3 Jaminan Pokok MMComp Solutions untuk Setiap Klien' : 'Our 3-Point Ironclad Guarantee for Every Client'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {language === 'id'
                ? '1. Gratis biaya cek jika lanjut servis • 2. 100% kepemilikan source code & database aplikasi • 3. Komunikasi langsung dengan senior engineer.'
                : '1. No fix, no diagnostic charge on eligible hardware • 2. Full source code & database transfer on web apps • 3. Direct access to your lead engineer.'}
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
          >
            {language === 'id' ? 'Mulai Konsultasi Bebas Risiko' : 'Start Risk-Free Consultation'}
          </a>
        </div>

      </div>
    </section>
  );
};
