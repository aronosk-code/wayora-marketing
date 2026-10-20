import React from "react";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import { APP_URL, subscribeUrl } from "@/lib/siteConfig";

const PLAN_KEYS = ["free", "explorer", "traveler", "unlimited"];
const CREATOR_PLANS = ["traveler", "unlimited"];

export default function PricingPlans() {
  const { t } = useI18n();
  const plans = t("pricing.plans") || [];

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 xl:grid-cols-4">
        {plans.map((plan, i) => {
          const key = PLAN_KEYS[i] || plan.name;
          const isFree = key === "free";
          const isPrimary = !isFree && plan.popular;

          return (
            <div
              key={plan.name}
              className={`flex h-full flex-col rounded-xl border bg-card p-2.5 transition-transform sm:rounded-2xl sm:p-5 md:rounded-[1.75rem] md:p-8 ${
                plan.popular
                  ? "border-primary shadow-[0_30px_60px_-40px_rgba(224,87,56,0.65)] xl:-translate-y-3"
                  : "border-border shadow-[0_20px_50px_-45px_rgba(18,18,18,0.45)]"
              }`}
            >
              <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <h3 className="font-heading text-sm text-foreground sm:text-xl md:text-2xl">
                  {plan.name}
                </h3>
                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                  {plan.popular && (
                    <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-primary sm:px-3 sm:py-1 sm:text-[11px]">
                      {t("common.mostPopular")}
                    </span>
                  )}
                  {CREATOR_PLANS.includes(key) && (
                    <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-accent sm:px-3 sm:py-1 sm:text-[11px]">
                      {t("nav.forCreators")}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-2 flex items-baseline gap-1 sm:mt-4 md:mt-6">
                <span className="font-heading text-xl text-foreground sm:text-3xl md:text-4xl">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-[10px] text-muted-foreground sm:text-sm">{plan.period}</span>
                )}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:mt-2 sm:text-sm sm:leading-relaxed md:mt-3 md:min-h-[3rem]">
                {plan.tagline}
              </p>

              <ul className="mt-2 flex-1 space-y-1 border-t border-border pt-2 sm:mt-4 sm:space-y-2 sm:pt-4 md:mt-6 md:space-y-3 md:pt-6">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-1.5 text-[11px] leading-snug text-foreground sm:gap-2 sm:text-sm md:gap-3"
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent sm:h-4 sm:w-4" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={isFree ? APP_URL : subscribeUrl(key)}
                className={`mt-3 inline-flex w-full items-center justify-center rounded-full px-3 py-2 text-[11px] font-semibold transition-colors sm:mt-5 sm:px-4 sm:py-2.5 sm:text-sm ${
                  isPrimary
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {isFree ? t("nav.getApp") : t(`pricing.ctas.${key}`)}
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground sm:mt-6 sm:text-sm">
        {t("pricing.planNote")}
      </p>
    </div>
  );
}