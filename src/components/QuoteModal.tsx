import React, { useState, useEffect } from 'react';
import { SERVICES_LIST } from '../data/agencyData';
import { ContactFormData } from '../types';
import { X, Send, CheckCircle, Lightbulb } from 'lucide-react';
import { trackFormSubmission, trackWhatsappClick } from '../utils/analytics';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  industryContext?: string; // e.g. "Real Estate & Property"
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  industryContext,
}) => {
  const getDefaultCompany = (ctx?: string): string => {
    if (!ctx) return '';
    switch (ctx) {
      case 'Tourism & Travel':
        return 'Tourism & Travel Business';
      case 'Hotels & Hospitality':
        return 'Hotel & Hospitality Business';
      case 'Real Estate & Property':
        return 'Real Estate & Property Business';
      case 'E-Commerce & Retail':
        return 'E-Commerce & Retail Business';
      case 'B2B & Industrial Safety':
        return 'Fire & Industrial Safety Business';
      case 'Dining & Restaurants':
        return 'Restaurant & Dining Business';
      default:
        return '';
    }
  };

  const [selectedCompany, setSelectedCompany] = useState<string>(() =>
    getDefaultCompany(industryContext)
  );
  const [customCompany, setCustomCompany] = useState<string>('');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: getDefaultCompany(industryContext),
    customCompany: '',
    city: '',
    phone: '',
    email: '',
    serviceInterested: preselectedService || 'Brand Strategy',
    projectDetails: '',
    budget: '₹1 Lakh - ₹3 Lakhs',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const defaultVal = getDefaultCompany(industryContext);
      setSelectedCompany(defaultVal);
      setCustomCompany('');
      setSubmitted(false);
      setIsSubmitting(false);
      setFormData({
        name: '',
        company: defaultVal,
        customCompany: '',
        city: '',
        phone: '',
        email: '',
        serviceInterested: preselectedService || 'Brand Strategy',
        projectDetails: '',
        budget: '₹1 Lakh - ₹3 Lakhs',
      });
    }
  }, [isOpen, industryContext, preselectedService]);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getIndustryScopeBadge = (ctx: string) => {
    switch (ctx) {
      case 'Real Estate & Property':
        return 'Real Estate & Property — Full-Stack Branding & Performance Marketing';
      case 'Tourism & Travel':
        return 'Tourism & Travel — Booking Funnels & Digital Marketing';
      case 'Hotels & Hospitality':
        return 'Hotels & Hospitality — Direct Booking & Brand Identity';
      case 'E-Commerce & Retail':
        return 'E-Commerce & Retail — D2C Sales Growth & Performance Ads';
      case 'B2B & Industrial Safety':
        return 'B2B & Industrial Safety — Enterprise Branding & Lead Generation';
      case 'Dining & Restaurants':
        return 'Dining & Restaurants — Culinary Branding & Social Engagement';
      default:
        return `${ctx} — Full-Stack Branding & Performance Marketing`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const isOtherType =
      selectedCompany === 'Other / New Brand' ||
      selectedCompany === 'Other' ||
      selectedCompany === 'Other Industry';
    const rawCompany = isOtherType ? customCompany : selectedCompany;
    const companyName = (rawCompany || 'N/A').trim().slice(0, 100);
    const budgetVal = formData.budget || '₹1 Lakh - ₹3 Lakhs';

    const safeName = formData.name.trim().slice(0, 100);
    const safeCity = formData.city.trim().slice(0, 100);
    const safePhone = formData.phone.trim().slice(0, 30);
    const safeEmail = formData.email.trim().slice(0, 100);
    const safeDetails = (formData.projectDetails || 'None provided').trim().slice(0, 1000);

    let waText = '';
    let mailtoSubject = '';
    let mailtoBody = '';

    if (industryContext) {
      const scopeBadge = getIndustryScopeBadge(industryContext);
      const uppercaseContext = industryContext.toUpperCase();

      waText = encodeURIComponent(
        `*New ${uppercaseContext} Proposal Request*\n\n` +
        `*Industry:* ${industryContext}\n` +
        `*Service Scope:* ${scopeBadge}\n` +
        `*Name:* ${safeName}\n` +
        `*Company/Brand:* ${companyName}\n` +
        `*City:* ${safeCity}\n` +
        `*Phone/WhatsApp:* ${safePhone}\n` +
        `*Email:* ${safeEmail}\n` +
        `*Budget Range:* ${budgetVal}\n` +
        `*Project Details:* ${safeDetails}`
      );

      mailtoSubject = encodeURIComponent(`${industryContext} Proposal Request from ${safeName}`);
      mailtoBody = encodeURIComponent(
        `New ${uppercaseContext} inquiry:\n\n` +
        `Industry: ${industryContext}\n` +
        `Service Scope: ${scopeBadge}\n` +
        `Name: ${safeName}\n` +
        `Company/Brand: ${companyName}\n` +
        `City: ${safeCity}\n` +
        `Phone/WhatsApp: ${safePhone}\n` +
        `Email: ${safeEmail}\n` +
        `Budget Range: ${budgetVal}\n\n` +
        `Project Details:\n${safeDetails}`
      );
    } else {
      waText = encodeURIComponent(
        `*New Beacon & Bolt Quote Request*\n\n` +
        `*Name:* ${safeName}\n` +
        `*Company:* ${companyName}\n` +
        `*City:* ${safeCity}\n` +
        `*Phone:* ${safePhone}\n` +
        `*Email:* ${safeEmail}\n` +
        `*Service Interested:* ${formData.serviceInterested}\n` +
        `*Budget Range:* ${budgetVal}\n` +
        `*Project Details:* ${safeDetails}`
      );

      mailtoSubject = encodeURIComponent(`Quote Request from ${safeName}`);
      mailtoBody = encodeURIComponent(
        `Name: ${safeName}\nCompany: ${companyName}\nCity: ${safeCity}\nPhone: ${safePhone}\nEmail: ${safeEmail}\nService: ${formData.serviceInterested}\nBudget Range: ${budgetVal}\n\nDetails:\n${safeDetails}`
      );
    }

    const waUrl = `https://wa.me/919420170156?text=${waText}`;

    trackFormSubmission(industryContext ? 'industry_quote' : 'general_quote', {
      industry: industryContext || 'General',
      service: formData.serviceInterested,
      budget: formData.budget,
      company: companyName,
    });
    trackWhatsappClick('quote_modal');

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const isCustomCompanyRequired =
    selectedCompany === 'Other / New Brand' ||
    selectedCompany === 'Other' ||
    selectedCompany === 'Other Industry';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#BAB8BE]/40 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-[#2E3F8C] p-1 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#42403F]">
              {industryContext ? `${industryContext} Proposal Request` : 'Custom Quote Request'} Dispatched
            </h3>
            <p className="text-xs text-[#42403F]/80 max-w-sm mx-auto">
              Thank you, <span className="font-bold">{formData.name}</span>! Your {industryContext ? `${industryContext} proposal` : 'inquiry'} request has been routed to our strategy team and opened via WhatsApp.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-[#2E3F8C] text-white px-6 py-2.5 rounded-lg text-xs font-semibold cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#2E3F8C] text-white flex items-center justify-center">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-[#42403F]">
                {industryContext ? `Request ${industryContext} Proposal` : 'Request Custom Proposal'}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Priyesh Sawant"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#BAB8BE]/60 text-xs focus:outline-none focus:border-[#2E3F8C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1">
                    Company / Brand Name
                  </label>
                  <select
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#BAB8BE]/60 text-xs focus:outline-none focus:border-[#2E3F8C]"
                  >
                    <option value="">Select your business type or name</option>

                    <optgroup label="I'm a new business in:">
                      <option value="Tourism & Travel Business">Tourism & Travel Business</option>
                      <option value="Hotel & Hospitality Business">Hotel & Hospitality Business</option>
                      <option value="Restaurant & Dining Business">Restaurant & Dining Business</option>
                      <option value="Real Estate & Property Business">Real Estate & Property Business</option>
                      <option value="Fire & Industrial Safety Business">Fire & Industrial Safety Business</option>
                      <option value="E-Commerce & Retail Business">E-Commerce & Retail Business</option>
                      <option value="Local Business / Startup">Local Business / Startup</option>
                      <option value="Other Industry">Other Industry</option>
                    </optgroup>

                    <optgroup label="Existing Client Reference">
                      <option value="Zatags">Zatags</option>
                      <option value="IK Tours & Travels">IK Tours & Travels</option>
                      <option value="Catch Cuisine">Catch Cuisine</option>
                      <option value="Hotel Bhavyam">Hotel Bhavyam</option>
                      <option value="Velfire Fire Security Service">Velfire Fire Security Service</option>
                      <option value="Real Estate Clients">Real Estate Clients</option>
                    </optgroup>

                    <option value="Other / New Brand">Other / New Brand</option>
                  </select>
                </div>
              </div>

              {isCustomCompanyRequired && (
                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1">
                    Custom Brand / Business Name
                  </label>
                  <input
                    type="text"
                    value={customCompany}
                    onChange={(e) => setCustomCompany(e.target.value)}
                    placeholder="e.g. Apex Enterprises"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#BAB8BE]/60 text-xs focus:outline-none focus:border-[#2E3F8C]"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Goa / Kankavli / Mumbai"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#BAB8BE]/60 text-xs focus:outline-none focus:border-[#2E3F8C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#BAB8BE]/60 text-xs focus:outline-none focus:border-[#2E3F8C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#BAB8BE]/60 text-xs focus:outline-none focus:border-[#2E3F8C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1">
                    Budget Selection
                  </label>
                  <select
                    name="budget"
                    value={formData.budget || '₹1 Lakh - ₹3 Lakhs'}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#BAB8BE]/60 text-xs focus:outline-none focus:border-[#2E3F8C]"
                  >
                    <option value="< ₹1 Lakh">&lt; ₹1 Lakh</option>
                    <option value="₹1 Lakh - ₹3 Lakhs">₹1 Lakh - ₹3 Lakhs</option>
                    <option value="₹3 Lakhs - ₹5 Lakhs">₹3 Lakhs - ₹5 Lakhs</option>
                    <option value="₹5 Lakhs+">₹5 Lakhs+</option>
                  </select>
                </div>
              </div>

              {industryContext ? (
                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1">
                    Service Scope Included
                  </label>
                  <div className="w-full px-3.5 py-2.5 rounded-lg bg-[#EEF2FF] border border-[#2E3F8C]/30 text-xs font-bold text-[#2E3F8C] flex items-center gap-2 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-[#2E3F8C] flex-shrink-0" />
                    <span>{getIndustryScopeBadge(industryContext)}</span>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1">
                    Service Interested In
                  </label>
                  <select
                    name="serviceInterested"
                    value={formData.serviceInterested}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#BAB8BE]/60 text-xs focus:outline-none focus:border-[#2E3F8C]"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#42403F] mb-1">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  rows={3}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Outline your timeline, goals, or current campaign challenge..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#BAB8BE]/60 text-xs focus:outline-none focus:border-[#2E3F8C]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2E3F8C] text-white hover:bg-[#142775] py-3 rounded-lg font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {industryContext ? `Send ${industryContext} Proposal Request →` : 'Send Custom Quote'}
                </span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

