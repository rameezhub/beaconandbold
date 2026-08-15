import React from 'react';
import { ArrowRight } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

interface FinalCtaBannerProps {
  onContactClick: () => void;
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ onContactClick }) => {
  return (
    <section className="py-12 bg-[#2E3F8C] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Accelerate Your Brand Momentum?
            </h2>
            <p className="text-sm text-white/80 font-normal">
              Schedule a strategy call with our agency leaders today.
            </p>
          </div>

          <button
            onClick={() => {
              trackCtaClick('Contact Us', 'final_cta_banner');
              onContactClick();
            }}
            className="bg-white text-[#2E3F8C] hover:bg-[#EEF2FF] px-8 py-3.5 rounded-lg font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer whitespace-nowrap flex-shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 text-[#2E3F8C]" />
          </button>
        </div>
      </div>
    </section>
  );
};
