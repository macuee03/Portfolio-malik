"use client";

import { Mail, Send } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import type { Language } from "./types";

type Contact = { name: string; email: string; message: string };

export default function ContactInteractive({
  language,
}: {
  language: Language;
}) {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const updateContact = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setContact((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setContact({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("Unable to submit contact form.", error);
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-6xl py-1 sm:py-2">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
        <div className="relative p-1 sm:p-3">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-400">
            <span className="h-px w-6 bg-indigo-400/80" aria-hidden="true" />
            {language === "id" ? "MARI BERKOLABORASI" : "LET'S COLLABORATE"}
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:mt-3 sm:text-4xl">
            {language === "id"
              ? "Wujudkan ide digital Anda "
              : "Turn your digital idea "}
            <span className="text-slate-300">
              {language === "id" ? "menjadi nyata." : "into reality."}
            </span>
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:mt-4">
            {language === "id"
              ? "Saya membantu bisnis dan individu membangun website yang cepat, responsif, dan mudah digunakan—dari konsep hingga siap diluncurkan."
              : "I help businesses and individuals build fast, responsive, and user-friendly websites—from the initial concept to launch."}
          </p>

          <div className="mt-8 space-y-5 sm:mt-10">
            <a
              href="mailto:malikmaulana253@gmail.com"
              className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-purple-300"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-[#20252b] text-purple-300">
                <Mail className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Email
                </span>
                <span className="mt-1 block">malikmaulana253@gmail.com</span>
              </span>
            </a>
            <a
              href="https://github.com/macuee03"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-purple-300"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-[#20252b] text-purple-300">
                <GithubIcon className="size-4" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  GitHub
                </span>
                <span className="mt-1 block">macuee03</span>
              </span>
            </a>
            <a
              href="https://linkedin.com/in/malikmaulanaabdillah"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-purple-300"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-[#20252b] text-purple-300">
                <LinkedinIcon className="size-4" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  LinkedIn
                </span>
                <span className="mt-1 block">Malik Maulana Abdillah</span>
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={submitContact}
          className="rounded-2xl border border-white/10 bg-[#15181b]/55 p-5 backdrop-blur-xl sm:p-6"
        >
          <h3 className="text-lg font-semibold text-white">
            {language === "id"
              ? "Mari mulai percakapan"
              : "Start a conversation"}
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            {language === "id"
              ? "Ceritakan kebutuhan Anda, dan saya akan membantu menentukan langkah terbaik."
              : "Tell me about your needs, and I’ll help you find the right next step."}
          </p>
          <div className="mt-5 space-y-3">
            <input
              required
              name="name"
              value={contact.name}
              onChange={updateContact}
              placeholder={language === "id" ? "Nama lengkap" : "Full name"}
              className="min-h-11 w-full rounded-xl border border-white/10 bg-[#15181b]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60"
            />
            <input
              required
              type="email"
              name="email"
              value={contact.email}
              onChange={updateContact}
              placeholder={language === "id" ? "Alamat email" : "Email address"}
              className="min-h-11 w-full rounded-xl border border-white/10 bg-[#15181b]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60"
            />
            <textarea
              required
              name="message"
              value={contact.message}
              onChange={updateContact}
              rows={5}
              placeholder={
                language === "id"
                  ? "Ceritakan tentang proyek atau kebutuhan Anda..."
                  : "Tell me about your project or requirements..."
              }
              className="w-full resize-none rounded-xl border border-white/10 bg-[#15181b]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-purple-500/90 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="size-4" aria-hidden="true" />
              {status === "sending"
                ? language === "id"
                  ? "Mengirim..."
                  : "Sending..."
                : language === "id"
                  ? "Diskusikan Proyek"
                  : "Let's Discuss Your Project"}
            </button>
            {status !== "idle" && status !== "sending" && (
              <p
                role="status"
                className={`text-center text-xs ${
                  status === "success" ? "text-emerald-300" : "text-red-300"
                }`}
              >
                {status === "success"
                  ? language === "id"
                    ? "Pesan berhasil dikirim. Terima kasih!"
                    : "Message sent successfully. Thank you!"
                  : language === "id"
                    ? "Pesan gagal dikirim. Silakan coba lagi."
                    : "Unable to send the message. Please try again."}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
