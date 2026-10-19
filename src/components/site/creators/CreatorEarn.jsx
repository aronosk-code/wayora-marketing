import React from "react";
import { Coins, Heart, Percent } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/site/Reveal";

const ICONS = [Coins, Heart, Percent];

export default function CreatorEarn() {
  const { t } = useI18n();
  const items = t("pages.creators.earn") || [];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t("pages.creators.earnTitle")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i] || Coins;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-heading text-xl leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}