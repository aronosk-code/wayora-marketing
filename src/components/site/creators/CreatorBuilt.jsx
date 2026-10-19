import React from "react";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/site/Reveal";

export default function CreatorBuilt() {
  const { t } = useI18n();
  const points = t("pages.creators.built") || [];

  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
            {t("pages.creators.builtTitle")}
          </h2>
        </Reveal>

        <ul className="mt-8 flex flex-wrap items-stretch justify-center gap-3 sm:mt-12 sm:gap-4">
          {points.map((point, i) => (
            <Reveal
              key={point}
              delay={i * 0.05}
              className="w-full md:w-[calc(50%_-_0.5rem)]"
            >
              <li className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-4 sm:gap-4 sm:rounded-[1.5rem] sm:p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent sm:h-7 sm:w-7">
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <span className="text-sm leading-relaxed text-foreground sm:text-base">{point}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}