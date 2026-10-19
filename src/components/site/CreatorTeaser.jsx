import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";

export default function CreatorTeaser() {
  const { t } = useI18n();

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-accent px-6 py-10 sm:rounded-[2.5rem] sm:px-14 sm:py-16 lg:px-20">
            <div className="max-w-2xl">
              <h2 className="font-heading text-2xl text-accent-foreground sm:text-4xl lg:text-5xl">
                {t("creatorTeaser.title")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-accent-foreground/85 sm:mt-5 sm:text-lg">
                {t("creatorTeaser.text")}
              </p>
              <Link
                to="/for-creators"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:mt-9 sm:px-7 sm:py-3.5"
              >
                {t("creatorTeaser.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}