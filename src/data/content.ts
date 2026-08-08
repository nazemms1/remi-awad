// Edit this file to update all portfolio content — no need to touch components.

export const profile = {
  name: "Rémi Awad",
  role: "Pharm.D. — Health Economics, Market Access & Data Science",
  heroLine: "Turning health data into",
  heroAccent: "decisions that reach patients.",
  tagline:
    "Pharmacist specialized in industrial pharmacy, working at the intersection of health economics, market access, and data science — helping healthcare organizations make evidence-based decisions.",
  location: "Dubai, UAE",
  email: "remiawad@hotmail.fr",
  phone: "+971 58 997 8874",
  linkedin: "https://fr.linkedin.com/in/rémi-awad-bb6194229",
  resumeUrl: "#",
};

export const about = {
  statement: "Every model I build has to survive contact with a real patient, a real budget, and a real regulator.",
  intro:
    "I'm a Doctor of Pharmacy with a specialization in industrial pharmacy, and two master's degrees layered on top — one in health economic assessment and market access, one in data science and artificial intelligence. That combination shapes how I work: I care as much about statistical rigor as I do about whether a recommendation can actually survive a CEESP submission or a client boardroom.",
  paragraphs: [
    "My work has spanned cost-effectiveness and budget impact modeling, real-world evidence analysis, and AI-adoption strategy for organizations navigating fast-moving health markets. I've built models submitted to French health authorities, mined national datasets to find transposable cohorts, and helped teams figure out whether they're actually ready for the AI tools they want to adopt.",
    "I'm fluent in English, French, and Arabic, and I've volunteered on the ground — from COVID-19 testing during the pandemic to humanitarian relief after the Beirut explosion. I care about work that's rigorous enough to trust and grounded enough to matter.",
  ],
  stats: [
    { label: "Advanced degrees", value: "3+" },
    { label: "Languages fluent", value: "3" },
    { label: "Years in health & data", value: "5+" },
  ],
  languages: ["English", "French", "Arabic", "Spanish (basic)"],
  tools: ["Python", "R", "SQL", "VBA", "Excel", "PowerPoint"],
};

export const specializations = [
  {
    title: "Health Economics & Market Access",
    description: "Cost-effectiveness and budget impact modeling, pricing analysis, and access strategy for regulatory submission.",
  },
  {
    title: "Real-World Evidence & HEOR",
    description: "Cohort analysis across large health datasets and patient-reported outcomes research on quality of life.",
  },
  {
    title: "Data Science & AI",
    description: "Python and R-driven analytics, plus AI tooling built to streamline day-to-day operational workflows.",
  },
  {
    title: "Strategy Consulting",
    description: "AI-adoption readiness, capability maturity benchmarking, and operational frameworks for health organizations.",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Cost-Effectiveness & Budget Impact Model — CEESP Submission",
    description:
      "Contributed to building and refining a cost-effectiveness and budget impact model at Amgen, culminating in a successful submission to the French CEESP.",
    tags: ["HEOR", "Market Access", "R"],
    featured: true,
  },
  {
    title: "AI-Adoption Readiness & Capability Maturity Framework",
    description:
      "Developed analytical frameworks benchmarking organizational maturity and readiness for AI adoption across R&D and innovation strategy engagements at Smarkk.",
    tags: ["AI Strategy", "Consulting", "Benchmarking"],
    featured: true,
  },
  {
    title: "Real-World Evidence Cohort Analysis",
    description:
      "Analyzed extensive French health datasets to identify key cohorts of interest, supporting the transposability of real-world evidence findings.",
    tags: ["RWE", "Python", "SQL"],
  },
  {
    title: "Regional Market Access & Pricing Strategy",
    description:
      "Aggregated open health data to assess regional medical needs and disparities, supporting pricing analysis and competitive landscape assessment at Bayer.",
    tags: ["Market Access", "Pricing", "Data Analysis"],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Strategy Consultant",
    org: "Smarkk, Dubai, UAE",
    period: "04/25 — Present",
    points: [
      "Conduct strategic and operational analyses supporting client decision-making across AI adoption, R&D, and innovation strategy.",
      "Develop data-driven insights and recommendations by benchmarking best practices and assessing organizational readiness.",
      "Engage stakeholders to design tailored consulting solutions, including SOPs, safety frameworks, and operational guidelines.",
    ],
  },
  {
    role: "Apprenticeship, HEOR & RWE",
    org: "Amgen, Paris, France",
    period: "09/23 — 11/24",
    points: [
      "Contributed to cost-effectiveness and budget impact models, culminating in submission to the French CEESP.",
      "Analyzed extensive French datasets to identify key cohorts, supporting real-world evidence transposability.",
      "Conducted patient-reported outcomes research evaluating the impact of medical interventions on quality of life.",
    ],
  },
  {
    role: "Internship, Market Access",
    org: "Bayer, Paris, France",
    period: "04/23 — 09/23",
    points: [
      "Aggregated and analyzed open health data to assess regional medical needs and disparities.",
      "Supported development of strategic access plans and contributed to pricing and competitive landscape analysis.",
    ],
  },
];

export const education = [
  { degree: "Doctor of Pharmacy — Industrial Pharmacy", school: "Université de Lille, Faculté de Pharmacie", period: "2017 — 2024" },
  { degree: "MSc, Data Science & Artificial Intelligence", school: "Data ScienceTech Institute (DSTI), Paris", period: "2022 — 2024" },
  { degree: "MSc, Health Economic Assessment & Market Access", school: "Université Dauphine-PSL, Paris", period: "2023 — 2024" },
];

export const volunteering = [
  { role: "COVID-19 Testing Volunteer", org: "CHU de Lille, France", period: "09/20 — 12/20" },
  { role: "Humanitarian Relief", org: "Red Cross, Beirut, Lebanon", period: "08/20" },
];
