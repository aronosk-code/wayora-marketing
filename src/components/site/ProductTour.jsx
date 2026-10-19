import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";
import PhoneDemo from "./PhoneDemo";

export default function ProductTour() {
  const { t } = useI18n();
  const steps = ["s1", "s2", "s3"];

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
                {t("how.title")}
              </h2>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">{t("how.subtitle")}</p>
            </Reveal>

            <ol className="mt-12 space-y-10">
              {steps.map((s, i) => (
                <Reveal key={s} delay={i * 0.1}>
                  <li className="relative flex gap-6 pb-2">
                    {i < steps.length - 1 && (
                      <span
                        className="absolute left-[23px] top-14 h-full w-px bg-accent/30"
                        aria-hidden="true"
                      />
                    )}
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent font-heading text-lg text-accent-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl text-foreground">
                        {t(`how.${s}.title`)}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {t(`how.${s}.text`)}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.15}>
            <PhoneDemo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}