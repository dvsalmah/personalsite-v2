"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
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
import { cn } from "@/lib/utils";

//Shared sub-components 

function MetaRow({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-primary" />
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
            <div className="bg-surface-hover border border-slate-700 rounded-xl">
                <div className="p-6 md:p-8">{children}</div>
            </div>
        </motion.div>
    );
}

function CardTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-xl font-bold text mt-6 md:mt-2 lg:mt-0 mb-4">{children}</h3>
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
            <div className="bg-surface-hover border border-slate-700 rounded-xl">
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
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-300 text-sm">{item}</span>
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
            <h1 className="text-3xl md:text-5xl font-bold text mb-2">{title}</h1>
            <p className="text-lg md:text-xl text-400 mb-4">{tagline}</p>
            <div className="flex flex-wrap gap-4 text-sm text-400">
                <MetaRow icon={Users} text={teamSize} />
                <MetaRow icon={CalendarMinus2} text={year} />
            </div>
        </motion.div>
    );
}

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
            className="w-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 text-sm"
        >
            <Icon className="h-4 w-4" /> {label}
        </a>
    );
}

// ─── FE Layout ────────────────────────────────────────────────────────────────

function FEProjectLayout({ project }: { project: FEProjectDetail }) {
    return (
        <div className="space-y-8">
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
                        <div className="text-300 leading-relaxed whitespace-pre-line text-sm">
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
                        <h3 className="text-lg font-semibold text mt-4 mb-1">Technologies</h3>
                        <p className="text-xs text-400 mb-3">Built with</p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-slate-900/60 border border-slate-600 text-300 px-2 py-1 text-xs rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </SideCard>

                    <SideCard>
                        <h3 className="text-lg font-semibold text-text mt-4 mb-3">Links</h3>
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
    );
}

// ─── PM Layout ────────────────────────────────────────────────────────────────

function PMProjectLayout({ project }: { project: PMProjectDetail }) {
    return (
        <div className="space-y-8">
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
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Target className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text">Competition Context</h3>
                                <p className="text-sm text-400">{project.context}</p>
                            </div>
                        </div>
                        <p className="text-300 text-sm pl-10">{project.category}</p>
                    </InfoCard>

                    {/* Overview */}
                    <InfoCard>
                        <CardTitle>Project Overview</CardTitle>
                        <div className="text-300 leading-relaxed whitespace-pre-line text-sm">
                            {project.overview}
                        </div>
                    </InfoCard>

                    {/* Problem & Approach */}
                    <InfoCard>
                        <CardTitle>Problem & Approach</CardTitle>
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-primary mb-2">The Problem</h4>
                            <p className="text-300 text-sm leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">My Approach</h4>
                            <div className="text-300 text-sm leading-relaxed whitespace-pre-line">
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
                                    <div key={idx} className="border-l-2 border-primary pl-4">
                                        <h4 className="font-semibold text-text mb-2 text-sm">{c.title}</h4>
                                        <div className="space-y-2 text-xs">
                                            <div>
                                                <span className="text-400 font-medium">Problem:</span>
                                                <p className="text-300 mt-1">{c.problem}</p>
                                            </div>
                                            <div>
                                                <span className="text-400 font-medium">Solution:</span>
                                                <p className="text-300 mt-1">{c.solution}</p>
                                            </div>
                                            <div>
                                                <span className="text-primary font-medium">Result:</span>
                                                <p className="text-300 mt-1">{c.result}</p>
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
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <TrendingUp className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-text">Impact & Results</h3>
                        </div>
                        <FeatureList items={project.impact} />
                    </InfoCard>

                    {/* Learnings */}
                    {project.learnings && project.learnings.length > 0 && (
                        <InfoCard>
                            <div className="flex items-start gap-3 mt-6 md:mt-2 lg:mt-0 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Lightbulb className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-text">Key Learnings</h3>
                            </div>
                            <ul className="space-y-2">
                                {project.learnings.map((l, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-primary">•</span>
                                        <span className="text-300 text-sm">{l}</span>
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
                        <h3 className="text-lg font-bold text-text mt-4 mb-2">My Role</h3>
                        <p className="text-sm text-primary mb-3">{project.role}</p>
                        <ul className="space-y-2">
                            {project.myRole.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-400">
                                    <CheckCircle2 className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </SideCard>

                    {/* Metrics */}
                    {project.metrics && (
                        <SideCard>
                            <h3 className="text-lg font-semibold text-text mt-4 mb-2">Key Metrics</h3>
                            <div className="space-y-3">
                                {Object.entries(project.metrics).map(([key, value], idx) => (
                                    <div key={idx} className="flex justify-between items-start gap-2">
                                        <span className="text-xs text-400 uppercase tracking-wide">
                                            {key.replace(/([A-Z])/g, " $1").trim()}
                                        </span>
                                        <span className="text-xs font-semibold text-text text-right">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </SideCard>
                    )}

                    {/* Prototype Link */}
                    {project.prototypeUrl && (
                        <SideCard>
                            <h3 className="text-lg font-semibold text-text mt-4 mb-3">Links</h3>
                            <ExternalLinkButton href={project.prototypeUrl} icon={ExternalLink} label="View Prototype" />
                        </SideCard>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Modal Wrapper ────────────────────────────────────────────────────────────

interface ProjectModalProps {
    projectId: string | null;
    onClose: () => void;
}

export function ProjectModal({ projectId, onClose }: ProjectModalProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (projectId && scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [projectId]);

    useEffect(() => {
        if (projectId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [projectId]);

    const project = projectId ? projectDetails[projectId] : null;

    return (
        <AnimatePresence>
            {projectId && project && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl bg-background border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
                        style={{ maxHeight: "85vh" }}
                    >
                        {/* Close Button*/}
                        <div className="absolute top-4 right-4 z-20">
                            <button
                                onClick={onClose}
                                className="cursor-pointer p-2 bg-surface-hover/80 hover:bg-surface-hover text-400 hover:text-white rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Container */}
                        <div ref={scrollRef} className="overflow-y-auto p-6 md:p-10 hide-scrollbar">
                            {project.type === "fe" ? (
                                <FEProjectLayout project={project as FEProjectDetail} />
                            ) : (
                                <PMProjectLayout project={project as PMProjectDetail} />
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
