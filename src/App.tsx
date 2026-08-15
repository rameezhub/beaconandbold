// TRACKING SETUP — items to complete before launch:
// 1. GA4 Measurement ID — index.html <head>, marked "TODO: Replace G-XXXXXXXXXX"
// 2. Search Console verification — index.html <head>, marked "TODO: Replace content value"
// 3. Meta Pixel base code — index.html <head> (already added, marked "YOUR_PIXEL_ID")
// 4. Meta Pixel custom events — wired up across all 6 industry pages in IndustryPage.tsx with persistent UTM parameter capture

import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { initUtmCapture } from './utils/utm';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientTrustStrip } from './components/ClientTrustStrip';
import { ServicesGrid } from './components/ServicesGrid';
import { CompanyIntro } from './components/CompanyIntro';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { SimpleSolutionsPanel } from './components/SimpleSolutionsPanel';
import { IndustriesServed } from './components/IndustriesServed';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TeamSection } from './components/TeamSection';
import { ImpactMetricsBand } from './components/ImpactMetricsBand';
import { FaqSection } from './components/FaqSection';
import { ContactFormSection } from './components/ContactFormSection';
import { FinalCtaBanner } from './components/FinalCtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsappButton } from './components/FloatingWhatsappButton';
import { IndustryPage } from './components/IndustryPage';
import { QuoteModal } from './components/QuoteModal';
import { AiAdvisorModal } from './components/AiAdvisorModal';

export function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>('/');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteIndustryContext, setQuoteIndustryContext] = useState<string | undefined>(undefined);
  const [isAiAdvisorOpen, setIsAiAdvisorOpen] = useState(false);

  const handleOpenQuoteModal = (industryContext?: string) => {
    setQuoteIndustryContext(industryContext);
    setIsQuoteModalOpen(true);
  };

  // Capture UTM parameters on initial page load & store in sessionStorage + dataLayer
  useEffect(() => {
    initUtmCapture();
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Sync scroll on route change or hash navigation
  const handleNavigate = (path: RoutePath, hash?: string) => {
    setCurrentPath(path);

    if (path === '/' && hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const agencySchema = {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    'name': 'Beacon & Bolt',
    'description': 'Scaling Digital Momentum for Modern Brands. Full-service branding, marketing, and growth agency.',
    'url': 'https://beaconandbolt.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Mangalmurti Apartment, House No 825, Varawade, Achara Road',
      'addressLocality': 'Kankavli',
      'addressRegion': 'Maharashtra',
      'countryName': 'India'
    },
    'telephone': ['+919420170156', '+919405451507'],
    'email': 'beaconandbolt@gmail.com',
    'areaServed': ['Goa', 'Sindhudurg', 'Kankavli', 'Maharashtra', 'India']
  };

  const isIndustryRoute = currentPath.startsWith('/industries/');
  const rawSlug = isIndustryRoute ? currentPath.replace('/industries/', '') : '';
  const industrySlug = rawSlug === 'e-commerce-retail' ? 'ecommerce-retail' : rawSlug;

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#42403F] font-sans antialiased selection:bg-[#2E3F8C] selection:text-white">
      
      {/* MarketingAgency Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />

      {/* Section 1: Sticky Navigation Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuoteModal()}
        onOpenAiAdvisor={() => setIsAiAdvisorOpen(true)}
      />

      {/* Main Content Router */}
      <main>
        {isIndustryRoute ? (
          <IndustryPage
            slug={industrySlug}
            onNavigate={handleNavigate}
            onRequestQuote={(ctx) => handleOpenQuoteModal(ctx)}
          />
        ) : (
          <>
            {/* Section 2: Hero */}
            <Hero
              onBookConsultation={() => handleNavigate('/', 'contact')}
              onGetAudit={() => handleOpenQuoteModal()}
            />

            {/* Section 3: Client Trust Strip */}
            <ClientTrustStrip />

            {/* Section 4: Services Grid (11 Categories) */}
            <ServicesGrid
              onRequestQuote={() => handleOpenQuoteModal()}
            />

            {/* Section 5: Company Introduction */}
            <CompanyIntro />

            {/* Section 6: Why Choose Us (5 Pillars) */}
            <WhyChooseUs />

            {/* Section 7: Process Timeline (Horizontal Flow) */}
            <ProcessTimeline />

            {/* Section 7.5: Simple Solutions Panel (Full-width Royal Indigo, 1-4 numbered list) */}
            <SimpleSolutionsPanel
              onGetStarted={() => handleOpenQuoteModal()}
              onReadMore={() => handleNavigate('/', 'services')}
            />

            {/* Section 8: Industries Served (Simple linking tag/pill grid ONLY) */}
            <IndustriesServed onNavigate={handleNavigate} />

            {/* Section 9: Case Studies (Royal Indigo dark cards) */}
            <CaseStudiesSection
              onNavigate={handleNavigate}
              onRequestQuote={() => handleOpenQuoteModal()}
            />

            {/* Section 10: Team Section */}
            <TeamSection />

            {/* Section 12: Impact Metrics Band (#EEF2FF glow) */}
            <ImpactMetricsBand />

            {/* Section 13: FAQ Accordion + JSON-LD */}
            <FaqSection />

            {/* Section 14: Contact Form Section */}
            <ContactFormSection />

            {/* Section 15: Final CTA Banner */}
            <FinalCtaBanner onContactClick={() => handleOpenQuoteModal()} />
          </>
        )}
      </main>

      {/* Section 16: Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Floating Elements */}
      <FloatingWhatsappButton />

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        industryContext={quoteIndustryContext}
      />

      {/* AI Advisor Modal */}
      <AiAdvisorModal
        isOpen={isAiAdvisorOpen}
        onClose={() => setIsAiAdvisorOpen(false)}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

    </div>
  );
}

export default App;
