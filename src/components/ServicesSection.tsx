import React, { useState } from 'react';
import { Compass, Palette, Megaphone, ArrowRight, Layers, Eye, CheckCircle, ChevronRight, View, Sparkles } from 'lucide-react';
import { REAL_ESTATE_SERVICES, ADDITIONAL_SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'core' | 'additional'>('core');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'strategy':
        return <Compass className="w-7 h-7 text-[#2e3f8c]" />;
      case 'palette':
        return <Palette className="w-7 h-7 text-[#2e3f8c]" />;
      case 'campaign':
        return <Megaphone className="w-7 h-7 text-[#2e3f8c]" />;
      default:
        return <Layers className="w-7 h-7 text-[#2e3f8c]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#FCFCFD] relative border-t border-[#BAB8BE]/20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D8DCF4] text-[#2e3f8c] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1b1a] mb-4 tracking-tight">
            Services for Real Estate & Property Clients
          </h2>
          <p className="text-lg text-[#454651] font-normal leading-relaxed">
            Comprehensive brand and marketing solutions tailored to the unique lifecycles of property development.
          </p>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#f2edeb] p-1.5 rounded-xl inline-flex gap-1 border border-[#c6c5d3]">
            <button
              onClick={() => setActiveTab('core')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'core'
                  ? 'bg-white text-[#142775] shadow-md'
                  : 'text-[#454651] hover:text-[#142775]'
              }`}
            >
              Core Brand Pillars
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'additional'
                  ? 'bg-white text-[#142775] shadow-md'
                  : 'text-[#454651] hover:text-[#142775]'
              }`}
            >
              Sales Kit & On-Site Activations
            </button>
          </div>
        </div>

        {/* Core Pillars Grid */}
        {activeTab === 'core' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REAL_ESTATE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-[12px] shadow-[0px_4px_20px_rgba(46,63,140,0.05)] border border-[#BAB8BE] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 bg-[#D8DCF4] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2e3f8c] group-hover:text-white transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1d1b1a] mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-3.5 mb-8">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#2e3f8c] rounded-sm mt-2 flex-shrink-0"></span>
                        <span className="text-base text-[#454651] font-normal leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action inside card */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-base font-semibold text-[#2e3f8c] hover:text-[#142775] flex items-center gap-1.5 cursor-pointer group-hover:underline"
                  >
                    <span>View Deliverables</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="text-sm font-medium text-[#757682] bg-gray-50 px-2.5 py-1 rounded">
                    {service.estimatedTimeline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Sales Kit & On-Site Activations Grid */}
        {activeTab === 'additional' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADDITIONAL_SERVICES.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 rounded-[12px] shadow-[0px_4px_20px_rgba(46,63,140,0.05)] border border-[#BAB8BE] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#D8DCF4] text-[#2e3f8c] rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                    <Sparkles className="w-6 h-6 text-[#2e3f8c]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1d1b1a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#454651] mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {item.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-center gap-2 text-base text-[#1d1b1a]">
                        <CheckCircle className="w-4 h-4 text-[#2e3f8c] flex-shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onRequestQuote}
                  className="w-full mt-4 bg-[#f8f2f1] hover:bg-[#2e3f8c] hover:text-white text-[#142775] py-2.5 rounded-md font-semibold text-base transition-colors text-center"
                >
                  Request Module Proposal
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-[#2e3f8c] text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Need a Custom Campaign Plan for Your Property?
            </h3>
            <p className="text-[#a0afff] text-base max-w-xl">
              We create bespoke pre-launch, active sales, and channel partner strategies tailored to your project timeline.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="bg-white text-[#142775] hover:bg-[#dde1ff] px-8 py-4 rounded-md font-semibold text-base transition-colors flex-shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Book Strategy Discovery Session</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
