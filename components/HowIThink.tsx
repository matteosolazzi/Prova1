"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/useLanguage";

export default function HowIThink() {
  const { t } = useLanguage();

  return (
    <FadeIn className="py-20 md:py-32">
      <h2
        className="font-semibold mb-10 tracking-tight"
        style={{ fontSize: "1.5rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}
      >
        {t.howIThink.title}
      </h2>
      <div className="flex flex-col gap-8">
        {t.howIThink.points.map((point, i) => (
          <div key={i}>
            <p className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
              <span className="font-semibold">{point.title}</span>{" "}
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
