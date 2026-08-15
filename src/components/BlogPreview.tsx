import React from 'react';
import { BLOG_POSTS } from '../data/agencyData';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export const BlogPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#E3E6EE]/30 border-y border-[#BAB8BE]/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
              Agency Intelligence
            </span>
            <h2 className="text-3xl font-extrabold text-[#42403F] tracking-tight">
              Growth & Strategy Insights
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-xl border border-[#BAB8BE]/40 shadow-xs hover:border-[#2E3F8C] hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#767BA5]">
                  <span className="bg-[#EEF2FF] text-[#2E3F8C] font-bold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#42403F] group-hover:text-[#2E3F8C] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-[#42403F]/80 leading-relaxed font-normal">
                  {post.snippet}
                </p>
              </div>

              <div className="pt-3 border-t border-[#BAB8BE]/20 flex items-center justify-between text-xs font-semibold text-[#2E3F8C]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
