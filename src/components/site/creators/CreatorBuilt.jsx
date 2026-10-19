import React from "react";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/site/Reveal";

export default function CreatorBuilt() {
  const { t } = useI18n();
  const points = t("pages.creators.built") || [];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t("pages.creators.builtTitle")}
          </h2>
        </Reveal>

        <ul className="mt-12 flex flex-wrap items-stretch justify-center gap-4">
          {points.map((point, i) => (
            <Reveal
              key={point}
              delay={i * 0.05}
              className="w-full md:w-[calc(50%-0.5rem)]"
            >
              <li className="flex h-full items-start gap-4 rounded-[1.5rem] border border-border bg-card p-6">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-4 w-4" />
                </span>
                <span className="leading-relaxed text-foreground">{point}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}