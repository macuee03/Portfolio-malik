"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { ImagePlus, Send, Upload } from "lucide-react";

export default function ContactInteractive({ language }) {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [comment, setComment] = useState({ name: "", text: "", image: "" });
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    let timerId;
    try {
      const saved = window.localStorage.getItem("portfolio-comments");
      if (saved) {
        timerId = window.setTimeout(() => setComments(JSON.parse(saved)), 0);
      }
    } catch (error) {
      console.error("Unable to load saved comments.", error);
    }
    return () => {
      if (timerId) window.clearTimeout(timerId);
    };
  }, []);

  const updateContact = (event) =>
    setContact((current) => ({ ...current, [event.target.name]: event.target.value }));
  const updateComment = (event) =>
    setComment((current) => ({ ...current, [event.target.name]: event.target.value }));

  const submitContact = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${contact.name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`,
    );
    window.location.href = `mailto:malikmaulana253@gmail.com?subject=${subject}&body=${body}`;
  };

  const selectImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setStatus(language === "id" ? "Pilih file gambar." : "Choose an image file.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setStatus(language === "id" ? "Ukuran gambar maksimal 2 MB." : "Image size must be 2 MB or less.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setComment((current) => ({ ...current, image: String(reader.result) }));
      setStatus("");
    };
    reader.readAsDataURL(file);
  };

  const submitComment = (event) => {
    event.preventDefault();
    if (!comment.name.trim() || !comment.text.trim()) {
      setStatus(language === "id" ? "Nama dan komentar wajib diisi." : "Name and comment are required.");
      return;
    }
    const next = [
      { ...comment, id: `${Date.now()}-${Math.random()}`, name: comment.name.trim(), text: comment.text.trim(), createdAt: new Date().toISOString() },
      ...comments,
    ];
    setComments(next);
    window.localStorage.setItem("portfolio-comments", JSON.stringify(next));
    setComment({ name: "", text: "", image: "" });
    setStatus(language === "id" ? "Komentar berhasil ditambahkan." : "Comment added successfully.");
  };

  return (
    <div className="mx-auto max-w-6xl py-1 sm:py-2">
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
        <div className="relative p-1 sm:p-3">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-400">
            <span className="h-px w-6 bg-indigo-400/80" aria-hidden="true" />
            {language === "id" ? "KONTAK" : "GET IN TOUCH"}
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:mt-3 sm:text-4xl">
            {language === "id" ? "Mari mulai " : "Let's start a "}
            <span className="text-slate-300">{language === "id" ? "percakapan." : "conversation."}</span>
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:mt-4">
            {language === "id" ? "Terbuka untuk berdiskusi tentang pengembangan web, kolaborasi, maupun peluang profesional." : "I'm open to discussing web development, collaboration, and professional opportunities."}
          </p>
          <form onSubmit={submitContact} className="mt-5 space-y-3 sm:mt-6">
            <input required name="name" value={contact.name} onChange={updateContact} placeholder={language === "id" ? "Nama Anda" : "Your name"} className="min-h-11 w-full rounded-xl border border-white/10 bg-[#15181b]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60" />
            <input required type="email" name="email" value={contact.email} onChange={updateContact} placeholder={language === "id" ? "Email Anda" : "Your email"} className="min-h-11 w-full rounded-xl border border-white/10 bg-[#15181b]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60" />
            <textarea required name="message" value={contact.message} onChange={updateContact} rows={4} placeholder={language === "id" ? "Pesan Anda" : "Your message"} className="w-full resize-none rounded-xl border border-white/10 bg-[#15181b]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60" />
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-500/90 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-400"><Send className="size-4" aria-hidden="true" />{language === "id" ? "Kirim Pesan" : "Send Message"}</button>
          </form>
        </div>
        <div className="relative p-1 sm:p-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-400">{language === "id" ? "KOMENTAR" : "COMMENTS"}</span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:mt-3 sm:text-3xl">Comments</h2>
          <p className="mt-2 text-sm text-slate-400">{language === "id" ? "Bagikan pendapat Anda." : "Leave your thoughts here."}</p>
          <form onSubmit={submitComment} className="mt-5 space-y-3 sm:mt-6">
            <input required name="name" value={comment.name} onChange={updateComment} placeholder={language === "id" ? "Nama Anda" : "Your name"} className="min-h-11 w-full rounded-xl border border-white/10 bg-[#15181b]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60" />
            <textarea required name="text" value={comment.text} onChange={updateComment} rows={3} placeholder={language === "id" ? "Komentar Anda" : "Your comment"} className="w-full resize-none rounded-xl border border-white/10 bg-[#15181b]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-400/60" />
            <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-[#15181b]/80 px-4 py-3 text-xs text-slate-400 hover:border-purple-400/50">
              <ImagePlus className="size-4 text-purple-300" aria-hidden="true" />{comment.image ? (language === "id" ? "Gambar terpilih" : "Image selected") : (language === "id" ? "Upload gambar (opsional)" : "Upload image (optional)")}<input type="file" accept="image/*" onChange={selectImage} className="sr-only" /><Upload className="ml-auto size-4" aria-hidden="true" />
            </label>
            <button type="submit" className="flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">Post Comment</button>
            {status && <p className="text-xs text-purple-300">{status}</p>}
          </form>
          <div className="mt-5 max-h-80 space-y-3 overflow-y-auto pr-1 sm:max-h-96">
            {comments.map((item) => <article key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"><div className="flex items-start gap-3"><div className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-purple-500/20 text-xs font-bold text-purple-200">{item.image ? /* User-selected data URLs cannot use next/image without a loader. */ <img src={item.image} alt="" className="size-full object-cover" /> : item.name.slice(0, 1).toUpperCase()}</div><div className="min-w-0"><p className="text-sm font-semibold text-white">{item.name}</p><p className="mt-1 text-xs text-slate-400">{item.text}</p><time className="mt-2 block text-[10px] text-slate-500" dateTime={item.createdAt}>{new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-US", { dateStyle: "medium" }).format(new Date(item.createdAt))}</time></div></div></article>)}
            {!comments.length && <p className="text-sm text-slate-500">{language === "id" ? "Belum ada komentar." : "No comments yet."}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
