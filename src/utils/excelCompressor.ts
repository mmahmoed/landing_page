import * as XLSX from 'xlsx';
import { ExcelCompressionResult } from '../types';

/**
 * Client-Side Excel (.xlsx) Optimizer & Compressor
 * Runs 100% in the user's browser without sending sensitive spreadsheet data to any server.
 */

export interface CompressionOptions {
  maximizeCompression: boolean;
  stripCellStyles?: boolean;
  trimGhostRanges?: boolean;
  removeComments?: boolean;
  purgeDocumentMetadata?: boolean;
}

export async function compressExcelFile(
  file: File,
  options: CompressionOptions = { maximizeCompression: true }
): Promise<ExcelCompressionResult> {
  const originalSizeBytes = file.size;

  // 1. Read the input file as an ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();

  // 2. Parse the workbook with SheetJS
  const workbook = XLSX.read(arrayBuffer, {
    type: 'array',
    cellStyles: true,
    cellDates: true,
    dense: false,
  });

  let sheetCount = workbook.SheetNames.length;
  let rowCountTotal = 0;
  let cellCountTotal = 0;
  let emptyCellsRemoved = 0;

  // 3. Process each worksheet
  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) continue;

    const cellKeys = Object.keys(sheet).filter((key) => !key.startsWith('!'));
    cellCountTotal += cellKeys.length;

    let minRow = Infinity;
    let maxRow = -1;
    let minCol = Infinity;
    let maxCol = -1;

    // Iterate through all cells
    for (const key of cellKeys) {
      const cell = sheet[key];

      // Check if cell is completely empty or just whitespace
      const isEmpty =
        cell === undefined ||
        cell === null ||
        cell.v === undefined ||
        cell.v === null ||
        (typeof cell.v === 'string' && cell.v.trim() === '' && !cell.f);

      if (options.maximizeCompression && isEmpty) {
        delete sheet[key];
        emptyCellsRemoved++;
        continue;
      }

      // Maximize compression: strip heavy cell style objects, fonts, fills, borders
      if (options.maximizeCompression && cell) {
        if (cell.s) delete cell.s; // Remove custom styling metadata
        if (cell.c && options.removeComments !== false) delete cell.c; // Remove comments
        if (cell.l) {
          // Keep hyperlink targets if present, but remove extra formatting
        }
      }

      // Decode cell coordinates to compute accurate tight bounding box
      const decoded = XLSX.utils.decode_cell(key);
      if (decoded.r < minRow) minRow = decoded.r;
      if (decoded.r > maxRow) maxRow = decoded.r;
      if (decoded.c < minCol) minCol = decoded.c;
      if (decoded.c > maxCol) maxCol = decoded.c;
    }

    // Tighten the worksheet range to eliminate ghost trailing rows/cols
    if (minRow !== Infinity && maxRow !== -1 && minCol !== Infinity && maxCol !== -1) {
      const newRef = XLSX.utils.encode_range({
        s: { r: minRow, c: minCol },
        e: { r: maxRow, c: maxCol },
      });
      sheet['!ref'] = newRef;
      rowCountTotal += maxRow - minRow + 1;
    } else {
      // Empty sheet
      sheet['!ref'] = 'A1:A1';
      rowCountTotal += 1;
    }

    // Remove heavy non-essential sheet properties if maximizing
    if (options.maximizeCompression) {
      if (sheet['!margins']) delete sheet['!margins'];
      if (sheet['!protect']) {
        // Keep protection if critical, otherwise lighten
      }
      if (sheet['!views']) delete sheet['!views'];
    }
  }

  // 4. Clean workbook metadata container
  if (options.maximizeCompression) {
    if (workbook.Props) {
      workbook.Props = {
        Title: 'Optimized Spreadsheet',
        Author: 'MMComp Solutions Compressor',
        CreatedDate: new Date(),
      };
    }
    if (workbook.Custprops) {
      delete workbook.Custprops;
    }
  }

  // 5. Write the optimized workbook with high ZIP compression enabled
  const outputUint8 = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
    compression: true, // Enables maximum zip deflate compression
  });

  const compressedBlob = new Blob([outputUint8], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  const compressedSizeBytes = compressedBlob.size;
  const savedBytes = Math.max(0, originalSizeBytes - compressedSizeBytes);
  const percentageSaved =
    originalSizeBytes > 0
      ? Math.max(0, Math.round(((originalSizeBytes - compressedSizeBytes) / originalSizeBytes) * 100))
      : 0;

  const downloadUrl = URL.createObjectURL(compressedBlob);

  return {
    fileName: file.name.replace(/\.[^/.]+$/, '') + '-optimized.xlsx',
    originalSizeBytes,
    compressedSizeBytes,
    savedBytes,
    percentageSaved,
    sheetCount,
    rowCountTotal,
    cellCountTotal,
    emptyCellsRemoved,
    stylesStripped: options.maximizeCompression,
    compressedBlob,
    downloadUrl,
    processedAt: new Date(),
  };
}

/**
 * Generates a test sample Excel file filled with simulated data and bloated styles
 * so users can test the compression tool immediately with 1 click!
 */
export function generateSampleBloatedExcel(): File {
  const wb = XLSX.utils.book_new();

  // Create sample inventory & sales data
  const data: Array<Array<string | number | boolean>> = [
    ['Product ID', 'Item Name', 'Category', 'Unit Cost', 'Retail Price', 'Stock Qty', 'Supplier', 'Last Audit Date', 'Notes & Specs', 'Status'],
  ];

  const categories = ['Hardware Component', 'Network Gear', 'Storage SSD', 'Peripherals', 'Cooling System'];
  const statuses = ['In Stock', 'Reserved', 'On Order', 'Low Stock'];

  for (let i = 1; i <= 350; i++) {
    const cost = Math.floor(Math.random() * 400) + 20;
    const price = Math.round(cost * 1.35 * 100) / 100;
    data.push([
      `SKU-2026-${10000 + i}`,
      `High-Performance Tech Part #${i} (Rev ${String.fromCharCode(65 + (i % 6))})`,
      categories[i % categories.length],
      cost,
      price,
      Math.floor(Math.random() * 150) + 5,
      `Global Silicon Logistics Vendor ${1 + (i % 8)}`,
      `2026-0${(i % 8) + 1}-15`,
      `Batch certified for continuous 24/7 load tolerance. Verified calibration code: 0x${(i * 1234).toString(16)}.`,
      statuses[i % statuses.length],
    ]);
  }

  // Add some trailing empty rows with formatting simulation to create bloat
  for (let emptyRow = 0; emptyRow < 150; emptyRow++) {
    data.push(['', '', '', '', '', '', '', '', '', '']);
  }

  const ws = XLSX.utils.aoa_to_sheet(data);

  // Set extended ref range to simulate bloated spreadsheet bounds
  ws['!ref'] = `A1:J${data.length + 200}`;

  XLSX.utils.book_append_sheet(wb, ws, 'Inventory Master');

  // Second Sheet: Diagnostics Log
  const diagData: Array<Array<string | number>> = [
    ['Ticket ID', 'Device Serial', 'Issue Summary', 'Technician', 'Bench Time (Hrs)', 'Labor Rate', 'Total'],
  ];
  for (let j = 1; j <= 120; j++) {
    const hours = (Math.random() * 4 + 0.5).toFixed(1);
    diagData.push([
      `TCK-${8000 + j}`,
      `SN-98214-${j * 7}`,
      `Thermal throttling & VRM stability check #${j}`,
      'Alex Rivera',
      parseFloat(hours),
      85,
      parseFloat(hours) * 85,
    ]);
  }
  const ws2 = XLSX.utils.aoa_to_sheet(diagData);
  ws2['!ref'] = `A1:G${diagData.length + 100}`;
  XLSX.utils.book_append_sheet(wb, ws2, 'Diagnostics Billing');

  const out = XLSX.write(wb, { bookType: 'xlsx', type: 'array', compression: false });
  const blob = new Blob([out], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  return new File([blob], 'Sample-SMB-Inventory-Bloated.xlsx', {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
}

export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Clean, standalone HTML+CSS+JS code snippet for the user to integrate or customize directly.
 */
export const STANDALONE_EXCEL_COMPRESSOR_CODE = `<!-- 
  Standalone Client-Side Excel (.xlsx) Compressor
  Engineered by MMComp Solutions (Full-Stack & Hardware Engineering)
  Zero Server Uploads • 100% In-Browser Compression
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Browser-Based Excel (.xlsx) Compressor</title>
  <!-- Load SheetJS CDN -->
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
  <style>
    :root {
      --bg: #0f172a;
      --card: #1e293b;
      --accent: #06b6d4;
      --accent-hover: #0891b2;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --border: #334155;
      --success: #10b981;
      --danger: #ef4444;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    body { background-color: var(--bg); color: var(--text); padding: 40px 20px; display: flex; justify-content: center; min-height: 100vh; }
    .compressor-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; width: 100%; max-width: 680px; padding: 32px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
    h1 { font-size: 1.5rem; margin-bottom: 8px; color: var(--text); }
    p.subtitle { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 24px; }
    .drop-zone { border: 2px dashed var(--border); border-radius: 12px; padding: 36px 20px; text-align: center; cursor: pointer; transition: all 0.2s ease; background: rgba(15, 23, 42, 0.4); }
    .drop-zone:hover, .drop-zone.dragover { border-color: var(--accent); background: rgba(6, 182, 212, 0.08); }
    .options { margin: 20px 0; display: flex; align-items: center; gap: 10px; }
    .checkbox-label { font-size: 0.9rem; color: var(--text); cursor: pointer; user-select: none; }
    .btn { background: var(--accent); color: #000; font-weight: 600; padding: 12px 24px; border-radius: 8px; border: none; cursor: pointer; transition: background 0.2s; width: 100%; font-size: 1rem; }
    .btn:hover { background: var(--accent-hover); }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .status-msg { margin-top: 18px; padding: 14px; border-radius: 8px; font-size: 0.9rem; display: none; }
    .status-msg.loading { display: block; background: rgba(6, 182, 212, 0.15); border: 1px solid var(--accent); color: var(--accent); }
    .status-msg.success { display: block; background: rgba(16, 185, 129, 0.15); border: 1px solid var(--success); color: var(--success); }
    .status-msg.error { display: block; background: rgba(239, 68, 68, 0.15); border: 1px solid var(--danger); color: var(--danger); }
    .results-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 20px; }
    .metric-box { background: rgba(15, 23, 42, 0.6); padding: 14px; border-radius: 8px; border: 1px solid var(--border); text-align: center; }
    .metric-box .label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }
    .metric-box .val { font-size: 1.1rem; font-weight: 700; color: var(--text); margin-top: 4px; }
    .metric-box .val.highlight { color: var(--success); }
    .download-btn { background: var(--success); color: #000; margin-top: 16px; }
  </style>
</head>
<body>

  <div class="compressor-card">
    <h1>Excel (.xlsx) Compressor</h1>
    <p class="subtitle">Optimize spreadsheet file size directly in your browser. 100% private, no data uploaded.</p>

    <!-- Drag & Drop Zone -->
    <div id="dropZone" class="drop-zone">
      <input type="file" id="fileInput" accept=".xlsx, .xls, .csv" style="display: none;" />
      <p id="fileLabel" style="font-weight: 500;">Click or Drag & Drop Excel File (.xlsx)</p>
      <span style="font-size: 0.8rem; color: var(--text-muted);">Supports .xlsx, .xls, .csv up to 50MB</span>
    </div>

    <!-- Options -->
    <div class="options">
      <input type="checkbox" id="maxCompress" checked />
      <label for="maxCompress" class="checkbox-label">
        <strong>Maximize Compression</strong> (Strip unused formatting styles, ghost blank rows, and metadata)
      </label>
    </div>

    <!-- Action Buttons -->
    <button id="compressBtn" class="btn" disabled>Compress Excel File</button>

    <!-- Feedback Status Container -->
    <div id="statusContainer" class="status-msg"></div>

    <!-- Results Panel -->
    <div id="resultsPanel" style="display: none;">
      <div class="results-grid">
        <div class="metric-box">
          <div class="label">Original Size</div>
          <div id="origSizeVal" class="val">-</div>
        </div>
        <div class="metric-box">
          <div class="label">Optimized Size</div>
          <div id="newSizeVal" class="val">-</div>
        </div>
        <div class="metric-box">
          <div class="label">Space Saved</div>
          <div id="savedVal" class="val highlight">-</div>
        </div>
      </div>
      <button id="downloadBtn" class="btn download-btn">Download Compressed File</button>
    </div>
  </div>

  <script>
    // State
    let selectedFile = null;
    let compressedBlob = null;
    let outputFileName = 'optimized.xlsx';

    // DOM Elements
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const fileLabel = document.getElementById('fileLabel');
    const maxCompress = document.getElementById('maxCompress');
    const compressBtn = document.getElementById('compressBtn');
    const statusContainer = document.getElementById('statusContainer');
    const resultsPanel = document.getElementById('resultsPanel');
    const origSizeVal = document.getElementById('origSizeVal');
    const newSizeVal = document.getElementById('newSizeVal');
    const savedVal = document.getElementById('savedVal');
    const downloadBtn = document.getElementById('downloadBtn');

    // Drag and Drop Events
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length) handleFile(e.target.files[0]);
    });

    function handleFile(file) {
      if (!file.name.match(/\\.(xlsx|xls|csv)$/i)) {
        showStatus('Error: Please select a valid Excel (.xlsx, .xls) or CSV file.', 'error');
        return;
      }
      selectedFile = file;
      fileLabel.innerHTML = '<strong>' + file.name + '</strong> (' + formatBytes(file.size) + ')';
      compressBtn.disabled = false;
      resultsPanel.style.display = 'none';
      showStatus('File loaded. Click Compress to optimize.', 'loading');
    }

    // Compression Core Logic
    compressBtn.addEventListener('click', async () => {
      if (!selectedFile) return;
      showStatus('Compressing workbook & pruning unnecessary XML bloat...', 'loading');
      compressBtn.disabled = true;

      try {
        const buffer = await selectedFile.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: 'array', cellStyles: true });

        const maximize = maxCompress.checked;

        // Iterate worksheets
        workbook.SheetNames.forEach(sheetName => {
          const sheet = workbook.Sheets[sheetName];
          if (!sheet) return;

          let minR = Infinity, maxR = -1, minC = Infinity, maxC = -1;
          const cellKeys = Object.keys(sheet).filter(k => !k.startsWith('!'));

          cellKeys.forEach(k => {
            const cell = sheet[k];
            const isEmpty = !cell || cell.v === undefined || cell.v === null || (typeof cell.v === 'string' && cell.v.trim() === '');
            
            if (maximize && isEmpty) {
              delete sheet[k];
              return;
            }

            if (maximize && cell) {
              if (cell.s) delete cell.s; // Strip cell custom styles
              if (cell.c) delete cell.c; // Strip comments
            }

            const dec = XLSX.utils.decode_cell(k);
            if (dec.r < minR) minR = dec.r;
            if (dec.r > maxR) maxR = dec.r;
            if (dec.c < minC) minC = dec.c;
            if (dec.c > maxC) maxC = dec.c;
          });

          // Tighten bounding box
          if (minR !== Infinity && maxR !== -1) {
            sheet['!ref'] = XLSX.utils.encode_range({ s: { r: minR, c: minC }, e: { r: maxR, c: maxC } });
          }
        });

        // Write compressed output
        const outArray = XLSX.write(workbook, { bookType: 'xlsx', type: 'array', compression: true });
        compressedBlob = new Blob([outArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        
        outputFileName = selectedFile.name.replace(/\\.[^/.]+$/, '') + '-optimized.xlsx';

        // Update UI Metrics
        const origSize = selectedFile.size;
        const compSize = compressedBlob.size;
        const diff = Math.max(0, origSize - compSize);
        const percent = origSize > 0 ? Math.round((diff / origSize) * 100) : 0;

        origSizeVal.innerText = formatBytes(origSize);
        newSizeVal.innerText = formatBytes(compSize);
        savedVal.innerText = '-' + percent + '% (' + formatBytes(diff) + ')';

        resultsPanel.style.display = 'block';
        showStatus('Successfully compressed!', 'success');
      } catch (err) {
        console.error(err);
        showStatus('Error: ' + (err.message || 'Failed to process Excel file.'), 'error');
      } finally {
        compressBtn.disabled = false;
      }
    });

    // Download Trigger
    downloadBtn.addEventListener('click', () => {
      if (!compressedBlob) return;
      const url = URL.createObjectURL(compressedBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = outputFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    function showStatus(text, type) {
      statusContainer.className = 'status-msg ' + type;
      statusContainer.innerText = text;
      statusContainer.style.display = 'block';
    }

    function formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
  </script>
</body>
</html>`;
