import React from 'react';
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  Users,
  Target,
  Rocket,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';
import { AnimatedNumber } from './AnimatedNumber';
import { handleImageError, GENERAL_IMAGE_FALLBACK_SVG, AVATAR_FALLBACK_SVG } from '../utils/imageFallback';
import { trackConsultationClick, trackAuditRequest } from '../utils/analytics';

interface HeroProps {
  onBookConsultation: () => void;
  onGetAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookConsultation, onGetAudit }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FCFCFD]">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none"></div>

      {/* Hero Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Main 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#2E3F8C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#2E3F8C]/15 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2E3F8C]" />
              <span>Full-Service Agency Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-extrabold text-[#1d1b1a] tracking-tight leading-[1.1] font-heading">
              Scaling Digital<br />
              Momentum for<br />
              <span className="text-[#2E3F8C]">Modern Brands</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#42403F]/80 leading-relaxed max-w-xl font-normal font-body">
              A full-service branding and growth partner — from brand strategy and identity to performance marketing, creative production, and campaign execution.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  trackConsultationClick('hero_section');
                  onBookConsultation();
                }}
                className="bg-[#2E3F8C] text-white hover:bg-[#142775] px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer group font-body"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  trackAuditRequest('Get Free Brand Audit', 'hero_section');
                  onGetAudit();
                }}
                className="bg-white border-2 border-[#2E3F8C] text-[#2E3F8C] hover:bg-[#EEF2FF] px-7 py-3.5 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer font-body"
              >
                <span>Get Free Brand Audit</span>
              </button>
            </div>
          </div>

          {/* Right Column: B&W Photo with Organic Frame, Brush Accent, Floating Stat Cards & Annotation */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6 lg:py-0">
            
            {/* Background Light Blue Soft Blob Shape */}
            <div className="absolute w-[88%] h-[88%] bg-[#EEF2FF] rounded-[40px] rotate-[-2deg] blur-2xs -z-10 top-4"></div>

            {/* Dark Royal Indigo Brush Stroke Effect behind subjects */}
            <div className="absolute w-[70%] h-[35%] bg-[#1a2b78] rounded-full rotate-[-12deg] right-4 top-[32%] z-0 opacity-95"></div>

            {/* Target/Bullseye Icon Floating Badge */}
            <div className="absolute -top-3 right-20 bg-white p-3.5 rounded-full shadow-lg border border-gray-100 z-20 text-[#2E3F8C] hover:scale-105 transition-transform">
              <svg className="w-7 h-7 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
                <path d="M18 6l4-4" />
                <path d="M21 2h-4" />
                <path d="M21 2v4" />
              </svg>
            </div>

            {/* Decorative Stars / Dots */}
            <span className="absolute top-2 left-10 text-[#2E3F8C]/40 text-xl font-bold">✦</span>
            <span className="absolute bottom-6 right-10 text-[#2E3F8C]/50 text-2xl font-bold">✦</span>

            {/* Main Central B&W Photo Container */}
            <div className="relative z-10 w-[85%] max-w-[460px] aspect-[4/3.5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Beacon & Bolt team collaborating at laptop"
                referrerPolicy="no-referrer"
                onError={handleImageError(GENERAL_IMAGE_FALLBACK_SVG)}
                className="w-full h-full object-cover grayscale contrast-[110%] brightness-[102%]"
              />
            </div>

            {/* FLOATING CARD 1: Top-Left "Traffic Growth +156%" */}
            <div className="absolute -top-4 -left-2 sm:left-2 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-xl w-44 sm:w-48 transition-all hover:scale-105">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider font-body">Traffic Growth</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#2E3F8C] tracking-tight font-heading mt-0.5">+156%</p>
              {/* Mini Curved Trend Line Graphic */}
              <div className="mt-2 h-7 w-full">
                <svg className="w-full h-full text-[#2E3F8C]" viewBox="0 0 100 30" fill="none">
                  <path
                    d="M2 24 C 20 22, 35 15, 50 18 C 65 20, 80 8, 98 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 24 C 20 22, 35 15, 50 18 C 65 20, 80 8, 98 4 V 30 H 2 Z"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                </svg>
              </div>
            </div>

            {/* FLOATING CARD 2: Top-Right "Leads Generated 2.4K+" */}
            <div className="absolute top-2 -right-3 sm:right-0 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-xl w-44 sm:w-48 transition-all hover:scale-105">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider font-body">Leads Generated</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1d1b1a] tracking-tight font-heading mt-0.5">2.4K+</p>
              {/* Avatar Stack */}
              <div className="flex items-center -space-x-2 mt-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                  onError={handleImageError(AVATAR_FALLBACK_SVG)}
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                  onError={handleImageError(AVATAR_FALLBACK_SVG)}
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                  onError={handleImageError(AVATAR_FALLBACK_SVG)}
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <div className="w-7 h-7 rounded-full bg-[#EEF2FF] text-[#2E3F8C] border-2 border-white flex items-center justify-center text-[10px] font-bold">
                  +
                </div>
              </div>
            </div>

            {/* FLOATING CARD 3: Bottom-Left "Brand Visibility Top Ranking" */}
            <div className="absolute -bottom-6 left-4 sm:left-12 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-xl w-48 sm:w-52 transition-all hover:scale-105">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider font-body">Brand Visibility</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1d1b1a] tracking-tight font-heading mt-0.5">Top Ranking</p>
              <div className="flex items-center gap-1.5 mt-2 pt-1 border-t border-gray-100">
                {/* Google "G" Icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="text-xs font-semibold text-gray-700 font-body">Google Ranking</span>
              </div>
            </div>

            {/* FLOATING CARD 4: Bottom-Right "ROI Increase 320%" */}
            <div className="absolute -bottom-4 -right-2 sm:right-2 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-xl w-44 sm:w-48 transition-all hover:scale-105">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider font-body">ROI Increase</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#2E3F8C] tracking-tight font-heading mt-0.5">320%</p>
              {/* Mini Vertical Bar Chart */}
              <div className="flex items-end gap-1.5 h-7 mt-2 pt-1">
                <div className="w-2.5 bg-[#D8DCF4] rounded-t-sm h-[30%]"></div>
                <div className="w-2.5 bg-[#D8DCF4] rounded-t-sm h-[50%]"></div>
                <div className="w-2.5 bg-[#2E3F8C]/60 rounded-t-sm h-[70%]"></div>
                <div className="w-2.5 bg-[#2E3F8C] rounded-t-sm h-[85%]"></div>
                <div className="w-2.5 bg-[#142775] rounded-t-sm h-[100%]"></div>
              </div>
            </div>

            {/* Hand-Drawn Cursive Style Annotation: "Results That Matter" with arrow */}
            <div className="absolute -left-12 bottom-16 hidden md:flex items-center gap-2 z-40 transform -rotate-6">
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold text-[#1d1b1a] italic tracking-wide font-heading">
                  Results
                </span>
                <span className="text-sm font-semibold text-[#1d1b1a] italic tracking-wide font-heading">
                  That Matter
                </span>
              </div>
              <svg className="w-10 h-10 text-[#1d1b1a]" viewBox="0 0 50 50" fill="none">
                <path
                  d="M10 35 C 20 30, 30 20, 42 12 M 42 12 L 32 12 M 42 12 L 40 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

          </div>

        </div>

        {/* SECTION 3: STATS STRIP BELOW HERO */}
        <div className="mt-16 lg:mt-24 bg-white rounded-2xl border border-gray-100 shadow-md p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 first:pt-0 sm:px-4 first:px-0">
              <div className="w-14 h-14 rounded-full bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#2E3F8C] tracking-tight font-heading">
                  Proven Expertise
                </p>
                <p className="text-xs text-[#757682] mt-0.5 font-body">
                  Delivering digital excellence
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pt-6 sm:pt-0 sm:px-6">
              <div className="w-14 h-14 rounded-full bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-7 h-7" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#2E3F8C] tracking-tight font-heading">
                  Real Impact
                </p>
                <p className="text-xs text-[#757682] mt-0.5 font-body">
                  Across successful campaigns
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pt-6 lg:pt-0 lg:px-6">
              <div className="w-14 h-14 rounded-full bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#2E3F8C] tracking-tight font-heading">
                  <AnimatedNumber value="100%" delay={240} />
                </p>
                <p className="text-sm font-bold text-[#1d1b1a] mt-0.5 font-heading">
                  ROI-Focused Execution
                </p>
                <p className="text-xs text-[#757682] mt-0.5 font-body">
                  Performance that matters
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 pt-6 lg:pt-0 lg:px-6">
              <div className="w-14 h-14 rounded-full bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center flex-shrink-0">
                <Rocket className="w-7 h-7" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#2E3F8C] tracking-tight font-heading">
                  <AnimatedNumber value="250+" delay={360} />
                </p>
                <p className="text-sm font-bold text-[#1d1b1a] mt-0.5 font-heading">
                  Projects Delivered
                </p>
                <p className="text-xs text-[#757682] mt-0.5 font-body">
                  For brands across industries
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

