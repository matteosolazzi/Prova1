"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/useLanguage";

export default function HowIThink() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="py-20 md:py-32"
    >
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
    </motion.section>
  );
}
