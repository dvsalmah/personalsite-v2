"use client";;
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import type { Experience } from "@/types";
import { Button } from "@/components/ui/button";

interface TimelineProps {
  data: Experience[];
}

export const Timeline = ({
  data
}: TimelineProps) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const sortedData = [...data].sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0));
  const displayData = showAll ? sortedData : sortedData.slice(0, 3);
  const hasMore = sortedData.length > 3;

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const rect = entry.contentRect;
          setHeight(rect.height);
        }
      });

      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-bg font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {displayData.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-4">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-surface-hover border border-white/10 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-primary border border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl lg:text-3xl font-bold text-text">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-2 text-left font-bold text-text">
                {item.title}
              </h3>
              <span className="block text-primary font-semibold text-sm tracking-widest uppercase mb-1">
                {item.year}
              </span>
              <h4 className="text-text text-2xl font-bold mb-3">
                {item.role}
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                {item.description}
              </p>
              
              {item.tech && (
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((techItem, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs rounded-md bg-surface-hover border border-muted text-text">
                      {techItem}
                    </span>
                  ))}
                </div>
              )}
              
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-auto w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-700 to-transparent to-99% [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary to-secondary from-[0%] to-[10%] rounded-full"
          />
        </div>
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center pb-8">
          <Button
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
};