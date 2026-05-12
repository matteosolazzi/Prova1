"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/useLanguage";

export default function WhatIDo() {
  const { t } = useLanguage();

  return (
    <FadeIn className="py-20 md:py-32">
      <h2
        className="font-semibold mb-8 tracking-tight"
        style={{ fontSize: "1.5rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}
      >
        {t.whatIDo.title}
      </h2>
      <div className="flex flex-col gap-6">
        <p className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
          {t.whatIDo.p1}
        </p>
        <p className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
          {t.whatIDo.p2}
        </p>
      </div>
    </FadeIn>
  );
}
