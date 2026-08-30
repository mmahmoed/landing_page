import { ServiceItem, PortfolioItem, Testimonial, FreeToolLeadMagnet, ValuePropItem } from '../types';
import { Language } from '../context/LanguageContext';

export const BRAND_INFO = {
  name: 'MMComp Solutions',
  shortName: 'MMComp',
  founder: 'Muh. Mahmud',
  credentials: 'B.S. Computer Engineering • CompTIA A+ & Network+ • Full-Stack Systems Architect',
  tagline: 'Engineering High-Performance Web Software & Restoring Mission-Critical Hardware',
  subTagline: 'Precision PC Diagnostics, Component-Level Repair & Bespoke Cloud Web Applications for SMBs & Power Users',
  location: 'Technical Workshop & Metro Area • On-Site & Remote Worldwide',
  phone: '085725884039',
  whatsappNumber: '6285725884039',
  whatsappMessage: 'Halo Muh. Mahmud! Saya tertarik untuk konsultasi gratis mengenai servis hardware / pembuatan aplikasi web custom.',
  email: 'muhmahmud@mmcompsolutions.dev',
  hours: 'Mon – Fri: 08:00 AM – 07:00 PM | Sat: 09:00 AM – 04:00 PM (Emergency 24/7 On-Call Available)',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    whatsapp: 'https://wa.me/6285725884039'
  }
};

export const getServicesData = (lang: Language): ServiceItem[] => {
  if (lang === 'id') {
    return [
      {
        id: 'pc-diagnostics-repair',
        category: 'hardware-pc',
        title: 'Diagnostik & Servis Hardware Tingkat Komponen',
        tagline: 'Pengujian osiloskop jalur PCB, mikro-soldering, dan perbaikan termal motherboard',
        description: 'Penanganan kerusakan hardware mulai dari fase daya VRM mati, kapasitor melembung, ganti thermal pad GPU, perbaikan pin soket CPU bengkok, hingga pembersihan korosi akibat cairan.',
        features: [
          'Diagnostik multi-point komprehensif dalam 24 jam',
          'Penggantian komponen SMD & micro-soldering presisi',
          'Perbaikan PC No-Display (No-POST), Blue Screen (BSOD) & crash berulang',
          'Pembersihan PCB ultrasonic dan penanganan jalur korosi'
        ],
        icon: 'Cpu',
        badge: 'Hardware Lab',
        typicalTurnaround: '24–48 Jam',
        startingPrice: 'Mulai Rp 150.000 (Biaya cek gratis jika lanjut servis)'
      },
      {
        id: 'pc-tuneup-cooling',
        category: 'hardware-pc',
        title: 'Optimasi Termal, Rakit PC Custom & Upgrade',
        tagline: 'Maksimalkan clock speed tanpa thermal throttling dengan performa hening',
        description: 'Perakitan workstation CAD/Render 3D, PC gaming custom, perawatan pendingin liquid cooling AIO/custom loop, repasting phase-change PTM7950/Kryonaut, serta tuning RAM & NVMe.',
        features: [
          'Repasting termal kelas industri & penggantian thermal putty',
          'Arsitektur PC Workstation khusus (AI, 3D Rendering, CAD, Editing)',
          'Validasi stabilitas memori BIOS & tuning XMP/EXPO',
          'Profiling kurva kipas dengan positive air-pressure bebas debu'
        ],
        icon: 'Flame',
        badge: 'Performa Tinggi',
        typicalTurnaround: '1–2 Hari',
        startingPrice: 'Mulai Rp 200.000'
      },
      {
        id: 'network-security-smb',
        category: 'hardware-pc',
        title: 'Instalasi Jaringan Kantor SMB & Wi-Fi Mesh',
        tagline: 'Konektivitas stabil, segmentasi VLAN terisolasi, dan firewall keamanan',
        description: 'Perancangan dan instalasi infrastruktur jaringan kantor menggunakan Ubiquiti UniFi, MikroTik, atau pfSense. Menyediakan portal tamu terisolasi, VPN antar cabang, dan manajemen kabel rapi.',
        features: [
          'Segmentasi multi-SSID & VLAN terisolasi untuk perangkat IoT/POS kasir',
          'Konfigurasi Managed Switch PoE Gigabit/10G & Router MikroTik/UniFi',
          'Koneksi VPN terenkripsi antar kantor cabang (WireGuard/IPsec)',
          'Analisis spektrum Wi-Fi & tuning roaming tanpa putus'
        ],
        icon: 'Network',
        badge: 'Infrastruktur',
        typicalTurnaround: 'Sesuai Jadwal Proyek',
        startingPrice: 'Mulai Rp 500.000'
      },
      {
        id: 'data-recovery-os',
        category: 'hardware-pc',
        title: 'Pemulihan Data (Data Recovery) & Instalasi OS Bersih',
        tagline: 'Kloning raw bit-for-bit, perbaikan partisi korup, dan migrasi storage aman',
        description: 'Penyelamatan data darurat dari harddisk bad sector, drive berbunyi klik, partisi korup NTFS/EXT4, dan migrasi sistem operasi ke NVMe SSD berkecepatan tinggi tanpa kehilangan data.',
        features: [
          'Kloning image raw langsung non-destruktif',
          'Pemulihan tabel partisi & penyelamatan data BitLocker',
          'Instalasi ulang OS bersih tanpa bloatware dengan driver optimal',
          'Implementasi backup otomatis lokal & cloud terenkripsi 3-2-1'
        ],
        icon: 'HardDrive',
        badge: 'Penyelamatan Data',
        typicalTurnaround: '12–36 Jam',
        startingPrice: 'Mulai Rp 250.000'
      },
      {
        id: 'web-pos-systems',
        category: 'web-dev',
        title: 'Aplikasi Web Kasir & Point-of-Sale (POS) Kustom',
        tagline: 'Aplikasi kasir bespoke tanpa biaya langganan bulanan dengan mode offline',
        description: 'Software Point-of-Sale khusus yang disesuaikan dengan alur kerja toko retail, cafe, resto, atau butik Anda. Dilengkapi sinkronisasi offline IndexedDB, cetak struk termal, dan hak akses kasir.',
        features: [
          'Transaksi offline instan dengan auto-sync saat internet kembali terhubung',
          'Integrasi printer struk termal ESC/POS & USB/Bluetooth barcode scanner',
          'Manajemen varian produk SKU, batas stok minimal & laporan laba kotor',
          'Tanpa biaya langganan bulanan per kasir — 100% milik bisnis Anda selamanya'
        ],
        icon: 'Store',
        badge: 'Aplikasi Unggulan',
        typicalTurnaround: '2–4 Minggu MVP',
        startingPrice: 'Mulai Rp 4.500.000'
      },
      {
        id: 'asset-management-erp',
        category: 'web-dev',
        title: 'Portal Manajemen Aset & Pelacakan Inventaris ERP',
        tagline: 'Pelacakan aset barcode/QR, log audit, dan penjadwalan pemeliharaan',
        description: 'Hilangkan kerugian barang hilang dan kekacauan spreadsheet. Platform web modern dengan scan QR via kamera HP, perhitungan depresiasi otomatis, dan alur peminjaman barang.',
        features: [
          'Pembuatan kode QR dinamis & integrasi pemindai kamera HP',
          'Notifikasi jadwal perawatan berkala & riwayat servis peralatan',
          'Kontrol hak akses bertingkat (Admin, Teknisi, Auditor)',
          'Ekspor laporan audit otomatis ke format PDF & Excel'
        ],
        icon: 'Boxes',
        badge: 'Enterprise UMKM',
        typicalTurnaround: '3–5 Minggu',
        startingPrice: 'Mulai Rp 6.000.000'
      },
      {
        id: 'fullstack-web-apps',
        category: 'web-dev',
        title: 'Aplikasi Web Full-Stack & Dashboard Operasional',
        tagline: 'Arsitektur React, TypeScript, Node.js, dan database SQL/NoSQL cepat',
        description: 'Mulai dari portal pemesanan online pelanggan hingga dashboard otomatisasi internal. Platform web yang cepat, responsif, aman, dan dirancang khusus untuk memotong birokrasi manual.',
        features: [
          'Frontend React/Next.js modern dengan waktu muat di bawah 1 detik',
          'Backend API Node/Express atau serverless yang aman dan scalable',
          'Integrasi payment gateway (Midtrans, Xendit, QRIS, Stripe)',
          'Notifikasi otomatis via WhatsApp API & Email'
        ],
        icon: 'Code2',
        badge: 'Custom Software',
        typicalTurnaround: '2–6 Minggu',
        startingPrice: 'Mulai Rp 3.500.000'
      },
      {
        id: 'api-automation-cloud',
        category: 'web-dev',
        title: 'Integrasi API, Sinkronisasi Data & Otomasi Cloud',
        tagline: 'Hubungkan software yang terpisah dan otomatisasi input data manual',
        description: 'Otomatisasi pertukaran data antara marketplace, CRM, software akuntansi, dan ekspedisi pengiriman melalui middleware webhook dan microservice khusus.',
        features: [
          'Router webhook kustom & background cron job otomatis',
          'Bot notifikasi WhatsApp, Telegram, dan Google Workspace',
          'Migrasi database, indexing query dan audit kecepatan sistem',
          'Kontainerisasi Docker dan deployment VPS / Cloud berbiaya hemat'
        ],
        icon: 'Zap',
        badge: 'Otomasi',
        typicalTurnaround: '1–2 Minggu',
        startingPrice: 'Mulai Rp 1.500.000'
      }
    ];
  }

  // English fallback
  return [
    {
      id: 'pc-diagnostics-repair',
      category: 'hardware-pc',
      title: 'Component-Level Hardware Repair & Diagnostics',
      tagline: 'Deep oscilloscopic board testing, micro-soldering, and thermal recovery',
      description: 'Specialized hardware troubleshooting from failed VRM power phases and dead capacitors to GPU re-thermal pads, CPU socket pins, and liquid damage remediation.',
      features: [
        'Comprehensive multi-point bench diagnostic within 24h',
        'SMD & micro-soldering component replacement',
        'No-POST, blue screen (BSOD) & kernel panic debugging',
        'Ultrasonic PCB cleaning and corrosion treatment'
      ],
      icon: 'Cpu',
      badge: 'Hardware Lab',
      typicalTurnaround: '24–48 Hours',
      startingPrice: 'From $65 (Diagnostic credited toward repair)'
    },
    {
      id: 'pc-tuneup-cooling',
      category: 'hardware-pc',
      title: 'Thermal Optimization, Custom Builds & Upgrades',
      tagline: 'Unlock peak clock speeds with zero throttling and silent acoustics',
      description: 'Custom CAD workstation assembly, gaming rig builds, liquid cooling loop maintenance, Kryonaut/PTM7950 phase-change thermal repasting, and NVMe/RAM bandwidth tuning.',
      features: [
        'Industrial-grade thermal repasting & thermal putty swap',
        'Bespoke workstation architecture (AI, 3D Rendering, CAD)',
        'BIOS & XMP/EXPO memory stability validation',
        'Dust-free positive air pressure fan curve profiling'
      ],
      icon: 'Flame',
      badge: 'Performance',
      typicalTurnaround: '1–2 Days',
      startingPrice: 'From $85'
    },
    {
      id: 'network-security-smb',
      category: 'hardware-pc',
      title: 'SMB Network Setup & Wi-Fi Mesh Maintenance',
      tagline: 'Enterprise-grade throughput, segregated VLANs, and firewall hardening',
      description: 'Design and deployment of robust office network infrastructures using Ubiquiti UniFi, MikroTik, or pfSense. Secure isolated guest portals, VPNs, and structured cabling.',
      features: [
        'Multi-SSID & isolated VLAN segmentation for IoT/POS',
        'Managed Gigabit/10G PoE switch & router configuration',
        'Site-to-site encrypted WireGuard/IPsec VPN tunnels',
        'RF Wi-Fi spectrum heat mapping & roaming tuning'
      ],
      icon: 'Network',
      badge: 'Infrastructure',
      typicalTurnaround: 'Scheduled Deployment',
      startingPrice: 'From $220'
    },
    {
      id: 'data-recovery-os',
      category: 'hardware-pc',
      title: 'Secure Data Recovery & System Restoration',
      tagline: 'Bit-for-bit raw cloning, corrupted partition fixes, and forensic migration',
      description: 'Emergency data extraction from failing HDDs, clicking drives, corrupted NTFS/EXT4 volumes, and seamless bit-level migration to high-speed NVMe storage.',
      features: [
        'Non-destructive direct raw image cloning',
        'Partition table recovery & BitLocker/FileVault salvage',
        'Clean OS re-imaging with optimized debloated setups',
        'Automated local & encrypted 3-2-1 backup implementation'
      ],
      icon: 'HardDrive',
      badge: 'Critical Rescue',
      typicalTurnaround: '12–36 Hours',
      startingPrice: 'From $110'
    },
    {
      id: 'web-pos-systems',
      category: 'web-dev',
      title: 'Custom Point-of-Sale (POS) Web Applications',
      tagline: 'Zero-subscription bespoke POS with offline sync and barcode integration',
      description: 'Tailored Point-of-Sale software built specifically for your retail, cafe, or boutique store workflow. Includes offline IndexedDB sync, receipt printing, and cashier permissions.',
      features: [
        'Instant offline transaction queue with automatic cloud sync',
        'Hardware integration (ESC/POS thermal printers, USB scanners)',
        'Custom inventory SKU variant management and stock alerts',
        'Zero monthly licensing fees — 100% owned by your business'
      ],
      icon: 'Store',
      badge: 'Flagship App',
      typicalTurnaround: '2–4 Weeks MVP',
      startingPrice: 'From $1,450'
    },
    {
      id: 'asset-management-erp',
      category: 'web-dev',
      title: 'Asset Management & Inventory Tracking Portals',
      tagline: 'Streamlined QR/RFID tracking, audit logs, and maintenance lifecycle schedules',
      description: 'Eliminate lost equipment and spreadsheet chaos. Modern cloud platforms with mobile camera QR scanning, automated depreciation calculations, and check-in/out workflows.',
      features: [
        'Dynamic QR code generation & camera scanner integration',
        'Maintenance schedule alerts & repair ticket histories',
        'Role-based access control (Admins, Technicians, Auditors)',
        'Automated PDF/Excel audit reports & export pipelines'
      ],
      icon: 'Boxes',
      badge: 'Enterprise SMB',
      typicalTurnaround: '3–5 Weeks',
      startingPrice: 'From $1,800'
    },
    {
      id: 'fullstack-web-apps',
      category: 'web-dev',
      title: 'Full-Stack Custom SaaS & Operational Dashboards',
      tagline: 'High-speed React, TypeScript, Node.js, and SQL/NoSQL architectures',
      description: 'From customer booking portals to internal workflow automations. Fast, responsive, secure web platforms engineered to automate manual business bottlenecks.',
      features: [
        'Modern TypeScript & React/Next.js frontend with sub-second load times',
        'Robust Node/Express or serverless backend APIs',
        'Payment gateways (Stripe, PayPal, QuickBooks API)',
        'Automated email/SMS notification queues (Twilio, SendGrid)'
      ],
      icon: 'Code2',
      badge: 'Custom Architecture',
      typicalTurnaround: '2–6 Weeks',
      startingPrice: 'From $1,200'
    },
    {
      id: 'api-automation-cloud',
      category: 'web-dev',
      title: 'API Integrations, Data Sync & Cloud Optimization',
      tagline: 'Connect disconnected software and automate tedious data entry',
      description: 'Automate synchronization between your inventory, CRM, accounting software, and shipping couriers via custom middleware webhooks and microservices.',
      features: [
        'Custom webhook routers & automated background cron workers',
        'Google Workspace, Slack & WhatsApp notification bots',
        'Database migration, query indexing and speed auditing',
        'Docker containerization and Cloud Run / VPS deployment'
      ],
      icon: 'Zap',
      badge: 'Automation',
      typicalTurnaround: '1–2 Weeks',
      startingPrice: 'From $650'
    }
  ];
};

export const getValuePropsData = (lang: Language): ValuePropItem[] => {
  if (lang === 'id') {
    return [
      {
        id: 'dual-expertise',
        title: 'Keahlian Ganda Hardware & Arsitek Software Web',
        subtitle: 'Penguasaan Teknologi Menyeluruh Ujung ke Ujung',
        description: 'Tidak ada saling lempar tanggung jawab antara developer software dan teknisi IT. Kami memahami rangkaian sirkuit pada motherboard PC sekaligus arsitektur event loop asinkron pada aplikasi web.',
        metrics: 'Pengalaman Teruji 10+ Tahun',
        icon: 'Layers'
      },
      {
        id: 'rapid-turnaround',
        title: 'Diagnosa Cepat & Pengerjaan Sprint Terstruktur',
        subtitle: 'Tanpa Birokrasi Rumit, Efisien & Tepat Waktu',
        description: 'Diagnostik bench hardware diselesaikan dalam 24 jam. Aplikasi web dikembangkan dalam milestone mingguan transparan dengan preview staging live yang dapat Anda uji langsung.',
        metrics: 'Garansi Diagnosa < 24 Jam',
        icon: 'Clock'
      },
      {
        id: 'smb-focused-pricing',
        title: 'Harga Transparan & Ramah untuk UMKM / Bisnis',
        subtitle: 'Bebas dari Biaya Langganan Bulanan SaaS yang Mencekik',
        description: 'Estimasi biaya pasti di awal, tarif servis transparan, dan aplikasi web yang 100% menjadi aset milik bisnis Anda tanpa biaya sewa wajib bulanan. Anda memiliki penuh kode, database, dan hardware Anda.',
        metrics: '100% Kepemilikan Hak Cipta & Source Code',
        icon: 'ShieldCheck'
      },
      {
        id: 'direct-engineer-support',
        title: 'Dukungan Teknis Langsung 1-on-1 dengan Senior Engineer',
        subtitle: 'Bicara Langsung dengan Ahli, Bukan Bot atau CS Umum',
        description: 'Ketika Anda menghubungi kami, Anda berbicara langsung dengan engineer yang menangani hardware Anda atau menulis kode aplikasi Anda. Dilengkapi garansi teknis pasca-pengerjaan.',
        metrics: '99.4% Kepuasan Klien Positif',
        icon: 'Headphones'
      }
    ];
  }

  return [
    {
      id: 'dual-expertise',
      title: 'Hardware Veteran Meets Senior Web Architect',
      subtitle: 'End-to-End Holistic Tech Mastery',
      description: 'No finger-pointing between software developers and IT hardware technicians. We understand both the silicon circuitry on your motherboard and the distributed async event loop in your web application.',
      metrics: '10+ Years Combined Experience',
      icon: 'Layers'
    },
    {
      id: 'rapid-turnaround',
      title: 'Rapid Diagnostics & Agile Delivery Sprints',
      subtitle: 'Zero Bureaucracy, Pure Efficiency',
      description: 'Hardware bench diagnostics conducted within 24 hours. Web applications developed in transparent weekly milestone sprints with clickable staging previews throughout.',
      metrics: '<24h Diagnostic Guarantee',
      icon: 'Clock'
    },
    {
      id: 'smb-focused-pricing',
      title: 'Transparent, SMB-Friendly Fixed Pricing',
      subtitle: 'Say Goodbye to Predatory SaaS Retainers',
      description: 'Upfront diagnostic quotes, flat-rate hardware repairs, and 100% owned web applications with zero forced ongoing vendor lock-in. You own your code, database, and hardware.',
      metrics: '100% IP Ownership for Clients',
      icon: 'ShieldCheck'
    },
    {
      id: 'direct-engineer-support',
      title: 'Direct 1-on-1 Senior Technical Support',
      subtitle: 'No Tier-1 Call Centers or Chatbots',
      description: 'When you message or call for support, you speak directly with the engineer who soldered your motherboard or wrote your application codebase. Comprehensive warranty included.',
      metrics: '99.4% Client Satisfaction',
      icon: 'Headphones'
    }
  ];
};

export const getPortfolioData = (lang: Language): PortfolioItem[] => {
  if (lang === 'id') {
    return [
      {
        id: 'apex-pos',
        title: 'ApexPOS: Sistem Kasir Web Retail & Resto Tanpa Lag',
        category: 'web-app',
        clientType: 'Jaringan Cafe & Toko Kelontong Spesialis',
        summary: 'Aplikasi kasir web modern berkinerja tinggi yang dibangun dengan React, IndexedDB, dan WebSockets. Beroperasi lancar saat internet offline dan otomatis menyinkronkan data penjualan saat online kembali.',
        challenge: 'Klien sering mengalami koneksi internet terputus yang melumpuhkan antrean kasir, ditambah biaya langganan software kasir vendor lain sebesar 3% dari total omset yang sangat membebani.',
        solution: 'Mengembangkan web app lokal-first dengan integrasi printer termal ESC/POS, barcode scanner, rekap kasir harian, dan sinkronisasi otomatis ke cloud database Supabase/PostgreSQL.',
        impactMetrics: [
          { label: 'Ketahanan Offline', value: '100% Uptime' },
          { label: 'Kecepatan Transaksi', value: '+45% Lebih Cepat' },
          { label: 'Hemat Biaya SaaS', value: 'Hemat Rp 45jt / thn' }
        ],
        tags: ['React', 'TypeScript', 'IndexedDB', 'Tailwind', 'WebSockets', 'ESC/POS'],
        imagePlaceholderColor: 'from-blue-600 to-indigo-900',
        interactiveDemo: 'pos'
      },
      {
        id: 'asset-guard',
        title: 'AssetGuard: ERP Pelacakan Peralatan & Aset Berbasis QR',
        category: 'web-app',
        clientType: 'Perusahaan Kontraktor HVAC & Elektrikal',
        summary: 'Sistem pelacakan aset berbasis cloud dengan pemindaian QR menggunakan kamera smartphone, penjadwalan servis otomatis, formulir peminjaman digital, dan alarm garansi habis.',
        challenge: 'Peralatan kerja yang sering hilang dan terlewatnya jadwal pemeliharaan armada operasional menyebabkan kerugian biaya penggantian alat hingga ratusan juta rupiah per tahun.',
        solution: 'Merancang dashboard web responsif dengan generator QR instan, log check-in/out teknisi, penandaan lokasi, dan alarm perawatan berkala otomatis.',
        impactMetrics: [
          { label: 'Alat Hilang', value: 'Turun 82%' },
          { label: 'Aset Terdata', value: '1.250+ Unit' },
          { label: 'Waktu Audit', value: '2 Jam (Semula 3 Hari)' }
        ],
        tags: ['React', 'Node.js', 'PostgreSQL', 'QR Engine', 'Cloud Run', 'ChartJS'],
        imagePlaceholderColor: 'from-emerald-600 to-teal-950',
        interactiveDemo: 'asset'
      },
      {
        id: 'cad-ryzen-workstation',
        title: 'Rakit PC Workstation CAD Ryzen 9 & Optimasi Termal',
        category: 'hardware',
        clientType: 'Firma Arsitektur & Rekayasa Teknik',
        summary: 'Perakitan workstation khusus dual-loop yang dirancang untuk rendering 24/7 SolidWorks & V-Ray, dipadukan dengan peredam kebisingan dan profiling kurva termal optimal.',
        challenge: 'Komputer rakitan pabrikan sebelumnya mengalami panas ekstrem (95°C) dan throttling saat render multi-core, menyebabkan aplikasi crash dan suara kipas yang sangat bising.',
        solution: 'Merakit sistem pendingin AIO 420mm khusus, undervolting kurva CPU untuk boost 5.4GHz yang stabil, serta pemasangan memori ECC berkecepatan tinggi.',
        impactMetrics: [
          { label: 'Suhu Saat Render Maksimal', value: '64°C (Turun dari 95°C)' },
          { label: 'Throughput Render', value: '+32% Lebih Cepat' },
          { label: 'Tingkat Kebisingan', value: '<28dB Sangat Hening' }
        ],
        tags: ['Custom Hardware', 'Thermal Profiling', 'BIOS Undervolting', 'Workstation Build'],
        imagePlaceholderColor: 'from-amber-600 to-orange-950',
        interactiveDemo: 'rig'
      },
      {
        id: 'smb-unifi-infrastructure',
        title: 'Jaringan 10GbE Klinik Medis & Segmentasi VLAN Terisolasi',
        category: 'network',
        clientType: 'Klinik Gigi & Pusat Radiologi Digital',
        summary: 'Pembenahan total infrastruktur jaringan dengan segmentasi VLAN terisolasi untuk data radiologi X-Ray digital, Wi-Fi pasien, komputer staf, dan sistem telepon VoIP.',
        challenge: 'Pengiriman hasil rontgen 3D panoramik sering mengalami lag karena bottleneck kabel lama 100Mbps, serta Wi-Fi pasien yang mengganggu kestabilan sistem kasir.',
        solution: 'Memasang aggregation switch 10Gbps SFP+, penarikan kabel Cat6A shielded, UniFi Wi-Fi 6 AP dengan isolasi tamu, dan firewall hardware dengan backup offsite harian otomatis.',
        impactMetrics: [
          { label: 'Kecepatan Kirim X-Ray', value: '0.8 Detik (Semula 24s)' },
          { label: 'Isolasi Keamanan Data', value: 'Standar Medis Ketat' },
          { label: 'Uptime Jaringan', value: '99.99%' }
        ],
        tags: ['Ubiquiti UniFi', '10GbE SFP+', 'VLAN Routing', 'Firewall Rules', 'Cat6A Cabling'],
        imagePlaceholderColor: 'from-purple-600 to-slate-900',
        interactiveDemo: 'network'
      }
    ];
  }

  return [
    {
      id: 'apex-pos',
      title: 'ApexPOS: Retail & Bistro Point-of-Sale System',
      category: 'web-app',
      clientType: 'Urban Specialty Grocer & Cafe Chain',
      summary: 'A resilient, zero-lag web POS built with React, IndexedDB, and WebSockets. Seamlessly operates during internet dropouts with instant background syncing upon reconnection.',
      challenge: 'Client suffered from frequent fiber line dropouts that paralyzed sales terminals, alongside steep 3% monthly software subscription fees from proprietary POS vendors.',
      solution: 'Built a local-first web app with hardware ESC/POS thermal printing, barcode scanning, cashier session reconciliations, and automatic cloud backup to Supabase/PostgreSQL.',
      impactMetrics: [
        { label: 'Offline Resiliency', value: '100% Uptime' },
        { label: 'Checkout Speed', value: '+45% Faster' },
        { label: 'Annual SaaS Saved', value: '$3,600 / yr' }
      ],
      tags: ['React', 'TypeScript', 'IndexedDB', 'Tailwind', 'WebSockets', 'ESC/POS'],
      imagePlaceholderColor: 'from-blue-600 to-indigo-900',
      interactiveDemo: 'pos'
    },
    {
      id: 'asset-guard',
      title: 'AssetGuard: Heavy Equipment & Tool Tracking ERP',
      category: 'web-app',
      clientType: 'Commercial HVAC & Electrical Contractor',
      summary: 'Cloud-based asset tracking suite with mobile camera QR scanning, automated maintenance scheduling, digital sign-outs, and warranty expiration alerts.',
      challenge: 'Lost tooling and missed preventative maintenance schedules across 14 service vans were costing the contractor over $40,000 annually in misplaced hardware.',
      solution: 'Architected a mobile-responsive web dashboard with instant barcode/QR generation, technician check-in/out logs, GPS location pinning, and automated maintenance triggers.',
      impactMetrics: [
        { label: 'Lost Equipment', value: '-82% Reduction' },
        { label: 'Active Assets', value: '1,250+ Tracked' },
        { label: 'Audit Time', value: '2 Hours (was 3 Days)' }
      ],
      tags: ['React', 'Node.js', 'PostgreSQL', 'QR Engine', 'Cloud Run', 'ChartJS'],
      imagePlaceholderColor: 'from-emerald-600 to-teal-950',
      interactiveDemo: 'asset'
    },
    {
      id: 'cad-ryzen-workstation',
      title: 'Ryzen 9 7950X Custom CAD Workstation & Thermal Overhaul',
      category: 'hardware',
      clientType: 'Architectural Engineering Firm',
      summary: 'Bespoke custom dual-loop workstation build designed for 24/7 SolidWorks & V-Ray rendering, paired with noise dampening and thermal profiling.',
      challenge: 'Pre-built OEM computers were throttling severely at 95°C under multi-core render loads, crashing projects and creating unbearable office fan noise.',
      solution: 'Engineered custom 420mm AIO liquid loop with custom ducting, undervolted CPU curve optimizer for higher sustained 5.4GHz boost, and installed ECC RAM.',
      impactMetrics: [
        { label: 'Peak Temp Under Load', value: '64°C (Down from 95°C)' },
        { label: 'Render Multi-tasking', value: '+32% Throughput' },
        { label: 'Acoustics', value: '<28dB Ultra-Quiet' }
      ],
      tags: ['Custom Hardware', 'Thermal Profiling', 'BIOS Undervolting', 'Workstation Build'],
      imagePlaceholderColor: 'from-amber-600 to-orange-950',
      interactiveDemo: 'rig'
    },
    {
      id: 'smb-unifi-infrastructure',
      title: 'Medical Clinic 10GbE Network & Isolated VLAN Deployment',
      category: 'network',
      clientType: 'Private Dental & Imaging Clinic',
      summary: 'Full infrastructure overhaul featuring segregated HIPAA-compliant VLANs for digital X-Ray imaging, patient Wi-Fi, staff terminals, and VoIP phone systems.',
      challenge: 'Digital 3D panoramic X-Rays were stalling workstations due to 100Mbps bottlenecked cabling, and patient phones were creating broadcast storm interference.',
      solution: 'Installed 10Gbps SFP+ aggregation switch, Cat6A shielded runs, UniFi Wi-Fi 6 APs with roaming isolation, and hardware firewall with automated daily offsite backup.',
      impactMetrics: [
        { label: 'Image Transfer', value: '0.8s (was 24s)' },
        { label: 'VLAN Isolation', value: 'Strict HIPAA' },
        { label: 'Network Uptime', value: '99.99%' }
      ],
      tags: ['Ubiquiti UniFi', '10GbE SFP+', 'VLAN Routing', 'Firewall Rules', 'Cat6A Cabling'],
      imagePlaceholderColor: 'from-purple-600 to-slate-900',
      interactiveDemo: 'network'
    }
  ];
};

export const getTestimonialsData = (lang: Language): Testimonial[] => {
  if (lang === 'id') {
    return [
      {
        id: 'test-1',
        clientName: 'Bapak Hendra Kusuma',
        role: 'Direktur Operasional',
        company: 'Harbor City Cafe & Resto',
        avatarText: 'HK',
        serviceCategory: 'Web Development',
        rating: 5,
        date: 'Februari 2026',
        comment: 'Pak Mahmud membuatkan sistem POS kasir khusus dari nol. Saat jam sibuk pagi hari transaksi sangat lancar, print struk seketika, dan tidak pernah ngadat walaupun internet cafe sedang gangguan. Bebas biaya langganan bulanan membuat kami menghemat jutaan rupiah setiap bulannya.',
        verifiedProject: 'Aplikasi Web Kasir POS Kustom'
      },
      {
        id: 'test-2',
        clientName: 'Ir. Rian Ardianto',
        role: 'Managing Partner',
        company: 'Studio Desain & Render CAD',
        avatarText: 'RA',
        serviceCategory: 'PC Repair & Hardware',
        rating: 5,
        date: 'Januari 2026',
        comment: 'PC Workstation 64GB kami mendadak mati total setelah tersiram air, dua tempat servis lain menyuruh langsung ganti motherboard baru yang sangat mahal. Pak Mahmud dengan teliti menemukan jalur dioda yang terbakar, melakukan micro-soldering, dan semua data proyek penting berhasil diselamatkan dalam waktu 30 jam. Sangat profesional!',
        verifiedProject: 'Servis Motherboard Komponen & Data Recovery'
      },
      {
        id: 'test-3',
        clientName: 'Ibu Ratna Dewi',
        role: 'General Manager',
        company: 'PT Logistik Distribusi Cepat',
        avatarText: 'RD',
        serviceCategory: 'Web Development',
        rating: 5,
        date: 'Desember 2025',
        comment: 'Aplikasi pelacakan aset dari MMComp Solutions sukses menggantikan spreadsheet Excel kami yang berantakan di 3 gudang. Teknisi tinggal scan QR code lewat HP, ada reminder servis otomatis, dan barang hilang berkurang drastis.',
        verifiedProject: 'Portal ERP Manajemen Aset'
      },
      {
        id: 'test-4',
        clientName: 'drg. Maya Anggraini, Sp.Ort',
        role: 'Pimpinan Klinik',
        company: 'Klinik Gigi & Radiologi Medis',
        avatarText: 'MA',
        serviceCategory: 'Network Infrastructure',
        rating: 5,
        date: 'November 2025',
        comment: 'Sebelumnya pengiriman hasil rontgen 3D sering membuat jaringan klinik macet. Pak Mahmud datang langsung, menata ulang segmen VLAN, memasang switch 10Gbps, dan mengamankan Wi-Fi pasien. Pengerjaannya rapi, cepat, dan paham betul kebutuhan teknis medis.',
        verifiedProject: 'Instalasi Jaringan UniFi 10GbE Klinik'
      }
    ];
  }

  return [
    {
      id: 'test-1',
      clientName: 'Marcus Vance',
      role: 'Operations Director',
      company: 'Harbor City Provisions',
      avatarText: 'MV',
      serviceCategory: 'Web Development',
      rating: 5,
      date: 'February 2026',
      comment: 'Muh. Mahmud built our custom POS system from the ground up. It handles our peak morning rush with instant thermal printing and never lags, even when our internet hiccuped. Having 100% ownership without paying monthly per-terminal fees saved us thousands this year alone.',
      verifiedProject: 'Custom POS Web Platform'
    },
    {
      id: 'test-2',
      clientName: 'Dr. Elena Rostova',
      role: 'Managing Partner',
      company: 'AeroCAD Dynamics',
      avatarText: 'ER',
      serviceCategory: 'PC Repair & Hardware',
      rating: 5,
      date: 'January 2026',
      comment: 'When our primary 64GB simulation workstation shorted out due to a spilled beverage, two other shops told us to throw away the motherboard. Mahmud diagnosed the burned diode, micro-soldered a replacement, and recovered all our NVMe projects within 30 hours. Absolute lifesaver.',
      verifiedProject: 'Component-Level Motherboard Repair'
    },
    {
      id: 'test-3',
      clientName: 'Julian Hayes',
      role: 'Founder & CEO',
      company: 'Apex Logistics Group',
      avatarText: 'JH',
      serviceCategory: 'Web Development',
      rating: 5,
      date: 'December 2025',
      comment: 'The AssetGuard tracker Mahmud developed replaced our chaotic Excel tracking sheets across 3 warehouse locations. Scanning QR codes directly with phones and receiving automatic maintenance alerts cut our equipment loss to near zero.',
      verifiedProject: 'Enterprise Asset & Equipment Portal'
    },
    {
      id: 'test-4',
      clientName: 'Sarah Lin, D.D.S.',
      role: 'Clinic Director',
      company: 'Modern Dental Care',
      avatarText: 'SL',
      serviceCategory: 'Network Infrastructure',
      rating: 5,
      date: 'November 2025',
      comment: 'Our dental 3D scans used to freeze the entire clinic network. Mahmud came on-site, re-architected our VLANs, installed high-speed 10Gb switches, and locked down our guest Wi-Fi. Fast, polite, and deeply knowledgeable.',
      verifiedProject: 'UniFi 10GbE Network Deployment'
    }
  ];
};

export const getFaqsData = (lang: Language) => {
  if (lang === 'id') {
    return [
      {
        question: 'Bagaimana prosedur dan alur diagnostik hardware PC?',
        answer: 'Anda dapat membawa PC, laptop, atau komponen ke workshop kami, atau mengatur penjemputan. Kami melakukan pengujian jalur daya multi-point, logging suhu termal, stabilitas memori, dan benchmark kesehatan storage dalam 24 jam. Biaya pengecekan digratiskan 100% jika Anda melanjutkan servis.'
      },
      {
        question: 'Mengapa memilih pembuatan aplikasi web custom dibanding langganan software SaaS?',
        answer: 'Software langganan bulanan umumnya membebankan biaya per kasir/pengguna yang makin lama makin mahal seiring bertumbuhnya bisnis Anda, serta alurnya kaku. Aplikasi web custom dari kami dibuat pas sesuai SOP bisnis Anda, tanpa biaya langganan bulanan wajib, dan Anda memegang 100% kepemilikan kode sumber dan database.'
      },
      {
        question: 'Apakah data saya aman saat menggunakan kompresor file Excel di website ini?',
        answer: 'Ya, 100% sangat aman! Semua Free Tools kami (termasuk Kompresor Dokumen Excel) bekerja sepenuhnya di sisi klien (client-side) di dalam memori browser Anda menggunakan JavaScript & WebAssembly. File dan spreadsheet Anda TIDAK PERNAH dikirim atau diunggah ke server mana pun.'
      },
      {
        question: 'Apakah melayani panggilan ke lokasi (On-Site Visit) untuk kantor atau toko?',
        answer: 'Ya. Kami melayani kunjungan teknis terjadwal maupun panggilan darurat untuk kantor, toko retail, cafe, klinik, dan workshop di wilayah metro untuk instalasi jaringan, setup workstation, dan pemeliharaan server.'
      }
    ];
  }

  return [
    {
      question: 'How does the hardware diagnostic process work?',
      answer: 'Bring your PC, laptop, or server to our lab or schedule a local courier pick-up. We run multi-point power phase testing, thermal logging, memory stability passes, and drive health benchmarks within 24 hours. The diagnostic fee is credited 100% toward any approved repair.'
    },
    {
      question: 'Why choose a custom-built web app instead of a SaaS subscription?',
      answer: 'Commercial SaaS software often charges monthly per-user or per-terminal fees that balloon as your business grows, while forcing you into rigid workflows. Our bespoke web applications (POS, Asset Management, Portals) are tailored exactly to your operations, have zero mandatory ongoing subscription fees, and give you 100% source code and database ownership.'
    },
    {
      question: 'Is my data safe during the Excel compression and diagnostic tools?',
      answer: 'Yes, 100%! All our Free Tools (including the Excel Compressor) run strictly client-side within your browser using modern WebAssembly and JavaScript algorithms. Your spreadsheets, files, and documents NEVER touch any external server or third-party cloud.'
    },
    {
      question: 'Do you offer on-site technical support for businesses?',
      answer: 'Yes. We provide scheduled and emergency on-site visits for offices, retail stores, clinics, and manufacturing facilities across the metro area for network setup, workstation deployments, and server maintenance.'
    }
  ];
};

export const getFreeToolsData = (lang: Language): FreeToolLeadMagnet[] => {
  if (lang === 'id') {
    return [
      {
        id: 'excel-compressor',
        title: 'Kompresor Dokumen Excel (.xlsx)',
        description: 'Optimasi file spreadsheet multi-layer: deduplikasi teks SST, pembersihan sel ghost range, kompresi gambar embedded, dan kompresi zip DEFLATE Level 9 langsung di browser.',
        category: 'Client-Side Utility',
        badge: 'Unggulan',
        activeComponent: true
      },
      {
        id: 'sub-tool-subnet-calc',
        title: 'Kalkulator Subnet IP & CIDR Visual',
        description: 'Hitung subnet mask, rentang IP host yang dapat dialokasikan, broadcast address, dan aturan segmentasi VLAN kantor SMB dalam hitungan detik.',
        category: 'Network Engineering',
        badge: 'Utilitas Praktis'
      },
      {
        id: 'sub-tool-json-sql',
        title: 'Konverter JSON Schema ke SQL & TypeScript',
        description: 'Ubah payload JSON mentah atau file CSV menjadi interface TypeScript yang type-safe dan migration script SQL PostgreSQL/MySQL secara otomatis.',
        category: 'Web Development',
        badge: 'Utilitas Dev'
      },
      {
        id: 'sub-tool-psu-calc',
        title: 'Kalkulator Daya Watt PC & Thermal Headroom',
        description: 'Estimasi beban daya watt sesungguhnya untuk GPU & CPU render workstation dengan rekomendasi batas rating 80 Plus Gold/Titanium yang aman.',
        category: 'Hardware Lab',
        badge: 'Diagnostik'
      }
    ];
  }

  return [
    {
      id: 'excel-compressor',
      title: 'Excel Document (.xlsx) Compressor',
      description: 'Multi-layer browser spreadsheet compression: SST deduplication, ghost boundary pruning, media re-encoding, and DEFLATE Level 9 zip packaging in browser memory.',
      category: 'Client-Side Utility',
      badge: 'Featured',
      activeComponent: true
    },
    {
      id: 'sub-tool-subnet-calc',
      title: 'Visual IPv4/IPv6 CIDR Subnet Calculator',
      description: 'Calculate subnet masks, usable host ranges, broadcast addresses, and VLAN segmentation rules for SMB office topologies in real time.',
      category: 'Network Engineering',
      badge: 'Browser Tool'
    },
    {
      id: 'sub-tool-json-sql',
      title: 'JSON Payload to SQL & TypeScript Converter',
      description: 'Transform raw JSON API payloads or CSV exports into strongly typed TypeScript interfaces and normalized SQL table schema migrations instantly.',
      category: 'Web Development',
      badge: 'Developer Tool'
    },
    {
      id: 'sub-tool-psu-calc',
      title: 'PC Power Supply Wattage & Thermal Sizer',
      description: 'Calculate real-world transient power loads for workstation CPUs & GPUs with recommended 80 Plus Gold/Titanium PSU headroom parameters.',
      category: 'Hardware Lab',
      badge: 'Diagnostic Tool'
    }
  ];
};

export const FREE_TOOLS_LEAD_MAGNETS = getFreeToolsData('id');

// Default backwards compatibility exports
export const SERVICES_DATA = getServicesData('id');
export const VALUE_PROPOSITIONS = getValuePropsData('id');
export const PORTFOLIO_ITEMS = getPortfolioData('id');
export const TESTIMONIALS = getTestimonialsData('id');
export const FAQS = getFaqsData('id');
