import React from "react";
import { Coins, Heart, Percent } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/site/Reveal";

const ICONS = [Coins, Heart, Percent];

export default function CreatorEarn() {
  const { t } = useI18n();
  const items = t("pages.creators.earn") || [];

  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
            {t("pages.creators.earnTitle")}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i] || Coins;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 sm:rounded-[1.75rem] sm:p-8">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="mt-3 font-heading text-base leading-snug text-foreground sm:mt-6 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}