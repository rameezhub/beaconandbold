import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle, Clock, FileText, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 border-b border-gray-100 pb-4">
          <div className="inline-flex items-center gap-2 bg-[#D8DCF4] text-[#2e3f8c] px-3 py-1 rounded-full text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Estimated Timeline: {service.estimatedTimeline}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1b1a]">
            {service.title}
          </h2>
          <p className="text-sm text-[#454651]">
            {service.description}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-[#142775] uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#2e3f8c]" />
            <span>Full Agency Deliverables Checklist</span>
          </h3>

          <div className="bg-[#f8f2f1] p-4 sm:p-5 rounded-xl border border-[#c6c5d3]/50 space-y-3">
            {service.fullDeliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2e3f8c] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#1d1b1a] font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Agency Process Overview */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#142775] uppercase tracking-wider">
            Execution Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-[#FCFCFD] p-3 rounded-lg border border-[#BAB8BE]/40">
              <span className="font-bold text-[#2e3f8c] block mb-1">01. Discovery</span>
              <p className="text-[#454651]">Competitive landscape audit & developer goal mapping.</p>
            </div>
            <div className="bg-[#FCFCFD] p-3 rounded-lg border border-[#BAB8BE]/40">
              <span className="font-bold text-[#2e3f8c] block mb-1">02. Creative Concept</span>
              <p className="text-[#454651]">Bespoke positioning routes, moodboards & copywriting.</p>
            </div>
            <div className="bg-[#FCFCFD] p-3 rounded-lg border border-[#BAB8BE]/40">
              <span className="font-bold text-[#2e3f8c] block mb-1">03. Rollout</span>
              <p className="text-[#454651]">High-res asset delivery & campaign launch execution.</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back to Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-6 py-2.5 rounded-lg bg-[#2e3f8c] text-white text-sm font-semibold hover:bg-[#142775] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request {service.title} Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
