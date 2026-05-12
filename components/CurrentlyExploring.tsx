"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/useLanguage";

export default function CurrentlyExploring() {
  const { t } = useLanguage();

  return (
    <FadeIn className="py-20 md:py-32">
      <h2
        className="font-semibold mb-8 tracking-tight"
        style={{ fontSize: "1.5rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}
      >
        {t.currentlyExploring.title}
      </h2>
      <div className="flex flex-col gap-6">
        <p className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
          {t.currentlyExploring.p1}
        </p>
        <p className="text-base leading-relaxed" style={{ color: "var(--gray-1)" }}>
          {t.currentlyExploring.closing}
        </p>
      </div>
    </FadeIn>
  );
}
