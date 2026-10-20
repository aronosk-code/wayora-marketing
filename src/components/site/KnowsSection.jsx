import React from "react";
import { Car, Footprints, Eye } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";

export default function KnowsSection() {
  const { t } = useI18n();

  const cards = [
    { icon: Car, key: "drive" },
    { icon: Footprints, key: "walk" },
    { icon: Eye, key: "eyes" },
  ];

  return (
    <section className="bg-background py-10 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-xl text-foreground sm:text-3xl lg:text-4xl">
            {t("knows.title")}
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:mt-4 sm:text-lg">
            {t("knows.subtitle")}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[0_20px_50px_-40px_rgba(18,18,18,0.45)] sm:block sm:rounded-[1.75rem] sm:p-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg text-foreground sm:mt-6 sm:text-2xl">
                    {t(`knows.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                    {t(`knows.${key}.text`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}