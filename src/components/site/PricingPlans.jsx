import React from "react";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";

export default function PricingPlans() {
  const { t } = useI18n();
  const plans = t("pricing.plans") || [];

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6 xl:grid-cols-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`flex h-full flex-col rounded-xl border bg-card p-3.5 transition-transform sm:rounded-2xl sm:p-5 md:rounded-[1.75rem] md:p-8 ${
            plan.popular
              ? "border-primary shadow-[0_30px_60px_-40px_rgba(224,87,56,0.65)] xl:-translate-y-3"
              : "border-border shadow-[0_20px_50px_-45px_rgba(18,18,18,0.45)]"
          }`}
        >
          <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <h3 className="font-heading text-base text-foreground sm:text-xl md:text-2xl">
              {plan.name}
            </h3>
            {plan.popular && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary sm:px-3 sm:py-1 sm:text-[11px]">
                {t("common.mostPopular")}
              </span>
            )}
          </div>

          <p className="mt-3 flex items-baseline gap-1 sm:mt-4 md:mt-6">
            <span className="font-heading text-2xl text-foreground sm:text-3xl md:text-4xl">
              {plan.price}
            </span>
            {plan.period && (
              <span className="text-xs text-muted-foreground sm:text-sm">{plan.period}</span>
            )}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm md:mt-3 md:min-h-[3rem]">
            {plan.tagline}
          </p>

          <ul className="mt-3 flex-1 space-y-1.5 border-t border-border pt-3 sm:mt-4 sm:space-y-2 sm:pt-4 md:mt-6 md:space-y-3 md:pt-6">
            {plan.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-xs text-foreground sm:text-sm md:gap-3"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent sm:h-4 sm:w-4" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}