export interface KonkanIngredient {
  id: string;
  name: string;
  origin: string;
  useCase: string;
  description: string;
  image: string;
}

export const KONKAN_INGREDIENTS: KonkanIngredient[] = [
  {
    id: "ing-1",
    name: "Wild Kokum (कोकम)",
    origin: "Coastal orchards of Sindhudurg & Ratnagiri",
    useCase: "Steeped cold brews, tangy summer coolers, and digestive spritzes.",
    description: "Sun-dried fruit rinds that release a deep ruby hue and tart, quenching acidity.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ing-2",
    name: "Kolhapur Organic Jaggery (गूळ)",
    origin: "Cane farms across the Panchganga river basin",
    useCase: "Sweetens espresso lattes, spiced kadha, and artisanal brownies.",
    description: "Unrefined, naturally mineral-rich sugarcane golden blocks with rich caramel and smoky notes.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ing-3",
    name: "Konkan Cashews (काजू)",
    origin: "Wild groves spanning the Vengurla coastal belt",
    useCase: "House stone-ground cashew milk, fudgy brownies, and savoury upma.",
    description: "Hand-harvested jumbo nuts offering natural sweetness and a buttery mouthfeel.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ing-4",
    name: "Coastal Coconut (नारळ)",
    origin: "Freshly harvested daily from coastal groves",
    useCase: "Fresh cold-pressed milk in lattes, poha bowls, and our signature modak tart.",
    description: "Freshly grated kernel giving gentle coconut creaminess without overpowering delicate roasts.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ing-5",
    name: "Ratnagiri Alphonso (हापूस)",
    origin: "Sun-drenched red laterite soil orchards of Ratnagiri",
    useCase: "Seasonal mango shakes, layered cheesecakes, and monsoon preserves.",
    description: "The crown jewel of Konkan fruits—unmatched fragrance, rich sweetness, and vibrant gold hue.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
  },
];
