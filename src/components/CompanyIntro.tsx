import React from 'react';
import { Target, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#E3E6EE]/30 border-y border-[#BAB8BE]/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#42403F] tracking-tight">
              Beacon & Bolt: End-to-End Growth & Brand Architecture
            </h2>
            <p className="text-base text-[#42403F]/85 leading-relaxed font-normal">
              Beacon & Bolt is a full-service agency built to solve modern commercial growth challenges. We combine high-level brand strategy and luxury creative identity with technical performance marketing and digital systems.
            </p>
            <p className="text-base text-[#42403F]/85 leading-relaxed font-normal">
              Unlike traditional fragmented agencies, we unify brand narrative, digital acquisition funnels, and sales collateral under one cohesive strategy. Our mission is simple: build lasting brand authority while accelerating measurable ROI.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl border border-[#BAB8BE]/40 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#D8DCF4] text-[#2E3F8C] flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#42403F]">Integrated Growth</h3>
              <p className="text-xs text-[#42403F]/75 leading-relaxed">
                Branding, performance PPC ads, sales kit design, and CRM systems working in total harmony.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#BAB8BE]/40 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#D8DCF4] text-[#2E3F8C] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#42403F]">Speed to Market</h3>
              <p className="text-xs text-[#42403F]/75 leading-relaxed">
                Rapid 3-to-4 week full brand identity and digital launch deployment timeline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#BAB8BE]/40 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#D8DCF4] text-[#2E3F8C] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#42403F]">Transparent Metrics</h3>
              <p className="text-xs text-[#42403F]/75 leading-relaxed">
                Clear reporting dashboards and double-step lead verification ensuring real lead quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#BAB8BE]/40 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#D8DCF4] text-[#2E3F8C] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#42403F]">Local Market Mastery</h3>
              <p className="text-xs text-[#42403F]/75 leading-relaxed">
                Deep market insight across Goa, Sindhudurg, Maharashtra, and enterprise corridors.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
