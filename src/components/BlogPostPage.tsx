import React, { useEffect } from 'react';
import { getBlogArticleBySlug, BLOG_ARTICLES } from '../data/blogArticles';
import { RoutePath } from '../types';
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, MessageCircle, ChevronRight, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (path: RoutePath, hash?: string) => void;
  onRequestQuote: (context?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  slug,
  onNavigate,
  onRequestQuote,
}) => {
  const article = getBlogArticleBySlug(slug);

  // Dynamic meta title and description updates for Google Indexing
  useEffect(() => {
    if (article) {
      document.title = `${article.metaTitle}`;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', article.metaDescription);

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', article.keywords.join(', '));
    }
  }, [article]);

  if (!article) {
    return (
      <div className="pt-32 pb-24 text-center max-w-md mx-auto px-4 space-y-4">
        <h1 className="text-2xl font-bold text-[#42403F]">Article Not Found</h1>
        <p className="text-sm text-[#42403F]/70">The requested intelligence article could not be located.</p>
        <button
          onClick={() => onNavigate('/blog' as RoutePath)}
          className="bg-[#2E3F8C] text-white px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-[#142775] transition-colors cursor-pointer"
        >
          Back to Blog List
        </button>
      </div>
    );
  }

  // Article JSON-LD Schema markup for Google and AI search engines
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.metaDescription,
    'datePublished': article.datePublished,
    'dateModified': article.datePublished,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://beaconandbolt.com/blog/${article.slug}`
    },
    'author': {
      '@type': 'Organization',
      'name': 'Beacon & Bolt',
      'url': 'https://beaconandbolt.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Beacon & Bolt',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://beaconandbolt.com/logo.jpg'
      }
    },
    'keywords': article.keywords.join(', ')
  };

  const relatedArticles = BLOG_ARTICLES
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hi Beacon & Bolt! I read your article "${article.title}" and would like to discuss ${article.category} services for our business.`
  );

  return (
    <div className="pt-24 pb-20 bg-[#FCFCFD] min-h-screen">
      
      {/* Schema Markup for AI and Search Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#767BA5] mb-8 font-medium">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-[#2E3F8C] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button
            onClick={() => onNavigate('/blog' as RoutePath)}
            className="hover:text-[#2E3F8C] transition-colors cursor-pointer"
          >
            Blog
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#2E3F8C] font-bold truncate max-w-[200px] sm:max-w-none">
            {article.title}
          </span>
        </nav>

        {/* Main Article Header */}
        <header className="mb-10 space-y-5 pb-8 border-b border-[#BAB8BE]/30">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#EEF2FF] text-[#2E3F8C] font-bold px-3.5 py-1 rounded-full text-xs border border-[#2E3F8C]/15">
              {article.category}
            </span>
            <span className="text-xs text-[#767BA5] flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              Published: {article.datePublished}
            </span>
            <span className="text-xs text-[#767BA5] flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-xs text-[#767BA5] font-semibold">
              • By Beacon & Bolt Strategy Team
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#42403F] tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#42403F]/85 leading-relaxed font-medium bg-[#E3E6EE]/20 p-5 rounded-xl border-l-4 border-[#2E3F8C]">
            {article.excerpt}
          </p>
        </header>

        {/* Semantic Article Body */}
        <article className="space-y-10 text-[#42403F] leading-relaxed">
          {article.h2Sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold text-[#42403F] tracking-tight pt-2">
                {section.heading}
              </h2>
              
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-[15px] sm:text-base text-[#42403F]/85 leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <div className="bg-white rounded-xl border border-[#BAB8BE]/30 p-5 sm:p-6 my-4 shadow-2xs space-y-2.5">
                  <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block mb-2">
                    Key Execution Takeaways:
                  </span>
                  <ul className="space-y-2">
                    {section.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#42403F]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#2E3F8C] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Author / Agency Credential Box */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-[#BAB8BE]/40 shadow-xs flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#2E3F8C] text-white flex items-center justify-center font-black text-xl shrink-0">
            B&B
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-sm font-bold text-[#42403F]">Written by Beacon & Bolt Strategic Advisory</h3>
            <p className="text-xs text-[#42403F]/75 leading-relaxed font-normal">
              Beacon & Bolt provides full-service brand strategy, performance marketing, and creative production to scaling businesses across Goa, Mumbai, and pan-India.
            </p>
          </div>
        </div>

        {/* Dedicated Article CTA Section */}
        <div className="mt-12 bg-[#2E3F8C] text-white p-8 sm:p-10 rounded-2xl shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#D8DCF4] uppercase tracking-wider block">
              Direct Agency Engagement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {article.ctaText}
            </h2>
            <p className="text-sm text-white/85 leading-relaxed font-normal max-w-xl">
              Connect directly with our creative leads and growth strategists for a personalized consultation tailored to your commercial goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                trackCtaClick(`Blog CTA - ${article.title}`, 'blog_article');
                onRequestQuote(`Blog Article: ${article.title}`);
              }}
              className="bg-white text-[#2E3F8C] hover:bg-[#EEF2FF] px-6 py-3 rounded-lg font-bold text-xs transition-colors shadow-md cursor-pointer text-center"
            >
              {article.ctaButtonText}
            </button>
            <a
              href={`https://wa.me/919420170156?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-lg font-bold text-xs transition-colors shadow-md text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>
        </div>

        {/* Related Articles Navigation */}
        <div className="mt-16 pt-12 border-t border-[#BAB8BE]/30 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#42403F]">Related Strategic Guides</h3>
            <button
              onClick={() => onNavigate('/blog' as RoutePath)}
              className="text-xs font-bold text-[#2E3F8C] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All 8 Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigate(`/blog/${rel.slug}` as RoutePath)}
                className="bg-white p-5 rounded-xl border border-[#BAB8BE]/40 shadow-2xs hover:border-[#2E3F8C] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#2E3F8C] bg-[#EEF2FF] px-2 py-0.5 rounded-full">
                    {rel.category}
                  </span>
                  <h4 className="text-xs font-bold text-[#42403F] group-hover:text-[#2E3F8C] transition-colors leading-snug line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-[#42403F]/75 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="text-[11px] font-bold text-[#2E3F8C] flex items-center justify-between pt-2 border-t border-[#BAB8BE]/20">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
