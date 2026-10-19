import React from "react";
import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { t } = useI18n();
  const items = t("testimonials.items") || [];

  return (
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t("testimonials.title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-8 shadow-[0_20px_50px_-45px_rgba(18,18,18,0.45)]">
                <Quote className="h-7 w-7 text-primary/40" />
                <blockquote className="mt-5 flex-1 font-heading text-xl leading-snug text-foreground">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
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