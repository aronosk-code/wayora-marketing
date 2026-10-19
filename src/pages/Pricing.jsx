import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import PricingPlans from "@/components/site/PricingPlans";
import PricingTable from "@/components/site/PricingTable";
import FaqAccordion from "@/components/site/FaqAccordion";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/site/FinalCta";

export default function Pricing() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        compact
        eyebrow={t("pricing.eyebrow")}
        title={t("pricing.title")}
        intro={t("pricing.subtitle")}
      />

      <section className="bg-background pb-12 pt-8 sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <PricingPlans />
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <PricingTable />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5 sm:mt-10 sm:rounded-[1.75rem] sm:p-8">
              <h2 className="font-heading text-xl text-foreground sm:text-2xl">
                {t("pricing.payoutsTitle")}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                {t("pricing.payoutsText")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqAccordion />
      <FinalCta />
    </>
  );
}