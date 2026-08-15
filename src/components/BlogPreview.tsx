import React from 'react';
import { BLOG_ARTICLES } from '../data/blogArticles';
import { RoutePath } from '../types';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

interface BlogPreviewProps {
  onNavigate: (path: RoutePath) => void;
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({ onNavigate }) => {
  // Feature 3 prominent articles from the new 8 blog articles
  const featuredArticles = BLOG_ARTICLES.slice(0, 3);

  return (
    <section id="blog-preview" className="py-20 bg-[#FCFCFD] border-b border-[#BAB8BE]/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Strategic Intelligence & Frameworks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#42403F] tracking-tight">
              Latest Growth & Branding Insights
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/blog' as RoutePath)}
            className="text-xs font-bold text-[#2E3F8C] hover:text-[#142775] flex items-center gap-1.5 group cursor-pointer self-start sm:self-auto"
          >
            <span>Explore All 8 Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              id={`home-blog-preview-${article.slug}`}
              className="bg-white p-7 rounded-xl border border-[#BAB8BE]/40 shadow-2xs hover:border-[#2E3F8C] hover:shadow-md transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#767BA5]">
                  <span className="bg-[#EEF2FF] text-[#2E3F8C] font-bold px-2.5 py-0.5 rounded-full text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#42403F] group-hover:text-[#2E3F8C] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#42403F]/80 leading-relaxed font-normal line-clamp-2">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#BAB8BE]/20 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/blog/${article.slug}` as RoutePath)}
                  className="text-xs font-bold text-[#2E3F8C] group-hover:text-[#142775] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
