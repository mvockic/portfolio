export const META = {
  name: "Marko",
  title: "Software Developer",
  email: "markovockicc@email.com",
  github: "https://github.com/mvockic",
  linkedin: "https://linkedin.com/in/markovockic",
  tagline: "Building software that matters.",
  bio: `Junior software developer at Vivo Surgery. Mohawk College grad.
I build React dashboards, Flask APIs, and AWS infrastructure for healthcare
— and side projects that solve real problems.`,
};

export const NAV_LINKS = ["about", "projects", "experience", "skills", "contact"];

export const PROJECTS = [
  {
    id: "clinical-rag",
    title: "Clinical Document RAG",
    tags: ["Flask", "pgvector", "FHIR R4", "sentence-transformers"],
    description:
      "Retrieval-augmented generation system for clinical Q&A over FHIR R4 patient records. Ingests bundles from HAPI FHIR test server, embeds with sentence-transformers, stores in pgvector, and serves answers through a Flask API with an evaluation harness.",
    color: "emerald",
    status: "In Progress",
    highlights: [
      "FHIR R4 bundle ingestion pipeline",
      "pgvector semantic search with cosine similarity",
      "Automated eval harness for answer quality",
    ],
    architecture: [
      { label: "HAPI FHIR", type: "source" },
      { label: "Flask API", type: "process" },
      { label: "sentence-transformers", type: "process" },
      { label: "pgvector", type: "store" },
      { label: "RAG Response", type: "output" },
    ],
  },
  {
    id: "lead-discovery",
    title: "Lead Discovery Platform",
    tags: ["Flask", "Next.js", "Claude API", "SendGrid", "Twilio"],
    description:
      "Business acquisition and web presence automation for small businesses. Sources leads via Google Places and Yelp APIs, generates copy with the Claude API, builds client sites with Next.js, and handles outreach through SendGrid email and Twilio SMS.",
    color: "blue",
    status: "Active",
    highlights: [
      "Multi-API lead sourcing (Google Places, Yelp)",
      "AI-generated marketing copy via Claude API",
      "CASL-compliant email and SMS outreach",
    ],
    architecture: [
      { label: "Google Places / Yelp", type: "source" },
      { label: "Flask Pipeline", type: "process" },
      { label: "Claude API", type: "process" },
      { label: "Next.js Sites", type: "output" },
      { label: "SendGrid / Twilio", type: "output" },
    ],
  },
  {
    id: "surgical-platform",
    title: "Surgical Platform Dashboards",
    tags: ["React", "Flask", "AWS", "HIPAA"],
    description:
      "Production React dashboards and Flask backend services for a HIPAA-compliant surgical platform at Vivo Surgery. Built cloud infrastructure on AWS to support real-time clinical workflows.",
    color: "amber",
    status: "Production",
    highlights: [
      "HIPAA-compliant architecture end to end",
      "Real-time clinical workflow dashboards",
      "AWS EC2/S3 cloud infrastructure",
    ],
    architecture: [
      { label: "Clinical Data", type: "source" },
      { label: "Flask Backend", type: "process" },
      { label: "AWS (EC2/S3)", type: "store" },
      { label: "React Dashboards", type: "output" },
    ],
  },
  {
    id: "construction-tools",
    title: "Construction Business Tools",
    tags: ["Python", "Microsoft 365", "Invoicing"],
    description:
      "Custom invoice and quote generation tool for Ang Construction, the family business. Recovered and reconfigured Microsoft 365 admin access and business email infrastructure.",
    color: "orange",
    status: "Shipped",
    highlights: [
      "Automated invoice and quote generation",
      "Microsoft 365 admin recovery",
      "Business email infrastructure setup",
    ],
    architecture: [
      { label: "Job Data", type: "source" },
      { label: "Python Engine", type: "process" },
      { label: "PDF Output", type: "output" },
      { label: "M365 Email", type: "output" },
    ],
  },
];

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "Java", level: 60 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 80 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Flask", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "pgvector", level: 70 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, S3)", level: 75 },
      { name: "Docker", level: 70 },
      { name: "WSL2", level: 80 },
      { name: "Git", level: 85 },
    ],
  },
  {
    category: "Domain Knowledge",
    items: [
      { name: "FHIR R4", level: 75 },
      { name: "HL7", level: 60 },
      { name: "HIPAA", level: 70 },
      { name: "CASL", level: 65 },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "RAG Pipelines", level: 75 },
      { name: "Claude API", level: 80 },
      { name: "sentence-transformers", level: 70 },
      { name: "LLM Integration", level: 75 },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Junior Software Developer",
    company: "Vivo Surgery",
    location: "Grimsby, ON",
    period: "Present",
    current: true,
    points: [
      "Build React dashboards and Flask APIs for a HIPAA-compliant surgical platform",
      "Design and maintain AWS cloud infrastructure (EC2, S3)",
      "Implement data pipelines for real-time clinical workflows",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Evertz Microsystems",
    location: "Burlington, ON",
    period: "Previous",
    current: false,
    points: [
      "Developed distributed monitoring systems with Python asyncio",
      "Built tooling for broadcast infrastructure at scale",
      "Worked within large-scale enterprise codebases",
    ],
  },
];

export const EDUCATION = {
  school: "Mohawk College",
  credential: "Software Development Diploma",
  location: "Hamilton, ON",
};

export const TERMINAL_COMMANDS = {
  help: `Available commands:
  about       — who I am
  skills      — tech stack
  projects    — what I've built
  contact     — get in touch
  clear       — clear terminal`,
  about: `Marko — Junior Software Developer
  Currently building healthcare software at Vivo Surgery.
  Mohawk College grad. Based in Grimsby, ON.
  I care about clean code, real-world impact, and shipping.`,
  skills: `Languages:  Python · JavaScript · TypeScript · SQL
  Frontend:   React · Next.js · Tailwind CSS
  Backend:    Flask · PostgreSQL · pgvector
  Cloud:      AWS · Docker · Git
  Domain:     FHIR R4 · HIPAA · CASL · RAG`,
  projects: `1. Clinical Document RAG  [In Progress]
     FHIR R4 → pgvector → Flask API
  2. Lead Discovery Platform  [Active]
     Google Places → Claude API → Next.js
  3. Surgical Dashboards  [Production]
     React → Flask → AWS (HIPAA)
  4. Construction Tools  [Shipped]
     Python invoicing for Ang Construction`,
  contact: `Email:    your@email.com
  GitHub:   github.com/mvockic
  LinkedIn: linkedin.com/in/markovockic`,
};
