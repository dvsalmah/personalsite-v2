"use client";

import { scrollToSection } from "@/lib/utils";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Mail, User, Lightbulb, Briefcase, FolderGit2 } from "lucide-react";

const NAV_ITEMS = [
  { 
    name: "About", 
    link: "#home",
    icon: <User className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("home");
    }
  },
  { 
    name: "Skills", 
    link: "#skills",
    icon: <Lightbulb className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("skills");
    }
  },
  { 
    name: "Experiences", 
    link: "#experiences",
    icon: <Briefcase className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("experiences");
    }
  },
  { 
    name: "Projects", 
    link: "#projects",
    icon: <FolderGit2 className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("projects");
    },
  },
  { 
    name: "Contact", 
    link: "#contact",
    icon: <Mail className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("contact");
    }
  }
];

export default function Navbar() {
  return <FloatingNav navItems={NAV_ITEMS} />;
}

