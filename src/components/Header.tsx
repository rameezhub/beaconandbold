import React, { useState } from 'react';
import { ArrowRight, Menu, X, Building2, Sparkles, PhoneCall } from 'lucide-react';
import logoImage from '../assets/logo.jpg';
import { handleImageError, LOGO_FALLBACK_SVG } from '../utils/imageFallback';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onRequestQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'strategy', label: 'Strategy' },
    { id: 'branding', label: 'Branding' },
    { id: 'growth', label: 'Growth' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'audit-tool', label: 'Audit Calculator' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#FCFCFD]/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-[#BAB8BE]/30 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-4 md:px-10 max-w-[1280px] mx-auto h-20">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center cursor-pointer group shrink-0"
        >
          <img
            src={logoImage}
            alt="Beacon & Bolt - Growth & Brand Agency"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            onError={handleImageError(LOGO_FALLBACK_SVG)}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium text-sm transition-all pb-1 ${
                  isActive
                    ? 'text-[#142775] border-b-2 border-[#142775] font-semibold'
                    : 'text-[#454651] hover:text-[#142775]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onRequestQuote}
            className="bg-[#2e3f8c] text-white px-6 py-3 rounded-md hover:bg-[#142775] transition-all font-semibold text-sm flex items-center gap-2 shadow-[0px_4px_12px_rgba(46,63,140,0.18)] hover:shadow-md cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onRequestQuote}
            className="bg-[#2e3f8c] text-white px-3 py-2 rounded text-xs font-semibold"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#142775] hover:bg-[#D8DCF4]/50 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#BAB8BE]/30 px-6 py-6 shadow-xl space-y-4">
          <div className="space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-2 px-3 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? 'bg-[#D8DCF4] text-[#142775] font-semibold'
                    : 'text-[#454651] hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full bg-[#2e3f8c] text-white py-3 rounded-md font-semibold text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Get Free Marketing Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
