"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SectionHeader } from "@/components/ui/sectionHeader";
import { skillCategories } from "@/lib/data/skills.data";
import { skillGrid, viewportOnce } from "@/lib/animations";

export default function SkillSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Driven by product thinking, supported by technical skills"
        />

        <motion.div
          className="max-w-5xl mx-auto px-8"
          variants={skillGrid}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
        >
          <HoverEffect items={skillCategories} />
        </motion.div>
      </div>
    </section>
  );
}
