import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/site/Reveal";

export default function CreatorTakes() {
  const { t } = useI18n();

  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl text-accent-foreground sm:text-4xl">
            {t("pages.creators.takesTitle")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-accent-foreground/85">
            {t("pages.creators.takesText")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}