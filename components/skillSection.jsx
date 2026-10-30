import {
  Braces,
  Database,
  Fingerprint,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";

const SKILL_GROUPS = [
  {
    icon: PanelsTopLeft,
    title: { id: "Frontend", en: "Frontend" },
    description: {
      id: "Membangun antarmuka web yang responsif dan interaktif.",
      en: "Building responsive and interactive web interfaces.",
    },
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    icon: Braces,
    title: { id: "Backend", en: "Backend" },
    description: {
      id: "Mengembangkan logika aplikasi dan integrasi layanan.",
      en: "Developing application logic and service integrations.",
    },
    technologies: ["PHP", "Laravel", "REST API"],
  },
  {
    icon: Database,
    title: { id: "Basis Data", en: "Databases" },
    description: {
      id: "Merancang dan mengelola basis data relasional.",
      en: "Designing and managing relational databases.",
    },
    technologies: ["PostgreSQL", "MySQL", "MariaDB"],
  },
  {
    icon: Fingerprint,
    title: { id: "Keamanan & Kriptografi", en: "Security & Cryptography" },
    description: {
      id: "Pengalaman akademik dalam enkripsi hibrida.",
      en: "Academic experience with hybrid encryption.",
    },
    technologies: ["AES-256-CBC", "RSA-2048", "OpenSSL"],
  },
  {
    icon: Wrench,
    title: { id: "Perangkat & Alur Kerja", en: "Tools & Workflow" },
    description: {
      id: "Mendukung proses pengembangan, pengujian, dan pengelolaan kode.",
      en: "Tools for software development, testing, and code management.",
    },
    technologies: ["Git", "GitHub", "Postman", "Visual Studio Code"],
  },
];

export default function SkillsSection({ language }) {
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
              ? "Geser kartu untuk melihat lainnya"
              : "Swipe to explore"}
          </p>
        </div>
      </div>

      <div
        className="swipe-scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:gap-5 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3"
      >
        {SKILL_GROUPS.map((group, idx) => {
          const Icon = group.icon;

          return (
            <div
              key={group.title.en}
              delay={idx * 0.07}
              hoverLift
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
