import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n/LanguageContext";
import LogoMark from "./Logo";

export default function SiteFooter() {
  const { t } = useI18n();

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
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <span className="font-heading text-3xl font-semibold text-foreground">
                Wayora
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="hidden lg:block">
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

        <p className="mt-14 border-t border-border pt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Wayora. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}