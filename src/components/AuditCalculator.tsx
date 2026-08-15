import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Download, PieChart, FileText } from 'lucide-react';

interface AuditCalculatorProps {
  onRequestFullReport: (data: any) => void;
}

export const AuditCalculator: React.FC<AuditCalculatorProps> = ({ onRequestFullReport }) => {
  const [propertyType, setPropertyType] = useState('Luxury High-Rise Apartments');
  const [monthlySpend, setMonthlySpend] = useState(10000);
  const [currentLeads, setCurrentLeads] = useState(120);
  const [targetUnits, setTargetUnits] = useState(15);

  // Calculations
  const conversionLiftPercent = 40; // Matches agency benchmark
  const projectedLeads = Math.round(currentLeads * (1 + conversionLiftPercent / 100));
  const leadIncrease = projectedLeads - currentLeads;
  const estimatedCostPerLead = Math.round(monthlySpend / currentLeads);
  const projectedCostPerLead = Math.round(monthlySpend / projectedLeads);
  const estimatedDeals = Math.max(1, Math.round(projectedLeads * 0.05));
  const projectedRevenueImpact = `$${(estimatedDeals * 250000).toLocaleString()}`;

  return (
    <section id="audit-tool" className="py-20 bg-[#E3E6EE]/40 relative border-t border-[#BAB8BE]/30">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2e3f8c] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1b1a] mb-3">
            Real Estate Marketing & Conversion Estimator
          </h2>
          <p className="text-base sm:text-lg text-[#454651]">
            Estimate your lead conversion lift, ROI potential, and optimal media mix with Beacon & Bolt's real estate agency benchmarks.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel (Left) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#BAB8BE] shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#142775] flex items-center gap-2 border-b border-gray-100 pb-3">
              <Sparkles className="w-5 h-5 text-[#2e3f8c]" />
              <span>Project Inputs</span>
            </h3>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-semibold text-[#1d1b1a] mb-2">
                Property / Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Luxury High-Rise Apartments',
                  'Beachfront Villas & Plots',
                  'Commercial Office Spaces',
                  'Integrated Township'
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropertyType(type)}
                    className={`py-2.5 px-3.5 text-xs font-semibold rounded-lg border text-left transition-all ${
                      propertyType === type
                        ? 'bg-[#2e3f8c] text-white border-[#2e3f8c] shadow-sm'
                        : 'bg-white text-[#454651] border-[#BAB8BE] hover:bg-gray-50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-[#1d1b1a]">
                  Current Monthly Digital Budget
                </label>
                <span className="text-lg font-bold text-[#2e3f8c]">
                  ${monthlySpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full accent-[#2e3f8c] h-2 bg-gray-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-[#757682] mt-1">
                <span>$2,000</span>
                <span>$25,000</span>
                <span>$50,000+</span>
              </div>
            </div>

            {/* Current Monthly Leads Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-[#1d1b1a]">
                  Current Monthly Inquiry Volume
                </label>
                <span className="text-lg font-bold text-[#2e3f8c]">
                  {currentLeads} inquiries
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={currentLeads}
                onChange={(e) => setCurrentLeads(Number(e.target.value))}
                className="w-full accent-[#2e3f8c] h-2 bg-gray-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-[#757682] mt-1">
                <span>20 leads</span>
                <span>250 leads</span>
                <span>500+ leads</span>
              </div>
            </div>

            {/* Target Inventory / Unit Sales */}
            <div>
              <label className="block text-sm font-semibold text-[#1d1b1a] mb-2">
                Target Inventory Units to Sell in Next Quarter
              </label>
              <div className="flex gap-3">
                {[5, 15, 30, 50].map((units) => (
                  <button
                    key={units}
                    type="button"
                    onClick={() => setTargetUnits(units)}
                    className={`flex-1 py-2 rounded-lg border text-xs font-semibold transition-all ${
                      targetUnits === units
                        ? 'bg-[#D8DCF4] text-[#142775] border-[#2e3f8c]'
                        : 'bg-white border-[#BAB8BE] text-[#454651]'
                    }`}
                  >
                    {units} Units
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Panel (Right) */}
          <div className="lg:col-span-5 bg-[#142775] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2e3f8c] rounded-full blur-2xl -z-0 opacity-50"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#a0afff]">
                  Projected Benchmark
                </span>
                <span className="bg-[#2e3f8c] text-white px-3 py-1 rounded-full text-xs font-bold">
                  +40% Conversion
                </span>
              </div>

              {/* Main Metric Highlight */}
              <div className="bg-white/10 p-5 rounded-xl border border-white/10 space-y-1">
                <p className="text-xs text-[#a0afff] uppercase font-semibold">
                  Projected Monthly Inquiries
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-white">
                    {projectedLeads}
                  </span>
                  <span className="text-sm text-emerald-300 font-bold flex items-center">
                    <TrendingUp className="w-4 h-4 mr-0.5 inline" />
                    +{leadIncrease} inquiries/mo
                  </span>
                </div>
                <p className="text-xs text-white/70 pt-1">
                  Baseline Cost per Lead reduced from ${estimatedCostPerLead} to ~${projectedCostPerLead}
                </p>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="text-xs text-[#a0afff]">Quarterly Close Target</p>
                  <p className="text-xl font-bold text-white mt-1">{estimatedDeals} Deals</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="text-xs text-[#a0afff]">Est. GDV Pipeline</p>
                  <p className="text-xl font-bold text-emerald-300 mt-1">{projectedRevenueImpact}</p>
                </div>
              </div>

              {/* Recommended Channel Mix */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-[#a0afff] uppercase tracking-wider flex items-center gap-1.5">
                  <PieChart className="w-3.5 h-3.5" />
                  <span>Recommended Campaign Mix</span>
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Meta HNWI Direct Lead Ads</span>
                    <span className="font-bold text-[#a0afff]">45%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#a0afff] h-full w-[45%]"></div>
                  </div>

                  <div className="flex justify-between items-center pt-1">
                    <span className="text-white/90">Google Search & Intent Keywords</span>
                    <span className="font-bold text-[#a0afff]">30%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#a0afff] h-full w-[30%]"></div>
                  </div>

                  <div className="flex justify-between items-center pt-1">
                    <span className="text-white/90">Interactive Sales Kit & WhatsApp Bot Funnel</span>
                    <span className="font-bold text-[#a0afff]">25%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#a0afff] h-full w-[25%]"></div>
                  </div>
                </div>
              </div>

              {/* Button to get full PDF Report */}
              <button
                onClick={() =>
                  onRequestFullReport({
                    propertyType,
                    monthlySpend,
                    currentLeads,
                    targetUnits,
                    projectedLeads,
                    leadIncrease,
                    projectedRevenueImpact,
                  })
                }
                className="w-full bg-white text-[#142775] hover:bg-[#dde1ff] py-3.5 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <FileText className="w-4 h-4 text-[#2e3f8c]" />
                <span>Get Customized Audit & Plan PDF</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-white/60">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>No obligation. Strategy roadmap delivered in 24 hours.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
