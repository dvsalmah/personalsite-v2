"use client";
import React, { JSX, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false); 
  
  const hasShownHint = React.useRef(false);
  const isHinting = React.useRef(false);
  const globalMouseX = React.useRef(0);
  
  const dockMouseX = useMotionValue(Infinity);
  const dockMouseY = useMotionValue(Infinity);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof window !== "undefined") {
      const pastThreshold = current > window.innerHeight * 0.5;
      setIsPastHero(pastThreshold);

      if (!isDesktop) {
        setVisible(pastThreshold);
      } else {
        if (!pastThreshold) {
          setVisible(false);
          hasShownHint.current = false;
          isHinting.current = false;
        } else if (pastThreshold && !hasShownHint.current) {
          setVisible(true);
          hasShownHint.current = true;
          isHinting.current = true;

          setTimeout(() => {
            isHinting.current = false;
            if (globalMouseX.current >= 80) {
              setVisible(false);
            }
          }, 2500);
        }
      }
    }
  });

  useEffect(() => {
    if (!isDesktop) return;

    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      globalMouseX.current = e.clientX;

      if (!isPastHero) {
        setVisible(false);
        return;
      }

      if (e.clientX < 80) {
        setVisible(true);
        clearTimeout(timeoutId);
      } else {
        if (isHinting.current) return;

        timeoutId = setTimeout(() => {
          setVisible(false);
        }, 200);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [isDesktop, isPastHero]); 

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          x: isDesktop ? -100 : "-50%",
          y: isDesktop ? "-50%" : 100,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          x: isDesktop ? (visible ? 0 : -100) : "-50%",
          y: isDesktop ? "-50%" : (visible ? 0 : 100),
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={cn(
          "fixed z-[5000] flex",
          "bottom-6 left-1/2 flex-row",
          "lg:bottom-auto lg:top-1/2 lg:left-6 lg:flex-col",
          isDesktop ? desktopClassName : mobileClassName
        )}
      >
        <motion.div
          onMouseMove={(e) => {
            dockMouseX.set(e.clientX);
            dockMouseY.set(e.clientY);
          }}
          onMouseLeave={() => {
            dockMouseX.set(Infinity);
            dockMouseY.set(Infinity);
          }}
          className={cn(
            "flex items-center gap-4 p-2 rounded-2xl bg-neutral-100/80 border border-neutral-200/50 shadow-lg backdrop-blur-lg dark:bg-neutral-900/40 dark:border-white/10",
            "flex-row",
            "lg:flex-col"
          )}
        >
          {items.map((item, idx: number) => (
            <DockItem 
              key={`link-${idx}`} 
              item={item} 
              mouseX={dockMouseX}
              mouseY={dockMouseY}
              isDesktop={isDesktop}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

function DockItem({
  item,
  mouseX,
  mouseY,
  isDesktop,
}: {
  item: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  };
  mouseX: MotionValue;
  mouseY: MotionValue;
  isDesktop: boolean;
}) {
  let ref = React.useRef<HTMLAnchorElement>(null);

  let distance = useTransform(() => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
    if (isDesktop) {
      const val = mouseY.get();
      if (val === Infinity) return Infinity;
      return val - bounds.y - bounds.height / 2;
    } else {
      const val = mouseX.get();
      if (val === Infinity) return Infinity;
      return val - bounds.x - bounds.width / 2;
    }
  });

  let sizeSync = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
  let size = useSpring(sizeSync, { mass: 0.2, stiffness: 200, damping: 10 });

  return (
    <div className="group relative flex items-center justify-center">
      <motion.a
        ref={ref}
        href={item.href}
        onClick={item.onClick}
        style={{ width: size, height: size }}
        className={cn(
          "relative z-10 flex items-center justify-center rounded-2xl border border-neutral-300/60 text-neutral-600 transition-colors duration-200 dark:border-white/20 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:bg-neutral-200/50 dark:group-hover:bg-white/10"
        )}
      >
        <motion.div
          style={{ scale: useTransform(size, [44, 70], [1, 1.25]) }}
          className="flex items-center justify-center"
        >
          {item.icon}
        </motion.div>
      </motion.a>

      <span className={cn(
        "pointer-events-none absolute whitespace-nowrap rounded-lg bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-sm transition-all duration-300 dark:bg-slate-200 dark:text-slate-900",
        "bottom-full mb-3 left-1/2 -translate-x-1/2 group-hover:-translate-y-1 group-hover:opacity-100",
        "lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-full lg:ml-4 lg:mb-0 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1/2"
      )}>
        {item.title}
        <div className={cn(
          "absolute border-[5px] border-transparent",
          "top-full left-1/2 -translate-x-1/2 border-t-slate-800 dark:border-t-slate-200",
          "lg:top-1/2 lg:-translate-y-1/2 lg:right-full lg:left-auto lg:-translate-x-0 lg:border-t-transparent lg:border-r-slate-800 dark:lg:border-r-slate-200"
        )}></div>
      </span>
    </div>
  );
}
