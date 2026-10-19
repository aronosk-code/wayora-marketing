import React from "react";

export default function PageHero({ eyebrow, title, intro, children, compact = false }) {
  return (
    <section
      className={`border-b border-border bg-card ${
        compact ? "pb-8 pt-24 sm:pb-10 sm:pt-32" : "pb-10 pt-24 sm:pb-16 sm:pt-40"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-heading text-3xl leading-[1.12] text-foreground sm:mt-4 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}