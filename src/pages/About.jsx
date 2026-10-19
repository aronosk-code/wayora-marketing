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

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="max-w-3xl font-heading text-2xl leading-snug text-foreground sm:text-3xl">
              {t("pages.aboutMission")}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="border-t border-border pt-8">
                  <h2 className="font-heading text-2xl text-foreground">{b.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{b.text}</p>
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