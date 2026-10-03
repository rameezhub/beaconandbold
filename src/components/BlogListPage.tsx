import React, { useState } from 'react';
import { BLOG_ARTICLES } from '../data/blogArticles';
import { RoutePath } from '../types';
import { SEO } from './SEO';
import { ArrowRight, Clock, Calendar, BookOpen, ChevronRight, Tag } from 'lucide-react';

interface BlogListPageProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
  onRequestQuote: () => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(BLOG_ARTICLES.map((a) => a.category)))];

  const filteredArticles = selectedCategory === 'All'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter((a) => a.category === selectedCategory);

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Beacon & Bolt Agency Intelligence Blog',
    'description': 'Actionable guides on brand strategy, performance marketing, and digital growth.',
    'url': 'https://beaconandbolt.com/blog',
    'publisher': {
      '@type': 'Organization',
      'name': 'Beacon & Bolt',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://beaconandbolt.com/src/assets/logo.jpg'
      }
    },
    'blogPost': BLOG_ARTICLES.map((article) => ({
      '@type': 'BlogPosting',
      'headline': article.title,
      'description': article.excerpt,
      'datePublished': article.datePublished,
      'url': `https://beaconandbolt.com/blog/${article.slug}`,
      'author': {
        '@type': 'Organization',
        'name': 'Beacon & Bolt'
      }
    }))
  };

  return (
    <div className="pt-24 pb-20 bg-[#FCFCFD] min-h-screen">
      <SEO
        title="Strategic Growth & Marketing Blog | Beacon & Bolt"
        description="Actionable guides on online branding, performance marketing, consumer psychology, customer journey mapping, and conversion design from Beacon & Bolt."
        canonical="https://beaconandbolt.com/blog"
        schema={blogListSchema}
        breadcrumbs={[
          { name: 'Home', url: 'https://beaconandbolt.com/' },
          { name: 'Blog', url: 'https://beaconandbolt.com/blog' },
        ]}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#767BA5] mb-8 font-medium">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-[#2E3F8C] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#2E3F8C] font-bold">Blog</span>
        </nav>

        {/* Hero Banner */}
        <header className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#2E3F8C] px-3.5 py-1 rounded-full text-xs font-bold border border-[#2E3F8C]/15">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Agency Intelligence & Strategy Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#42403F] tracking-tight leading-tight">
            Strategic Growth, Branding & Performance Insights
          </h1>
          <p className="text-base text-[#42403F]/80 leading-relaxed font-normal">
            Deep-dive frameworks and actionable intelligence developed by Beacon & Bolt’s brand strategists, performance marketers, and creative directors.
          </p>
        </header>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#BAB8BE]/20">
          <span className="text-xs font-bold text-[#767BA5] mr-2 flex items-center gap-1">
            <Tag className="w-3 h-3" /> Filter Topics:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2E3F8C] text-white shadow-xs'
                  : 'bg-white text-[#42403F] border border-[#BAB8BE]/40 hover:border-[#2E3F8C] hover:text-[#2E3F8C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 8 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <article
              key={article.slug}
              id={`blog-card-${article.slug}`}
              className="bg-white rounded-2xl border border-[#BAB8BE]/40 p-7 shadow-2xs hover:shadow-xl hover:border-[#2E3F8C] transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                {/* Meta Top Tag */}
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-[#EEF2FF] text-[#2E3F8C] font-bold px-3 py-1 rounded-full text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-[#767BA5] text-[11px] font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.datePublished}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-[#42403F] group-hover:text-[#2E3F8C] transition-colors leading-snug">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-xs text-[#42403F]/80 leading-relaxed font-normal">
                  {article.excerpt}
                </p>

                {/* Keywords Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.keywords.slice(0, 2).map((kw, kIdx) => (
                    <span
                      key={kIdx}
                      className="text-[10px] bg-[#FCFCFD] border border-[#BAB8BE]/30 text-[#767BA5] px-2 py-0.5 rounded-md"
                    >
                      #{kw.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#BAB8BE]/20 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/blog/${article.slug}` as RoutePath)}
                  className="text-xs font-bold text-[#2E3F8C] group-hover:text-[#142775] flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Consulting Callout */}
        <div className="mt-20 bg-[#2E3F8C] text-white p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-[#D8DCF4] uppercase tracking-wider block">
              Direct Strategy Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need tailored execution for your brand?
            </h2>
            <p className="text-sm text-white/85 leading-relaxed font-normal">
              Our partners and strategists can audit your existing brand presence and build a custom multi-channel roadmap.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              className="bg-white text-[#2E3F8C] hover:bg-[#EEF2FF] px-6 py-3 rounded-lg font-bold text-xs transition-colors shadow-md cursor-pointer text-center"
            >
              Request Custom Proposal
            </button>
            <a
              href="https://wa.me/919420170156?text=Hi%20Beacon%20%26%20Bolt%2C%20I%20read%20your%20blog%20and%20would%20like%20to%20discuss%20a%20strategy%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-lg font-bold text-xs transition-colors shadow-md text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
