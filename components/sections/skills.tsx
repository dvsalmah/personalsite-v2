"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/sectionHeader";
import { skillCategories } from "@/lib/data/skills.data";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function SkillSection({
  sectionClassName,
  containerClassName,
}: {
  sectionClassName?: string;
  containerClassName?: string;
}) {
  const [activeTab, setActiveTab] = useState(skillCategories[0].title);

  return (
    <section id="skills" className={`relative overflow-hidden ${sectionClassName || "py-24"}`}>
      <div className={`relative z-10 w-full ${containerClassName || "max-w-6xl mx-auto px-4"}`}>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Driven by product thinking, supported by technical skills"
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col items-center mt-8">
          {/* Dock Category Selector */}
          <TabsList className="flex flex-wrap items-center justify-center gap-1 p-1 rounded-2xl bg-neutral-100/80 border border-neutral-200/50 shadow-lg backdrop-blur-lg dark:bg-neutral-900/40 dark:border-white/10 h-auto">
            {skillCategories.map((category, idx) => (
              <TabsTrigger
                key={idx}
                value={category.title}
                onMouseEnter={() => setActiveTab(category.title)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer h-auto border-none",
                  "data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm dark:data-[state=active]:bg-white/10 dark:data-[state=active]:text-white",
                  "text-secondary hover:text-black hover:bg-white/50 dark:text-secondary dark:hover:text-white dark:hover:bg-white/5",
                  "!outline-none"
                )}
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg mt-8">
            {skillCategories.map((category) => {
              const innerSkills = category.skills.slice(0, Math.ceil(category.skills.length / 2));
              const outerSkills = category.skills.slice(Math.ceil(category.skills.length / 2));
              
              return (
                <TabsContent 
                  key={category.title} 
                  value={category.title} 
                  className="absolute inset-0 outline-none m-0 data-[state=inactive]:hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="pointer-events-none absolute whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-primary dark:to-secondary">
                      {category.title}
                    </span>

                    {/* Inner Circles */}
                    {innerSkills.length > 0 && (
                      <OrbitingCircles
                        className="size-15 border-none bg-transparent"
                        duration={20}
                        delay={5}
                        radius={150}
                        iconSize={40}
                      >
                        {innerSkills.map((skill, idx) => {
                          const Icon = skill.icon;
                          return (
                            <div key={idx} className="flex flex-col items-center gap-1 group">
                              <Icon className="w-8 h-8 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:text-primary" />
                              <span className="text-[10px] font-medium text-secondary dark:text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute -bottom-5 whitespace-nowrap">
                                {skill.name}
                              </span>
                            </div>
                          );
                        })}
                      </OrbitingCircles>
                    )}

                    {/* Outer Circles (reverse) */}
                    {outerSkills.length > 0 && (
                      <OrbitingCircles
                        className="size-[60px] border-none bg-transparent"
                        radius={230}
                        duration={15}
                        reverse
                        iconSize={40}
                      >
                        {outerSkills.map((skill, idx) => {
                          const Icon = skill.icon;
                          return (
                            <div key={idx} className="flex flex-col items-center gap-1 group">
                              <Icon className="w-8 h-8 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:text-primary" />
                              <span className="text-[10px] font-medium text-secondary dark:text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute -bottom-5 whitespace-nowrap">
                                {skill.name}
                              </span>
                            </div>
                          );
                        })}
                      </OrbitingCircles>
                    )}
                  </motion.div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
