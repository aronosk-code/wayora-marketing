import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n/LanguageContext";
import LogoMark from "@/components/site/Logo";

// Síða sem er ekki til — í útliti vefsins, með leið heim
export default function PageNotFound() {
  const { t } = useI18n();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="max-w-md text-center">
        <LogoMark className="mx-auto h-12 w-12" />
        <p className="mt-6 font-heading text-6xl text-muted-foreground/40">404</p>
        <h1 className="mt-3 font-heading text-2xl text-foreground">{t("notFound.title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("notFound.text")}</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
        >
          {t("notFound.home")}
        </Link>
      </div>
    </div>
  );
}
