import {
  SERVICES_LIST,
  FAQS_LIST,
  INDUSTRY_PAGES_DATA,
  CASE_STUDIES_LIST,
  TEAM_MEMBERS,
  TESTIMONIALS_LIST,
} from '../data/agencyData';

export interface AdvisorAnswer {
  text: string;
  actionType?: 'whatsapp' | 'quote' | 'services' | 'none';
  actionLabel?: string;
  actionUrl?: string;
  matchedTopic?: string;
}

const WHATSAPP_URL = 'https://wa.me/919405451507?text=Hi%20Beacon%20%26%20Bolt%2C%20I%20have%20a%20question%20about%20your%20services.';
const CONTACT_PHONE = '+91 9405451507';
const CONTACT_EMAIL = 'beaconandbolt@gmail.com';

/**
 * Normalizes input text into searchable tokens
 */
function cleanQuery(query: string): string {
  return query
    .toLowerCase()
    .replace(/[^\w\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Searches the grounded Beacon & Bolt knowledge base to return an exact, verified answer.
 * Strictly avoids hallucinating any out-of-scope services, claims, or unlisted data.
 */
export function getAdvisorResponse(userQuery: string): AdvisorAnswer {
  const q = cleanQuery(userQuery);

  if (!q) {
    return {
      text: "How can I help you today? You can ask about our 15 capabilities, industry case studies, team, process, or contact info.",
      actionType: 'none',
    };
  }

  // 1. Greetings
  if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|namaste|hola)\b/.test(q)) {
    return {
      text: "Hello! I'm the Beacon & Bolt advisor. I can answer questions regarding our 15 service capabilities, 6 specialized industries, case studies, 5-stage process, or contact details.\n\nHow can I assist your brand today?",
      actionType: 'none',
    };
  }

  // 2. Contact / Phone / Email / WhatsApp / Office Location / Reach out
  if (
    q.includes('contact') ||
    q.includes('phone') ||
    q.includes('call') ||
    q.includes('email') ||
    q.includes('mail') ||
    q.includes('whatsapp') ||
    q.includes('number') ||
    q.includes('reach') ||
    q.includes('address') ||
    q.includes('office')
  ) {
    return {
      text: `You can reach the Beacon & Bolt team directly via:\n\n• Phone: ${CONTACT_PHONE}\n• WhatsApp: +91 9405451507\n• Email: ${CONTACT_EMAIL}\n• Regional Focus: Goa, Sindhudurg, Kankavli, Mumbai, Pune, and global clients.\n\nFeel free to message us on WhatsApp or request a quote!`,
      actionType: 'whatsapp',
      actionLabel: 'Chat on WhatsApp',
      actionUrl: WHATSAPP_URL,
      matchedTopic: 'Contact Information',
    };
  }

  // 3. Pricing / Cost / Budget / Proposal / Rates
  if (
    q.includes('price') ||
    q.includes('pricing') ||
    q.includes('cost') ||
    q.includes('fee') ||
    q.includes('rate') ||
    q.includes('package') ||
    q.includes('charge') ||
    q.includes('budget') ||
    q.includes('quote') ||
    q.includes('estimate')
  ) {
    return {
      text: "Every brand engagement at Beacon & Bolt is custom-scoped based on your industry, timeline, and growth objectives — from single-phase brand identities to full-scale multi-channel performance marketing.\n\nYou can click 'Request a Quote' to generate a tailored proposal or chat directly with our strategists on WhatsApp.",
      actionType: 'quote',
      actionLabel: 'Request a Custom Quote',
      matchedTopic: 'Pricing & Proposals',
    };
  }

  // 4. Turnaround / Timeline / Duration
  if (
    q.includes('how long') ||
    q.includes('timeline') ||
    q.includes('turnaround') ||
    q.includes('duration') ||
    q.includes('time frame') ||
    q.includes('weeks') ||
    q.includes('days to deliver')
  ) {
    const faq = FAQS_LIST.find((f) => f.question.toLowerCase().includes('how long'));
    return {
      text: faq
        ? faq.answer
        : "Standard brand identity and digital launch campaigns are typically completed in 3 to 4 weeks, including market research, naming, visual identity guidelines, website setup, and launch performance funnels.",
      actionType: 'quote',
      actionLabel: 'Plan Your Campaign Timeline',
      matchedTopic: 'Campaign Timeline',
    };
  }

  // 5. Geographic regions / Locations served
  if (
    q.includes('location') ||
    q.includes('geographic') ||
    q.includes('region') ||
    q.includes('area') ||
    q.includes('goa') ||
    q.includes('sindhudurg') ||
    q.includes('kankavli') ||
    q.includes('mumbai') ||
    q.includes('pune') ||
    q.includes('where do you operate')
  ) {
    const faq = FAQS_LIST.find((f) => f.question.toLowerCase().includes('geographic'));
    return {
      text: faq
        ? faq.answer
        : "While we serve clients globally and nationally, our primary regional hub serves Goa, Sindhudurg, Kankavli, Mumbai, Pune, and neighboring growth markets.",
      actionType: 'none',
      matchedTopic: 'Geographic Coverage',
    };
  }

  // 6. 5-Stage Growth Process / Methodology
  if (
    q.includes('process') ||
    q.includes('methodology') ||
    q.includes('stages') ||
    q.includes('steps') ||
    q.includes('how do you work') ||
    q.includes('framework') ||
    q.includes('workflow')
  ) {
    return {
      text: "Our execution follows a structured 5-Stage Growth Process:\n\n1. Research (Stage 01): Competitor audit, market dynamics, and audience persona identification.\n2. Strategy (Stage 02): Brand positioning playbook, channel roadmap, and conversion offers.\n3. Execution (Stage 03): Creative design, video production, web setup, and campaign launch.\n4. Optimization (Stage 04): Real-time ad tweaking, A/B creative testing, and lead quality checks.\n5. Growth (Stage 05): Scaling budget, audience retargeting, and sustained market expansion.",
      actionType: 'none',
      matchedTopic: '5-Stage Process',
    };
  }

  // 7. Team & Leadership / Founders
  if (
    q.includes('team') ||
    q.includes('founder') ||
    q.includes('who runs') ||
    q.includes('who are you') ||
    q.includes('priyanka') ||
    q.includes('arjun') ||
    q.includes('shubham') ||
    q.includes('rameez') ||
    q.includes('leadership')
  ) {
    const teamSummary = TEAM_MEMBERS.map(
      (m) => `• ${m.name} (${m.role}): ${m.bio}`
    ).join('\n\n');

    return {
      text: `Beacon & Bolt is led by a dedicated multidisciplinary team:\n\n${teamSummary}`,
      actionType: 'none',
      matchedTopic: 'Team & Leadership',
    };
  }

  // 8. Lead Qualification / ROI tracking / Analytics
  if (
    q.includes('roi') ||
    q.includes('lead quality') ||
    q.includes('qualification') ||
    q.includes('reporting') ||
    q.includes('analytics') ||
    q.includes('track')
  ) {
    const faq = FAQS_LIST.find((f) => f.question.toLowerCase().includes('roi'));
    return {
      text: faq
        ? faq.answer
        : "We provide transparent, real-time dashboard reporting and double-step lead qualification systems (including interactive landing pages and WhatsApp bot verification) to ensure high-intent lead delivery.",
      actionType: 'none',
      matchedTopic: 'ROI & Lead Quality',
    };
  }

  // 9. Offline Marketing / Billboards / Print / OOH
  if (
    q.includes('billboard') ||
    q.includes('offline') ||
    q.includes('ooh') ||
    q.includes('print') ||
    q.includes('newspaper') ||
    q.includes('hoarding')
  ) {
    const srv = SERVICES_LIST.find((s) => s.id === 'offline-marketing');
    return {
      text: srv
        ? `Offline Marketing at Beacon & Bolt:\n${srv.description}\n\nKey Deliverables: ${srv.deliverables.join(', ')}.\n\nWe execute unified campaigns combining digital performance with OOH billboards, print collateral, and site signage.`
        : "Yes! We execute unified campaigns combining digital ads with offline billboard concepts (OOH), print collateral, newspaper releases, and on-site experience graphics.",
      actionType: 'quote',
      actionLabel: 'Request Offline Strategy',
      matchedTopic: 'Offline Marketing',
    };
  }

  // 10. Specific Service Matching (Iterate through all 15 services)
  for (const srv of SERVICES_LIST) {
    const sTitle = srv.title.toLowerCase();
    const sId = srv.id.toLowerCase();

    // Specific triggers for each service
    const isMatched =
      q.includes(sTitle) ||
      q.includes(sId) ||
      (srv.id === 'consumer-psychology' && (q.includes('psychology') || q.includes('buyer motivation') || q.includes('behavioral'))) ||
      (srv.id === 'competitor-analysis' && (q.includes('competitor') || q.includes('benchmarking') || q.includes('market gap'))) ||
      (srv.id === 'customer-journey' && (q.includes('journey') || q.includes('touchpoint') || q.includes('funnel map'))) ||
      (srv.id === 'stp-marketing' && (q.includes('stp') || q.includes('segmentation') || q.includes('positioning'))) ||
      (srv.id === 'creative-design' && (q.includes('creative') || q.includes('graphic design') || q.includes('brochure') || q.includes('sales kit'))) ||
      (srv.id === 'production' && (q.includes('production') || q.includes('video shoot') || q.includes('drone') || q.includes('photography') || q.includes('film'))) ||
      (srv.id === 'performance-marketing' && (q.includes('performance') || q.includes('meta ads') || q.includes('google ads') || q.includes('ppc') || q.includes('paid ads') || q.includes('search ads'))) ||
      (srv.id === 'sales-support' && (q.includes('sales support') || q.includes('broker kit') || q.includes('pitch deck') || q.includes('crm integration'))) ||
      (srv.id === 'technology-web' && (q.includes('website') || q.includes('web design') || q.includes('web development') || q.includes('landing page') || q.includes('ui/ux') || q.includes('tech'))) ||
      (srv.id === 'consulting' && (q.includes('consulting') || q.includes('advisory') || q.includes('audit') || q.includes('mentoring'))) ||
      (srv.id === 'social-media-management' && (q.includes('social media') || q.includes('instagram') || q.includes('reels') || q.includes('facebook page'))) ||
      (srv.id === 'online-branding' && (q.includes('branding') || q.includes('logo') || q.includes('brand identity') || q.includes('visual identity')));

    if (isMatched) {
      return {
        text: `**${srv.title}**\n\n${srv.description}\n\n**Key Capabilities & Deliverables:**\n${srv.deliverables.map((d) => `• ${d}`).join('\n')}`,
        actionType: 'quote',
        actionLabel: `Request ${srv.title} Quote`,
        matchedTopic: srv.title,
      };
    }
  }

  // 11. General Services List Query
  if (
    q.includes('service') ||
    q.includes('capabilities') ||
    q.includes('what do you do') ||
    q.includes('what do you offer') ||
    q.includes('solutions')
  ) {
    const listSummary = SERVICES_LIST.map(
      (s, idx) => `${String(idx + 1).padStart(2, '0')}. ${s.title} — ${s.description}`
    ).join('\n');

    return {
      text: `Beacon & Bolt offers 15 core service capabilities:\n\n${listSummary}\n\nWould you like details or a quote for any specific capability?`,
      actionType: 'quote',
      actionLabel: 'Request a Service Quote',
      matchedTopic: 'All Services',
    };
  }

  // 12. Industry Specific Inquiries (6 industries)
  for (const [key, ind] of Object.entries(INDUSTRY_PAGES_DATA)) {
    const iTitle = ind.title.toLowerCase();
    const isIndustryMatch =
      q.includes(iTitle) ||
      q.includes(key) ||
      (key === 'tourism-travel' && (q.includes('tourism') || q.includes('travel') || q.includes('tour') || q.includes('ik tours'))) ||
      (key === 'hotels-hospitality' && (q.includes('hotel') || q.includes('hospitality') || q.includes('resort') || q.includes('room booking'))) ||
      (key === 'real-estate-property' && (q.includes('real estate') || q.includes('property') || q.includes('developer') || q.includes('builder') || q.includes('villa') || q.includes('apartments'))) ||
      (key === 'ecommerce-retail' && (q.includes('ecommerce') || q.includes('e-commerce') || q.includes('retail') || q.includes('store') || q.includes('zatags') || q.includes('dtc'))) ||
      (key === 'b2b-industrial-safety' && (q.includes('b2b') || q.includes('fire safety') || q.includes('industrial') || q.includes('velfire') || q.includes('enterprise'))) ||
      (key === 'dining-restaurants' && (q.includes('restaurant') || q.includes('dining') || q.includes('food') || q.includes('cafe') || q.includes('table reservation')));

    if (isIndustryMatch) {
      const whyPoints = ind.whyChoosePoints.map((p) => `• ${p}`).join('\n');
      const caseStudy = CASE_STUDIES_LIST.find((c) => c.id === ind.caseStudyId);
      const caseStudyText = caseStudy
        ? `\n\n**Case Study Highlight:**\n• Client: ${caseStudy.clientName}\n• Outcome: ${caseStudy.result} (${caseStudy.oneLiner})`
        : '';

      return {
        text: `**${ind.title}**\n*${ind.heroHeadline} (${ind.heroStat})*\n\n${ind.description}\n\n**Core Strategy Highlights:**\n${whyPoints}${caseStudyText}`,
        actionType: 'quote',
        actionLabel: `Get ${ind.title} Strategy`,
        matchedTopic: ind.title,
      };
    }
  }

  // 13. Case Studies / Results / Clients
  if (
    q.includes('case study') ||
    q.includes('case studies') ||
    q.includes('portfolio') ||
    q.includes('client') ||
    q.includes('result') ||
    q.includes('proven') ||
    q.includes('track record') ||
    q.includes('work') ||
    q.includes('past project')
  ) {
    const studies = CASE_STUDIES_LIST.map(
      (c) => `• **${c.clientName}**: ${c.result} — ${c.oneLiner}`
    ).join('\n');

    return {
      text: `Here are some of our proven client results:\n\n${studies}\n\nEvery project is delivered with data-driven creative and measurable conversion tracking.`,
      actionType: 'quote',
      actionLabel: 'Request Case Study Briefing',
      matchedTopic: 'Case Studies',
    };
  }

  // 14. Testimonials / Reviews
  if (
    q.includes('testimonial') ||
    q.includes('review') ||
    q.includes('rating') ||
    q.includes('feedback')
  ) {
    const testList = TESTIMONIALS_LIST.map(
      (t) => `• "${t.quote}" — ${t.author}, ${t.title} at ${t.company}`
    ).join('\n\n');

    return {
      text: `What our clients say about Beacon & Bolt:\n\n${testList}`,
      actionType: 'none',
      matchedTopic: 'Client Testimonials',
    };
  }

  // 15. Check Blog / Articles
  if (q.includes('blog') || q.includes('article') || q.includes('read') || q.includes('guide') || q.includes('insights')) {
    return {
      text: "We publish strategic guides across 8 core growth disciplines:\n\n1. Online Branding for Growing Businesses\n2. High-ROI Performance Marketing\n3. Strategic Social Media Management\n4. Consumer Psychology & Buying Triggers\n5. Actionable Competitor Analysis\n6. Modern Customer Journey Mapping\n7. STP Marketing Framework\n8. Conversion-Driven Creative Design\n\nYou can explore all 8 full articles directly from the Blog tab in the navigation bar!",
      actionType: 'none',
      matchedTopic: 'Strategic Blog Articles',
    };
  }

  // 16. Check General FAQs
  for (const faq of FAQS_LIST) {
    const faqQ = cleanQuery(faq.question);
    const words = q.split(' ').filter((w) => w.length > 3);
    const matches = words.filter((w) => faqQ.includes(w));
    if (matches.length >= 2) {
      return {
        text: faq.answer,
        actionType: 'none',
        matchedTopic: faq.question,
      };
    }
  }

  // 17. STRICT GUARDRAIL FALLBACK
  // Never hallucinate, invent, or guess details outside the actual website data.
  return {
    text: "I don't have specific information on that — but I'd be happy to connect you with our team on WhatsApp for a direct answer!",
    actionType: 'whatsapp',
    actionLabel: 'Chat on WhatsApp',
    actionUrl: WHATSAPP_URL,
    matchedTopic: 'Out of Scope Query',
  };
}
