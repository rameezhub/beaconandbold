import React, { useState } from 'react';
import { SERVICES_LIST, CLIENT_TRUST_ITEMS } from '../data/agencyData';
import { ContactFormData } from '../types';
import { Send, MapPin, Phone, Mail, CheckCircle, MessageSquare } from 'lucide-react';
import { trackPhoneClick, trackFormSubmission, trackWhatsappClick, trackOutboundClick } from '../utils/analytics';

export const ContactFormSection: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>('Other');
  const [customCompany, setCustomCompany] = useState<string>('');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: 'Other',
    customCompany: '',
    city: '',
    phone: '',
    email: '',
    serviceInterested: 'Brand Strategy',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const rawCompany = selectedCompany === 'Other' ? customCompany : selectedCompany;
    const companyName = (rawCompany || 'N/A').trim().slice(0, 100);

    const safeName = formData.name.trim().slice(0, 100);
    const safeCity = formData.city.trim().slice(0, 100);
    const safePhone = formData.phone.trim().slice(0, 30);
    const safeEmail = formData.email.trim().slice(0, 100);
    const safeDetails = (formData.projectDetails || 'None provided').trim().slice(0, 1000);

    // Construct WhatsApp message text
    const waText = encodeURIComponent(
      `*New Beacon & Bolt Quote Inquiry*\n\n` +
      `*Name:* ${safeName}\n` +
      `*Company:* ${companyName}\n` +
      `*City:* ${safeCity}\n` +
      `*Phone:* ${safePhone}\n` +
      `*Email:* ${safeEmail}\n` +
      `*Service Interested:* ${formData.serviceInterested}\n` +
      `*Project Details:* ${safeDetails}`
    );

    // Deep link WhatsApp URL
    const waUrl = `https://wa.me/919420170156?text=${waText}`;

    trackFormSubmission('contact_section', {
      service: formData.serviceInterested,
      company: companyName,
      city: safeCity,
    });
    trackWhatsappClick('contact_section');

    // Open WhatsApp in new tab securely
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#FCFCFD]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Address & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#2E3F8C] uppercase tracking-wider block">
                Initiate Growth
              </span>
              <h2 className="text-3xl font-extrabold text-[#42403F] tracking-tight">
                Request a Customized Proposal
              </h2>
              <p className="text-sm text-[#42403F]/80 leading-relaxed font-normal">
                Tell us about your brand goals. Our strategists will deliver a tailored positioning audit and performance campaign estimate within 24 hours.
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-[#E3E6EE]/50 p-6 rounded-xl border border-[#BAB8BE]/40 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2E3F8C] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#42403F] mb-1">Agency Headquarters</h3>
                  <p className="text-xs text-[#42403F]/80 leading-relaxed font-normal">
                    Mangalmurti Apartment, House No 825,<br />
                    Varawade, Achara Road, Kankavli - 416602
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#BAB8BE]/30">
                <div className="w-10 h-10 rounded-lg bg-[#2E3F8C] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#42403F] mb-1">Direct Phone Line</h3>
                  <a
                    href="tel:+919420170156"
                    onClick={() => trackPhoneClick('contact_section', '+91 94201 70156')}
                    className="block text-xs font-medium text-[#2E3F8C] hover:underline cursor-pointer"
                  >
                    +91 94201 70156
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#BAB8BE]/30">
                <div className="w-10 h-10 rounded-lg bg-[#2E3F8C] text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#42403F] mb-1">Email Inquiry Dispatch</h3>
                  <a
                    href="mailto:beaconandbolt@gmail.com"
                    onClick={() => trackOutboundClick('mailto:beaconandbolt@gmail.com', 'email_link')}
                    className="block text-xs font-medium text-[#2E3F8C] hover:underline cursor-pointer"
                  >
                    beaconandbolt@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* SLA Box */}
            <div className="bg-[#EEF2FF] p-4 rounded-lg border border-[#2E3F8C]/20 flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-[#2E3F8C] flex-shrink-0" />
              <span className="text-xs text-[#2E3F8C] font-semibold">
                Instant WhatsApp dispatch enabled upon form submission.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#BAB8BE]/40 shadow-md">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EEF2FF] text-[#2E3F8C] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#42403F]">Proposal Request Received</h3>
                <p className="text-sm text-[#42403F]/80 max-w-md mx-auto">
                  Thank you, <span className="font-bold">{formData.name}</span>! Your inquiry has been dispatched to our strategist team and opened via WhatsApp. We will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-[#2E3F8C] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#142775] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Your Name* */}
                  <div>
                    <label className="block text-xs font-bold text-[#42403F] mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyesh Sawant"
                      className="w-full px-4 py-3 rounded-lg border border-[#BAB8BE]/60 text-sm focus:outline-none focus:border-[#2E3F8C] focus:ring-1 focus:ring-[#2E3F8C]"
                    />
                  </div>

                  {/* Company/Brand Selectable Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-[#42403F] mb-1.5">
                      Company / Brand Name
                    </label>
                    <select
                      value={selectedCompany}
                      onChange={(e) => setSelectedCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-[#BAB8BE]/60 text-sm focus:outline-none focus:border-[#2E3F8C] focus:ring-1 focus:ring-[#2E3F8C]"
                    >
                      {CLIENT_TRUST_ITEMS.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                      <option value="Other">Other / New Brand</option>
                    </select>
                  </div>
                </div>

                {/* Custom Company Input if "Other" is selected */}
                {selectedCompany === 'Other' && (
                  <div>
                    <label className="block text-xs font-bold text-[#42403F] mb-1.5">
                      Enter Custom Brand Name
                    </label>
                    <input
                      type="text"
                      value={customCompany}
                      onChange={(e) => setCustomCompany(e.target.value)}
                      placeholder="e.g. Apex Enterprises"
                      className="w-full px-4 py-3 rounded-lg border border-[#BAB8BE]/60 text-sm focus:outline-none focus:border-[#2E3F8C]"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* City* */}
                  <div>
                    <label className="block text-xs font-bold text-[#42403F] mb-1.5">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Goa / Kankavli / Mumbai"
                      className="w-full px-4 py-3 rounded-lg border border-[#BAB8BE]/60 text-sm focus:outline-none focus:border-[#2E3F8C]"
                    />
                  </div>

                  {/* Phone/WhatsApp* */}
                  <div>
                    <label className="block text-xs font-bold text-[#42403F] mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border border-[#BAB8BE]/60 text-sm focus:outline-none focus:border-[#2E3F8C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Address* */}
                  <div>
                    <label className="block text-xs font-bold text-[#42403F] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#BAB8BE]/60 text-sm focus:outline-none focus:border-[#2E3F8C]"
                    />
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label className="block text-xs font-bold text-[#42403F] mb-1.5">
                      Service Category
                    </label>
                    <select
                      name="serviceInterested"
                      value={formData.serviceInterested}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#BAB8BE]/60 text-sm focus:outline-none focus:border-[#2E3F8C]"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold text-[#42403F] mb-1.5">
                    Project Details / Growth Objectives
                  </label>
                  <textarea
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Describe your current brand challenge, timeline, or sales target..."
                    className="w-full px-4 py-3 rounded-lg border border-[#BAB8BE]/60 text-sm focus:outline-none focus:border-[#2E3F8C]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#2E3F8C] text-white hover:bg-[#142775] py-4 rounded-lg font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send My Custom Quote</span>
                  <Send className="w-5 h-5" />
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
