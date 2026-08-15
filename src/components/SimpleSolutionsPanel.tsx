import React from 'react';
import { ArrowRight, CheckCircle, Shield, Award } from 'lucide-react';

interface SimpleSolutionsPanelProps {
  onGetStarted: () => void;
  onReadMore: () => void;
}

export const SimpleSolutionsPanel: React.FC<SimpleSolutionsPanelProps> = ({
  onGetStarted,
  onReadMore,
}) => {
  const steps = [
    { num: '1', title: 'Comprehensive Brand Audit & Research', desc: 'In-depth market evaluation to identify growth bottlenecks and untapped buyer segments.' },
    { num: '2', title: 'Strategic Multi-Channel Positioning', desc: 'Crafting distinct visual identity, offer messaging, and channel deployment playbooks.' },
    { num: '3', title: 'High-Conversion Creative & Tech Deployment', desc: 'Launching high-ROI Meta & Google PPC campaigns, landing pages, and sales kits.' },
    { num: '4', title: 'Real-Time Analytics & ROI Optimization', desc: 'Continuous campaign refining and WhatsApp CRM lead verification for maximum ROI.' }
  ];

  return (
    <section className="py-20 bg-[#2E3F8C] text-white relative overflow-hidden">
      
      {/* Background Decorative Accent Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#767BA5]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Circular Cropped Graphic Frame with Soft Decorative Outer Ring */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-white/20 p-4 flex items-center justify-center">
              
              {/* Outer Decorative Circle Ring */}
              <div className="absolute inset-0 border border-dashed border-white/30 rounded-full animate-spin-slow"></div>

              {/* Inner Circle Image Container */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#767BA5]/40 to-white/10 p-6 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
                
                <div className="w-16 h-16 rounded-full bg-white text-[#2E3F8C] flex items-center justify-center shadow-lg mb-4">
                  <Award className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-extrabold text-white mb-1">100% Turnkey</h4>
                <p className="text-xs text-white/80 max-w-[200px] leading-relaxed">
                  Single-point accountability across strategic branding and performance marketing.
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full text-[11px] font-semibold text-white border border-white/20">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Verified Agency Standard</span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side: Simple Solutions Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8DCF4] block mb-2">
                Clarity in Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Simple Solutions
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              We eliminate agency fluff. Beacon & Bolt delivers clear, high-impact growth frameworks tailored to your business model, ensuring every marketing rupee yields accountable sales momentum.
            </p>

            {/* Numbered List 1-4 */}
            <div className="space-y-4 pt-2">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  
                  {/* White Circular Number Badge */}
                  <div className="w-8 h-8 rounded-full bg-white text-[#2E3F8C] font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-md">
                    {step.num}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed mt-0.5">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              
              {/* Button 1: Solid White with Royal Indigo Text */}
              <button
                onClick={onGetStarted}
                className="bg-white text-[#2E3F8C] hover:bg-[#EEF2FF] px-7 py-3.5 rounded-lg font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#2E3F8C]" />
              </button>

              {/* Button 2: Outlined with White Border and White Text */}
              <button
                onClick={onReadMore}
                className="border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Framework</span>
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
