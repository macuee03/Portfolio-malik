import Image from "next/image";
import { Download } from "lucide-react";
import type { Language } from "./types";

export default function AboutSection({ language }: { language: Language }) {
  return (
    <section id="about" className="scroll-mt-24 pt-12 sm:scroll-mt-28">
      <div className="bg-linear-to-br from-[#343638]/85 via-[#282a2d]/80 to-[#202225]/85 border border-purple-500/15 rounded-3xl p-5 sm:p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="relative shrink-0">
          <div className="absolute -inset-2 bg-linear-to-r from-purple-500 to-purple-400 rounded-full blur-md opacity-55 animate-pulse motion-reduce:animate-none" />
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full p-1 bg-linear-to-b from-purple-400 to-purple-600 border border-purple-400 shadow-[0_0_30px_rgba(215,219,224,0.2)] overflow-hidden">
            <Image
              src="/profile.webp"
              alt={
                language === "id"
                  ? "Foto Malik Maulana"
                  : "Photo of Malik Maulana"
              }
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex-1">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            {language === "id" ? "TENTANG SAYA" : "ABOUT ME"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1 mb-4">
            {language === "id"
              ? "Membangun Sistem yang "
              : "Building Structured and "}
            <span className="text-purple-400">
              {language === "id" ? "Terstruktur dan Andal" : "Reliable Systems"}
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
            {language === "id"
              ? "Saya adalah fresh graduate Teknik Informatika Universitas Esa Unggul dengan pengalaman membangun backend dan aplikasi web. Saya terbiasa mengembangkan fitur CRUD, mengelola MySQL dan PostgreSQL, serta mengintegrasikan sistem. Saya menerapkan enkripsi data menggunakan PHP dan Next.js, serta membangun FitCV dengan Python dan FastAPI."
              : "I am an Informatics Engineering fresh graduate from Universitas Esa Unggul with experience building backend systems and web applications. I work with CRUD features, MySQL and PostgreSQL, and system integration. I implement data encryption with PHP and Next.js, and built FitCV with Python and FastAPI."}
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
            <div className="bg-[#282d33] border border-purple-500/20 rounded-2xl p-3 sm:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {language === "id" ? "3,59" : "3.59"}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {language === "id" ? "IPK" : "GPA"}
              </div>
            </div>
            <div className="bg-[#282d33] border border-purple-500/20 rounded-2xl p-3 sm:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                6+
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {language === "id" ? "Proyek" : "Projects"}
              </div>
            </div>
          </div>

          <a
            href="/cv-malik.pdf"
            download="cv-malik.pdf"
            className="px-6 py-2.5 rounded-full bg-linear-to-r from-purple-600 to-[#7f8994] text-slate-200 font-semibold text-xs shadow-[0_0_25px_rgba(215,219,224,0.2)] hover:shadow-[0_0_35px_rgba(215,219,224,0.35)] transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <Download className="size-4" aria-hidden="true" />
            {language === "id" ? "Unduh CV" : "Download CV"}
          </a>
        </div>
      </div>
    </section>
  );
}
