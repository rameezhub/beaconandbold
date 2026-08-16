import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, MessageCircle, FileText, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { getAdvisorResponse, AdvisorAnswer } from '../utils/aiAdvisorKnowledge';

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
  actionType?: 'whatsapp' | 'quote' | 'services' | 'none';
  actionLabel?: string;
  actionUrl?: string;
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
      text: "Hi! I'm the Beacon & Bolt Assistant. I can answer questions about our 15 service capabilities, 6 industry solutions, client results, and 5-stage execution process.\n\n💡 *I can help answer questions about our services — for detailed proposals, please use our contact form or WhatsApp.*",
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  if (!isOpen) return null;

  const quickPrompts = [
    'What services do you offer?',
    'How do you help Real Estate brands?',
    'How long does a campaign take?',
    'What is your contact info?',
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
    setIsTyping(true);

    setTimeout(() => {
      const response: AdvisorAnswer = getAdvisorResponse(query);

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType: response.actionType,
        actionLabel: response.actionLabel,
        actionUrl: response.actionUrl,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  return (
    <div
      id="ai-advisor-overlay"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in"
    >
      <div
        id="ai-advisor-container"
        className="bg-white w-full sm:w-[440px] h-[600px] max-h-[90vh] rounded-t-2xl sm:rounded-2xl shadow-2xl border border-[#BAB8BE]/40 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4"
      >
        {/* Header */}
        <div className="bg-[#142775] text-white px-5 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2E3F8C] flex items-center justify-center text-white border border-white/20 shadow-xs">
              <Sparkles className="w-5 h-5 text-[#D8DCF4]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-white leading-none">Beacon & Bolt Advisor</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-[#D8DCF4] mt-0.5 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-300" />
                Verified Site Knowledge Base
              </p>
            </div>
          </div>
          <button
            id="close-ai-advisor-button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close AI Advisor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Disclaimer Bar */}
        <div className="bg-[#EEF2FF] border-b border-[#BAB8BE]/25 px-4 py-2 text-[11px] text-[#2E3F8C] font-medium flex items-center justify-between shrink-0">
          <span>Answers grounded in real agency data</span>
          <span className="text-[10px] text-[#767BA5] uppercase tracking-wider font-semibold">100% Verified</span>
        </div>

        {/* Message Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FCFCFD]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#2E3F8C] text-white rounded-br-none shadow-xs'
                    : 'bg-white text-[#42403F] border border-[#BAB8BE]/30 rounded-bl-none shadow-2xs whitespace-pre-line'
                }`}
              >
                {msg.text}

                {/* Contextual Bot Action Buttons */}
                {msg.sender === 'bot' && msg.actionType === 'whatsapp' && (
                  <div className="mt-3 pt-2.5 border-t border-[#BAB8BE]/20">
                    <a
                      href={msg.actionUrl || 'https://wa.me/919420170156'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{msg.actionLabel || 'Chat on WhatsApp'}</span>
                      <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-80" />
                    </a>
                  </div>
                )}

                {msg.sender === 'bot' && msg.actionType === 'quote' && (
                  <div className="mt-3 pt-2.5 border-t border-[#BAB8BE]/20 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onRequestQuote();
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#2E3F8C] hover:bg-[#142775] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{msg.actionLabel || 'Request a Quote'}</span>
                    </button>
                    <a
                      href="https://wa.me/919420170156"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white border border-[#BAB8BE]/40 text-[#42403F] hover:text-[#2E3F8C] hover:border-[#2E3F8C] px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Ask via WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>
              <span className="text-[10px] text-[#757682] mt-1 px-1">{msg.timestamp}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 text-xs text-[#767BA5] px-2 py-1">
              <span className="w-2 h-2 rounded-full bg-[#2E3F8C] animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-[#2E3F8C] animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-[#2E3F8C] animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="ml-1 text-[11px]">Consulting site knowledge...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-3 py-2 bg-white border-t border-[#BAB8BE]/20 flex flex-wrap gap-1.5 shrink-0 max-h-24 overflow-y-auto">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              id={`quick-prompt-${i}`}
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
            id="ai-advisor-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our 15 capabilities, industries, timeline..."
            className="flex-1 px-3.5 py-2.5 text-xs bg-[#FCFCFD] border border-[#BAB8BE]/50 rounded-lg focus:outline-none focus:border-[#2E3F8C] text-[#42403F]"
          />
          <button
            type="submit"
            id="send-ai-advisor-message"
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

