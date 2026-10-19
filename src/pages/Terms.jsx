import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";

export default function Terms() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t("footer.legal")} title={t("pages.termsTitle")} />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          <p className="text-sm text-muted-foreground">{t("pages.updated")}</p>

          <div>
            <h2 className="font-heading text-2xl text-foreground">Using Wayora</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              You may use Wayora for personal travel and exploration. Keep your account details
              accurate and do not share your login. Always follow local road rules and keep your
              attention on the road; audio is a companion, not a substitute for driving safely.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground">Subscriptions</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Paid plans renew automatically until cancelled. You can cancel at any time and keep
              access until the end of the period you have paid for.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground">Creator content</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Creators keep ownership of the stories they record and grant Wayora a licence to
              distribute them in the app. Creators are paid a share of subscription revenue each
              time their story is heard, as described on our pricing page.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground">Changes</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We may update these terms as the service develops. Continued use after an update
              means you accept the revised terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}