import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PROJECTS_DATA = {
  id: [
    {
      title: "TOS Align Clinic",
      category: "Pengembangan Web • Next.js",
      desc: "Pengembangan situs web klinik spesialis aligner transparan untuk mendukung promosi layanan serta jaringan lebih dari 135 mitra di 40 kota di Indonesia.",
      image: "/clinic.webp",
      href: "https://tosalign.com",
    },
    {
      title: "Manajemen Data Perumahan",
      category: "Aplikasi Web • PHP",
      desc: "Digitalisasi proses bisnis perusahaan melalui sistem berbasis web dengan fitur impor data dan pelaporan administrasi.",
      image: "/mustika.png",
    },
    {
      title: "Enkripsi Hibrida AES-RSA",
      category: "Keamanan Data • OpenSSL",
      desc: "Perlindungan data sensitif pada basis data (data at rest) menggunakan kombinasi AES-256-CBC dan RSA-2048 OAEP sebagai bagian dari tugas akhir.",
      image: "/AES-RSA.png",
    },
  ],
  en: [
    {
      title: "TOS Align Clinic",
      category: "Web Development • Next.js",
      desc: "Developed a website for a clear aligner clinic to promote its services and support a network of more than 135 partners across 40 cities in Indonesia.",
      image: "/clinic.webp",
      href: "https://tosalign.com",
    },
    {
      title: "Housing Data Management",
      category: "Web Application • PHP",
      desc: "Digitized company business processes through a web-based system with data import and administrative reporting features.",
      image: "/mustika.png",
    },
    {
      title: "AES-RSA Hybrid Encryption",
      category: "Data Security • OpenSSL",
      desc: "Protected sensitive data at rest in a database using AES-256-CBC and RSA-2048 OAEP as part of a thesis project.",
      image: "/AES-RSA.png",
    },
  ],
};

export default function ProjectsSection({ language }) {
  return (
    <section id="projects" className="scroll-mt-24 pt-6 sm:scroll-mt-28">
      <div>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            {language === "id" ? "PORTOFOLIO" : "PORTFOLIO"}
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            {language === "id" ? "Proyek Pilihan" : "Selected Projects"}
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
        className="swipe-scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:gap-5 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3 lg:gap-6"
      >
        {PROJECTS_DATA[language].map((proj, idx) => (
          <div
            key={idx}
            delay={idx * 0.08}
            hoverLift
            className="w-[72vw] max-w-88 shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
          >
            <div className="h-full bg-linear-to-br from-[#343638]/85 to-[#202225]/90 border border-purple-500/15 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="h-40 sm:h-48 lg:h-56 overflow-hidden relative">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-purple-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-400/90 font-mono mt-1">
                    {proj.category}
                  </p>
                  <p className="text-sm text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>

              {proj.href && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6">
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      language === "id"
                        ? `Kunjungi situs ${proj.title} (buka di tab baru)`
                        : `Visit ${proj.title} website (opens in a new tab)`
                    }
                    className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#2b3036] border border-purple-500/30 text-purple-400 transition-all hover:bg-purple-600 hover:text-white focus-visible:outline-2 focus-visible:outline-purple-400"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
