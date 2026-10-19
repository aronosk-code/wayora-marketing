import React from "react";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";

export default function PricingPlans() {
  const { t } = useI18n();
  const plans = t("pricing.plans") || [];

  return (
    <div className="grid gap-3 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`flex h-full flex-col rounded-2xl border bg-card p-5 transition-transform sm:rounded-[1.75rem] sm:p-8 ${
            plan.popular
              ? "border-primary shadow-[0_30px_60px_-40px_rgba(224,87,56,0.65)] xl:-translate-y-3"
              : "border-border shadow-[0_20px_50px_-45px_rgba(18,18,18,0.45)]"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-heading text-xl text-foreground sm:text-2xl">{plan.name}</h3>
            {plan.popular && (
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                {t("common.mostPopular")}
              </span>
            )}
          </div>

          <p className="mt-4 flex items-baseline gap-1 sm:mt-6">
            <span className="font-heading text-3xl text-foreground sm:text-4xl">{plan.price}</span>
            {plan.period && (
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            )}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:min-h-[3rem]">
            {plan.tagline}
          </p>

          <ul className="mt-4 flex-1 space-y-2 border-t border-border pt-4 sm:mt-6 sm:space-y-3 sm:pt-6">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}