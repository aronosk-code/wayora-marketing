import React from "react";
import { Link } from "react-router-dom";
import { Mic, MapPin, Upload, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import FinalCta from "@/components/site/FinalCta";

const STEP_ICONS = [Mic, MapPin, Upload];

export default function ForCreators() {
  const { t } = useI18n();
  const steps = t("pages.creatorsSteps") || [];

  return (
    <>
      <PageHero
        eyebrow={t("nav.forCreators")}
        title={t("pages.creatorsTitle")}
        intro={t("pages.creatorsIntro")}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => {
              const Icon = STEP_ICONS[i] || Mic;
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="h-full rounded-[1.75rem] border border-border bg-card p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {i + 1} / 3
                    </p>
                    <h2 className="mt-2 font-heading text-2xl text-foreground">{s.title}</h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-heading text-3xl text-accent-foreground sm:text-4xl">
                {t("pages.earnTitle")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-foreground/85">
                {t("pages.earnText")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl text-accent-foreground sm:text-4xl">
                {t("pages.studioTitle")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-foreground/85">
                {t("pages.studioText")}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t("common.startCreating")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}