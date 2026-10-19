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
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t("knows.title")}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{t("knows.subtitle")}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <div className="h-full rounded-[1.75rem] border border-border bg-card p-8 shadow-[0_20px_50px_-40px_rgba(18,18,18,0.45)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-heading text-2xl text-foreground">
                  {t(`knows.${key}.title`)}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {t(`knows.${key}.text`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}