import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import LegalContent from "@/components/site/LegalContent";

const SECTIONS = [
  {
    title: "Who we are",
    body: [
      "Wayora is an audio tour app operated by Wayora, based in Iceland. We are responsible for the personal data described here. Contact us at wayoraaa@gmail.com.",
    ],
  },
  {
    title: "What we collect",
    body: [
      {
        label: "Account:",
        text: "your name, email address and password (passwords are stored by our hosting provider and never visible to us). If you sign in with Google, we receive your name and email from Google.",
      },
      {
        label: "Tour activity:",
        text: "tours you start, which stories you have heard, your progress, tours you save or download, reviews you write and reports you send.",
      },
      {
        label: "Payments:",
        text: "which plan you have, which stories your plan has opened and tips you give. Card details are handled by Stripe and never reach Wayora.",
      },
      {
        label: "Creators:",
        text: "your public profile (name, photo, bio and the other details you choose to add), your tours, recordings and drive routes, and your earnings.",
      },
      {
        label: "Location:",
        text: "while you use the map or a tour, the app uses your phone's location to show where you are and to start stories at the right place. Your live position is used on your phone; we store your tour progress, not a log of where you have been. For creators, the route of a recorded drive is saved with the tour.",
      },
    ],
  },
  {
    title: "Why we use it",
    body: [
      "To provide the app: your account, playing tours, counting the stories in your plan, saving your progress and downloads (contract).",
      "To take payments and pay creators their share, and to keep accounting records the law requires (contract and legal obligation). Creators' share of plan payments is split by how many of their stories each subscriber played, so we count that from your tour activity — creators only see the totals.",
      "To keep Wayora safe and working: preventing abuse, fixing problems and handling reports (legitimate interest).",
      "We do not sell your data and we do not use it for advertising.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "Base44 hosts the app, its database and accounts, and runs the AI features (story writing, translations and voices) through its AI providers.",
      "Stripe processes payments, subscriptions and refunds.",
      "Google Maps Platform answers place searches and calculates routes. MapTiler and OpenStreetMap provide the map images; your phone fetches them directly.",
      "These providers process data on our behalf. Some of them are outside the EEA; they use the safeguards the GDPR requires, such as standard contractual clauses.",
      "Creators see anonymous listening statistics for their own tours — never who listened.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep your data while you have an account. When you delete your account, your profile, saved tours, downloads, history, reviews and reports are deleted, and your Stripe customer record is removed.",
      "Records of payments and tips are kept as long as accounting law requires (in Iceland, seven years).",
      "Tours and recordings saved on your phone stay there until you remove them or delete your account.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can see and change your name and password in Profile, and delete your account there at any time.",
      "You also have the right to a copy of your data, to correct it, to object to its use and to ask us to restrict it. Write to wayoraaa@gmail.com and we will answer within one month.",
      "If you think we handle your data wrongly, you can complain to the Icelandic Data Protection Authority (Persónuvernd, personuvernd.is) or the authority where you live.",
    ],
  },
  {
    title: "On your phone",
    body: [
      "Wayora stores some things on your phone so it works without a connection: downloaded tours and their audio, your language, and whether you are signed in. We do not use advertising or tracking cookies.",
    ],
  },
  {
    title: "Changes",
    body: [
      "If we change this policy in a way that matters, we will tell you in the app. The date at the top shows the latest version.",
    ],
  },
];

export default function Privacy() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t("footer.legal")} title={t("pages.privacyTitle")} />
      <LegalContent
        updated="Last updated 14 Oct 2026"
        sections={SECTIONS}
        contactEmail="wayoraaa@gmail.com"
      />
    </>
  );
}