import React from "react";

export default function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#1F7264" />
      <circle cx="16" cy="16" r="9.6" fill="none" stroke="#FFFFFF" strokeWidth="1.7" />
      <path d="M16 7.6 L21.6 16 L16 24.4 L10.4 16 Z" fill="#FFFFFF" />
    </svg>
  );
}