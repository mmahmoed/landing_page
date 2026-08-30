import { Language } from '../context/LanguageContext';
import { ServiceItem, PortfolioItem, Testimonial, FreeToolLeadMagnet, ValuePropItem } from '../types';

export interface TranslationData {
  brand: {
    name: string;
    shortName: string;
    founder: string;
    credentials: string;
    tagline: string;
    subTagline: string;
    location: string;
    phone: string;
    whatsappNumber: string;
    whatsappMessage: string;
    email: string;
    hours: string;
  };
  nav: {
    hardwareServices: string;
    webApps: string;
    freeTools: string;
    portfolio: string;
    values: string;
    reviews: string;
    contact: string;
    freeConsultation: string;
    getEstimate: string;
    newBadge: string;
    dualDomainBadge: string;
  };
  hero: {
    statusAvailable: string;
    statusTurnaround: string;
    dualDomainSpecialist: string;
    headlinePrefix: string;
    headlineHardware: string;
    headlineMiddle: string;
    headlineWeb: string;
    headlineSuffix: string;
    subheadline: string;
    ctaWeb: string;
    ctaRepair: string;
    ctaWhatsApp: string;
    terminalTitle: string;
    tabWeb: string;
    tabHardware: string;
    terminalWebStack: string;
    terminalHardwareStack: string;
  };
  freeTools: {
    badge: string;
    title: string;
    subtitle: string;
    dropZoneTitle: string;
    dropZoneSubtitle: string;
    dropZoneHover: string;
    dropZoneSelected: string;
    sampleBtn: string;
    compressBtn: string;
    compressingBtn: string;
    downloadBtn: string;
    privacyNotice: string;
    optionsTitle: string;
    optSST: string;
    optSSTDesc: string;
    optGhost: string;
    optGhostDesc: string;
    optImages: string;
    optImagesDesc: string;
    optStyles: string;
    optStylesDesc: string;
    tabInteractive: string;
    tabCode: string;
    sourceCodeTitle: string;
    copyCodeBtn: string;
    copiedBtn: string;
    metrics: {
      originalSize: string;
      optimizedSize: string;
      savedPercentage: string;
      sheetsProcessed: string;
      emptyCellsPruned: string;
      clientPrivacyGuaranteed: string;
    };
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    tabHardware: string;
    tabWeb: string;
    bookServiceBtn: string;
    turnaroundPrefix: string;
    startingFrom: string;
    featuresIncluded: string;
    estimatorTitle: string;
    estimatorSubtitle: string;
    estTypeWeb: string;
    estTypeHardware: string;
    estScopeLabel: string;
    estTimelineLabel: string;
    estSupportLabel: string;
    estResultTitle: string;
    estEstimatedRange: string;
    estEstimatedDays: string;
    estWhatsAppBtn: string;
    estDisclaimer: string;
  };
  values: {
    badge: string;
    title: string;
    subtitle: string;
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterWeb: string;
    filterHardware: string;
    filterNetwork: string;
    challengeTitle: string;
    solutionTitle: string;
    resultsTitle: string;
    interactiveDemoTitle: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    satisfactionScore: string;
    scoreSubtitle: string;
    verifiedBadge: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    phoneLabel: string;
    categoryLabel: string;
    serviceLabel: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    submitWhatsAppBtn: string;
    directInfoTitle: string;
    hoursLabel: string;
    emergencyLabel: string;
    faqTitle: string;
  };
  footer: {
    bio: string;
    hardwareColTitle: string;
    webColTitle: string;
    labColTitle: string;
    copyright: string;
    privacyPledge: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  id: {
    brand: {
      name: 'MMComp Solutions',
      shortName: 'MMComp',
      founder: 'Muh. Mahmud',
      credentials: 'B.S. Computer Engineering • CompTIA A+ & Network+ • Full-Stack Systems Architect',
      tagline: 'Solusi Rekayasa Software Web & Restorasi Hardware Perangkat Komputer',
      subTagline: 'Diagnostik Hardware Presisi, Servis Motherboard Komponen & Aplikasi Web Kustom Modern untuk UMKM dan Bisnis',
      location: 'Workshop Teknis & Metro Area • Layanan Langsung di Tempat (On-Site) & Remote',
      phone: '085725884039',
      whatsappNumber: '6285725884039',
      whatsappMessage: 'Halo Muh. Mahmud! Saya tertarik untuk konsultasi gratis mengenai servis hardware / pembuatan aplikasi web custom.',
      email: 'muhmahmud@mmcompsolutions.dev',
      hours: 'Senin – Jumat: 08:00 – 19:00 WIB | Sabtu: 09:00 – 16:00 WIB (Darurat Siaga 24 Jam)',
    },
    nav: {
      hardwareServices: 'Layanan PC & Hardware',
      webApps: 'Aplikasi Web Kustom',
      freeTools: 'Tools Gratis',
      portfolio: 'Portofolio',
      values: 'Keunggulan',
      reviews: 'Ulasan Klien',
      contact: 'Hubungi Kami',
      freeConsultation: 'Konsultasi Gratis',
      getEstimate: 'Cek Estimasi Biaya',
      newBadge: 'Baru',
      dualDomainBadge: 'Keahlian Ganda',
    },
    hero: {
      statusAvailable: 'Siap Melayani On-Site & Remote Project',
      statusTurnaround: 'Pengerjaan Cepat 24–48 Jam',
      dualDomainSpecialist: 'Spesialis Ahli Hardware & Software Web',
      headlinePrefix: 'Solusi Andal untuk ',
      headlineHardware: 'Servis & Perbaikan PC',
      headlineMiddle: ' serta ',
      headlineWeb: 'Pembuatan Aplikasi Web',
      headlineSuffix: ' Kustom',
      subheadline: 'Mulai dari diagnostik motherboard tingkat komponen, optimasi termal workstation, hingga aplikasi web bisnis khusus (Sistem Kasir POS, Manajemen Aset & ERP Cloud) — memberikan solusi teknis yang cepat, stabil, dan terjangkau untuk bisnis serta profesional.',
      ctaWeb: 'Konsultasi Proyek Aplikasi Web',
      ctaRepair: 'Booking Servis & Diagnostik PC',
      ctaWhatsApp: 'Chat WhatsApp Langsung',
      terminalTitle: 'muhmahmud@mmcomp-terminal',
      tabWeb: 'Aplikasi Web (POS/ERP)',
      tabHardware: 'Hardware & Diagnostik',
      terminalWebStack: 'arsitektur-web-modern',
      terminalHardwareStack: 'workbench-hardware-lab',
    },
    freeTools: {
      badge: 'Alat Utilitas Browser 100% Gratis',
      title: 'Kompresor Dokumen Excel (.xlsx) Multi-Layer',
      subtitle: 'Optimalkan ukuran file spreadsheet langsung di browser Anda. 100% Aman & Privat — data sensitif Anda tidak pernah diunggah ke server mana pun.',
      dropZoneTitle: 'Klik atau Tarik & Lepas File Excel (.xlsx, .xls, .csv)',
      dropZoneSubtitle: 'Mendukung file hingga 100MB • Pemrosesan instan dalam memori browser',
      dropZoneHover: 'Lepaskan file Excel di sini...',
      dropZoneSelected: 'File terpilih siap dikompres:',
      sampleBtn: 'Uji Coba File Contoh (Sample)',
      compressBtn: 'Mulai Kompresi Excel Sekarang',
      compressingBtn: 'Memproses Kompresi Multi-Layer...',
      downloadBtn: 'Unduh Excel Teroptimasi (.xlsx)',
      privacyNotice: 'Keamanan Data Privat: Diproses 100% di browser pengguna tanpa transfer internet.',
      optionsTitle: 'Pengaturan Optimasi & Kompresi:',
      optSST: 'Shared Strings Table & DEFLATE Level 9',
      optSSTDesc: 'Menghilangkan duplikasi teks dan mengemas ulang arsip XML dengan kompresi tingkat tertinggi.',
      optGhost: 'Pangkas Sel & Baris Kosong (Ghost Ranges)',
      optGhostDesc: 'Membersihkan sel kosong yang tidak memiliki data namun memakan ukuran file.',
      optImages: 'Kompresi Gambar & Foto di Lembar Kerja',
      optImagesDesc: 'Mengecilkan ukuran foto/tangkapan layar di dalam folder xl/media/ tanpa merusak layout.',
      optStyles: 'Hapus Styling & Metadata Berlebih',
      optStylesDesc: 'Membersihkan sisa format font duplikat, border kosong, dan komentar yang tidak terpakai.',
      tabInteractive: 'Aplikasi Kompresor',
      tabCode: 'Source Code (HTML/JS Mandiri)',
      sourceCodeTitle: 'Kode Sumber Utilitas Kompresor (Bisa Dijalankan Offline)',
      copyCodeBtn: 'Salin Kode Sumber',
      copiedBtn: 'Berhasil Disalin!',
      metrics: {
        originalSize: 'Ukuran Awal',
        optimizedSize: 'Ukuran Teroptimasi',
        savedPercentage: 'Hemat Ukuran',
        sheetsProcessed: 'Lembar Diproses',
        emptyCellsPruned: 'Sel Kosong Dihapus',
        clientPrivacyGuaranteed: 'Privasi Terjamin 100%',
      },
    },
    services: {
      badge: 'Layanan Profesional & Transparan',
      title: 'Layanan Hardware Terpercaya & Rekayasa Software Web',
      subtitle: 'Biaya pasti tanpa biaya tersembunyi, pengerjaan cepat dengan laporan teknis komprehensif, dan komunikasi langsung dengan engineer ahli.',
      tabHardware: 'Hardware & Jaringan Komputer',
      tabWeb: 'Aplikasi & Software Web Kustom',
      bookServiceBtn: 'Pesan Layanan Ini',
      turnaroundPrefix: 'Estimasi Waktu',
      startingFrom: 'Mulai dari',
      featuresIncluded: 'Cakupan & Keunggulan Layanan:',
      estimatorTitle: 'Kalkulator Estimasi Biaya Proyek & Servis',
      estimatorSubtitle: 'Hitung perkiraan biaya investasi dan estimasi waktu pengerjaan secara transparan.',
      estTypeWeb: 'Aplikasi Web Kustom',
      estTypeHardware: 'Servis & Optimasi PC',
      estScopeLabel: 'Kategori Kebutuhan',
      estTimelineLabel: 'Tingkat Kompleksitas / Fitur Tambahan',
      estSupportLabel: 'Dukungan & Garansi Pasca Pengerjaan',
      estResultTitle: 'Perkiraan Biaya & Jadwal:',
      estEstimatedRange: 'Estimasi Investasi',
      estEstimatedDays: 'Estimasi Pengerjaan',
      estWhatsAppBtn: 'Kirim Rincian Ini via WhatsApp',
      estDisclaimer: '*Estimasi bersifat acuan awal. Harga final ditentukan setelah konfirmasi spesifikasi detail.',
    },
    values: {
      badge: 'Mengapa Memilih MMComp Solutions',
      title: 'Presisi Teknis & Keandalan Tanpa Kompromi',
      subtitle: 'Kami memadukan pemahaman mendalam tentang komponen hardware elektronika dengan arsitektur software web berkinerja tinggi.',
    },
    portfolio: {
      badge: 'Studi Kasus & Hasil Nyata',
      title: 'Portofolio Solusi Web & Implementasi Hardware',
      subtitle: 'Lihat bagaimana kami membantu bisnis menyelesaikan tantangan operasional dan teknis dengan hasil yang terukur.',
      filterAll: 'Semua Portofolio',
      filterWeb: 'Aplikasi Web & POS',
      filterHardware: 'Hardware & Workstation',
      filterNetwork: 'Infrastruktur Jaringan',
      challengeTitle: 'Tantangan:',
      solutionTitle: 'Solusi Rekayasa:',
      resultsTitle: 'Hasil & Metrik:',
      interactiveDemoTitle: 'Simulasi Interaktif Langsung:',
    },
    testimonials: {
      badge: 'Ulasan & Kepuasan Klien',
      title: 'Dipercaya oleh Pemilik Bisnis & Profesional',
      subtitle: 'Ulasan asli dari klien yang telah menggunakan layanan servis PC, perakitan workstation, dan pembuatan aplikasi web kami.',
      satisfactionScore: '4.98 / 5.0',
      scoreSubtitle: 'Tingkat kepuasan klien berdasarkan 120+ proyek terselesaikan.',
      verifiedBadge: 'Proyek Terverifikasi',
    },
    contact: {
      badge: 'Konsultasi Langsung & Fast Response',
      title: 'Diskusikan Kebutuhan Hardware atau Software Web Anda',
      subtitle: 'Komunikasi langsung 1-on-1 dengan Senior Engineer Muh. Mahmud. Tanpa perantara marketing, solusi cepat dan tepat.',
      formTitle: 'Formulir Konsultasi & Pemesanan Layanan',
      formSubtitle: 'Isi detail di bawah untuk respons kilat dan estimasi terperinci.',
      nameLabel: 'Nama Lengkap / Nama Bisnis',
      namePlaceholder: 'Contoh: Budi Santoso / PT Maju Jaya',
      emailLabel: 'Alamat Email',
      phoneLabel: 'Nomor WhatsApp / Telepon',
      categoryLabel: 'Kategori Layanan',
      serviceLabel: 'Layanan Spesifik',
      detailsLabel: 'Deskripsi Kebutuhan / Gejala Kerusakan PC',
      detailsPlaceholder: 'Jelaskan kendala PC Anda (misal: bluescreen, mati total, panas) atau kebutuhan aplikasi web (fitur kasir, kelola stok, laporan)...',
      submitWhatsAppBtn: 'Kirim Konsultasi via WhatsApp',
      directInfoTitle: 'Kontak Langsung & Workshop',
      hoursLabel: 'Jam Kerja Workshop:',
      emergencyLabel: 'Layanan Darurat On-Call Siaga 24 Jam',
      faqTitle: 'Pertanyaan yang Sering Diajukan (FAQ)',
    },
    footer: {
      bio: 'Menjembatani diagnosa elektronika hardware tingkat komponen dan arsitektur software web full-stack modern. 100% kepemilikan kode klien, biaya transparan, dan dukungan engineer langsung.',
      hardwareColTitle: 'Layanan Hardware & Jaringan',
      webColTitle: 'Aplikasi Web & Utilitas',
      labColTitle: 'Lokasi Lab & Jam Kerja',
      copyright: 'Hak Cipta Dilindungi. Layanan Solusi Teknik & Rekayasa Komputer Terdaftar.',
      privacyPledge: '100% Privasi di Browser pada Tools Gratis',
    },
  },
  en: {
    brand: {
      name: 'MMComp Solutions',
      shortName: 'MMComp',
      founder: 'Muh. Mahmud',
      credentials: 'B.S. Computer Engineering • CompTIA A+ & Network+ • Full-Stack Systems Architect',
      tagline: 'Engineering High-Performance Web Software & Restoring Mission-Critical Hardware',
      subTagline: 'Precision PC Diagnostics, Component-Level Repair & Bespoke Cloud Web Applications for SMBs & Power Users',
      location: 'Technical Workshop & Metro Area • On-Site & Remote Worldwide',
      phone: '085725884039',
      whatsappNumber: '6285725884039',
      whatsappMessage: 'Hi Muh. Mahmud! I am interested in a free consultation for tech repair / custom web app development.',
      email: 'muhmahmud@mmcompsolutions.dev',
      hours: 'Mon – Fri: 08:00 AM – 07:00 PM | Sat: 09:00 AM – 04:00 PM (Emergency 24/7 On-Call Available)',
    },
    nav: {
      hardwareServices: 'Hardware & PC Services',
      webApps: 'Custom Web Apps',
      freeTools: 'Free Tools',
      portfolio: 'Portfolio',
      values: 'Values',
      reviews: 'Reviews',
      contact: 'Contact',
      freeConsultation: 'Free Consultation',
      getEstimate: 'Get Estimate',
      newBadge: 'New',
      dualDomainBadge: 'Dual-Domain',
    },
    hero: {
      statusAvailable: 'Available for On-Site & Remote Projects',
      statusTurnaround: '24–48h Rapid Turnaround',
      dualDomainSpecialist: 'Dual-Domain Engineering Specialist',
      headlinePrefix: 'Solutions for ',
      headlineHardware: 'PC Repair',
      headlineMiddle: ' and ',
      headlineWeb: 'Custom Web App',
      headlineSuffix: ' Development',
      subheadline: 'From precision component-level motherboard diagnostics and high-performance workstation builds to bespoke business web platforms (Point-of-Sale, Asset Management & Cloud Portals) — engineering fast, dependable digital and hardware solutions for growing SMBs and professionals.',
      ctaWeb: 'Discuss Web & App Projects',
      ctaRepair: 'Book PC Diagnostics & Repair',
      ctaWhatsApp: 'Instant WhatsApp Chat',
      terminalTitle: 'muhmahmud@mmcomp-terminal',
      tabWeb: 'Web Apps (POS/ERP)',
      tabHardware: 'Hardware & Diagnostics',
      terminalWebStack: 'web-architecture',
      terminalHardwareStack: 'hardware-workbench',
    },
    freeTools: {
      badge: '100% Free Client-Side Utility',
      title: 'Excel (.xlsx) Multi-Layer Document Compressor',
      subtitle: 'Optimize spreadsheet file size directly in your browser. 100% private — your sensitive data never leaves your device or touches any server.',
      dropZoneTitle: 'Click or Drag & Drop Excel File (.xlsx, .xls, .csv)',
      dropZoneSubtitle: 'Supports files up to 100MB • Instant in-memory client-side processing',
      dropZoneHover: 'Drop your Excel file here...',
      dropZoneSelected: 'Selected file ready for compression:',
      sampleBtn: 'Load Sample Bloated Excel',
      compressBtn: 'Compress Excel File Now',
      compressingBtn: 'Processing Multi-Layer Compression...',
      downloadBtn: 'Download Optimized Excel (.xlsx)',
      privacyNotice: 'Zero-Upload Privacy: Processed 100% locally inside your browser memory.',
      optionsTitle: 'Optimization & Compression Parameters:',
      optSST: 'Shared Strings & DEFLATE Level 9',
      optSSTDesc: 'Deduplicates text via Shared String Table (SST) and repacks with maximum ZIP compression.',
      optGhost: 'Prune Ghost Cell Bounds & Trailing Rows',
      optGhostDesc: 'Removes empty cell matrix allocations that inflate XML file size.',
      optImages: 'Compress Embedded Media Images',
      optImagesDesc: 'Shrinks heavy photos/screenshots in xl/media/ while preserving sheet layout.',
      optStyles: 'Strip Redundant Style Payloads',
      optStylesDesc: 'Purges unused font matrices, duplicate XML fills, borders, and comments.',
      tabInteractive: 'Live Compressor App',
      tabCode: 'Standalone Source Code',
      sourceCodeTitle: 'Standalone Single-File Utility Code (Runs Offline)',
      copyCodeBtn: 'Copy Source Code',
      copiedBtn: 'Copied to Clipboard!',
      metrics: {
        originalSize: 'Original Size',
        optimizedSize: 'Optimized Size',
        savedPercentage: 'Saved',
        sheetsProcessed: 'Sheets Processed',
        emptyCellsPruned: 'Empty Cells Pruned',
        clientPrivacyGuaranteed: '100% Privacy Guaranteed',
      },
    },
    services: {
      badge: 'Transparent & Professional Engineering',
      title: 'Mission-Critical Hardware & Custom Web Software',
      subtitle: 'Fixed rates with no hidden fees, rapid diagnostic turnarounds with comprehensive bench test reports, and direct communication with the lead engineer.',
      tabHardware: 'Hardware & Network Maintenance',
      tabWeb: 'Custom Web & App Development',
      bookServiceBtn: 'Book This Service',
      turnaroundPrefix: 'Typical Turnaround',
      startingFrom: 'Starting from',
      featuresIncluded: 'What Is Included in Service:',
      estimatorTitle: 'Project & Repair Cost Estimator',
      estimatorSubtitle: 'Calculate baseline investment ranges and turnaround timelines for your specific requirements.',
      estTypeWeb: 'Custom Web Project',
      estTypeHardware: 'PC Diagnostics & Repair',
      estScopeLabel: 'Requirement Scope',
      estTimelineLabel: 'Complexity & Add-on Capabilities',
      estSupportLabel: 'Post-Deployment Support & Warranty',
      estResultTitle: 'Estimated Cost & Timeline:',
      estEstimatedRange: 'Estimated Range',
      estEstimatedDays: 'Estimated Delivery',
      estWhatsAppBtn: 'Inquire on WhatsApp with this Estimate',
      estDisclaimer: '*Estimates are baseline projections. Final quote confirmed upon technical review.',
    },
    values: {
      badge: 'Why Choose MMComp Solutions',
      title: 'Engineering Precision & Uncompromising Reliability',
      subtitle: 'We unite component-level hardware repair mastery with modern full-stack web software architecture.',
    },
    portfolio: {
      badge: 'Proven Engineering Deliveries',
      title: 'Featured Web Platforms & Hardware Deployments',
      subtitle: 'Explore real-world case studies demonstrating our dual-domain hardware engineering and custom software development.',
      filterAll: 'All Solutions',
      filterWeb: 'Web Apps & POS',
      filterHardware: 'Hardware & Rigs',
      filterNetwork: 'Network Infrastructure',
      challengeTitle: 'The Challenge:',
      solutionTitle: 'Engineering Solution:',
      resultsTitle: 'Results & Metrics:',
      interactiveDemoTitle: 'Live Interactive Simulation:',
    },
    testimonials: {
      badge: 'Client Endorsements & Reviews',
      title: 'Trusted by Business Owners & Power Users',
      subtitle: 'Read genuine reviews from clients who rely on our PC diagnostics, workstation builds, and custom web software solutions.',
      satisfactionScore: '4.98 / 5.0',
      scoreSubtitle: 'Average client satisfaction rating across 120+ completed projects.',
      verifiedBadge: 'Verified Project',
    },
    contact: {
      badge: 'Fast Technical Dialogue',
      title: "Let's Discuss Your Hardware or Web Architecture",
      subtitle: 'Direct 1-on-1 dialogue with senior engineer Muh. Mahmud. No salespeople, no delays.',
      formTitle: 'Technical Consultation & Service Request Form',
      formSubtitle: 'Fill in your details below for a fast response and precise estimate.',
      nameLabel: 'Full Name / Business Name',
      namePlaceholder: 'e.g., John Doe / Apex Retail Inc.',
      emailLabel: 'Email Address',
      phoneLabel: 'WhatsApp / Phone Number',
      categoryLabel: 'Service Category',
      serviceLabel: 'Specific Service Required',
      detailsLabel: 'Project Details / Hardware Symptoms',
      detailsPlaceholder: 'Describe your PC symptoms (e.g., no POST, BSOD, overheating) or web application requirements (e.g., POS features, asset tracking, inventory)...',
      submitWhatsAppBtn: 'Send Consultation Request via WhatsApp',
      directInfoTitle: 'Direct Contact & Workshop Lab',
      hoursLabel: 'Workshop Lab Hours:',
      emergencyLabel: '24/7 Emergency On-Call Priority Available',
      faqTitle: 'Frequently Asked Questions (FAQ)',
    },
    footer: {
      bio: 'Bridging precision component-level electronics diagnostics and high-performance full-stack web software architecture. 100% client code ownership, transparent fixed rates, and direct engineer support.',
      hardwareColTitle: 'Hardware & Network',
      webColTitle: 'Web Apps & Utilities',
      labColTitle: 'Lab Location & Hours',
      copyright: 'All rights reserved. Registered Technical Solutions & Engineering Practice.',
      privacyPledge: '100% Client-Side Privacy on Free Tools',
    },
  },
};
