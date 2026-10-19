import React from "react";
import { Mic, MapPin, Rocket } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/site/Reveal";

const STEP_ICONS = [Mic, MapPin, Rocket];

export default function CreatorSteps() {
  const { t } = useI18n();
  const steps = t("pages.creators.steps") || [];

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t("pages.creators.stepsTitle")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = STEP_ICONS[i] || Mic;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-border bg-background p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {i + 1} / {steps.length}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}