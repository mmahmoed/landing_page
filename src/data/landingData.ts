import { ServiceItem, PortfolioItem, Testimonial, FreeToolLeadMagnet, ValuePropItem } from '../types';

export const BRAND_INFO = {
  name: 'MMComp Solutions',
  shortName: 'MMComp',
  founder: 'Muh. Mahmud',
  credentials: 'B.S. Computer Engineering • CompTIA A+ & Network+ • Full-Stack Systems Architect',
  tagline: 'Engineering High-Performance Web Software & Restoring Mission-Critical Hardware',
  subTagline: 'Precision PC Diagnostics, Component-Level Repair & Bespoke Cloud Web Applications for SMBs & Power Users',
  location: 'Tech Corridor & Metro District • On-Site & Remote Worldwide',
  phone: '085725884039',
  whatsappNumber: '6285725884039',
  whatsappMessage: 'Hi Alex! I am interested in a free consultation for tech repair / custom web app development.',
  email: 'alex@mmcompsolutions.dev',
  hours: 'Mon – Fri: 08:00 AM – 07:00 PM | Sat: 09:00 AM – 04:00 PM (Emergency 24/7 On-Call Available)',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    whatsapp: 'https://wa.me/6285725884039'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  // Hardware & Network
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
    startingPrice: 'Custom Quote / From $220'
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

  // Web & Custom App Development
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

export const VALUE_PROPOSITIONS: ValuePropItem[] = [
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

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Marcus Vance',
    role: 'Operations Director',
    company: 'Harbor City Provisions',
    avatarText: 'MV',
    serviceCategory: 'Web Development',
    rating: 5,
    date: 'February 2026',
    comment: 'Alex built our custom POS system from the ground up. It handles our peak morning rush with instant thermal printing and never lags, even when our internet hiccuped. Having 100% ownership without paying monthly per-terminal fees saved us thousands this year alone.',
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
    comment: 'When our primary 64GB simulation workstation shorted out due to a spilled beverage, two other shops told us to throw away the motherboard. Alex diagnosed the burned diode, micro-soldered a replacement, and recovered all our NVMe projects within 30 hours. Absolute lifesaver.',
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
    comment: 'The AssetGuard tracker Alex developed replaced our chaotic Excel tracking sheets across 3 warehouse locations. Scanning QR codes directly with phones and receiving automatic maintenance alerts cut our equipment loss to near zero.',
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
    comment: 'Our dental 3D scans used to freeze the entire clinic network. Alex came on-site, re-architected our VLANs, installed high-speed 10Gb switches, and locked down our guest Wi-Fi. Fast, polite, and deeply knowledgeable.',
    verifiedProject: 'UniFi 10GbE Network Deployment'
  }
];

export const FREE_TOOLS_LEAD_MAGNETS: FreeToolLeadMagnet[] = [
  {
    id: 'excel-compressor',
    title: 'Excel Document (.xlsx) Compressor',
    category: 'Document Optimization',
    description: 'Strip unused styling metadata, redundant XML caches, and blank grid bloat directly in your browser. 100% private with zero data sent to external servers.',
    badge: 'Featured Live Tool',
    activeComponent: true
  },
  {
    id: 'csv-json-sanitizer',
    title: 'CSV to Clean JSON Streamer',
    category: 'Developer Utility',
    description: 'Parse messy spreadsheets into normalized JSON schemas with automatic data type detection and null-value stripping.',
    badge: 'Client Utility'
  },
  {
    id: 'subnet-calc',
    title: 'IPv4 CIDR & Subnet Calculator',
    category: 'Network Engineering',
    description: 'Calculate subnet masks, broadcast addresses, usable host ranges, and binary representations for office network planning.',
    badge: 'Network Tool'
  },
  {
    id: 'storage-bandwidth-calc',
    title: 'RAID & Backup Storage Estimator',
    category: 'Hardware & Storage',
    description: 'Simulate usable capacity across RAID 1/5/6/10 arrays and estimate rebuild times and bit-rot parity tolerance.',
    badge: 'Storage Tool'
  }
];

export const FAQS = [
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
