import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";

const COLUMNS = ["free", "explorer", "traveler", "unlimited"];

export default function PricingTable() {
  const { t } = useI18n();
  const rows = t("pricing.rows") || [];
  const plans = t("pricing.plans") || [];
  const names = COLUMNS.map((key, i) => ({ key, name: plans[i]?.name || key }));

  return (
    <div className="overflow-x-auto rounded-[1.75rem] border border-border bg-card">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border">
            <th className="sticky left-0 bg-card px-6 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t("pricing.compareTitle")}
            </th>
            {names.map((c) => (
              <th
                key={c.key}
                className="px-6 py-5 font-heading text-lg font-semibold text-foreground"
              >
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-0">
              <th className="sticky left-0 bg-card px-6 py-4 text-sm font-medium text-foreground">
                {row.label}
              </th>
              {names.map((c) => (
                <td key={c.key} className="px-6 py-4 text-sm text-muted-foreground">
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