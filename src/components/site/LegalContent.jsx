import React from "react";

function Paragraph({ item }) {
  if (typeof item === "string") {
    return <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item}</p>;
  }
  return (
    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
      {item.label && <span className="font-semibold text-foreground">{item.label} </span>}
      {item.text}
    </p>
  );
}

export default function LegalContent({
  updated,
  sections,
  contactEmail,
  questionsTitle,
  questionsText,
}) {
  const [beforeEmail, afterEmail] = (questionsText || "").split("{email}");

  return (
    <section className="bg-background py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm text-muted-foreground">{updated}</p>

        <div className="mt-8 space-y-10 sm:mt-14 sm:space-y-14">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-heading text-xl text-foreground sm:text-3xl">{s.title}</h2>
              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {s.body.map((item, i) => (
                  <Paragraph key={i} item={item} />
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