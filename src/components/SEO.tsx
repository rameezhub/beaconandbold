import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  robots?: string;
  keywords?: string[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  breadcrumbs?: BreadcrumbItem[];
}

const DEFAULT_OG_IMAGE = 'https://beaconandbolt.com/og-image.jpg';
const SITE_NAME = 'Beacon & Bolt';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  twitterCard = 'summary_large_image',
  robots = 'index, follow',
  keywords,
  schema,
  breadcrumbs,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to create or update meta/link tags
    const setMetaTag = (selector: string, attr: string, value: string, createTag: () => HTMLElement) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = createTag();
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Description
    setMetaTag('meta[name="description"]', 'content', description, () => {
      const el = document.createElement('meta');
      el.name = 'description';
      return el;
    });

    // Robots
    setMetaTag('meta[name="robots"]', 'content', robots, () => {
      const el = document.createElement('meta');
      el.name = 'robots';
      return el;
    });

    // Keywords (if provided)
    if (keywords && keywords.length > 0) {
      setMetaTag('meta[name="keywords"]', 'content', keywords.join(', '), () => {
        const el = document.createElement('meta');
        el.name = 'keywords';
        return el;
      });
    }

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // OpenGraph Tags
    const setOg = (property: string, content: string) => {
      setMetaTag(`meta[property="${property}"]`, 'content', content, () => {
        const el = document.createElement('meta');
        el.setAttribute('property', property);
        return el;
      });
    };

    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:url', canonical);
    setOg('og:type', ogType);
    setOg('og:image', ogImage);
    setOg('og:site_name', SITE_NAME);

    // Twitter / X Card Tags
    const setTwitter = (name: string, content: string) => {
      setMetaTag(`meta[name="${name}"]`, 'content', content, () => {
        const el = document.createElement('meta');
        el.name = name;
        return el;
      });
    };

    setTwitter('twitter:card', twitterCard);
    setTwitter('twitter:title', title);
    setTwitter('twitter:description', description);
    setTwitter('twitter:image', ogImage);

    // Schema.org Structured Data Injection
    const schemaScriptId = 'page-dynamic-schema';
    let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaScriptId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemasToInject: Array<Record<string, unknown>> = [];

    // 1. Breadcrumbs schema if supplied
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': crumb.url,
        })),
      });
    }

    // 2. Custom schema (single or array)
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    if (schemasToInject.length > 0) {
      schemaScript.textContent = JSON.stringify(schemasToInject.length === 1 ? schemasToInject[0] : schemasToInject);
    } else {
      schemaScript.textContent = '';
    }

    return () => {
      // Cleanup dynamically injected schema on route unmount
      const s = document.getElementById(schemaScriptId);
      if (s) s.remove();
    };
  }, [title, description, canonical, ogType, ogImage, twitterCard, robots, keywords, schema, breadcrumbs]);

  return null;
};
