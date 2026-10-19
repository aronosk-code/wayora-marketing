import React from "react";
import { motion } from "framer-motion";

export default function TravelerFigure({ beat }) {
  const walking = beat === 0;

  return (
    <motion.div
      className="relative"
      animate={walking ? { x: [-180, 0] } : { x: 0 }}
      transition={{ duration: 3.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        width="92"
        height="158"
        viewBox="0 0 100 170"
        fill="none"
        animate={walking ? { y: [0, -3, 0] } : { y: 0 }}
        transition={walking ? { duration: 0.55, repeat: Infinity } : { duration: 0.3 }}
      >
        <rect x="2" y="106" width="30" height="46" rx="7" fill="hsl(var(--accent))" />
        <path
          d="M14 106 v-8 h8 v8"
          stroke="hsl(var(--accent))"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <motion.rect
          x="46"
          y="116"
          width="11"
          height="44"
          rx="5.5"
          fill="hsl(var(--foreground))"
          style={{ transformBox: "fill-box", transformOrigin: "top center" }}
          animate={walking ? { rotate: [-13, 13, -13] } : { rotate: 0 }}
          transition={walking ? { duration: 0.55, repeat: Infinity } : { duration: 0.3 }}
        />
        <motion.rect
          x="62"
          y="116"
          width="11"
          height="44"
          rx="5.5"
          fill="hsl(var(--foreground))"
          style={{ transformBox: "fill-box", transformOrigin: "top center" }}
          animate={walking ? { rotate: [13, -13, 13] } : { rotate: 0 }}
          transition={walking ? { duration: 0.55, repeat: Infinity } : { duration: 0.3 }}
        />

        <rect x="42" y="58" width="38" height="66" rx="15" fill="hsl(var(--primary))" />
        <path
          d="M46 74 C 36 84, 30 92, 26 101"
          stroke="hsl(var(--primary))"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <circle cx="61" cy="40" r="16" fill="hsl(var(--foreground))" />
      </motion.svg>
    </motion.div>
  );
}