import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import CreatorEarn from "@/components/site/creators/CreatorEarn";
import CreatorSteps from "@/components/site/creators/CreatorSteps";
import CreatorBuilt from "@/components/site/creators/CreatorBuilt";
import CreatorTakes from "@/components/site/creators/CreatorTakes";
import CreatorFaq from "@/components/site/creators/CreatorFaq";
import FinalCta from "@/components/site/FinalCta";

export default function ForCreators() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("pages.creators.eyebrow")}
        title={t("pages.creators.title")}
        intro={t("pages.creators.intro")}
      >
        <Link
          to="/contact"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:mt-8 sm:w-auto sm:px-7 sm:py-3.5"
        >
          {t("common.startCreating")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <CreatorEarn />
      <CreatorSteps />
      <CreatorBuilt />
      <CreatorTakes />
      <CreatorFaq />
      <FinalCta />
    </>
  );
}