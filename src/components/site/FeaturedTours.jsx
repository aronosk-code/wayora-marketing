import React from "react";
import { Clock, Route, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import { TOURS } from "@/lib/siteConfig";
import Reveal from "./Reveal";

const TITLES = {
  "south-coast": "South Coast Golden Hour",
  canals: "Canals & Courtyards",
  alpine: "Alpine Passes Drive",
  harbour: "Harbour & Hot Springs",
  bridges: "Old Streets & Bridges",
  cliffs: "Cliffs & Coves Walk",
};

export default function FeaturedTours() {
  const { t } = useI18n();

  return (
    <section className="bg-card py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
            {t("tours.title")}
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:mt-4 sm:text-lg">
            {t("tours.subtitle")}
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {TOURS.map((tour, i) => (
            <Reveal key={tour.id} delay={(i % 3) * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_50px_-40px_rgba(18,18,18,0.45)] sm:rounded-[1.75rem]">
                <div className="relative h-24 overflow-hidden sm:h-56">
                  <img
                    src={tour.image}
                    alt={TITLES[tour.id]}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-2.5 transition-transform duration-500 group-hover:-translate-y-0.5 sm:p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs sm:tracking-[0.18em]">
                    {tour.city}
                  </p>
                  <h3 className="mt-1 font-heading text-xs leading-snug text-foreground sm:mt-2 sm:text-xl">
                    {TITLES[tour.id]}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-muted-foreground sm:mt-4 sm:gap-x-5 sm:gap-y-2 sm:text-sm">
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <Route className="h-3 w-3 sm:h-4 sm:w-4" />
                      {tour.distance}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <Star className="h-3 w-3 fill-primary text-primary sm:h-4 sm:w-4" />
                      {tour.rating}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}