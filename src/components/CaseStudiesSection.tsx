import React from 'react';
import { CASE_STUDIES_LIST } from '../data/agencyData';
import { RoutePath } from '../types';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';

interface CaseStudiesSectionProps {
  onNavigate: (path: RoutePath) => void;
  onRequestQuote: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  return (
    <section id="work" className="py-24 bg-[#E3E6EE]/30 border-y border-[#BAB8BE]/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
              Proven Portfolio Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#42403F] tracking-tight">
              Case Studies & Growth Highlights
            </h2>
          </div>
          <p className="text-sm text-[#42403F]/80 max-w-md">
            Real commercial outcomes achieved through integrated brand positioning and performance marketing execution.
          </p>
        </div>

        {/* Royal Indigo Dark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES_LIST.map((study) => (
            <div
              key={study.id}
              className="bg-[#2E3F8C] text-white p-7 rounded-xl shadow-md border border-[#2E3F8C]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden group"
            >
              {/* Top Stat Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    {study.result}
                  </span>
                  <Award className="w-5 h-5 text-[#D8DCF4]" />
                </div>

                <p className="text-xs font-semibold text-[#D8DCF4] uppercase tracking-wider mb-1">
                  {study.clientName}
                </p>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {study.title}
                </h3>

                {/* 1-Line Teaser */}
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed mb-4">
                  {study.oneLiner}
                </p>

                {/* Exact Services Delivered */}
                <div className="pt-3 border-t border-white/15">
                  <span className="text-[11px] font-medium text-[#D8DCF4] block mb-1">
                    Services Delivered:
                  </span>
                  <p className="text-xs font-semibold text-white">
                    {study.servicesDelivered}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <button
                onClick={() => onNavigate(`/industries/${study.industrySlug}` as RoutePath)}
                className="w-full pt-3 text-xs font-bold text-white hover:text-[#D8DCF4] flex items-center justify-between border-t border-white/15 cursor-pointer"
              >
                <span>View Industry Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
