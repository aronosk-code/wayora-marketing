export const APP_URL = "https://app.wayoratour.com";

// Placeholders until the company is registered — fill these in once the ehf. exists.
export const COMPANY = {
  name: "Wayora",
  id: "[company ID / kennitala]",
  address: "[address], Iceland",
  vat: "[VAT number]",
};

// Switch to the business email (e.g. hello@wayoratour.com) once it exists.
export const CONTACT_EMAIL = "wayoraaa@gmail.com";

export const subscribeUrl = (plan) => `${APP_URL}/subscribe?plan=${plan}`;

export const HERO_VIDEO_URL =
  "https://media.base44.com/videos/public/6ad5627944e69b6847343e56/4e1cbe62f_Hero_Video.mp4";

export const HERO_POSTER =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80";

export const TOURS = [
  {
    id: "south-coast",
    city: "Iceland",
    duration: "2h 15m",
    distance: "128 km",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "canals",
    city: "Venice",
    duration: "45m",
    distance: "3.2 km",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "alpine",
    city: "The Alps",
    duration: "3h 40m",
    distance: "210 km",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "harbour",
    city: "Reykjavik",
    duration: "1h 30m",
    distance: "18 km",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bridges",
    city: "Amsterdam",
    duration: "1h 05m",
    distance: "4.6 km",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cliffs",
    city: "Algarve",
    duration: "1h 10m",
    distance: "5.4 km",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
];