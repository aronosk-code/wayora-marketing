import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";

const COLUMNS = ["free", "explorer", "traveler", "unlimited"];

export default function PricingTable() {
  const { t } = useI18n();
  const rows = t("pricing.rows") || [];
  const plans = t("pricing.plans") || [];
  const names = COLUMNS.map((key, i) => ({ key, name: plans[i]?.name || key }));

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card sm:rounded-[1.75rem]">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border">
            <th className="sticky left-0 bg-card px-4 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:px-6 sm:py-5">
              {t("pricing.compareTitle")}
            </th>
            {names.map((c) => (
              <th
                key={c.key}
                className="px-4 py-4 font-heading text-base font-semibold text-foreground sm:px-6 sm:py-5 sm:text-lg"
              >
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-0">
              <th className="sticky left-0 bg-card px-4 py-3 text-xs font-medium text-foreground sm:px-6 sm:py-4 sm:text-sm">
                {row.label}
              </th>
              {names.map((c) => (
                <td key={c.key} className="px-4 py-3 text-xs text-muted-foreground sm:px-6 sm:py-4 sm:text-sm">
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}