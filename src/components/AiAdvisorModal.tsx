import React, { useState } from 'react';
import { Sparkles, X, Send } from 'lucide-react';

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const AiAdvisorModal: React.FC<AiAdvisorModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Hi! I'm here to help answer questions about Beacon & Bolt's services, brand strategy, marketing campaigns, or performance growth. How can I help?",
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const quickPrompts = [
    'What services do you offer?',
    'How do you help real estate & tourism brands?',
    'What is your ROI strategy?',
    'Request a custom quote',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    if (query === 'Request a custom quote') {
      onClose();
      onRequestQuote();
      return;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let reply = "Beacon & Bolt is a full-service growth & brand agency. We specialize in Strategic Positioning, Performance Marketing, Visual Identity, and Digital Experience for ambitious brands.";

      const lower = query.toLowerCase();
      if (lower.includes('service') || lower.includes('offer')) {
        reply = "We offer 11 core capabilities across 3 pillars:\n1. Branding & Identity (Logos, Visual Systems, Brand Guidelines)\n2. Performance & Growth (Meta/Google Ads, SEO, Social Media)\n3. Digital & Technical (Websites, Sales Funnels, WhatsApp Automation)";
      } else if (lower.includes('real estate') || lower.includes('tourism') || lower.includes('hotel') || lower.includes('hospitality')) {
        reply = "For Real Estate, Tourism, and Hospitality brands, we build complete sales systems: high-impact promo assets, 3D experience kits, HNW buyer lead filters, and automated WhatsApp lead qualification.";
      } else if (lower.includes('roi') || lower.includes('performance') || lower.includes('ad')) {
        reply = "Our 100% ROI-focused execution combines double-step WhatsApp lead qualification, high-converting landing pages, and targeted Meta & Google ad campaigns to lower cost-per-lead.";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('budget') || lower.includes('quote')) {
        reply = "Project engagements are tailored to your industry and growth goals. Click 'Request a Quote' above or choose 'Request a custom quote' here to view customized proposal options!";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full sm:w-[420px] h-[580px] max-h-[85vh] rounded-t-2xl sm:rounded-2xl shadow-2xl border border-[#BAB8BE]/40 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
        {/* Header */}
        <div className="bg-[#142775] text-white px-5 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2E3F8C] flex items-center justify-center text-white border border-white/20 shadow-xs">
              <Sparkles className="w-5 h-5 text-[#D8DCF4]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-white leading-none">Beacon & Bolt AI Advisor</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-[#D8DCF4] mt-0.5 font-medium">Digital Strategy & Growth Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close AI Advisor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FCFCFD]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#2E3F8C] text-white rounded-br-none shadow-xs'
                    : 'bg-white text-[#42403F] border border-[#BAB8BE]/30 rounded-bl-none shadow-2xs whitespace-pre-line'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-[#757682] mt-1 px-1">{msg.timestamp}</span>
            </div>
          ))}
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2 bg-white border-t border-[#BAB8BE]/20 flex flex-wrap gap-1.5 shrink-0">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSend(prompt)}
              className="text-[11px] font-medium text-[#2E3F8C] bg-[#EEF2FF] hover:bg-[#D8DCF4] px-2.5 py-1 rounded-full border border-[#2E3F8C]/15 transition-colors cursor-pointer whitespace-nowrap"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-white border-t border-[#BAB8BE]/30 flex items-center gap-2 shrink-0"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our services, ROI, campaigns..."
            className="flex-1 px-3.5 py-2.5 text-xs bg-[#FCFCFD] border border-[#BAB8BE]/50 rounded-lg focus:outline-none focus:border-[#2E3F8C] text-[#42403F]"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-[#2E3F8C] hover:bg-[#142775] disabled:opacity-40 text-white p-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center shrink-0"
            aria-label="Send Message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
