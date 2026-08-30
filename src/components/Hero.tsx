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

interface HeroProps {
  onSelectServiceTab?: (tab: 'hardware-pc' | 'web-dev') => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectServiceTab }) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'hardware' | 'web'>('web');

  const handleWhatsApp = (topic: string) => {
    const text = `Hello Alex! I am looking for assistance regarding ${topic}. Could we schedule a free consultation?`;
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
            <span className="text-slate-200 font-semibold">Available for On-Site & Remote Projects</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-400">24h Rapid Turnaround</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Dual-Domain Engineering Specialist</span>
          </div>
        </div>

        {/* Core Headline & Sub-headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Solutions for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              PC Repair
            </span>{' '}
            and{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              Custom Web App
            </span>{' '}
            Development
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            From precision component-level motherboard diagnostics and high-performance workstation builds to bespoke web platforms (Point-of-Sale, Asset Management & Cloud Portals) — engineering fast, dependable digital and hardware solutions for growing SMBs and professionals.
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
              <span>Discuss Web & App Projects</span>
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
              <span>Book PC Diagnostics & Repair</span>
            </a>

            {/* WhatsApp Fast Consultation Button */}
            <button
              onClick={() => handleWhatsApp('General Consultation')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-medium text-sm border border-emerald-500/30 transition-all"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp Chat</span>
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
                muhmahmud@mmcomp-terminal: ~/{activeVisualTab === 'web' ? 'web-architecture' : 'hardware-workbench'}
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
                <span>Web Apps (POS/ERP)</span>
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
                <span>Hardware & Diagnostics</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Content */}
          <div className="p-6 sm:p-8">
            {activeVisualTab === 'web' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
                    <Database className="w-3.5 h-3.5" />
                    <span>Custom Web Architecture</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Bespoke Business Web Applications with Offline Resiliency
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We architect zero-subscription Point-of-Sale (POS) systems, equipment trackers, and custom ERP workflows that stay online even when the internet drops.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">Offline Engine</div>
                      <div className="text-sm font-semibold text-cyan-300 mt-0.5">IndexedDB + Cloud Sync</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">Hardware Linked</div>
                      <div className="text-sm font-semibold text-cyan-300 mt-0.5">ESC/POS & QR Scanners</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href="#free-tools"
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 group"
                    >
                      <span>Try Free Browser Tools below</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-950 rounded-xl p-4 border border-slate-800/90 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto shadow-inner">
                  <div className="text-slate-500">// Real-time POS Offline Sync Queue Example</div>
                  <div className="text-cyan-400">
                    const <span className="text-white">posTerminal</span> = new <span className="text-amber-300">PosSyncEngine</span>({'{'}
                  </div>
                  <div className="pl-4 text-slate-300">
                    storageDriver: <span className="text-emerald-300">'IndexedDB_LocalMaster'</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    hardwarePrinters: [<span className="text-emerald-300">'Thermal_USB_0x04b8'</span>],
                  </div>
                  <div className="pl-4 text-slate-300">
                    offlineTolerance: <span className="text-purple-300">Infinity</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    cloudFallback: <span className="text-emerald-300">'Postgres_Realtime_Channel'</span>
                  </div>
                  <div className="text-cyan-400">{'}'});</div>
                  <div className="text-emerald-400 pt-1">
                    ✓ 0ms latency transactions • 100% client data retention
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Hardware Lab & Diagnostics</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Component-Level Micro-Soldering & Thermal Overhaul
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We repair what other technicians write off as unfixable. Oscilloscopic power phase inspection, chip replacement, PTM7950 repasting, and clean bit-level data recovery.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">Diagnostic Turnaround</div>
                      <div className="text-sm font-semibold text-amber-300 mt-0.5">&lt;24 Hours Bench Pass</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">Thermal Benchmark</div>
                      <div className="text-sm font-semibold text-amber-300 mt-0.5">-31°C Delta Load Drop</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href="#services"
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 group"
                    >
                      <span>Explore all repair services</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-950 rounded-xl p-4 border border-slate-800/90 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto shadow-inner">
                  <div className="text-slate-500">// Oscilloscope & Thermal Telemetry Stream</div>
                  <div className="text-amber-400">
                    [14:22:08] ⚡ Primary 12V Rail: <span className="text-emerald-400">12.04V (Stable)</span>
                  </div>
                  <div className="text-slate-300">
                    [14:22:11] 🔍 VRM Phase 4 Mosfet: <span className="text-rose-400">Short Detected (0.02Ω)</span>
                  </div>
                  <div className="text-slate-300">
                    [14:22:19] 🛠️ SMD Replacement: <span className="text-cyan-400">High-Temp Flux & Hot Air 380°C</span>
                  </div>
                  <div className="text-slate-300">
                    [14:22:35] ❄️ Phase-Change Thermal: <span className="text-purple-300">PTM7950 + 8.5W/mK Pads</span>
                  </div>
                  <div className="text-emerald-400 pt-1">
                    ✓ POST Success: Memory Train Pass 6000MT/s • Stress Test 24h Passed
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-slate-800 bg-slate-950/40 text-center divide-x divide-slate-800/60">
            <div className="p-3 sm:p-4">
              <div className="text-lg sm:text-xl font-bold text-white">100%</div>
              <div className="text-[11px] text-slate-400">Source Code & IP Owned</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-lg sm:text-xl font-bold text-amber-400">&lt;24h</div>
              <div className="text-[11px] text-slate-400">Hardware Diagnostics</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-lg sm:text-xl font-bold text-cyan-400">140+</div>
              <div className="text-[11px] text-slate-400">SMB Projects Shipped</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-lg sm:text-xl font-bold text-emerald-400">99.4%</div>
              <div className="text-[11px] text-slate-400">Verified Client Rating</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
