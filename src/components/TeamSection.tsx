import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/agencyData';
import { User, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleMemberClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedMember((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedMember((prev) => (prev === id ? null : id));
    } else if (e.key === 'Escape') {
      setSelectedMember(null);
    }
  };

  return (
    <section 
      className="py-24 bg-[#E3E6EE]/30 border-y border-[#BAB8BE]/30"
      onClick={() => setSelectedMember(null)}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
            Leadership & Vision
          </span>
          <h2 className="text-3xl font-extrabold text-[#42403F] tracking-tight">
            Meet Our Beacons
          </h2>
          <p className="text-sm text-[#42403F]/80">
            Multidisciplinary strategists, art directors, and growth engineers driving client campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => {
            const isSelected = selectedMember === member.id;
            const isAnySelected = selectedMember !== null;

            return (
              <div
                key={member.id}
                role="button"
                tabIndex={0}
                onClick={(e) => handleMemberClick(e, member.id)}
                onKeyDown={(e) => handleKeyDown(e, member.id)}
                aria-pressed={isSelected}
                className={`bg-white rounded-xl border p-6 shadow-xs transition-all duration-300 flex flex-col items-center text-center space-y-4 cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-[#2E3F8C] ${
                  isSelected
                    ? 'border-[#2E3F8C] shadow-xl scale-105 sm:scale-110 z-10 ring-2 ring-[#2E3F8C]/30'
                    : isAnySelected
                    ? 'scale-95 opacity-70 border-[#BAB8BE]/30'
                    : 'border-[#BAB8BE]/40 hover:border-[#2E3F8C] hover:shadow-md scale-100 opacity-100'
                }`}
              >
                {/* Avatar Box with Fallback - Square with soft rounded corners */}
                <div
                  className={`w-28 h-28 rounded-2xl bg-[#D8DCF4] border-2 border-[#2E3F8C]/20 overflow-hidden flex items-center justify-center relative shadow-sm transition-transform duration-300 ${
                    isSelected ? 'scale-105' : ''
                  }`}
                >
                  {!failedImages[member.id] ? (
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(member.id)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#2E3F8C] text-white flex flex-col items-center justify-center">
                      <User className="w-10 h-10 mb-1" />
                      <span className="text-[10px] font-bold tracking-wider uppercase">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text Info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#42403F]">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-[#2E3F8C] bg-[#EEF2FF] px-2.5 py-1 rounded-full inline-block">
                    {member.role}
                  </span>
                  <p className="text-xs text-[#42403F]/80 leading-relaxed pt-2 font-normal">
                    {member.bio}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
