import React from 'react';
import { RoutePath } from '../types';
import { SEO } from './SEO';
import { Compass, Home, BookOpen, Mail, ArrowRight } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FCFCFD] min-h-[70vh] flex items-center justify-center text-center px-4">
      <SEO
        title="404 - Page Not Found | Beacon & Bolt"
        description="The page you are looking for does not exist or has moved. Explore Beacon & Bolt services, strategic blog articles, and growth solutions."
        canonical="https://beaconandbolt.com/404"
        robots="noindex, follow"
      />

      <div className="max-w-lg mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center mx-auto shadow-xs">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider">
            404 Error
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1d1b1a] tracking-tight font-heading">
            Page Not Found
          </h1>
          <p className="text-sm text-[#42403F]/80 leading-relaxed font-body">
            The link you followed may be broken, outdated, or moved. Explore our core resources below:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <button
            onClick={() => onNavigate('/')}
            className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#2E3F8C] transition-all flex flex-col items-center gap-2 group cursor-pointer shadow-2xs"
          >
            <Home className="w-5 h-5 text-[#2E3F8C] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-[#1d1b1a]">Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('/blog')}
            className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#2E3F8C] transition-all flex flex-col items-center gap-2 group cursor-pointer shadow-2xs"
          >
            <BookOpen className="w-5 h-5 text-[#2E3F8C] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-[#1d1b1a]">Strategic Blog</span>
          </button>

          <button
            onClick={() => onNavigate('/', 'contact')}
            className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#2E3F8C] transition-all flex flex-col items-center gap-2 group cursor-pointer shadow-2xs"
          >
            <Mail className="w-5 h-5 text-[#2E3F8C] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-[#1d1b1a]">Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};
