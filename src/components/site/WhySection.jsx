import React from "react";
import { Navigation, WifiOff, Users, Car, Languages, Coins } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";

const ICONS = [Navigation, WifiOff, Users, Car, Languages, Coins];

export default function WhySection() {
  const { t } = useI18n();
  const points = t("why.points") || [];

  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
            {t("why.title")}
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-4 sm:mt-12 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-3">
          {points.map((p, i) => {
            const Icon = ICONS[i] || Navigation;
            return (
              <Reveal key={p} delay={i * 0.06}>
                <div className="flex flex-col gap-2 border-t border-border pt-3.5 sm:flex-row sm:items-start sm:gap-4 sm:pt-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-10 sm:w-10 sm:rounded-xl">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <p className="text-xs font-medium leading-snug text-foreground sm:pt-1.5 sm:text-base">
                    {p}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}