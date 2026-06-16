"use client";

import { useState, useEffect } from "react";
import { ThemeToggleButton2 } from "@/components/ui/skiper4";
import { useThemeToggle } from "@/components/ui/skiper26";

export function ThemeToggleFloating() {
  const [mounted, setMounted] = useState(false);
  const { isDark, toggleTheme } = useThemeToggle({
    variant: "circle-blur",
    start: "top-right",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <ThemeToggleButton2 
        isDark={isDark}
        onToggle={toggleTheme}
        className="h-10 w-10 border border-slate-200 dark:border-slate-700/50 cursor-pointer bg-surface text-text"
      />
    </div>
  );
}
