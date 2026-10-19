import React from "react";
import { Mic, MapPin, Rocket } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/site/Reveal";

const STEP_ICONS = [Mic, MapPin, Rocket];

export default function CreatorSteps() {
  const { t } = useI18n();
  const steps = t("pages.creators.steps") || [];

  return (
    <section className="bg-card py-10 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
            {t("pages.creators.stepsTitle")}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = STEP_ICONS[i] || Mic;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-4 sm:rounded-[1.75rem] sm:p-8">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </span>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:mt-6 sm:text-xs">
                    {i + 1} / {steps.length}
                  </p>
                  <h3 className="mt-1.5 font-heading text-lg text-foreground sm:mt-2 sm:text-2xl">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}