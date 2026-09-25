export interface FounderInfo {
  name: string;
  role: string;
  photo: string;
  quote: string;
  story: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  favoriteDrink: string;
}

export interface CafeValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const FOUNDER_DATA: FounderInfo = {
  name: "Tanvi Sawant",
  role: "Founder & Head of Roasting",
  photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  quote:
    "“Oli means that soft, rain-soaked feeling in Marathi. We wanted a café that honors our Konkan soil, seasonal rainfall, and slow conversations.”",
  story:
    "Raised between the lush spice groves of Sawantwadi and the historic lanes of Kolhapur, Tanvi spent a decade working in specialty coffee before returning to build an everyday coffee bar in Rajarampuri.",
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Rohan",
    role: "Head Barista",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    favoriteDrink: "Kokum Citrus Cold Brew",
  },
  {
    id: "team-2",
    name: "Aaditi",
    role: "Pastry & Bakes Lead",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    favoriteDrink: "Ukadiche Modak Tart + Filter Kaapi",
  },
  {
    id: "team-3",
    name: "Omkar",
    role: "Roast Master",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    favoriteDrink: "Coconut Jaggery Latte",
  },
];

export const CAFE_VALUES: CafeValue[] = [
  {
    id: "val-1",
    title: "Local First",
    description: "Every bean, coconut, block of jaggery, and basket of cashew is sourced directly from smallholder farms in Maharashtra and the Konkan.",
    icon: "Wheat",
  },
  {
    id: "val-2",
    title: "Slow Hospitality",
    description: "No rushing tables. Whether you sit for thirty minutes with a notebook or four hours with friends, our space is yours.",
    icon: "HeartHandshake",
  },
  {
    id: "val-3",
    title: "Less Waste",
    description: "Used coffee grounds nourish local compost gardens, milk cartons are recycled, and we serve strictly in terracotta and glass.",
    icon: "Leaf",
  },
];

export const SPACE_AMENITIES = [
  { name: "High-speed Wi-Fi", detail: "Dedicated 150 Mbps line", icon: "Wifi" },
  { name: "Plug Points at Every Table", detail: "Power up your devices effortlessly", icon: "Zap" },
  { name: "Family & Community Seating", detail: "Spacious wooden sharing tables", icon: "Users" },
  { name: "Pet-Friendly Outdoor Deck", detail: "Water bowls & shady rain awnings", icon: "Dog" },
];
