export const APP_URL = "https://app.wayoratour.com";

// Bakendi appsins (Supabase). Opinberi lykillinn er ekki leyndarmál — hann
// birtist líka í appinu sjálfu og les aðeins það sem öllum er heimilt.
export const SUPABASE_URL = "https://fjkonavbsxckejnzhftm.supabase.co";
export const SUPABASE_KEY = "sb_publishable_rD2vAaoNsddrmpnf81hX2w_cI1Kl9Uz";

export const subscribeUrl = (plan) => `${APP_URL}/subscribe?plan=${plan}`;

export const HERO_VIDEO_URL =
  "/hero.mp4";

export const HERO_POSTER =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80";

// Valdar ferðir á forsíðunni (raunverulegar ferðir í appinu, í þessari röð).
// Skiptu um auðkenni hér til að sýna aðrar ferðir.
export const FEATURED_TOUR_IDS = [
  "4ca365f85daa13c4de91ea8d1677e453", // Náttúruhamfarir í Grindavík
  "6ab3380a6c9952786cf22a57", // The Golden Circle Day Tour
  "6ab3380a6c9952786cf22a55", // Reykjanestá: The Coast and the Lighthouse
  "6ab3380a6c9952786cf22a54", // Hidden Reykjavík
  "6ab3380a6c9952786cf22a53", // Geothermal Wonders of Reykjanes
  "6ab3380a6c9952786cf22a56", // Reykjavík Food Walk
];
