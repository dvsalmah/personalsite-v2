"use client";

import { motion, useMotionValue, animate, AnimatePresence, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Experience } from "@/types";
import { cn } from "@/lib/utils";

interface TimelineProps {
  data: Experience[];
}

export function Timeline({ data }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [progressIndex, setProgressIndex] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [popupPosition, setPopupPosition] = useState<"top" | "bottom">("top");
  const [isMobile, setIsMobile] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [trackHeight, setTrackHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.clientWidth);
        setTrackHeight(trackRef.current.clientHeight);
      }
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIdx = Math.max(1, data.length - 1);
  const trackSize = isMobile ? trackHeight : trackWidth;
  const stepSize = trackSize > 0 ? trackSize / maxIdx : 0;
  const progressOffset = isMobile ? y : x;

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < 350) {
          setPopupPosition("bottom");
        } else {
          setPopupPosition("top");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (trackRef.current && !trackRef.current.contains(event.target as Node)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (trackSize > 0 && activeIndex !== null) {
      animate(progressOffset, activeIndex * stepSize, { type: "spring", stiffness: 300, damping: 30 });
    }
  }, [trackWidth, trackHeight]); 

  useMotionValueEvent(progressOffset, "change", (latestVal) => {
    if (trackSize <= 0 || maxIdx <= 0) return;
    
    const passed = Math.floor(latestVal / stepSize + 0.1); 
    setProgressIndex(passed);

    let foundIndex: number | null = null;
    const threshold = Math.max(15, stepSize * 0.15); 
    
    for (let i = 0; i <= maxIdx; i++) {
      const pointVal = i * stepSize;
      if (Math.abs(latestVal - pointVal) < threshold) {
        foundIndex = i;
        break;
      }
    }
    
    if (foundIndex !== activeIndex) {
      setActiveIndex(foundIndex);
    }
  });

  const handlePointClick = (index: number) => {
    setActiveIndex(index);
    if (trackSize > 0) {
      animate(progressOffset, index * stepSize, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  // Continuous progress bar
  const progressSize = useTransform(progressOffset, (currentVal) => {
    return trackSize > 0 ? `${(currentVal / trackSize) * 100}%` : "0%";
  });

  // Safe Pop-up X calculation for Desktop
  const popupWidth = isMobile ? 280 : 450;
  const popupX = useTransform(x, (currentX) => {
    if (isMobile) return 0;
    let safeX = currentX - (popupWidth / 2);
    if (safeX < -16) safeX = -16;
    if (safeX + popupWidth > trackWidth + 16) safeX = trackWidth - popupWidth + 16;
    return safeX;
  });

  return (
    <div className="w-full font-sans px-4 md:px-10 py-20 md:py-40" ref={containerRef}>
      <div className="relative max-w-5xl mx-auto flex">
        
        {/* The Track */}
        <div 
          ref={trackRef}
          className={cn(
            "relative bg-neutral-200 dark:bg-neutral-800 rounded-full",
            isMobile ? "w-2 h-[600px] shrink-0" : "h-2 w-full"
          )}
        >
          {/* Continuous Active Track Fill */}
          <motion.div 
            className="absolute left-0 top-0 bg-primary rounded-full"
            style={isMobile ? { width: "100%", height: progressSize } : { height: "100%", width: progressSize }}
          />

          {/* Ticks/Points */}
          {data.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "absolute flex items-center group cursor-pointer",
                isMobile ? "left-1/2 -translate-x-1/2 flex-row" : "top-1/2 -translate-y-1/2 flex-col"
              )}
              style={isMobile ? { top: `${(idx / maxIdx) * 100}%` } : { left: `${(idx / maxIdx) * 100}%` }}
              onClick={() => handlePointClick(idx)}
            >
              {/* Point Circle */}
              <div 
                className={cn(
                  "w-4 h-4 rounded-full border-2 transition-all duration-300",
                  progressIndex >= idx ? "bg-primary border-primary" : "bg-slate-800 border-neutral-600 group-hover:border-primary",
                  activeIndex === idx && "ring-4 ring-primary/30 scale-125"
                )} 
              />
              {/* Year Label */}
              <span 
                className={cn(
                  "absolute whitespace-nowrap transition-colors duration-300 font-semibold text-xs",
                  isMobile ? "left-6" : "top-6",
                  activeIndex === idx ? "text-primary" : "text-slate-500 group-hover:text-slate-300"
                )}
              >
                {item.year}
              </span>
            </div>
          ))}

          {/* Smart Pop-up */}
          {trackSize > 0 && (
            <motion.div
              key={isMobile ? "mobile-popup" : "desktop-popup"}
              style={isMobile ? { y: progressOffset, x: 0 } : { x: popupX, y: 0 }}
              className={cn(
                "absolute z-40",
                isMobile 
                  ? "left-8 -translate-y-1/2" 
                  : (popupPosition === "top" ? "bottom-full mb-8 left-0" : "top-full mt-8 left-0") 
              )}
            >
              <AnimatePresence mode="wait">
                {activeIndex !== null && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: popupPosition === "top" && !isMobile ? 20 : (isMobile ? 0 : -20), x: isMobile ? -10 : 0, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "p-5 md:p-6 w-80 md:w-90 rounded-2xl bg-surface-hover backdrop-blur-xl border border-border shadow-2xl cursor-default"
                    )}
                  >
                    <div className="flex flex-col text-left">
                      <h3 className="text-md font-bold text-slate-900 dark:text-slate-100">{data[activeIndex].title}</h3>
                      <span className="block text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                        {data[activeIndex].year}
                      </span>
                      <h4 className="text-slate-700 dark:text-slate-300 text-xs font-bold mb-3">{data[activeIndex].role}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                        {data[activeIndex].description}
                      </p>

                      {data[activeIndex].tech && (
                        <div className="flex flex-wrap gap-2">
                          {data[activeIndex].tech.map((techItem, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs rounded-md bg-white/50 dark:bg-slate-800/50 border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300"
                            >
                              {techItem}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Draggable Thumb */}
          {trackSize > 0 && (
            <motion.div
              key={isMobile ? "mobile" : "desktop"}
              style={isMobile ? { y: progressOffset, x: 0 } : { x: progressOffset, y: 0 }}
              drag={isMobile ? "y" : "x"}
              dragConstraints={isMobile ? { top: 0, bottom: trackHeight } : { left: 0, right: trackWidth }}
              dragElastic={0}
              dragMomentum={false}
              className={cn(
                "absolute bg-primary rounded-full shadow-[0_0_15px_rgba(241,167,198,0.5)] cursor-grab active:cursor-grabbing z-50 flex items-center justify-center hover:scale-110 transition-transform",
                isMobile ? "left-1/2 -translate-x-1/2 -mt-3 w-6 h-6" : "top-1/2 -translate-y-1/2 -ml-3 w-6 h-6"
              )}
            >
              <div className="w-2 h-2 bg-white rounded-full pointer-events-none" />
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
