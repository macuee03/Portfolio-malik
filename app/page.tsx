import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import EducationSection from "@/components/educationSection";
import SkillsSection from "@/components/skillSection";
import ProjectsSection from "@/components/projectSection";
import ContactSection from "@/components/contactSection";
import BackToTop from "@/components/backToTop";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const language = lang === "en" ? "en" : "id";
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
      <Navbar language={language} />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24 flex flex-col gap-20 sm:gap-28 lg:gap-32 relative z-10">
        <HeroSection language={language} />
        <AboutSection language={language} />
        <EducationSection language={language} />
        <SkillsSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </main>
      <BackToTop language={language} />
    </div>
  );
}
