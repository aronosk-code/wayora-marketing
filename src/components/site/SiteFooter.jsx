import React from "react";
import { Link } from "react-router-dom";
import { useI18n, LANGUAGES } from "@/lib/i18n/LanguageContext";

export default function SiteFooter() {
  const { t, lang, setLang } = useI18n();

  const columns = [
    {
      title: t("footer.product"),
      links: [
        { to: "/how-it-works", label: t("nav.howItWorks") },
        { to: "/pricing", label: t("nav.pricing") },
        { to: "/for-creators", label: t("nav.forCreators") },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { to: "/about", label: t("nav.about") },
        { to: "/contact", label: t("nav.contact") },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { to: "/privacy", label: t("pages.privacyTitle") },
        { to: "/terms", label: t("pages.termsTitle") },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-heading text-3xl font-semibold text-foreground">
              Wayora
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
            {t("footer.language")}
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            {LANGUAGES.map((l, i) => (
              <li key={l.code} className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`text-sm transition-colors ${
                    lang === l.code
                      ? "font-semibold text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </button>
                {i < LANGUAGES.length - 1 && (
                  <span className="text-border" aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Wayora. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}