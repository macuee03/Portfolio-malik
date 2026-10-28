"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import EducationSection from "@/components/educationSection";
import SkillsSection from "@/components/skillSection";
import ProjectsSection from "@/components/projectSection";
import ContactSection from "@/components/contactSection";

export default function Home() {
  const [language, setLanguage] = useState<"id" | "en">("id");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "id"
        ? "Portofolio | Malik Maulana Abdillah"
        : "Portfolio | Malik Maulana Abdillah";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        language === "id"
          ? "Portofolio profesional Malik Maulana Abdillah, pengembang frontend dan backend."
          : "Professional portfolio of Malik Maulana Abdillah, frontend and backend developer.",
      );
  }, [language]);

  useEffect(() => {
    const updateBackToTopVisibility = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    updateBackToTopVisibility();
    window.addEventListener("scroll", updateBackToTopVisibility, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", updateBackToTopVisibility);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#17191b] text-[#edf0f2] min-h-screen font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      <div className="portfolio-background" aria-hidden="true">
        <span className="portfolio-glow portfolio-glow--violet" />
        <span className="portfolio-glow portfolio-glow--blue" />
        <span className="portfolio-glow portfolio-glow--indigo" />
        <span className="portfolio-ornament portfolio-ornament--orbit" />
        <span className="portfolio-ornament portfolio-ornament--stars" />
        <span className="portfolio-ornament portfolio-ornament--sparkle portfolio-ornament--sparkle-one" />
        <span className="portfolio-ornament portfolio-ornament--sparkle portfolio-ornament--sparkle-two" />
      </div>

      {/* Sticky Header */}
      <Navbar
        onNavigate={scrollTo}
        language={language}
        onToggleLanguage={() =>
          setLanguage((current) => (current === "id" ? "en" : "id"))
        }
      />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24 flex flex-col gap-20 sm:gap-28 lg:gap-32 relative z-10">
        <HeroSection onNavigate={scrollTo} language={language} />
        <AboutSection onNavigate={scrollTo} language={language} />
        <EducationSection language={language} />
        <SkillsSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </main>
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={
            language === "id" ? "Kembali ke atas" : "Back to top"
          }
          title={language === "id" ? "Kembali ke atas" : "Back to top"}
          className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-purple-400/40 bg-[#20252b]/95 text-purple-300 shadow-[0_0_20px_rgba(215,219,224,0.18)] backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-purple-600 hover:text-white focus-visible:outline-2 focus-visible:outline-purple-300 sm:bottom-7 sm:right-7"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
