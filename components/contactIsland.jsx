"use client";

import dynamic from "next/dynamic";

const ContactInteractive = dynamic(() => import("./contactInteractive"), {
  ssr: false,
  loading: () => <div className="min-h-[34rem]" aria-hidden="true" />,
});

export default function ContactIsland({ language }) {
  return <ContactInteractive language={language} />;
}
