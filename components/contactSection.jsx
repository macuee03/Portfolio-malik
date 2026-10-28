"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Reveal from "./reveal";

export default function ContactSection({ language }) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-purple-500/10 pt-10 sm:scroll-mt-28"
    >
      <Reveal className="mx-auto max-w-5xl py-2" direction="scale">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-400">
              <span className="h-px w-6 bg-indigo-400/80" aria-hidden="true" />
              {language === "id" ? "KONTAK" : "GET IN TOUCH"}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {language === "id" ? (
                <>
                  Mari mulai{" "}
                  <span className="text-slate-300">percakapan.</span>
                </>
              ) : (
                <>
                  Let’s start a{" "}
                  <span className="text-slate-300">conversation.</span>
                </>
              )}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
              {language === "id"
                ? "Terbuka untuk berdiskusi tentang pengembangan web, kolaborasi, maupun peluang profesional."
                : "I’m open to discussing web development, collaboration, and professional opportunities."}
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-3 sm:flex-row md:flex-col">
          <a
            href="mailto:malikmaulana253@gmail.com"
            className="group flex min-w-0 items-center justify-between gap-5 rounded-xl border border-purple-400/30 bg-[#20252b]/65 px-4 py-3.5 text-left transition-colors hover:border-purple-300/60 hover:bg-[#282d33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300 md:min-w-72"
          >
            <span className="flex min-w-0 items-center gap-3">
              <Mail className="size-4 shrink-0 text-purple-300" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                  Email
                </span>
                <span className="mt-0.5 block break-all text-sm font-medium text-white">
                  malikmaulana253@gmail.com
                </span>
              </span>
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-purple-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/6281384735644"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-5 rounded-xl border border-white/10 bg-transparent px-4 py-3.5 text-left transition-colors hover:border-purple-400/40 hover:bg-white/3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300 md:min-w-72"
          >
            <span className="flex min-w-0 items-center gap-3">
              <MessageCircle className="size-4 shrink-0 text-purple-300" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                  WhatsApp
                </span>
                <span className="mt-0.5 block text-sm font-medium text-white">
                  +62 813-8473-5644
                </span>
              </span>
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-300" aria-hidden="true" />
          </a>
          </div>
        </div>
      </Reveal>

      <footer className="mt-10 border-t border-purple-500/10 pt-6 text-center font-mono text-xs text-slate-500">
        © 2026 Malik Maulana Abdillah •{" "}
        {language === "id" ? "Dibangun dengan" : "Built with"} Next.js 16,
        Tailwind CSS & Framer Motion
      </footer>
    </section>
  );
}
