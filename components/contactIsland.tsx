"use client";

import dynamic from "next/dynamic";
import type { Language } from "./types";

const ContactInteractive = dynamic(() => import("./contactInteractive"), {
  ssr: false,
  loading: () => <div className="min-h-136" aria-hidden="true" />,
});

export default function ContactIsland({ language }: { language: Language }) {
  return <ContactInteractive language={language} />;
}
