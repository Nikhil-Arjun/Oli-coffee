export interface AmbienceSpace {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const VALUE_PROPOSITIONS = [
  {
    title: "Thoughtful Selection",
    description: "Single-origin micro-lots directly traded with shade-grown estates nestled along the humid Western Ghats.",
    badge: "100% Traceable",
    icon: "Coffee",
  },
  {
    title: "Master Craftsmanship",
    description: "Manual pour-overs, siphon extraction, and slow drip brewing calibrated daily to seasonal humidity and rain.",
    badge: "Precision Brewed",
    icon: "Sparkles",
  },
  {
    title: "A Place to Unwind",
    description: "Raw red terracotta tiles, coastal cane textures, rain playlists, and quiet reading alcoves that welcome you home.",
    badge: "Coastal Setting",
    icon: "HeartHandshake",
  },
];

export const AMBIENCE_SPACES: AmbienceSpace[] = [
  {
    title: "Warm Corners",
    description: "Handcrafted cane chairs, soft amber glow, and acoustic nooks designed for reading while rain taps on the glass.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85",
    tag: "Quiet Zone",
  },
  {
    title: "Brew Station",
    description: "Witness siphon towers, custom Slayer espresso bars, and pour-over carafes calibrated by our award-winning baristas.",
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=900&q=85",
    tag: "Live Brewing",
  },
  {
    title: "Open Skies",
    description: "Glass atrium dining with potted tropical ferns, monsoon drizzle views, and gentle natural ocean breezes.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85",
    tag: "Verandah",
  },
];

export const GALLERY_PHOTOS = [
  {
    id: "g1",
    caption: "The morning pour: Silk smooth microfoam on our single estate roast.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85",
    likes: "1.4k",
  },
  {
    id: "g2",
    caption: "Golden hour at the Rajarampuri brew bar counter.",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=85",
    likes: "2.8k",
  },
  {
    id: "g3",
    caption: "Rainy afternoons, steaming pour-overs, and timeless conversations.",
    image: "https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=800&q=85",
    likes: "3.1k",
  },
];
