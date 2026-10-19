import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/LanguageContext";
import { HERO_POSTER, HERO_VIDEO_URL } from "@/lib/siteConfig";
import ComingSoonButton from "./ComingSoonButton";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-[94vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        {HERO_VIDEO_URL ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        ) : (
          <motion.img
            src={HERO_POSTER}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 26, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75"
        >
          {t("hero.eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 max-w-4xl font-heading text-4xl leading-[1.05] text-white sm:text-5xl lg:text-7xl"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <ComingSoonButton className="rounded-full bg-primary px-7 text-primary-foreground shadow-lg shadow-black/20 hover:bg-primary/90">
            {t("common.getTheApp")}
          </ComingSoonButton>
          <Link
            to="/how-it-works"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {t("common.seeHowItWorks")}
          </Link>
        </motion.div>

        <p className="mt-9 text-sm text-white/70">{t("common.trust")}</p>
      </div>
    </section>
  );
}