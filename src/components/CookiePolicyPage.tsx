import React from 'react';
import { RoutePath } from '../types';
import { SEO } from './SEO';
import { Shield, Cookie, CheckCircle2, ChevronLeft, ArrowRight } from 'lucide-react';

interface CookiePolicyPageProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
  onOpenPreferences?: () => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({
  onNavigate,
  onOpenPreferences,
}) => {
  const handleOpenPrefs = () => {
    if (onOpenPreferences) {
      onOpenPreferences();
    } else if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openCookiePreferences'));
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#FCFCFD] min-h-screen text-[#42403F]">
      <SEO
        title="Cookie Policy | Beacon & Bolt"
        description="Learn about the cookies and tracking technologies used on Beacon & Bolt, including strictly necessary, analytics, and marketing cookies."
        canonical="https://beaconandbolt.com/cookie-policy"
        robots="index, follow"
      />

      <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#767BA5] hover:text-[#2E3F8C] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#2E3F8C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#2E3F8C]/15">
            <Cookie className="w-3.5 h-3.5" />
            <span>Privacy &amp; Data Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1d1b1a] tracking-tight font-heading">
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: February 2025 • Beacon &amp; Bolt
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#42403F]/90">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1d1b1a] font-heading">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small data files stored on your browser or device when you visit a website. They help websites remember your preferences, keep you logged in, analyze site performance, and ensure smooth navigation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1d1b1a] font-heading">
              2. How Beacon &amp; Bolt Uses Cookies
            </h2>
            <p>
              We believe in transparent, people-first data privacy. We classify our website cookies into three clear categories:
            </p>

            <div className="space-y-4 mt-4">
              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#1d1b1a] text-base">A. Strictly Necessary Cookies</h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Always Enabled
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  These cookies are vital for the technical operation of our website. They enable core page navigation, secure contact form submissions, and maintain your cookie consent choice across browsing sessions.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#1d1b1a] text-base">B. Analytics &amp; Performance Cookies</h3>
                  <span className="text-xs font-semibold text-[#2E3F8C] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full border border-[#2E3F8C]/20">
                    Optional (Consent Required)
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We use Google Analytics 4 (GA4) and Google Tag Manager (GTM) to understand aggregated metrics like page views, bounce rates, and traffic channels. These scripts do NOT load until you grant Analytics consent in our consent banner.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#1d1b1a] text-base">C. Marketing &amp; Retargeting Cookies</h3>
                  <span className="text-xs font-semibold text-[#2E3F8C] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full border border-[#2E3F8C]/20">
                    Optional (Consent Required)
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Used in conjunction with Meta Pixel to measure the performance of our advertising campaigns and deliver relevant messaging. These scripts are strictly blocked until you explicitly grant Marketing consent.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1d1b1a] font-heading">
              3. Managing Your Cookie Preferences
            </h2>
            <p>
              You can adjust or revoke your cookie preferences at any time. When you revoke consent, our systems immediately halt any active analytics and marketing scripts for future page views.
            </p>
            <div className="pt-2">
              <button
                onClick={handleOpenPrefs}
                className="bg-[#2E3F8C] text-white hover:bg-[#142775] px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
              >
                <span>Open Cookie Preferences</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1d1b1a] font-heading">
              4. Contact Our Privacy Team
            </h2>
            <p>
              If you have any questions regarding our cookie practices or data privacy handling, please contact us directly:
            </p>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5">
              <li><strong>Email:</strong> beaconandbolt@gmail.com</li>
              <li><strong>Phone:</strong> +91 94201 70156 / +91 94054 51507</li>
              <li><strong>Address:</strong> Mangalmurti Apartment, House No 825, Varawade, Achara Road, Kankavli - 416602</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};
