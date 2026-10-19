import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";
import StoreBadges from "./StoreBadges";

export default function FinalCta() {
  const { t } = useI18n();

  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
            {t("finalCta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:mt-5 sm:text-lg">
            {t("finalCta.subtitle")}
          </p>
          <div className="mt-8 flex justify-center sm:mt-10">
            <StoreBadges className="justify-center" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}