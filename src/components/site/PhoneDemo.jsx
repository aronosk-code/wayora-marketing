import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Play, Navigation } from "lucide-react";

const CYCLE = 3800;

export default function PhoneDemo() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % 3), CYCLE);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto w-[264px] rounded-[2.75rem] border border-border bg-foreground p-2.5 shadow-[0_40px_80px_-50px_rgba(18,18,18,0.6)]">
      <div className="relative h-[520px] overflow-hidden rounded-[2.25rem] bg-secondary">
        {/* Map canvas */}
        <svg viewBox="0 0 260 520" className="absolute inset-0 h-full w-full">
          <rect width="260" height="520" fill="#EAF7F2" />
          <g stroke="#D8ECE5" strokeWidth="10" fill="none" strokeLinecap="round">
            <path d="M-10 120 L270 96" />
            <path d="M-10 300 L270 340" />
            <path d="M60 -10 L96 530" />
            <path d="M200 -10 L176 530" />
          </g>
          <g stroke="#C9E2D9" strokeWidth="4" fill="none" strokeLinecap="round">
            <path d="M-10 220 L270 200" />
            <path d="M130 -10 L140 530" />
          </g>

          <motion.path
            d="M40 460 C 80 400, 70 340, 118 300 S 190 200, 168 120"
            fill="none"
            stroke="#187160"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: stage >= 1 ? 1 : 0.15 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          {[
            { x: 40, y: 460 },
            { x: 118, y: 300 },
            { x: 168, y: 120 },
          ].map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="7"
              fill={i === 0 ? "#187160" : "#3AAE8F"}
              stroke="#FFFFFF"
              strokeWidth="3"
              animate={{ scale: stage > i ? [1, 1.25, 1] : 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.4 }}
            />
          ))}
        </svg>

        {/* Top pill */}
        <div className="absolute left-4 right-4 top-4 flex items-center gap-2 rounded-full bg-card/95 px-4 py-2.5 shadow-sm backdrop-blur">
          <Navigation className="h-4 w-4 text-accent" />
          <span className="text-xs font-semibold text-foreground">
            {stage === 0 ? "Nearby tours" : stage === 1 ? "South Coast · 2h 15m" : "Now playing"}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {stage === 1 && (
            <motion.div
              key="card"
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 bottom-6 rounded-3xl bg-card p-5 shadow-[0_20px_40px_-24px_rgba(18,18,18,0.5)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                <MapPin className="h-4 w-4" />
              </span>
              <p className="mt-3 font-heading text-lg text-foreground">South Coast</p>
              <p className="text-xs text-muted-foreground">12 stories · 128 km</p>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div
              key="play"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-x-4 bottom-6 rounded-3xl bg-card p-5 shadow-[0_20px_40px_-24px_rgba(18,18,18,0.5)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Play className="h-5 w-5" />
                </span>
                <div className="flex h-10 flex-1 items-end gap-1">
                  {[10, 22, 34, 18, 30, 14, 26, 20, 32, 16].map((h, i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 flex-1 rounded-full bg-accent/70"
                      animate={{ height: [h, h + 12, h] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        delay: i * 0.08,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Story 1 of 12 · playing</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-foreground/20" />
      </div>
    </div>
  );
}