"use client";

import { scrollToSection } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experiences", id: "experiences" },
  { name: "Projects", id: "projects" },
];

export default function Navbar() {
  return (
    <header className="fixed top-5 md:top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90%] md:max-w-none">
      <nav
        className="
          flex items-center justify-center
          gap-0 md:gap-2
          px-3 py-2 md:px-3 md:py-2
          rounded-full
          bg-slate-900/40
          backdrop-blur-xl
          border border-white/10
          shadow-[0_0_15px_rgba(0,0,0,0.5)]
          ring-1 ring-white/5
          transition-all duration-300 ease-in-out
          hover:bg-slate-900/60 hover:border-white/20 hover:scale-[1.02]
        "
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            className="
              px-2 md:px-5 py-2
              text-xs md:text-sm font-medium
              text-slate-300
              transition-all duration-300
              rounded-full
              hover:text-white
              hover:bg-white/10
            "
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
