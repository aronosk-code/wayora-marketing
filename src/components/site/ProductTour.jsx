import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";
import PhoneDemo from "./PhoneDemo";

export default function ProductTour() {
  const { t } = useI18n();
  const steps = ["s1", "s2", "s3"];

  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
                {t("how.title")}
              </h2>
              <p className="mt-3 max-w-md text-base text-muted-foreground sm:mt-4 sm:text-lg">
                {t("how.subtitle")}
              </p>
            </Reveal>

            <ol className="mt-8 space-y-6 sm:mt-12 sm:space-y-10">
              {steps.map((s, i) => (
                <Reveal key={s} delay={i * 0.1}>
                  <li className="relative flex gap-4 pb-2 sm:gap-6">
                    {i < steps.length - 1 && (
                      <span
                        className="absolute left-[19px] top-12 h-full w-px bg-accent/30 sm:left-[23px] sm:top-14"
                        aria-hidden="true"
                      />
                    )}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-heading text-base text-accent-foreground sm:h-12 sm:w-12 sm:text-lg">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg text-foreground sm:text-2xl">
                        {t(`how.${s}.title`)}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2 sm:text-base">
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