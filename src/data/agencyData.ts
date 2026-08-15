import {
  ServiceCategory,
  ClientTrustItem,
  CaseStudyItem,
  TeamMember,
  TestimonialItem,
  FaqItem,
  BlogPost,
  IndustryData,
} from '../types';

import priyankaImg from '../assets/team/priyanka-shirodkar.jpeg';
import arjunImg from '../assets/team/arjun-rawool.jpeg';
import shubhamImg from '../assets/team/shubham-rawool.jpeg';
import rameezImg from '../assets/team/rameez.jpeg';

export const Colors = {
  primaryBg: '#FCFCFD',
  secondaryBg: '#E3E6EE',
  primaryBrand: '#2E3F8C', // Royal Indigo
  secondaryBlue: '#767BA5', // Periwinkle Blue
  borderNeutral: '#BAB8BE',
  primaryText: '#42403F', // Charcoal
  accentLavender: '#D8DCF4',
  accentSoftBlue: '#EEF2FF',
};

export const CLIENT_TRUST_ITEMS: ClientTrustItem[] = [
  { id: '1', name: 'Zatags', statBadge: '+120% Sales' },
  { id: '2', name: 'IK Tours & Travels', statBadge: '+50% Bookings' },
  { id: '3', name: 'Catch Cuisine', statBadge: '+35% Walk-ins' },
  { id: '4', name: 'Hotel', statBadge: '+40% Direct Calls' },
  { id: '5', name: 'Velfire Fire Security Service', statBadge: '+85% Enterprise Leads' },
  { id: '6', name: 'Real Estate Clients', statBadge: 'Trusted by Leading Developers' },
];

export const REAL_ESTATE_CORE_PILLARS: ServiceCategory[] = [
  {
    id: 're-brand-strategy',
    title: 'Brand Strategy',
    icon: 'Compass',
    description: 'Comprehensive market positioning, developer authority, and target buyer personas tailored to high-value property buyers.',
    deliverables: ['Market Research', 'Audience Personas', 'Value Proposition', 'Brand Positioning Playbook']
  },
  {
    id: 're-brand-identity',
    title: 'Brand Identity',
    icon: 'Palette',
    description: 'Bespoke logo design, luxury typography systems, project style guidelines, and print/digital brand guidelines.',
    deliverables: ['Logo & Visual ID', 'Typography Framework', 'Color Systems', 'Brand Guidelines PDF']
  },
  {
    id: 're-campaign-strategy',
    title: 'Campaign Strategy',
    icon: 'Megaphone',
    description: 'Strategic multi-channel campaign conceptualization, launch teasers, offer strategies, and channel deployment plans.',
    deliverables: ['Launch Concepts', 'Key Visuals (KV)', 'Offer Strategies', 'Channel Deployment Plan']
  }
];

export const SERVICES_LIST: ServiceCategory[] = [
  {
    id: 'online-branding',
    title: 'Online Branding',
    icon: 'Globe',
    description: 'Building a credible, consistent, and memorable brand presence across every digital touchpoint.',
    deliverables: ['Digital Brand Guidelines', 'Website & Asset Styling', 'Visual Identity Systems', 'Multi-Touchpoint Consistency']
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: 'Megaphone',
    description: 'Integrated multi-channel campaigns engineered to drive brand awareness, engagement, and customer demand.',
    deliverables: ['Multi-Channel Campaigns', 'Growth Strategy', 'Lead Acquisition Funnels', 'Brand Awareness Programs']
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    icon: 'Share2',
    description: 'Consistent, strategic content creation, short-form video production, and community engagement across platforms.',
    deliverables: ['Content Strategy & Reels', 'Platform Management', 'Community Engagement', 'Social Growth Analytics']
  },
  {
    id: 'consumer-psychology',
    title: 'Consumer Psychology',
    icon: 'Brain',
    description: 'Understanding buyer motivation and cognitive behavior to design high-converting offers and messaging.',
    deliverables: ['Behavioral Buyer Insights', 'Persuasive Message Design', 'Conversion Friction Audits', 'Decision Trigger Mapping']
  },
  {
    id: 'competitor-analysis',
    title: 'Competitor Analysis',
    icon: 'BarChart3',
    description: 'Mapping the competitive landscape to uncover market white spaces and strategic differentiation opportunities.',
    deliverables: ['Competitive Benchmarking', 'Market Gap Identification', 'Share of Voice Audits', 'Positioning White Space']
  },
  {
    id: 'customer-journey',
    title: 'Customer Journey',
    icon: 'Route',
    description: 'Mapping and optimizing every customer touchpoint from initial discovery to retention and advocacy.',
    deliverables: ['Touchpoint Funnel Mapping', 'Conversion Rate Optimization', 'Retention & Advocacy Workflows', 'Omnichannel Experience']
  },
  {
    id: 'stp-marketing',
    title: 'STP (Segmentation, Targeting, Positioning)',
    icon: 'Target',
    description: 'Defining who you serve, identifying high-value audience segments, and establishing unique market positioning.',
    deliverables: ['Audience Segmentation', 'High-Value Target Profiling', 'Core Brand Positioning', 'Value Proposition Framework']
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    icon: 'Layout',
    description: 'High-impact visual design assets across digital, print, collateral, and experience graphics.',
    deliverables: ['Brochures & Sales Kits', 'Social Media Creatives', 'Hoardings & Print', 'Display Assets']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'Share2',
    description: 'Content Marketing, Instagram & Facebook engagement, motion graphics, Reels, and social community growth.',
    deliverables: ['Content Marketing', 'Social Media Management', 'Short-form Reels', 'Motion Graphics']
  },
  {
    id: 'production',
    title: 'Production',
    icon: 'Video',
    description: 'End-to-end commercial video production, site photography, promotional film editing, and audio visual assets.',
    deliverables: ['Video Shoots & Edits', 'Product & Site Photography', 'Floor Plan Design', 'Voiceover & Audio']
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    icon: 'TrendingUp',
    description: 'Data-driven paid ad campaigns (Meta Ads & Google Search/PPC) engineered for qualified buyer acquisition.',
    deliverables: ['Meta Lead Ads', 'Google Search PPC', 'Retargeting Funnels', 'WhatsApp Lead Automation']
  },
  {
    id: 'sales-support',
    title: 'Sales Support',
    icon: 'Briefcase',
    description: 'Sales decks, WhatsApp CRM integration, broker kits, and lead qualification automation workflows.',
    deliverables: ['Pitch Decks & Sales Kits', 'WhatsApp CRM Integration', 'Broker Partner Packs', 'Lead Verification Bots']
  },
  {
    id: 'offline-marketing',
    title: 'Offline Marketing',
    icon: 'MapPin',
    description: 'High-visibility billboard OOH, airport display concepts, event booth setups, and newspaper features.',
    deliverables: ['OOH Billboard Concepts', 'Standees & Site Branding', 'Newspaper & Magazine Ads', 'Event Collateral']
  },
  {
    id: 'technology-web',
    title: 'Technology & Web',
    icon: 'Globe',
    description: 'Ultra-fast, responsive web design, conversion-focused landing pages, and interactive UI/UX experiences.',
    deliverables: ['High-Converting Landing Pages', 'Corporate Websites', 'UI/UX Design', 'CRM Analytics Tracking']
  },
  {
    id: 'consulting',
    title: 'Consulting',
    icon: 'Lightbulb',
    description: 'High-level brand consulting, growth advisory, marketing audits, and strategic executive mentoring.',
    deliverables: ['Growth Audits', 'Go-To-Market Plans', 'Marketing Spend Optimization', 'Executive Advisory']
  }
];

export const CASE_STUDIES_LIST: CaseStudyItem[] = [
  {
    id: 'zatags',
    clientName: 'Zatags',
    title: 'Scaling E-Commerce Revenue & Direct Conversion',
    oneLiner: 'Boosted online store revenue with targeted social growth and high-ROI pay-per-click ad funnels.',
    servicesDelivered: 'Social Media Management + PPC',
    result: '+120% Sales Growth',
    industrySlug: 'ecommerce-retail'
  },
  {
    id: 'ik-tours',
    clientName: 'IK Tours & Travels',
    title: 'Tourism Lead Generation & Destination Campaigns',
    oneLiner: 'Expanded seasonal travel package inquiries via hyper-targeted social media management and destination campaigns.',
    servicesDelivered: 'Social Media Management',
    result: '+50% Bookings',
    industrySlug: 'tourism-travel'
  },
  {
    id: 'velfire',
    clientName: 'Velfire Fire Security Service',
    title: 'Enterprise Safety Brand Positioning & B2B Leads',
    oneLiner: 'Established corporate authority in industrial fire safety to capture high-value commercial B2B contracts.',
    servicesDelivered: 'Social Media Management',
    result: '+85% Enterprise Leads',
    industrySlug: 'b2b-industrial-safety'
  },
  {
    id: 'real-estate-clients',
    clientName: 'Real Estate Clients',
    title: 'Luxury Property Launch & Multi-Million Dollar Sales',
    oneLiner: 'Accelerated property sales velocity across premium residential developments with full-stack digital and offline campaigns.',
    servicesDelivered: 'Creative, Branding, Naming, Website, Social Media, PPC',
    result: 'Trusted by Leading Developers',
    industrySlug: 'real-estate-property'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'priyanka',
    name: 'Priyanka Shirodkar',
    role: 'Founder & Creative Lead',
    bio: 'Priyanka shapes brand identities and visual stories with precision design aesthetics, overseeing narrative strategy across all client portfolios.',
    imageSrc: priyankaImg
  },
  {
    id: 'arjun',
    name: 'Arjun Rawool',
    role: 'Founder & Growth Strategist',
    bio: 'Arjun leads performance marketing and data-driven growth frameworks, specializing in customer acquisition and ROI optimization.',
    imageSrc: arjunImg
  },
  {
    id: 'shubham',
    name: 'Shubham Rawool',
    role: 'Art Director',
    bio: 'Shubham crafts high-conversion key visuals, motion graphics, and multi-channel campaign assets that elevate brand presence.',
    imageSrc: shubhamImg
  },
  {
    id: 'rameez',
    name: 'Rameez Sarguru',
    role: 'UI/UX & Web Designer',
    bio: 'Rameez designs and builds intuitive, high-converting web experiences — from UI/UX systems to full website development.',
    imageSrc: rameezImg
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: '1',
    quote: "Beacon & Bolt completely transformed our digital presence. Our direct bookings surged by 40% within the first two months of launching our new social media campaign.",
    author: "Rohan Sawant",
    title: "General Manager",
    company: "Hotel Bhavyam",
    rating: 4
  },
  {
    id: '2',
    quote: "The strategic positioning and Meta lead ads delivered by Arjun and Priyanka’s team made us trusted by leading developers and buyers alike. Unmatched professionalism.",
    author: "Vikram Desai",
    title: "Managing Director",
    company: "Coastal Real Estate Developers",
    rating: 4
  },
  {
    id: '3',
    quote: "Our e-commerce store saw a 120% sales uplift. Their team understands ROI, creative design, and execution down to every detail.",
    author: "Ananya Mehta",
    title: "Founder",
    company: "Zatags",
    rating: 4
  }
];

export const FAQS_LIST: FaqItem[] = [
  {
    question: "What services does Beacon & Bolt offer?",
    answer: "Beacon & Bolt provides end-to-end agency solutions across 11 core categories: Brand Strategy, Brand Identity, Campaign Strategy, Creative Design, Digital Marketing (Content Marketing, Social Media & Motion Graphics), Production, Performance Marketing (Meta & Google Search PPC), Sales Support, Offline Marketing, Technology & Web, and Growth Consulting."
  },
  {
    question: "How long does a typical branding and launch campaign take?",
    answer: "Standard brand identity and digital launch campaigns are completed in 3 to 4 weeks. This includes market research, naming, visual identity guidelines, website setup, and launch performance funnels."
  },
  {
    question: "Which geographic areas does Beacon & Bolt serve?",
    answer: "While we serve clients globally and nationally, our primary regional hub serves Goa, Sindhudurg, Kankavli, Mumbai, Pune, and neighboring growth markets."
  },
  {
    question: "How do you track campaign ROI and lead quality?",
    answer: "We provide transparent, real-time dashboard reporting and double-step lead qualification systems (including interactive landing pages and WhatsApp bot verification) to ensure high-intent lead delivery."
  },
  {
    question: "Can Beacon & Bolt handle both digital and offline advertising?",
    answer: "Yes. We execute unified campaigns combining Meta and Google PPC ads with offline billboard concepts (OOH), print collateral, newspaper releases, and experience center graphics."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'online-branding',
    title: 'The Complete Guide to Online Branding for Growing Businesses',
    category: 'Brand Strategy',
    date: 'Jan 2025',
    readTime: '5 min read',
    snippet: 'Discover how consistent digital brand presence, distinctive visual identity, and strategic positioning build long-term commercial value.'
  },
  {
    id: 'marketing',
    title: 'High-ROI Performance Marketing: Turning Ad Spend into Scalable Growth',
    category: 'Performance Marketing',
    date: 'Jan 2025',
    readTime: '6 min read',
    snippet: 'Explore how data-driven multi-channel advertising on Meta and Google Search drives qualified customer acquisition while maintaining profitability.'
  },
  {
    id: 'social-media-management',
    title: 'Strategic Social Media Management: Beyond Vanity Metrics to True Brand Authority',
    category: 'Social Media',
    date: 'Jan 2025',
    readTime: '5 min read',
    snippet: 'How modern businesses use targeted short-form video, thought leadership content, and active engagement to turn followers into paying clients.'
  }
];

export const INDUSTRY_PAGES_DATA: Record<string, IndustryData> = {
  'tourism-travel': {
    slug: 'tourism-travel',
    title: 'Tourism & Travel Marketing',
    heroHeadline: 'Scaling Bookings & Destination Visibility for Travel Brands',
    heroStat: '+50% Booking Increase',
    description: 'Drive high-intent tour inquiries, seasonal package sales, and international traveler engagement through compelling visual storytelling and targeted ad funnels.',
    whyChoosePoints: [
      'Targeted campaign strategies for domestic & international tour seekers.',
      'Visual content storytelling capturing destination highlights and luxury experiences.',
      'Instant WhatsApp CRM integration to turn inquiries into confirmed bookings.',
      'Proven track record with regional and global tour operators.'
    ],
    caseStudyId: 'ik-tours',
    applicableServiceIds: ['campaign-strategy', 'creative-design', 'digital-marketing', 'performance-marketing', 'technology-web']
  },
  'hotels-hospitality': {
    slug: 'hotels-hospitality',
    title: 'Hotels & Hospitality Marketing',
    heroHeadline: 'Driving Direct Bookings & Guest Loyalty for Hospitality Brands',
    heroStat: '+40% Direct Inquiries',
    description: 'Elevate guest experiences and reduce dependency on high-commission OTAs with targeted social management, luxury visual identity, and direct booking funnels.',
    whyChoosePoints: [
      'Bespoke visual identity and social content highlighting dining and amenities.',
      'Direct call and WhatsApp booking engine setups that bypass OTA commission fees.',
      'Localized seasonal campaign offers driving weekend and holiday occupancy.',
      'End-to-end photo and video production showcasing suites and dining.'
    ],
    caseStudyId: '',
    applicableServiceIds: ['brand-identity', 'creative-design', 'digital-marketing', 'production', 'technology-web']
  },
  'real-estate-property': {
    slug: 'real-estate-property',
    title: 'Real Estate & Property Marketing',
    heroHeadline: 'Elevating Property Brands & Accelerating Sales Velocity',
    heroStat: 'Trusted by Leading Developers',
    description: 'Strategic positioning, high-impact creative, and hyper-targeted performance campaigns engineered for luxury villas, apartments, and commercial towers.',
    whyChoosePoints: [
      'High-net-worth individual (HNWI) and NRI buyer persona targeting across GCC & Tier-1 cities.',
      'Full-stack execution: naming, visual guidelines, floor plan design, site hoardings & landing pages.',
      'Double-step lead qualification with automated WhatsApp CRM verification bots.',
      'Proven revenue impact across residential and commercial developments.'
    ],
    caseStudyId: 'real-estate-clients',
    applicableServiceIds: ['brand-strategy', 'brand-identity', 'campaign-strategy', 'creative-design', 'digital-marketing', 'production', 'performance-marketing', 'sales-support', 'offline-marketing', 'technology-web', 'consulting']
  },
  'ecommerce-retail': {
    slug: 'ecommerce-retail',
    title: 'E-Commerce & Retail Growth',
    heroHeadline: 'Accelerating Direct-to-Consumer Sales & Customer Lifetime Value',
    heroStat: '+120% Sales Uplift',
    description: 'Scale direct-to-consumer store revenue through high-converting ad funnels, product creative design, and conversion rate optimization.',
    whyChoosePoints: [
      'High-converting Meta & Google PPC ad creative generation.',
      'Content marketing and video product showcases that build customer trust.',
      'Conversion rate optimization (CRO) for web checkout experiences.',
      'Data-driven audience retargeting and repeat-purchase funnels.'
    ],
    caseStudyId: 'zatags',
    applicableServiceIds: ['brand-identity', 'creative-design', 'digital-marketing', 'performance-marketing', 'technology-web']
  },
  'b2b-industrial-safety': {
    slug: 'b2b-industrial-safety',
    title: 'B2B & Industrial Safety Marketing',
    heroHeadline: 'Building Enterprise Authority & Capturing High-Value Contracts',
    heroStat: '+85% Enterprise Leads',
    description: 'Position industrial, fire safety, and technical services as trusted corporate leaders through professional brand identity and B2B lead generation.',
    whyChoosePoints: [
      'Corporate brand strategy establishing regulatory and safety credibility.',
      'B2B sales deck collateral, technical brochures, and exhibition materials.',
      'Targeted LinkedIn and Google Search campaigns reaching procurement officers.',
      'Clear corporate messaging tailored for B2B contract acquisition.'
    ],
    caseStudyId: 'velfire',
    applicableServiceIds: ['brand-strategy', 'brand-identity', 'creative-design', 'sales-support', 'offline-marketing', 'technology-web']
  },
  'dining-restaurants': {
    slug: 'dining-restaurants',
    title: 'Dining & Restaurant Marketing',
    heroHeadline: 'Igniting Table Reservations & Culinary Brand Engagement',
    heroStat: '+35% Walk-in Traffic',
    description: 'Fill tables and amplify culinary brands with appetite-appealing food photography, viral short-form Reels, and targeted weekend campaign offers.',
    whyChoosePoints: [
      'High-quality food and ambient interior photography/videography.',
      'Viral short-form Instagram Reels highlighting signature dishes.',
      'Localized geo-targeted ads driving weekend dining and party bookings.',
      'Physical menu design, table tent graphics, and event branding.'
    ],
    caseStudyId: '',
    applicableServiceIds: ['brand-identity', 'creative-design', 'digital-marketing', 'production', 'offline-marketing']
  }
};
