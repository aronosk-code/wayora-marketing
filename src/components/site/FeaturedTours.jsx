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
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t("tours.title")}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{t("tours.subtitle")}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOURS.map((tour, i) => (
            <Reveal key={tour.id} delay={(i % 3) * 0.08}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_20px_50px_-40px_rgba(18,18,18,0.45)]">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={TITLES[tour.id]}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 transition-transform duration-500 group-hover:-translate-y-0.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {tour.city}
                  </p>
                  <h3 className="mt-2 font-heading text-xl text-foreground">{TITLES[tour.id]}</h3>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Route className="h-4 w-4" />
                      {tour.distance}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-primary text-primary" />
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