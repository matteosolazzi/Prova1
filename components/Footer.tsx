"use client";

import { Mail } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/useLanguage";

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const { footer } = t;

  return (
    <FadeIn as="footer" className="py-16 md:py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${footer.email}`}
            aria-label="Send an email to Matteo Solazzi"
            className="flex items-center gap-2 text-sm underline underline-offset-4 decoration-1 transition-opacity hover:opacity-60"
            style={{ color: "var(--foreground)" }}
          >
            <Mail size={14} strokeWidth={1.5} />
            {footer.email}
          </a>
          <a
            href={`https://${footer.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Matteo Solazzi's LinkedIn profile"
            className="flex items-center gap-2 text-sm underline underline-offset-4 decoration-1 transition-opacity hover:opacity-60"
            style={{ color: "var(--foreground)" }}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
        <p className="text-sm" style={{ color: "var(--gray-1)" }}>
          {footer.copyright}
        </p>
      </div>
    </FadeIn>
  );
}
