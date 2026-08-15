import React, { useState } from 'react';
import { CLIENT_TRUST_ITEMS } from '../data/agencyData';
import { ShieldCheck } from 'lucide-react';

import zatagsLogo from '../assets/clients/zatags.png';
import ikToursLogo from '../assets/clients/ik-tours-travels-1.jpg';
import catchCuisineLogo from '../assets/clients/catch-cuisine.png';
import hotelLogo from '../assets/clients/hotel.png';
import velfireLogo from '../assets/clients/velfire-fire-security.png';
import realEstateLogo from '../assets/clients/real-estate-clients.png';

const LOGO_MAP: Record<string, string> = {
  '1': zatagsLogo,
  '2': ikToursLogo,
  '3': catchCuisineLogo,
  '4': hotelLogo,
  '5': velfireLogo,
  '6': realEstateLogo,
};

export const ClientTrustStrip: React.FC = () => {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const handleLogoError = (id: string) => {
    setFailedLogos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-12 bg-[#E3E6EE]/50 border-y border-[#BAB8BE]/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block mb-1">
              Proven Business Performance
            </span>
            <h2 className="text-2xl font-bold text-[#42403F]">
              Trusted by Leading Regional & Enterprise Brands
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#767BA5] bg-white px-3.5 py-1.5 rounded-full border border-[#BAB8BE]/40 shadow-xs self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#2E3F8C]" />
            <span>Verified Campaign Metric Outcomes</span>
          </div>
        </div>

        {/* Uniform Grid of 6 White Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENT_TRUST_ITEMS.map((item) => {
            const logo = LOGO_MAP[item.id];
            const hasFailed = failedLogos[item.id];

            return (
              <div
                key={item.id}
                className="bg-white p-4 sm:p-5 rounded-xl border border-[#BAB8BE]/40 shadow-xs hover:border-[#2E3F8C] hover:shadow-md transition-all duration-300 flex flex-col items-start"
              >
                {logo && !hasFailed ? (
                  <img
                    src={logo}
                    alt={item.name}
                    className="h-10 w-auto object-contain mb-2"
                    onError={() => handleLogoError(item.id)}
                  />
                ) : (
                  <div className="h-10 mb-2 flex items-center justify-center bg-[#EEF2FF] text-[#2E3F8C] font-semibold text-xs px-3 rounded-md border border-[#2E3F8C]/20">
                    Logo
                  </div>
                )}
                <p className="text-sm font-bold text-[#42403F] line-clamp-1">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

