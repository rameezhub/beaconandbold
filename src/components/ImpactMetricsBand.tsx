import React from 'react';
import { TrendingUp, Award, DollarSign, Users } from 'lucide-react';
import { AnimatedNumber } from './AnimatedNumber';

export const ImpactMetricsBand: React.FC = () => {
  const metrics = [
    { label: 'Client Sales Impact', value: 'Proven Results', icon: DollarSign, subText: 'Delivered in commercial property & retail revenue' },
    { label: 'Core Capabilities', value: '11', icon: Award, subText: 'Integrated marketing & technical strategy pillars' },
    { label: 'Campaign Return', value: '100%', icon: TrendingUp, subText: 'Accountable lead verification & ROI tracking' },
    { label: 'Key Sectors Served', value: '6+', icon: Users, subText: 'Tourism, Hospitality, Real Estate, E-Com & B2B' }
  ];

  return (
    <section className="py-16 bg-[#EEF2FF] border-y border-[#2E3F8C]/15 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => {
            const IconComp = m.icon;
            const isNumeric = /\d/.test(m.value);
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-white text-[#2E3F8C] flex items-center justify-center shadow-2xs mb-1">
                  <IconComp className="w-5 h-5" />
                </div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E3F8C] tracking-tight">
                  {isNumeric ? (
                    <AnimatedNumber value={m.value} delay={idx * 120} />
                  ) : (
                    m.value
                  )}
                </p>
                <p className="text-xs font-bold text-[#42403F] uppercase tracking-wider">
                  {m.label}
                </p>
                <p className="text-[11px] text-[#767BA5] max-w-[180px]">
                  {m.subText}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
