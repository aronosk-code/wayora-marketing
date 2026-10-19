import React from "react";
import { motion } from "framer-motion";
import TravelerFigure from "./TravelerFigure";

export default function ArrivalsScene({ beat }) {
  const walking = beat === 0;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-secondary to-background">
      <div className="absolute inset-x-0 top-0 h-16 bg-card/70" />
      <div className="absolute left-[14%] top-[22%] h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute right-[16%] top-[10%] h-32 w-32 rounded-full bg-accent/10 blur-3xl" />

      <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-md bg-foreground/85 px-3 py-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-background">
          Arrivals
        </span>
      </div>

      <div className="absolute bottom-[22%] left-1/2 h-[54%] w-[46%] -translate-x-1/2 overflow-hidden rounded-t-2xl border border-border bg-card/40">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 border-r border-border bg-gradient-to-b from-card/80 to-card/30"
          animate={{ x: walking ? -16 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-card/80 to-card/30"
          animate={{ x: walking ? 16 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[22%] border-t border-border bg-background/70" />

      <div className="absolute bottom-[8%] left-[16%]">
        <motion.div
          className="absolute -bottom-1 left-1 h-3 w-20 rounded-full bg-foreground/10 blur-md"
          animate={{ opacity: walking ? [0.5, 0.9, 0.5] : 0.6 }}
          transition={{ duration: 0.6, repeat: walking ? Infinity : 0 }}
        />
        <TravelerFigure beat={beat} />
      </div>
    </div>
  );
}