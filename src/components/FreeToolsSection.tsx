import React, { useState, useRef } from 'react';
import { 
  FileSpreadsheet, 
  UploadCloud, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  FileText, 
  Settings2, 
  Lock, 
  Copy, 
  Check, 
  Code2, 
  RefreshCw, 
  Cpu, 
  Binary, 
  ShieldCheck, 
  Layers,
  ArrowRight,
  Database
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  compressExcelFile, 
  generateSampleBloatedExcel, 
  formatBytes, 
  STANDALONE_EXCEL_COMPRESSOR_CODE,
  CompressionOptions 
} from '../utils/excelCompressor';
import { ExcelCompressionResult } from '../types';
import { FREE_TOOLS_LEAD_MAGNETS } from '../data/landingData';

export const FreeToolsSection: React.FC = () => {
  // Compression state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [maximizeCompression, setMaximizeCompression] = useState<boolean>(true);
  const [stripCellStyles, setStripCellStyles] = useState<boolean>(true);
  const [trimGhostRanges, setTrimGhostRanges] = useState<boolean>(true);
  const [removeComments, setRemoveComments] = useState<boolean>(true);
  const [compressImages, setCompressImages] = useState<boolean>(true);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [compressionProgress, setCompressionProgress] = useState<string>('');
  const [statusType, setStatusType] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [compressionResult, setCompressionResult] = useState<ExcelCompressionResult | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'tool' | 'code'>('tool');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Sub-tools mini interactive modal states
  const [activeMiniTool, setActiveMiniTool] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    const validTypes = ['.xlsx', '.xls', '.csv'];
    const hasValidExt = validTypes.some(ext => file.name.toLowerCase().endsWith(ext));

    if (!hasValidExt) {
      setStatusType('error');
      setErrorMessage('Please select a valid Excel (.xlsx, .xls) or CSV document.');
      return;
    }

    setSelectedFile(file);
    setCompressionResult(null);
    setStatusType('idle');
    setErrorMessage('');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleLoadSample = () => {
    const sampleFile = generateSampleBloatedExcel();
    handleFileSelect(sampleFile);
  };

  const handleCompress = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setStatusType('loading');
    setCompressionProgress('Parsing XML sheet structure & cell matrices...');

    try {
      // Small visual delay so the user sees the progress sequence clearly
      await new Promise(r => setTimeout(r, 150));
      setCompressionProgress('Parsing XML sheet structure & cell matrices...');
      await new Promise(r => setTimeout(r, 180));
      setCompressionProgress('Building Shared String Table & pruning ghost bounds...');
      await new Promise(r => setTimeout(r, 180));
      setCompressionProgress('Optimizing media & re-packing DEFLATE Level 9 stream...');

      const result = await compressExcelFile(selectedFile, {
        maximizeCompression,
        stripCellStyles,
        trimGhostRanges,
        removeComments,
        compressImages,
      });

      setCompressionResult(result);
      setStatusType('success');
      setCompressionProgress('');

      // Trigger celebratory confetti if savings were achieved
      if (result.percentageSaved > 0) {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#06b6d4', '#10b981', '#3b82f6', '#f59e0b']
        });
      }
    } catch (err: any) {
      console.error('Compression failed:', err);
      setStatusType('error');
      setErrorMessage(`Error: ${err?.message || 'Could not process or compress the spreadsheet. Please verify file integrity.'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!compressionResult) return;
    const a = document.createElement('a');
    a.href = compressionResult.downloadUrl;
    a.download = compressionResult.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(STANDALONE_EXCEL_COMPRESSOR_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section id="free-tools" className="py-20 bg-slate-900/60 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lead Magnet & Browser Utilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Free Client-Side Engineering Tools
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            High-speed, zero-server browser utilities. Because your spreadsheets, invoices, and diagnostic payloads should remain <strong>100% private</strong> on your local machine.
          </p>
        </div>

        {/* Interactive Main Tool Container: Excel Document Compressor */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden mb-16">
          
          {/* Tool Navigation Bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                  <span>Excel Document (.xlsx) Compressor</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live Tool
                  </span>
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% In-Browser Execution • Zero Server Uploads</span>
                </p>
              </div>
            </div>

            {/* View Switcher: Interactive Tool vs Standalone Code */}
            <div className="flex items-center p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
              <button
                id="excel-tool-tab-btn"
                onClick={() => setActiveTab('tool')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                  activeTab === 'tool'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                App Interface
              </button>
              <button
                id="excel-code-tab-btn"
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === 'code'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Clean Source Code</span>
              </button>
            </div>
          </div>

          {/* Main Body */}
          {activeTab === 'tool' ? (
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Drag & Drop Upload Zone */}
              <div
                id="excel-drop-zone"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-xl p-8 sm:p-10 text-center cursor-pointer transition-all ${
                  isDragOver
                    ? 'border-cyan-400 bg-cyan-950/20 scale-[1.01]'
                    : 'border-slate-700/80 hover:border-slate-500 bg-slate-900/40 hover:bg-slate-900/70'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xlsx, .xls, .csv"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      handleFileSelect(e.target.files[0]);
                    }
                  }}
                />

                <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 shadow-sm">
                  <UploadCloud className="w-7 h-7" />
                </div>

                {selectedFile ? (
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-white truncate max-w-md mx-auto">
                      {selectedFile.name}
                    </p>
                    <p className="text-xs text-cyan-400 font-mono">
                      Selected File Size: {formatBytes(selectedFile.size)}
                    </p>
                    <p className="text-xs text-slate-400 pt-1">
                      Click to choose another spreadsheet
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-slate-200">
                      Drag & Drop your Excel (.xlsx, .xls, .csv) file here
                    </p>
                    <p className="text-xs text-slate-400">
                      Or click to browse from your computer (Processed locally in memory)
                    </p>
                  </div>
                )}
              </div>

              {/* Sample Loader Quick Button */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Files are processed in your browser memory and never uploaded to any server.</span>
                </div>
                <button
                  type="button"
                  onClick={handleLoadSample}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1.5 hover:underline"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Load Sample Bloated Excel (1-Click Test)</span>
                </button>
              </div>

              {/* Optimization Settings Panel */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Settings2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Compression Parameters</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Data integrity preserved</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Option 1: Maximize Compression & SST */}
                  <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      id="opt-maximize-compression"
                      checked={maximizeCompression}
                      onChange={(e) => {
                        setMaximizeCompression(e.target.checked);
                        if (e.target.checked) {
                          setStripCellStyles(true);
                          setTrimGhostRanges(true);
                          setRemoveComments(true);
                          setCompressImages(true);
                        }
                      }}
                      className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500/20 bg-slate-900"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        Shared Strings & DEFLATE Level 9
                      </span>
                      <span className="text-[11px] text-slate-400 leading-tight block">
                        Deduplicates text via Shared String Table (SST) & maximum zip compression.
                      </span>
                    </div>
                  </label>

                  {/* Option 2: Trim Ghost Grids */}
                  <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      id="opt-trim-ranges"
                      checked={trimGhostRanges}
                      onChange={(e) => setTrimGhostRanges(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500/20 bg-slate-900"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        Purge Ghost Rows & Tighten Range
                      </span>
                      <span className="text-[11px] text-slate-400 leading-tight block">
                        Restricts worksheet dimensions to actual populated cell coordinates.
                      </span>
                    </div>
                  </label>

                  {/* Option 3: Compress Embedded Images */}
                  <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      id="opt-compress-images"
                      checked={compressImages}
                      onChange={(e) => setCompressImages(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500/20 bg-slate-900"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        Compress Embedded Media Images
                      </span>
                      <span className="text-[11px] text-slate-400 leading-tight block">
                        Shrinks heavy photos/screenshots in xl/media/ while preserving sheet layout.
                      </span>
                    </div>
                  </label>

                  {/* Option 4: Strip Cell Styles */}
                  <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      id="opt-strip-styles"
                      checked={stripCellStyles}
                      onChange={(e) => setStripCellStyles(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500/20 bg-slate-900"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        Strip Redundant Style Payloads
                      </span>
                      <span className="text-[11px] text-slate-400 leading-tight block">
                        Purges unused font matrices, duplicate XML fills, borders & comments.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Compress Action Trigger */}
              <div>
                <button
                  id="excel-compress-btn"
                  onClick={handleCompress}
                  disabled={!selectedFile || isProcessing}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm shadow-lg transition-all ${
                    !selectedFile || isProcessing
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/20 hover:scale-[1.01] active:scale-98'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      <span>{compressionProgress || 'Compressing Excel File...'}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{selectedFile ? `Compress "${selectedFile.name}"` : 'Select an Excel File to Compress'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status & Feedback Notifications */}
              {statusType === 'loading' && (
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs flex items-center gap-2.5 animate-pulse">
                  <RefreshCw className="w-4 h-4 animate-spin flex-shrink-0" />
                  <span>{compressionProgress || 'Compressing...'}</span>
                </div>
              )}

              {statusType === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {statusType === 'success' && compressionResult && (
                <div className="p-5 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Successfully compressed!</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      -{compressionResult.percentageSaved}% Reduction
                    </span>
                  </div>

                  {/* Results Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Original Size</span>
                      <p className="text-sm font-bold text-slate-200 mt-0.5 font-mono">
                        {formatBytes(compressionResult.originalSizeBytes)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Optimized Size</span>
                      <p className="text-sm font-bold text-cyan-300 mt-0.5 font-mono">
                        {formatBytes(compressionResult.compressedSizeBytes)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Total Saved</span>
                      <p className="text-sm font-bold text-emerald-400 mt-0.5 font-mono">
                        {formatBytes(compressionResult.savedBytes)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Sheets / Rows</span>
                      <p className="text-sm font-bold text-purple-300 mt-0.5 font-mono">
                        {compressionResult.sheetCount} / {compressionResult.rowCountTotal}
                      </p>
                    </div>
                  </div>

                  {/* Download Trigger */}
                  <button
                    id="excel-download-btn"
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01] active:scale-98"
                  >
                    <Download className="w-4 h-4 stroke-[2.5]" />
                    <span>Download Compressed File ({compressionResult.fileName})</span>
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Standalone Code View for Developers */
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Standalone HTML / CSS / Modern JavaScript Code
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Self-contained single-file code ready to drop into any website or CMS.
                  </p>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Standalone Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 max-h-[380px] overflow-y-auto overflow-x-auto">
                <pre><code>{STANDALONE_EXCEL_COMPRESSOR_CODE}</code></pre>
              </div>
            </div>
          )}

        </div>

        {/* Other Lead Magnet Tools Showcase Grid */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-white">
              Additional Free Client-Side Developer Utilities
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Built to demonstrate high-performance client-side computation and privacy-first web architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FREE_TOOLS_LEAD_MAGNETS.filter(t => !t.activeComponent).map((tool) => (
              <div
                key={tool.id}
                className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tool.category}
                    </span>
                    <span className="text-[10px] text-cyan-400 font-semibold">
                      {tool.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tool.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-mono">100% Client-Side</span>
                  <a
                    href="#contact"
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Request Custom Tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
