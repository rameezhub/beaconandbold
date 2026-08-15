import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsappClick } from '../utils/analytics';

export const FloatingWhatsappButton: React.FC = () => {
  const handleClick = () => {
    trackWhatsappClick('floating_button');
    const text = encodeURIComponent("Hello Beacon & Bolt team, I would like to inquire about your branding and growth services.");
    window.open(`https://wa.me/919420170156?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-xl flex items-center gap-2 group transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold pr-1">
        WhatsApp Us
      </span>
    </button>
  );
};
