"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./reveal";

export default function AboutSection({ onNavigate, language }) {
  return (
    <section id="about" className="scroll-mt-24 pt-12 sm:scroll-mt-28">
      <Reveal className="bg-linear-to-br from-[#343638]/85 via-[#282a2d]/80 to-[#202225]/85 border border-purple-500/15 rounded-3xl p-5 sm:p-8 md:p-14 backdrop-blur-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
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
              ? "Mengubah Ide Menjadi "
              : "Turning Ideas Into "}
            <span className="text-purple-400">
              {language === "id" ? "Realitas Digital" : "Digital Reality"}
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
            {language === "id"
              ? "Saya senang mengubah kebutuhan bisnis menjadi solusi digital yang terstruktur dan mudah dikembangkan. Dalam setiap proyek, saya mengutamakan kode yang rapi, alur kerja yang efisien, serta solusi yang dapat diandalkan dalam jangka panjang."
              : "I enjoy turning business needs into structured, scalable digital solutions. In every project, I value clean code, efficient workflows, and reliable solutions built for the long term."}
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
            <Reveal
              className="bg-[#282d33] border border-purple-500/20 rounded-2xl p-3 sm:p-4 text-center"
              delay={0.05}
              hoverLift
            >
              <div className="text-2xl md:text-3xl font-bold text-white">
                {language === "id" ? "3,59" : "3.59"}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {language === "id" ? "IPK" : "GPA"}
              </div>
            </Reveal>
            <Reveal
              className="bg-[#282d33] border border-purple-500/20 rounded-2xl p-3 sm:p-4 text-center"
              delay={0.12}
              hoverLift
            >
              <div className="text-2xl md:text-3xl font-bold text-white">
                3+
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {language === "id" ? "Proyek" : "Projects"}
              </div>
            </Reveal>
          </div>

          <button
            onClick={() => onNavigate("contact")}
            className="px-6 py-2.5 rounded-full bg-linear-to-r from-purple-500 to-purple-600 text-slate-200 font-semibold text-xs shadow-[0_0_20px_rgba(215,219,224,0.18)] hover:shadow-[0_0_30px_rgba(215,219,224,0.3)] transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            {language === "id" ? "Mari Berdiskusi" : "Let's Talk"}{" "}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
