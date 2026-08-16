import React from 'react';
import { RoutePath } from '../types';
import { ChevronLeft, Shield, Mail, Phone, MapPin, Lock, FileCheck, Scale } from 'lucide-react';
import { trackOutboundClick, trackPhoneClick } from '../utils/analytics';

interface PrivacyPolicyPageProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 bg-[#FCFCFD]">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#767BA5] hover:text-[#2E3F8C] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <header className="border-b border-[#BAB8BE]/30 pb-8 mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#2E3F8C] px-3.5 py-1.5 rounded-full text-xs font-bold border border-[#2E3F8C]/15">
            <Shield className="w-4 h-4" />
            <span>Legal & Data Governance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#42403F] tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-[#42403F]/85 leading-relaxed font-normal">
            Beacon &amp; Bolt (&quot;Beacon &amp; Bolt&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the privacy and confidentiality of information entrusted to us. This Privacy Policy governs the collection, use, storage, disclosure and protection of information through our website and services. By accessing our website or submitting any information to us, you unconditionally agree to the terms of this Privacy Policy. If you do not agree, you must not use our website or services.
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-12 text-sm sm:text-base text-[#42403F]/90 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">1.</span> Information We Collect
            </h2>
            <p>We may collect, directly or indirectly, the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#42403F]/85">
              <li>Full name</li>
              <li>Phone number</li>
              <li>WhatsApp number</li>
              <li>Email address</li>
              <li>Business or company name</li>
              <li>Business location and address</li>
              <li>Business requirements and objectives</li>
              <li>Marketing and advertising requirements</li>
              <li>Budget and commercial information</li>
              <li>Information submitted through enquiry, contact, or onboarding forms</li>
              <li>Communication records (calls, emails, WhatsApp messages, meeting notes)</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
            <p className="pt-2">
              We also automatically collect technical and usage information when you visit our website, including but not limited to IP address, device identifiers, browser type and version, operating system, referring URLs, pages visited, time spent on pages, and general location data derived from IP address.
            </p>
            <p>
              We do not knowingly collect sensitive personal data (such as financial account details, government identity numbers, or health information) unless separately and explicitly required for a specific engagement, in which case additional safeguards and explicit consent will apply.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">2.</span> Basis and Purpose of Processing
            </h2>
            <p>
              We process information strictly on the basis of your consent (given by submitting information to us), for performance of a contract with you, or to comply with a legal obligation. We use collected information exclusively for the following purposes and for no other purpose without your explicit consent:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#42403F]/85">
              <li>Responding to and processing enquiries</li>
              <li>Verifying identity and authority to act for a business</li>
              <li>Assessing and scoping business and marketing requirements</li>
              <li>Preparing proposals, quotations, and contracts</li>
              <li>Delivering, managing, and improving our services</li>
              <li>Internal record-keeping and audit purposes</li>
              <li>Measuring and improving website and advertising performance</li>
              <li>Complying with applicable legal, regulatory, or governmental requirements</li>
              <li>Enforcing our legal rights, agreements, and policies</li>
            </ul>
            <div className="bg-[#EEF2FF] border border-[#2E3F8C]/20 p-4 rounded-xl text-xs sm:text-sm font-semibold text-[#2E3F8C]">
              We do not sell, rent, lease, or trade your personal information to any third party under any circumstances.
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">3.</span> Consent and Communication
            </h2>
            <p>
              By voluntarily submitting your information through our website, forms, WhatsApp, email, or any other channel, you expressly consent to Beacon &amp; Bolt collecting, processing, and contacting you via phone call, SMS, WhatsApp, email, or any other reasonable means for purposes connected to your enquiry or our services.
            </p>
            <p>
              You may withdraw consent for promotional or marketing communications at any time by written request to the contact details below. Withdrawal of consent does not affect the lawfulness of processing carried out prior to withdrawal, and we may retain and use information as strictly necessary for legal, contractual, or record-keeping purposes even after withdrawal.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">4.</span> Cookies and Analytics
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies strictly necessary for website functionality, security, analytics, performance measurement, and advertising effectiveness. Continued use of our website constitutes acceptance of our use of cookies. You may disable cookies through your browser settings; however, doing so may impair or disable certain website functionality, and we accept no liability for any resulting loss of functionality.
            </p>
            <p>
              Third-party analytics, advertising, and technology providers used on our website operate independently and are solely responsible for their own data practices. Beacon &amp; Bolt disclaims all liability for the data practices of such third parties.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">5.</span> Third-Party Platforms and Service Providers
            </h2>
            <p>
              We may engage or interact with third-party platforms including but not limited to Meta, Instagram, Facebook, Google, WhatsApp, cloud hosting providers, analytics providers, and payment or advertising platforms, strictly to the extent necessary to deliver our services.
            </p>
            <p>
              Such third parties operate entirely independently of Beacon &amp; Bolt and are governed solely by their own privacy policies and terms. Beacon &amp; Bolt makes no representation or warranty regarding, and accepts no liability whatsoever for, the data handling, security practices, or conduct of any independent third-party platform. You engage with such platforms entirely at your own risk.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 bg-[#F5F6FA] p-6 rounded-2xl border border-[#BAB8BE]/40">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#2E3F8C]" />
              <span><span className="text-[#2E3F8C]">6.</span> Confidentiality of Client Information</span>
            </h2>
            <p>
              We treat all client information as strictly confidential, including but not limited to business plans, marketing and advertising strategies, campaign data, account credentials, customer data, financial information, and any other non-public business information (&quot;Confidential Information&quot;).
            </p>
            <p className="font-semibold text-[#42403F]">We will:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#42403F]/85">
              <li>Restrict access to Confidential Information strictly to personnel who require it to perform their duties</li>
              <li>Not disclose Confidential Information to any third party without prior written consent, except as required by law, regulation, court order, or lawful governmental authority</li>
              <li>Take commercially reasonable technical and organisational measures to protect Confidential Information from unauthorised access, use, or disclosure</li>
            </ul>
            <p className="text-xs text-[#42403F]/80 pt-2 border-t border-[#BAB8BE]/30">
              This confidentiality obligation survives the termination or completion of any engagement and continues indefinitely unless the relevant information becomes public through no fault of Beacon &amp; Bolt.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#2E3F8C]" />
              <span><span className="text-[#2E3F8C]">7.</span> Client Work, Portfolio, and Case Studies</span>
            </h2>
            <p>
              Beacon &amp; Bolt will not publicly display, publish, or reference any identifiable client work, campaign data, results, screenshots, or case studies without the client&apos;s prior written permission.
            </p>
            <p>
              Where written permission is granted, such permission is limited strictly to the specific materials and scope agreed in writing, and does not extend to disclosure of underlying confidential strategy, financial performance, or proprietary methodology.
            </p>
            <p className="font-semibold text-[#42403F]">Under no circumstances will Beacon &amp; Bolt publish or disclose:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#42403F]/85">
              <li>Confidential marketing or business strategy</li>
              <li>Competitor-sensitive or proprietary information</li>
              <li>Customer or end-user personal data</li>
              <li>Login credentials, API keys, or account access details</li>
              <li>Any other information reasonably likely to cause commercial harm</li>
            </ul>
            <p className="text-xs sm:text-sm text-[#2E3F8C] font-semibold">
              Any unauthorised request to extract, reverse-engineer, or disclose such information will be refused.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">8.</span> Data Security
            </h2>
            <p>
              We implement reasonable technical and organisational safeguards, including access controls, secure storage, and restricted data handling procedures, to protect information against unauthorised access, alteration, disclosure, or destruction.
            </p>
            <p>
              No system of data transmission or storage can be guaranteed 100% secure. To the maximum extent permitted by applicable law, Beacon &amp; Bolt disclaims liability for unauthorised access or data breaches arising from causes beyond our reasonable control, including third-party platform failures, cyberattacks, or user-side security failures (such as compromised devices or shared credentials).
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">9.</span> Data Retention and Deletion
            </h2>
            <p>
              We retain personal and business information only for as long as reasonably necessary to fulfil the purposes outlined in this Policy, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#42403F]/85">
              <li>The duration of the business relationship and any active engagement</li>
              <li>A reasonable period thereafter for legal, tax, audit, and dispute-resolution purposes (not exceeding what is required by applicable law)</li>
              <li>Compliance with statutory retention obligations</li>
            </ul>
            <p>
              Upon expiry of the applicable retention period, information will be securely deleted, anonymised, or destroyed, unless further retention is required by law.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">10.</span> Your Rights and Grievance Redressal
            </h2>
            <p>
              Subject to applicable law, including the Digital Personal Data Protection Act, 2023 (India) where applicable, you may request:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#42403F]/85">
              <li>Access to the personal information we hold about you</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of information, where legally permissible</li>
              <li>Withdrawal of consent, subject to Section 3 above</li>
              <li>Escalation of privacy-related grievances</li>
            </ul>
            <p>
              All requests must be submitted in writing to the contact details below and will be addressed within a reasonable timeframe as required by applicable law. We reserve the right to verify your identity before acting on any request and to decline requests that are unfounded, excessive, or legally impermissible.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">11.</span> Third-Party Website Links
            </h2>
            <p>
              Our website may contain links to third-party websites or platforms not owned or controlled by Beacon &amp; Bolt. We accept no responsibility or liability whatsoever for the content, privacy practices, or security of any linked third-party website. Accessing such links is entirely at your own risk.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">12.</span> Children&apos;s Privacy
            </h2>
            <p>
              Our website and services are intended solely for businesses and individuals aged 18 years or older. We do not knowingly collect personal information from children. If we become aware that information has been inadvertently collected from a minor without appropriate consent, we will delete such information promptly.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">13.</span> Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Beacon &amp; Bolt shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the collection, use, or disclosure of information, except where such liability arises directly from our gross negligence or wilful misconduct.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#2E3F8C]" />
              <span><span className="text-[#2E3F8C]">14.</span> Governing Law and Jurisdiction</span>
            </h2>
            <p>
              This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts at Goa, India.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">15.</span> Changes to This Privacy Policy
            </h2>
            <p>
              Beacon &amp; Bolt reserves the right to amend or update this Privacy Policy at any time, at its sole discretion, without prior notice, to reflect changes in our services, technology, business practices, or applicable law. The revised policy will be published on this page with an updated effective date. Continued use of our website or services after any such change constitutes your acceptance of the revised Policy.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-6 bg-[#EEF2FF] p-6 sm:p-8 rounded-2xl border border-[#2E3F8C]/20">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
                <span className="text-[#2E3F8C]">16.</span> Contact Us
              </h2>
              <p className="text-sm text-[#42403F]/85">
                For privacy-related questions, requests, or grievances, please contact:
              </p>
            </div>

            <div className="space-y-3 pt-2 text-sm text-[#42403F]">
              <p className="font-bold text-base text-[#2E3F8C]">Beacon &amp; Bolt</p>
              
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2E3F8C] shrink-0" />
                <span>Email: </span>
                <a
                  href="mailto:beaconandbolt@gmail.com"
                  onClick={() => trackOutboundClick('mailto:beaconandbolt@gmail.com', 'privacy_policy_email')}
                  className="font-semibold text-[#2E3F8C] hover:underline"
                >
                  beaconandbolt@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2E3F8C] shrink-0" />
                <span>Phone / WhatsApp: </span>
                <a
                  href="tel:+919420170156"
                  onClick={() => trackPhoneClick('privacy_policy', '+91 94201 70156')}
                  className="font-semibold text-[#2E3F8C] hover:underline"
                >
                  +91 94201 70156
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#2E3F8C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Address: </span>
                  <span>Mangalmurti Apartment, House No 825, Varawade, Achara Road, Kankavli - 416602</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#42403F]/75 pt-4 border-t border-[#2E3F8C]/15 italic">
              By using our website or voluntarily submitting information to Beacon &amp; Bolt, you acknowledge that you have read, understood, and agreed to be bound by this Privacy Policy in its entirety.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
