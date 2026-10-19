import React from "react";
import { useI18n } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import LegalContent from "@/components/site/LegalContent";

const SECTIONS = [
  {
    title: "About these terms",
    body: [
      "These terms apply when you use Wayora, the audio tour app operated by Wayora in Iceland. By creating an account or using the app you agree to them. Questions: wayoraaa@gmail.com.",
    ],
  },
  {
    title: "Your account",
    body: [
      "You can browse without an account. To listen, save or create tours you need one. Keep your password to yourself; you are responsible for what happens in your account.",
      "You must be at least 13 years old, and old enough in your country to pay for things yourself if you get a plan.",
    ],
  },
  {
    title: "Plans and tips",
    body: [
      "Your first tour is free: every story in the first tour you play, once per account.",
      "After that you need a plan. Plans are monthly and include the number of stories each month shown in the app (Unlimited has no limit). A story counts the first time you play it in a billing month, and downloading a tour for offline use counts its stories too. Replays in the same month are free, and unused stories do not carry over.",
      "Plans renew automatically each month until you cancel. You can cancel at any time on the Plans page; you keep your plan until the end of the month you have paid for, and nothing more is charged. If you switch to a bigger plan, the difference is charged straight away.",
      "Prices are shown in the app before you pay and may change; a new price applies to new plans, and to an existing plan from its next renewal, and we will tell you before it does.",
      "Creators share part of plan revenue, split by how many of their stories subscribers played. Tips go in full to the tour's creator — Wayora takes no share of tips. Payments are processed by Stripe.",
      "Refunds: if a tour does not work or you were charged by mistake, write to wayoraaa@gmail.com within 14 days and we will put it right. Your statutory rights as a consumer are not affected. Because stories are digital content you can play immediately, you ask for access straight away when you get a plan: you confirm this before paying, and the 14-day right of withdrawal then ends once you start playing a story with your plan. Plans can be cancelled at any time as described above.",
    ],
  },
  {
    title: "Using Wayora safely",
    body: [
      "Wayora is made to be listened to, not watched. When driving, set everything up before you leave, keep your eyes on the road and obey traffic laws. Only touch the phone when it is safe and legal to do so — or let a passenger do it.",
      "Directions, distances and road information in the app are guidance only and can be wrong or out of date. Always follow road signs, local conditions, weather warnings and closures. Some places in tours may be dangerous or closed; you decide whether it is safe to go there.",
    ],
  },
  {
    title: "Creators",
    body: [
      "Creators on the Traveler or Unlimited plan can publish tours. You keep the rights to your content and give Wayora a licence to host, translate, voice with AI and offer it to listeners while it is published.",
      "You must have the rights to everything you publish (texts, recordings, photos, music) and your tours must be accurate, legal and safe. No hateful, misleading or dangerous content.",
      "Your share of plan revenue and tips is shown in the Studio and paid out to you. You cannot delete your account while earnings are still waiting to be paid out.",
      "We may take down a tour that breaks these terms or is reported, and close accounts that misuse Wayora.",
    ],
  },
  {
    title: "Liability",
    body: [
      "We work to keep Wayora available and correct, but cannot promise it will always work without interruption, for example without a mobile signal. Download tours before travelling to remote areas.",
      "To the extent the law allows, Wayora is not liable for indirect loss or for accidents, damage or fines that happen while travelling. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    title: "Ending and changes",
    body: [
      "You can stop using Wayora and delete your account at any time in Profile.",
      "We may update these terms. If a change matters, we will tell you in the app before it applies.",
      "These terms are governed by Icelandic law. Consumers keep the protection of the law where they live.",
    ],
  },
];

export default function Terms() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t("footer.legal")} title={t("pages.termsTitle")} />
      <LegalContent
        updated="Last updated 14 Oct 2026"
        sections={SECTIONS}
        contactEmail="wayoraaa@gmail.com"
      />
    </>
  );
}