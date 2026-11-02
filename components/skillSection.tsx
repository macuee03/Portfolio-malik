"use client";

import {
  Braces,
  Database,
  Fingerprint,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";
import { useRef } from "react";
import type { Language } from "./types";
import HorizontalScrollControls from "./horizontalScrollControls";

const SKILL_GROUPS: Array<{
  icon: typeof PanelsTopLeft;
  title: Record<Language, string>;
  description: Record<Language, string>;
  technologies: string[];
}> = [
  {
    icon: PanelsTopLeft,
    title: { id: "Frontend", en: "Frontend" },
    description: {
      id: "Membuat tampilan web yang nyaman dipakai di berbagai ukuran layar.",
      en: "Creating web interfaces that work well across screen sizes.",
    },
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    icon: Braces,
    title: { id: "Backend", en: "Backend" },
    description: {
      id: "Membangun logika aplikasi, API, dan layanan server dengan PHP, Python, dan FastAPI.",
      en: "Building application logic, APIs, and server-side services with PHP, Python, and FastAPI.",
    },
    technologies: ["PHP", "Laravel", "Python", "FastAPI", "REST API"],
  },
  {
    icon: Database,
    title: { id: "Basis Data", en: "Databases" },
    description: {
      id: "Menyusun struktur data yang rapi dan mudah dikelola.",
      en: "Structuring data so it stays organized and easy to manage.",
    },
    technologies: ["PostgreSQL", "MySQL", "MariaDB"],
  },
  {
    icon: Fingerprint,
    title: { id: "Keamanan & Kriptografi", en: "Security & Cryptography" },
    description: {
      id: "Menerapkan enkripsi hibrida dalam proyek tugas akhir.",
      en: "Applied hybrid encryption in a thesis project.",
    },
    technologies: [
      "AES-256-CBC",
      "AES-256-GCM",
      "RSA-2048",
      "SHA-256",
      "OpenSSL",
    ],
  },
  {
    icon: Wrench,
    title: { id: "Perangkat & Alur Kerja", en: "Tools & Workflow" },
    description: {
      id: "Perangkat yang saya gunakan untuk coding, testing, dan version control.",
      en: "Tools I use for coding, testing, and version control.",
    },
    technologies: ["Git", "GitHub", "Postman", "Visual Studio Code"],
  },
  {
    icon: Wrench,
    title: { id: "Soft Skills", en: "Soft Skills" },
    description: {
      id: "Kemampuan berkolaborasi, berkomunikasi, dan menyelesaikan masalah dalam tim.",
      en: "Skills for collaborating, communicating, and solving problems in a team.",
    },
    technologies: ["Teamwork", "Communication", "Problem Solving"],
  },
];

export default function SkillsSection({ language }: { language: Language }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="scroll-mt-24 pt-6 sm:scroll-mt-28">
      <div>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            {language === "id" ? "KEAHLIAN" : "EXPERTISE"}
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            {language === "id"
              ? "Keahlian & Teknologi"
              : "Skills & Technologies"}
          </h2>
        </div>
        <div className="mb-6 mt-3 flex items-center justify-between gap-4 md:mb-8">
          <p className="text-xs text-slate-400 md:hidden">
            {language === "id"
              ? "Geser untuk melihat keahlian lainnya"
              : "Swipe to see more"}
          </p>
          <HorizontalScrollControls scrollRef={scrollRef} language={language} />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="swipe-scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:gap-5 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3"
      >
        {SKILL_GROUPS.map((group) => {
          const Icon = group.icon;

          return (
            <div
              key={group.title.en}
              className="w-[72vw] max-w-88 shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
            >
              <article className="h-full min-h-52 rounded-2xl border border-purple-500/15 bg-linear-to-br from-[#343638]/85 to-[#202225]/90 p-5 sm:p-6 backdrop-blur-xl transition-colors hover:border-purple-500/40">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-purple-500/30 bg-[#2b3036] p-3 text-purple-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {group.title[language]}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {group.description[language]}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-purple-500/20 bg-[#2b3036]/80 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
