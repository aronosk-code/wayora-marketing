import React from "react";

function Paragraph({ item, fill }) {
  if (typeof item === "string") {
    return (
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{fill(item)}</p>
    );
  }
  return (
    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
      {item.label && <span className="font-semibold text-foreground">{item.label} </span>}
      {fill(item.text)}
    </p>
  );
}

export default function LegalContent({
  updated,
  sections,
  contactEmail,
  questionsTitle,
  questionsText,
  company,
  companyIdLabel,
  companyVatLabel,
}) {
  const [beforeEmail, afterEmail] = (questionsText || "").split("{email}");
  const fill = (text) => (text || "").replace(/\{email\}/g, contactEmail || "");

  return (
    <section className="bg-background py-10 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm text-muted-foreground">{updated}</p>

        {company && (
          <div className="mt-4 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">{company.name}</p>
            {company.id && (
              <p>
                {companyIdLabel}: {company.id}
              </p>
            )}
            {company.address && <p>{company.address}</p>}
            {company.vat && (
              <p>
                {companyVatLabel}: {company.vat}
              </p>
            )}
          </div>
        )}

        <div className="mt-6 space-y-8 sm:mt-14 sm:space-y-14">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-heading text-xl text-foreground sm:text-3xl">{s.title}</h2>
              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {s.body.map((item, i) => (
                  <Paragraph key={i} item={item} fill={fill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {contactEmail && (
          <div className="mt-10 rounded-2xl border border-border bg-card p-5 sm:mt-16 sm:rounded-[1.75rem] sm:p-8">
            <h2 className="font-heading text-xl text-foreground sm:text-2xl">{questionsTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {beforeEmail}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium text-primary hover:underline"
              >
                {contactEmail}
              </a>
              {afterEmail}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}