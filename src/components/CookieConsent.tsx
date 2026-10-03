import React, { useState, useEffect } from 'react';
import {
  CookieConsentState,
  getStoredConsent,
  saveConsent,
  hasGivenConsent,
  subscribeToConsentChanges,
} from '../utils/cookieConsent';
import { ShieldCheck, Settings, X, Check, Lock } from 'lucide-react';

interface CookieConsentProps {
  onOpenPolicy?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPolicy }) => {
  const [hasPrompted, setHasPrompted] = useState<boolean>(true); // default true until verified
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [analyticsAllowed, setAnalyticsAllowed] = useState<boolean>(false);
  const [marketingAllowed, setMarketingAllowed] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has previously made a choice
    const stored = getStoredConsent();
    if (!stored) {
      setHasPrompted(false);
    } else {
      setAnalyticsAllowed(stored.analytics);
      setMarketingAllowed(stored.marketing);
    }

    // Listen to external triggers (e.g. from Footer "Cookie Preferences")
    const handleOpenPreferences = () => {
      const current = getStoredConsent();
      if (current) {
        setAnalyticsAllowed(current.analytics);
        setMarketingAllowed(current.marketing);
      }
      setIsModalOpen(true);
    };

    window.addEventListener('openCookiePreferences', handleOpenPreferences);

    const unsubscribe = subscribeToConsentChanges((updated) => {
      setAnalyticsAllowed(updated.analytics);
      setMarketingAllowed(updated.marketing);
    });

    return () => {
      window.removeEventListener('openCookiePreferences', handleOpenPreferences);
      unsubscribe();
    };
  }, []);

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const handleAcceptAll = () => {
    saveConsent({
      analytics: true,
      marketing: true,
      functional: true,
    });
    setHasPrompted(true);
    setIsModalOpen(false);
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      analytics: false,
      marketing: false,
      functional: false,
    });
    setHasPrompted(true);
    setIsModalOpen(false);
  };

  const handleSaveCustom = () => {
    saveConsent({
      analytics: analyticsAllowed,
      marketing: marketingAllowed,
      functional: true,
    });
    setHasPrompted(true);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* 1. BOTTOM FLOATING BANNER (Non-Intrusive) */}
      {!hasPrompted && !isModalOpen && (
        <aside
          role="region"
          aria-label="Cookie Consent Banner"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-50 bg-white/95 backdrop-blur-md rounded-2xl border border-[#2E3F8C]/15 shadow-2xl p-5 md:p-6 transition-all animate-fadeIn"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <div className="space-y-1.5 flex-1">
              <h3 className="text-sm font-bold text-[#1d1b1a] font-heading">
                Your privacy matters
              </h3>
              <p className="text-xs text-[#42403F]/80 leading-relaxed font-body">
                We use cookies to keep our website running, understand how visitors use it, and improve our marketing. You can choose which optional cookies you allow.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E3F8C] hover:text-[#142775] underline cursor-pointer py-1.5 px-2"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Customize</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRejectNonEssential}
                className="px-3.5 py-2 text-xs font-semibold text-[#42403F] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs font-bold text-white bg-[#2E3F8C] hover:bg-[#142775] rounded-lg transition-all shadow-xs cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. PREFERENCES MODAL */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] flex flex-col justify-between animate-scaleUp">
            
            {/* Modal Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center">
                    <Settings className="w-4 h-4" />
                  </div>
                  <h2 id="cookie-modal-title" className="text-lg font-bold text-[#1d1b1a] font-heading">
                    Cookie &amp; Privacy Preferences
                  </h2>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Close preferences"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-[#42403F]/80 mt-3 leading-relaxed">
                Choose which categories of cookies and tracking technologies you wish to enable. Necessary cookies are required for basic site security and navigation.
              </p>

              {/* Toggles Container */}
              <div className="mt-5 space-y-4 max-h-[48vh] overflow-y-auto pr-1">
                
                {/* 1. Necessary */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-[#1d1b1a]">Strictly Necessary</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Always Active
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed">
                    Essential for website layout, form submission security, routing, and remembering your consent state.
                  </p>
                </div>

                {/* 2. Analytics */}
                <div className="p-4 rounded-xl bg-[#FCFCFD] border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#1d1b1a]">Analytics &amp; Performance</span>
                      <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                        Allows us to measure visitor counts, traffic sources, and page journeys (Google Analytics 4 / GTM) to optimize user experience.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-3 shrink-0">
                      <input
                        type="checkbox"
                        checked={analyticsAllowed}
                        onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2E3F8C]"></div>
                    </label>
                  </div>
                </div>

                {/* 3. Marketing */}
                <div className="p-4 rounded-xl bg-[#FCFCFD] border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#1d1b1a]">Marketing &amp; Retargeting</span>
                      <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                        Enables Meta Pixel custom conversion signals to measure advertising effectiveness and prevent irrelevant ads.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-3 shrink-0">
                      <input
                        type="checkbox"
                        checked={marketingAllowed}
                        onChange={(e) => setMarketingAllowed(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2E3F8C]"></div>
                    </label>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer text-center"
              >
                Reject Non-Essential
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleSaveCustom}
                  className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-bold text-[#2E3F8C] bg-[#EEF2FF] hover:bg-[#D8DCF4] rounded-lg transition-colors cursor-pointer text-center"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-bold text-white bg-[#2E3F8C] hover:bg-[#142775] rounded-lg transition-all shadow-xs cursor-pointer text-center"
                >
                  Accept All
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
