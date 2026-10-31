import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import LegalContent from "@/components/site/LegalContent";
import legal from "@/lib/i18n/legal/index";
import { COMPANY, CONTACT_EMAIL } from "@/lib/siteConfig";

export default function Terms() {
  const { t, lang } = useI18n();
  const content = legal[lang] || legal.en;

  return (
    <>
      <PageHero eyebrow={t("footer.legal")} title={t("pages.termsTitle")} />
      <LegalContent
        updated={content.updated}
        sections={content.terms}
        contactEmail={CONTACT_EMAIL}
        questionsTitle={content.questionsTitle}
        questionsText={content.questionsText}
        company={COMPANY}
        companyIdLabel={content.companyId}
        companyVatLabel={content.companyVat}
      />
    </>
  );
}