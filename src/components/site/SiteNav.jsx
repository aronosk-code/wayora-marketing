import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import ComingSoonButton from "./ComingSoonButton";
import LogoMark from "./Logo";

const LINKS = [
  { to: "/how-it-works", key: "nav.howItWorks" },
  { to: "/pricing", key: "nav.pricing" },
  { to: "/for-creators", key: "nav.forCreators" },
  { to: "/about", key: "nav.about" },
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
  const { t } = useI18n();
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
          <ComingSoonButton
            size="sm"
            className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90"
          >
            {t("nav.getApp")}
          </ComingSoonButton>
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
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-heading text-xl text-foreground"
              >
                {t(l.key)}
              </Link>
            ))}
            <ComingSoonButton className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              {t("nav.getApp")}
            </ComingSoonButton>
          </div>
        </div>
      )}
    </header>
  );
}