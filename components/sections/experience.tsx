"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { SectionHeader } from "@/components/ui/sectionHeader";
import { experiencesData } from "@/lib/data/experiences.data";
import { timelineVariant, viewportOnce } from "@/lib/animations";

export default function ExperienceSection() {
  return (
    <section id="experiences" className="py-24 bg-surface-hover text-text">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Experiences"
          subtitle="A journey of growth through impactful roles"
        />

        <motion.div
          variants={timelineVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Timeline data={experiencesData} />
        </motion.div>
      </div>
    </section>
  );
}
