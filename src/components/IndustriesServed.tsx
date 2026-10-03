import React from 'react';
import { RoutePath } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface IndustriesServedProps {
  onNavigate: (path: RoutePath) => void;
}

export const IndustriesServed: React.FC<IndustriesServedProps> = ({ onNavigate }) => {
  const industryPills: { label: string; path: RoutePath }[] = [
    { label: 'Tourism', path: '/industries/tourism-travel' },
    { label: 'Hotels', path: '/industries/hotels-hospitality' },
    { label: 'Restaurants', path: '/industries/dining-restaurants' },
    { label: 'Real Estate', path: '/industries/real-estate-property' },
    { label: 'Fire & Security', path: '/industries/b2b-industrial-safety' },
    { label: 'Local Businesses', path: '/industries/b2b-industrial-safety' },
    { label: 'Startups', path: '/industries/ecommerce-retail' },
    { label: 'Hospitality', path: '/industries/hotels-hospitality' },
  ];

  return (
    <section id="industries" className="py-20 bg-[#FCFCFD]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
            Sector Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#42403F]">
            Industries We Serve
          </h2>
          <p className="text-sm text-[#42403F]/75">
            Select an industry sector to explore specialized growth strategies and case studies.
          </p>
        </div>

        {/* Clean Pill Grid */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 max-w-3xl mx-auto">
          {industryPills.map((pill, idx) => (
            <a
              key={idx}
              href={pill.path}
              onClick={(e) => { e.preventDefault(); onNavigate(pill.path); }}
              className="bg-white border border-[#BAB8BE]/50 hover:border-[#2E3F8C] hover:bg-[#EEF2FF] text-[#42403F] hover:text-[#2E3F8C] px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-2xs flex items-center gap-2 cursor-pointer group"
            >
              <span>{pill.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#767BA5] group-hover:text-[#2E3F8C] transition-colors" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
