import React, { useState } from 'react';
import { 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Calendar
} from 'lucide-react';
import { BRAND_INFO, FAQS } from '../data/landingData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceDomain, setServiceDomain] = useState<'web' | 'hardware' | 'network'>('web');
  const [specificService, setSpecificService] = useState('Custom POS / Web Application');
  const [projectDetails, setProjectDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLaunchWhatsApp = () => {
    const text = `Hi Muh. Mahmud! My name is ${name || 'a prospective client'}. 
I'm inquiring about: ${specificService} (${serviceDomain.toUpperCase()}).
Details: ${projectDetails || 'I would like to schedule a free technical consultation.'}
Contact: ${phone || email || 'Direct WhatsApp'}`;
    
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Free Technical Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Your Hardware or Web Architecture
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Direct 1-on-1 dialogue with senior engineer Muh Mahmud. No salespeople, no delays.
          </p>
        </div>

        {/* 2-Column Contact & Consultation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Direct Engineering Desk
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Reach out directly for emergency PC hardware diagnostics, network outages, or bespoke full-stack web software consultations.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* WhatsApp Channel */}
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Fastest Response (Instant)</div>
                    <div className="text-sm font-bold text-emerald-300 group-hover:text-emerald-200">
                      WhatsApp Free Consultation
                    </div>
                  </div>
                </a>

                {/* Direct Phone */}
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Voice Line</div>
                    <div className="text-sm font-bold text-slate-200 group-hover:text-cyan-300">
                      {BRAND_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Email Desk */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Official Work Email</div>
                    <div className="text-sm font-bold text-slate-200 group-hover:text-cyan-300">
                      {BRAND_INFO.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Lab Hours & Location Details */}
              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.location}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.hours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl relative">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Request Diagnostic Assessment or Web Project Estimate
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the technical overview below to instantly dispatch via WhatsApp or email.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Consultation Request Prepared!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your project details are formatted. Click below to initiate instant live chat with Alex on WhatsApp, or we will respond to your email within 4 business hours.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleLaunchWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Launch WhatsApp Chat Now</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                    >
                      Edit Submission
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Domain Selector Pills */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      Primary Service Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setServiceDomain('web');
                          setSpecificService('Custom POS / Web Application');
                        }}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                          serviceDomain === 'web'
                            ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-sm'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Custom Web Apps
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setServiceDomain('hardware');
                          setSpecificService('PC Repair & Motherboard Diagnostics');
                        }}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                          serviceDomain === 'hardware'
                            ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        PC / Rig Repair
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setServiceDomain('network');
                          setSpecificService('SMB Office Network & VLAN Setup');
                        }}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                          serviceDomain === 'network'
                            ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 shadow-sm'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Network & VLAN
                      </button>
                    </div>
                  </div>

                  {/* Specific System Dropdown */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Specific System or Problem
                    </label>
                    <select
                      value={specificService}
                      onChange={(e) => setSpecificService(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
                    >
                      {serviceDomain === 'web' && (
                        <>
                          <option value="Custom POS / Web Application">Point-of-Sale (POS) Web App</option>
                          <option value="Asset & Equipment Management ERP">Asset & Equipment Management ERP</option>
                          <option value="Operational SaaS & Customer Portal">Operational SaaS & Customer Portal</option>
                          <option value="API Integration & Webhook Automation">API Integration & Webhook Automation</option>
                        </>
                      )}
                      {serviceDomain === 'hardware' && (
                        <>
                          <option value="Motherboard Diagnostics & Micro-Soldering">Motherboard Diagnostics & Micro-Soldering</option>
                          <option value="Thermal Overhaul, Repasting & Throttling Fix">Thermal Overhaul, Repasting & Throttling Fix</option>
                          <option value="Custom CAD / High-Performance Workstation Build">Custom CAD / High-Performance Workstation Build</option>
                          <option value="Emergency Data Recovery & SSD Rescue">Emergency Data Recovery & SSD Rescue</option>
                        </>
                      )}
                      {serviceDomain === 'network' && (
                        <>
                          <option value="UniFi Wi-Fi 6 Mesh & Roaming Optimization">UniFi Wi-Fi 6 Mesh & Roaming Optimization</option>
                          <option value="Multi-VLAN Segmentation & Firewall Rules">Multi-VLAN Segmentation & Firewall Rules</option>
                          <option value="10GbE Switch Backbone & Office Cabling">10GbE Switch Backbone & Office Cabling</option>
                        </>
                      )}
                    </select>
                  </div>

                  {/* Name & Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Your Name / Company</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Sarah Vance (Retail LLC)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">WhatsApp or Phone</label>
                      <input
                        type="text"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Project Details Description */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Project Details or Hardware Symptoms</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your requirements (e.g. POS for 2 terminals with offline support, or PC failing to boot with memory error code)..."
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Dual Action Submit */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleLaunchWhatsApp}
                      className="py-3 px-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Direct via WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    🔒 Zero spam guarantee. Direct technical evaluation with upfront pricing.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-400 mt-1">Clear answers regarding diagnostics, web code ownership, and warranties.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
