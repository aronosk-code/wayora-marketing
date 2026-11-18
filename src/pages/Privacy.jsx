import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import LegalContent from "@/components/site/LegalContent";
import legal from "@/lib/i18n/legal/index";

export default function Privacy() {
  const { t, lang } = useI18n();
  const content = legal[lang] || legal.en;

  return (
    <>
      <PageHero eyebrow={t("footer.legal")} title={t("pages.privacyTitle")} />
      <LegalContent
        updated={content.updated}
        sections={content.privacy}
        contactEmail="support@wayoratour.com"
        questionsTitle={content.questionsTitle}
        questionsText={content.questionsText}
      />
    </>
  );
}