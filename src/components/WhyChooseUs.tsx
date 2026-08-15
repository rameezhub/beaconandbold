import React from 'react';
import { LineChart, Sparkles, Cpu, Eye, DollarSign } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Data-Driven Strategy',
      icon: LineChart,
      description: 'Every recommendation is backed by real audience insights, competitor benchmarking, and conversion data.'
    },
    {
      title: 'Creative Excellence',
      icon: Sparkles,
      description: 'World-class visual aesthetics, motion graphics, and luxury brand design systems that captivate target audiences.'
    },
    {
      title: 'AI Optimization',
      icon: Cpu,
      description: 'Leveraging AI-driven audience expansion, instant lead verification bots, and smart campaign analytics.'
    },
    {
      title: 'Transparent Reporting',
      icon: Eye,
      description: 'No hidden metrics or vanity numbers. Real-time dashboards showing real lead inquiries and ROI.'
    },
    {
      title: 'ROI-Focused Execution',
      icon: DollarSign,
      description: 'Built to generate tangible commercial value — from direct bookings to multi-crore property sales.'
    }
  ];

  return (
    <section className="py-24 bg-[#FCFCFD]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
            Competitive Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#42403F] tracking-tight">
            Why Modern Brands Partner With Beacon & Bolt
          </h2>
          <p className="text-base sm:text-lg text-[#42403F]/80 font-normal">
            We bridge the gap between creative design and commercial revenue generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#BAB8BE]/40 shadow-xs hover:border-[#2E3F8C] hover:shadow-md transition-all duration-300 flex flex-col items-start space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center font-bold">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#42403F] pt-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#42403F]/80 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
