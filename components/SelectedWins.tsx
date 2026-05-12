"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/useLanguage";

const revenueGrowth = [
  { quarter: "Q2 2024", value: 1.0 },
  { quarter: "Q3 2024", value: 1.16 },
  { quarter: "Q4 2024", value: 1.86 },
  { quarter: "Q1 2025", value: 1.99 },
  { quarter: "Q2 2025", value: 3.21 },
  { quarter: "Q3 2025", value: 3.32 },
  { quarter: "Q4 2025", value: 5.71 },
  { quarter: "Q1 2026", value: 6.13 },
  { quarter: "Q2 2026", value: 8.36, projected: true },
];

function RevenueChart() {
  const maxVal = 8.36;
  const chartH = 120;
  const chartW = 600;
  const barW = 40;
  const gap = (chartW - revenueGrowth.length * barW) / (revenueGrowth.length - 1);
  const padBottom = 24;

  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${chartW} ${chartH + padBottom}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full"
        aria-hidden="true"
      >
        {revenueGrowth.map((d, i) => {
          const x = i * (barW + gap);
          const barHeight = Math.max(4, (d.value / maxVal) * chartH);
          const y = chartH - barHeight;
          const isFirst = i === 0;
          const isLast = i === revenueGrowth.length - 1;
          return (
            <g key={d.quarter}>
              <rect
                x={x}
                y={y}
                width={barW}
                height={barHeight}
                fill={(d as { projected?: boolean }).projected ? "#BFBFBF" : "#0A0A0A"}
              />
              {(isFirst || isLast) && (
                <text
                  x={x + barW / 2}
                  y={chartH + padBottom - 4}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#888888"
                >
                  {d.quarter}
                </text>
              )}
            </g>
          );
        })}
        <text x="0" y={chartH} fontSize="10" fill="#888888" dominantBaseline="auto">×1</text>
        <text x="0" y="10" fontSize="10" fill="#888888" dominantBaseline="hanging">×8</text>
      </svg>
    </div>
  );
}

export default function SelectedWins() {
  const { t } = useLanguage();

  return (
    <FadeIn className="py-20 md:py-32">
      <h2
        className="font-semibold mb-4 tracking-tight"
        style={{ fontSize: "1.5rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}
      >
        {t.selectedWins.title}
      </h2>
      <p className="text-base mb-10 leading-relaxed" style={{ color: "var(--gray-1)" }}>
        {t.selectedWins.intro}
      </p>
      <ul className="flex flex-col gap-5 mb-12">
        {t.selectedWins.bullets.map((b, i) => (
          <li key={i} className="text-base leading-relaxed flex gap-3" style={{ color: "var(--foreground)" }}>
            <span style={{ color: "var(--gray-2)", flexShrink: 0 }}>—</span>
            <span>
              <strong className="font-semibold">{b.bold}</strong>
              {b.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="mb-3">
        <RevenueChart />
      </div>
      <p className="text-xs italic mb-10" style={{ color: "var(--gray-1)" }}>
        {t.selectedWins.chartCaption}
      </p>
      <p className="text-sm italic" style={{ color: "var(--gray-1)" }}>
        {t.selectedWins.awards}
      </p>
    </FadeIn>
  );
}
