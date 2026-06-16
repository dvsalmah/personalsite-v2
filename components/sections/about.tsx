"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Stack from "@/components/ui/stack";
import { SectionHeader } from "@/components/ui/sectionHeader";
import { photos } from "@/lib/data/about.data";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/animations";

const stackCards = photos.map((photo) => (
  <img
    key={photo.id}
    src={photo.src}
    alt={photo.alt}
    className="w-full h-full object-cover pointer-events-none rounded-2xl"
  />
));

export default function AboutSection() {
  // 1. Tambahkan state isMounted
  const [isMounted, setIsMounted] = useState(false);

  // 2. Set isMounted jadi true hanya saat di sisi Client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="about" className="py-24 bg-surface text-slate-100 px-8 md:px-16 lg:px-24">
      <div className="lg:max-w-6xl md:max-w-2xl mx-auto px-6 md:px-5">
        <SectionHeader title="Know More" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Bio text */}
          <motion.div
            className="flex-1 order-1 md:order-2"
            variants={fadeLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportOnce}
          >
            <p className="text-center md:text-left text-muted text-lg leading-relaxed">
              A second-year Computer Science student at Brawijaya University with a growing interest
              in Product Management, alongside a strong curiosity for front-end development.
              Experience also includes working in robotics using Python, OpenCV, and YOLO.
            </p>
          </motion.div>

          {/* Stack photos */}
          <motion.div
            className="flex-shrink-0 order-2 md:order-1 pr-4 lg:pr-8"
            variants={fadeRight}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportOnce}
          >
            <div className="w-64 h-72 lg:w-72 lg:h-80">
              {isMounted ? (
                <Stack
                  cards={stackCards}
                  randomRotation
                  sensitivity={150}
                  sendToBackOnClick
                  autoplay
                  autoplayDelay={3000}
                  pauseOnHover
                  mobileClickOnly
                  animationConfig={{ stiffness: 260, damping: 20 }}
                />
              ) : (
                <div className="w-full h-full bg-slate-800/50 rounded-2xl animate-pulse" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}