import React, { useState } from 'react';
import { MessageSquare, Menu, X, Send, Lightbulb, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { ChatMessage } from '../types';

interface FloatingChatWidgetProps {
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export const FloatingChatWidget: React.FC<FloatingChatWidgetProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: 'Hello! I am the Beacon & Bolt Real Estate Strategy AI. How can I help with your property brand positioning, floor plan design, or lead conversion campaigns today?',
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    'Pre-launch strategy for Goa villas',
    'How to lower Meta cost-per-lead',
    'Deliverables for Brand Identity',
    'NRI buyer campaign tactics'
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate smart response
    setTimeout(() => {
      let reply = 'Thank you for your question! For real estate developments, our primary framework focuses on three phases: 1) High-HNWI Positioning, 2) High-Impact Creative & Sales Kit Collateral, and 3) Performance Funnels with double-step WhatsApp lead qualification.';

      const lower = query.toLowerCase();
      if (lower.includes('goa') || lower.includes('villa') || lower.includes('pre-launch')) {
        reply = 'For luxury beachfront villas or Goa sanctuaries, we recommend a 4-week teaser campaign: 1) Exclusive VIP invitation box for brokers, 2) High-impact video creative on Meta & Instagram, and 3) Targeted ad sets for HNWIs in Mumbai, Pune, Delhi & GCC.';
      } else if (lower.includes('cost') || lower.includes('lead') || lower.includes('meta')) {
        reply = 'To reduce Cost Per Lead (CPL) while improving quality: We implement interactive quiz landing pages that filter out non-budget buyers before form submission, integrated with automated WhatsApp bots that verify lead phone numbers in real-time.';
      } else if (lower.includes('identity') || lower.includes('deliverables')) {
        reply = 'Our Brand Identity package includes 5 trademark-screened naming territories, logomark & color system (Indigo/Periwinkle), experience center signage specs, sales brochure templates, and a complete brand guidelines document.';
      } else if (lower.includes('nri') || lower.includes('gcc')) {
        reply = 'For NRI buyers in UAE, Qatar, and London: We run high-intent Google Search campaigns paired with interactive sales kit landing pages and direct 1-on-1 Zoom booking widgets with your sales leaders.';
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Buttons Bar (Matches Prompt HTML) */}
      <nav className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3">
        {/* Chat Toggle Button */}
        <button
          onClick={() => {
            setChatOpen(!chatOpen);
            setQuickMenuOpen(false);
          }}
          className={`rounded-full p-4 shadow-xl border border-[#BAB8BE]/40 flex items-center justify-center transition-all duration-300 cursor-pointer ${
            chatOpen
              ? 'bg-[#2e3f8c] text-white scale-105'
              : 'bg-white text-[#142775] hover:scale-110 active:scale-95'
          }`}
          aria-label="Open Strategy Assistant Chat"
          title="Ask Real Estate AI Assistant"
        >
          <MessageSquare className="w-6 h-6" />
        </button>

        {/* Menu Toggle Button */}
        <button
          onClick={() => {
            setQuickMenuOpen(!quickMenuOpen);
            setChatOpen(false);
          }}
          className={`rounded-full p-4 shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
            quickMenuOpen
              ? 'bg-[#1d1b1a] text-white scale-105'
              : 'bg-[#142775] text-white hover:scale-110 active:scale-95'
          }`}
          aria-label="Open Navigation Menu"
          title="Quick Navigation"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Quick Menu Popover */}
      {quickMenuOpen && (
        <div className="fixed bottom-24 right-6 md:right-8 z-50 bg-[#142775] text-white p-5 rounded-2xl shadow-2xl border border-white/20 w-64 space-y-3 animate-in fade-in zoom-in-95">
          <div className="flex justify-between items-center border-b border-white/15 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D8DCF4]">
              Beacon & Bolt Menu
            </span>
            <button
              onClick={() => setQuickMenuOpen(false)}
              className="text-white/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 text-sm font-medium">
            <button
              onClick={() => {
                onNavigate('strategy');
                setQuickMenuOpen(false);
              }}
              className="w-full text-left py-1.5 px-2 rounded hover:bg-white/10 transition-colors flex justify-between items-center"
            >
              <span>Strategy</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
            </button>
            <button
              onClick={() => {
                onNavigate('branding');
                setQuickMenuOpen(false);
              }}
              className="w-full text-left py-1.5 px-2 rounded hover:bg-white/10 transition-colors flex justify-between items-center"
            >
              <span>Branding & Identity</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
            </button>
            <button
              onClick={() => {
                onNavigate('growth');
                setQuickMenuOpen(false);
              }}
              className="w-full text-left py-1.5 px-2 rounded hover:bg-white/10 transition-colors flex justify-between items-center"
            >
              <span>Growth & Campaigns</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
            </button>
            <button
              onClick={() => {
                onNavigate('audit-tool');
                setQuickMenuOpen(false);
              }}
              className="w-full text-left py-1.5 px-2 rounded hover:bg-white/10 transition-colors flex justify-between items-center text-[#a0afff] font-semibold"
            >
              <span>Audit Calculator</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#a0afff]" />
            </button>
          </div>

          <div className="pt-2 border-t border-white/15">
            <button
              onClick={() => {
                setQuickMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full bg-[#2e3f8c] hover:bg-white hover:text-[#142775] text-white py-2 rounded-lg text-xs font-bold transition-all text-center"
            >
              Get Free Audit
            </button>
          </div>
        </div>
      )}

      {/* Strategy AI Chat Modal */}
      {chatOpen && (
        <div className="fixed bottom-24 right-4 sm:right-8 z-50 bg-white rounded-2xl shadow-2xl border border-[#BAB8BE] w-[90vw] sm:w-[380px] max-h-[500px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95">
          
          {/* Chat Header */}
          <div className="bg-[#142775] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2e3f8c] flex items-center justify-center text-white">
                <Lightbulb className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-none">Beacon & Bolt AI</h4>
                <p className="text-[11px] text-[#a0afff] mt-0.5">Real Estate Strategy Consultant</p>
              </div>
            </div>

            <button
              onClick={() => setChatOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-[#FCFCFD] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl ${
                    m.sender === 'user'
                      ? 'bg-[#2e3f8c] text-white rounded-br-none'
                      : 'bg-[#f8f2f1] text-[#1d1b1a] border border-[#c6c5d3]/50 rounded-bl-none'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1">{m.timestamp}</span>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-gray-50 border-t border-gray-100 flex gap-1.5 overflow-x-auto text-[11px]">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="bg-white hover:bg-[#D8DCF4] border border-[#c6c5d3] text-[#142775] px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 transition-colors"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about real estate strategy..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 text-xs px-3 py-2 border border-[#BAB8BE] rounded-lg outline-none focus:border-[#2e3f8c]"
            />
            <button
              onClick={() => handleSend()}
              className="bg-[#2e3f8c] hover:bg-[#142775] text-white p-2 rounded-lg transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
