import type { ProjectDetail } from "@/types";

export const projectDetails: Record<string, ProjectDetail> = {
  // ==================== PM PROJECTS ====================
  urjobs: {
    type: "pm",
    title: "UrJobs",
    tagline: "Smart Steps Towards Your Dream Career",
    category: "Career-Tech Platform",
    role: "Marketing & GTM Strategy Lead",
    context: "Business Plan Competition - IT Fest KBMDSI FILKOM UB | 3-person team",
    year: "Ags 2025",
    teamSize: "3 people",
    bannerImage: "/assets/urjobs-1.webp",
    images: ["/assets/urjobs-1.webp", "/assets/urjobs-2.webp", "/assets/urjobs-3.webp"],
    overview: `UrJobs is a comprehensive career development web platform designed to address Indonesia's unemployment crisis, particularly among young job seekers aged 18-45. As CMO, I led the market research, positioning strategy, and go-to-market planning that secured us 3rd place in BPC IT-FEST that held by KBMDSI FILKOM UB.

The Problem: As of February 2025, Indonesia faces 7.28 million unemployed individuals, with fresh graduates struggling not just to find jobs, but to prepare adequately for the competitive job market. Existing platforms focus solely on job listings without addressing career readiness.

Our Solution: UrJobs integrates job search with career preparation services including one-on-one mentoring, skill development courses, and industry certifications—creating a holistic ecosystem that bridges the gap between job seekers and employers.

Judges specifically praised our partnership strategy with universities and youth organizations, noting it would enable rapid initial user acquisition.`,
    problem:
      "7.28 million unemployed individuals in Indonesia, with highest concentration in 18-35 age group. Fresh graduates lack practical career preparation skills.",
    approach: `As CMO, I led our market validation through:
• Conducted surveys and interviews with potentials users
• Analyzed competitor platforms (JobStreet, Kalibrr, LinkedIn, Glints) to identify gaps
• Created comprehensive go-to-market strategy using AIDA framework`,
    myRole: [
      "Led market research and user validation (surveys + interviews)",
      "Created go-to-market strategy with segmentation, targeting, and 4P marketing mix",
      "Designed partnership strategy with universities and youth organizations",
      "Contributed to financial projections and CAC modeling",
    ],
    keyFeatures: [
      "JobMatch - AI-powered job recommendations based on skills and career goals",
      "CareerTalk - One-on-one mentoring with industry professionals",
      "SkillPath - Curated learning paths with industry certifications",
      "Application Tracking System for job seekers",
      "Company profiles and reviews for transparency",
      "Skill assessment tests visible to employers",
    ],
    impact: [
      "Projected 5,000 users in Year 1 with 30% premium conversion",
      "IRR 45%, ROI 55%, Payback Period 2.2 years",
      "Addressed SDG 4 (Quality Education) and SDG 8 (Decent Work)",
      "Differentiated from competitors through integrated career development approach",
    ],
    challenges: [
      {
        title: "Differentiating in Crowded Market",
        problem: "Team initially wanted to build 'another JobStreet but better'",
        solution:
          "Conducted competitor analysis showing no major platform integrated career development + job search + skill certification. Repositioned as 'career development ecosystem' not 'job platform'",
        result: "Judges praised our integrated approach and clear differentiation",
      },
      {
        title: "Proving Financial Viability",
        problem:
          "How to convince judges that complex multi-sided platform can acquire users and generate revenue?",
        solution:
          "Built detailed CAC model, AIDA-based marketing funnel with conversion assumptions, partnership ROI projections showing university collaborations reduce CAC",
        result:
          "Judges appreciated realistic yet ambitious projections showing profitability by Year 3",
      },
    ],
    learnings: [
      "Strategic market positioning is as important as product features",
      "Partnership-driven growth can significantly reduce customer acquisition costs",
      "MoSCoW prioritization helps balance ideal vision with realistic execution",
    ],
    metrics: {
      tam: "300M users globally",
      sam: "22M users Indonesia",
      som: "200K-500K in 3 years",
      conversion: "30% premium target",
      irr: "45%",
      roi: "55%",
      payback: "2.2 years",
    },
  },

  styleme: {
    type: "pm",
    title: "StyleMe",
    tagline: "When 'Nothing to Wear' meets 'What to Wear Next'",
    category: "Fashion-Tech Platform",
    role: "Strategy & Product Lead",
    context: "Business Plan Competition - EbiFest 2025 | 3-person team",
    year: "Oct 2025",
    teamSize: "3 people",
    bannerImage: "/assets/styleme-1.webp",
    overview: `StyleMe is hybrid fashion assistant — based on mobile-app — that combines AI-powered outfit recommendations with professional human stylist consultations. As CEO, I led the product vision, team coordination, and strategic decisions that earned us Top 7 Finalist position in BPC EBI Fest 2025.

The Problem: Gen Z in Indonesia faces "decision fatigue" — standing in front of full closets feeling like they have "nothing to wear." 88% of Gen Z consider fashion important, yet 64.4% spend less than Rp 500k per shopping trip while constantly feeling stuck in style ruts.

Our Innovation: StyleMe introduced a hybrid model combining AI efficiency (for daily outfit suggestions from digital wardrobe) with human nuance (professional stylists for important occasions). This differentiation addressed the gap we found: pure AI apps sometimes give "horrendous" recommendations, while human stylists are too expensive for daily use.

Market Opportunity: Indonesia's fashion e-commerce market is Rp 232 trillion, with 87.5-88% cart abandonment rate indicating massive decision uncertainty that StyleMe directly addresses.`,
    problem:
      "Decision fatigue from overchoice, pressure to meet social media aesthetic standards, 88% cart abandonment in fashion e-commerce due to styling uncertainty.",
    approach: `As CEO, I drove strategic decisions:
• Conducted primary research with 3 potential users to validate "nothing to wear" problem
• Identified competitive gap: no platform offered hybrid AI + human stylist model
• Defined freemium strategy: AI features free, human consultation premium (Rp 30k-50k/month)`,
    myRole: [
      "Led product vision and strategic direction as CEO",
      "Conducted primary user research validating core problem",
      "Made key decisions on freemium vs. premium feature split",
      "Developed financial projections (IRR 43%, ROI 25%, PBP 1.5 years)",
    ],
    keyFeatures: [
      "ClosetSnap - Upload clothes to AI-powered digital wardrobe",
      "SmartMatch - AI stylist for automatic mix & match recommendations",
      "StyleShare - Save and share favorite outfit combinations",
      "TrendTalks - Fashion trend articles and updates",
      "ProStylist (Premium) - Consultation with professional human stylists",
      "Mix & Match Challenge - Gamified styling for engagement",
    ],
    impact: [
      "Identified unique market positioning: first hybrid AI + human",
      "Validated problem through primary research with real users",
      "TAM: Rp 232T Indonesian fashion e-commerce market",
      "SAM: Rp 194T Java Region market (83.8% of TAM)",
      "SOM: Rp 19.4T realistic target (10% of SAM in 3 years)",
    ],
    challenges: [
      {
        title: "Proving Hybrid Model Viability",
        problem: "Why would users pay for human stylists when AI is free?",
        solution:
          "Research showed AI-only apps give inconsistent recommendations. Positioned human stylists for high-stakes moments (job interviews, dates, important events) where emotional stakes are high. Offered affordable pricing (Rp 30k-50k/month) vs. traditional stylists (Rp 500k+).",
        result:
          "Judges appreciated nuanced understanding of when AI falls short and human touch matters",
      },
      {
        title: "Addressing 88% Cart Abandonment",
        problem:
          "Fashion e-commerce has massive abandonment - how does StyleMe solve this?",
        solution:
          "StyleMe provides 'style validation' before purchase. Users can see how items fit into their existing wardrobe through AI suggestions, reducing uncertainty. Integrated affiliate model where users can buy directly from recommendations.",
        result: "Clear value proposition connecting product to major market pain point",
      },
    ],
    learnings: [
      "Hybrid models can differentiate in AI-dominated spaces by adding human nuance",
      "User research with just 3-5 users can provide powerful validation stories",
      "Freemium pricing requires careful thought about what creates enough value gap to convert",
    ],
    metrics: {
      tam: "Rp 232.28T Indonesia",
      sam: "Rp 194.68T Java Region",
      som: "Rp 19.47T (10% in 3yr)",
      year1Revenue: "Rp 101.35M",
      irr: "43%",
      roi: "25%",
      payback: "1.5 years",
    },
  },

  saveup: {
    type: "pm",
    title: "SaveUp",
    tagline: "Smart Habits for Your Brighter Financial Future",
    category: "Fintech App",
    role: "Product Manager",
    context: "Raion Hackjam | 3-person team",
    year: "Sep 2025",
    teamSize: "3 people (PM, UI/UX Designer, Programmer)",
    bannerImage: "/assets/saveup-1.webp",
    overview: `SaveUp is an AI-powered money management app designed to help Gen Z build healthy financial habits. As Product Manager, I led the product definition, feature prioritization, and Agile development process for this internal hackathon project.

The Problem: Indonesia's financial literacy index is 65.43%, but Gen Z (ages 15-17) scores only 51.7%. 41% of Gen Z struggle to save due to impulsive spending driven by FOMO and YOLO culture. More than 50% run out of money before month-end, and 1 in 3 have consumer debt from paylater/credit.

Our Solution: SaveUp makes financial tracking effortless through AI-powered receipt scanning, chatbot-based expense logging, and visual cash flow tracking. It addresses the core issue: Gen Z know they should track expenses, but find manual entry too tedious to maintain consistently.

This project aligned with SDG 12 (Responsible Consumption and Production), promoting mindful spending habits among young people.`,
    problem:
      "Low financial literacy (51.7% for Gen Z), impulsive spending driven by FOMO, 50%+ running out of money before month-end, tedious manual expense tracking leading to inconsistency.",
    approach: `As Product Manager, I:
• Defined product vision and MVP scope (3 core features: ScanMe, AssistMe, TrackMe)
• Conducted user research through empathy mapping and persona development
• Facilitated Agile Scrum sprints for rapid prototyping
• Collaborated with UI/UX designer on design system and user flows`,
    myRole: [
      "Defined product vision and MVP scope as Product Manager",
      "Wrote user stories and acceptance criteria for each feature",
      "Collaborated with UI/UX designer on wireframes and design system",
      "Coordinated with developer on technical implementation",
      "Conducted user testing sessions and gathered feedback",
    ],
    keyFeatures: [
      "ScanMe - AI-powered receipt scanning for automatic expense logging",
      "AssistMe - Chatbot assistant for quick expense entry via natural language",
      "TrackMe - Visual cash flow tracking with weekly/monthly graphs",
      "Budget alerts and notifications when approaching spending limits",
      "Expense categorization (food, transport, entertainment, etc.)",
      "Simple, Gen Z-friendly interface with minimal friction",
    ],
    impact: [
      "Successfully completed 2/3 MVP prototype in 7 days during Hackjam",
      "Validated problem-solution fit through user testing with target demographic",
      "Demonstrated Agile/Scrum methodology in compressed timeline",
      "Addressed SDG 12 (Responsible Consumption) through conscious spending promotion",
    ],
    challenges: [
      {
        title: "Defining MVP in Tight Timeline",
        problem:
          "Limited hackathon timeframe. Team wanted many features: multi-account support, e-wallet integration, advanced analytics.",
        solution:
          "As PM, I facilitated prioritization workshop. Focused on 3 core features (Scan, Assist, Track) that directly address main pain point: tedious manual entry. Put other features in 'Future Development' backlog.",
        result:
          "Delivered working prototype that demonstrated core value proposition within deadline",
      },
      {
        title: "Making Finance Tracking 'Fun' for Gen Z",
        problem: "Gen Z find traditional finance apps boring and intimidating.",
        solution:
          "Collaborated with UI/UX designer on friendly, approachable design system. Used conversational chatbot (AssistMe) to make tracking feel like texting a friend. Simple graphs (not complex tables) for TrackMe. Avoided finance jargon.",
        result:
          "User testing showed positive response to 'non-intimidating' and 'actually want to use this' feedback",
      },
    ],
    learnings: [
      "User personas and empathy maps are invaluable for team alignment on 'who we're building for'",
      "Working with designer and developer taught cross-functional communication skills",
      "Gen Z products need to feel 'effortless' - every extra tap is a barrier to adoption",
    ],
    metrics: {
      tam: "749K Gen Z (18-25)",
      sam: "55K East Java",
      som: "2.2K in 1-2 years",
      literacyRate: "51.7% Gen Z",
      savingDifficulty: "41% struggle",
      deficit: "50%+ run out monthly",
    },
  },

  takara: {
    type: "pm",
    title: "Takara",
    tagline: "Asisten Dapur Cerdas untuk Pengurangan Limbah Makanan",
    category: "Food-Tech & Sustainability Platform",
    role: "Strategy & Product Lead",
    context: "Business Plan Competition - NBPC Pemuda Internasional 2025 | 3-person team",
    year: "Nov 2025",
    teamSize: "3 people",
    bannerImage: "/assets/takara-1.webp",
    images: ["/assets/takara-1.webp", "/assets/takara-2.webp"],
    overview: `Takara is smart kitchen assistant leveraging Computer Vision AI technology to address one of the world's most critical challenges: food waste.

The Problem: Indonesia is the second-largest food waste contributor globally, with 80% coming from households—totaling 23-48 million tons annually, equivalent to Rp 551 trillion in economic loss (4-5% of GDP). At the household level, unmonitored refrigerators lead to nearly half of food being wasted due to forgetfulness, while meal planning burden (3-4 hours/day) triggers overbuying. Conventional digital solutions remain manual and fragmented, perpetuating the waste cycle.

Our Solution: Takara uses Computer Vision AI for instant stock recognition, adaptive zero-waste recipe algorithms, and proactive expiration reminders. This transforms potential waste into real savings—up to Rp 2 million per household monthly and 30% waste reduction. Through automatic visual scanning, Takara eliminates manual inventory tracking, providing smart recipe recommendations and automatic weekly menu planning prioritizing soon-to-expire ingredients.

Market Opportunity: With 70.6 million households in Indonesia and 60% of consumers interested in AI-powered meal planning, Takara addresses both economic and environmental imperatives while supporting SDG 12 (Responsible Consumption and Production).`,
    problem:
      "Indonesia as second-largest food waste contributor globally (23-48 million tons/year). 80% from households due to poor kitchen management, unmonitored refrigerators, and inadequate meal planning. Economic loss: Rp 551 trillion annually (4-5% GDP).",
    approach: `As product leader, I led strategic initiatives:
• Defined value proposition: transforming waste into savings (Rp 2M/month per household, 30% reduction)
• Designed freemium business model with three revenue streams: premium subscriptions (76%), partnerships (11%), sponsored content (13%)
• Structured go-to-market strategy targeting urban households and young adults living independently`,
    myRole: [
      "Defined target market segmentation (homemakers, students, young professionals)",
      "Designed partnership strategy with e-grocery platforms and sustainability organizations",
      "Led financial projections showing BEP at 646 users/year, payback period 20 months",
    ],
    keyFeatures: [
      "AI Visual Scan - Automatic ingredient recognition and expiration date prediction using Computer Vision",
      "Smart Recipe Recommendations - Zero-waste recipes based on available ingredients nearing expiration",
      "Automatic Weekly Menu Planning - Optimized meal plans prioritizing soon-to-expire items",
      "Digital Kitchen Inventory - Real-time cloud-synced ingredient tracking with freshness monitoring",
      "Proactive Expiration Alerts - Notifications for ingredients approaching expiry dates",
    ],
    impact: [
      "Potential household savings: Rp 2 million per month",
      "Waste reduction target: 30% per household",
      "Supported SDG 12 (Responsible Consumption and Production)",
    ],
    challenges: [
      {
        title: "Ensuring AI Accuracy for Food Safety",
        problem:
          "Computer Vision AI must accurately recognize diverse local Indonesian ingredients and read expiration dates even from damaged/faded packaging. Incorrect predictions could cause food safety issues or user distrust.",
        solution:
          "We positioned AI as 'smart assistant' rather than absolute authority, allowing manual verification. Partnered with open datasets (Kaggle, Google Open Images) for model training. Implemented continuous feedback loop where user corrections improve model accuracy. Emphasized transparency in all messaging about AI limitations.",
        result:
          "Managed user expectations while building trust through 'assistant' framing and continuous improvement approach. Target accuracy: >95% detection rate with <2 second latency.",
      },
    ],
    learnings: [
      "Sustainability-focused products require balancing environmental mission with tangible user benefits (money savings, time efficiency)",
      "Freemium models for impact-driven products must carefully balance accessibility (mission) with viability (business sustainability)",
      "Computer Vision accuracy is a continuous journey—MVP with feedback loops beats delayed perfection, especially for diverse local contexts",
    ],
    metrics: {
      tam: "70.6M households Indonesia",
      sam: "19.83M urban households",
      som: "991.5K households (5% SAM)",
      roi: "48% (5yr average)",
      bep: "646 users/year",
      payback: "20 months",
      year1Revenue: "Rp 167.94M",
      year1OpEx: "Rp 318.5M",
      householdSavings: "Rp 2M/month potential",
      wasteReduction: "30% target",
    },
    prototypeUrl:
      "https://www.figma.com/proto/sBhkzXHpNkAYUb1LP7gPkc/TIMBUL-JUARA?page-id=77%3A4&node-id=91-6&viewport=-1692%2C-844%2C0.22&t=y1fMcWrg3OyTIUNO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=77%3A2225",
  },

  // ==================== FE PROJECTS ====================
  "personalsite-v1": {
    type: "fe",
    title: "PersonalSite-v1",
    tagline: "Modern Portfolio Crafted with Performance & Motion in Mind",
    teamSize: "Personal Project",
    year: "2026",
    images: [
      "/assets/personalsite-1.webp",
      "/assets/personalsite-2.webp",
      "/assets/personalsite-3.webp",
    ],
    overview: `My personal portfolio website built to showcase projects and PM case studies with a focus on performance, accessibility, and delightful user experience.`,
    features: [
      "Responsive design",
      "Dynamic project routing",
      "Smooth animations",
      "Project Showcase",
      "Performance optimized",
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    liveUrl: "https://dealovaa-site.vercel.app",
    repoUrl: "https://github.com/dvsalmah/PersonalSite-v1",
  },
  "Taskly-app": {
    type: "fe",
    title: "Taskly-app",
    tagline: "A Task Management platform for individuals and Teams",
    teamSize: "Personal Project",
    year: "2026",
    images: [
      "/assets/taskly-1.png",
      "/assets/taskly-2.png",
      "/assets/taskly-3.png",
      "/assets/taskly-4.png",
      "/assets/taskly-5.png",
    ],
    overview: `Taskly is a web-based task management platform designed to help individuals and teams stay organized and productive. With features like task tracking, project organization, and team collaboration, Taskly makes it easy to manage your work and stay on top of your goals.`,
    features: [
      "Responsive design",
      "Vital Task",
      "Task Category",
      "Team collaboration",
      "Performance optimized",
    ],
    technologies: ["Inertia.js", "Laravel", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://taskly-app-3k0w.onrender.com",
    repoUrl: "https://github.com/dvsalmah/Taskly-app",
  },
  "Indri Collection Website":{
    type: "fe",
    title: "Indri Collection Website",
    tagline: "Built a website for Indri Collection as part of the Bakti Champions Movement initiative.",
    teamSize: "Team Project",
    year: "2026",
    images: [
      "/assets/indri-1.png",
      "/assets/indri-2.png",
      "/assets/indri-3.png",
    ],
    overview: `Built a website for Indri Collection as part of the Bakti Champions Movement initiative, helping the business transition into the digital space through improved product visibility, branding, and customer engagement.`,
    features: [
      "Responsive design",
      "Product Showcase",
      "Team collaboration",
      "Performance optimized",
    ],
    technologies: ["React.js", "Vite", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://indri-collection.vercel.app",
    repoUrl: "https://github.com/femnixx/indri-collection-website",
  },
  "PersonalSite-v2":{
    type: "fe",
    title: "PersonalSite-v2",
    tagline: "Modern personal portfolio website build with Next.Js, TypeScript, and Shadcn UI",
    teamSize: "Personal Project",
    year: "2026",
    images: [
      "/assets/personalsite2-1.png",
      "/assets/personalsite2-2.png",
      "/assets/personalsite2-3.png",
    ],
    overview: `My newest personal portfolio website to showcase my projects and case studies`,
    features: [
      "Responsive design",
      "Dynamic project routing",
      "Smooth animations",
      "Project Showcase",
      "Performance optimized",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://dealovaa.com",
    repoUrl: "https://github.com/dvsalmah/personalsite-v2",
  }
};
