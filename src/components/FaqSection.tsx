import React, { useState } from 'react';
import { FAQS_LIST } from '../data/agencyData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQPage JSON-LD schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS_LIST.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-[#FCFCFD]">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#D8DCF4] text-[#2E3F8C] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#42403F] tracking-tight">
            Clear Answers to Common Agency Queries
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const answerId = `faq-answer-${idx}`;
            return (
              <div
                key={`faq-item-${idx}`}
                className="bg-white rounded-xl border border-[#BAB8BE]/40 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base text-[#42403F] hover:text-[#2E3F8C] transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#2E3F8C]/50"
                >
                  <span>{faq.question}</span>
                  <div className="w-7 h-7 rounded-full bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="px-6 pb-6 pt-1 text-sm text-[#42403F]/80 leading-relaxed border-t border-[#BAB8BE]/20 font-normal"
                  >
                    {faq.answer}
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
