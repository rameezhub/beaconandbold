/**
 * UTM Parameter Capture & Attribution Utility
 * 
 * Extracts UTM parameters (utm_source, utm_medium, utm_campaign, utm_content, utm_term)
 * from the URL query string, stores them in sessionStorage to persist across navigation,
 * and pushes them into window.dataLayer for Google Analytics 4 (GA4) / Google Tag Manager.
 */

export interface UtmParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  captured_at?: string;
  landing_page?: string;
}

const STORAGE_KEY = 'bb_utm_params';

/**
 * Parses query parameters from a URL search string.
 */
export const extractQueryParams = (searchString: string = window.location.search): Record<string, string> => {
  if (!searchString) return {};
  const params = new URLSearchParams(searchString);
  const result: Record<string, string> = {};
  
  params.forEach((value, key) => {
    if (value && value.trim() !== '') {
      result[key] = value.trim();
    }
  });
  
  return result;
};

/**
 * Retrieves currently stored UTM parameters from sessionStorage.
 */
export const getStoredUtmParams = (): UtmParameters => {
  if (typeof window === 'undefined' || !window.sessionStorage) {
    return {};
  }

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as UtmParameters;
    }
  } catch (err) {
    console.warn('[Analytics] Failed to read stored UTM parameters:', err);
  }

  return {};
};

/**
 * Captures UTM parameters from URL, persists them into sessionStorage,
 * and broadcasts them to window.dataLayer for GA4/GTM.
 * 
 * Runs once at application startup.
 */
export const initUtmCapture = (): UtmParameters => {
  if (typeof window === 'undefined') {
    return {};
  }

  const queryParams = extractQueryParams(window.location.search);
  const utmKeys: (keyof UtmParameters)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'gclid',
    'fbclid',
  ];

  const hasNewUtm = utmKeys.some((k) => !!queryParams[k]);
  let activeUtm: UtmParameters = getStoredUtmParams();

  if (hasNewUtm) {
    const newUtm: UtmParameters = {
      ...activeUtm,
      landing_page: window.location.pathname,
      captured_at: new Date().toISOString(),
    };

    utmKeys.forEach((key) => {
      if (queryParams[key]) {
        newUtm[key] = queryParams[key];
        // Also set individual session storage keys for external tools
        try {
          window.sessionStorage.setItem(key, queryParams[key]);
        } catch {
          // ignore sessionStorage write errors
        }
      }
    });

    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newUtm));
    } catch (err) {
      console.warn('[Analytics] Failed to save UTM parameters to sessionStorage:', err);
    }

    activeUtm = newUtm;

    // Push into dataLayer for GA4 / GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'utm_captured',
      timestamp: new Date().toISOString(),
      utm_source: newUtm.utm_source || '',
      utm_medium: newUtm.utm_medium || '',
      utm_campaign: newUtm.utm_campaign || '',
      utm_content: newUtm.utm_content || '',
      utm_term: newUtm.utm_term || '',
      gclid: newUtm.gclid || '',
      fbclid: newUtm.fbclid || '',
      landing_page: newUtm.landing_page || window.location.pathname,
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('[Analytics] Captured UTM parameters:', newUtm);
    }
  } else if (Object.keys(activeUtm).length > 0) {
    // If returning within same session, make sure dataLayer has the stored attribution
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'utm_persisted',
      timestamp: new Date().toISOString(),
      utm_source: activeUtm.utm_source || '',
      utm_medium: activeUtm.utm_medium || '',
      utm_campaign: activeUtm.utm_campaign || '',
      utm_content: activeUtm.utm_content || '',
      utm_term: activeUtm.utm_term || '',
      landing_page: activeUtm.landing_page || window.location.pathname,
    });
  }

  return activeUtm;
};
