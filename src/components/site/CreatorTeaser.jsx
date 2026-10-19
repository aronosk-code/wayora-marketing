import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";

export default function CreatorTeaser() {
  const { t } = useI18n();

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-accent px-8 py-16 sm:px-14 lg:px-20">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl text-accent-foreground sm:text-4xl lg:text-5xl">
                {t("creatorTeaser.title")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-foreground/85">
                {t("creatorTeaser.text")}
              </p>
              <Link
                to="/for-creators"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
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