import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { RoutePath } from '../types';
import logoImage from '../assets/logo.jpg';
import { handleImageError, LOGO_FALLBACK_SVG } from '../utils/imageFallback';
import { trackCtaClick } from '../utils/analytics';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath, targetHash?: string) => void;
  onRequestQuote: () => void;
  onOpenAiAdvisor?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onRequestQuote,
  onOpenAiAdvisor,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('Home');

  const navLinks = [
    { label: 'Home', path: '/' as RoutePath, hash: 'hero' },
    { label: 'About', path: '/' as RoutePath, hash: 'about' },
    { label: 'Blog', path: '/blog' as RoutePath },
    { label: 'Industries', path: '/' as RoutePath, hash: 'industries' },
    { label: 'Work', path: '/' as RoutePath, hash: 'work' },
    { label: 'FAQ', path: '/' as RoutePath, hash: 'faq' },
    { label: 'Contact', path: '/' as RoutePath, hash: 'contact' },
  ];

  const handleLinkClick = (label: string, path: RoutePath, hash?: string) => {
    setActiveTab(label);
    onNavigate(path, hash);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-[#BAB8BE]/20 shadow-xs transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div
          onClick={() => handleLinkClick('Home', '/', 'hero')}
          className="flex items-center cursor-pointer group shrink-0"
        >
          <img
            src={logoImage}
            alt="Beacon & Bolt - Growth & Brand Agency"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            onError={handleImageError(LOGO_FALLBACK_SVG)}
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.label === 'Blog'
              ? currentPath.startsWith('/blog')
              : activeTab === link.label && currentPath === '/';
            const targetHref = link.hash ? `${link.path}#${link.hash}` : link.path;
            return (
              <a
                key={link.label}
                href={targetHref}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.label, link.path, link.hash);
                }}
                className={`relative py-1 text-sm font-medium transition-colors cursor-pointer font-body ${
                  isActive
                    ? 'text-[#2E3F8C] font-semibold'
                    : 'text-[#42403F] hover:text-[#2E3F8C]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#2E3F8C] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {onOpenAiAdvisor && (
            <button
              onClick={onOpenAiAdvisor}
              className="bg-[#EEF2FF] text-[#2E3F8C] hover:bg-[#D8DCF4] border border-[#2E3F8C]/20 px-4 py-2.5 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2E3F8C]" />
              <span>AI Advisor</span>
            </button>
          )}
          <button
            onClick={() => {
              trackCtaClick('Request a Quote', 'navbar');
              onRequestQuote();
            }}
            className="bg-[#2E3F8C] text-white hover:bg-[#142775] px-6 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:shadow-md"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
          {onOpenAiAdvisor && (
            <button
              onClick={onOpenAiAdvisor}
              className="bg-[#EEF2FF] text-[#2E3F8C] border border-[#2E3F8C]/20 px-2 sm:px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-[#2E3F8C]" />
              <span className="hidden sm:inline">AI Advisor</span>
            </button>
          )}
          <button
            onClick={onRequestQuote}
            className="bg-[#2E3F8C] text-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-md text-xs font-semibold cursor-pointer"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 text-[#2E3F8C] hover:bg-[#D8DCF4]/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav aria-label="Mobile Navigation" className="lg:hidden bg-white border-b border-[#BAB8BE]/30 px-6 py-6 shadow-xl space-y-3 animate-in fade-in">
          {navLinks.map((link) => {
            const targetHref = link.hash ? `${link.path}#${link.hash}` : link.path;
            return (
              <a
                key={link.label}
                href={targetHref}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.label, link.path, link.hash);
                }}
                className={`block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium font-body ${
                  activeTab === link.label
                    ? 'bg-[#EEF2FF] text-[#2E3F8C] font-semibold'
                    : 'text-[#42403F] hover:bg-[#D8DCF4]/30 hover:text-[#2E3F8C]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-[#BAB8BE]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full bg-[#2E3F8C] text-white py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

