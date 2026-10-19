import React from "react";
import { Navigation, WifiOff, Users, Car, Languages, Coins } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";

const ICONS = [Navigation, WifiOff, Users, Car, Languages, Coins];

export default function WhySection() {
  const { t } = useI18n();
  const points = t("why.points") || [];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t("why.title")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => {
            const Icon = ICONS[i] || Navigation;
            return (
              <Reveal key={p} delay={i * 0.06}>
                <div className="flex items-start gap-4 border-t border-border pt-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="pt-1.5 font-medium text-foreground">{p}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}