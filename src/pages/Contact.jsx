import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { SUPABASE_KEY, SUPABASE_URL } from "@/lib/siteConfig";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";

export default function Contact() {
  const { t, lang } = useI18n();
  // website: falinn reitur sem aðeins vélmenni fylla út
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("sending");
    try {
      // Skilaboðin fara í bakenda appsins (fallið contactMessage), sem vistar
      // þau og sendir eigandanum tölvupóst
      const res = await fetch(`${SUPABASE_URL}/functions/v1/contactMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_KEY },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: form.website,
          language: lang,
          page: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(`contact ${res.status}`);
      setForm({ name: "", email: "", message: "", website: "" });
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(t("pages.formError"));
    }
  };

  return (
    <>
      <PageHero
        eyebrow={t("nav.contact")}
        intro={t("pages.contactIntro")}
      />

      <section className="bg-background py-10 sm:py-20">
        <div className="mx-auto max-w-2xl px-6">
          {status === "sent" ? (
            <div className="rounded-2xl border border-border bg-card p-7 text-center sm:rounded-[1.75rem] sm:p-10">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Check className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-heading text-2xl text-foreground">
                {t("pages.sentTitle")}
              </h2>
              <p className="mt-3 text-muted-foreground">{t("pages.sentText")}</p>
              <Button
                variant="outline"
                onClick={() => setStatus("idle")}
                className="mt-8 rounded-full border-border px-6"
              >
                {t("pages.sendAnother")}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-5 sm:rounded-[1.75rem] sm:p-10"
            >
              <div className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("pages.name")}</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    required
                    className="h-12 rounded-xl border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("pages.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    required
                    className="h-12 rounded-xl border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("pages.message")}</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    required
                    rows={6}
                    className="rounded-xl border-border bg-background"
                  />
                </div>
                {/* Gildra fyrir vélmenni: falin fyrir fólki og skjálesurum */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} />
                </div>
              </div>

              {error && <p className="mt-5 text-sm text-destructive">{error}</p>}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 w-full rounded-full bg-primary py-6 text-primary-foreground hover:bg-primary/90"
              >
                {status === "sending" ? t("pages.sending") : t("pages.send")}
              </Button>
            </form>
          )}

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t("pages.help")}{" "}
            <Link to="/how-it-works" className="font-medium text-primary hover:underline">
              {t("nav.howItWorks")}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}