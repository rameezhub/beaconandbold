import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { initUtmCapture } from './utils/utm';
import { applyTrackingConsent } from './utils/cookieConsent';
import { SEO } from './components/SEO';
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
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { CookieConsent } from './components/CookieConsent';
import { NotFoundPage } from './components/NotFoundPage';
import { QuoteModal } from './components/QuoteModal';
import { AiAdvisorModal } from './components/AiAdvisorModal';

export function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    if (typeof window === 'undefined') return '/';

    // 1. On initial load, if redirected from 404.html with a deep-link path stored in sessionStorage:
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/') {
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

  // Initialize tracking consent state & UTM parameter capture on mount
  useEffect(() => {
    initUtmCapture();
    applyTrackingConsent();
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

  // Sync route change and push history entry
  const handleNavigate = (path: RoutePath, hash?: string) => {
    const targetUrl = path + (hash ? `#${hash}` : '');
    const currentUrl = currentPath + (window.location.hash || '');

    if (targetUrl !== currentUrl) {
      window.history.pushState({ path, hash }, '', targetUrl);
    }

    setCurrentPath(path);

    if ((path === '/' || path.startsWith('/#')) && hash) {
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
    '@graph': [
      {
        '@type': 'MarketingAgency',
        '@id': 'https://beaconandbolt.com/#organization',
        'name': 'Beacon & Bolt',
        'alternateName': 'Beacon & Bolt Growth & Branding Agency',
        'description': 'Full-service digital marketing, brand strategy, performance marketing, and creative production partner.',
        'url': 'https://beaconandbolt.com',
        'logo': 'https://beaconandbolt.com/src/assets/logo.jpg',
        'image': 'https://beaconandbolt.com/src/assets/logo.jpg',
        'telephone': '+91-94201-70156',
        'email': 'beaconandbolt@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Mangalmurti Apartment, House No 825, Varawade, Achara Road',
          'addressLocality': 'Kankavli',
          'addressRegion': 'Maharashtra',
          'postalCode': '416602',
          'addressCountry': 'IN'
        },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Goa' },
          { '@type': 'AdministrativeArea', 'name': 'Sindhudurg' },
          { '@type': 'AdministrativeArea', 'name': 'Maharashtra' },
          { '@type': 'Country', 'name': 'India' }
        ],
        'sameAs': []
      },
      {
        '@type': 'WebSite',
        '@id': 'https://beaconandbolt.com/#website',
        'url': 'https://beaconandbolt.com',
        'name': 'Beacon & Bolt',
        'publisher': {
          '@id': 'https://beaconandbolt.com/#organization'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://beaconandbolt.com/#webpage',
        'url': 'https://beaconandbolt.com/',
        'name': 'Beacon & Bolt | Digital Marketing & Branding Agency',
        'isPartOf': {
          '@id': 'https://beaconandbolt.com/#website'
        },
        'about': {
          '@id': 'https://beaconandbolt.com/#organization'
        },
        'description': 'Scaling Digital Momentum for Modern Brands. Full-service digital marketing, brand identity, performance marketing, and creative production.'
      }
    ]
  };

  const isIndustryRoute = currentPath.startsWith('/industries/');
  const rawSlug = isIndustryRoute ? currentPath.replace('/industries/', '') : '';
  const industrySlug = rawSlug === 'e-commerce-retail' ? 'ecommerce-retail' : rawSlug;

  const isBlogDetailRoute = currentPath.startsWith('/blog/');
  const blogSlug = isBlogDetailRoute ? currentPath.replace('/blog/', '') : '';

  const isKnownRoute =
    currentPath === '/' ||
    currentPath === '/about' ||
    currentPath === '/services' ||
    currentPath === '/industries' ||
    currentPath === '/work' ||
    currentPath === '/blog' ||
    currentPath === '/faq' ||
    currentPath === '/contact' ||
    currentPath === '/privacy-policy' ||
    currentPath === '/terms-and-conditions' ||
    currentPath === '/terms-of-service' ||
    currentPath === '/cookie-policy' ||
    isIndustryRoute ||
    isBlogDetailRoute;

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#42403F] font-sans antialiased selection:bg-[#2E3F8C] selection:text-white">
      
      {/* Homepage SEO Default */}
      {currentPath === '/' && (
        <SEO
          title="Beacon & Bolt | Digital Marketing & Branding Agency"
          description="Beacon & Bolt is a full-service digital marketing and brand strategy partner. We deliver brand identity, SEO, performance marketing, creative production, and web solutions across Goa, Sindhudurg, Maharashtra, and India."
          canonical="https://beaconandbolt.com/"
          schema={agencySchema}
          breadcrumbs={[
            { name: 'Home', url: 'https://beaconandbolt.com/' }
          ]}
        />
      )}

      {/* Section 1: Sticky Navigation Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuoteModal()}
        onOpenAiAdvisor={() => setIsAiAdvisorOpen(true)}
      />

      {/* Main Content Router */}
      <main>
        {!isKnownRoute ? (
          <NotFoundPage onNavigate={handleNavigate} />
        ) : currentPath === '/privacy-policy' ? (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        ) : currentPath === '/terms-and-conditions' || currentPath === '/terms-of-service' ? (
          <TermsAndConditionsPage onNavigate={handleNavigate} />
        ) : currentPath === '/cookie-policy' ? (
          <CookiePolicyPage onNavigate={handleNavigate} />
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

            {/* Section 4: Lightweight Blog Preview & Intelligence Teaser */}
            <BlogPreview onNavigate={handleNavigate} />

            {/* Section 5: Company Introduction */}
            <CompanyIntro />

            {/* Section 6: Why Choose Us (5 Pillars) */}
            <WhyChooseUs />

            {/* Section 7: Process Timeline (Horizontal Flow) */}
            <ProcessTimeline />

            {/* Section 8: Industries Served */}
            <IndustriesServed onNavigate={handleNavigate} />

            {/* Section 9: Case Studies (Royal Indigo dark cards) */}
            <CaseStudiesSection
              onNavigate={handleNavigate}
              onRequestQuote={() => handleOpenQuoteModal()}
            />

            {/* Section 10: Team Section */}
            <TeamSection />

            {/* Section 11: Impact Metrics Band (#EEF2FF glow) */}
            <ImpactMetricsBand />

            {/* Section 12: FAQ Accordion + JSON-LD */}
            <FaqSection />

            {/* Section 13: Contact Form Section */}
            <ContactFormSection />

            {/* Section 14: Final CTA Banner */}
            <FinalCtaBanner onContactClick={() => handleOpenQuoteModal()} />
          </>
        )}
      </main>

      {/* Section 15: Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Floating Elements */}
      <FloatingWhatsappButton />

      {/* Privacy-Friendly Cookie Consent System */}
      <CookieConsent
        onOpenPolicy={() => handleNavigate('/cookie-policy')}
      />

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
