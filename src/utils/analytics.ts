/**
 * Analytics, DataLayer & Meta Pixel Tracking Utility
 * 
 * Pushes structured event payloads to window.dataLayer for Google Tag Manager (GTM)
 * and fires custom conversion events into Meta Pixel (window.fbq) with persistent UTM data.
 */

import { getStoredUtmParams, UtmParameters } from './utm';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Pushes generic events to window.dataLayer with automatic UTM attribution merging.
 */
export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined') {
    const utm = getStoredUtmParams();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...utm,
      ...params,
    });
  }
};

/**
 * Fires custom conversion events to Meta Pixel (fbq) and mirrors to dataLayer.
 */
export const trackMetaPixelCustomEvent = (
  eventName: string,
  params: Record<string, unknown> = {}
) => {
  if (typeof window === 'undefined') return;

  const utm = getStoredUtmParams();
  const eventPayload = {
    ...utm,
    ...params,
  };

  // 1. Fire to Meta Pixel if initialized
  if (typeof window.fbq === 'function') {
    try {
      window.fbq('trackCustom', eventName, eventPayload);
    } catch (err) {
      console.warn(`[Meta Pixel] Error firing trackCustom ${eventName}:`, err);
    }
  }

  // 2. Also log to dataLayer for GTM tags
  trackEvent(`pixel_${eventName}`, eventPayload);

  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Meta Pixel Event Fired] ${eventName}`, eventPayload);
  }
};

export const trackPhoneClick = (location: string, phoneNumber?: string) => {
  trackEvent('phone_click', {
    click_location: location,
    phone_number: phoneNumber || '+91 94201 70156',
  });
};

export const trackWhatsappClick = (location: string) => {
  trackEvent('whatsapp_click', {
    click_location: location,
  });
};

export const trackFormSubmission = (formType: string, details: Record<string, unknown> = {}) => {
  trackEvent('form_submission', {
    form_type: formType,
    ...details,
  });
};

export const trackAuditRequest = (auditType: string, location: string) => {
  trackEvent('audit_request_click', {
    audit_type: auditType,
    click_location: location,
  });
};

export const trackConsultationClick = (location: string) => {
  trackEvent('consultation_click', {
    click_location: location,
  });
};

export const trackCtaClick = (ctaLabel: string, location: string, extraParams: Record<string, unknown> = {}) => {
  trackEvent('cta_click', {
    cta_label: ctaLabel,
    click_location: location,
    ...extraParams,
  });
};

export const trackOutboundClick = (destination: string, label: string) => {
  trackEvent('outbound_click', {
    destination,
    label,
  });
};

export { getStoredUtmParams };
export type { UtmParameters };
