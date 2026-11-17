import { APP_STORE_URL, APP_URL, PLAY_STORE_URL } from "@/lib/siteConfig";

// ── HVERT „SÆKJA APPIÐ" FER ──
// iPhone/iPad → App Store og Android → Google Play, þegar appið er komið þangað.
// Tölva (og símar á meðan engin verslun er skráð) → vefappið app.wayoratour.com.
export function devicePlatform(ua = typeof navigator !== "undefined" ? navigator.userAgent : "", touch = typeof navigator !== "undefined" ? navigator.maxTouchPoints : 0) {
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  // iPad með iPadOS segist vera Mac — en Mac er ekki með snertiskjá
  if (/Macintosh/i.test(ua) && touch > 1) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

export function appLink(platform = devicePlatform(), stores = { ios: APP_STORE_URL, android: PLAY_STORE_URL }) {
  if (platform === "ios" && stores.ios) return stores.ios;
  if (platform === "android" && stores.android) return stores.android;
  return APP_URL;
}
