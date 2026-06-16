"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Award,
  Users,
  Target,
  CheckCircle2,
  TrendingUp,
  Lightbulb,
  ExternalLink,
  CalendarMinus2,
} from "lucide-react";
import { ProjectCarousel } from "@/components/ui/carousel";
import { projectDetails } from "@/lib/data/projectDetails.data";
import { detailHeader, scaleIn, detailCard, viewportOnce } from "@/lib/animations";
import type { PMProjectDetail, FEProjectDetail } from "@/types";

// ─── Shared sub-components ────────────────────────────────────────────────────

function BackLink() {
  return (
    <Link
      href="/#projects"
      className="inline-flex items-center gap-2 mb-6 text-slate-400 hover:text-[#F8FAFC] transition-colors"
    >
      <ArrowLeft className="h-4 w-4" /> Back to Projects
    </Link>
  );
}

function MetaRow({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-[#F1A7C6]" />
      <span>{text}</span>
    </div>
  );
}

function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={detailCard}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
    >
      <div className="bg-[#1E293B] border border-slate-700 rounded-xl">
        <div className="p-6 md:p-8">{children}</div>
      </div>
    </motion.div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-bold text-[#F8FAFC] mt-6 md:mt-2 lg:mt-0 mb-4">{children}</h3>
  );
}

function SideCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={detailCard}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
    >
      <div className="bg-[#1E293B] border border-slate-700 rounded-xl">
        <div className="p-6">{children}</div>
      </div>
    </motion.div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-[#F1A7C6] shrink-0 mt-0.5" />
          <span className="text-slate-300 text-sm">{item}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectHeader({
  title,
  tagline,
  teamSize,
  year,
}: {
  title: string;
  tagline: string;
  teamSize: string;
  year: string;
}) {
  return (
    <motion.div variants={detailHeader} initial="initial" animate="animate">
      <BackLink />
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-2">{title}</h1>
      <p className="text-xl text-slate-400 mb-4">{tagline}</p>
      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
        <MetaRow icon={Users} text={teamSize} />
        <MetaRow icon={CalendarMinus2} text={year} />
      </div>
    </motion.div>
  );
}

// ─── FE Layout ────────────────────────────────────────────────────────────────

function FEProjectLayout({ project }: { project: FEProjectDetail }) {
  return (
    <section className="min-h-screen bg-[#0F172A] text-slate-100 pt-28 pb-12 lg:pt-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl md:max-w-5xl mx-auto px-5 md:px-8 space-y-8">
        <ProjectHeader
          title={project.title}
          tagline={project.tagline}
          teamSize={project.teamSize}
          year={project.year}
        />

        {/* Images */}
        <motion.div className="w-full" variants={scaleIn} initial="initial" animate="animate">
          {project.images && project.images.length > 0 ? (
            <ProjectCarousel images={project.images} title={project.title} />
          ) : project.bannerImage ? (
            <div className="rounded-xl overflow-hidden border border-slate-800 aspect-video w-full">
              <img src={project.bannerImage} alt={project.title} className="w-full h-full object-cover" />
            </div>
          ) : null}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <InfoCard>
              <CardTitle>About the Project</CardTitle>
              <div className="text-slate-300 leading-relaxed whitespace-pre-line text-sm">
                {project.overview}
              </div>
            </InfoCard>

            <InfoCard>
              <CardTitle>Key Features</CardTitle>
              <FeatureList items={project.features} />
            </InfoCard>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <SideCard>
              <h3 className="text-lg font-semibold text-[#F8FAFC] mt-4 mb-1">Technologies</h3>
              <p className="text-xs text-slate-400 mb-3">Built with</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-900/60 border border-slate-600 text-slate-300 px-2 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SideCard>

            <SideCard>
              <h3 className="text-lg font-semibold text-[#F8FAFC] mt-4 mb-3">Links</h3>
              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <ExternalLinkButton href={project.liveUrl} icon={ExternalLink} label="View Live Demo" />
                )}
                {project.repoUrl && (
                  <ExternalLinkButton href={project.repoUrl} icon={ExternalLink} label="View Source Code" />
                )}
              </div>
            </SideCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PM Layout ────────────────────────────────────────────────────────────────

function PMProjectLayout({ project }: { project: PMProjectDetail }) {
  return (
    <section className="min-h-screen bg-[#0F172A] text-slate-100 pt-28 pb-12 lg:pt-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl md:max-w-5xl mx-auto px-5 md:px-8 space-y-8">
        <ProjectHeader
          title={project.title}
          tagline={project.tagline}
          teamSize={project.teamSize}
          year={project.year}
        />

        {/* Images */}
        <motion.div className="w-full" variants={scaleIn} initial="initial" animate="animate">
          {project.images && project.images.length > 0 ? (
            <ProjectCarousel images={project.images} title={project.title} />
          ) : project.bannerImage ? (
            <div className="rounded-xl overflow-hidden border border-slate-800 aspect-video w-full">
              <img src={project.bannerImage} alt={project.title} className="w-full h-full object-cover" />
            </div>
          ) : null}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Context */}
            <InfoCard>
              <div className="flex items-start gap-3 mt-6 md:mt-0 mb-4">
                <div className="p-2 bg-[#F1A7C6]/10 rounded-lg">
                  <Target className="h-5 w-5 text-[#F1A7C6]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F8FAFC]">Competition Context</h3>
                  <p className="text-sm text-slate-400">{project.context}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm pl-10">{project.category}</p>
            </InfoCard>

            {/* Overview */}
            <InfoCard>
              <CardTitle>Project Overview</CardTitle>
              <div className="text-slate-300 leading-relaxed whitespace-pre-line text-sm">
                {project.overview}
              </div>
            </InfoCard>

            {/* Problem & Approach */}
            <InfoCard>
              <CardTitle>Problem & Approach</CardTitle>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#F1A7C6] mb-2">The Problem</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F1A7C6] mb-2">My Approach</h4>
                <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                  {project.approach}
                </div>
              </div>
            </InfoCard>

            {/* Key Features */}
            <InfoCard>
              <CardTitle>Key Features</CardTitle>
              <FeatureList items={project.keyFeatures} />
            </InfoCard>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <InfoCard>
                <CardTitle>Challenges & Solutions</CardTitle>
                <div className="space-y-4">
                  {project.challenges.map((c, idx) => (
                    <div key={idx} className="border-l-2 border-[#F1A7C6] pl-4">
                      <h4 className="font-semibold text-[#F8FAFC] mb-2 text-sm">{c.title}</h4>
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="text-slate-400 font-medium">Problem:</span>
                          <p className="text-slate-300 mt-1">{c.problem}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-medium">Solution:</span>
                          <p className="text-slate-300 mt-1">{c.solution}</p>
                        </div>
                        <div>
                          <span className="text-[#F1A7C6] font-medium">Result:</span>
                          <p className="text-slate-300 mt-1">{c.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </InfoCard>
            )}

            {/* Impact */}
            <InfoCard>
              <div className="flex items-start gap-3 mt-6 md:mt-2 lg:mt-0 mb-4">
                <div className="p-2 bg-[#F1A7C6]/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-[#F1A7C6]" />
                </div>
                <h3 className="text-xl font-bold text-[#F8FAFC]">Impact & Results</h3>
              </div>
              <FeatureList items={project.impact} />
            </InfoCard>

            {/* Learnings */}
            {project.learnings && project.learnings.length > 0 && (
              <InfoCard>
                <div className="flex items-start gap-3 mt-6 md:mt-2 lg:mt-0 mb-4">
                  <div className="p-2 bg-[#F1A7C6]/10 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-[#F1A7C6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">Key Learnings</h3>
                </div>
                <ul className="space-y-2">
                  {project.learnings.map((l, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#F1A7C6]">•</span>
                      <span className="text-slate-300 text-sm">{l}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            )}
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* My Role */}
            <SideCard>
              <h3 className="text-lg font-bold text-[#F8FAFC] mt-4 mb-2">My Role</h3>
              <p className="text-sm text-[#F1A7C6] mb-3">{project.role}</p>
              <ul className="space-y-2">
                {project.myRole.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="h-3 w-3 text-[#F1A7C6] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SideCard>

            {/* Metrics */}
            {project.metrics && (
              <SideCard>
                <h3 className="text-lg font-semibold text-[#F8FAFC] mt-4 mb-2">Key Metrics</h3>
                <div className="space-y-3">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={idx} className="flex justify-between items-start gap-2">
                      <span className="text-xs text-slate-400 uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="text-xs font-semibold text-[#F8FAFC] text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </SideCard>
            )}

            {/* Prototype Link */}
            {project.prototypeUrl && (
              <SideCard>
                <h3 className="text-lg font-semibold text-[#F8FAFC] mt-4 mb-3">Links</h3>
                <ExternalLinkButton href={project.prototypeUrl} icon={ExternalLink} label="View Prototype" />
              </SideCard>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Shared link button ───────────────────────────────────────────────────────

function ExternalLinkButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full border border-[#F1A7C6]/30 bg-[#F1A7C6]/10 text-[#F1A7C6] hover:bg-[#F1A7C6]/20 hover:border-[#F1A7C6]/50 font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 text-sm"
    >
      <Icon className="h-4 w-4" /> {label}
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projectDetails[projectId as string];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center text-[#F8FAFC] px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-slate-400 mb-6">The project &quot;{projectId}&quot; doesn&apos;t exist.</p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#F1A7C6] hover:text-[#F1A7C6]/80 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hover:underline">Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  if (project.type === "fe") return <FEProjectLayout project={project} />;
  return <PMProjectLayout project={project} />;
}
