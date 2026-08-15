import React from 'react';
import { SERVICES_LIST } from '../data/agencyData';
import {
  Compass,
  Palette,
  Megaphone,
  Layout,
  Share2,
  Video,
  TrendingUp,
  Briefcase,
  MapPin,
  Globe,
  Lightbulb,
  Brain,
  BarChart3,
  Route,
  Target,
} from 'lucide-react';
import { ServiceCategory } from '../types';
import { ServiceCategoryBlock } from './ServiceCategoryBlock';

interface ServicesGridProps {
  onSelectCategory?: (service: ServiceCategory) => void;
  onRequestQuote: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectCategory,
  onRequestQuote,
}) => {
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#2E3F8C]' };
    switch (iconName) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Megaphone':
        return <Megaphone {...props} />;
      case 'Layout':
        return <Layout {...props} />;
      case 'Share2':
        return <Share2 {...props} />;
      case 'Video':
        return <Video {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'MapPin':
        return <MapPin {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'Lightbulb':
        return <Lightbulb {...props} />;
      case 'Brain':
        return <Brain {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      case 'Route':
        return <Route {...props} />;
      case 'Target':
        return <Target {...props} />;
      default:
        return <Globe {...props} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#FCFCFD]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#D8DCF4] text-[#2E3F8C] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <span>Capabilities Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#42403F] tracking-tight">
            Comprehensive Growth & Brand Services
          </h2>
          <p className="text-base sm:text-lg text-[#42403F]/80 font-normal">
            End-to-end expertise spanning strategic positioning, creative production, digital acquisition, and technology.
          </p>
        </div>

        {/* 11 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <ServiceCategoryBlock
              key={service.id}
              indexNumber={idx + 1}
              icon={renderIcon(service.icon)}
              title={service.title}
              description={service.description}
              deliverables={service.deliverables}
              onRequestQuote={onRequestQuote}
              quoteButtonText={`Request ${service.title} Quote`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
