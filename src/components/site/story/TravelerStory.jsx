import React, { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "../Reveal";
import StoryStage from "./StoryStage";

const BEATS = [3400, 3200, 1800, 4600];

export default function TravelerStory() {
  const { t } = useI18n();
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setBeat((b) => (b + 1) % BEATS.length), BEATS[beat]);
    return () => clearTimeout(timer);
  }, [beat]);

  const captions = [t("story.c1"), t("story.c2"), t("story.c3")];
  const active = beat === 0 ? 0 : beat === 1 ? 1 : 2;

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {t("story.eyebrow")}
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            {t("story.title")}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t("story.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <StoryStage beat={beat} />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {captions.map((caption, i) => (
            <div
              key={i}
              className={`rounded-2xl border px-5 py-4 transition-colors duration-500 ${
                i === active ? "border-primary bg-secondary" : "border-border bg-card"
              }`}
            >
              <span
                className={`text-xs font-semibold ${
                  i === active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                0{i + 1}
              </span>
              <p
                className={`mt-1 text-sm leading-relaxed ${
                  i === active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}