"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScrollControls({ scrollRef, language }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    const updateControls = () => {
      setCanScrollLeft(track.scrollLeft > 1);
      setCanScrollRight(
        track.scrollLeft + track.clientWidth < track.scrollWidth - 1,
      );
    };

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });

    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(track);
    if (track.firstElementChild) {
      resizeObserver.observe(track.firstElementChild);
    }

    return () => {
      track.removeEventListener("scroll", updateControls);
      resizeObserver.disconnect();
    };
  }, [scrollRef]);

  const scroll = (direction) => {
    const track = scrollRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex shrink-0 gap-2 md:hidden">
      <button
        type="button"
        onClick={() => scroll(-1)}
        disabled={!canScrollLeft}
        aria-label={language === "id" ? "Geser kartu ke kiri" : "Scroll cards left"}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-[#20252b] text-purple-300 transition-colors hover:border-purple-400 hover:bg-purple-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-purple-500/30 disabled:hover:bg-[#20252b] disabled:hover:text-purple-300"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        disabled={!canScrollRight}
        aria-label={language === "id" ? "Geser kartu ke kanan" : "Scroll cards right"}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-[#20252b] text-purple-300 transition-colors hover:border-purple-400 hover:bg-purple-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-purple-500/30 disabled:hover:bg-[#20252b] disabled:hover:text-purple-300"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
