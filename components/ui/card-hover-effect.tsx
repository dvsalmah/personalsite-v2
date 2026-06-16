"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types";

// ─── Sub-components ───────────────────────────────────────────────────────────

function HoverCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full min-h-[200px] lg:min-h-[150px] p-4 overflow-hidden relative z-20",
        "flex flex-col items-center justify-center text-center",
        "bg-[#1E293B] group-hover:bg-transparent",
        "border border-slate-700 group-hover:border-transparent",
        "transition-all duration-100 scale-100 group-hover:scale-125",
        className
      )}
    >
      <div className="relative z-50 w-full">
        <div>{children}</div>
      </div>
    </div>
  );
}

function HoverCardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h4
      className={cn(
        "font-bold tracking-wide mt-2",
        "text-[#F8FAFC] group-hover:text-slate-900 transition-colors duration-300",
        className
      )}
    >
      {children}
    </h4>
  );
}

// ─── HoverEffect ──────────────────────────────────────────────────────────────

interface HoverEffectProps {
  items: SkillCategory[];
  className?: string;
}

export function HoverEffect({ items, className }: HoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 py-px", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full transition-all duration-500 hover:z-30 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="pointer-events-none absolute inset-0 h-full w-full bg-[#F1A7C6] rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.01 } }}
                exit={{ opacity: 0, transition: { duration: 0.01 } }}
              />
            )}
          </AnimatePresence>

          <HoverCard>
            {/* Default state: title */}
            <div className="flex flex-col items-center justify-center content-center h-full group-hover:hidden transition-all duration-150">
              <HoverCardTitle>{item.title}</HoverCardTitle>
            </div>

            {/* Hover state: badges */}
            <div className="hidden group-hover:flex flex-wrap gap-0.5 justify-center items-center h-full animate-in fade-in zoom-in duration-100 overflow-auto">
              {item.badges.map((badge, i) => (
                <span
                  key={i}
                  className="bg-slate-900/80 text-slate-100 border border-slate-700 px-1.5 py-0.5 text-[10px] leading-tight rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </HoverCard>
        </div>
      ))}
    </div>
  );
}
