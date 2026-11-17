import React, { useEffect, useState } from "react";
import { Clock, Headphones, Route } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import { APP_URL, FEATURED_TOUR_IDS, SUPABASE_KEY, SUPABASE_URL } from "@/lib/siteConfig";
import Reveal from "./Reveal";

// ── VALDAR FERÐIR ──
// Raunverulegar ferðir úr appinu (tour_v, aðeins birtar ferðir), með heiti á
// tungumáli gestsins. Engar stjörnur: einkunnir eru enn of fáar til að segja
// eitthvað. Hver ferð opnast í appinu. Bregðist sóknin hverfur hlutinn.
const COLUMNS =
  "id,title,location_name,country,duration_minutes,distance_km,story_count,thumb_url,cover_image,image_url";

async function loadTours(lang) {
  const ids = FEATURED_TOUR_IDS.map((id) => `"${id}"`).join(",");
  const select = `${COLUMNS},title_tr:translations->${lang}->>title`;
  const url = `${SUPABASE_URL}/rest/v1/tour_v?select=${encodeURIComponent(select)}&id=in.(${encodeURIComponent(ids)})&status=eq.published`;
  const res = await fetch(url, { headers: { apikey: SUPABASE_KEY } });
  if (!res.ok) throw new Error(`tours ${res.status}`);
  const rows = await res.json();
  const order = new Map(FEATURED_TOUR_IDS.map((id, i) => [id, i]));
  return rows.sort((a, b) => order.get(a.id) - order.get(b.id));
}

export function formatDuration(minutes, lang) {
  const m = Math.round(Number(minutes) || 0);
  if (!m) return null;
  const h = Math.floor(m / 60);
  const rest = m % 60;
  const unit = (value, u) =>
    new Intl.NumberFormat(lang, { style: "unit", unit: u, unitDisplay: "narrow" }).format(value);
  if (!h) return unit(rest, "minute");
  return rest ? `${unit(h, "hour")} ${unit(rest, "minute")}` : unit(h, "hour");
}

export function formatDistance(km, lang) {
  const n = Number(km);
  if (!n) return null;
  return new Intl.NumberFormat(lang, { style: "unit", unit: "kilometer", maximumFractionDigits: n < 10 ? 1 : 0 }).format(n);
}

export default function FeaturedTours() {
  const { t, lang } = useI18n();
  const [tours, setTours] = useState(null);

  useEffect(() => {
    let alive = true;
    loadTours(lang)
      .then((rows) => alive && setTours(rows))
      .catch(() => alive && setTours([]));
    return () => {
      alive = false;
    };
  }, [lang]);

  if (tours && tours.length === 0) return null;

  return (
    <section className="bg-card py-10 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">{t("tours.title")}</h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:mt-4 sm:text-lg">{t("tours.subtitle")}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {(tours || Array.from({ length: 6 }, (_, i) => ({ id: `s${i}`, skeleton: true }))).map((tour, i) =>
            tour.skeleton ? (
              <div key={tour.id} className="h-56 animate-pulse rounded-2xl bg-muted sm:h-80 sm:rounded-[1.75rem]" />
            ) : (
              <Reveal key={tour.id} delay={(i % 3) * 0.08}>
                <a
                  href={`${APP_URL}/tours/${tour.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_50px_-40px_rgba(18,18,18,0.45)] sm:rounded-[1.75rem]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted sm:aspect-auto sm:h-56">
                    <img
                      src={tour.thumb_url || tour.cover_image || tour.image_url}
                      alt={tour.title_tr || tour.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-3 transition-transform duration-500 group-hover:-translate-y-0.5 sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs sm:tracking-[0.18em]">
                      {[tour.location_name, tour.country].filter(Boolean).join(" · ")}
                    </p>
                    <h3 className="mt-1 font-heading text-xs leading-snug text-foreground sm:mt-2 sm:text-xl">
                      {tour.title_tr || tour.title}
                    </h3>
                    <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-0.5 pt-1.5 text-[10px] text-muted-foreground sm:gap-x-5 sm:gap-y-2 sm:pt-4 sm:text-sm">
                      {formatDuration(tour.duration_minutes, lang) && (
                        <span className="flex items-center gap-1 sm:gap-1.5">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          {formatDuration(tour.duration_minutes, lang)}
                        </span>
                      )}
                      {formatDistance(tour.distance_km, lang) && (
                        <span className="flex items-center gap-1 sm:gap-1.5">
                          <Route className="h-3 w-3 sm:h-4 sm:w-4" />
                          {formatDistance(tour.distance_km, lang)}
                        </span>
                      )}
                      {tour.story_count ? (
                        <span className="flex items-center gap-1 sm:gap-1.5">
                          <Headphones className="h-3 w-3 sm:h-4 sm:w-4" />
                          {tour.story_count}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </a>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
