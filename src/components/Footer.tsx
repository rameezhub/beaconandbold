import React from 'react';
import { RoutePath } from '../types';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import logoImage from '../assets/logo.jpg';
import { handleImageError, LOGO_FALLBACK_SVG } from '../utils/imageFallback';
import { trackPhoneClick, trackOutboundClick, trackCtaClick } from '../utils/analytics';

interface FooterProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const industryLinks: { label: string; path: RoutePath }[] = [
    { label: 'Tourism & Travel', path: '/industries/tourism-travel' },
    { label: 'Hotels & Hospitality', path: '/industries/hotels-hospitality' },
    { label: 'Real Estate & Property', path: '/industries/real-estate-property' },
    { label: 'E-Commerce & Retail', path: '/industries/ecommerce-retail' },
    { label: 'B2B & Industrial Safety', path: '/industries/b2b-industrial-safety' },
    { label: 'Dining & Restaurants', path: '/industries/dining-restaurants' },
  ];

  return (
    <footer className="bg-[#2E3F8C] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div
              onClick={() => onNavigate('/', 'hero')}
              className="flex items-center cursor-pointer group inline-block"
            >
              <div className="bg-white px-4 py-2.5 rounded-xl shadow-xs group-hover:scale-105 transition-transform inline-block">
                <img
                  src={logoImage}
                  alt="Beacon & Bolt - Growth & Brand Agency"
                  className="h-14 sm:h-16 w-auto object-contain"
                  onError={handleImageError(LOGO_FALLBACK_SVG)}
                />
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              Scaling Digital Momentum for Modern Brands. A full-service growth & brand strategy partner for regional and enterprise leaders.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-white/80">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D8DCF4]" />
                <span>Mangalmurti Apartment, House No 825, Varawade, Achara Road, Kankavli - 416602</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D8DCF4]" />
                <a
                  href="tel:+919420170156"
                  onClick={() => trackPhoneClick('footer', '+91 94201 70156')}
                  className="hover:underline text-white"
                >
                  +91 94201 70156
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D8DCF4]" />
                <a
                  href="mailto:beaconandbolt@gmail.com"
                  onClick={() => trackOutboundClick('mailto:beaconandbolt@gmail.com', 'footer_email')}
                  className="hover:underline text-white"
                >
                  beaconandbolt@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button onClick={() => onNavigate('/', 'hero')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/', 'about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/blog')} className="hover:text-white transition-colors cursor-pointer font-semibold text-white">
                  Strategic Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/', 'work')} className="hover:text-white transition-colors cursor-pointer">
                  Case Studies &amp; Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/', 'faq')} className="hover:text-white transition-colors cursor-pointer">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/', 'contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Industry Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Sectors
            </h3>
            <ul className="space-y-2 text-xs text-white/80">
              {industryLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/50" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Action */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Get Started
            </h3>
            <button
              onClick={() => {
                trackCtaClick('Request a Quote', 'footer');
                onRequestQuote();
              }}
              className="bg-white text-[#2E3F8C] hover:bg-[#EEF2FF] w-full py-3 rounded-lg font-bold text-xs transition-all shadow-sm cursor-pointer"
            >
              Request a Quote
            </button>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 gap-3">
          <p>© {new Date().getFullYear()} Beacon & Bolt. All rights reserved.</p>

          {/* Small Low-Emphasis Line as Specified in Brief */}
          <p className="text-white/50 font-normal">
            Serving Goa, Sindhudurg & nearby
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('/terms-of-service')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
