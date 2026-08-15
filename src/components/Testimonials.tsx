import React, { useState } from 'react';
import { TESTIMONIALS_LIST } from '../data/agencyData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#FCFCFD]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Header + Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
              Client Endorsements
            </span>
            <h2 className="text-3xl font-extrabold text-[#42403F] tracking-tight">
              What Our Partners Say
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#BAB8BE]/50 hover:border-[#2E3F8C] hover:bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#BAB8BE]/50 hover:border-[#2E3F8C] hover:bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_LIST.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white p-7 rounded-xl border border-[#BAB8BE]/40 shadow-xs flex flex-col justify-between space-y-6 transition-all ${
                idx === activeIndex ? 'ring-2 ring-[#2E3F8C]/50 border-[#2E3F8C]' : ''
              }`}
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#D8DCF4]" />
                <p className="text-sm text-[#42403F] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#BAB8BE]/20 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#42403F]">{item.author}</p>
                  <p className="text-xs text-[#767BA5]">{item.title}, {item.company}</p>
                </div>

                {/* 4 Star Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(4)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
