import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";

export default function Privacy() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t("footer.legal")} title={t("pages.privacyTitle")} />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          <p className="text-sm text-muted-foreground">{t("pages.updated")}</p>

          <div>
            <h2 className="font-heading text-2xl text-foreground">What we collect</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              When you use Wayora we collect the account details you give us, the tours you play,
              and the approximate location needed to trigger each story. If you send us a message
              through this site, we store the name, email address and message you provide.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground">How we use it</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Location is used only to decide which story to play, in the moment. We use your
              account and listening history to run your subscription and to pay creators for the
              stories that were heard. We do not sell personal data.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground">Storage and your choices</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Data is stored securely and kept only as long as needed to provide the service. You
              can ask us to access, correct or delete your data at any time by writing to us through
              the contact page.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground">Contact</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Questions about this policy can be sent through our contact page and we will respond
              as soon as we can.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}