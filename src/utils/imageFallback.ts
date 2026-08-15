import React from 'react';

// Utility image fallback handlers for img onError events

export const LOGO_FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><rect width="200" height="60" fill="%232E3F8C" rx="6"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold" font-size="18">BEACON &amp; BOLT</text></svg>`;

export const AVATAR_FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23E3E6EE"/><circle cx="50" cy="40" r="20" fill="%23767BA5"/><path d="M20,85 C20,65 35,55 50,55 C65,55 80,65 80,85 Z" fill="%23767BA5"/></svg>`;

export const CLIENT_LOGO_FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60"><rect width="120" height="60" fill="%23F3F4F6" rx="6"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="%2342403F" font-family="sans-serif" font-size="12" font-weight="600">CLIENT LOGO</text></svg>`;

export const GENERAL_IMAGE_FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23E3E6EE"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23767BA5" font-family="sans-serif" font-size="16">Image Unavailable</text></svg>`;

export const handleImageError = (fallbackSvg: string) => (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  target.onerror = null; // prevent infinite loop if fallback fails
  target.src = fallbackSvg;
};
