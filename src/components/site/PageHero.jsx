import React from "react";

export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="border-b border-border bg-card pb-16 pt-40">
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
    </section>
  );
}