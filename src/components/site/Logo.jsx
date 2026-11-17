import React from "react";
import { Image } from "@/components/ui/image";

export const LOGO_URL =
  "/logo.png";

export default function LogoMark({ className = "h-9 w-9" }) {
  return (
    <Image
      src={LOGO_URL}
      alt=""
      className={`${className} shrink-0 overflow-hidden rounded-[22%]`}
    />
  );
}