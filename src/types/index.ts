export type ImpactPillar = 'For the Forest' | 'For the Animal' | 'For the People';

export interface ScientificTooltip {
  term: string;
  explanation: string;
  source: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ImpactPillar;
  categoryLabel: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  views: number;
  isFeaturedHome: boolean;
  isSpotlight: boolean;
  urgentBadge?: string;
  scientificTooltips?: ScientificTooltip[];
}

export interface Petition {
  id: string;
  slug: string;
  title: string;
  description: string;
  targetSignatures: number;
  currentSignatures: number;
  organizer: string;
  targetEntity: string;
  urgencyLevel: 'Critical' | 'High' | 'Moderate';
  category: ImpactPillar;
  coverImage: string;
  isFeaturedHome: boolean;
  daysLeft: number;
}

export interface GrassrootsCommunity {
  id: string;
  name: string;
  location: string;
  region: string;
  focus: string;
  contactUrl: string;
  memberCount: string;
  verified: boolean;
}

export interface VoiceReport {
  id: string;
  ticketNumber: string;
  title: string;
  description: string;
  category: 'Pembalakan Liar' | 'Kebakaran Gambut' | 'Satwa Liar' | 'Pencemaran Pesisir' | 'Tambang Ilegal';
  locationName: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  dateReported: string;
  isAnonymous: boolean;
  reporterName?: string;
  reporterContact?: string;
  evidenceFiles: {
    id: string;
    type: 'image' | 'video' | 'document';
    url: string;
    caption: string;
  }[];
  status: 'Pending' | 'Verified' | 'Investigating' | 'Rejected';
  verificationSteps: {
    geoMatch: boolean;
    visualIntegrity: boolean;
    groundCorroboration: boolean;
  };
  adminNotes?: string;
}

export interface DataSourceItem {
  id: string;
  name: string;
  shortName: string;
  agency: string;
  description: string;
  metrics: string;
  logo: string;
  url: string;
  apiStatus: 'Synchronized' | 'Realtime Live' | 'Weekly Sync';
  lastSync: string;
}

export interface FactSheetItem {
  id: string;
  title: string;
  edition: string;
  organization: string;
  fileSize: string;
  checksum: string;
  downloadCount: number;
  pdfUrl: string;
  releaseDate: string;
  description: string;
}
