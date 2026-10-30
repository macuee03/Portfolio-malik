"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop({ language }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={language === "id" ? "Kembali ke atas" : "Back to top"}
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/40 bg-[#20252b]/95 text-purple-300 shadow-[0_0_20px_rgba(215,219,224,0.18)] transition-transform hover:-translate-y-1 hover:bg-purple-600 hover:text-white focus-visible:outline-2 focus-visible:outline-purple-300 sm:bottom-7 sm:right-7"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
