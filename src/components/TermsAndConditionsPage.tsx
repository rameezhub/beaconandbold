import React from 'react';
import { RoutePath } from '../types';
import { ChevronLeft, FileText, Mail, Phone, MapPin, AlertCircle, ShieldAlert, Scale, CheckCircle2, Lock, Camera, Megaphone } from 'lucide-react';
import { trackOutboundClick, trackPhoneClick } from '../utils/analytics';

interface TermsAndConditionsPageProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
}

export const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({ onNavigate }) => {
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
            <FileText className="w-4 h-4" />
            <span>Legal Agreement & Terms of Service</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#42403F] tracking-tight">
            Terms &amp; Conditions
          </h1>

          <p className="text-sm sm:text-base text-[#42403F]/85 leading-relaxed font-normal">
            By accessing the Beacon &amp; Bolt website, submitting an enquiry, requesting a proposal, accepting a quotation, making a payment, or engaging Beacon &amp; Bolt for services in any manner, you unconditionally acknowledge that you have read, understood and agreed to be legally bound by these Terms &amp; Conditions in their entirety. If you do not agree, you must immediately discontinue use of our website and services.
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-12 text-sm sm:text-base text-[#42403F]/90 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">1.</span> Services
            </h2>
            <p>Beacon &amp; Bolt may provide, at its sole discretion:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#42403F]/85">
              <li>Social Media Management</li>
              <li>Social Media Strategy</li>
              <li>Content Creation</li>
              <li>Photography and Videography</li>
              <li>Graphic Design</li>
              <li>Video Editing</li>
              <li>Meta Ads</li>
              <li>Performance Marketing</li>
              <li>Branding</li>
              <li>Digital Marketing Services</li>
              <li>Other services specifically agreed with the client in writing</li>
            </ul>
            <p className="pt-2">
              The exact scope, deliverables, frequency, timelines and fees shall be determined exclusively by the applicable proposal, quotation, invoice, service agreement or other written confirmation expressly accepted by the client. No verbal discussion, draft, or informal communication shall be construed as binding scope unless confirmed in writing.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 bg-[#F8F9FD] p-6 rounded-2xl border border-[#BAB8BE]/30">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">2.</span> Scope of Work
            </h2>
            <p>
              Only services expressly and specifically included in the agreed written scope are covered by the applicable fee. Any request, task, or deliverable not expressly listed is deemed outside scope and chargeable separately, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#42403F]/85">
              <li>Additional shoots</li>
              <li>Additional reels, posts or creatives</li>
              <li>Additional revisions beyond the agreed number</li>
              <li>Drone services</li>
              <li>Advanced video production</li>
              <li>Advanced After Effects or motion-graphics work</li>
              <li>AI-generated video or image production</li>
              <li>Additional photography or videography</li>
              <li>Influencer collaborations</li>
              <li>Website or landing-page work</li>
              <li>Additional advertising services or campaign types</li>
              <li>Urgent, expedited or specialised work</li>
              <li>Any work requested outside standard business hours or agreed turnaround times</li>
            </ul>
            <p className="pt-2 text-xs sm:text-sm text-[#42403F]/80 border-t border-[#BAB8BE]/20">
              Beacon &amp; Bolt will make reasonable efforts to communicate additional charges before undertaking out-of-scope work but reserves the right to proceed and invoice for urgent or client-directed out-of-scope work where prior confirmation is impractical.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">3.</span> Client Responsibilities
            </h2>
            <p>The client shall, at all times:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#42403F]/85">
              <li>Provide accurate, complete and current business information.</li>
              <li>Provide all required brand assets and materials in a timely manner.</li>
              <li>Provide necessary account access, credentials and permissions where required, and remain solely responsible for the security of such access.</li>
              <li>Provide timely approvals, feedback and instructions within any timeframe specified by Beacon &amp; Bolt.</li>
              <li>Ensure all information, data, and claims supplied to Beacon &amp; Bolt are accurate, current, and not misleading.</li>
              <li>Ensure that all materials supplied to Beacon &amp; Bolt may be lawfully used, reproduced and published.</li>
              <li>Independently obtain and maintain all necessary permissions, licences, consents and clearances relating to client-supplied materials.</li>
              <li>Proactively inform Beacon &amp; Bolt in writing of any industry-specific legal, regulatory, or compliance requirements relevant to the client&apos;s business.</li>
            </ul>
            <p className="pt-2">
              The client bears full and sole responsibility for any delay, cost, or consequence arising from its failure to timely provide information, access, materials, or approvals. Such delays shall not constitute, and shall not be treated as, a breach or failure by Beacon &amp; Bolt, and shall not entitle the client to any refund, discount, or extension of deliverables at no additional cost.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">4.</span> Content Approval
            </h2>
            <p>
              Where client approval is required, the client bears sole and exclusive responsibility for reviewing all content, in full, prior to publication. Beacon &amp; Bolt bears no responsibility for errors, inaccuracies or omissions in client-approved content.
            </p>
            <p>The client is solely responsible for verifying the accuracy of all factual information supplied for use in content, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-1 text-[#42403F]/85">
              <li>Prices</li>
              <li>Offers</li>
              <li>Contact details</li>
              <li>Product information</li>
              <li>Service information</li>
              <li>Business claims and representations</li>
              <li>Any other factual information supplied by the client</li>
            </ul>
            <p className="pt-2">
              Once content is approved by the client (including implied approval through non-response within the specified review window, if any), it shall be deemed final. Any subsequent change shall be treated as new, chargeable, out-of-scope work regardless of the reason for the change.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">5.</span> Revisions
            </h2>
            <p>
              The number of revisions included is strictly limited to the number specified in the applicable written proposal or agreement. No unlimited or implied revision rights exist under these Terms.
            </p>
            <p>
              Major changes, repeated revisions, revisions requested after approval, revisions arising from a change in client direction, or requests outside the agreed scope shall be treated as new work and invoiced separately, regardless of the reason for the request.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#2E3F8C]" />
              <span><span className="text-[#2E3F8C]">6.</span> Photography and Videography</span>
            </h2>
            <p>
              Photography and videography services shall be strictly limited to the agreed written scope. Additional equipment, crew, travel time and expenses, locations, studio requirements, drone services, specialised lighting, props, or any other production requirement not expressly included shall be charged separately.
            </p>
            <p>
              Beacon &amp; Bolt reserves the right to reschedule any shoot at its discretion due to weather, location restrictions, permissions, equipment issues, third-party restrictions, safety concerns, or any circumstance beyond its reasonable control, without liability for any resulting delay or cost to the client.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-[#2E3F8C]" />
              <span><span className="text-[#2E3F8C]">7.</span> Meta Ads and Advertising</span>
            </h2>
            <p>
              Advertising expenditure is strictly separate from, and in addition to, Beacon &amp; Bolt&apos;s professional service fees, unless expressly and specifically stated otherwise in writing. Advertising budgets must be funded directly by the client and are non-refundable once spent by the advertising platform.
            </p>
            <p>Meta and other advertising platforms exclusively and independently control their own:</p>
            <ul className="list-disc pl-6 space-y-1 text-[#42403F]/85">
              <li>Advertising policies</li>
              <li>Approval systems</li>
              <li>Algorithms</li>
              <li>Targeting systems</li>
              <li>Placements</li>
              <li>Delivery systems</li>
              <li>Account restrictions, suspensions, or bans</li>
            </ul>
            <p className="pt-2">
              Beacon &amp; Bolt exercises no control over, and provides no warranty or guarantee regarding, any decision, restriction, suspension, disapproval, or policy change made by any such third-party platform, and accepts no liability whatsoever arising therefrom.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 bg-[#EEF2FF] border border-[#2E3F8C]/20 p-6 rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2E3F8C] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#2E3F8C]" />
              <span><span className="text-[#2E3F8C]">8.</span> Marketing Results Disclaimer</span>
            </h2>
            <p>
              No specific marketing, advertising, sales, or business result of any kind is guaranteed under these Terms unless expressly and specifically guaranteed in a separate, signed written agreement. Absent such an agreement, any figures, targets, or projections discussed are strictly illustrative and non-binding.
            </p>
            <p>
              Marketing performance depends on numerous factors entirely outside Beacon &amp; Bolt&apos;s control, including but not limited to market demand, customer behaviour, competition, pricing, product or service quality, offers, seasonality, brand reputation, sales process, customer service, creative performance, advertising budget, website or landing-page performance, third-party platform performance, and changes to Meta or other platforms.
            </p>
            <p className="font-semibold text-[#42403F]">
              Beacon &amp; Bolt expressly does not guarantee, and the client acknowledges it has not relied on any guarantee of, any specific:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#42403F]/85">
              <li>Leads, enquiries, sales, customers or bookings</li>
              <li>Revenue or profit</li>
              <li>Followers, reach or engagement</li>
              <li>Website traffic or conversions</li>
              <li>ROAS, CPL, or CPA metrics</li>
              <li>Search ranking</li>
              <li>Return on investment</li>
              <li>Any other business or commercial outcome</li>
            </ul>
            <p className="pt-2 text-xs sm:text-sm text-[#42403F]/90 leading-relaxed border-t border-[#2E3F8C]/15">
              The client expressly acknowledges and agrees that fees paid to Beacon &amp; Bolt are consideration solely for the performance of agreed professional services, and are in no way contingent upon, or refundable based on, business outcomes, sales, or profit. Beacon &amp; Bolt&apos;s sole obligation is to perform the agreed services with reasonable professional skill and care.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">9.</span> Fees and Payment
            </h2>
            <p>
              Fees and payment schedules shall be as specified exclusively in the applicable proposal, quotation, invoice, or service agreement. All fees are exclusive of applicable taxes unless stated otherwise, and such taxes shall be borne by the client.
            </p>
            <p>
              Payment must be made in full within the agreed payment period. Late payments may, at Beacon &amp; Bolt&apos;s sole discretion, attract interest and/or a late payment fee as specified in the applicable agreement.
            </p>
            <p>
              Where any amount becomes overdue, Beacon &amp; Bolt reserves the right, without further notice, to immediately suspend all work, content publishing, advertising management, account access, or other services until payment in full is received, including amounts already committed to third parties on the client&apos;s behalf.
            </p>
            <p>
              No delay, suspension, or non-performance resulting from the client&apos;s non-payment shall constitute a breach or failure by Beacon &amp; Bolt under these Terms or any applicable agreement, and no refund shall be due for the suspended period.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">10.</span> Temporary Pause of Services
            </h2>
            <p>
              Services shall continue uninterrupted, and all payment obligations shall remain in full force, unless a temporary pause has been expressly agreed in writing and signed by both parties. A client&apos;s statement that its business is temporarily inactive, closed, slow, seasonal, or does not currently require marketing shall not, by itself, constitute or trigger a pause under any circumstance.
            </p>
            <p className="font-semibold text-[#42403F]">Unless a pause has been expressly agreed in writing:</p>
            <ul className="list-disc pl-6 space-y-1 text-[#42403F]/85">
              <li>The agreed service period continues without interruption.</li>
              <li>All payment obligations continue in full.</li>
              <li>Outstanding invoices remain immediately payable.</li>
              <li>Work already completed remains payable in full.</li>
              <li>Third-party costs already committed remain payable in full.</li>
              <li>The agreed service schedule remains fully applicable.</li>
            </ul>
            <p className="pt-2 text-xs sm:text-sm text-[#42403F]/80">
              Any approved pause must be documented in writing and shall specify the pause period, treatment of pending work, payment obligations during the pause, and restart arrangements. Beacon &amp; Bolt reserves the right to decline any pause request at its sole discretion.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">11.</span> Cancellation and Termination
            </h2>
            <p>
              Where a separate service agreement specifies a notice period, that notice period shall strictly apply. Absent such a provision, a minimum notice period of 30 days in writing shall apply to any termination by the client.
            </p>
            <p className="font-semibold text-[#42403F]">Termination shall not, under any circumstance, extinguish or reduce payment obligations relating to:</p>
            <ul className="list-disc pl-6 space-y-1 text-[#42403F]/85">
              <li>Services already provided</li>
              <li>Work already completed, whether or not delivered</li>
              <li>Work approved by the client</li>
              <li>Additional work authorised by the client</li>
              <li>Third-party costs already incurred or committed on the client&apos;s behalf</li>
            </ul>
            <p className="pt-2">
              Beacon &amp; Bolt reserves the right to immediately suspend or terminate services, without notice and without liability, where the client fails to make any payment when due, materially breaches the applicable agreement or these Terms, or engages in conduct Beacon &amp; Bolt reasonably considers damaging to its business or reputation.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4 bg-[#F5F6FA] p-6 rounded-2xl border border-[#BAB8BE]/40">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#2E3F8C]" />
              <span><span className="text-[#2E3F8C]">12.</span> Confidentiality</span>
            </h2>
            <p>
              Beacon &amp; Bolt shall treat non-public client information as confidential and shall take reasonable technical and organisational measures to protect it, including restricting access to personnel who require it to perform their duties.
            </p>
            <p>
              Confidential information includes, without limitation, business information, marketing and campaign strategy, advertising information, account information, customer information, internal business information, and other commercially sensitive information.
            </p>
            <p>
              Beacon &amp; Bolt shall not intentionally disclose confidential client information to competitors or use it in any manner intended to harm the client. This obligation survives termination or completion of the engagement indefinitely, unless the information becomes public through no fault of Beacon &amp; Bolt.
            </p>
            <p className="text-xs text-[#42403F]/80 pt-2 border-t border-[#BAB8BE]/30">
              Where a separate NDA or confidentiality agreement is executed, its terms shall apply in addition to, and shall prevail over, this clause to the extent of any conflict. Nothing in this clause prevents disclosure required by law, court order, lawful governmental authority, or necessary legal proceedings, or disclosure reasonably necessary to protect Beacon &amp; Bolt&apos;s legal rights.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">13.</span> Portfolio and Display of Client Work
            </h2>
            <p>
              Beacon &amp; Bolt shall not publicly display identifiable client work, campaign screenshots, campaign results, or case studies without the client&apos;s prior written permission.
            </p>
            <p>
              Where permission is granted, it is limited strictly to the specific work, client name, and information expressly agreed in writing, and may be used by Beacon &amp; Bolt for portfolio, website, social media, presentation, and promotional purposes without further compensation to the client, unless otherwise agreed in writing.
            </p>
            <p>
              Even where permission is granted, Beacon &amp; Bolt shall not intentionally disclose confidential strategy, competitor-sensitive information, private customer information, account credentials, or other information reasonably capable of harming the client&apos;s business.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">14.</span> Intellectual Property
            </h2>
            <p>
              Beacon &amp; Bolt retains exclusive ownership of all its pre-existing and independently developed intellectual property, including templates, systems, processes, methodologies, concepts, tools, and proprietary materials, whether or not used in the client&apos;s project.
            </p>
            <p>
              Only upon receipt of full and cleared payment for the applicable work shall the client acquire a licence to use the final approved deliverables specifically created for the client, solely for its own business purposes, and subject to applicable third-party rights and licences. No transfer of ownership occurs unless expressly agreed in writing.
            </p>
            <p>
              Raw footage, source files, editable project files, and working files are proprietary to Beacon &amp; Bolt and are not included in any deliverable unless expressly agreed in writing and separately compensated.
            </p>
            <p>
              Third-party music, fonts, stock assets, software, and other licensed materials remain subject at all times to their respective third-party licences, and the client is solely responsible for complying with such licences in its use of deliverables.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">15.</span> Client-Supplied Materials
            </h2>
            <p>
              The client represents and warrants that it holds all necessary rights, permissions, and authority to provide any photographs, videos, logos, music, trademarks, text, testimonials, and other materials supplied to Beacon &amp; Bolt, and that such materials do not infringe any third-party rights.
            </p>
            <p>
              The client bears sole and full responsibility for the accuracy, legality, and authorised use of all materials it supplies, and shall indemnify Beacon &amp; Bolt in full against any claim arising from such materials, as further set out in Clause 20.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">16.</span> Third-Party Platforms
            </h2>
            <p>
              Beacon &amp; Bolt may use third-party platforms including Meta, Instagram, Facebook, Google, WhatsApp, hosting providers, analytics platforms, and other technology services strictly as tools to deliver services.
            </p>
            <p>
              Beacon &amp; Bolt shall bear no responsibility whatsoever for third-party outages, account restrictions, suspensions, policy changes, algorithm changes, technical failures, data loss, or any other action taken independently by such third-party platforms, and no such event shall constitute a breach by Beacon &amp; Bolt.
            </p>
          </section>

          {/* Section 17 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">17.</span> Website Use
            </h2>
            <p>Users are strictly prohibited from:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#42403F]/85">
              <li>Violating any applicable law through use of the website.</li>
              <li>Attempting unauthorised access to any part of the website or its systems.</li>
              <li>Introducing malicious software, code, or any harmful content.</li>
              <li>Interfering with or disrupting website operation in any manner.</li>
              <li>Copying, scraping, or reproducing proprietary website content without express written permission.</li>
              <li>Using the website for any fraudulent, unlawful, or abusive purpose.</li>
            </ul>
            <p className="pt-2 text-xs sm:text-sm text-[#42403F]/80">
              Beacon &amp; Bolt reserves the right to restrict, suspend, or terminate any user&apos;s access to the website at its sole discretion, without notice, for any suspected violation of this clause.
            </p>
          </section>

          {/* Section 18 */}
          <section className="space-y-4 bg-[#F8F9FD] p-6 rounded-2xl border border-[#BAB8BE]/30">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#2E3F8C]" />
              <span><span className="text-[#2E3F8C]">18.</span> Limitation of Liability</span>
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Beacon &amp; Bolt&apos;s total aggregate liability arising out of or in connection with the website, services, or these Terms, whether in contract, tort, or otherwise, shall not exceed the total fees actually paid by the client to Beacon &amp; Bolt in the three (3) months immediately preceding the event giving rise to the claim.
            </p>
            <p>
              Beacon &amp; Bolt shall not be liable, under any circumstances, for indirect, incidental, special, consequential, or punitive losses, including loss of profits, revenue, business opportunities, or goodwill, even if advised of the possibility of such losses.
            </p>
            <p className="text-xs text-[#42403F]/80 pt-2 border-t border-[#BAB8BE]/20">
              Nothing in these Terms shall exclude or restrict liability that cannot lawfully be excluded or restricted under applicable law.
            </p>
          </section>

          {/* Section 19 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">19.</span> Force Majeure
            </h2>
            <p>
              Beacon &amp; Bolt shall not be responsible or liable for any delay or failure to perform caused, in whole or in part, by circumstances reasonably beyond its control, including natural disasters, severe weather, pandemics, internet or telecommunications failures, government restrictions or orders, platform outages, equipment failures, third-party failures, strikes, or any other unforeseen circumstance. Performance obligations shall be suspended for the duration of such event without liability, and payment obligations already accrued shall remain payable.
            </p>
          </section>

          {/* Section 20 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">20.</span> Client Responsibility and Indemnification
            </h2>
            <p>
              To the fullest extent permitted by applicable law, the client shall fully indemnify, defend, and hold harmless Beacon &amp; Bolt, its officers, employees, and representatives from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#42403F]/85">
              <li>Materials supplied by the client.</li>
              <li>Information or claims supplied or approved by the client.</li>
              <li>The client&apos;s products or services.</li>
              <li>The client&apos;s breach of these Terms or the applicable agreement.</li>
              <li>The client&apos;s violation of applicable law.</li>
              <li>Unauthorised or unlicensed third-party material supplied by the client.</li>
              <li>Any claim brought by a third party arising from the client&apos;s business, products, or conduct.</li>
            </ul>
          </section>

          {/* Section 21 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">21.</span> Changes to These Terms
            </h2>
            <p>
              Beacon &amp; Bolt reserves the right to modify these Terms at any time, at its sole discretion, without prior notice, where reasonably necessary due to changes in its services, technology, business practices, or applicable law. The updated Terms will be published on this page with an updated effective date, and continued use of the website or services after such publication constitutes binding acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 22 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#2E3F8C]" />
              <span><span className="text-[#2E3F8C]">22.</span> Governing Law and Jurisdiction</span>
            </h2>
            <p>
              These Terms &amp; Conditions shall be governed by and interpreted exclusively in accordance with the laws of India.
            </p>
            <p>
              Subject to applicable law, any dispute arising between Beacon &amp; Bolt and the client shall be subject to the exclusive jurisdiction of the competent courts at Sindhudurg, Maharashtra, India, unless otherwise agreed in writing by both parties.
            </p>
          </section>

          {/* Section 23 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">23.</span> Entire Agreement
            </h2>
            <p>
              These Terms, together with the applicable proposal, quotation, invoice, or signed service agreement, constitute the entire agreement between the client and Beacon &amp; Bolt regarding the subject matter herein, and supersede all prior discussions, representations, or agreements, whether written or oral.
            </p>
          </section>

          {/* Section 24 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
              <span className="text-[#2E3F8C]">24.</span> Severability
            </h2>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be severed, and the remaining provisions shall continue in full force and effect to the maximum extent permitted by law.
            </p>
          </section>

          {/* Section 25 */}
          <section className="space-y-6 bg-[#EEF2FF] p-6 sm:p-8 rounded-2xl border border-[#2E3F8C]/20">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#42403F] flex items-center gap-2">
                <span className="text-[#2E3F8C]">25.</span> Contact
              </h2>
              <p className="text-sm text-[#42403F]/85">
                For questions regarding these Terms &amp; Conditions or our services, please contact:
              </p>
            </div>

            <div className="space-y-3 pt-2 text-sm text-[#42403F]">
              <p className="font-bold text-base text-[#2E3F8C]">Beacon &amp; Bolt</p>
              
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2E3F8C] shrink-0" />
                <span>Email: </span>
                <a
                  href="mailto:beaconandbolt@gmail.com"
                  onClick={() => trackOutboundClick('mailto:beaconandbolt@gmail.com', 'terms_conditions_email')}
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
                  onClick={() => trackPhoneClick('terms_conditions', '+91 94201 70156')}
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
              By accessing our website, submitting an enquiry, accepting a proposal, or engaging Beacon &amp; Bolt for services in any manner, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms &amp; Conditions in their entirety.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
