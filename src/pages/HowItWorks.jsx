import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import ProductTour from "@/components/site/ProductTour";
import FaqAccordion from "@/components/site/FaqAccordion";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/site/FinalCta";

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("nav.howItWorks")}
        title={t("pages.howTitle")}
        intro={t("pages.howIntro")}
      />

      <ProductTour />

      <section className="bg-background py-12 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-heading text-2xl text-foreground sm:text-4xl">
                {t("pages.feelTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
                {t("pages.feelText")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-2xl text-foreground sm:text-4xl">
                {t("pages.offlineTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
                {t("pages.offlineText")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqAccordion />
      <FinalCta />
    </>
  );
}