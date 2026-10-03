export type RoutePath = 
  | '/'
  | '/about'
  | '/services'
  | '/industries'
  | '/work'
  | '/blog'
  | '/faq'
  | '/contact'
  | '/privacy-policy'
  | '/terms-and-conditions'
  | '/terms-of-service'
  | '/cookie-policy'
  | '/industries/tourism-travel'
  | '/industries/hotels-hospitality'
  | '/industries/real-estate-property'
  | '/industries/ecommerce-retail'
  | '/industries/b2b-industrial-safety'
  | '/industries/dining-restaurants'
  | `/blog/${string}`;

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  deliverables?: string[];
}

export interface ClientTrustItem {
  id: string;
  name: string;
  statBadge: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientName?: string;
  oneLiner?: string;
  servicesDelivered?: string;
  result?: string;
  industrySlug?: string;
  location?: string;
  industry?: string;
  resultBadge?: string;
  description?: string;
  imageUrl?: string;
  metrics?: Array<{ label: string; value: string }>;
  deliverablesUsed?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number; // 4 star rating as specified
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  snippet: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  heroHeadline: string;
  heroStat: string;
  description: string;
  whyChoosePoints: string[];
  caseStudyId: string;
  applicableServiceIds: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  customCompany?: string;
  city: string;
  phone: string;
  email: string;
  serviceInterested: string;
  projectDetails: string;
  budget?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName?: string;
  description: string;
  deliverables?: string[];
  fullDeliverables?: string[];
  category?: string;
  bullets?: string[];
  estimatedTimeline?: string;
}

export type CaseStudy = CaseStudyItem;

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp?: string;
}
