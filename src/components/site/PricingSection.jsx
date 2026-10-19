import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";
import PricingPlans from "./PricingPlans";

export default function PricingSection() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{t("pricing.subtitle")}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <PricingPlans />
        </Reveal>
      </div>
    </section>
  );
}