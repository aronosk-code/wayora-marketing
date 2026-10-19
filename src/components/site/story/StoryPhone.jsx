import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Lock, Play } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageContext";

export default function StoryPhone({ beat }) {
  const { t } = useI18n();

  return (
    <div className="relative h-[392px] w-[190px] origin-top scale-[0.82] rounded-[2.4rem] border-[7px] border-foreground/85 bg-foreground/85 shadow-2xl sm:scale-100">
      <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-background">
        <div className="absolute left-1/2 top-2.5 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-foreground/85" />

        <AnimatePresence mode="wait">
          {beat < 3 ? (
            <motion.div
              key="lock"
              className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-secondary/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-x-0 top-9 text-center">
                <p className="font-heading text-4xl text-foreground">18:42</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t("story.day")}
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-8 flex justify-center">
                <Lock className="h-4 w-4 text-muted-foreground" />
              </div>

              <AnimatePresence>
                {beat >= 1 && (
                  <motion.div
                    key="notif"
                    initial={{ y: -70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, scale: beat === 2 ? 0.97 : 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className="absolute inset-x-3 top-[96px] rounded-2xl border border-border bg-card/95 p-3 shadow-lg"
                  >
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary">
                        <Bell className="h-3.5 w-3.5 text-primary-foreground" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          Wayora
                        </p>
                        <p className="text-xs font-semibold leading-snug text-foreground">
                          {t("story.notif")}
                        </p>
                        <p className="mt-0.5 text-[10px] text-muted-foreground">
                          {t("story.notifMeta")}
                        </p>
                      </div>
                    </div>

                    {beat === 2 && (
                      <motion.span
                        className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary"
                        initial={{ scale: 0.4, opacity: 0.8 }}
                        animate={{ scale: 1.7, opacity: 0 }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="tour"
              className="absolute inset-0 flex flex-col bg-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-4 pt-9">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {t("story.playing")}
                </p>
                <p className="mt-1 font-heading text-lg leading-tight text-foreground">
                  {t("story.tourTitle")}
                </p>
                <p className="text-[10px] text-muted-foreground">{t("story.tourMeta")}</p>
              </div>

              <div className="relative mx-3 mt-3 flex-1 overflow-hidden rounded-xl bg-secondary/70">
                <svg viewBox="0 0 160 210" className="absolute inset-0 h-full w-full">
                  <motion.path
                    d="M28 180 C 62 152, 40 120, 82 98 S 128 64, 118 28"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.4, ease: "easeInOut" }}
                  />
                  <circle cx="28" cy="180" r="4" fill="hsl(var(--accent))" />
                  <circle cx="118" cy="28" r="4" fill="hsl(var(--primary))" />
                </svg>
              </div>

              <div className="flex items-center gap-3 px-4 py-4">
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Play className="h-4 w-4 text-primary-foreground" fill="currentColor" />
                  <motion.span
                    className="absolute inset-0 rounded-full border border-primary"
                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                  />
                </span>
                <div className="flex h-6 flex-1 items-center gap-1">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1 rounded-full bg-primary/70"
                      animate={{ height: [5, 15, 8, 18, 6] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        delay: i * 0.09,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}