export interface MenuItem {
  id: string;
  name: string;
  category: "all" | "specialty" | "cold-brew" | "traditional" | "bakes";
  tag?: string;
  description: string;
  originNotes: string;
  price: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  avatar: string;
  quote: string;
  favoriteItem: string;
}

export interface AmbienceSpace {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "solkadhi-coldbrew",
    name: "Solkadhi Cold Brew",
    category: "cold-brew",
    tag: "Signature",
    description: "Slow-steeped 18hr Chikmagalur roast cut with natural kokum infusion, finished with a chilled coastal coconut cream float.",
    originNotes: "Tart kokum • Dark cocoa • Silky coconut",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "coconut-jaggery-latte",
    name: "Coconut Jaggery Latte",
    category: "specialty",
    tag: "Popular",
    description: "Double ristretto over fresh steamed coconut cream milk and unrefined organic palm jaggery from coastal Ratnagiri orchards.",
    originNotes: "Caramelized palm • Velvety roast • Vanilla",
    price: "₹260",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "ratnagiri-estate-pourover",
    name: "Ratnagiri Estate Pour Over",
    category: "specialty",
    tag: "Micro-Lot",
    description: "Single-origin washed Arabica from high elevation Western Ghats, hand-dripped over Hario V60 for crisp clarity.",
    originNotes: "Bergamot • Wild berries • Honey blossom finish",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "coastal-filter-kaapi",
    name: "Coastal Filter Kaapi",
    category: "traditional",
    tag: "Classic",
    description: "Heritage 80:20 plantation roast decoction frothed by hand in pure hammered brass dabara with whole creamy milk.",
    originNotes: "Roasted chicory • Toasted hazelnut • Rich crema",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "malvani-spiced-tart",
    name: "Warm Malvani Spiced Tart",
    category: "bakes",
    tag: "Fresh Bake",
    description: "Grated coastal coconut caramelized with nutmeg, whole green cardamom and roasted cashews in a flaky all-butter shell.",
    originNotes: "Golden cashew • Crushed cardamom • Butter crust",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85",
  },
];

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
    badge: "Coastal Sanctuary",
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

export const TESTIMONIALS: Review[] = [
  {
    id: "rev-1",
    name: "Sneha Patil",
    role: "Architect & Designer",
    location: "Kala Ghoda, Mumbai",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "The Solkadhi Cold Brew is an absolute revelation. Never experienced coffee with such crisp coastal balance and refreshing aroma.",
    favoriteItem: "Solkadhi Cold Brew",
  },
  {
    id: "rev-2",
    name: "Aniket Kulkarni",
    role: "Author & Journalist",
    location: "Koregaon Park, Pune",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Walking into this cafe feels like finding shelter in a heritage Konkan villa on a stormy afternoon. The Coconut Jaggery Latte is unmatched.",
    favoriteItem: "Coconut Jaggery Latte",
  },
  {
    id: "rev-3",
    name: "Priya Merchant",
    role: "Creative Director",
    location: "Panjim, Goa",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    quote: "My quintessential morning ritual. The brass filter kaapi has the exact frothy richness my grandmother used to brew in Malvan.",
    favoriteItem: "Coastal Filter Kaapi",
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
    caption: "Golden hour at the Kala Ghoda brew bar counter.",
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
