"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2, Database, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import BlurText from "./blurText";
import Reveal from "./reveal";
import type { PointerEvent } from "react";
import type { Language } from "./types";

export default function HeroSection({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion();
  const [showFrontend, setShowFrontend] = useState(true);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const cardPointerStart = useRef<{ x: number; y: number } | null>(null);
  const cardBoundsRef = useRef<HTMLDivElement>(null);
  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
          <BlurText className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-indigo-400 to-purple-400">
            Malik Maulana
          </BlurText>
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
            ? "Fresh graduate Teknik Informatika yang berfokus pada pengembangan backend dan aplikasi web. Saya membangun fitur yang terstruktur, terintegrasi, dan siap digunakan."
            : "An Informatics Engineering fresh graduate focused on backend development and web applications. I build structured, integrated features that are ready to use."}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-linear-to-r from-purple-600 to-[#7f8994] text-slate-200 font-semibold text-sm shadow-[0_0_25px_rgba(215,219,224,0.2)] hover:shadow-[0_0_35px_rgba(215,219,224,0.35)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            {language === "id" ? "Lihat Project" : "View Projects"}
          </a>
          <button
            onClick={() => navigateTo("contact")}
            className="px-7 py-3 rounded-full bg-[#20252b] border border-purple-500/30 text-slate-200 font-medium text-sm hover:border-purple-400 hover:text-purple-300 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            {language === "id" ? "Hubungi Saya" : "Contact Me"}
          </button>
        </div>
      </Reveal>

      <Reveal
        className="relative flex -translate-y-9 justify-center items-center shrink-0 sm:-translate-y-10"
        direction="right"
        delay={0.15}
        animateOnLoad
      >
        <div className="hero-orb absolute h-72 w-72 pointer-events-none md:h-96 md:w-96" />

        <div
          ref={cardBoundsRef}
          className="relative flex min-h-112 w-[min(76vw,15rem)] items-end justify-center pt-6 sm:min-h-120 sm:w-64 md:w-68"
        >
          <motion.div
            drag
            dragConstraints={cardBoundsRef}
            dragElastic={0.3}
            dragMomentum={false}
            whileDrag={{
              scale: 1.04,
              rotateZ: cardTilt.x * 0.35,
              cursor: "grabbing",
            }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            onPointerDown={(event: PointerEvent) => {
              cardPointerStart.current = {
                x: event.clientX,
                y: event.clientY,
              };
            }}
            onPointerUp={(event: PointerEvent) => {
              const start = cardPointerStart.current;
              cardPointerStart.current = null;
              if (!start) return;

              const distance = Math.hypot(
                event.clientX - start.x,
                event.clientY - start.y,
              );
              if (distance < 8) setIsCardFlipped((flipped) => !flipped);
            }}
            onPointerMove={(event: PointerEvent) => {
              if (event.pointerType !== "mouse") return;
              const bounds = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - bounds.left) / bounds.width - 0.5;
              const y = (event.clientY - bounds.top) / bounds.height - 0.5;
              setCardTilt({ x: x * 10, y: y * -10 });
            }}
            onPointerLeave={() => setCardTilt({ x: 0, y: 0 })}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsCardFlipped((flipped) => !flipped);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={
              isCardFlipped
                ? language === "id"
                  ? "Balik kartu untuk melihat foto"
                  : "Flip card to see the photo"
                : language === "id"
                  ? "Balik kartu untuk melihat teknologi"
                  : "Flip card to see technologies"
            }
            className="group relative aspect-[0.72/1] w-full cursor-grab select-none touch-none outline-none perspective-distant focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#17191b]"
          >
            <motion.div
              animate={{
                rotateX: reduceMotion ? 0 : cardTilt.y,
                rotateY: reduceMotion ? 0 : cardTilt.x,
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 22 }
              }
              className="h-full w-full"
            >
              <motion.div
                animate={{ rotateY: isCardFlipped ? 180 : 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-full w-full transform-3d"
              >
                <article className="absolute inset-0 overflow-hidden rounded-3xl border border-white/25 bg-[#252a30] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.42),0_0_35px_rgba(215,219,224,0.16)] backface-hidden">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-purple-300/20 bg-linear-to-br from-[#4a4e55] via-[#282d33] to-[#17191b] p-3 sm:p-4">
                    <div className="pointer-events-none absolute inset-0 opacity-15">
                      <div className="absolute -right-10 -top-8 h-40 w-40 rounded-full border-12 border-purple-200/30" />
                      <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full border-12 border-indigo-200/20" />
                    </div>
                    <div className="relative flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">
                      <span>MM / ID</span>
                      <span className="rounded-full border border-white/20 px-2 py-1 text-[9px] text-purple-200">
                        Portfolio
                      </span>
                    </div>
                    <div className="relative mt-3 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[#16191c]/50">
                      <Image
                        src="/profile.webp"
                        alt="Malik Maulana Abdillah"
                        width={350}
                        height={350}
                        sizes="(max-width: 640px) 220px, 280px"
                        priority
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#101214] via-[#101214]/65 to-transparent px-3 pb-3 pt-10">
                        <p className="text-base font-bold text-white">
                          Malik Maulana
                        </p>
                        <p className="text-[10px] text-purple-200">
                          Frontend &amp; Backend Developer
                        </p>
                      </div>
                    </div>
                    <p className="relative mt-2 text-[9px] text-slate-400">
                      INFORMATICS ENGINEERING
                    </p>
                  </div>
                </article>

                <article className="absolute inset-0 overflow-hidden rounded-3xl border border-purple-300/30 bg-[#252a30] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.42),0_0_35px_rgba(215,219,224,0.16)] backface-hidden transform-[rotateY(180deg)]">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-purple-300/20 bg-linear-to-br from-[#30343b] via-[#20252b] to-[#16181b] p-3 sm:p-4">
                    <div className="relative flex items-center justify-between">
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-200 sm:text-[10px] sm:tracking-[0.2em]">
                          Malik Maulana
                        </p>
                        <h2 className="mt-1 text-sm font-bold leading-tight text-white sm:text-base">
                          {language === "id"
                            ? "Digital Identity"
                            : "Digital Identity"}
                        </h2>
                      </div>
                      <Code2
                        className="h-6 w-6 text-purple-300 sm:h-7 sm:w-7"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="relative mt-4 flex min-h-0 flex-1 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#16191c]/50 px-4 py-5 sm:mt-5 sm:px-6 sm:py-6">
                      <Image
                        src="/logo.svg"
                        alt="Logo Malik Maulana"
                        width={536}
                        height={465}
                        sizes="(max-width: 640px) 140px, 190px"
                        className="h-auto w-[clamp(10rem,68%,15rem)] object-contain drop-shadow-[0_0_18px_rgba(215,219,224,0.2)]"
                      />
                      <div className="mt-4 max-w-full text-center sm:mt-5">
                        <p className="whitespace-nowrap text-xs font-bold leading-tight text-white sm:text-sm">
                          Malik Maulana Abdillah
                        </p>
                        <p className="mt-1 text-[8px] uppercase tracking-widest text-purple-200 sm:text-[9px] sm:tracking-[0.14em]">
                          {language === "id"
                            ? "Backend & Web Developer"
                            : "Backend & Web Developer"}
                        </p>
                      </div>
                    </div>
                    <div className="relative mt-2 flex items-center justify-between text-[7px] uppercase tracking-widest text-slate-400 sm:text-[8px] sm:tracking-[0.14em]">
                      <span>MM / ID</span>
                      <span>Portfolio Card</span>
                    </div>
                  </div>
                </article>
              </motion.div>
            </motion.div>
            <motion.div
              animate={reduceMotion ? { y: 0 } : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-3 -top-3 rounded-xl border border-purple-500/40 bg-[#20252b]/90 p-2.5 text-purple-300 shadow-[0_0_20px_rgba(215,219,224,0.18)] backdrop-blur-md"
              aria-hidden="true"
            >
              <Code2 className="h-5 w-5" />
            </motion.div>
            <motion.div
              animate={reduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -bottom-3 -left-3 rounded-xl border border-purple-500/40 bg-[#20252b]/90 p-2.5 text-purple-400 shadow-[0_0_20px_rgba(215,219,224,0.18)] backdrop-blur-md"
              aria-hidden="true"
            >
              <Database className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
