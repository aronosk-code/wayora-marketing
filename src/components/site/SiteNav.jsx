import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Check, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useI18n, LANGUAGES } from "@/lib/i18n/LanguageContext";
import { useTheme } from "@/lib/useTheme";
import { Switch } from "@/components/ui/switch";
import { APP_URL } from "@/lib/siteConfig";
import LogoMark from "./Logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LINKS = [
  { to: "/how-it-works", key: "nav.howItWorks" },
  { to: "/pricing", key: "nav.pricing" },
  { to: "/for-creators", key: "nav.forCreators" },
  { to: "/about", key: "nav.about" },
];

const SECONDARY_LINKS = [
  { to: "/contact", key: "nav.contact" },
  { to: "/privacy", key: "pages.privacyTitle" },
  { to: "/terms", key: "pages.termsTitle" },
];

function Logo({ light }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-9 w-9" />
      <span
        className={`font-heading text-2xl font-semibold tracking-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        Wayora
      </span>
    </span>
  );
}

export default function SiteNav() {
  const { t, lang, setLang } = useI18n();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const overHero = location.pathname === "/" && !scrolled;
  const shell = overHero
    ? "bg-transparent"
    : "border-b border-border/70 bg-background/80 backdrop-blur-xl";
  const linkColor = overHero
    ? "text-white/85 hover:text-white"
    : "text-muted-foreground hover:text-foreground";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${shell}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" aria-label="Wayora home">
          <Logo light={overHero} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${linkColor}`}
            >
              {t(l.key)}
            </Link>
          ))}
          <Select value={lang} onValueChange={setLang}>
            <SelectTrigger
              aria-label={t("footer.language")}
              className={`h-9 w-auto gap-2 rounded-full border-transparent bg-transparent px-2 text-sm font-medium shadow-none focus:ring-0 focus:ring-offset-0 ${linkColor}`}
            >
              <Globe className="h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              {LANGUAGES.map((l) => (
                <SelectItem key={l.code} value={l.code}>
                  {l.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <a
            href={APP_URL}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("nav.getApp")}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className={`lg:hidden ${overHero ? "text-white" : "text-foreground"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-heading text-lg text-foreground"
              >
                {t(l.key)}
              </Link>
            ))}

            <div className="mt-1 flex flex-col gap-3 border-t border-border pt-4">
              {SECONDARY_LINKS.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-muted-foreground">
                  {t(l.key)}
                </Link>
              ))}
            </div>

            <div className="mt-1 border-t border-border pt-5">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <Globe className="h-3.5 w-3.5" />
                {t("footer.language")}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {LANGUAGES.map((l) => {
                  const active = lang === l.code;
                  return (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => setLang(l.code)}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card text-muted-foreground"
                      }`}
                    >
                      {l.label}
                      {active && <Check className="h-4 w-4 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                  {isDark ? <Moon className="h-4 w-4 text-accent" /> : <Sun className="h-4 w-4 text-accent" />}
                  {t("common.darkMode")}
                </span>
                <Switch checked={isDark} onCheckedChange={toggleTheme} />
              </div>
            </div>

            <a
              href={APP_URL}
              className="mt-1 w-full rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("nav.getApp")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}