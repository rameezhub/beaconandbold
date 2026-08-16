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
import { BlogPreview } from './components/BlogPreview';
import { BlogListPage } from './components/BlogListPage';
import { BlogPostPage } from './components/BlogPostPage';
import { CompanyIntro } from './components/CompanyIntro';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
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
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsAndConditionsPage } from './components/TermsAndConditionsPage';
import { QuoteModal } from './components/QuoteModal';
import { AiAdvisorModal } from './components/AiAdvisorModal';

export function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    if (typeof window === 'undefined') return '/';

    // 1. On initial load, if redirected from 404.html with a deep-link path stored in sessionStorage:
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/') {
      // Establish Home as the base entry, then push the actual target on top
      window.history.replaceState({ path: '/' }, '', '/');
      window.history.pushState({ path: redirectPath }, '', redirectPath);
      sessionStorage.removeItem('redirectPath');
      const cleanPath = redirectPath.split('?')[0].split('#')[0] as RoutePath;
      return cleanPath || '/';
    }
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
    }

    // 2. If direct URL pathname exists and isn't root (e.g. deep link landed directly):
    const pathname = window.location.pathname as RoutePath;
    if (pathname && pathname !== '/') {
      window.history.replaceState({ path: '/' }, '', '/');
      window.history.pushState({ path: pathname }, '', pathname + window.location.search + window.location.hash);
      return pathname;
    }

    // 3. Root fallback — ensure initial history state is set
    if (!window.history.state) {
      window.history.replaceState({ path: '/' }, '', '/' + window.location.search + window.location.hash);
    }

    return '/';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteIndustryContext, setQuoteIndustryContext] = useState<string | undefined>(undefined);
  const [quoteServiceContext, setQuoteServiceContext] = useState<string | undefined>(undefined);
  const [isAiAdvisorOpen, setIsAiAdvisorOpen] = useState(false);

  const handleOpenQuoteModal = (industryContext?: string, serviceName?: string) => {
    setQuoteIndustryContext(industryContext);
    setQuoteServiceContext(serviceName);
    setIsQuoteModalOpen(true);
  };

  // Capture UTM parameters on initial page load & store in sessionStorage + dataLayer
  useEffect(() => {
    initUtmCapture();
  }, []);

  // Listen to browser Back/Forward (popstate) navigation events
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const targetPath = (event.state?.path || window.location.pathname || '/') as RoutePath;
      const cleanPath = targetPath.split('?')[0].split('#')[0] as RoutePath;
      setCurrentPath(cleanPath || '/');

      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '');
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

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Reset scroll to top on route change (unless deep-linking to an anchor hash)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [currentPath]);

  // Sync route change and push history entry so Android/browser back button works reliably
  const handleNavigate = (path: RoutePath, hash?: string) => {
    const targetUrl = path + (hash ? `#${hash}` : '');
    const currentUrl = currentPath + (window.location.hash || '');

    if (targetUrl !== currentUrl) {
      window.history.pushState({ path, hash }, '', targetUrl);
    }

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
      'postalCode': '416602',
      'addressCountry': 'IN'
    },
    'telephone': '+91-94201-70156',
    'email': 'beaconandbolt@gmail.com',
    'areaServed': ['Goa', 'Sindhudurg', 'Kankavli', 'Maharashtra', 'India']
  };

  const isIndustryRoute = currentPath.startsWith('/industries/');
  const rawSlug = isIndustryRoute ? currentPath.replace('/industries/', '') : '';
  const industrySlug = rawSlug === 'e-commerce-retail' ? 'ecommerce-retail' : rawSlug;

  const isBlogDetailRoute = currentPath.startsWith('/blog/');
  const blogSlug = isBlogDetailRoute ? currentPath.replace('/blog/', '') : '';

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
        {currentPath === '/privacy-policy' ? (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        ) : currentPath === '/terms-and-conditions' || currentPath === '/terms-of-service' ? (
          <TermsAndConditionsPage onNavigate={handleNavigate} />
        ) : currentPath === '/blog' ? (
          <BlogListPage
            onNavigate={handleNavigate}
            onRequestQuote={() => handleOpenQuoteModal()}
          />
        ) : isBlogDetailRoute ? (
          <BlogPostPage
            slug={blogSlug}
            onNavigate={handleNavigate}
            onRequestQuote={(ctx) => handleOpenQuoteModal(undefined, ctx)}
          />
        ) : isIndustryRoute ? (
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

            {/* Section 4: Lightweight Blog Preview & Intelligence Teaser (Replaces old Services section) */}
            <BlogPreview onNavigate={handleNavigate} />

            {/* Section 5: Company Introduction */}
            <CompanyIntro />

            {/* Section 6: Why Choose Us (5 Pillars) */}
            <WhyChooseUs />

            {/* Section 7: Process Timeline (Horizontal Flow) */}
            <ProcessTimeline />

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
        preselectedService={quoteServiceContext}
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
