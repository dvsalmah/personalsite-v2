"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";
import {
  heroBgText,
  heroContent,
  heroButtonContainer,
  heroButton,
  heroImage,
} from "@/lib/animations";

const CV_URL =
  "https://www.canva.com/design/DAG-SG-XbFE/fAA1VVO0OFh3db47JcdWXA/edit?utm_content=DAG-SG-XbFE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-[#0F172A] relative transition-colors duration-300 h-auto md:h-[600px] lg:h-[700px] flex items-start pt-24 lg:pt-6 overflow-hidden"
    >
      {/* Background text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max overflow-hidden select-none pointer-events-none z-0"
        variants={heroBgText}
        initial="initial"
        animate="animate"
      >
        <h1 className="bg-text text-center text-[10rem] leading-[0.8] sm:text-[10rem] sm:leading-none md:text-[12rem] lg:text-[18rem] font-bold text-white/[0.05] sm:text-white/[0.03] tracking-tighter">
          <span className="block sm:hidden">PROD</span>
          <span className="block sm:hidden">UCT</span>
          <span className="hidden sm:inline">PRODUCT</span>
        </h1>
        <h2 className="bg-text text-center text-[10rem] leading-[0.8] sm:text-[10rem] sm:leading-none md:text-[12rem] lg:text-[18rem] font-bold text-white/[0.05] sm:text-white/[0.03] tracking-tighter">
          <span className="block sm:hidden">MANA</span>
          <span className="block sm:hidden">GER</span>
          <span className="hidden sm:inline">MANAGER</span>
        </h2>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-14 lg:px-20 py-12 md:py-16 lg:py-24 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-8 items-center">

        {/* Text */}
        <motion.div
          className="max-w-prose text-center md:text-left"
          variants={heroContent}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-3xl mt-4 font-bold text-slate-100 md:text-4xl lg:text-5xl leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1A7C6] to-purple-400">
              Dealova Nabila
            </span>
          </h1>

          <p className="mt-2 md:mt-6 text-base md:text-lg text-slate-400 leading-relaxed">
            Turn complex ideas into clear, user-centered products, with a product mindset.
          </p>

          <motion.div
            className="mt-6 md:mt-8 flex gap-3 md:gap-4 justify-center md:justify-start"
            variants={heroButtonContainer}
            initial="initial"
            animate="animate"
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              variants={heroButton}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block rounded-full bg-[#F1A7C6] px-6 md:px-6 lg:px-8 py-2.5 md:py-3 text-xs lg:text-sm font-bold text-slate-900 shadow-[0_0_20px_rgba(241,167,198,0.3)] hover:bg-[#F1A7C6]/90 whitespace-nowrap"
            >
              Get in Touch
            </motion.button>

            <motion.a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={heroButton}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block rounded-full border border-slate-600 px-6 md:px-6 lg:px-8 py-2.5 md:py-3 text-xs lg:text-sm font-semibold text-slate-300 hover:bg-slate-800 whitespace-nowrap"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="flex justify-end md:px-4"
          variants={heroImage}
          initial="initial"
          animate="animate"
        >
          <div className="relative group w-56 h-72 md:w-56 md:h-72 lg:w-80 lg:h-96 cursor-pointer">
            <div className="absolute -inset-10 bg-[#F1A7C6] rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition duration-500 animate-pulse" />
            <div className="absolute inset-0 border-2 border-[#F1A7C6]/40 rounded-2xl transform -rotate-6 translate-x-[-10px] translate-y-4 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-600/50 transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 bg-[#1E293B] shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_30px_rgba(241,167,198,0.4)]">
              <Image
                src="/assets/profile-photo.webp"
                alt="Dealova Nabila"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-slate-900/80 backdrop-blur-md border-t border-slate-700">
                <p className="text-[#F1A7C6] font-bold text-xs md:text-sm">Dealova Nabila</p>
                <p className="text-slate-400 text-[10px] md:text-xs">Product Manager</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
