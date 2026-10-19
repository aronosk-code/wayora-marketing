import React from "react";
import { Mic, MapPin, Rocket } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/site/Reveal";

const STEP_ICONS = [Mic, MapPin, Rocket];

export default function CreatorSteps() {
  const { t } = useI18n();
  const steps = t("pages.creators.steps") || [];

  return (
    <section className="bg-card py-12 sm:py-24">
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
                <div className="h-full rounded-2xl border border-border bg-background p-5 sm:rounded-[1.75rem] sm:p-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:mt-6">
                    {i + 1} / {steps.length}
                  </p>
                  <h3 className="mt-2 font-heading text-xl text-foreground sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}