import React, { useState } from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import ComingSoonDialog from "./ComingSoonDialog";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/siteConfig";

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M16.36 12.72c.02 2.4 2.1 3.2 2.13 3.21-.02.05-.33 1.14-1.1 2.26-.66.97-1.35 1.94-2.44 1.96-1.07.02-1.41-.63-2.63-.63-1.22 0-1.6.61-2.61.65-1.05.04-1.85-1.05-2.52-2.02-1.37-1.98-2.42-5.6-1.01-8.04.7-1.21 1.95-1.98 3.31-2 1.03-.02 2 .69 2.63.69.63 0 1.81-.85 3.05-.73.52.02 1.98.21 2.92 1.58-.08.05-1.74 1.02-1.72 3.04M14.6 5.6c.56-.68.94-1.62.83-2.56-.82.03-1.81.55-2.39 1.22-.52.6-.98 1.56-.86 2.48.91.07 1.85-.46 2.42-1.14" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M3.6 2.4 13.9 12 3.6 21.6A1.4 1.4 0 0 1 3 20.5V3.5c0-.46.24-.85.6-1.1Z" fill="#1A7A6C" />
      <path d="M3.6 2.4 13.9 12l4.3-4.3-11.3-6.3a1.4 1.4 0 0 0-3.3 1Z" fill="#E05738" />
      <path d="M3.6 21.6 13.9 12l4.3 4.3-11.3 6.3a1.4 1.4 0 0 1-3.3-1Z" fill="#121212" opacity=".75" />
    </svg>
  );
}

function Badge({ href, onSoon, className, soon, mark, name }) {
  const body = (
    <>
      {mark}
      <span className="leading-tight">
        {!href && <span className="block text-[11px] uppercase tracking-wide text-muted-foreground">{soon}</span>}
        <span className="block font-semibold text-foreground">{name}</span>
      </span>
    </>
  );
  return href ? (
    <a href={href} className={className}>
      {body}
    </a>
  ) : (
    <button type="button" onClick={onSoon} className={className}>
      {body}
    </button>
  );
}

export default function StoreBadges({ className = "" }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const badge =
    "flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 text-left shadow-[0_10px_30px_-18px_rgba(18,18,18,0.35)] transition-transform hover:-translate-y-0.5";

  return (
    <>
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {/* Merkið opnar verslunina þegar appið er komið þangað; annars „væntanlegt" */}
        <Badge href={APP_STORE_URL} onSoon={() => setOpen(true)} className={badge} soon={t("common.comingSoon")} mark={<AppleMark />} name="App Store" />
        <Badge href={PLAY_STORE_URL} onSoon={() => setOpen(true)} className={badge} soon={t("common.comingSoon")} mark={<PlayMark />} name="Google Play" />
      </div>
      <ComingSoonDialog open={open} onOpenChange={setOpen} />
    </>
  );
}