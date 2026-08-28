export interface ServiceItem {
  id: string;
  category: 'hardware-pc' | 'web-dev';
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  badge?: string;
  typicalTurnaround: string;
  startingPrice: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'web-app' | 'hardware' | 'network';
  clientType: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  imagePlaceholderColor: string;
  demoUrl?: string;
  caseStudyDetails?: string[];
  interactiveDemo?: 'pos' | 'asset' | 'rig' | 'network';
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatarText: string;
  serviceCategory: 'Web Development' | 'PC Repair & Hardware' | 'Network Infrastructure';
  rating: number;
  date: string;
  comment: string;
  verifiedProject: string;
}

export interface FreeToolLeadMagnet {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  activeComponent?: boolean;
}

export interface ExcelCompressionResult {
  fileName: string;
  originalSizeBytes: number;
  compressedSizeBytes: number;
  savedBytes: number;
  percentageSaved: number;
  sheetCount: number;
  rowCountTotal: number;
  cellCountTotal: number;
  emptyCellsRemoved: number;
  stylesStripped: boolean;
  compressedBlob: Blob;
  downloadUrl: string;
  processedAt: Date;
}

export interface ValuePropItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  icon: string;
}
