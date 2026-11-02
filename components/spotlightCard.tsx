"use client";

import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const updateSpotlight = (event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || event.pointerType !== "mouse") return;

    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  const style = {
    "--spotlight-x": "50%",
    "--spotlight-y": "0%",
  } as CSSProperties;

  return (
    <div
      ref={cardRef}
      style={style}
      onPointerMove={updateSpotlight}
      className={`group group/spotlight relative isolate overflow-hidden rounded-2xl border border-purple-500/15 bg-linear-to-br from-[#343638]/85 to-[#202225]/90 transition-colors hover:border-purple-500/40 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--spotlight-x) var(--spotlight-y), rgb(196 200 204 / 18%), transparent 70%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
