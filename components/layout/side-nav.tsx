"use client";

import { scrollToSection } from "@/lib/utils";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Mail, User, Terminal, Network, FolderGit2 } from "lucide-react";

const NAV_ITEMS = [
  { 
    title: "About", 
    href: "#home",
    icon: <User className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("home");
    }
  },
  { 
    title: "Skills", 
    href: "#skills",
    icon: <Terminal className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("skills");
    }
  },
  { 
    title: "Experiences", 
    href: "#experiences",
    icon: <Network className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("experiences");
    }
  },
  { 
    title: "Projects", 
    href: "#projects",
    icon: <FolderGit2 className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("projects");
    },
  },
  { 
    title: "Contact", 
    href: "#contact",
    icon: <Mail className="w-5 h-5" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection("contact");
    }
  }
];

export default function SideNav() {
  return <FloatingDock items={NAV_ITEMS} />;
}

