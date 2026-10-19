import React from "react";

function Paragraph({ item }) {
  if (typeof item === "string") {
    return <p className="leading-relaxed text-muted-foreground">{item}</p>;
  }
  return (
    <p className="leading-relaxed text-muted-foreground">
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
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm text-muted-foreground">{updated}</p>

        <div className="mt-14 space-y-14">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-heading text-2xl text-foreground sm:text-3xl">{s.title}</h2>
              <div className="mt-5 space-y-4">
                {s.body.map((item, i) => (
                  <Paragraph key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {contactEmail && (
          <div className="mt-16 rounded-[1.75rem] border border-border bg-card p-8">
            <h2 className="font-heading text-2xl text-foreground">{questionsTitle}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
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