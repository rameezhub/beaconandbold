import { CaseStudy, ServiceItem } from '../types';

export const PRIMARY_HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrtN30n4M7--wdQ8HHDmLDm-b648KvnqTO1hKrun9L_QEaCW9nDbUps9WDXZ3d_M1M87tMOljh_xMnRt2Nj-wWHk6sByXw8eis_prweyKwufpkoGWrvQMAYOgqMUGsSLQEPOhIlrbap2h-Jca8rmHskBW2QDxKgPU5R4oO1BcOvKs4Dlg4Bta37SS4SiQPKf0Dc7_RoyGBNPoXrdnGIFf2H0x1DKHnXHOV94M9qQJviG9oAAVmaveekg';

export const HERO_GALLERY_IMAGES = [
  {
    id: 'hero-main',
    title: 'Modern High-Rise Twilight Rendering',
    url: PRIMARY_HERO_IMAGE,
    caption: 'Luxury residential high-rise with bespoke glass curtain architecture.'
  },
  {
    id: 'hero-villa',
    title: 'Goa Coastal Luxury Villas',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    caption: 'Exclusive beachfront sanctuary estate branding & lead generation.'
  },
  {
    id: 'hero-commercial',
    title: 'Apex Business Center',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    caption: 'Grade-A commercial office tower pre-leasing marketing campaign.'
  }
];

export const REAL_ESTATE_SERVICES: ServiceItem[] = [
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    iconName: 'strategy',
    description: 'Establish clear positioning, developer authority, and target buyer personas tailored to high-value property buyers.',
    bullets: [
      'Market research & Competitor analysis',
      'Audience profiling & Positioning',
      'Brand Architecture & Personality'
    ],
    fullDeliverables: [
      'Competitive Intelligence Matrix & Pricing Benchmark Report',
      'High-Net-Worth Individual (HNWI) Buyer Persona Dossier',
      'Brand Positioning Playbook & Core Value Proposition',
      'Brand Architecture Framework for Multi-Phase Township Releases'
    ],
    estimatedTimeline: '2 - 3 Weeks'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    iconName: 'palette',
    description: 'Craft high-end naming, premium visual ID systems, and immersive print/digital brand guidelines.',
    bullets: [
      'Project naming & Tagline creation',
      'Logo design & Visual ID systems',
      'Comprehensive Brand Guidelines'
    ],
    fullDeliverables: [
      '5 Naming Territory Concepts with Trademark Pre-Check',
      'Logomark, Typography System & Bespoke Palette (Indigo & Periwinkle)',
      'Sales Experience Center Signage & VIP Brochure Templates',
      'Comprehensive Digital & Print Brand Guideline Document (PDF + Figma)'
    ],
    estimatedTimeline: '3 - 4 Weeks'
  },
  {
    id: 'campaign-strategy',
    title: 'Campaign Strategy',
    iconName: 'campaign',
    description: 'Execute high-impact launch teasers, performance marketing funnels, and billboard concept campaigns.',
    bullets: [
      'Launch, Teaser & Reveal campaigns',
      'Festive & Offer-driven strategies',
      'Outdoor concept development'
    ],
    fullDeliverables: [
      'Multi-Channel Launch Media Plan (Meta, Google Search/Display, LinkedIn)',
      'High-Converting Landing Pages & WhatsApp Automation Workflows',
      'OOH Billboard & Airport Terminal Creative Concepts',
      'Channel Partner (Broker) Activation Kits & Teaser Video Scripts'
    ],
    estimatedTimeline: '2 - 5 Weeks'
  }
];

export const ADDITIONAL_SERVICES = [
  {
    id: 'floor-plan-design',
    title: 'Sales Kit & Floor Plan Design',
    iconName: 'view_in_ar',
    description: 'High-impact property sales kits, site hoarding designs, 2D/3D floor plan layouts, and interactive site collateral.',
    bulletPoints: ['High-Impact Property Sales Kits', 'Interactive Floor Plan Layouts', 'Site Hoarding & Experience Gallery Graphics']
  },
  {
    id: 'performance-funnels',
    title: 'High-Intent Performance Funnels',
    iconName: 'insights',
    description: 'Hyper-targeted digital ad funnels built to capture serious HNWI NRI and domestic homebuyer leads.',
    bulletPoints: ['Meta & Google Search Direct Lead Ads', 'WhatsApp Bot Automated Lead Qualification', 'Sales CRM Integration (Salesforce, LeadSquared)']
  },
  {
    id: 'site-experience',
    title: 'Sales Gallery & On-Site Experience',
    iconName: 'storefront',
    description: 'Immersive on-site sales center experience design, scale model lighting scripts, and VIP launch event collateral.',
    bulletPoints: ['Sales Center Experience Wall Graphics', 'VIP Launch Invitation Boxes & VIP Kits', 'Site Tour Directional Signage Systems']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'grand-azure',
    title: 'The Grand Azure Residences',
    location: 'North Goa Waterfront',
    industry: 'real-estate',
    resultBadge: '+48% Pre-Launch Sales',
    description: 'Complete brand positioning, sales kit & floor plan design, and targeted NRI performance marketing campaign resulting in $14M sold in 21 days.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'Pre-Launch Sold', value: '$14M' },
      { label: 'Lead Conversion', value: '+48%' },
      { label: 'Cost Per Qualified Lead', value: '-32%' }
    ],
    deliverablesUsed: ['Brand Strategy', 'Sales Kit Design', 'Meta Performance Ads', 'Sales Collateral']
  },
  {
    id: 'verdana-towers',
    title: 'Verdana Highrise Towers',
    location: 'Panaji Outer Corridor',
    industry: 'real-estate',
    resultBadge: '+40% Lead Conversion',
    description: 'Strategic repositioning of a luxury residential high-rise project in Q3 2023, boosting qualified walk-ins by 2.4x.',
    imageUrl: PRIMARY_HERO_IMAGE,
    metrics: [
      { label: 'Conversion Lift', value: '+40%' },
      { label: 'Broker Signups', value: '180+' },
      { label: 'Campaign ROI', value: '3.8x' }
    ],
    deliverablesUsed: ['Project Naming', 'Teaser Campaign', 'WhatsApp CRM Funnel']
  },
  {
    id: 'apex-commercial',
    title: 'Apex Business Center',
    location: 'Sindhudurg Growth Hub',
    industry: 'real-estate',
    resultBadge: '85% Pre-Leased',
    description: 'Grade-A commercial office space branding and corporate pitch deck campaign securing major institutional tenants prior to completion.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'Pre-Leased Rate', value: '85%' },
      { label: 'Inquiry Volume', value: '+210%' },
      { label: 'Lease Value', value: '$8.2M' }
    ],
    deliverablesUsed: ['Brand Identity', 'Interactive Deck', 'OOH Billboards']
  }
];

export const AGENCY_STATS = [
  { value: '40%+', label: 'Avg Lead Conversion Lift' },
  { value: 'Trusted', label: 'By Leading Developers' },
  { value: '35+', label: 'Property Brands Launched' },
  { value: '100%', label: 'Goa & Sindhudurg Market Mastery' }
];

export const SAMPLE_FAQS = [
  {
    q: 'How fast can Beacon & Bolt deliver a full property launch campaign?',
    a: 'Our standard pre-launch branding and digital funnel turnaround is 3 to 4 weeks, including naming, visual identity, landing pages, and initial ad setups.'
  },
  {
    q: 'Do you provide site branding, sales kits, and floor plan collateral?',
    a: 'Yes, we design comprehensive property sales kits, 2D/3D floor plan layouts, site hoardings, and promotional campaign assets tailored for high-conversion sales galleries.'
  },
  {
    q: 'How do you ensure leads are qualified buyers and not casual inquiries?',
    a: 'We implement double-step qualification funnels via custom quiz landing pages, instant WhatsApp verification bots, and targeted income/intent demographic filters.'
  },
  {
    q: 'Which geographic regions do you cover?',
    a: 'We specialize in real estate & property developments across Goa, Sindhudurg, Maharashtra, Karnataka, and NRI buyer corridors across UAE/GCC.'
  }
];
