import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/site/FinalCta";

export default function About() {
  const { t } = useI18n();

  const blocks = [
    { title: t("pages.aboutGpsTitle"), text: t("pages.aboutGpsText") },
    { title: t("pages.aboutVoicesTitle"), text: t("pages.aboutVoicesText") },
  ];

  return (
    <>
      <PageHero eyebrow={t("nav.about")} title={t("pages.aboutTitle")} />

      <section className="bg-background py-10 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="max-w-3xl font-heading text-xl leading-snug text-foreground sm:text-3xl">
              {t("pages.aboutMission")}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:mt-16 sm:gap-10 md:grid-cols-2">
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="border-t border-border pt-6 sm:pt-8">
                  <h2 className="font-heading text-xl text-foreground sm:text-2xl">{b.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}