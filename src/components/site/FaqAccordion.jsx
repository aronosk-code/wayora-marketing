import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n/LanguageContext";
import Reveal from "./Reveal";

export default function FaqAccordion() {
  const { t } = useI18n();
  const items = t("faq.items") || [];

  return (
    <section className="bg-background py-10 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-heading text-2xl text-foreground sm:text-4xl lg:text-5xl">
            {t("faq.title")}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 sm:mt-12">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-4 text-left font-heading text-base text-foreground hover:no-underline sm:py-6 sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground sm:pb-6 sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}