import React, { useState } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Eye,
  X,
  Play,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { getPortfolioData, BRAND_INFO } from '../data/landingData';
import { PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const PortfolioShowcase: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const portfolioItems = getPortfolioData(language);

  const [filter, setFilter] = useState<'all' | 'web-app' | 'hardware' | 'network'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioItem | null>(null);

  // Interactive Live Demo States (for embedded mini sandbox within the case study modal)
  const [demoActiveIndex, setDemoActiveIndex] = useState<number>(0);
  const [posCartCount, setPosCartCount] = useState<number>(3);
  const [posTotal, setPosTotal] = useState<number>(45.50);
  const [posPaid, setPosPaid] = useState<boolean>(false);

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.portfolio.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t.portfolio.title}
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.portfolio.filterAll}
            </button>
            <button
              onClick={() => setFilter('web-app')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'web-app' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.portfolio.filterWeb}
            </button>
            <button
              onClick={() => setFilter('hardware')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'hardware' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.portfolio.filterHardware}
            </button>
            <button
              onClick={() => setFilter('network')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'network' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.portfolio.filterNetwork}
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              {/* Card Banner / Mock Interface Header */}
              <div className={`h-48 sm:h-56 bg-gradient-to-br ${project.imagePlaceholderColor} p-6 relative flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {project.clientType}
                  </span>
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="p-2 rounded-xl bg-slate-950/80 hover:bg-slate-950 text-white border border-slate-700/80 transition-all shadow-md flex items-center gap-1.5 text-xs font-medium"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.portfolio.interactiveDemoTitle}</span>
                  </button>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-200 transition-colors drop-shadow-sm">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/60 text-slate-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-rose-400 font-mono">
                      {t.portfolio.challengeTitle}:
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      {project.challenge}
                    </p>
                  </div>
                </div>

                {/* Impact Metrics Row */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {project.impactMetrics.map((metric, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                        <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-white font-semibold text-xs transition-all border border-slate-700"
                  >
                    <span>{language === 'id' ? 'Lihat Studi Kasus & Demo Interaktif' : 'View Full Case Study & Interactive Demo'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study & Interactive Sandbox Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-slate-900 border-b border-slate-800 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {selectedCaseStudy.clientType}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedCaseStudy.completedYear}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                  {selectedCaseStudy.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              
              {/* Interactive Mini-Demo Sandbox */}
              {selectedCaseStudy.interactiveDemo && (
                <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                      <Play className="w-3.5 h-3.5 fill-cyan-400" />
                      <span>{t.portfolio.interactiveDemoTitle}: {selectedCaseStudy.interactiveDemo.type.toUpperCase()}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {selectedCaseStudy.interactiveDemo.mockState}
                    </span>
                  </div>

                  {/* Sandbox Interface: POS Demo */}
                  {selectedCaseStudy.interactiveDemo.type === 'pos' && (
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                        <span className="text-slate-400">Terminal 01 • Offline Cache: <strong className="text-emerald-400">Active (IndexedDB)</strong></span>
                        <button 
                          onClick={() => {
                            setPosCartCount(3);
                            setPosTotal(45.50);
                            setPosPaid(false);
                          }}
                          className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {['Espresso Blend (x2)', 'Pastry Box', 'Cold Brew 16oz'].map((item, idx) => (
                          <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                            <div className="text-[11px] font-bold text-white truncate">{item}</div>
                            <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
                              {idx === 0 ? '$9.00' : idx === 1 ? '$18.50' : '$18.00'}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <div className="text-[10px] text-slate-400">Total (Subtotal + Tax)</div>
                          <div className="text-lg font-bold text-emerald-400 font-mono">${posTotal.toFixed(2)}</div>
                        </div>

                        {posPaid ? (
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Receipt Dispatched (18ms)</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => setPosPaid(true)}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md"
                          >
                            Simulate Instant Checkout
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Sandbox Interface: Asset Management Demo */}
                  {selectedCaseStudy.interactiveDemo.type === 'asset' && (
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Warehouse Site A • Real-time Scan Simulator</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                          RFID & QR Ready
                        </span>
                      </div>
                      <div className="p-3 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white">CAT-320 Excavator Generator Unit</div>
                          <div className="text-[10px] text-slate-400 font-mono">TAG: #AST-9942 • Status: Active Deployment</div>
                        </div>
                        <span className="px-2 py-1 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          Audit Verified
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Challenge Narrative */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
                  {t.portfolio.challengeTitle}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedCaseStudy.challenge}
                </p>
              </div>

              {/* Solution Narrative */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                  {t.portfolio.solutionTitle}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedCaseStudy.solution}
                </p>
              </div>

              {/* Impact Breakdown */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-xs font-bold text-white mb-3">
                  {t.portfolio.resultsTitle}
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {selectedCaseStudy.impactMetrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-base font-bold text-emerald-400 font-mono">{m.value}</div>
                      <div className="text-[11px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {language === 'id' ? 'Tertarik membangun sistem serupa untuk bisnis Anda?' : 'Ready to build a similar solution for your business?'}
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all"
              >
                {language === 'id' ? `Konsultasikan dengan ${BRAND_INFO.founder}` : `Discuss Scope with ${BRAND_INFO.founder}`}
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
