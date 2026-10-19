import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";
import PricingPlans from "./PricingPlans";

export default function PricingSection() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
            {t("pricing.title")}
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:mt-4 sm:text-lg">
            {t("pricing.subtitle")}
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">{t("common.firstTourFree")}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 sm:mt-14">
          <PricingPlans />
        </Reveal>
      </div>
    </section>
  );
}