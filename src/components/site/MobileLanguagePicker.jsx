import React, { useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useI18n, LANGUAGES } from "@/lib/i18n/LanguageContext";

export default function MobileLanguagePicker() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Globe className="h-4 w-4 text-accent" />
          {t("footer.language")}
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          {current.label}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      {open && (
        <div className="border-t border-border p-1.5">
          {LANGUAGES.map((l) => {
            const active = lang === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  active ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
                {active && <Check className="h-4 w-4 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}