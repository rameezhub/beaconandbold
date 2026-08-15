import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface ServiceCategoryBlockProps {
  indexNumber?: string | number;
  icon?: React.ReactNode;
  title: string;
  description: string;
  deliverables?: string[];
  onRequestQuote?: () => void;
  quoteButtonText?: string;
  className?: string;
}

export const ServiceCategoryBlock: React.FC<ServiceCategoryBlockProps> = ({
  indexNumber,
  icon,
  title,
  description,
  deliverables,
  onRequestQuote,
  quoteButtonText,
  className = '',
}) => {
  const formattedIndex =
    indexNumber !== undefined && indexNumber !== null
      ? typeof indexNumber === 'number'
        ? String(indexNumber).padStart(2, '0')
        : String(indexNumber)
      : undefined;

  return (
    <div
      className={`bg-white p-8 rounded-xl border border-[#BAB8BE]/40 shadow-xs hover:border-[#2E3F8C] hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${className}`}
    >
      <div>
        {/* Header Icon + Number */}
        {(icon || formattedIndex) && (
          <div className="flex items-center justify-between mb-5">
            {icon ? (
              <div className="w-12 h-12 rounded-lg bg-[#EEF2FF] flex items-center justify-center group-hover:bg-[#2E3F8C] group-hover:text-white transition-colors">
                {icon}
              </div>
            ) : (
              <div />
            )}
            {formattedIndex && (
              <span className="text-lg font-bold text-[#767BA5]">
                {formattedIndex}
              </span>
            )}
          </div>
        )}

        {/* Card Title */}
        <h3 className="text-2xl font-bold text-[#42403F] mb-3 group-hover:text-[#2E3F8C] transition-colors">
          {title}
        </h3>

        {/* Description Paragraph */}
        <p className="text-base text-[#42403F]/80 leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Checklist Items */}
        {deliverables && deliverables.length > 0 && (
          <div className="space-y-2.5 mb-6 border-t border-[#BAB8BE]/20 pt-4">
            {deliverables.map((deliv, dIdx) => (
              <div key={dIdx} className="flex items-center gap-2.5 text-base text-[#42403F]">
                <CheckCircle2 className="w-4 h-4 text-[#2E3F8C] flex-shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Link / Button */}
      {onRequestQuote && (
        <button
          onClick={onRequestQuote}
          className="w-full mt-2 pt-4 border-t border-gray-100 text-base font-semibold text-[#2E3F8C] hover:text-[#142775] flex items-center justify-between cursor-pointer group-hover:translate-x-0.5 transition-transform"
        >
          <span>{quoteButtonText || `Request ${title} Quote`}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
