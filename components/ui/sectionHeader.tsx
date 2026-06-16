import { motion } from "framer-motion";
import { fadeUp, fadeUpDelayed, viewportOnce } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

/** Reusable h2 + optional subtitle pattern yang berulang di semua sections */
export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-text"
        variants={fadeUp}
        initial="initial"
        whileInView="whileInView"
        viewport={viewportOnce}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-center text-slate-400 mb-12 mt-4 max-w-2xl mx-auto"
          variants={fadeUpDelayed}
          initial="initial"
          whileInView="whileInView"
          viewport={viewportOnce}
        >
          {subtitle}
        </motion.p>
      )}
    </>
  );
}
