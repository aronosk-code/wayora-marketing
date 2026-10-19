import React from "react";
import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { t } = useI18n();
  const items = t("testimonials.items") || [];

  return (
    <section className="bg-card py-10 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
            {t("testimonials.title")}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-[0_20px_50px_-45px_rgba(18,18,18,0.45)] sm:rounded-[1.75rem] sm:p-8">
                <Quote className="h-6 w-6 text-primary/40 sm:h-7 sm:w-7" />
                <blockquote className="mt-3 flex-1 font-heading text-base leading-snug text-foreground sm:mt-5 sm:text-xl">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground sm:mt-6 sm:pt-5">
                  <span className="block font-semibold text-foreground">{item.name}</span>
                  {item.place}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}