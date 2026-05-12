"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/useLanguage";

export default function BeyondWork() {
  const { t } = useLanguage();
  const { beyondWork, photos } = t;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="py-20 md:py-32"
    >
      <h2
        className="font-semibold mb-8 tracking-tight"
        style={{ fontSize: "1.5rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}
      >
        {beyondWork.title}
      </h2>

      <p className="text-base leading-relaxed mb-12" style={{ color: "var(--foreground)" }}>
        {beyondWork.p1}
      </p>

      <div className="flex flex-col gap-8 mb-12">
        <figure>
          <div className="relative w-full" style={{ aspectRatio: "4/5", maxWidth: "360px" }}>
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Matteo Solazzi"
              fill
              className="object-cover"
              priority
            />
          </div>
          <figcaption
            className="mt-2 text-sm italic"
            style={{ color: "var(--gray-1)" }}
          >
            {photos.portrait.caption}
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: "/images/daze.jpg", alt: "Daze HQ", caption: photos.daze.caption },
            { src: "/images/award.jpg", alt: "German Design Award", caption: photos.award.caption },
            { src: "/images/travel.jpg", alt: "Travel with WeRoad", caption: photos.travel.caption },
          ].map((photo) => (
            <figure key={photo.src}>
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption
                className="mt-2 text-sm italic"
                style={{ color: "var(--gray-1)" }}
              >
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div
        className="p-6 rounded-none"
        style={{ background: "var(--gray-5)", border: "1px solid var(--gray-3)" }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          {beyondWork.currentlyBox.categories.map((cat) => (
            <div key={cat.label} className="flex-1">
              <p
                className="text-sm font-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                {cat.label}
              </p>
              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <div key={item.title} className="flex items-baseline gap-3">
                    <span
                      className="text-sm leading-snug flex-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.title}
                    </span>
                    <span
                      className="text-sm leading-snug flex-shrink-0"
                      style={{ color: "var(--gray-1)" }}
                    >
                      {item.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
