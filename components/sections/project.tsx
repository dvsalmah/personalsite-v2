"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/sectionHeader";
import { projects } from "@/lib/data/projects.data";
import { staggerContainer, cardVariant, viewportOnce } from "@/lib/animations";
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

// ─── ProjectCard ──────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const isImageLogo = project.logo.startsWith("/") || project.logo.startsWith("http");

  return (
    <motion.div whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}>
      <div className="bg-surface-hover text-card-foreground rounded-xl border border-slate-700 relative z-20 group hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col overflow-hidden h-full">
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-12 w-12 mt-4 shrink-0 rounded-full bg-slate-900 flex items-center justify-center text-2xl border border-slate-700 group-hover:border-primary transition-colors">
              {isImageLogo ? (
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="w-[95%] h-[95%] object-cover rounded-full"
                />
              ) : (
                <span>{project.logo}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold mt-4 text-lg text-text tracking-tight truncate">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 truncate">{project.context}</p>
            </div>
          </div>

          <p className="text-primary text-xs font-medium mb-2 line-clamp-1">{project.tagline}</p>
          <p className="text-slate-400 text-sm font-normal leading-relaxed mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="bg-slate-900/50 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-full font-medium text-xs"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="bg-slate-900/50 text-slate-400 border border-slate-700 px-2 py-1 rounded-full font-medium text-xs">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-auto">
            <Link
              href={`/projects/${project.id}`}
              className="relative bg-text text-slate-900 hover:bg-slate-100 hover:pr-10 font-semibold text-sm py-2.5 px-4 pr-8 rounded-lg flex items-center justify-start gap-2 transition-all duration-200 group/btn"
            >
              View Project
              <ArrowRight size={18} className="absolute right-2 transition-transform" />
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-700 bg-transparent text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="View GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-700 bg-transparent text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="View Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── ProjectSection ───────────────────────────────────────────────────────────

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-surface text-slate-100 px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <SectionHeader
            title="Featured Projects"
            subtitle="A small collection of project shaped by curiosity, iteration, and product thinking"
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariant}
              className={getPositioningClass(index, projects.length)}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
