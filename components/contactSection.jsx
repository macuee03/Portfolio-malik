import ContactIsland from "./contactIsland";

export default function ContactSection({ language }) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-purple-500/10 pt-8 sm:scroll-mt-28 sm:pt-10"
    >
      <ContactIsland language={language} />
      <footer className="mt-10 border-t border-purple-500/10 pt-6 text-center font-mono text-xs text-slate-500">
        © 2026 Malik Maulana Abdillah •{" "}
        {language === "id" ? "Dibangun dengan" : "Built with"} Next.js 16,
        Tailwind CSS &amp; Framer Motion
      </footer>
    </section>
  );
}
