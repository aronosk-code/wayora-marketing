import React from "react";
import { appLink } from "@/lib/getApp";

// „Sækja appið": verslun símans ef appið er komið þangað, annars vefappið
// (app.wayoratour.com) — sjá getApp.js
export default function GetAppButton({ className = "", children }) {
  return (
    <a href={appLink()} className={className}>
      {children}
    </a>
  );
}
