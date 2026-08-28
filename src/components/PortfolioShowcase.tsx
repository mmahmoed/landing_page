import React, { useState } from 'react';
import { 
  Boxes, 
  Store, 
  Cpu, 
  Network, 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  Eye, 
  Printer, 
  QrCode, 
  BarChart3, 
  Activity,
  X
} from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/landingData';
import { PortfolioItem } from '../types';

export const PortfolioShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web-app' | 'hardware' | 'network'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioItem | null>(null);
  
  // Interactive mini-simulator state inside modal
  const [posCart, setPosCart] = useState<Array<{ name: string; price: number; qty: number }>>([
    { name: 'Organic Cold Brew 12oz', price: 4.50, qty: 2 },
    { name: 'Artisan Sourdough Loaf', price: 7.25, qty: 1 }
  ]);
  const [scannedAssetId, setScannedAssetId] = useState<string>('ASSET-QR-9812');
  const [assetStatus, setAssetStatus] = useState<'Checked In' | 'In Field Deploy' | 'Maintenance Due'>('In Field Deploy');
  const [simPrinted, setSimPrinted] = useState<boolean>(false);

  const filteredItems = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  const handleSimulateScan = () => {
    const randomItems = [
      { name: 'NVMe Gen4 2TB Drive', price: 149.99, qty: 1 },
      { name: 'Wi-Fi 6 Mesh Node', price: 119.50, qty: 1 },
      { name: 'Precision Screwdriver Kit', price: 29.99, qty: 1 },
      { name: 'Thermal Paste PTM7950', price: 18.00, qty: 1 }
    ];
    const picked = randomItems[Math.floor(Math.random() * randomItems.length)];
    setPosCart(prev => [...prev, picked]);
  };

  const handleSimulatePrint = () => {
    setSimPrinted(true);
    setTimeout(() => setSimPrinted(false), 3000);
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Engineering Projects
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              Take an inside look at custom Point-of-Sale deployments, asset trackers, component repairs, and enterprise network buildouts.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web-app')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'web-app' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Custom Web Apps (POS/ERP)
            </button>
            <button
              onClick={() => setFilter('hardware')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'hardware' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Hardware & Workstations
            </button>
            <button
              onClick={() => setFilter('network')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'network' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Network Deployments
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
                    <span>Interactive Demo</span>
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
                      The Challenge:
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
                    <span>Launch Live Interactive Walkthrough</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study & Live Simulator Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 bg-slate-900 border-b border-slate-800 sticky top-0 z-20">
              <div>
                <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                  {selectedCaseStudy.clientType}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {selectedCaseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Interactive Simulator Widget based on category */}
              {selectedCaseStudy.interactiveDemo === 'pos' && (
                <div className="p-5 rounded-xl bg-slate-900 border border-blue-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Store className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-white uppercase font-mono">ApexPOS Live Terminal Simulator</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                      Offline Storage: Active
                    </span>
                  </div>

                  <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 space-y-2">
                    <div className="text-xs font-semibold text-slate-300">Active Register Cart:</div>
                    {posCart.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-xs text-slate-300 font-mono border-b border-slate-900 pb-1">
                        <span>{item.qty}x {item.name}</span>
                        <span>${(item.price * item.qty).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold text-sm text-cyan-400 pt-1 font-mono">
                      <span>Total Due:</span>
                      <span>${posCart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={handleSimulateScan}
                      className="px-3 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      <span>Simulate Barcode Scan</span>
                    </button>
                    <button
                      onClick={handleSimulatePrint}
                      className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 border border-slate-700 transition-all"
                    >
                      <Printer className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{simPrinted ? 'Printing ESC/POS...' : 'Test ESC/POS Thermal Print'}</span>
                    </button>
                  </div>
                </div>
              )}

              {selectedCaseStudy.interactiveDemo === 'asset' && (
                <div className="p-5 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-white uppercase font-mono">AssetGuard QR Tracking Simulator</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono">
                      GPS Tagged
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Scanned Asset Identifier</div>
                      <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">{scannedAssetId}</div>
                      <div className="text-xs text-slate-300 mt-1">Industrial Fluke Thermal Imager Ti480</div>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Deployment Status</div>
                      <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">{assetStatus}</div>
                      <div className="text-xs text-slate-400 mt-1">Last sign-out: Field Van #4 (Technician Mike)</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setAssetStatus(assetStatus === 'Checked In' ? 'In Field Deploy' : 'Checked In')}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
                    >
                      Toggle Check-In / Out Status
                    </button>
                  </div>
                </div>
              )}

              {/* Solution Narrative */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                  Engineered Solution & Architectural Decisions
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedCaseStudy.solution}
                </p>
              </div>

              {/* Impact Breakdown */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-xs font-bold text-white mb-3">Key Business & Technical Results</div>
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
              <span className="text-xs text-slate-400">Ready to build a similar solution for your business?</span>
              <a
                href="#contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all"
              >
                Discuss Scope with Alex
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
