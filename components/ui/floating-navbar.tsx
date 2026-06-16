"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof window !== "undefined") {
      if (current > window.innerHeight * 0.5) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
          y: "-50%",
        }}
        animate={{
          x: visible ? 0 : -100,
          y: "-50%",
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={cn(
          "flex flex-col max-w-fit fixed left-4 md:left-6 top-1/2 z-[5000] items-center justify-center",
          className
        )}
      >
        <div
          className="flex flex-col items-center gap-4 p-2 rounded-2xl bg-neutral-100/80 border border-neutral-200/50 shadow-lg backdrop-blur-lg dark:bg-neutral-900/40 dark:border-white/10"
        >
          {navItems.map((navItem, idx: number) => (
            <div key={`link-${idx}`} className="group relative flex items-center justify-center">
              <a
                href={navItem.link}
                onClick={navItem.onClick}
                className={cn(
                  "relative flex items-center justify-center w-11 h-11 rounded-xl border border-neutral-300/60 text-neutral-600 transition-all duration-300 hover:scale-[1.1] hover:text-black hover:border-neutral-400 dark:border-white/20 dark:text-neutral-400 dark:hover:text-white dark:hover:border-white/40"
                )}
              >
                {navItem.icon}
              </a>

              {/* Tooltip */}
              <span className="pointer-events-none absolute left-full ml-4 whitespace-nowrap rounded-lg bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 dark:bg-slate-200 dark:text-slate-900">
                {navItem.name}
                {/* Tooltip Arrow */}
                <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-r-slate-800 dark:border-r-slate-200"></div>
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};