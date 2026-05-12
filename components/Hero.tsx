"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/useLanguage";

function useCountUp(target: string, duration = 900) {
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const numericMatch = target.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplay(target);
      return;
    }

    const numeric = parseFloat(numericMatch[0]);
    const prefix = target.slice(0, target.indexOf(numericMatch[0]));
    const suffix = target.slice(target.indexOf(numericMatch[0]) + numericMatch[0].length);

    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = numeric * ease;
      setDisplay(`${prefix}${Math.round(current)}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [target, duration]);

  return display;
}

function KpiItem({ value, label }: { value: string; label: string }) {
  const displayValue = useCountUp(value);
  return (
    <div className="flex flex-col gap-1">
      <span
        className="tabular-nums leading-none font-semibold"
        style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", color: "var(--foreground)" }}
      >
        {displayValue}
      </span>
      <span className="text-sm leading-snug" style={{ color: "var(--gray-1)" }}>
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <FadeIn className="py-20 md:py-32">
      <h1
        className="font-semibold tracking-tight leading-none mb-4"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          color: "var(--foreground)",
          letterSpacing: "-0.02em",
        }}
      >
        {t.hero.name}
      </h1>

      <p
        className="text-lg leading-relaxed mb-2"
        style={{ color: "var(--foreground)", maxWidth: "560px" }}
      >
        {t.hero.oneliner}
      </p>

      <p className="text-sm mb-12" style={{ color: "var(--gray-1)" }}>
        {t.hero.location}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {t.hero.kpis.map((kpi) => (
          <KpiItem key={kpi.label} value={kpi.value} label={kpi.label} />
        ))}
      </div>

      <a
        href={t.hero.ctaHref}
        className="text-base underline underline-offset-4 decoration-1 transition-opacity hover:opacity-60"
        style={{ color: "var(--foreground)" }}
      >
        {t.hero.cta} →
      </a>
    </FadeIn>
  );
}
