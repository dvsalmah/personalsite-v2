// ─── Project Card (grid section) ──────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  context: string;
  logo: string;
  github?: string;
  liveDemo?: string;
  priority?: boolean;
}

// ─── Challenge item inside ProjectDetail ──────────────────────────────────────
export interface Challenge {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

// ─── Metrics map ──────────────────────────────────────────────────────────────
export type MetricsMap = Record<string, string>;

// ─── PM Project Detail ────────────────────────────────────────────────────────
export interface PMProjectDetail {
  type: "pm";
  title: string;
  tagline: string;
  category: string;
  role: string;
  context: string;
  year: string;
  teamSize: string;
  bannerImage?: string;
  images?: string[];
  overview: string;
  problem: string;
  approach: string;
  myRole: string[];
  keyFeatures: string[];
  impact: string[];
  challenges?: Challenge[];
  learnings?: string[];
  metrics?: MetricsMap;
  prototypeUrl?: string;
}

// ─── FE Project Detail ────────────────────────────────────────────────────────
export interface FEProjectDetail {
  type: "fe";
  title: string;
  tagline: string;
  teamSize: string;
  year: string;
  images?: string[];
  bannerImage?: string;
  overview: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export type ProjectDetail = PMProjectDetail | FEProjectDetail;

// ─── Experience ────────────────────────────────────────────────────────────────
export interface Experience {
  title?: string;
  year: string;
  role: string;
  description: string;
  tech?: string[];
  priority?: boolean;
}

// ─── Skill Category ───────────────────────────────────────────────────────────
export interface SkillCategory {
  title: string;
  badges: string[];
}

// ─── Social Link ──────────────────────────────────────────────────────────────
export interface SocialLink {
  href: string;
  label: string;
  icon: "mail" | "github" | "linkedin" | "instagram";
  external?: boolean;
}

// ─── About Photo ──────────────────────────────────────────────────────────────
export interface Photo {
  id: number;
  src: string;
  alt: string;
}
