"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/sectionHeader";
import { projects } from "@/lib/data/projects.data";
import { projectDetails } from "@/lib/data/projectDetails.data";
import { staggerContainer, cardVariant } from "@/lib/animations";
import { ProjectModal } from "@/components/ui/project-modal";
import { Button } from '@/components/ui/button';
import type { Project } from "@/types";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getPositioningClass(index: number, total: number): string {
  const isLast = index === total - 1;
  const isSecondLast = index === total - 2;
  const remainderLg = total % 3;
  const remainderMd = total % 2;

  let cls = "md:col-span-2 lg:col-span-2";
  if (remainderLg === 2 && isSecondLast) cls += " lg:col-start-2";
  else if (remainderLg === 1 && isLast) cls += " lg:col-start-3";
  if (remainderMd === 1 && isLast) cls += " md:col-start-2";
  return cls;
}

//ProjectCard

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const details = projectDetails[project.id];
  const previewImage = details?.bannerImage || (details?.images && details.images[0]) || project.logo;
  const isImageLogo = previewImage.startsWith("/") || previewImage.startsWith("http");

  return (
    <motion.div whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }} className="h-full">
      <div
        onClick={onClick}
        className="bg-surface-hover text-card-foreground rounded-2xl border border-slate-700 relative z-20 group hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-50 cursor-pointer"
      >
        <div className="w-full h-1/2 overflow-hidden rounded-t-2xl relative border-b border-slate-700 bg-slate-900 shrink-0">
          {isImageLogo ? (
            <img
              src={previewImage}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-slate-700">
              {previewImage}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Card Content*/}
        <div className="p-5 flex flex-col h-1/2">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-bold text-base text-text tracking-tight truncate">
              {project.title}
            </h3>
            <span className="shrink-0 bg-slate-900/60 text-slate-300 border border-slate-700 px-2 py-1 rounded-full font-medium text-[8px] uppercase tracking-wider">
              {project.context.includes("Competition") || project.context.includes("Collaboration")
                ? "Team Project"
                : project.context.includes("Personal")
                  ? "Personal Project"
                  : project.context}
            </span>
          </div>

          <p className="text-slate-400 text-xs font-normal leading-relaxed line-clamp-3">
            {project.tagline}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── ProjectSection ───────────────────────────────────────────────────────────

export default function ProjectSection({
  sectionClassName,
  containerClassName,
}: {
  sectionClassName?: string;
  containerClassName?: string;
}) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    setMounted(true);
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const sortedProjects = [...projects].sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0));
  const displayProjects = (isDesktop || showAll) ? sortedProjects : sortedProjects.slice(0, 3);
  // Show the button only after mounted (client-side) and when there are more than 3 items on non-desktop
  const hasMore = mounted && sortedProjects.length > 3 && !isDesktop;

  return (
    <>
      <section id="projects" className={`bg-background text-text ${sectionClassName || "py-24 px-8 md:px-16 lg:px-24"}`}>
        <div className={`w-full ${containerClassName || "max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 md:px-0"}`}>
          <div className="text-center mb-12">
            <SectionHeader
              title="Featured Projects"
              subtitle="A small collection of project shaped by curiosity, iteration, and product thinking"
            />
          </div>

          <motion.div
            key={`projects-${showAll}-${isDesktop}`}
            className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            viewport={{ once: false, amount: 0.05 }}
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariant}
                className={getPositioningClass(index, displayProjects.length)}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProjectId(project.id)}
                />
              </motion.div>
            ))}
          </motion.div>

          {hasMore && (
            <div className="mt-12 flex justify-center lg:hidden">
              <Button
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
        </div>
      </section>

      <ProjectModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </>
  );
}
