import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Terminal, 
  Server, 
  CheckCircle2, 
  Database,
  Layers,
  Flame,
  MessageSquare
} from 'lucide-react';
import { BRAND_INFO } from '../data/landingData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onSelectServiceTab?: (tab: 'hardware-pc' | 'web-dev') => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectServiceTab }) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'hardware' | 'web'>('web');
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const handleWhatsApp = (topic: string) => {
    const text = language === 'id'
      ? `Halo Muh. Mahmud! Saya butuh bantuan mengenai ${topic}. Bisakah kita jadwalkan konsultasi teknis gratis?`
      : `Hello Muh. Mahmud! I am looking for assistance regarding ${topic}. Could we schedule a free technical consultation?`;
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status & Verification Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200 font-semibold">{t.hero.statusAvailable}</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-400 font-semibold">{t.hero.statusTurnaround}</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.hero.dualDomainSpecialist}</span>
          </div>
        </div>

        {/* Core Headline & Sub-headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18]">
            {t.hero.headlinePrefix}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              {t.hero.headlineHardware}
            </span>
            {t.hero.headlineMiddle}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              {t.hero.headlineWeb}
            </span>
            {t.hero.headlineSuffix}
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            {t.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* CTA 1: Web Projects */}
            <a
              id="hero-web-cta"
              href="#web-apps"
              onClick={() => onSelectServiceTab && onSelectServiceTab('web-dev')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Code2 className="w-5 h-5 stroke-[2.5]" />
              <span>{t.hero.ctaWeb}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* CTA 2: PC Servicing */}
            <a
              id="hero-repair-cta"
              href="#services"
              onClick={() => onSelectServiceTab && onSelectServiceTab('hardware-pc')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800/90 text-slate-100 font-semibold text-base border border-slate-700 hover:border-amber-500/40 transition-all shadow-md active:scale-95"
            >
              <Wrench className="w-5 h-5 text-amber-400" />
              <span>{t.hero.ctaRepair}</span>
            </a>

            {/* WhatsApp Fast Consultation Button */}
            <button
              onClick={() => handleWhatsApp(language === 'id' ? 'Konsultasi Servis / Proyek' : 'General Consultation')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-medium text-sm border border-emerald-500/30 transition-all"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.ctaWhatsApp}</span>
            </button>
          </div>
        </div>

        {/* Dual Domain Interactive Showcase Card */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md overflow-hidden">
          
          {/* Header Switcher Tabs */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-950/70 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="ml-2 font-mono text-xs text-slate-400">
                {t.hero.terminalTitle}: ~/{activeVisualTab === 'web' ? t.hero.terminalWebStack : t.hero.terminalHardwareStack}
              </span>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveVisualTab('web')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                  activeVisualTab === 'web'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>{t.hero.tabWeb}</span>
              </button>
              <button
                onClick={() => setActiveVisualTab('hardware')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                  activeVisualTab === 'hardware'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>{t.hero.tabHardware}</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-5 sm:p-8">
            {activeVisualTab === 'web' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Visual 1: POS Architecture */}
                <div className="rounded-xl bg-slate-950/70 border border-cyan-500/20 p-5 space-y-3 relative group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      Offline-First Engine
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white text-base">ApexPOS & Retail Web Suite</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === 'id' 
                      ? 'Sinkronisasi offline instan berbasis IndexedDB dengan cetak struk termal ESC/POS dan pemindaian barcode USB/Bluetooth cepat.'
                      : 'Zero-downtime IndexedDB caching with instant ESC/POS thermal receipt printing and lightning barcode scanner queueing.'}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">React + TS</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">IndexedDB</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">0% SaaS Fees</span>
                  </div>
                </div>

                {/* Visual 2: Asset Management ERP */}
                <div className="rounded-xl bg-slate-950/70 border border-emerald-500/20 p-5 space-y-3 relative group hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      QR / RFID Tracking
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white text-base">AssetGuard ERP Portal</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === 'id'
                      ? 'Pelacakan aset & peralatan kerja dengan scan QR via kamera HP, jadwal servis berkala otomatis, dan pencegahan barang hilang.'
                      : 'Digital tool room tracking with mobile camera QR checkout, automated depreciation schedules, and maintenance reminders.'}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">PostgreSQL</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">QR Generator</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">Audit Logs</span>
                  </div>
                </div>

                {/* Visual 3: Cloud Microservices */}
                <div className="rounded-xl bg-slate-950/70 border border-purple-500/20 p-5 space-y-3 relative group hover:border-purple-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
                      Automation & APIs
                    </span>
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                  <h3 className="font-bold text-white text-base">Bespoke SaaS & Webhooks</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === 'id'
                      ? 'Integrasi API marketplace, WhatsApp gateway, otomasi sinkronisasi stok, dan dashboard analitik operasional real-time.'
                      : 'Custom webhook pipelines, automated WhatsApp bots, database indexing, and sub-second operational dashboards.'}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">Node API</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">Cloud Run</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">Webhooks</span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Visual 1: Board Component Repair */}
                <div className="rounded-xl bg-slate-950/70 border border-amber-500/20 p-5 space-y-3 relative group hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      Oscilloscope Lab
                    </span>
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                  <h3 className="font-bold text-white text-base">Component Micro-Soldering</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === 'id'
                      ? 'Diagnosa PCB mikroskopis: penggantian MOSFET VRM terbakar, restorasi soket pin CPU, dan perbaikan jalur korosi cairan.'
                      : 'Microscopic SMD diagnosis: VRM power MOSFET replacements, bent CPU socket pin repairs, and liquid corrosion ultrasonic bath.'}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">SMD Rework</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">Power Tracing</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">&lt;24h Bench</span>
                  </div>
                </div>

                {/* Visual 2: Workstation Thermal Profiling */}
                <div className="rounded-xl bg-slate-950/70 border border-rose-500/20 p-5 space-y-3 relative group hover:border-rose-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
                      Thermal Overhaul
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white text-base">CAD / AI Rigs & Repasting</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === 'id'
                      ? 'Penurunan suhu hingga 30°C dengan phase-change pad PTM7950 industri, tuning kurva BIOS undervolt, dan perakitan workstation hening.'
                      : '30°C temperature drops with industrial PTM7950 phase-change pads, BIOS undervolt curve tuning, and silent CAD builds.'}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">PTM7950</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">Curve Optimizer</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">Zero Throttle</span>
                  </div>
                </div>

                {/* Visual 3: Network & Security */}
                <div className="rounded-xl bg-slate-950/70 border border-blue-500/20 p-5 space-y-3 relative group hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      10GbE / UniFi Mesh
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <h3 className="font-bold text-white text-base">SMB Managed Network & VLAN</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === 'id'
                      ? 'Segmentasi VLAN terisolasi untuk komputer kasir POS, mesin radiologi medis, portal tamu aman, dan VPN antar cabang.'
                      : 'Isolated VLAN segments for POS systems, medical imaging backbones, secure guest portals, and site-to-site VPNs.'}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">UniFi OS</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">VLAN Isolation</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">10Gb SFP+</span>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Footer Metrics Banner */}
          <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{language === 'id' ? 'Garansi Diagnostik: < 24 Jam' : 'Diagnostic Turnaround: < 24 Hours'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{language === 'id' ? '100% Kepemilikan Kode Klien & Garansi Servis' : '100% Client Code Ownership & Warranty'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>{language === 'id' ? 'Hardware PCB Lab & Arsitektur Cloud Modern' : 'In-House Hardware Lab + Modern Cloud'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
