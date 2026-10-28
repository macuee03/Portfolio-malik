"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, ChevronDown, Menu, X } from "lucide-react";

const NAV_ITEMS = {
  id: [
    { label: "Beranda", id: "hero" },
    { label: "Tentang", id: "about" },
    { label: "Pendidikan & Pengalaman", id: "achievements" },
    { label: "Keahlian", id: "skills" },
    { label: "Proyek", id: "projects" },
    { label: "Kontak", id: "contact" },
  ],
  en: [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Education & Experience", id: "achievements" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ],
};

function LanguageFlag({ language }) {
  if (language === "id") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 30 20"
        className="h-5 w-7 overflow-hidden rounded-sm shadow-sm"
      >
        <rect width="30" height="10" fill="#CE1126" />
        <rect y="10" width="30" height="10" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 30"
      className="h-5 w-7 overflow-hidden rounded-sm shadow-sm"
    >
      <clipPath id="union-jack-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#union-jack-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0 60 30M60 0 0 30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 0 60 30M60 0 0 30" stroke="#C8102E" strokeWidth="2.5" />
        <path d="M30 0v30M0 15h60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

export default function Navbar({ onNavigate, language, onToggleLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);
  const navItems = NAV_ITEMS[language];

  useEffect(() => {
    if (!isLanguageMenuOpen) return;

    const closeOnOutsideClick = (event) => {
      if (!languageMenuRef.current?.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsLanguageMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isLanguageMenuOpen]);

  const handleNavigate = (id) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  const selectLanguage = (selectedLanguage) => {
    if (selectedLanguage !== language) onToggleLanguage();
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-950/90 backdrop-blur-xl border-b border-purple-300/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <button
          type="button"
          className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => handleNavigate("hero")}
          title="Malik Maulana"
          aria-label={language === "id" ? "Kembali ke beranda" : "Back to home"}
        >
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex items-center justify-start">
            <Image
              src="/logo_1.png"
              alt="Logo Malik"
              width={530}
              height={530}
              priority
              className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(215,219,224,0.22)] hover:drop-shadow-[0_0_18px_rgba(215,219,224,0.38)] transition-all"
            />
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative" ref={languageMenuRef}>
            <button
              type="button"
              onClick={() => setIsLanguageMenuOpen((isOpen) => !isOpen)}
              aria-label={
                language === "id" ? "Pilih bahasa" : "Select language"
              }
              aria-haspopup="menu"
              aria-expanded={isLanguageMenuOpen}
              aria-controls="language-menu"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-purple-500/30 bg-[#20252b] px-3 py-2 transition-colors hover:border-purple-400 focus-visible:outline-2 focus-visible:outline-purple-400 cursor-pointer"
            >
              <LanguageFlag language={language} />
              <span className="text-xs font-semibold tracking-wide text-slate-200">
                {language === "id" ? "ID" : "EN"}
              </span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-300 transition-transform ${isLanguageMenuOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {isLanguageMenuOpen && (
              <div
                id="language-menu"
                role="menu"
                aria-label={
                  language === "id" ? "Pilih bahasa" : "Select language"
                }
                className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-purple-500/20 bg-[#20252b] p-1.5 shadow-xl"
              >
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={language === "id"}
                  onClick={() => selectLanguage("id")}
                  className="cursor-pointer flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-200 transition-colors hover:bg-purple-500/10 focus-visible:outline-2 focus-visible:outline-purple-400"
                >
                  <LanguageFlag language="id" />
                  <span className="flex-1">Bahasa Indonesia</span>
                  {language === "id" && (
                    <Check
                      className="h-4 w-4 text-purple-300"
                      aria-hidden="true"
                    />
                  )}
                </button>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={language === "en"}
                  onClick={() => selectLanguage("en")}
                  className="cursor-pointer flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-200 transition-colors hover:bg-purple-500/10 focus-visible:outline-2 focus-visible:outline-purple-400"
                >
                  <LanguageFlag language="en" />
                  <span className="flex-1">English</span>
                  {language === "en" && (
                    <Check
                      className="h-4 w-4 text-purple-300"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen
                ? language === "id"
                  ? "Tutup menu navigasi"
                  : "Close navigation menu"
                : language === "id"
                  ? "Buka menu navigasi"
                  : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden p-2.5 rounded-full bg-[#20252b] border border-purple-500/30 text-purple-300 hover:text-white transition-colors cursor-pointer"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 rounded-2xl border border-purple-500/20 bg-[#20252b]/95 p-3 shadow-xl backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-purple-500/10 hover:text-purple-300 focus-visible:outline-2 focus-visible:outline-purple-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
