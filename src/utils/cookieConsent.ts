/**
 * Beacon & Bolt Cookie Consent & Privacy Control Utility
 * 
 * Manages user cookie preferences (Necessary, Analytics, Marketing, Functional)
 * and controls conditional loading of third-party trackers (GA4, GTM, Meta Pixel).
 */

export interface CookieConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
}

export const COOKIE_CONSENT_KEY = 'beacon_bolt_cookie_consent';

const DEFAULT_STATE: CookieConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
  timestamp: '',
};

type ConsentListener = (consent: CookieConsentState) => void;
const listeners: Set<ConsentListener> = new Set();

/**
 * Retrieve current cookie consent from localStorage
 */
export const getStoredConsent = (): CookieConsentState | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed === 'object' && parsed !== null && 'necessary' in parsed) {
      return {
        necessary: true, // Always required
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
        functional: Boolean(parsed.functional),
        timestamp: parsed.timestamp || new Date().toISOString(),
      };
    }
  } catch (err) {
    console.warn('[Cookie Consent] Error reading stored consent:', err);
  }
  return null;
};

/**
 * Check if the user has completed the cookie consent banner
 */
export const hasGivenConsent = (): boolean => {
  return getStoredConsent() !== null;
};

/**
 * Check specifically if analytics consent is granted
 */
export const hasAnalyticsConsent = (): boolean => {
  const consent = getStoredConsent();
  return consent ? consent.analytics : false;
};

/**
 * Check specifically if marketing consent is granted
 */
export const hasMarketingConsent = (): boolean => {
  const consent = getStoredConsent();
  return consent ? consent.marketing : false;
};

/**
 * Save user consent preferences, persist to localStorage, and trigger tracker adjustments
 */
export const saveConsent = (
  preferences: {
    analytics: boolean;
    marketing: boolean;
    functional?: boolean;
  }
): CookieConsentState => {
  const newState: CookieConsentState = {
    necessary: true,
    analytics: Boolean(preferences.analytics),
    marketing: Boolean(preferences.marketing),
    functional: Boolean(preferences.functional),
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newState));
    } catch (err) {
      console.warn('[Cookie Consent] Error saving consent:', err);
    }

    // Apply tracking changes immediately based on consent state
    applyTrackingConsent(newState);

    // Notify all active listeners
    listeners.forEach((listener) => {
      try {
        listener(newState);
      } catch (e) {
        console.error('[Cookie Consent] Listener error:', e);
      }
    });
  }

  return newState;
};

/**
 * Subscribe to consent state changes
 */
export const subscribeToConsentChanges = (listener: ConsentListener): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

/**
 * Dynamically loads and configures Google Analytics / GTM if consent is granted
 */
const loadAnalyticsScripts = () => {
  if (typeof window === 'undefined') return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const gtmId = import.meta.env.VITE_GTM_ID;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // If a valid GA4 measurement ID exists and is not the placeholder
  if (gaId && gaId !== 'G-XXXXXXXXXX' && !document.getElementById('ga4-script')) {
    const script = document.createElement('script');
    script.id = 'ga4-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Configure gtag
    const inlineScript = document.createElement('script');
    inlineScript.id = 'ga4-config';
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', { 'anonymize_ip': true });
    `;
    document.head.appendChild(inlineScript);
  }

  // If a valid GTM container ID exists and is not the placeholder
  if (gtmId && gtmId !== 'GTM-XXXXXXX' && !document.getElementById('gtm-script')) {
    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script);
  }
};

/**
 * Dynamically loads Meta Pixel if marketing consent is granted
 */
const loadMarketingScripts = () => {
  if (typeof window === 'undefined') return;

  const pixelId = import.meta.env.VITE_META_PIXEL_ID;

  if (pixelId && pixelId !== 'YOUR_PIXEL_ID' && !document.getElementById('meta-pixel-script')) {
    const script = document.createElement('script');
    script.id = 'meta-pixel-script';
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  }
};

/**
 * Remove optional third-party scripts if consent is withdrawn
 */
const teardownTrackingScripts = (consent: CookieConsentState) => {
  if (typeof window === 'undefined') return;

  if (!consent.analytics) {
    const ga4Script = document.getElementById('ga4-script');
    if (ga4Script) ga4Script.remove();
    const ga4Config = document.getElementById('ga4-config');
    if (ga4Config) ga4Config.remove();
    const gtmScript = document.getElementById('gtm-script');
    if (gtmScript) gtmScript.remove();
  }

  if (!consent.marketing) {
    const metaScript = document.getElementById('meta-pixel-script');
    if (metaScript) metaScript.remove();
    if (typeof window.fbq === 'function') {
      try {
        // Disable fbq tracking
        (window as any).fbq = undefined;
      } catch (e) {
        // ignore
      }
    }
  }
};

/**
 * Main application hook for applying tracking based on saved consent
 */
export const applyTrackingConsent = (consent?: CookieConsentState | null) => {
  const current = consent || getStoredConsent();
  if (!current) {
    // No consent given yet: ensure no optional scripts run
    teardownTrackingScripts(DEFAULT_STATE);
    return;
  }

  if (current.analytics) {
    loadAnalyticsScripts();
  } else {
    teardownTrackingScripts({ ...current, analytics: false });
  }

  if (current.marketing) {
    loadMarketingScripts();
  } else {
    teardownTrackingScripts({ ...current, marketing: false });
  }
};
