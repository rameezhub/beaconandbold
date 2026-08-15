import React, { useState } from 'react';
import { TrendingUp, ArrowRight, Building, Sparkles, Eye, CheckCircle2 } from 'lucide-react';
import { HERO_GALLERY_IMAGES } from '../data/mockData';
import { handleImageError, GENERAL_IMAGE_FALLBACK_SVG } from '../utils/imageFallback';
import { trackAuditRequest, trackCtaClick } from '../utils/analytics';

interface HeroSectionProps {
  onOpenAudit: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAudit,
  onExploreServices,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImage = HERO_GALLERY_IMAGES[activeImageIndex];

  return (
    <section className="relative min-h-[707px] flex items-center pt-24 pb-20 md:pb-28 overflow-hidden bg-[#FCFCFD]">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none"></div>

      {/* Decorative Angled Panel on Right */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#E3E6EE] opacity-50 rounded-bl-[120px] -z-10 transition-all duration-500 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D8DCF4] text-[#2e3f8c] px-4 py-2 rounded-full font-medium text-sm border border-[#2e3f8c]/10">
              <span className="w-2 h-2 rounded-full bg-[#2e3f8c] animate-pulse"></span>
              <span>Industry Focus</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1d1b1a] leading-[1.15]">
              Real Estate & <span className="text-[#2e3f8c]">Property</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#454651] max-w-lg leading-relaxed font-normal">
              Elevating property brands with strategic positioning, immersive design, and targeted digital campaigns that drive conversions and build lasting legacy.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  trackAuditRequest('Real Estate Marketing Audit', 'hero');
                  onOpenAudit();
                }}
                className="bg-[#2e3f8c] text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-[#142775] transition-all shadow-[0px_4px_20px_rgba(46,63,140,0.22)] hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Get a Free Real Estate Marketing Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  trackCtaClick('Explore Services', 'hero');
                  onExploreServices();
                }}
                className="bg-white border border-[#BAB8BE] text-[#142775] px-6 py-4 rounded-md font-semibold text-base hover:bg-[#D8DCF4]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#BAB8BE]/30">
              <div>
                <p className="text-2xl font-bold text-[#142775]">+40%</p>
                <p className="text-xs text-[#454651] mt-0.5">Lead Conversion Lift</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#142775]">35+</p>
                <p className="text-xs text-[#454651] mt-0.5">Projects Launched</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#142775]">$14M+</p>
                <p className="text-xs text-[#454651] mt-0.5">Pre-Launch Sales</p>
              </div>
            </div>
          </div>

          {/* Right Column Image & Floating Stat Glass Panel */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[480px] lg:h-[580px] w-full rounded-2xl overflow-hidden shadow-[0px_8px_30px_rgba(46,63,140,0.12)] border border-[#BAB8BE] group">
              
              {/* Background Architectural Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out group-hover:scale-105"
                style={{ backgroundImage: `url('${currentImage.url}')` }}
                role="img"
                aria-label={currentImage.title}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#142775]/60 via-transparent to-black/10"></div>

              {/* Top Right Gallery Thumbnails Selector */}
              <div className="absolute top-4 right-4 flex gap-2 glass-panel p-1.5 rounded-lg">
                {HERO_GALLERY_IMAGES.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-9 h-9 rounded-md overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-[#2e3f8c] scale-105 shadow-md' : 'border-white/60 opacity-70 hover:opacity-100'
                    }`}
                    title={img.title}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      onError={handleImageError(GENERAL_IMAGE_FALLBACK_SVG)}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Floating Stat Card (Exact match to Mockup) */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-[320px] glass-panel p-5 rounded-xl shadow-xl transition-transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2e3f8c] text-white p-3 rounded-lg flex-shrink-0 shadow-sm">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2e3f8c] mb-1 leading-tight">
                      +40% Lead Conversion
                    </h3>
                    <p className="text-sm text-[#454651] font-normal leading-snug">
                      For premium residential projects in Q3 2023.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Caption below image */}
            <p className="text-xs text-[#454651] italic mt-2.5 text-right flex items-center justify-end gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#2e3f8c]" />
              <span>{currentImage.caption}</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
