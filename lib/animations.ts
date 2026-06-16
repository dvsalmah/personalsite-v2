import type { Variants } from "framer-motion";

// ─── Shared animation variants (DRY: satu tempat, tinggal import) ─────────────

/** h2 section title: fade up */
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** subtitle / paragraph: fade up dengan delay kecil */
export const fadeUpDelayed: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

/** slide dari kiri */
export const fadeLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

/** slide dari kanan */
export const fadeRight: Variants = {
  initial: { opacity: 0, x: 60 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
  },
};

/** fade + scale untuk gambar/card */
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.2 },
  },
};

/** wrapper stagger untuk grid/list children */
export const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

/** item card di dalam stagger */
export const cardVariant: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** hero content: fade up */
export const heroContent: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

/** hero background text: fade in */
export const heroBgText: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [1],
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

/** hero image: slide in dari kanan dengan delay */
export const heroImage: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

/** hero button wrapper: stagger */
export const heroButtonContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
};

/** individual hero button */
export const heroButton: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

/** project detail header */
export const detailHeader: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/** project detail card */
export const detailCard: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 } as never,
};

/** contact form: slide dari kiri */
export const contactForm: Variants = {
  initial: { opacity: 0, x: -40 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

/** contact social: stagger */
export const contactSocialContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

/** individual social link */
export const contactSocialLink: Variants = {
  initial: { opacity: 0, x: 20 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/** timeline wrapper */
export const timelineVariant: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

/** skill grid stagger */
export const skillGrid: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/** viewport config yang paling umum dipakai */
export const viewportOnce = { once: true, amount: 0.3 } as const;
