"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import {
  heroBgText,
  heroContent,
  heroButtonContainer,
  heroButton,
  heroImage,
} from "@/lib/animations";
import { Button } from "@/components/ui/button";

const CV_URL =
  "https://www.canva.com/design/DAG-SG-XbFE/fAA1VVO0OFh3db47JcdWXA/edit?utm_content=DAG-SG-XbFE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-background relative transition-colors duration-300 min-h-screen flex items-center overflow-hidden"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max overflow-hidden select-none pointer-events-none z-0"
        variants={heroBgText}
        initial="initial"
        animate="animate"
      >
      </motion.div>
      <motion.div 
        className="absolute top-0 right-0 w-full md:w-5/12 lg:w-1/2 h-full z-0 pointer-events-none"
        variants={heroImage}
        initial="initial"
        animate="animate"
      >
        <img 
          src="/assets/profile-photo.webp" 
          alt="Dealova Nabila"
          className="w-full h-full object-cover object-top"
        />
        <div className="dark:absolute dark:inset-0 dark:bg-black/60" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:bg-gradient-to-r md:from-background md:via-transparent md:to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-14 lg:px-20 py-24 flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="max-w-prose text-center md:text-left"
          variants={heroContent}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-3xl mt-4 font-bold text-text-100 md:text-4xl lg:text-5xl leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Dealova Nabila
            </span>
          </h1>

          <p className="mt-2 md:mt-4 text-base md:text-sm text-slate-400 leading-relaxed">
            Interested in software development, web technologies, and digital products. Passionate about building practical solutions and creating meaningful experiences for users.
          </p>

          <motion.div
            className="mt-6 md:mt-8 flex gap-3 md:gap-4 justify-center md:justify-start"
            variants={heroButtonContainer}
            initial="initial"
            animate="animate"
          >
            <Button asChild>
              <motion.button
                onClick={() => scrollToSection("contact")}
                variants={heroButton}
              >
                Get in Touch
              </motion.button>
            </Button>

            <Button variant="outline" asChild>
              <motion.a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                variants={heroButton}
              >
                Download CV
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Empty div to balance the grid on desktop so text stays on the left */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
