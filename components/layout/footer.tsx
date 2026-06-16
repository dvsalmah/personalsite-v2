"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { socialLinks } from "@/lib/data/social.data";

// Map icon string ke komponen Lucide
const ICON_MAP = { mail: Mail, github: Github, linkedin: Linkedin, instagram: Instagram };

export default function Footer() {
  const iconLinks = socialLinks.filter((s) => s.icon !== "mail");

  return (
    <footer className="bg-surface-hover text-text py-8 px-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center gap-6">
            {/* Logo */}
            <button onClick={() => scrollToSection("home")} className="cursor-pointer">
              <img src="/icon.svg" alt="Dealova Logo" className="w-10 h-10 object-contain" />
            </button>

            {/* Social icons */}
            <div className="flex space-x-4 text-muted/60">
              {iconLinks.map((link) => {
                const Icon = ICON_MAP[link.icon];
                return (
                  <a
                    key={link.icon}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className="flex items-center hover:text-text transition-colors"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400/60 to-transparent my-4" />
          <p className="flex justify-center mb-4 md:mb-0">
            &copy; 2026 Dealova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
