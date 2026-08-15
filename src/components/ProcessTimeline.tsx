import React from 'react';
import { Search, Compass, Zap, Sliders, TrendingUp, ChevronRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Research',
      icon: Search,
      desc: 'Competitor audit, market dynamics, and audience persona identification.'
    },
    {
      num: '02',
      title: 'Strategy',
      icon: Compass,
      desc: 'Brand positioning playbook, channel roadmap, and conversion offers.'
    },
    {
      num: '03',
      title: 'Execution',
      icon: Zap,
      desc: 'Creative design, video production, web setup, and campaign launch.'
    },
    {
      num: '04',
      title: 'Optimization',
      icon: Sliders,
      desc: 'Real-time ad tweaking, A/B creative testing, and lead quality checks.'
    },
    {
      num: '05',
      title: 'Growth',
      icon: TrendingUp,
      desc: 'Scaling budget, audience retargeting, and sustained market expansion.'
    }
  ];

  return (
    <section className="py-20 bg-[#E3E6EE]/40 border-y border-[#BAB8BE]/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
            Execution Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#42403F] tracking-tight">
            Our 5-Stage Growth Process
          </h2>
          <p className="text-base text-[#42403F]/80">
            A structured, repeatable framework ensuring seamless campaign deployment and measurable ROI.
          </p>
        </div>

        {/* Horizontal Flow Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#BAB8BE]/40 shadow-xs relative flex flex-col justify-between space-y-3 hover:border-[#2E3F8C] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#2E3F8C] bg-[#EEF2FF] px-2.5 py-1 rounded-full">
                      Stage {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#D8DCF4]/50 flex items-center justify-center text-[#2E3F8C]">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#42403F] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#42403F]/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#767BA5] bg-white rounded-full p-0.5 border border-[#BAB8BE]/40 shadow-2xs">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
