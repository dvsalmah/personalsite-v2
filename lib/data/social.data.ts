import type { SocialLink } from "@/types";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

// Re-export icons so consumers don't need to import separately
export const SOCIAL_ICONS = { Mail, Github, Linkedin, Instagram };

export const socialLinks: SocialLink[] = [
  {
    href: "mailto:dealovasalmah12@gmail.com",
    label: "dealovasalmah12@gmail.com",
    icon: "mail",
  },
  {
    href: "https://github.com/dvsalmah",
    label: "dvsalmah",
    icon: "github",
    external: true,
  },
  {
    href: "https://linkedin.com/in/dealova-ns",
    label: "dealova-ns",
    icon: "linkedin",
    external: true,
  },
  {
    href: "https://instagram.com/dnabs_",
    label: "dnabs_",
    icon: "instagram",
    external: true,
  },
];
