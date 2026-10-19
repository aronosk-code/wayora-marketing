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
        eyebrow={t("nav.pricing")}
        title={t("pricing.title")}
        intro={t("pricing.subtitle")}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <PricingPlans />
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <PricingTable />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-[1.75rem] border border-border bg-card p-8">
              <h2 className="font-heading text-2xl text-foreground">
                {t("pricing.payoutsTitle")}
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
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