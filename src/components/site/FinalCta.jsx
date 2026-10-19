import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";
import StoreBadges from "./StoreBadges";

export default function FinalCta() {
  const { t } = useI18n();

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t("finalCta.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            {t("finalCta.subtitle")}
          </p>
          <div className="mt-10 flex justify-center">
            <StoreBadges className="justify-center" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}