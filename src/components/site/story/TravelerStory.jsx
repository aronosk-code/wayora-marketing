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
      </div>
    </section>
  );
}