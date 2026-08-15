import React from 'react';
import { INDUSTRY_PAGES_DATA, SERVICES_LIST, CASE_STUDIES_LIST, REAL_ESTATE_CORE_PILLARS } from '../data/agencyData';
import { RoutePath } from '../types';
import { CheckCircle2, ArrowRight, Award, ChevronLeft, Building, Compass, Palette, Megaphone } from 'lucide-react';
import { ServiceCategoryBlock } from './ServiceCategoryBlock';
import { trackCtaClick, trackMetaPixelCustomEvent, getStoredUtmParams } from '../utils/analytics';

interface IndustryPageProps {
  slug: string;
  onNavigate: (path: RoutePath, hash?: string) => void;
  onRequestQuote: (industryContext?: string) => void;
}

const INDUSTRY_CONTEXT_MAP: Record<string, string> = {
  'tourism-travel': 'Tourism & Travel',
  'hotels-hospitality': 'Hotels & Hospitality',
  'real-estate-property': 'Real Estate & Property',
  'ecommerce-retail': 'E-Commerce & Retail',
  'e-commerce-retail': 'E-Commerce & Retail',
  'b2b-industrial-safety': 'B2B & Industrial Safety',
  'dining-restaurants': 'Dining & Restaurants',
};

// Meta Pixel Custom Event Configuration per Industry Landing Page
const INDUSTRY_PIXEL_EVENT_MAP: Record<string, { eventName: string; industryName: string }> = {
  'tourism-travel': {
    eventName: 'TourismLeadClick',
    industryName: 'Tourism & Travel',
  },
  'hotels-hospitality': {
    eventName: 'HotelsLeadClick',
    industryName: 'Hotels & Hospitality',
  },
  'real-estate-property': {
    eventName: 'RealEstateLeadClick',
    industryName: 'Real Estate & Property',
  },
  'ecommerce-retail': {
    eventName: 'EcommerceLeadClick',
    industryName: 'E-Commerce & Retail',
  },
  'e-commerce-retail': {
    eventName: 'EcommerceLeadClick',
    industryName: 'E-Commerce & Retail',
  },
  'b2b-industrial-safety': {
    eventName: 'B2BSafetyLeadClick',
    industryName: 'B2B & Industrial Safety',
  },
  'dining-restaurants': {
    eventName: 'DiningLeadClick',
    industryName: 'Dining & Restaurants',
  },
};

export const IndustryPage: React.FC<IndustryPageProps> = ({
  slug,
  onNavigate,
  onRequestQuote,
}) => {
  const industry = INDUSTRY_PAGES_DATA[slug];

  const currentIndustryContext =
    INDUSTRY_CONTEXT_MAP[slug] || (industry ? industry.title : undefined);

  const handleRequestQuote = (subCategory?: string) => {
    const config = INDUSTRY_PIXEL_EVENT_MAP[slug] || {
      eventName: 'IndustryLeadClick',
      industryName: currentIndustryContext || 'Industry Page',
    };

    const utmParams = getStoredUtmParams();
    const eventPayload = {
      industry: config.industryName,
      industry_slug: slug,
      sub_category: subCategory || 'General',
      cta_location: 'industry_page',
      ...utmParams,
    };

    // 1. META PIXEL CUSTOM EVENT: Fires unique conversion event per industry
    // e.g. fbq('trackCustom', 'RealEstateLeadClick', { industry: 'Real Estate & Property', ...utmParams })
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('trackCustom', config.eventName, eventPayload);
      (window as any).fbq('trackCustom', 'IndustryLeadClick', eventPayload);
    }

    // 2. Also log to GTM / dataLayer for GA4 custom tracking
    trackMetaPixelCustomEvent(config.eventName, eventPayload);
    trackCtaClick(`Industry Quote - ${config.industryName}`, 'industry_page', eventPayload);

    onRequestQuote(currentIndustryContext);
  };

  if (!industry) {
    return (
      <div className="pt-32 pb-20 text-center max-w-md mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-[#42403F]">Industry Sector Not Found</h2>
        <button
          onClick={() => onNavigate('/')}
          className="bg-[#2E3F8C] text-white px-6 py-2 rounded-lg text-sm font-semibold"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  // Applicable services
  const applicableServices = SERVICES_LIST.filter((srv) =>
    industry.applicableServiceIds.includes(srv.id)
  );

  // Case study
  const caseStudy = CASE_STUDIES_LIST.find((cs) => cs.id === industry.caseStudyId);

  const isRealEstatePage = slug === 'real-estate-property';

  // 11 Specialized Real Estate Deliverables
  const realEstateDeliverables = [
    { title: 'Brand Strategy', desc: 'Market positioning, buyer persona mapping (HNWI/NRI), & project naming.', deliverables: ['Market Research', 'Audience Personas'] },
    { title: 'Brand Identity', desc: 'Bespoke logo systems, luxury typography, & project style guidelines.', deliverables: ['Visual Identity', 'Typography & Colors'] },
    { title: 'Campaign Strategy', desc: 'Launch teasers, festive offer roadmaps, & multi-channel rollout plans.', deliverables: ['Launch Strategy', 'Media Planning'] },
    { title: 'Creative Design', desc: 'Sales brochures, hoardings, site branding, & floorplan collateral.', deliverables: ['Sales Collateral', 'Site Signage'] },
    { title: 'Digital Marketing', desc: 'Content Marketing, Instagram Reels, site progress videos, & social management.', deliverables: ['Social Media', 'Video Content'] },
    { title: 'Production', desc: 'High-impact promotional film editing, aerial drone footage, & site photography.', deliverables: ['Floor Plan Design', 'Drone Aerial Footage'] },
    { title: 'Performance Marketing', desc: 'Meta Lead Ads, Google Search PPC, & retargeting for qualified buyers.', deliverables: ['Meta & Google Ads', 'Lead Generation'] },
    { title: 'Sales Support', desc: 'Sales decks, WhatsApp CRM integration, broker partner kits, & lead verification.', deliverables: ['Broker Partner Kits', 'CRM Integration'] },
    { title: 'Offline Marketing', desc: 'OOH billboard concepts, airport lounge displays, & newspaper features.', deliverables: ['OOH Billboards', 'Airport Displays'] },
    { title: 'Technology & Web', desc: 'High-converting project landing pages with interactive unit filters & site maps.', deliverables: ['Project Landing Pages', 'Interactive Site Maps'] },
    { title: 'Consulting', desc: 'Project launch advisory, pricing strategy, & sales velocity optimization.', deliverables: ['Pricing Strategy', 'Launch Advisory'] }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FCFCFD]">
      
      {/* Back to Home Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 mb-6">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#767BA5] hover:text-[#2E3F8C] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </button>
      </div>

      {/* Industry Hero Section */}
      <section className="bg-[#EEF2FF] py-16 border-y border-[#2E3F8C]/15 mb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 bg-[#2E3F8C] text-white px-3.5 py-1 rounded-full text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>{industry.heroStat}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#42403F] tracking-tight leading-tight">
              {industry.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#42403F]/85 leading-relaxed font-normal">
              {industry.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              {/* 
                META PIXEL CUSTOM EVENT:
                Calls handleRequestQuote() which automatically triggers fbq('trackCustom', eventName, { industry, ...utmParams })
                - Tourism & Travel: fbq('trackCustom', 'TourismLeadClick', { industry: 'Tourism & Travel' })
                - Hotels & Hospitality: fbq('trackCustom', 'HotelsLeadClick', { industry: 'Hotels & Hospitality' })
                - Real Estate & Property: fbq('trackCustom', 'RealEstateLeadClick', { industry: 'Real Estate & Property' })
                - E-Commerce & Retail: fbq('trackCustom', 'EcommerceLeadClick', { industry: 'E-Commerce & Retail' })
                - B2B & Industrial Safety: fbq('trackCustom', 'B2BSafetyLeadClick', { industry: 'B2B & Industrial Safety' })
                - Dining & Restaurants: fbq('trackCustom', 'DiningLeadClick', { industry: 'Dining & Restaurants' })
              */}
              <button
                onClick={() => handleRequestQuote('Hero Proposal')}
                className="bg-[#2E3F8C] text-white hover:bg-[#142775] px-7 py-3.5 rounded-lg font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Request {industry.title} Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 space-y-20">
        
        {/* Why Partner Checklist Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
              Strategic Edge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#42403F]">
              Why Leading {industry.title.split(' ')[0]} Brands Partner With Us
            </h2>
            <p className="text-sm text-[#42403F]/80 leading-relaxed font-normal">
              Tailored campaign execution backed by deep domain understanding and buyer behavior metrics.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-[#BAB8BE]/40 shadow-xs space-y-4">
            {industry.whyChoosePoints.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#2E3F8C] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#42403F] font-medium leading-relaxed">
                  {pt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SPECIAL SECTION FOR REAL ESTATE & PROPERTY CLIENTS */}
        {isRealEstatePage && (
          <section className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-[#2E3F8C] shadow-lg space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#BAB8BE]/30 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 bg-[#EEF2FF] text-[#2E3F8C] px-3 py-1 rounded-full text-xs font-bold">
                  <Building className="w-3.5 h-3.5" />
                  <span>Comprehensive Real Estate Growth Stack</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#42403F]">
                  Services for Real Estate & Property Clients
                </h2>
              </div>
              <p className="text-xs text-[#767BA5] max-w-sm">
                End-to-end launch & sales velocity support across 11 core agency pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Core Real Estate Brand Pillars (Brand Strategy, Brand Identity, Campaign Strategy) */}
              {REAL_ESTATE_CORE_PILLARS.map((pillar, idx) => {
                const iconComponent =
                  pillar.icon === 'Compass' ? (
                    <Compass className="w-6 h-6 text-[#2E3F8C]" />
                  ) : pillar.icon === 'Palette' ? (
                    <Palette className="w-6 h-6 text-[#2E3F8C]" />
                  ) : (
                    <Megaphone className="w-6 h-6 text-[#2E3F8C]" />
                  );

                return (
                  <ServiceCategoryBlock
                    key={pillar.id}
                    indexNumber={idx + 1}
                    icon={iconComponent}
                    title={pillar.title}
                    description={pillar.description}
                    deliverables={pillar.deliverables}
                    onRequestQuote={handleRequestQuote}
                    quoteButtonText={`Request ${pillar.title} Quote`}
                  />
                );
              })}

              {/* Additional Real Estate Deliverables */}
              {realEstateDeliverables.slice(3).map((item, idx) => (
                <ServiceCategoryBlock
                  key={idx}
                  indexNumber={idx + 4}
                  title={item.title}
                  description={item.desc}
                  deliverables={item.deliverables}
                  onRequestQuote={handleRequestQuote}
                  quoteButtonText={`Request ${item.title} Quote`}
                />
              ))}
            </div>

            <div className="pt-4 border-t border-[#BAB8BE]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold text-[#2E3F8C]">
                Trusted by Leading Developers Across Active Projects
              </span>
              <button
                onClick={() => handleRequestQuote('Real Estate Strategy Call')}
                className="bg-[#2E3F8C] text-white px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-[#142775] transition-colors cursor-pointer"
              >
                Schedule Real Estate Strategy Call
              </button>
            </div>
          </section>
        )}

        {/* Featured Case Study for this Industry */}
        {caseStudy && (
          <div className="bg-[#2E3F8C] text-white p-8 sm:p-10 rounded-2xl shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                Industry Case Study Impact
              </span>
              <span className="text-xl font-extrabold text-white">{caseStudy.result}</span>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#D8DCF4] uppercase tracking-wider">
                {caseStudy.clientName}
              </p>
              <h3 className="text-2xl font-bold text-white">{caseStudy.title}</h3>
              <p className="text-sm text-white/85 leading-relaxed max-w-2xl font-normal">
                {caseStudy.oneLiner}
              </p>
            </div>

            <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-[#D8DCF4]">Services Delivered: </span>
                <span className="font-bold text-white">{caseStudy.servicesDelivered}</span>
              </div>
              <button
                onClick={() => handleRequestQuote('Case Study Quote')}
                className="bg-white text-[#2E3F8C] px-5 py-2 rounded-lg font-bold hover:bg-[#EEF2FF] transition-colors self-start sm:self-auto cursor-pointer"
              >
                Request Similar Campaign Quote
              </button>
            </div>
          </div>
        )}

        {/* Applicable Services Grid */}
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
              Execution Capabilities
            </span>
            <h2 className="text-2xl font-bold text-[#42403F]">
              Recommended Services for {industry.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicableServices.map((service, idx) => (
              <ServiceCategoryBlock
                key={service.id}
                indexNumber={idx + 1}
                title={service.title}
                description={service.description}
                deliverables={service.deliverables}
                onRequestQuote={() => handleRequestQuote(service.title)}
                quoteButtonText={`Request ${service.title} Quote`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#E3E6EE]/50 p-8 rounded-2xl border border-[#BAB8BE]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-[#42403F]">
              Ready to grow your {industry.title.split(' ')[0]} brand?
            </h3>
            <p className="text-xs text-[#42403F]/80 mt-1">
              Contact our team to review custom proposal timelines and ROI benchmarks.
            </p>
          </div>
          <button
            onClick={() => handleRequestQuote('Bottom Banner')}
            className="bg-[#2E3F8C] text-white hover:bg-[#142775] px-7 py-3 rounded-lg font-bold text-sm transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};
