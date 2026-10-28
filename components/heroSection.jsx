"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Mail, Code2, Database } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./reveal";

export default function HeroSection({ onNavigate, language }) {
  const reduceMotion = useReducedMotion();
  const [showFrontend, setShowFrontend] = useState(true);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setShowFrontend((current) => !current);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="hero"
      className="scroll-mt-24 sm:scroll-mt-28 min-h-[70svh] md:min-h-[80vh] flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-12 pt-4 md:pt-6"
    >
      <Reveal className="w-full flex-1 max-w-xl" direction="left" animateOnLoad>
        <div className="flex items-center gap-3 mb-6">
          <a
            href="https://linkedin.com/in/malikmaulanaabdillah"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-[#20252b] border border-purple-500/20 text-slate-300 hover:text-purple-400 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(215,219,224,0.18)] transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/macuee03"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-[#20252b] border border-purple-500/20 text-slate-300 hover:text-purple-400 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(215,219,224,0.18)] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:malikmaulana253@gmail.com"
            className="p-2.5 rounded-full bg-[#20252b] border border-purple-500/20 text-slate-300 hover:text-purple-400 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(215,219,224,0.18)] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
          {language === "id" ? "Halo, saya" : "Hi, I'm"} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-indigo-400 to-purple-400">
            Malik Maulana
          </span>
        </h1>

        <p
          aria-label={
            language === "id"
              ? "Pengembang Frontend dan Pengembang Backend"
              : "Frontend Developer and Backend Developer"
          }
          className="mt-3 min-h-8 text-lg md:text-xl font-semibold text-purple-300"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={showFrontend ? "frontend" : "backend"}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
              className="inline-block"
            >
              {language === "id"
                ? showFrontend
                  ? "Pengembang Frontend"
                  : "Pengembang Backend"
                : showFrontend
                  ? "Frontend Developer"
                  : "Backend Developer"}
            </motion.span>
          </AnimatePresence>
        </p>

        <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
          {language === "id"
            ? "Lulusan Teknik Informatika yang membangun aplikasi web modern dengan fokus pada performa, pengalaman pengguna, dan keamanan data."
            : "An Informatics Engineering graduate building modern web applications with a focus on performance, user experience, and data security."}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a
            href="/cv-malik.pdf"
            download="cv-malik.pdf"
            className="px-7 py-3 rounded-full bg-linear-to-r from-purple-600 to-[#7f8994] text-slate-200 font-semibold text-sm shadow-[0_0_25px_rgba(215,219,224,0.2)] hover:shadow-[0_0_35px_rgba(215,219,224,0.35)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            {language === "id" ? "Unduh CV" : "Download CV"}
          </a>
          <button
            onClick={() => onNavigate("contact")}
            className="px-7 py-3 rounded-full bg-[#20252b] border border-purple-500/30 text-slate-200 font-medium text-sm hover:border-purple-400 hover:text-purple-300 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            {language === "id" ? "Hubungi Saya" : "Contact Me"}
          </button>
        </div>
      </Reveal>

      <Reveal
        className="relative flex justify-center items-center shrink-0"
        direction="right"
        delay={0.15}
        animateOnLoad
      >
        <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-linear-to-tr from-purple-600/25 to-purple-400/15 blur-2xl pointer-events-none" />

        <div className="relative w-60 h-60 min-[400px]:w-64 min-[400px]:h-64 sm:w-72 sm:h-72 md:w-84 md:h-84 rounded-3xl p-2 bg-linear-to-b from-purple-500/45 to-indigo-600/15 border border-purple-500/40 shadow-[0_0_40px_rgba(215,219,224,0.18)] overflow-hidden">
          <Image
            src="/profile.webp"
            alt="Malik Maulana Abdillah"
            width={350}
            height={350}
            priority
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <motion.div
          animate={reduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 p-3 rounded-2xl bg-[#20252b]/90 border border-purple-500/40 shadow-[0_0_20px_rgba(215,219,224,0.18)] backdrop-blur-md flex items-center gap-2"
        >
          <Code2 className="w-6 h-6 text-purple-300" />
        </motion.div>

        <motion.div
          animate={reduceMotion ? { y: 0 } : { y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-[#20252b]/90 border border-purple-500/40 shadow-[0_0_20px_rgba(215,219,224,0.18)] backdrop-blur-md flex items-center gap-2"
        >
          <Database className="w-6 h-6 text-purple-400" />
        </motion.div>
      </Reveal>
    </section>
  );
}
