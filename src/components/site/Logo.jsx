import React from "react";
import { Image } from "@/components/ui/image";

export const LOGO_URL =
  "https://media.base44.com/images/public/6ad5627944e69b6847343e56/7b15f523a_apple-touch-icon.png";

export default function LogoMark({ className = "h-9 w-9" }) {
  return (
    <Image
      src={LOGO_URL}
      alt=""
      className={`${className} shrink-0 overflow-hidden rounded-[22%]`}
    />
  );
}