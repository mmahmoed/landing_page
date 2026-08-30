import React, { useState } from 'react';
import { 
  Cpu, 
  Flame, 
  Network, 
  HardDrive, 
  Store, 
  Boxes, 
  Code2, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Tag, 
  Calculator,
  MessageSquare,
  Wrench,
  ShieldCheck
} from 'lucide-react';
import { SERVICES_DATA, BRAND_INFO } from '../data/landingData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  initialTab?: 'hardware-pc' | 'web-dev';
  onBookService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ initialTab = 'hardware-pc', onBookService }) => {
  const [activeTab, setActiveTab] = useState<'hardware-pc' | 'web-dev'>(initialTab);
  
  // Interactive Instant Quote Estimator State
  const [showEstimator, setShowEstimator] = useState<boolean>(false);
  const [estType, setEstType] = useState<'hardware' | 'web'>('web');
  const [estService, setEstService] = useState<string>('pos');
  const [estUrgency, setEstUrgency] = useState<'standard' | 'rush'>('standard');
  const [estSupport, setEstSupport] = useState<boolean>(true);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Boxes': return <Boxes className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter(s => s.category === activeTab);

  // Estimator calculation
  const calculateEstimate = () => {
    let base = 0;
    let timeframe = '2-3 Weeks';

    if (estType === 'web') {
      if (estService === 'pos') { base = 1450; timeframe = '2-4 Weeks'; }
      else if (estService === 'asset') { base = 1800; timeframe = '3-5 Weeks'; }
      else if (estService === 'saas') { base = 1200; timeframe = '2-4 Weeks'; }
      else if (estService === 'api') { base = 650; timeframe = '1-2 Weeks'; }
    } else {
      if (estService === 'diag') { base = 65; timeframe = '24-48 Hours'; }
      else if (estService === 'repasting') { base = 85; timeframe = '1-2 Days'; }
      else if (estService === 'recovery') { base = 110; timeframe = '12-36 Hours'; }
      else if (estService === 'network') { base = 250; timeframe = 'Scheduled'; }
    }

    if (estUrgency === 'rush') base *= 1.35;
    if (estSupport && estType === 'web') base += 150;

    return {
      price: Math.round(base),
      timeframe,
    };
  };

  const currentEst = calculateEstimate();

  const handleEstimateWhatsApp = () => {
    const text = `Hi Muh. Mahmud! I used your online estimator for a ${estType === 'web' ? 'Custom Web Project' : 'Hardware Repair'} (${estService.toUpperCase()}). Estimated quote ~$${currentEst.price}. Can we discuss details?`;
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 relative bg-slate-950">
      <div id="web-apps" className="absolute -top-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Dual Engineering Specializations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Specialized Technical Services
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Whether reviving critical hardware on the test bench or engineering custom web software architectures with zero subscription bloat.
          </p>

          {/* Division Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 shadow-xl">
            <button
              id="services-tab-hardware"
              onClick={() => setActiveTab('hardware-pc')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'hardware-pc'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>Hardware, PC Repair & Network</span>
            </button>

            <button
              id="services-tab-web"
              onClick={() => setActiveTab('web-dev')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'web-dev'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Custom Web & App Development</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    service.category === 'hardware-pc' 
                      ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400' 
                      : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                  }`}>
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-2 space-y-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        service.category === 'hardware-pc' ? 'text-amber-400' : 'text-cyan-400'
                      }`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Meta & Booking CTA */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Turnaround: <strong className="text-slate-200">{service.typicalTurnaround}</strong></span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 font-mono">
                    {service.startingPrice}
                  </div>
                </div>

                <button
                  onClick={() => onBookService ? onBookService(service) : window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Alex! I'd like to book/inquire about "${service.title}".`)}`, '_blank')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-900 bg-slate-200 hover:bg-white rounded-xl transition-all shadow-sm hover:scale-[1.02] active:scale-95"
                >
                  <span>Book / Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Instant Cost Estimator Widget */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">
                Instant Project & Repair Cost Estimator
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400">Fixed-Rate Transparency</span>
          </div>

          <p className="text-xs text-slate-400 mb-6">
            Get an instant estimate for your custom web app or hardware repair requirements with zero hidden markup.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Field 1: Category */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Domain</label>
              <select
                value={estType}
                onChange={(e) => {
                  const t = e.target.value as 'hardware' | 'web';
                  setEstType(t);
                  setEstService(t === 'web' ? 'pos' : 'diag');
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="web">Custom Web App Dev</option>
                <option value="hardware">PC Repair & Network</option>
              </select>
            </div>

            {/* Field 2: Service Scope */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Scope / System</label>
              <select
                value={estService}
                onChange={(e) => setEstService(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
              >
                {estType === 'web' ? (
                  <>
                    <option value="pos">Custom Point-of-Sale (POS) System</option>
                    <option value="asset">Asset / Inventory Management ERP</option>
                    <option value="saas">Custom Operational Dashboard / SaaS</option>
                    <option value="api">API Automation & Webhooks</option>
                  </>
                ) : (
                  <>
                    <option value="diag">Motherboard / Bench Diagnostics</option>
                    <option value="repasting">Thermal Overhaul & Repasting</option>
                    <option value="recovery">Data Recovery & SSD Migration</option>
                    <option value="network">SMB Office Network / VLAN Deployment</option>
                  </>
                )}
              </select>
            </div>

            {/* Field 3: Urgency */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Delivery Tier</label>
              <select
                value={estUrgency}
                onChange={(e) => setEstUrgency(e.target.value as 'standard' | 'rush')}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="standard">Standard Agile Delivery</option>
                <option value="rush">Priority Fast-Track (+35%)</option>
              </select>
            </div>
          </div>

          {/* Result Output Bar */}
          <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono">Estimated Baseline</span>
              <div className="text-2xl font-black text-cyan-400 font-mono">
                ~${currentEst.price.toLocaleString()}
                <span className="text-xs font-normal text-slate-400 ml-2">({currentEst.timeframe})</span>
              </div>
            </div>

            <button
              onClick={handleEstimateWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Quote on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
