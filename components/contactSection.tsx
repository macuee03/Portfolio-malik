import ContactIsland from "./contactIsland";
import type { Language } from "./types";

export default function ContactSection({ language }: { language: Language }) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-purple-500/10 pt-8 sm:scroll-mt-28 sm:pt-10"
    >
      <ContactIsland language={language} />
      <footer className="mt-10 border-t border-purple-500/10 pt-6 text-center font-mono text-xs text-slate-500">
        © 2026 Malik Maulana Abdillah, S.Kom
      </footer>
    </section>
  );
}
